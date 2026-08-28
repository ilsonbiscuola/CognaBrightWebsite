import assert from 'node:assert/strict';
import test from 'node:test';
import handler from '../api/country.js';

function invoke(headers) {
  const responseHeaders = {};
  let status = null;
  let body = null;
  handler({ headers }, {
    setHeader(name, value) { responseHeaders[name] = value; },
    status(value) { status = value; return this; },
    json(value) { body = value; }
  });
  return { responseHeaders, status, body };
}

test('country endpoint uses coarse CDN country headers only', () => {
  assert.deepEqual(invoke({ 'x-vercel-ip-country': 'br' }).body, { country: 'BR' });
  assert.deepEqual(invoke({ 'cf-ipcountry': 'fr' }).body, { country: 'FR' });
  assert.deepEqual(invoke({ 'x-country-code': 'AU' }).body, { country: 'AU' });
  assert.deepEqual(invoke({ 'x-vercel-ip-country': 'XX' }).body, { country: null });
  assert.deepEqual(invoke({ 'x-vercel-ip-country': 'BRA' }).body, { country: null });
});

test('country endpoint prevents shared caching and never returns an IP address', () => {
  const result = invoke({ 'x-vercel-ip-country': 'US', 'x-forwarded-for': '203.0.113.7' });
  assert.equal(result.status, 200);
  assert.equal(result.responseHeaders['Cache-Control'], 'private, no-store, max-age=0');
  assert.deepEqual(Object.keys(result.body), ['country']);
  assert.doesNotMatch(JSON.stringify(result.body), /203\.0\.113\.7/);
});
