<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header("Content-Security-Policy: default-src 'none'; frame-ancestors 'none'");
header('Referrer-Policy: no-referrer');
header('X-Content-Type-Options: nosniff');

const MAX_BODY_BYTES = 24000;
const ALLOWED_ENQUIRY_TYPES = ['research', 'organisation', 'pilot', 'general'];
const ALLOWED_ORGANISATION_TYPES = ['', 'university', 'disability', 'allied_health', 'education', 'community', 'provider', 'family', 'other'];

function send_json(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text(mixed $value, int $maxLength): string
{
    $text = trim((string)($value ?? ''));
    return function_exists('mb_substr') ? mb_substr($text, 0, $maxLength, 'UTF-8') : substr($text, 0, $maxLength);
}

function load_config(): array
{
    $config = [];
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
    return $config;
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
    send_json(405, ['error' => 'Method not allowed.']);
}
if (!origin_allowed()) send_json(403, ['error' => 'Request origin is not allowed.']);
if (!str_starts_with(strtolower((string)($_SERVER['CONTENT_TYPE'] ?? '')), 'application/json')) {
    send_json(415, ['error' => 'Content type must be application/json.']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BODY_BYTES) send_json(413, ['error' => 'Request is too large.']);

$rawBody = file_get_contents('php://input');
$body = is_string($rawBody) ? json_decode($rawBody, true) : null;
if (!is_array($body)) send_json(400, ['error' => 'Invalid JSON request.']);
if (clean_text($body['website'] ?? '', 200) !== '') send_json(200, ['ok' => true]);
if (!is_numeric($body['form_elapsed_ms'] ?? null) || (int)$body['form_elapsed_ms'] < 1500) {
    send_json(400, ['error' => 'Please review the form and try again.']);
}

$enquiryType = clean_text($body['enquiry_type'] ?? '', 40);
$name = clean_text($body['name'] ?? '', 120);
$email = strtolower(clean_text($body['email'] ?? '', 254));
$organisationName = clean_text($body['organisation_name'] ?? '', 160);
$organisationType = clean_text($body['organisation_type'] ?? '', 60);
$role = clean_text($body['role'] ?? '', 120);
$country = clean_text($body['country'] ?? '', 120);
$partnershipInterest = clean_text($body['partnership_interest'] ?? '', 240);
$message = clean_text($body['message'] ?? '', 3000);
$privacyConsent = ($body['privacy_consent'] ?? false) === true;
$consentUpdates = ($body['consent_updates'] ?? false) === true;

if (!in_array($enquiryType, ALLOWED_ENQUIRY_TYPES, true)) send_json(400, ['error' => 'Select a valid enquiry type.']);
if ($name === '' || $email === '' || $partnershipInterest === '') send_json(400, ['error' => 'Name, email and area of interest are required.']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) send_json(400, ['error' => 'Enter a valid email address.']);
if (!in_array($organisationType, ALLOWED_ORGANISATION_TYPES, true)) send_json(400, ['error' => 'Select a valid organisation type.']);
if (!$privacyConsent) send_json(400, ['error' => 'Privacy consent is required.']);

$config = load_config();
$supabaseUrl = rtrim(get_secret_value($config, 'SUPABASE_URL', 'supabase_url'), '/');
$supabaseSecretKey = get_secret_value($config, 'SUPABASE_SECRET_KEY', 'supabase_secret_key');
if ($supabaseSecretKey === '') {
    $supabaseSecretKey = get_secret_value($config, 'SUPABASE_SERVICE_ROLE_KEY', 'supabase_service_role_key');
}
if ($supabaseUrl === '' || $supabaseSecretKey === '') {
    error_log('Cogna Bright partnership form: missing Supabase server configuration.');
    send_json(500, ['error' => 'The partnership form is not configured yet.']);
}
if (!function_exists('curl_init')) send_json(500, ['error' => 'The partnership form is temporarily unavailable.']);

$forwarded = clean_text($_SERVER['HTTP_X_FORWARDED_FOR'] ?? '', 500);
$ip = trim(explode(',', $forwarded)[0] ?? '') ?: clean_text($_SERVER['REMOTE_ADDR'] ?? 'unknown', 100);
$userAgent = clean_text($_SERVER['HTTP_USER_AGENT'] ?? '', 300);
$requestHash = hash_hmac('sha256', $ip . '|' . $userAgent, $supabaseSecretKey);

$payload = [
    'p_request_hash' => $requestHash,
    'p_enquiry_type' => $enquiryType,
    'p_name' => $name,
    'p_email' => $email,
    'p_organisation_name' => $organisationName !== '' ? $organisationName : null,
    'p_organisation_type' => $organisationType !== '' ? $organisationType : null,
    'p_role' => $role !== '' ? $role : null,
    'p_country' => $country !== '' ? $country : null,
    'p_partnership_interest' => $partnershipInterest,
    'p_message' => $message !== '' ? $message : null,
    'p_consent_updates' => $consentUpdates,
    'p_source' => 'cognabright.com',
];

$headers = ['apikey: ' . $supabaseSecretKey, 'Content-Type: application/json'];
if (str_starts_with($supabaseSecretKey, 'eyJ')) $headers[] = 'Authorization: Bearer ' . $supabaseSecretKey;

$curl = curl_init($supabaseUrl . '/rest/v1/rpc/web_submit_partnership_enquiry');
if ($curl === false) send_json(500, ['error' => 'Unable to send your enquiry right now.']);
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
$curlError = curl_error($curl);
curl_close($curl);

if ($responseBody === false || $statusCode < 200 || $statusCode >= 300) {
    error_log(sprintf('Cogna Bright partnership enquiry failed. HTTP=%d cURL=%s Response=%s', $statusCode, $curlError, is_string($responseBody) ? $responseBody : ''));
    if ($statusCode === 429 || (is_string($responseBody) && str_contains($responseBody, 'rate_limit_exceeded'))) {
        send_json(429, ['error' => 'Too many submissions. Please wait before trying again.']);
    }
    send_json(502, ['error' => 'Unable to save your enquiry right now. Please try again later.']);
}
send_json(201, ['ok' => true]);
