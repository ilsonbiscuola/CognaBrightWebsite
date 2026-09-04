import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import test from 'node:test';

const locales = ['en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'];
const pages = [
  'index', 'research', 'organisations', 'pilots', 'platform', 'evidence',
  'about', 'contact', 'privacy', 'terms', 'subscription-terms', 'accessibility', 'pricing', 'families', 'professionals', 'features'
];

async function loadLocale(locale) {
  const source = await readFile(new URL(`../i18n/locales/${locale}.js`, import.meta.url), 'utf8');
  const context = {};
  context.globalThis = context;
  runInNewContext(source, context);
  return context.CognaBrightLocales[locale];
}

function visibleValues(html) {
  const withoutCode = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  const values = [];
  for (const match of withoutCode.matchAll(/>([^<]+)</g)) {
    const value = match[1].replace(/\s+/g, ' ').trim();
    if (value && value !== '©' && !/^\d+$/.test(value)) values.push(value);
  }
  for (const match of withoutCode.matchAll(/(?:aria-label|placeholder|alt)="([^"]*)"/g)) {
    if (match[1]) values.push(match[1]);
  }
  for (const match of withoutCode.matchAll(/<meta\s+name="description"\s+content="([^"]+)"/gi)) values.push(match[1]);
  return values;
}

test('every locale has complete, non-placeholder key coverage', async () => {
  const resources = await Promise.all(locales.map(loadLocale));
  const canonicalKeys = Object.keys(resources[0].messages).sort();
  assert.ok(canonicalKeys.length >= 340, 'expected the complete public-site catalogue');
  for (const resource of resources) {
    assert.deepEqual(Object.keys(resource.messages).sort(), canonicalKeys, `${resource.locale}: key mismatch`);
    for (const [key, value] of Object.entries(resource.messages)) {
      assert.equal(typeof value, 'string', `${resource.locale}:${key}`);
      assert.ok(value.trim(), `${resource.locale}:${key} is empty`);
      assert.doesNotMatch(value, /(?<![\p{L}\p{N}])(?:TODO|TRANSLATE|MISSING|TBD)(?![\p{L}\p{N}])/u, `${resource.locale}:${key}`);
      assert.match(value, /CognaBright|^(?!.*Cogna)/, `${resource.locale}:${key} altered the brand`);
    }
  }
});

test('all visible source strings, metadata, alt text, and accessible names are catalogued', async () => {
  const canonical = await loadLocale('en-AU');
  const values = new Set(Object.values(canonical.messages));
  for (const page of pages) {
    const html = await readFile(new URL(`../${page}.html`, import.meta.url), 'utf8');
    for (const value of visibleValues(html)) assert.ok(values.has(value), `${page}.html: uncatalogued text: ${value}`);
    assert.match(html, /i18n\/core\.js/);
    assert.match(html, /i18n\/locales\/en-AU\.js/);
    assert.match(html, /i18n\/boot\.js/);
  }
});

test('runtime exposes all selectors, document metadata, and locale-aware asset handling', async () => {
  const source = await readFile(new URL('../script.js', import.meta.url), 'utf8');
  assert.match(source, /desktop-language-menu/);
  assert.match(source, /mobile-language-menu/);
  assert.doesNotMatch(source, /footer-language-menu|footer-language/);
  assert.match(source, /document\.documentElement\.lang = activeLocale/);
  assert.match(source, /CognaBrightLocale/);
  assert.match(source, /localizedAsset/);
  assert.match(source, /!boot\.preference && !boot\.cachedGeo/);
  assert.doesNotMatch(source, /location\.(?:assign|replace)|window\.location\s*=/);
});

test('only language-neutral rendered assets are shipped', async () => {
  const build = await readFile(new URL('../scripts/build.mjs', import.meta.url), 'utf8');
  assert.match(build, /'logo\.png', 'mother-son-goals\.png'/);
  assert.match(build, /join\(root, 'assets', 'flags'\).*recursive:\s*true/s);
  assert.doesNotMatch(build, /cp\(join\(root, 'assets'\), join\(output, 'assets'\)/);
  for (const page of pages) {
    const html = await readFile(new URL(`../${page}.html`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /brand-presentation|website-preview/);
  }
});
