# CognaBright public marketing website

This repository contains the static public marketing website for CognaBright. Its primary conversion is a research or organisation partnership enquiry.

## Scope

- Universities and researchers
- Disability, allied-health, education and community organisations
- Families and providers interested in approved future pilots
- Public evidence status, claims governance, privacy and accessibility information

The separate CognaBright application and authentication routes live in the
application repository. During local testing, the public-site **Sign in** and
**Sign up** actions point to `http://localhost:5173/sign-in` and
`http://localhost:5173/signup`. No production or staging application hostname
is used. When the website is opened from a private-network address such as
`192.168.x.x`, the browser rewrites those links to the same device hostname on
port `5173`, so a phone on the same network reaches the development app rather
than its own `localhost`.

## Architecture

The static site supports two existing production workflows:

- Vercel: browser → `/api/interest.php` rewrite → `api/interest.js` → Supabase RPC
- cPanel: browser → `/api/interest.php` → `api/interest.php` → Supabase RPC

The same static site and locale resources serve both `cognabright.com` and
`cognabright.com.br`. The hostname is never used to select a language and the
site does not redirect between domains.

Database credentials stay on the server. The form migration is in `supabase/migrations/`.

## Public-site localisation

The website supports exactly `en-AU`, `en-US`, `pt-BR`, `da-DK`, `fr-FR`,
`de-DE`, `it-IT`, `es-ES` and `sv-SE`. Locale selection is centralised in
`i18n/core.js` and follows this order:

1. validated explicit preference in `cognabright_locale`;
2. cached or server-detected coarse country code;
3. the first supported value in `navigator.languages`;
4. `en-AU`.

`cognabright_geo` stores only a two-letter country code and detection/expiry
timestamps for seven days. `/api/country.php` is rewritten to the Vercel
function and reads a Vercel or Cloudflare country header. The PHP endpoint uses
equivalent CDN/server variables on cPanel. If no trusted hosting signal exists,
the endpoint returns `null` and the browser-language fallback is used. No IP
address, precise location, external geo provider, API key or location
permission is used.

Locale files live in `i18n/locales/` and only the active non-canonical bundle is
loaded. `scripts/generate-locales.mjs` maintains the canonical source index and
locale bundles. The language control is injected into the desktop header,
mobile navigation and footer, and switching it updates content, metadata,
accessible names, form states, assets and `<html lang>` without navigation or a
page reload.

Language selection is intentionally not encoded in the URL. Canonicals remain
on the primary `.com` URL and no same-URL `hreflang` links are emitted. If
separately indexed translations become a priority, locale-specific paths should
be designed as a future SEO project.

## Local checks

```text
npm run typecheck
npm test
npm run build
```

`npm run build` creates an ignored `dist/` deployment bundle without changing the source deployment model.

## Local authentication testing

Start the application before using the public-site login button:

```powershell
cd C:\CognaBright\Repository\cognabright-staging
npm run dev:host -- --port 5173 --strictPort
```

Then open this marketing website locally and choose **Sign in** or **Sign up**. Supabase email
or OAuth authentication returns to `http://localhost:5173/auth/callback`, and
the application routes the account according to its family and provider
licences.

Before any staging release, replace the local authentication targets with the approved
staging application URL and add its callback URL to the Supabase Auth redirect
allow-list.

## Required server configuration

- `SUPABASE_URL`
- `SUPABASE_SECRET_KEY` (preferred) or legacy `SUPABASE_SERVICE_ROLE_KEY`
- `SITE_ORIGIN` (optional additional allowed origin)

For cPanel, equivalent values can be placed in the private configuration file outside `public_html`.

## Governance

- `data/marketing-claims.json` is the publication registry.
- `data/evidence-status.json` defines public status labels.
- `docs/repository-audit.md` records what was and was not found.
- `docs/claims-governance.md` defines the approval workflow.
- `docs/deployment.md` lists release requirements.

Do not publish roadmap items, mock-ups, results, logos, testimonials, pricing or compliance language without reviewed evidence and an approved registry entry.
