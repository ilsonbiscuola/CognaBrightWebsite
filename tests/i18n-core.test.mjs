import assert from 'node:assert/strict';
import test from 'node:test';

await import('../i18n/core.js');
const i18n = globalThis.CognaBrightI18n;

function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key) => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: (key) => values.delete(key),
    value: (key) => values.get(key)
  };
}

test('supports exactly the nine approved locales', () => {
  assert.deepEqual(i18n.SUPPORTED_LOCALES, [
    'en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'
  ]);
});

test('direct country mappings select the required locale', () => {
  const expected = {
    BR: 'pt-BR', AU: 'en-AU', US: 'en-US', DK: 'da-DK', FR: 'fr-FR',
    DE: 'de-DE', IT: 'it-IT', ES: 'es-ES', SE: 'sv-SE'
  };
  for (const [country, locale] of Object.entries(expected)) assert.equal(i18n.localeForCountry(country), locale);
  assert.equal(i18n.localeForCountry('CA'), null);
});

test('browser variants map to the nearest supported locale', () => {
  const expected = {
    'fr-CA': 'fr-FR', 'fr-BE': 'fr-FR', 'de-AT': 'de-DE', 'de-CH': 'de-DE',
    'es-MX': 'es-ES', 'es-AR': 'es-ES', 'pt-PT': 'pt-BR', 'it-CH': 'it-IT',
    'en-GB': 'en-AU', 'en-US': 'en-US'
  };
  for (const [language, locale] of Object.entries(expected)) assert.equal(i18n.matchBrowserLanguage(language), locale);
  assert.equal(i18n.resolveBrowserLocale(['zz-ZZ', 'fr-CA']), 'fr-FR');
  assert.equal(i18n.resolveBrowserLocale([]), 'en-AU');
});

test('explicit preference overrides country and browser language', () => {
  assert.equal(i18n.resolveLocale({ preference: 'en-AU', country: 'BR', browserLanguages: ['pt-BR'] }), 'en-AU');
  assert.equal(i18n.resolveLocale({ preference: 'fr-FR', country: 'US', browserLanguages: ['en-US'] }), 'fr-FR');
  assert.equal(i18n.resolveLocale({ preference: 'bad', country: 'BR', browserLanguages: ['en-US'] }), 'pt-BR');
});

test('preference storage validates values and tolerates unavailable storage', () => {
  const store = storage({ cognabright_locale: 'pt-BR' });
  assert.equal(i18n.getLocalePreference(store), 'pt-BR');
  assert.equal(i18n.setLocalePreference(store, 'sv-SE'), true);
  assert.equal(store.value('cognabright_locale'), 'sv-SE');
  assert.equal(i18n.setLocalePreference(store, 'nl-NL'), false);
  assert.equal(i18n.getLocalePreference(storage({ cognabright_locale: 'corrupt' })), null);
  const throwing = { getItem() { throw new Error('disabled'); }, setItem() { throw new Error('disabled'); } };
  assert.equal(i18n.getLocalePreference(throwing), null);
  assert.equal(i18n.setLocalePreference(throwing, 'en-AU'), false);
});

test('geo cache accepts valid entries and rejects expired, corrupt, and invalid timestamps', () => {
  const now = 1_800_000_000_000;
  const validStore = storage();
  assert.equal(i18n.setCachedCountry(validStore, 'br', now), true);
  assert.deepEqual(i18n.getCachedCountry(validStore, now + 1000), {
    country: 'BR', detectedAt: now, expiresAt: now + i18n.GEO_TTL_MS
  });
  assert.equal(i18n.getCachedCountry(validStore, now + i18n.GEO_TTL_MS), null);
  assert.equal(i18n.getCachedCountry(storage({ cognabright_geo: '{bad' }), now), null);
  assert.equal(i18n.getCachedCountry(storage({
    cognabright_geo: JSON.stringify({ country: 'BR', detectedAt: now + 100, expiresAt: now + i18n.GEO_TTL_MS + 100 })
  }), now), null);
  assert.equal(i18n.getCachedCountry(storage({
    cognabright_geo: JSON.stringify({ country: 'BRA', detectedAt: now, expiresAt: now + i18n.GEO_TTL_MS })
  }), now), null);
});

test('country detection handles success and service failure without throwing', async () => {
  const success = await i18n.detectCountry(async () => ({ ok: true, json: async () => ({ country: 'fr' }) }));
  assert.equal(success, 'FR');
  assert.equal(await i18n.detectCountry(async () => { throw new Error('offline'); }), null);
  assert.equal(await i18n.detectCountry(async () => ({ ok: false, json: async () => ({}) })), null);
  assert.equal(await i18n.detectCountry(async () => ({ ok: true, json: async () => ({ country: 'invalid' }) })), null);
});

test('central detector de-duplicates calls within a page lifetime', async () => {
  let calls = 0;
  const fetchImpl = async () => {
    calls++;
    return { ok: true, json: async () => ({ country: 'AU' }) };
  };
  const [first, second] = await Promise.all([
    i18n.detectCountryOnce(fetchImpl),
    i18n.detectCountryOnce(fetchImpl)
  ]);
  assert.equal(first, 'AU');
  assert.equal(second, 'AU');
  assert.equal(calls, 1);
});
