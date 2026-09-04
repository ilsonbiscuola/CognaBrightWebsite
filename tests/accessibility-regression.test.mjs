import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const css = readFileSync(new URL('../styles.css', import.meta.url), 'utf8');
const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../contact.html', import.meta.url), 'utf8');
const platform = readFileSync(new URL('../platform.html', import.meta.url), 'utf8');
const pages = [
  'index.html', 'research.html', 'organisations.html', 'families.html', 'platform.html',
  'evidence.html', 'about.html', 'contact.html', 'privacy.html', 'terms.html', 'subscription-terms.html',
  'accessibility.html', 'pricing.html'
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

test('normal text colours retain WCAG AAA enhanced contrast', () => {
  for (const foreground of ['#0b2765', '#3d526f', '#06575f', '#064b91']) {
    for (const background of ['#ffffff', '#f1f8ff', '#e8f8f5', '#fff9e9']) {
      assert.ok(contrast(foreground, background) >= 7, `${foreground} on ${background} must provide at least 7:1 contrast`);
    }
  }
  for (const colour of ['#053f7b', '#05545b', '#12552d', '#176338', '#a12c22']) {
    assert.ok(contrast(colour, '#ffffff') >= 7, `${colour} on white must provide at least 7:1 contrast`);
  }
});

test('interactive controls expose robust mobile target sizes', () => {
  assert.match(css, /\.logo-wrap\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  assert.match(css, /\.nav a\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  assert.match(css, /\.link-list a\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  assert.match(css, /\.footer-links a\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px/s);
  assert.match(css, /\.button-sm\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.menu-toggle\s*\{[^}]*min-height:\s*48px/s);
  assert.match(css, /\.mobile-panel \.mobile-auth-actions a\s*\{[^}]*min-height:\s*50px/s);
  assert.match(css, /input, select, textarea\s*\{[^}]*min-height:\s*52px/s);
});

test('focus indicators retain a two-colour ring across light and dark surfaces', () => {
  assert.match(css, /\*:focus-visible\s*\{[^}]*outline:\s*3px solid #fff;[^}]*box-shadow:\s*0 0 0 7px var\(--ink\)/s);
});

test('long-form content uses a readable measure and increased paragraph separation', () => {
  assert.match(css, /\.prose\s*\{[^}]*max-width:\s*70ch/s);
  assert.match(css, /\.prose p \+ p\s*\{[^}]*margin-top:\s*2\.4em/s);
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
  assert.match(script, /lang="\$\{locale\}" data-locale="\$\{locale\}"/);
  assert.match(css, /\.language-check\s*\{[^}]*visibility:\s*hidden/s);
  assert.match(css, /\.language-option\[aria-checked="true"\] \.language-check\s*\{[^}]*visibility:\s*visible/s);
  assert.doesNotMatch(css, /\.footer-language/);
});

test('content sections have headings and required fields are visibly identified', () => {
  assert.match(platform, /<h2>Support for the routines that make up a day\.<\/h2>/);
  assert.match(contact, /<h2 class="visually-hidden">Contact us<\/h2>/);
  assert.match(contact, /Fields marked \* are required\./);
  assert.equal((contact.match(/class="required-marker"/g) ?? []).length, 5);
  assert.match(contact, /data-form-message[^>]*><\/p>/);
});

test('all primary pages retain a responsive viewport and one main landmark', () => {
  for (const page of pages) {
    const html = readFileSync(new URL(`../${page}`, import.meta.url), 'utf8');
    assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, `${page} should contain one main element`);
  }
});
