const COUNTRY_HEADERS = ['x-vercel-ip-country', 'cf-ipcountry', 'x-country-code'];

export default function handler(request, response) {
  let country = null;
  for (const name of COUNTRY_HEADERS) {
    const candidate = String(request.headers[name] || '').trim().toUpperCase();
    if (/^[A-Z]{2}$/.test(candidate) && candidate !== 'XX') {
      country = candidate;
      break;
    }
  }
  response.setHeader('Cache-Control', 'private, no-store, max-age=0');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.status(200).json({ country });
}
