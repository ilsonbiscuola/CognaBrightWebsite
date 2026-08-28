(function () {
  'use strict';

  const core = globalThis.CognaBrightI18n;
  const canonical = globalThis.CognaBrightLocales && globalThis.CognaBrightLocales['en-AU'];
  if (!core || !canonical || typeof document === 'undefined') return;

  const LOCALE_NAMES = Object.freeze(Object.fromEntries(
    core.SUPPORTED_LOCALES.map((locale) => [locale, canonical.messages[`common.language.names.${locale}`]])
  ));
  const LOCALE_FLAG_ASSETS = Object.freeze({
    'en-AU': './assets/flags/au.svg',
    'en-US': './assets/flags/us.svg',
    'pt-BR': './assets/flags/br.svg',
    'da-DK': './assets/flags/dk.svg',
    'fr-FR': './assets/flags/fr.svg',
    'de-DE': './assets/flags/de.svg',
    'it-IT': './assets/flags/it.svg',
    'es-ES': './assets/flags/es.svg',
    'sv-SE': './assets/flags/se.svg'
  });
  const ASSET_MANIFEST = Object.freeze({
    logo: Object.freeze({ type: 'LANGUAGE-NEUTRAL', shared: './assets/logo.png' }),
    'mother-son-goals': Object.freeze({ type: 'LANGUAGE-NEUTRAL', shared: './assets/mother-son-goals.png' })
  });
  const nodeBindings = new Map();
  const attributeBindings = new Map();
  const sourceKeys = new Map();
  const loadedLocales = new Map([['en-AU', Promise.resolve(canonical)]]);
  let activeLocale = document.documentElement.dataset.locale || 'en-AU';
  let storage = null;
  let page = document.body && document.body.dataset.page;

  try { storage = globalThis.localStorage; } catch { storage = null; }
  if (!page) {
    const segment = location.pathname.split('/').filter(Boolean).pop() || 'index';
    page = segment.replace(/\.html$/i, '') || 'index';
  }

  for (const [key, value] of Object.entries(canonical.messages)) {
    if (!sourceKeys.has(value)) sourceKeys.set(value, []);
    sourceKeys.get(value).push(key);
  }

  function preferredKey(value) {
    const keys = sourceKeys.get(value);
    if (!keys) return null;
    return keys.find((key) => key.startsWith(`${page}.`))
      || keys.find((key) => key.startsWith('common.')) || keys[0];
  }

  function bindSourceContent() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, noscript, [data-i18n-ignore]')) continue;
      const value = node.nodeValue.replace(/\s+/g, ' ').trim();
      if (!value || /^\d+$/.test(value) || value === '©') continue;
      const key = preferredKey(value);
      if (key) nodeBindings.set(node, {
        key,
        leading: node.nodeValue.match(/^\s*/)[0],
        trailing: node.nodeValue.match(/\s*$/)[0]
      });
    }
    for (const element of document.querySelectorAll('[aria-label], [placeholder], img[alt]')) {
      const bindings = {};
      for (const attribute of ['aria-label', 'placeholder', 'alt']) {
        if (!element.hasAttribute(attribute)) continue;
        const value = element.getAttribute(attribute);
        if (!value) continue;
        const key = preferredKey(value);
        if (key) bindings[attribute] = key;
      }
      if (Object.keys(bindings).length) attributeBindings.set(element, bindings);
    }
  }

  function loadLocale(locale) {
    if (!core.isSupportedLocale(locale)) return Promise.resolve(canonical);
    if (globalThis.CognaBrightLocales && globalThis.CognaBrightLocales[locale]) {
      return Promise.resolve(globalThis.CognaBrightLocales[locale]);
    }
    if (loadedLocales.has(locale)) return loadedLocales.get(locale);
    const promise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `./i18n/locales/${locale}.js`;
      script.async = true;
      script.onload = () => {
        const resource = globalThis.CognaBrightLocales && globalThis.CognaBrightLocales[locale];
        resource ? resolve(resource) : reject(new Error(`Locale resource did not register: ${locale}`));
      };
      script.onerror = () => reject(new Error(`Locale resource could not load: ${locale}`));
      document.head.append(script);
    });
    loadedLocales.set(locale, promise);
    return promise;
  }

  function message(resource, key) {
    const value = resource.messages[key] ?? canonical.messages[key];
    if (value === undefined && location.hostname === 'localhost') {
      console.warn(`[i18n] Missing key ${key} for ${resource.locale}`);
    }
    return value ?? key;
  }

  function translateBoundContent(resource) {
    for (const [node, binding] of nodeBindings) {
      if (node.isConnected) node.nodeValue = `${binding.leading}${message(resource, binding.key)}${binding.trailing}`;
    }
    for (const [element, bindings] of attributeBindings) {
      if (!element.isConnected) continue;
      for (const [attribute, key] of Object.entries(bindings)) {
        element.setAttribute(attribute, message(resource, key));
      }
    }
    const titleKey = canonical.messages[`${page}.meta.title`]
      ? `${page}.meta.title`
      : preferredKey(document.title);
    if (titleKey) document.title = message(resource, titleKey);
    const description = document.querySelector('meta[name="description"]');
    const descriptionKey = `${page}.meta.description`;
    if (description && canonical.messages[descriptionKey]) description.content = message(resource, descriptionKey);
    updateSocialMetadata(document.title, description ? description.content : '');
  }

  function updateSocialMetadata(title, description) {
    const values = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:url': document.querySelector('link[rel="canonical"]')?.href || location.href
    };
    for (const [property, content] of Object.entries(values)) {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.append(element);
      }
      element.content = content;
    }
  }

  function localizedAsset(id, locale = activeLocale) {
    const asset = ASSET_MANIFEST[id];
    if (!asset) {
      if (location.hostname === 'localhost') console.warn(`[i18n] Unknown asset: ${id}`);
      return '';
    }
    if (asset.shared) return asset.shared;
    const value = asset.locales && asset.locales[locale];
    if (!value && location.hostname === 'localhost') console.warn(`[i18n] Missing ${locale} variant for ${id}`);
    return value || asset.fallback || '';
  }

  function updateAssets(locale) {
    for (const image of document.querySelectorAll('img[data-asset-id]')) {
      const source = localizedAsset(image.dataset.assetId, locale);
      if (source && image.getAttribute('src') !== source) image.src = source;
    }
  }

  function setupLocalAuthenticationLinks() {
    const hostname = location.hostname;
    const isPrivatePreview = hostname === 'localhost'
      || hostname === '127.0.0.1'
      || hostname === '::1'
      || /^10\./.test(hostname)
      || /^192\.168\./.test(hostname)
      || /^172\.(1[6-9]|2\d|3[01])\./.test(hostname);
    if (!isPrivatePreview) return;
    const appOrigin = `http://${hostname === '::1' ? '[::1]' : hostname}:5173`;
    for (const link of document.querySelectorAll('[data-app-auth]')) {
      const route = link.dataset.appAuth === 'signup' ? '/signup' : '/sign-in';
      link.href = `${appOrigin}${route}`;
    }
  }

  function closeSelector(root, restoreFocus = false) {
    const toggle = root.querySelector('[data-language-toggle]');
    const menu = root.querySelector('[data-language-menu]');
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    if (restoreFocus) toggle.focus();
  }

  function refreshSelectors(resource) {
    for (const root of document.querySelectorAll('[data-language-selector]')) {
      const toggle = root.querySelector('[data-language-toggle]');
      toggle.querySelector('[data-language-flag]').src = LOCALE_FLAG_ASSETS[activeLocale];
      toggle.querySelector('[data-language-current]').textContent = LOCALE_NAMES[activeLocale];
      toggle.setAttribute(
        'aria-label',
        `${message(resource, 'common.language.current')}: ${LOCALE_NAMES[activeLocale]}. ${message(resource, 'common.language.select')}`
      );
      root.querySelector('[data-language-menu]').setAttribute('aria-label', message(resource, 'common.language.choose'));
      for (const option of root.querySelectorAll('[data-locale]')) {
        option.setAttribute('aria-checked', String(option.dataset.locale === activeLocale));
      }
    }
  }

  async function applyLocale(locale, { persist = false } = {}) {
    const nextLocale = core.isSupportedLocale(locale) ? locale : 'en-AU';
    let resource;
    try {
      resource = await loadLocale(nextLocale);
    } catch (error) {
      console.error(error);
      resource = canonical;
    }
    activeLocale = resource.locale;
    if (persist) core.setLocalePreference(storage, activeLocale);
    document.documentElement.lang = activeLocale;
    document.documentElement.dataset.locale = activeLocale;
    translateBoundContent(resource);
    updateAssets(activeLocale);
    refreshSelectors(resource);
    document.querySelectorAll('[data-year]').forEach((element) => {
      element.textContent = new Intl.NumberFormat(activeLocale, { useGrouping: false }).format(new Date().getFullYear());
    });
    document.documentElement.classList.remove('locale-loading');
    document.dispatchEvent(new CustomEvent('cognabright:localechange', { detail: { locale: activeLocale } }));
    return resource;
  }

  function languageSelectorMarkup(id) {
    const chevron = '<svg class="language-chevron" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="m4 6 4 4 4-4"></path></svg>';
    const options = core.SUPPORTED_LOCALES.map((locale) => (
      `<button class="language-option" type="button" role="menuitemradio" aria-checked="false" data-locale="${locale}" data-i18n-ignore><span class="language-option-label"><img class="language-flag" src="${LOCALE_FLAG_ASSETS[locale]}" width="28" height="20" alt="" aria-hidden="true"><span>${LOCALE_NAMES[locale]}</span></span><span class="language-check" aria-hidden="true">✓</span></button>`
    )).join('');
    return `<div class="language-selector" data-language-selector data-i18n-ignore><button class="language-selector-toggle" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="${id}" data-language-toggle><img class="language-flag" data-language-flag src="${LOCALE_FLAG_ASSETS[activeLocale]}" width="28" height="20" alt="" aria-hidden="true"><span data-language-current>${LOCALE_NAMES[activeLocale]}</span>${chevron}</button><div class="language-selector-menu" id="${id}" role="menu" data-language-menu hidden>${options}</div></div>`;
  }

  function setupLanguageSelectors() {
    const placements = [
      { target: document.querySelector('.header-actions'), id: 'desktop-language-menu', position: 'afterbegin' },
      { target: document.querySelector('[data-mobile-panel]'), id: 'mobile-language-menu', position: 'beforeend' }
    ];
    for (const placement of placements) {
      if (!placement.target) continue;
      placement.target.insertAdjacentHTML(placement.position, languageSelectorMarkup(placement.id));
    }
    for (const root of document.querySelectorAll('[data-language-selector]')) {
      const toggle = root.querySelector('[data-language-toggle]');
      const menu = root.querySelector('[data-language-menu]');
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('[data-language-selector]').forEach((selector) => closeSelector(selector));
        toggle.setAttribute('aria-expanded', String(!expanded));
        menu.hidden = expanded;
        if (!expanded) menu.querySelector('[aria-checked="true"]')?.focus();
      });
      menu.addEventListener('click', async (event) => {
        const option = event.target.closest('[data-locale]');
        if (!option) return;
        await applyLocale(option.dataset.locale, { persist: true });
        closeSelector(root, true);
      });
      menu.addEventListener('keydown', (event) => {
        const options = [...menu.querySelectorAll('[data-locale]')];
        const index = options.indexOf(document.activeElement);
        if (event.key === 'Escape') {
          event.preventDefault();
          closeSelector(root, true);
          return;
        }
        const moves = { ArrowDown: 1, ArrowUp: -1, Home: -index, End: options.length - index - 1 };
        if (!(event.key in moves)) return;
        event.preventDefault();
        options[(index + moves[event.key] + options.length) % options.length].focus();
      });
    }
    document.addEventListener('click', (event) => {
      document.querySelectorAll('[data-language-selector]').forEach((root) => {
        if (!root.contains(event.target)) closeSelector(root);
      });
    });
  }

  function setupMobileMenu() {
    const toggle = document.querySelector('[data-menu-toggle]');
    const panel = document.querySelector('[data-mobile-panel]');
    if (!toggle || !panel) return;

    const closeMenu = ({ restoreFocus = false } = {}) => {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      const resource = globalThis.CognaBrightLocales[activeLocale] || canonical;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', message(resource, 'common.menu.open'));
      panel.hidden = true;
      if (restoreFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeMenu();
        return;
      }
      toggle.setAttribute('aria-expanded', String(!expanded));
      const resource = globalThis.CognaBrightLocales[activeLocale] || canonical;
      toggle.setAttribute('aria-label', message(resource, 'common.menu.close'));
      panel.hidden = false;
      panel.querySelector('a, button')?.focus();
    });
    panel.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!panel.hidden && !panel.contains(event.target) && !toggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) {
        event.preventDefault();
        closeMenu({ restoreFocus: true });
      }
    });
    const desktopQuery = globalThis.matchMedia?.('(min-width: 1281px)');
    desktopQuery?.addEventListener('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  function setupForm() {
    const form = document.querySelector('[data-partnership-form]');
    if (!form) return;
    const isLocalFile = location.protocol === 'file:';
    const startedAt = Date.now();
    const requestedType = new URLSearchParams(location.search).get('type');
    const enquiryType = form.querySelector('[name="enquiry_type"]');
    if (enquiryType && ['research', 'organisation', 'pilot', 'general'].includes(requestedType)) {
      enquiryType.value = requestedType;
    }
    const submitButton = form.querySelector('button[type="submit"]');
    const messageElement = form.querySelector('[data-form-message]');
    const endpoint = form.getAttribute('data-endpoint') || './api/interest.php';
    const t = (key) => message(globalThis.CognaBrightLocales[activeLocale] || canonical, key);
    const showMessage = (value, state = '') => {
      if (!messageElement) return;
      messageElement.textContent = value;
      messageElement.dataset.state = state;
      if (state === 'error') messageElement.focus();
    };
    for (const field of form.querySelectorAll('input, select, textarea')) {
      field.addEventListener('input', () => field.setCustomValidity(''));
      field.addEventListener('change', () => field.setCustomValidity(''));
      field.addEventListener('invalid', () => {
        field.setCustomValidity('');
        if (field.validity.valueMissing) field.setCustomValidity(t('contact.form.validation.required'));
        else if (field.validity.typeMismatch) field.setCustomValidity(t('contact.form.validation.email'));
        else if (field.validity.tooLong) field.setCustomValidity(t('contact.form.validation.tooLong'));
      });
    }
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (isLocalFile) {
        showMessage(t('contact.form.messages.localServerRequired'), 'error');
        return;
      }
      const formData = new FormData(form);
      const payload = {
        enquiry_type: String(formData.get('enquiry_type') || '').trim(),
        name: String(formData.get('name') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        organisation_name: String(formData.get('organisation_name') || '').trim(),
        organisation_type: String(formData.get('organisation_type') || '').trim(),
        role: String(formData.get('role') || '').trim(),
        country: String(formData.get('country') || '').trim(),
        partnership_interest: String(formData.get('partnership_interest') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        privacy_consent: formData.get('privacy_consent') === 'on',
        consent_updates: formData.get('consent_updates') === 'on',
        website: String(formData.get('website') || '').trim(),
        form_elapsed_ms: Date.now() - startedAt
      };
      if (!payload.privacy_consent) {
        showMessage(t('contact.form.messages.privacyRequired'), 'error');
        return;
      }
      submitButton.disabled = true;
      submitButton.textContent = t('contact.form.messages.sendingShort');
      showMessage(t('contact.form.messages.sending'));
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        await response.json().catch(() => ({}));
        if (!response.ok) throw new Error('request_failed');
        form.reset();
        showMessage(t('contact.form.messages.success'), 'success');
      } catch {
        showMessage(t('contact.form.messages.tryLater'), 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = t('contact.form.submit');
      }
    });
  }

  async function initialise() {
    setupLocalAuthenticationLinks();
    setupLanguageSelectors();
    bindSourceContent();
    setupMobileMenu();
    setupForm();
    const boot = globalThis.__COGNABRIGHT_LOCALE_BOOT__ || {};
    let locale = boot.locale || 'en-AU';
    if (!boot.preference && !boot.cachedGeo) {
      const country = await core.detectCountryOnce(globalThis.fetch && globalThis.fetch.bind(globalThis));
      if (country) {
        core.setCachedCountry(storage, country);
        locale = core.resolveLocale({ country, browserLanguages: boot.browserLanguages });
      }
    }
    await applyLocale(locale);
  }

  globalThis.CognaBrightLocale = Object.freeze({
    get locale() { return activeLocale; },
    setLocale: (locale) => applyLocale(locale, { persist: true }),
    localizedAsset,
    supportedLocales: core.SUPPORTED_LOCALES,
    assetManifest: ASSET_MANIFEST
  });

  document.addEventListener('DOMContentLoaded', initialise, { once: true });
})();
