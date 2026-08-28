import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const runtime = readFileSync(new URL('../script.js', import.meta.url), 'utf8');

const pages = [
  'index.html',
  'research.html',
  'organisations.html',
  'pilots.html',
  'platform.html',
  'evidence.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'accessibility.html'
];

test('every public page exposes distinct desktop and mobile sign-in and sign-up links', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    const signInLinks = html.match(/data-app-auth="sign-in"/g) ?? [];
    const signUpLinks = html.match(/data-app-auth="signup"/g) ?? [];
    assert.equal(signInLinks.length, 2, `${page} should contain desktop and mobile sign-in links`);
    assert.equal(signUpLinks.length, 2, `${page} should contain desktop and mobile sign-up links`);
    assert.match(html, /href="http:\/\/localhost:5173\/sign-in"/);
    assert.match(html, /href="http:\/\/localhost:5173\/signup"/);
    assert.doesNotMatch(html, /href="http:\/\/localhost:5173\/app"/);
  }
});

test('public pages contain no production or staging app hostname', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /https:\/\/(?:staging-)?app\.cognabright\.com/);
  }
});

test('private-network previews keep authentication on the same device host', () => {
  assert.match(runtime, /setupLocalAuthenticationLinks/);
  assert.match(runtime, /\^192\\\.168\\\./);
  assert.match(runtime, /\^172\\\.\(1\[6-9\]\|2\\d\|3\[01\]\)\\\./);
  assert.match(runtime, /`http:\/\/\$\{hostname === '::1' \? '\[::1\]' : hostname\}:5173`/);
});
