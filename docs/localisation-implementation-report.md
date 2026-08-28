# Cogna Bright public website localisation implementation report

Date: 28 August 2026

## 1. Architecture discovered

The public website is a single static HTML/CSS/vanilla-JavaScript codebase. It has ten primary pages (`index`, `research`, `organisations`, `pilots`, `platform`, `evidence`, `about`, `contact`, `privacy`, and `accessibility`) plus three legacy redirect shims. There is no client router, framework, application state library, existing i18n framework, analytics implementation, cookie banner, or TypeScript configuration.

`scripts/build.mjs` creates `dist`. Vercel serves a JavaScript enquiry function through a PHP-shaped rewrite; cPanel serves the equivalent PHP endpoint. Shared navigation/footer markup is repeated in the static pages. The existing accessibility approach uses semantic landmarks, skip links, native controls, visible focus, live form status, responsive layouts, and reduced-motion handling.

## 2. Localisation architecture implemented

- `i18n/core.js`: supported locales, browser/country matching, safe storage, locale resolution, seven-day geo cache, bounded detection, and request de-duplication.
- `i18n/boot.js`: synchronous saved/cache/browser resolution, early `<html lang>`, and a bounded loading guard to avoid an English-to-selected-language flash.
- `i18n/locales/*.js`: nine locale-specific resources. `en-AU` is canonical and is always loaded; only the selected non-canonical resource is loaded on demand.
- `script.js`: source binding, immediate text/attribute/metadata replacement, language controls, locale-aware form states and validation, `Intl` year formatting, and the central asset resolver.
- `scripts/generate-locales.mjs`: canonical source inventory and reproducible locale-resource generation.
- `scripts/apply-i18n-markup.mjs`: idempotent page boot/resource markup and asset identifiers.
- `i18n/reviewed-overrides.json`: durable editorial overrides for reviewed terminology and high-risk consent, partnership, authentication, privacy, and accessibility copy.

The catalogue contains 351 stable page/section/common keys in every locale. The completeness test fails when a visible source string, title, description, placeholder, accessible name, or meaningful alt text is absent from the canonical catalogue.

## 3. Geo mechanism and rationale

`/api/country.php` is a same-origin coarse-country endpoint:

- Vercel rewrites it to `api/country.js`, which reads `x-vercel-ip-country`, `cf-ipcountry`, or an approved upstream `x-country-code`.
- cPanel executes `api/country.php`, which checks the equivalent Cloudflare, Vercel, server, or GeoIP country variables.
- Responses contain only `{ "country": "XX" }` or `null` and use `Cache-Control: private, no-store`.

This uses existing hosting/CDN signals and introduces no external browser geo provider, paid service, key, GPS request, IP storage, city, coordinates, or hostname-based behaviour. If a host supplies no trusted country signal, the endpoint returns `null` and browser-language fallback is used.

## 4. Locale resolution, persistence, and cache

Resolution order is:

1. validated `cognabright_locale` explicit preference;
2. valid `cognabright_geo` country cache or a fresh server-country response;
3. the first supported `navigator.languages` value;
4. `en-AU`.

The explicit preference does not expire. Both storage reads and writes tolerate unavailable or throwing localStorage. Corrupt/unsupported preferences are ignored.

`cognabright_geo` stores only `country`, `detectedAt`, and `expiresAt`. Its TTL is exactly seven days. Corrupt JSON, invalid country codes, non-finite/future/expired timestamps, and invalid TTLs are removed or ignored safely. Detection is central, bounded to 1.4 seconds, de-duplicated within the page lifetime, skipped when explicit or valid cached data is available, and never repeated by a component or route render.

Country defaults implement BR/AU/US/DK/FR/DE/IT/ES/SE. Browser matching normalises `pt-*`, `fr-*`, `de-*`, `it-*`, `es-*`, `da-*`, and `sv-*`; exact `en-US` remains US English and other English variants default to `en-AU`.

## 5. Locale resources and content coverage

Locale resources:

- `en-AU.js`
- `en-US.js`
- `pt-BR.js`
- `da-DK.js`
- `fr-FR.js`
- `de-DE.js`
- `it-IT.js`
- `es-ES.js`
- `sv-SE.js`

All 351 keys are present and non-empty in all nine resources. Content coverage includes page copy, navigation/footer, CTAs, forms/options/placeholders/help, validation and submit states, titles/descriptions, OpenGraph titles/descriptions, ARIA labels, meaningful alt text, privacy/accessibility/legal content, authentication actions, and redirect labels. No intended English-only public string, placeholder marker, or unsupported locale remains.

