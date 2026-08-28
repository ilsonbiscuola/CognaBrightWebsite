(function (root) {
  'use strict';

  const SUPPORTED_LOCALES = Object.freeze([
    'en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'
  ]);
  const COUNTRY_LOCALES = Object.freeze({
    BR: 'pt-BR', AU: 'en-AU', US: 'en-US', DK: 'da-DK', FR: 'fr-FR',
    DE: 'de-DE', IT: 'it-IT', ES: 'es-ES', SE: 'sv-SE'
  });
  const LANGUAGE_LOCALES = Object.freeze({
    pt: 'pt-BR', da: 'da-DK', fr: 'fr-FR', de: 'de-DE', it: 'it-IT',
    es: 'es-ES', sv: 'sv-SE'
  });
  const LOCALE_KEY = 'cognabright_locale';
  const GEO_KEY = 'cognabright_geo';
  const GEO_TTL_MS = 7 * 24 * 60 * 60 * 1000;
  let countryRequest = null;

  function isSupportedLocale(value) {
    return typeof value === 'string' && SUPPORTED_LOCALES.includes(value);
  }

  function normaliseCountry(value) {
    if (typeof value !== 'string') return null;
    const country = value.trim().toUpperCase();
    return /^[A-Z]{2}$/.test(country) ? country : null;
  }

  function matchBrowserLanguage(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const normalised = value.trim().replace('_', '-');
    const exact = SUPPORTED_LOCALES.find((locale) => locale.toLowerCase() === normalised.toLowerCase());
    if (exact) return exact;
    const language = normalised.split('-')[0].toLowerCase();
    if (language === 'en') return 'en-AU';
    return LANGUAGE_LOCALES[language] || null;
  }

  function resolveBrowserLocale(languages) {
    const candidates = Array.isArray(languages) ? languages : [];
    for (const candidate of candidates) {
      const locale = matchBrowserLanguage(candidate);
      if (locale) return locale;
    }
    return 'en-AU';
  }

  function localeForCountry(country) {
    const normalised = normaliseCountry(country);
    return normalised ? COUNTRY_LOCALES[normalised] || null : null;
  }

  function safeStorageGet(storage, key) {
    try {
      return storage && typeof storage.getItem === 'function' ? storage.getItem(key) : null;
    } catch {
      return null;
    }
  }

  function safeStorageSet(storage, key, value) {
    try {
      if (!storage || typeof storage.setItem !== 'function') return false;
      storage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }

  function safeStorageRemove(storage, key) {
    try {
      if (storage && typeof storage.removeItem === 'function') storage.removeItem(key);
    } catch {
      // Storage may be disabled or unavailable.
    }
  }

  function getLocalePreference(storage) {
    const value = safeStorageGet(storage, LOCALE_KEY);
    return isSupportedLocale(value) ? value : null;
  }

  function setLocalePreference(storage, locale) {
    return isSupportedLocale(locale) && safeStorageSet(storage, LOCALE_KEY, locale);
  }

  function getCachedCountry(storage, now = Date.now()) {
    const raw = safeStorageGet(storage, GEO_KEY);
    if (!raw) return null;
    try {
      const cache = JSON.parse(raw);
      const country = normaliseCountry(cache.country);
      const detectedAt = Number(cache.detectedAt);
      const expiresAt = Number(cache.expiresAt);
      const valid = country && Number.isFinite(detectedAt) && Number.isFinite(expiresAt)
        && detectedAt > 0 && detectedAt <= now && expiresAt > detectedAt && expiresAt > now
        && expiresAt - detectedAt === GEO_TTL_MS;
      if (!valid) {
        safeStorageRemove(storage, GEO_KEY);
        return null;
      }
      return { country, detectedAt, expiresAt };
    } catch {
      safeStorageRemove(storage, GEO_KEY);
      return null;
    }
  }

  function setCachedCountry(storage, country, now = Date.now()) {
    const normalised = normaliseCountry(country);
    if (!normalised || !Number.isFinite(now) || now <= 0) return false;
    return safeStorageSet(storage, GEO_KEY, JSON.stringify({
      country: normalised,
      detectedAt: now,
      expiresAt: now + GEO_TTL_MS
    }));
  }

  function resolveLocale({ preference, country, browserLanguages } = {}) {
    if (isSupportedLocale(preference)) return preference;
    return localeForCountry(country) || resolveBrowserLocale(browserLanguages);
  }

  async function detectCountry(fetchImpl, options = {}) {
    if (typeof fetchImpl !== 'function') return null;
    const timeoutMs = Number.isFinite(options.timeoutMs) ? options.timeoutMs : 1400;
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
    try {
      const response = await fetchImpl(options.endpoint || './api/country.php', {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: controller ? controller.signal : undefined
      });
      if (!response.ok) return null;
      const payload = await response.json();
      return normaliseCountry(payload && payload.country);
    } catch {
      return null;
    } finally {
      if (timer) clearTimeout(timer);
    }
  }

  function detectCountryOnce(fetchImpl, options = {}) {
    if (!countryRequest) countryRequest = detectCountry(fetchImpl, options);
    return countryRequest;
  }

  root.CognaBrightI18n = Object.freeze({
    SUPPORTED_LOCALES,
    COUNTRY_LOCALES,
    LOCALE_KEY,
    GEO_KEY,
    GEO_TTL_MS,
    isSupportedLocale,
    normaliseCountry,
    matchBrowserLanguage,
    resolveBrowserLocale,
    localeForCountry,
    getLocalePreference,
    setLocalePreference,
    getCachedCountry,
    setCachedCountry,
    resolveLocale,
    detectCountry,
    detectCountryOnce,
    safeStorageGet,
    safeStorageSet
  });
})(globalThis);
