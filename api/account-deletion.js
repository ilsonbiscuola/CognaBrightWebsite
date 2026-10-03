import { createHmac } from 'node:crypto';

// Public account-deletion requests reuse the server-only website enquiry RPC
// (same private table and database-enforced rate limit as the contact form),
// tagged so the support team can find them. The response never depends on
// whether an account exists, so it cannot be used to enumerate accounts.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 12_000;
const REQUEST_SUBJECT = 'Account deletion request';
const REQUEST_SOURCE = 'cognabright.com/delete-account';
const SUPPORTED_LOCALES = new Set(['en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE']);

function sendJson(response, status, body) {
  response.status(status).json(body);
}

function clean(value, maxLength) {
  return String(value ?? '').trim().slice(0, maxLength);
}

function firstForwardedAddress(request) {
  return clean(request.headers['x-forwarded-for'], 500).split(',')[0].trim()
    || clean(request.socket?.remoteAddress, 100)
    || 'unknown';
}

function requestHash(request, secret) {
  const material = `${firstForwardedAddress(request)}|${clean(request.headers['user-agent'], 300)}`;
  return createHmac('sha256', secret).update(material).digest('hex');
}

function originAllowed(request) {
  const origin = clean(request.headers.origin, 300);
  if (!origin) return true;
  const configured = clean(process.env.SITE_ORIGIN, 300);
  const allowed = new Set([
    'https://cognabright.com',
    'https://www.cognabright.com',
    configured
  ].filter(Boolean));
  return allowed.has(origin);
}

export function buildDeletionRequest(body, hash) {
  const email = clean(body.email, 254).toLowerCase();
  if (!EMAIL_PATTERN.test(email)) return { error: 'invalid_email' };
  const name = clean(body.name, 120);
  const message = clean(body.message, 2000);
  const locale = SUPPORTED_LOCALES.has(body.locale) ? body.locale : 'en-AU';
  return {
    rpcBody: {
      p_request_hash: hash,
      p_enquiry_type: 'general',
      p_name: name || 'Not provided',
      p_email: email,
      p_organisation_name: null,
      p_organisation_type: null,
      p_role: null,
      p_country: null,
      p_partnership_interest: REQUEST_SUBJECT,
      p_message: `${REQUEST_SUBJECT} (page language: ${locale})${message ? `\n\n${message}` : ''}`,
      p_consent_updates: false,
      p_source: REQUEST_SOURCE
    }
  };
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");
  response.setHeader('Referrer-Policy', 'no-referrer');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('X-Robots-Tag', 'noindex');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'method_not_allowed' });
  }
  if (!originAllowed(request)) return sendJson(response, 403, { error: 'origin_not_allowed' });
  if (!String(request.headers['content-type'] || '').toLowerCase().startsWith('application/json')) {
    return sendJson(response, 415, { error: 'unsupported_content_type' });
  }
  if (Number(request.headers['content-length'] || 0) > MAX_BODY_BYTES) {
    return sendJson(response, 413, { error: 'request_too_large' });
  }

  const supabaseUrl = clean(process.env.SUPABASE_URL, 500).replace(/\/+$/, '');
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseSecretKey) {
    console.error('Account deletion request: missing server configuration.');
    return sendJson(response, 503, { error: 'unavailable' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  // Honeypot and too-fast submissions receive the ordinary success response.
  if (clean(body.website, 200)) return sendJson(response, 202, { ok: true });
  const formElapsedMs = Number(body.form_elapsed_ms || 0);
  if (!Number.isFinite(formElapsedMs) || formElapsedMs < 1500) return sendJson(response, 202, { ok: true });

  const built = buildDeletionRequest(body, requestHash(request, supabaseSecretKey));
  if (built.error) return sendJson(response, 400, { error: built.error });

  const headers = { apikey: supabaseSecretKey, 'Content-Type': 'application/json' };
  if (supabaseSecretKey.startsWith('eyJ')) headers.Authorization = `Bearer ${supabaseSecretKey}`;

  try {
    const upstream = await fetch(`${supabaseUrl}/rest/v1/rpc/web_submit_partnership_enquiry`, {
      method: 'POST',
      headers,
      body: JSON.stringify(built.rpcBody)
    });
    if (!upstream.ok) {
      const details = await upstream.text();
      // Log only the status: the request contains personal information.
      console.error('Account deletion request RPC failed:', upstream.status);
      if (upstream.status === 429 || details.includes('rate_limit_exceeded')) {
        return sendJson(response, 429, { error: 'rate_limited' });
      }
      return sendJson(response, 502, { error: 'unavailable' });
    }
    return sendJson(response, 202, { ok: true });
  } catch {
    console.error('Account deletion request API failed.');
    return sendJson(response, 502, { error: 'unavailable' });
  }
}