The 28 August follow-up review replaced machine-literal Brazilian Portuguese throughout the main research, organisation, pilot, privacy, consent, evidence, and accessibility journeys. In particular, `salvaguarda` was replaced with context-appropriate `medidas de proteção`, and the incorrect legal-entity translations of “General partnership question” were corrected in Portuguese, French, Italian, and Spanish. Reviewed high-risk overrides are reapplied after locale generation so these corrections cannot be silently overwritten.

`en-US` applies US spelling while `en-AU` retains the source spelling. Cogna Bright, URLs, form values, claim identifiers, WCAG identifiers, and technical field names remain unchanged.

## 6. Language selector and accessibility

The same accessible custom control is injected into:

- desktop header;
- mobile navigation;
- footer.

The compact desktop trigger displays the active locale's local SVG country flag, while the opened menu displays every country flag beside its native language name. The mobile-menu trigger displays both the active flag and language name. The image assets avoid platform-dependent emoji rendering. Flags are decorative; the translated accessible label always announces the current language and selector purpose. The control also provides `aria-expanded`, `aria-haspopup`, a menu with `menuitemradio` selection state, 44px minimum targets, visible focus, selected-option focus, Up/Down/Home/End navigation, Escape close, outside-click close, and trigger-focus restoration. The mobile navigation updates its open/close label, moves focus into the opened panel, closes on outside click or Escape, restores focus after Escape, and closes when the desktop layout resumes.

Every primary page now provides separate Sign in and Sign up actions. Desktop actions are at least 48px high, mobile actions are 50px high, and the links resolve to the verified application routes `/sign-in` and `/signup`.

Switching locale updates the page in place, persists the explicit preference, updates `<html lang>`, text, placeholders, accessible names, meaningful alt text, form validation/status text, title/description/OpenGraph metadata, and locale-aware assets. It does not reload, navigate, alter hostname, or change path/query/hash.

## 7. Locale-sensitive formatting

The dynamic copyright year uses `Intl.NumberFormat` with the active locale and no grouping. No currency, price conversion, or pricing logic exists. Fixed reviewed dates remain governed page copy and are translated without changing the underlying business meaning.

## 8. SEO and canonical strategy

Each primary page retains its existing canonical on `https://www.cognabright.com`, so either serving domain points crawlers to one primary canonical and avoids creating two independent canonical sets. No domain redirect was added. Existing titles/descriptions remain valid `en-AU` source markup for non-JavaScript crawlers; runtime selection updates them and matching OpenGraph metadata for visitors.

No `hreflang` links were added because all languages currently share the same URL. Same-URL `hreflang` would not identify distinct indexable language pages. If separately indexed translations become a goal, a future project should introduce locale-specific paths and self-referencing canonicals/hreflang as one coordinated URL migration.

## 9. Performance and initial render

The canonical resource is about 35 KB uncompressed. A visitor loads only the canonical catalogue plus the one active non-canonical bundle (about 36–41 KB); the other seven bundles are not preloaded. Locale resources and images retain normal browser caching. The boot guard is removed after locale application and has a 1.8-second safety limit; geo detection is bounded to 1.4 seconds. Rendering therefore cannot be blocked indefinitely.

Only the current asset path is assigned. No locale switch preloads all locale assets or reloads the application.

## 10. Privacy and resilience

The implementation adds no tracking. Local storage contains only an explicit locale and coarse country/timestamps. The server response never returns or stores an IP address and is not shared-cacheable. Hosting/security providers may still process ordinary request logs under their existing operation, as already described by the website privacy notice.

The site falls back through browser language to `en-AU` when fetch, JSON, storage, headers, or locale resources fail. Corrupt data cannot cause a fatal error. Local-file use continues to render and switch locale resources; enquiry submission still correctly requires a web server.

## 11. Visual asset inventory

The detailed inventory is in `docs/localisation-asset-inventory.md`.

- Total repository assets audited: 4
- Language-neutral rendered assets: 2
- Localisation-required rendered assets: 0
- Product screenshots/source composites: 2
- Decorative assets: 0
- Locale-specific raster variants created: 0
- Unresolved public assets: 0

