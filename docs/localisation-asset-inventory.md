# Public website localisation asset inventory

Audited 28 August 2026. The deployment build now publishes only assets referenced by the website.

| Asset | Source path | Use | Readable text | Classification | Variants required / created | Localisation issue |
|---|---|---|---:|---|---|---|
| `logo` | `assets/logo.png` | Header and footer on all primary pages | Brand name only | LANGUAGE-NEUTRAL | Shared / 1 | CognaBright is a protected, untranslated brand name. |
| `mother-son-goals` | `assets/mother-son-goals.png` | Home-page hero | No | LANGUAGE-NEUTRAL | Shared / 1 | Meaningful alt text is translated through the locale catalogue. |
| `brand-presentation` | `assets/brand-presentation.png` | Unused source artefact; not referenced or copied to `dist` | Yes | PRODUCT SCREENSHOT | None; not public | Contains unverified English product UI and marketing copy, so the build excludes it rather than fabricating translated product screens. |
| `website-preview` | `assets/website-preview.png` | Unused source artefact; not referenced or copied to `dist` | Yes | PRODUCT SCREENSHOT | None; not public | Contains unverified English product UI and marketing copy, so the build excludes it rather than fabricating translated product screens. |

Summary: 4 repository assets audited; 2 language-neutral, 0 localisation-required rendered assets, 2 unpublished product screenshots, 0 decorative assets, and 0 locale-specific raster variants required or created. No public translated page can load an English-only text-bearing visual. The central asset manifest in `script.js` resolves the two published assets and emits development warnings for unknown or missing required assets.
