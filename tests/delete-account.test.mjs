import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import handler, { buildDeletionRequest } from '../api/account-deletion.js';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const html = read('delete-account.html');
const locales = ['en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'];
const translatedLocales = locales.filter((locale) => !locale.startsWith('en-'));

function loadLocale(locale) {
  const context = {};
  context.globalThis = context;
  runInNewContext(read(`i18n/locales/${locale}.js`), context);
  return context.CognaBrightLocales[locale].messages;
}

const canonical = loadLocale('en-AU');
const pageKeys = Object.keys(canonical).filter((key) => key.startsWith('delete-account.') || key === 'common.footer.deleteAccount');
const runtimeKeys = [...read('script.js').matchAll(/'(delete-account\.[\w.-]+)'/g)].map((match) => match[1]);

test('page is a public, indexable, canonical production route', () => {
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.cognabright\.com\/delete-account">/);
  assert.match(html, /<meta property="og:url" content="https:\/\/www\.cognabright\.com\/delete-account">/);
  assert.match(html, /<title>Delete your CognaBright account \| CognaBright<\/title>/);
  assert.match(html, /<meta name="description" content="Learn how to delete your CognaBright account or request account deletion if you can no longer access the app\.">/);
  assert.doesNotMatch(html, /noindex|http-equiv="refresh"|location\.(?:replace|assign)/i, 'no redirect or login gate before the instructions');
  assert.match(html, /<body data-page="delete-account">/);
  assert.match(read('sitemap.xml'), /https:\/\/www\.cognabright\.com\/delete-account/);
  assert.match(read('scripts/build.mjs'), /'delete-account\.html'/);
});

test('clean URL and API routes resolve on both Vercel and Apache/cPanel', () => {
  const vercel = JSON.parse(read('vercel.json'));
  assert.equal(vercel.cleanUrls, true);
  assert.ok(vercel.rewrites.some((rule) => rule.source === '/api/account-deletion.php' && rule.destination === '/api/account-deletion'));
  const htaccess = read('htaccess');
  assert.match(htaccess, /RewriteCond %\{DOCUMENT_ROOT\}\/\$1\.html -f\s+RewriteRule \^\(\.\+\?\)\/\?\$ \$1\.html \[L\]/);
  assert.doesNotMatch(htaccess, /RewriteRule \^delete-account[^\n]*\[R=/, 'the canonical route itself must not redirect');
  assert.ok(!vercel.redirects.some((rule) => rule.source === '/delete-account'), 'no Vercel redirect away from the canonical route');
  // Legacy rules must not loop with the pilots.html -> families.html stub.
  assert.doesNotMatch(htaccess, /\^families[^\n]*\/pilots/);
  assert.doesNotMatch(htaccess, /\^pricing[^\n]*\/contact/);
});

test('page has one h1, ordered h2 sections, a main landmark and a responsive viewport', () => {
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.doesNotMatch(html, /<h[3-6]\b/, 'no skipped heading levels');
  const headings = [...html.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)].map((match) => match[1]);
  assert.deepEqual(headings, [
    'Deleting data inside the CognaBright app',
    'Request account deletion',
    'What happens when your account is deleted',
    'Subscriptions are cancelled separately',
    'Information we may need to keep',
    'Organisation accounts',
    'Questions and support'
  ]);
  assert.equal((html.match(/<main\b/g) ?? []).length, 1);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.match(html, /class="menu-toggle"[^>]*data-menu-toggle/, 'mobile navigation is present');
});

test('in-app instructions match the real Profile privacy controls without inventing a Delete account button', () => {
  assert.match(html, /<li>Open Profile and choose the child\.<\/li>/);
  assert.match(html, /<li>In Privacy and deletion, select Delete all data for that child\.<\/li>/);
  assert.match(html, /Your Parent account, Family workspace and subscription stay available\./);
  assert.match(html, /Deleting a whole CognaBright account is done by request/);
  assert.doesNotMatch(html, /Profile\s*(?:→|&rarr;|>)\s*Delete account/);
});

