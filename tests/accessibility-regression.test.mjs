import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
const pages = [
  'index.html', 'research.html', 'organisations.html', 'pilots.html', 'platform.html',
  'evidence.html', 'about.html', 'contact.html', 'privacy.html', 'accessibility.html'
];

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test('primary action colours retain WCAG AA text contrast against white', () => {
  for (const colour of ['#075bb5', '#087a83', '#0753a4', '#076b72', '#075ab3', '#176338']) {
    assert.ok(contrast(colour, '#ffffff') >= 4.5, `${colour} must provide at least 4.5:1 contrast`);
  }
});

test('interactive controls expose robust mobile target sizes', () => {
  assert.match(css, /\.button-sm\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.menu-toggle\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.mobile-panel \.mobile-auth-actions a\s*\{[^}]*min-height:\s*50px/s);
  assert.match(css, /input, select, textarea\s*\{[^}]*min-height:\s*52px/s);
});

test('contact form remains centred within its responsive container', () => {
  assert.match(css, /\.form-card\s*\{[^}]*max-width:\s*900px;[^}]*margin-inline:\s*auto/s);
});

test('mobile menu supports outside click, Escape and responsive cleanup', () => {
  assert.match(script, /!panel\.contains\(event\.target\) && !toggle\.contains\(event\.target\)/);
  assert.match(script, /event\.key === 'Escape' && !panel\.hidden/);
  assert.match(script, /\(min-width: 1281px\)/);
});

test('language selector pairs decorative country flags with native language names', () => {
  for (const country of ['au', 'us', 'br', 'dk', 'fr', 'de', 'it', 'es', 'se']) {
    assert.ok(script.includes(`./assets/flags/${country}.svg`), `selector should include the ${country.toUpperCase()} flag asset`);
    assert.ok(existsSync(new URL(`../assets/flags/${country}.svg`, import.meta.url)), `${country.toUpperCase()} flag asset should exist`);
  }
  assert.match(script, /class="language-flag"[^>]*alt="" aria-hidden="true"/);
  assert.match(script, /data-language-flag[^>]*alt="" aria-hidden="true"/);
  assert.match(script, /class="language-option-label"/);
  assert.match(script, /LOCALE_NAMES\[locale\]/);
  assert.match(css, /\.language-check\s*\{[^}]*visibility:\s*hidden/s);
  assert.match(css, /\.language-option\[aria-checked="true"\] \.language-check\s*\{[^}]*visibility:\s*visible/s);
  assert.doesNotMatch(css, /\.footer-language/);
});

test('all primary pages retain a responsive viewport and one main landmark', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${page} should contain one main element`);
  }
});
