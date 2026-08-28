<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: private, no-store, max-age=0');

$headers = ['HTTP_CF_IPCOUNTRY', 'HTTP_X_VERCEL_IP_COUNTRY', 'HTTP_X_COUNTRY_CODE', 'GEOIP_COUNTRY_CODE'];
$country = null;
foreach ($headers as $header) {
    $candidate = strtoupper(trim((string) ($_SERVER[$header] ?? '')));
    if (preg_match('/^[A-Z]{2}$/', $candidate) === 1 && $candidate !== 'XX') {
        $country = $candidate;
        break;
    }
}
echo json_encode(['country' => $country], JSON_UNESCAPED_SLASHES);
