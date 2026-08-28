(function () {
  'use strict';
  const core = globalThis.CognaBrightI18n;
  if (!core || typeof document === 'undefined') return;
  let storage = null;
  try { storage = globalThis.localStorage; } catch { storage = null; }
  const preference = core.getLocalePreference(storage);
  const cachedGeo = preference ? null : core.getCachedCountry(storage);
  const browserLanguages = typeof navigator !== 'undefined'
    ? (Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language])
    : [];
  const locale = core.resolveLocale({
    preference,
    country: cachedGeo && cachedGeo.country,
    browserLanguages
  });
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  document.documentElement.classList.add('locale-loading');
  globalThis.__COGNABRIGHT_LOCALE_BOOT__ = Object.freeze({ locale, preference, cachedGeo, browserLanguages });
  setTimeout(() => document.documentElement.classList.remove('locale-loading'), 1800);
})();
