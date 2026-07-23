<?php
declare(strict_types=1);

/**
 * Cogna Bright public interest form endpoint.
 *
 * Browser -> /api/interest.php -> Supabase
 *
 * Secrets are loaded server-side only from:
 * 1) Environment variables, or
 * 2) ../cognabright-config.php outside public_html.
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

const MAX_BODY_BYTES = 20000;
const RATE_LIMIT_WINDOW_SECONDS = 600; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function send_json(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text(mixed $value, int $maxLength): string
{
    $text = trim((string)($value ?? ''));
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }
    return substr($text, 0, $maxLength);
}

function load_config(): array
{
    $config = [];

    $configuredPath = getenv('COGNABRIGHT_CONFIG_PATH') ?: '';
    if ($configuredPath !== '' && is_file($configuredPath)) {
        $loaded = require $configuredPath;
        if (is_array($loaded)) {
            $config = $loaded;
        }
    }

    if ($config === []) {
        $documentRoot = rtrim((string)($_SERVER['DOCUMENT_ROOT'] ?? ''), DIRECTORY_SEPARATOR);
        if ($documentRoot !== '') {
            $defaultPath = dirname($documentRoot) . DIRECTORY_SEPARATOR . 'cognabright-config.php';
            if (is_file($defaultPath)) {
                $loaded = require $defaultPath;
                if (is_array($loaded)) {
                    $config = $loaded;
                }
            }
        }
    }

    return $config;
}

function get_secret_value(array $config, string $envName, string $configName): string
{
    $envValue = getenv($envName);
    if (is_string($envValue) && trim($envValue) !== '') {
        return trim($envValue);
    }

    $configValue = $config[$configName] ?? '';
    return is_string($configValue) ? trim($configValue) : '';
}

function enforce_basic_rate_limit(): void
{
    $ip = clean_text($_SERVER['REMOTE_ADDR'] ?? 'unknown', 100);
    $key = hash('sha256', $ip);
    $file = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'cognabright_rate_' . $key . '.json';
    $now = time();
    $data = ['window_started_at' => $now, 'count' => 0];

    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        return; // Fail open if temporary file storage is unavailable.
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            return;
        }

        $contents = stream_get_contents($handle);
        if (is_string($contents) && $contents !== '') {
            $decoded = json_decode($contents, true);
            if (is_array($decoded)) {
                $data = array_merge($data, $decoded);
            }
        }

        $windowStartedAt = (int)($data['window_started_at'] ?? $now);
        $count = (int)($data['count'] ?? 0);

        if (($now - $windowStartedAt) >= RATE_LIMIT_WINDOW_SECONDS) {
            $windowStartedAt = $now;
            $count = 0;
        }

        if ($count >= RATE_LIMIT_MAX_REQUESTS) {
            flock($handle, LOCK_UN);
            fclose($handle);
            send_json(429, ['error' => 'Too many submissions. Please wait a few minutes and try again.']);
        }

        $count++;
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, json_encode([
            'window_started_at' => $windowStartedAt,
            'count' => $count,
        ]));
        fflush($handle);
        flock($handle, LOCK_UN);
    } finally {
        if (is_resource($handle)) {
            fclose($handle);
        }
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    send_json(405, ['error' => 'Method not allowed.']);
}

$contentLength = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($contentLength > MAX_BODY_BYTES) {
    send_json(413, ['error' => 'Request is too large.']);
}

enforce_basic_rate_limit();

$rawBody = file_get_contents('php://input');
if (!is_string($rawBody) || $rawBody === '') {
    send_json(400, ['error' => 'Invalid request body.']);
}

$body = json_decode($rawBody, true);
if (!is_array($body)) {
    send_json(400, ['error' => 'Invalid JSON request.']);
}

// Honeypot: real users never fill this hidden field.
if (clean_text($body['website'] ?? '', 200) !== '') {
    send_json(200, ['ok' => true]);
}

$name = clean_text($body['name'] ?? '', 120);
$email = strtolower(clean_text($body['email'] ?? '', 254));
$role = clean_text($body['role'] ?? '', 120);
$country = clean_text($body['country'] ?? '', 120);
$message = clean_text($body['message'] ?? '', 2000);
$consentUpdates = ($body['consent_updates'] ?? false) === true;

if ($name === '' || $email === '') {
    send_json(400, ['error' => 'Name and email are required.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_json(400, ['error' => 'Please enter a valid email address.']);
}

$config = load_config();
$supabaseUrl = rtrim(get_secret_value($config, 'SUPABASE_URL', 'supabase_url'), '/');

// Prefer the newer Supabase secret key variable name.
$supabaseSecretKey = get_secret_value($config, 'SUPABASE_SECRET_KEY', 'supabase_secret_key');
if ($supabaseSecretKey === '') {
    // Backward-compatible fallback for legacy service-role naming.
    $supabaseSecretKey = get_secret_value($config, 'SUPABASE_SERVICE_ROLE_KEY', 'supabase_service_role_key');
}

if ($supabaseUrl === '' || $supabaseSecretKey === '') {
    error_log('Cogna Bright interest form: missing Supabase server configuration.');
    send_json(500, ['error' => 'The interest form is not configured yet.']);
}

$row = [
    'name' => $name,
    'email' => $email,
    'role' => $role,
    'country' => $country,
    'message' => $message,
    'consent_updates' => $consentUpdates,
    'source' => 'cognabright.com',
];

if (!function_exists('curl_init')) {
    error_log('Cogna Bright interest form: PHP cURL extension is unavailable.');
    send_json(500, ['error' => 'The interest form is temporarily unavailable.']);
}

$endpoint = $supabaseUrl . '/rest/v1/web_interest_submissions';
$curl = curl_init($endpoint);

if ($curl === false) {
    send_json(500, ['error' => 'Unable to submit your interest right now. Please try again later.']);
}

// Supabase's modern sb_secret_ keys are API keys, not JWTs.
// Send them in the apikey header only. Legacy service_role JWTs can also use
// Authorization: Bearer, so we add that header only when the key looks like a JWT.
$httpHeaders = [
    'apikey: ' . $supabaseSecretKey,
    'Content-Type: application/json',
    'Prefer: return=minimal',
];

if (str_starts_with($supabaseSecretKey, 'eyJ')) {
    $httpHeaders[] = 'Authorization: Bearer ' . $supabaseSecretKey;
}

curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 8,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => $httpHeaders,
    CURLOPT_POSTFIELDS => json_encode($row, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
]);

$responseBody = curl_exec($curl);
$statusCode = (int)curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curlError = curl_error($curl);
curl_close($curl);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
    error_log(sprintf(
        'Cogna Bright Supabase insert failed. HTTP=%d cURL=%s Response=%s',
        $statusCode,
        $curlError,
        is_string($responseBody) ? $responseBody : ''
    ));

    send_json(502, ['error' => 'Unable to save your interest right now. Please try again later.']);
}

send_json(201, ['ok' => true]);