`logo.png` contains only the protected Cogna Bright brand name and is shared. `mother-son-goals.png` contains no readable text and is shared; its alt text changes with locale. `brand-presentation.png` and `website-preview.png` contain extensive English product/marketing UI but are not referenced by any page. Their source files are preserved, while the build now excludes them from `dist`, preventing English-only or unverified product screenshots from being exposed on translated public pages. No product feature was fabricated to create a screenshot.

The central `localizedAsset` resolver and manifest handle all published assets and warn in local development for unknown or missing required variants. Because there is no rendered text-bearing asset, switching locale correctly retains the two shared paths while changing their translatable accessible context; there is no stale previous-language image variant.

## 12. Responsive and visual verification

In-app browser verification covered all nine locales across all ten primary pages at:

- 390 × 844 mobile;
- 768 × 1024 tablet;
- 1440 × 900 desktop.

This produced 270 locale/page/viewport checks. Two German mobile H1 overflows and two Danish/German tablet status-grid overflows were found during verification and fixed using language-aware heading hyphenation/safe wrapping plus earlier status-row stacking. The final matrix had no horizontal document overflow or clipped target headings, buttons, cards, footer groups, or form fields. Desktop Swedish hero/header and mobile Swedish contact-form screenshots were inspected for hierarchy, wrapping, overlap, and readability. The browser console was clean.

Manual interaction also verified all nine selector values, in-place content/title/alt updates, route preservation, refresh persistence, cross-page persistence, mobile-menu access, arrow-key focus, Escape/focus restoration, and selected-locale form validation.

The follow-up pass additionally verified all nine translated authentication labels at 430 × 932, all ten Brazilian Portuguese pages at 390 × 844 and 1440 × 1000, outside-click dismissal, Escape dismissal/focus restoration, and successful navigation to the live local Sign in and Sign up screens. No horizontal overflow was found.

## 13. Automated and build verification

`npm run check` passed on 28 August 2026:

- JavaScript syntax/type-equivalent checks: pass
- Automated tests: 30 passed, 0 failed
- Production build: pass (`Built 23 site entries with 14 governed public claims.`)
- Existing claim, navigation, metadata, redirect, and authentication-route tests: pass
- New country endpoint, locale resolution, preference, storage failure, geo cache, geo failure, request de-duplication, exact locale set, catalogue completeness, hard-coded source coverage, selector/runtime, asset-publication, contrast, mobile-menu, target-size, and translation-quality tests: pass
- `git diff --check`: no whitespace errors (Windows line-ending notices only)

There is no ESLint configuration or TypeScript source/configuration in this static project. `npm run typecheck` uses `node --check` for every browser/server JavaScript entry and passed. No test was disabled or weakened.

The final `dist/assets` contains only `logo.png` and `mother-son-goals.png`; `dist/i18n/locales` contains exactly the nine expected resources. Source inventories/generators and the two unpublished English screenshot composites are absent from the deployment bundle.

## 14. Files changed for localisation

- All 13 root HTML pages: locale boot/resources, page identifiers, OpenGraph metadata, and asset identifiers; redirect copy aligned to catalogued labels.
- `script.js`, `styles.css`, `package.json`, `vercel.json`, `README.md`.
- `i18n/core.js`, `i18n/boot.js`, `i18n/source-index.json`, `i18n/reviewed-overrides.json`, and nine `i18n/locales/*.js` resources.
- `api/country.js`, `api/country.php`.
- `scripts/build.mjs`, `scripts/generate-locales.mjs`, `scripts/apply-i18n-markup.mjs`.
- `tests/i18n-core.test.mjs`, `tests/i18n-completeness.test.mjs`, `tests/country-endpoint.test.mjs`, `tests/accessibility-regression.test.mjs`, `tests/translation-quality.test.mjs`, and `tests/login-navigation.test.mjs`.
- `docs/localisation-asset-inventory.md`, this report.

## 15. Follow-up recommendations

1. Validate the actual country header on each live Vercel and cPanel/domain deployment; source and local tests cannot prove the host supplies the expected header.
2. Have native-language reviewers perform editorial sign-off, and have counsel review translated privacy/legal wording before production publication. This is publication governance, not missing catalogue coverage.
3. If search-indexed translations become important, design locale-specific paths and coordinated canonical/hreflang behaviour rather than making hostname imply language.
4. Re-run the 270-case responsive matrix after major content or typography changes.

This work was validated locally only. It was not committed, pushed, deployed, or verified on either hosted domain.
