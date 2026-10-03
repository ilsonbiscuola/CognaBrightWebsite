<?php
declare(strict_types=1);

// Public account-deletion requests reuse the server-only website enquiry RPC
// (same private table and database-enforced rate limit as the contact form),
// tagged so the support team can find them. The response never depends on
// whether an account exists, so it cannot be used to enumerate accounts.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'");
header('Referrer-Policy: no-referrer');
header('X-Content-Type-Options: nosniff');
header('X-Robots-Tag: noindex');

const MAX_BODY_BYTES = 12000;
const REQUEST_SUBJECT = 'Account deletion request';
const REQUEST_SOURCE = 'cognabright.com/delete-account';
const SUPPORTED_LOCALES = ['en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'];

function send_json(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text(mixed $value, int $maxLength): string
{
    $text = trim(is_scalar($value) ? (string)$value : '');
    return function_exists('mb_substr') ? mb_substr($text, 0, $maxLength, 'UTF-8') : substr($text, 0, $maxLength);
}

function load_config(): array
{
    $configuredPath = getenv('COGNABRIGHT_CONFIG_PATH') ?: '';
    $documentRoot = rtrim((string)($_SERVER['DOCUMENT_ROOT'] ?? ''), DIRECTORY_SEPARATOR);
    $paths = array_filter([
        $configuredPath,
        $documentRoot !== '' ? dirname($documentRoot) . DIRECTORY_SEPARATOR . 'cognabright-config.php' : ''
    ]);
    foreach ($paths as $path) {
        if (!is_file($path)) continue;
        $loaded = require $path;
        if (is_array($loaded)) return $loaded;
    }
    return [];
}

function get_secret_value(array $config, string $envName, string $configName): string
{
    $envValue = getenv($envName);
    if (is_string($envValue) && trim($envValue) !== '') return trim($envValue);
    $configValue = $config[$configName] ?? '';
    return is_string($configValue) ? trim($configValue) : '';
}

function origin_allowed(): bool
{
    $origin = clean_text($_SERVER['HTTP_ORIGIN'] ?? '', 300);
    if ($origin === '') return true;
    $configured = clean_text(getenv('SITE_ORIGIN') ?: '', 300);
    return in_array($origin, array_filter([
        'https://cognabright.com',
        'https://www.cognabright.com',
        $configured
    ]), true);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    send_json(405, ['error' => 'method_not_allowed']);
}
if (!origin_allowed()) send_json(403, ['error' => 'origin_not_allowed']);
if (!str_starts_with(strtolower((string)($_SERVER['CONTENT_TYPE'] ?? '')), 'application/json')) {
    send_json(415, ['error' => 'unsupported_content_type']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BODY_BYTES) send_json(413, ['error' => 'request_too_large']);

$rawBody = file_get_contents('php://input', false, null, 0, MAX_BODY_BYTES + 1);
$body = is_string($rawBody) && strlen($rawBody) <= MAX_BODY_BYTES ? json_decode($rawBody, true) : null;
if (!is_array($body)) send_json(400, ['error' => 'invalid_request']);

// Honeypot and too-fast submissions receive the ordinary success response.
if (clean_text($body['website'] ?? '', 200) !== '') send_json(202, ['ok' => true]);
if (!is_numeric($body['form_elapsed_ms'] ?? null) || (int)$body['form_elapsed_ms'] < 1500) send_json(202, ['ok' => true]);

$email = strtolower(clean_text($body['email'] ?? '', 254));
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) send_json(400, ['error' => 'invalid_email']);
$name = clean_text($body['name'] ?? '', 120);
$message = clean_text($body['message'] ?? '', 2000);
$locale = in_array($body['locale'] ?? null, SUPPORTED_LOCALES, true) ? $body['locale'] : 'en-AU';

$config = load_config();
$supabaseUrl = rtrim(get_secret_value($config, 'SUPABASE_URL', 'supabase_url'), '/');
$supabaseSecretKey = get_secret_value($config, 'SUPABASE_SECRET_KEY', 'supabase_secret_key');
if ($supabaseSecretKey === '') {
    $supabaseSecretKey = get_secret_value($config, 'SUPABASE_SERVICE_ROLE_KEY', 'supabase_service_role_key');
}
if ($supabaseUrl === '' || $supabaseSecretKey === '' || !function_exists('curl_init')) {
    error_log('CognaBright account deletion request: server configuration unavailable.');
    send_json(503, ['error' => 'unavailable']);
}

$forwarded = clean_text($_SERVER['HTTP_X_FORWARDED_FOR'] ?? '', 500);
$ip = trim(explode(',', $forwarded)[0] ?? '') ?: clean_text($_SERVER['REMOTE_ADDR'] ?? 'unknown', 100);
$userAgent = clean_text($_SERVER['HTTP_USER_AGENT'] ?? '', 300);

$payload = [
    'p_request_hash' => hash_hmac('sha256', $ip . '|' . $userAgent, $supabaseSecretKey),
    'p_enquiry_type' => 'general',
    'p_name' => $name !== '' ? $name : 'Not provided',
    'p_email' => $email,
    'p_organisation_name' => null,
    'p_organisation_type' => null,
    'p_role' => null,
    'p_country' => null,
    'p_partnership_interest' => REQUEST_SUBJECT,
    'p_message' => REQUEST_SUBJECT . ' (page language: ' . $locale . ')' . ($message !== '' ? "\n\n" . $message : ''),
    'p_consent_updates' => false,
    'p_source' => REQUEST_SOURCE,
];

$headers = ['apikey: ' . $supabaseSecretKey, 'Content-Type: application/json'];
if (str_starts_with($supabaseSecretKey, 'eyJ')) $headers[] = 'Authorization: Bearer ' . $supabaseSecretKey;

$curl = curl_init($supabaseUrl . '/rest/v1/rpc/web_submit_partnership_enquiry');
if ($curl === false) send_json(502, ['error' => 'unavailable']);
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 8,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
]);
$responseBody = curl_exec($curl);
$statusCode = (int)curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
    // Log only the status: the request contains personal information.
    error_log(sprintf('CognaBright account deletion request failed. HTTP=%d', $statusCode));
    if ($statusCode === 429 || (is_string($responseBody) && str_contains($responseBody, 'rate_limit_exceeded'))) {
        send_json(429, ['error' => 'rate_limited']);
    }
    send_json(502, ['error' => 'unavailable']);
}
send_json(202, ['ok' => true]);
