import { createHmac } from 'node:crypto';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 24_000;
const ALLOWED_ENQUIRY_TYPES = new Set(['research', 'organisation', 'pilot', 'general']);
const ALLOWED_ORGANISATION_TYPES = new Set([
  '', 'university', 'disability', 'allied_health', 'education', 'community', 'provider', 'family', 'other'
]);

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

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");
  response.setHeader('Referrer-Policy', 'no-referrer');
  response.setHeader('X-Content-Type-Options', 'nosniff');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'Method not allowed.' });
  }
  if (!originAllowed(request)) return sendJson(response, 403, { error: 'Request origin is not allowed.' });
  if (!String(request.headers['content-type'] || '').toLowerCase().startsWith('application/json')) {
    return sendJson(response, 415, { error: 'Content type must be application/json.' });
  }

  const contentLength = Number(request.headers['content-length'] || 0);
  if (contentLength > MAX_BODY_BYTES) return sendJson(response, 413, { error: 'Request is too large.' });

  const supabaseUrl = clean(process.env.SUPABASE_URL, 500).replace(/\/+$/, '');
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !supabaseSecretKey) {
    console.error('Missing required server environment variables.');
    return sendJson(response, 500, { error: 'The partnership form is not configured yet.' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  if (clean(body.website, 200)) return sendJson(response, 200, { ok: true });

  const formElapsedMs = Number(body.form_elapsed_ms || 0);
  if (!Number.isFinite(formElapsedMs) || formElapsedMs < 1500) {
    return sendJson(response, 400, { error: 'Please review the form and try again.' });
  }

  const enquiryType = clean(body.enquiry_type, 40);
  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const organisationName = clean(body.organisation_name, 160);
  const organisationType = clean(body.organisation_type, 60);
  const role = clean(body.role, 120);
  const country = clean(body.country, 120);
  const partnershipInterest = clean(body.partnership_interest, 240);
  const message = clean(body.message, 3000);
  const privacyConsent = body.privacy_consent === true;
  const consentUpdates = body.consent_updates === true;

  if (!ALLOWED_ENQUIRY_TYPES.has(enquiryType)) return sendJson(response, 400, { error: 'Select a valid enquiry type.' });
  if (!name || !email || !partnershipInterest) {
    return sendJson(response, 400, { error: 'Name, email and area of interest are required.' });
  }
  if (!EMAIL_PATTERN.test(email)) return sendJson(response, 400, { error: 'Enter a valid email address.' });
  if (!ALLOWED_ORGANISATION_TYPES.has(organisationType)) {
    return sendJson(response, 400, { error: 'Select a valid organisation type.' });
  }
  if (!privacyConsent) return sendJson(response, 400, { error: 'Privacy consent is required.' });

  const rpcBody = {
    p_request_hash: requestHash(request, supabaseSecretKey),
    p_enquiry_type: enquiryType,
    p_name: name,
    p_email: email,
    p_organisation_name: organisationName || null,
    p_organisation_type: organisationType || null,
    p_role: role || null,
    p_country: country || null,
    p_partnership_interest: partnershipInterest,
    p_message: message || null,
    p_consent_updates: consentUpdates,
    p_source: 'cognabright.com'
  };

  const headers = {
    apikey: supabaseSecretKey,
    'Content-Type': 'application/json'
  };
  if (supabaseSecretKey.startsWith('eyJ')) headers.Authorization = `Bearer ${supabaseSecretKey}`;

  try {
    const upstream = await fetch(`${supabaseUrl}/rest/v1/rpc/web_submit_partnership_enquiry`, {
      method: 'POST',
      headers,
      body: JSON.stringify(rpcBody)
    });
    if (!upstream.ok) {
      const details = await upstream.text();
      console.error('Partnership enquiry RPC failed:', upstream.status, details);
      if (upstream.status === 429 || details.includes('rate_limit_exceeded')) {
        return sendJson(response, 429, { error: 'Too many submissions. Please wait before trying again.' });
      }
      return sendJson(response, 502, { error: 'Unable to save your enquiry right now. Please try again later.' });
    }
    return sendJson(response, 201, { ok: true });
  } catch (error) {
    console.error('Partnership enquiry API failed:', error);
    return sendJson(response, 500, { error: 'Unable to send your enquiry right now. Please try again later.' });
  }
}