test('deletion form collects only the minimum and is accessibly labelled', () => {
  const form = html.match(/<form data-deletion-form[\s\S]*?<\/form>/)[0];
  assert.match(form, /data-endpoint="\.\/api\/account-deletion\.php"/);
  const names = [...form.matchAll(/<(?:input|textarea|select)[^>]*name="([^"]+)"/g)].map((match) => match[1]).sort();
  assert.deepEqual(names, ['email', 'message', 'name', 'website']);
  assert.doesNotMatch(form, /type="password"|name="(?:password|otp|mfa|code|child[^"]*|dob|diagnos[^"]*)"/i);
  for (const id of ['deletion_email', 'deletion_name', 'deletion_message']) {
    assert.match(form, new RegExp(`<label for="${id}">`), `${id} has a label`);
    assert.match(form, new RegExp(`id="${id}"`));
  }
  assert.match(form, /id="deletion_email" name="email" type="email" autocomplete="email" maxlength="254" required aria-describedby="deletion_email-help deletion_email-error"/);
  assert.match(form, /<p class="field-error" id="deletion_email-error" data-field-error><\/p>/);
  assert.match(form, /data-form-message tabindex="-1" role="status" aria-live="polite"/);
  assert.match(form, /<button class="button button-primary" type="submit">Request account deletion<\/button>/);
  assert.match(form, /Fields marked \* are required\./);
  assert.match(html, /mailto:developer@cognabright\.com\?subject=Account%20deletion%20request/);
});

test('required legal and support links point at production pages', () => {
  for (const target of ['./privacy.html', './terms.html', './subscription-terms.html', './contact.html?type=general']) {
    assert.ok(html.includes(`href="${target}"`), `missing ${target}`);
  }
  for (const page of ['index', 'privacy', 'terms', 'contact', 'pricing']) {
    assert.match(read(`${page}.html`), /<a href="\.\/delete-account\.html">Delete account<\/a>/, `${page}.html footer link`);
  }
});

test('page and deletion runtime contain no staging, test or localhost URLs', () => {
  const combined = [html, read('api/account-deletion.js'), read('api/account-deletion.php')].join('\n');
  assert.doesNotMatch(combined, /localhost|127\.0\.0\.1|staging|vercel\.app|\/\/[\w.-]+\.test\b|example\.com/i);
  assert.doesNotMatch(combined, /revenuecat|rc_|pay\.rev\.cat/i);
});

test('every supported locale has translated, non-empty copy for the page', () => {
  assert.ok(pageKeys.length >= 55, 'expected the full page catalogue');
  for (const key of runtimeKeys) assert.ok(pageKeys.includes(key), `runtime key ${key} is catalogued`);
  const identicalAllowed = new Set(['delete-account.request.link1', 'delete-account.footer.legal', 'delete-account.form.deletion_message.label']);
  for (const locale of locales) {
    const messages = loadLocale(locale);
    for (const key of pageKeys) {
      assert.equal(typeof messages[key], 'string', `${locale}:${key} missing`);
      assert.ok(messages[key].trim(), `${locale}:${key} empty`);
      assert.notEqual(messages[key], key, `${locale}:${key} shows a raw key`);
    }
    assert.match(messages['delete-account.hero.title'], /CognaBright/);
    assert.match(messages['delete-account.form.messages.unavailable'], /developer@cognabright\.com/);
  }
  for (const locale of translatedLocales) {
    const messages = loadLocale(locale);
    for (const key of pageKeys) {
      if (identicalAllowed.has(key)) continue;
      assert.notEqual(messages[key], canonical[key], `${locale}:${key} falls back to English`);
    }
  }
  const american = loadLocale('en-US');
  assert.match(american['delete-account.subscriptions.heading1'], /canceled/);
  assert.match(american['delete-account.organisations.heading1'], /Organization/);
});

test('success copy never confirms that an account exists', () => {
  for (const locale of locales) {
    const success = loadLocale(locale)['delete-account.form.messages.success'];
    assert.doesNotMatch(success, /\b(?:your account (?:has been|was|will be) deleted|account found|no account)\b/i, locale);
  }
  assert.match(canonical['delete-account.form.messages.success'], /If an account matches the details you provided/);
});

test('request payload keeps only minimal, tagged information', () => {
  const hash = 'a'.repeat(64);
  const { rpcBody } = buildDeletionRequest({ email: ' Parent@Example.org ', locale: 'pt-BR', child: 'x', password: 'secret' }, hash);
  assert.equal(rpcBody.p_email, 'parent@example.org');
  assert.equal(rpcBody.p_name, 'Not provided');
  assert.equal(rpcBody.p_enquiry_type, 'general');
  assert.equal(rpcBody.p_partnership_interest, 'Account deletion request');
  assert.equal(rpcBody.p_source, 'cognabright.com/delete-account');
  assert.match(rpcBody.p_message, /^Account deletion request \(page language: pt-BR\)$/);
  assert.doesNotMatch(JSON.stringify(rpcBody), /secret|"x"/);
  assert.equal(buildDeletionRequest({ email: 'not-an-email' }, hash).error, 'invalid_email');
  assert.equal(buildDeletionRequest({ email: 'a@b.co', locale: '<script>' }, hash).rpcBody.p_message, 'Account deletion request (page language: en-AU)');
});

