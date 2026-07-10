const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 20_000;

function sendJson(response, status, body) {
  response.status(status).json(body);
}

function clean(value, maxLength) {
  return String(value ?? '').trim().slice(0, maxLength);
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return sendJson(response, 405, { error: 'Method not allowed.' });
  }

  const contentLength = Number(request.headers['content-length'] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return sendJson(response, 413, { error: 'Request is too large.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('Missing required server environment variables.');
    return sendJson(response, 500, { error: 'The interest form is not configured yet.' });
  }

  const body = request.body && typeof request.body === 'object' ? request.body : {};

  // Honeypot: bots often fill fields hidden from human users.
  if (clean(body.website, 200)) {
    return sendJson(response, 200, { ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const role = clean(body.role, 120);
  const country = clean(body.country, 120);
  const message = clean(body.message, 2000);
  const consentUpdates = body.consent_updates === true;

  if (!name || !email) {
    return sendJson(response, 400, { error: 'Name and email are required.' });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return sendJson(response, 400, { error: 'Please enter a valid email address.' });
  }

  const row = {
    name,
    email,
    role,
    country,
    message,
    consent_updates: consentUpdates,
    source: 'cognabright.com'
  };

  try {
    const upstream = await fetch(`${supabaseUrl}/rest/v1/web_interest_submissions`, {
      method: 'POST',
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(row)
    });

    if (!upstream.ok) {
      const details = await upstream.text();
      console.error('Supabase insert failed:', upstream.status, details);
      return sendJson(response, 502, { error: 'Unable to save your interest right now. Please try again later.' });
    }

    return sendJson(response, 201, { ok: true });
  } catch (error) {
    console.error('Interest API failed:', error);
    return sendJson(response, 500, { error: 'Unable to submit your interest right now. Please try again later.' });
  }
}
