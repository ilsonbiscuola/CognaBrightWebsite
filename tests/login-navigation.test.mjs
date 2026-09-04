import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const runtime = readFileSync(new URL('../script.js', import.meta.url), 'utf8');

const pages = [
  'index.html',
  'research.html',
  'organisations.html',
  'families.html',
  'platform.html',
  'evidence.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'terms.html',
  'subscription-terms.html',
  'accessibility.html',
  'pricing.html'
];

test('every public page exposes distinct desktop and mobile sign-in and sign-up links to the real combined auth page', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    const signInLinks = html.match(/data-app-auth="sign-in"/g) ?? [];
    const signUpLinks = html.match(/data-app-auth="signup"/g) ?? [];
    assert.equal(signInLinks.length, 2, `${page} should contain desktop and mobile sign-in links`);
    assert.equal(signUpLinks.length, 2, `${page} should contain desktop and mobile sign-up links`);
    // Every [data-app-auth] element must resolve to the real combined page.
    // (pricing.html legitimately has additional "Get CognaBright" CTAs
    // pointing at the same URL outside the header, so this only checks the
    // header/mobile-panel auth links themselves, not a page-wide count.)
    const taggedAuthLinks = html.match(/<a[^>]*\bdata-app-auth="(?:sign-in|signup)"[^>]*>/g) ?? [];
    assert.equal(taggedAuthLinks.length, 4, `${page} should have 4 data-app-auth links`);
    for (const tag of taggedAuthLinks) {
      assert.match(tag, /href="https:\/\/app\.cognabright\.com\/sign-in"/, `${page}: ${tag} has the wrong href`);
    }
    assert.doesNotMatch(html, /localhost:5173/, `${page}: no leftover dev-preview auth URL`);
    assert.doesNotMatch(html, /href="https:\/\/app\.cognabright\.com\/signup"/, `${page}: there is no separate /signup route`);
  }
});

test('public pages do not point at a staging app hostname', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /https:\/\/staging-app\.cognabright\.com/);
  }
});

test('private-network previews keep authentication on the same device host', () => {
  assert.match(runtime, /setupAuthenticationLinks/);
  assert.match(runtime, /PRODUCTION_APP_SIGN_IN_URL\s*=\s*'https:\/\/app\.cognabright\.com\/sign-in'/);
  assert.match(runtime, /\^192\\\.168\\\./);
  assert.match(runtime, /\^172\\\.\(1\[6-9\]\|2\\d\|3\[01\]\)\\\./);
  assert.match(runtime, /`http:\/\/\$\{hostname === '::1' \? '\[::1\]' : hostname\}:5173\/sign-in`/);
});