function mockResponse() {
  return {
    statusCode: 0, body: null, headers: {},
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    status(code) { this.statusCode = code; return this; },
    json(body) { this.body = body; return this; }
  };
}

function mockRequest(body, overrides = {}) {
  return {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://www.cognabright.com', 'user-agent': 'test', ...overrides.headers },
    socket: { remoteAddress: '203.0.113.9' },
    body,
    ...overrides.request
  };
}

async function withServer(fetchImpl, run) {
  const saved = { fetch: globalThis.fetch, url: process.env.SUPABASE_URL, key: process.env.SUPABASE_SECRET_KEY, error: console.error };
  const logged = [];
  globalThis.fetch = fetchImpl;
  process.env.SUPABASE_URL = 'https://project.supabase.co';
  process.env.SUPABASE_SECRET_KEY = 'sb_secret_test';
  console.error = (...args) => logged.push(args.join(' '));
  try {
    await run(logged);
  } finally {
    globalThis.fetch = saved.fetch;
    process.env.SUPABASE_URL = saved.url;
    process.env.SUPABASE_SECRET_KEY = saved.key;
    if (saved.url === undefined) delete process.env.SUPABASE_URL;
    if (saved.key === undefined) delete process.env.SUPABASE_SECRET_KEY;
    console.error = saved.error;
  }
}

test('server accepts valid requests with the same neutral response and no account lookup', async () => {
  const calls = [];
  await withServer(async (url, init) => { calls.push({ url, body: JSON.parse(init.body) }); return new Response('"id"', { status: 200 }); }, async () => {
    for (const email of ['known@example.org', 'unknown@example.org']) {
      const response = mockResponse();
      await handler(mockRequest({ email, form_elapsed_ms: 5000 }), response);
      assert.equal(response.statusCode, 202);
      assert.deepEqual(response.body, { ok: true });
      assert.equal(response.headers['cache-control'], 'no-store');
    }
  });
  assert.equal(calls.length, 2);
  for (const call of calls) {
    assert.match(call.url, /\/rest\/v1\/rpc\/web_submit_partnership_enquiry$/);
    assert.equal(call.body.p_request_hash.length, 64);
  }
});

test('server validates input, rejects foreign origins and hides upstream details', async () => {
  let upstreamCalls = 0;
  await withServer(async () => { upstreamCalls++; return new Response('{"message":"rate_limit_exceeded parent@example.org"}', { status: 429 }); }, async (logged) => {
    const invalid = mockResponse();
    await handler(mockRequest({ email: 'nope', form_elapsed_ms: 5000 }), invalid);
    assert.equal(invalid.statusCode, 400);

    const foreign = mockResponse();
    await handler(mockRequest({ email: 'a@b.co', form_elapsed_ms: 5000 }, { headers: { origin: 'https://evil.example' } }), foreign);
    assert.equal(foreign.statusCode, 403);

    const get = mockResponse();
    await handler(mockRequest(null, { request: { method: 'GET' } }), get);
    assert.equal(get.statusCode, 405);

    const bot = mockResponse();
    await handler(mockRequest({ email: 'a@b.co', website: 'spam', form_elapsed_ms: 5000 }), bot);
    assert.equal(bot.statusCode, 202);

    const limited = mockResponse();
    await handler(mockRequest({ email: 'parent@example.org', form_elapsed_ms: 5000 }), limited);
    assert.equal(limited.statusCode, 429);
    assert.deepEqual(limited.body, { error: 'rate_limited' });
    assert.ok(logged.every((line) => !line.includes('parent@example.org')), 'email is never logged');
  });
  assert.equal(upstreamCalls, 1, 'only the valid, human submission reaches the database');
});

test('client handler never logs form values and handles all response states', () => {
  const script = read('script.js');
  const start = script.indexOf('function setupDeletionForm');
  const block = script.slice(start, script.indexOf('async function initialise'));
  assert.ok(start > 0);
  assert.doesNotMatch(block, /console\./);
  for (const key of ['emailRequired', 'messages.sending', 'messages.success', 'messages.rateLimited', 'messages.unavailable']) {
    assert.ok(block.includes(key), `handles ${key}`);
  }
  assert.match(block, /aria-invalid/);
  assert.match(block, /cognabright:localechange/);
});
