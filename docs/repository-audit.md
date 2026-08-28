# Repository audit

Reviewed: 23 July 2026

## Scope inspected

- All public HTML routes, shared CSS and browser JavaScript
- Vercel configuration and cPanel/Apache configuration
- JavaScript and PHP enquiry handlers
- Package scripts and repository history/status
- Connected Supabase non-production project: relevant tables, grants, RLS state, Edge Function inventory and security advisor output
- Marketing specification supplied with the task

## Findings before implementation

- The repository was a static HTML/CSS/JavaScript marketing preview with seven pages.
- No application UI, authentication implementation or application routes were present.
- No localization framework was present. Pages used `en-AU`; one page mentioned bilingual potential without implementation evidence.
- No analytics, advertising, heat-map, newsletter or consent-management code was present.
- No automated tests, type-check script, build script, sitemap or claims registry was present.
- The form posted to a PHP endpoint; a separate Vercel JavaScript endpoint also existed. Both wrote directly to `public.web_interest_submissions`.
- The form table had RLS enabled and no policies. Anonymous insert was not granted. Server-side elevated credentials performed inserts.
- The connected project had eight deployed Edge Functions at audit time. None handled the public marketing enquiry.
- The connected project includes application organisation objects, but database object names alone were not accepted as proof of complete public product capabilities.
- Supabase security advisors reported issues elsewhere in the broader non-production project. Those unrelated application objects were not changed from this marketing repository.
- The supplied marketing plan contained proposed claims, personas, results, offers and future capabilities. It was treated as planning material, not implementation evidence.

## Public claims removed or withheld

- Numerical statistics and adoption counts
- Testimonials, case-study results and partner/customer logos
- Clinical, educational or family outcome claims
- Time-saving, efficiency and return-on-investment claims
- Regulatory, compliance, approval and security-certification claims
- Integration availability
- Pricing, subscriptions, trials and service guarantees
- Customer counts and conversion targets
- Product availability statements not traceable to audited implementation

## Verified scope

- Static public information pages and responsive design
- Server-mediated partnership enquiry workflow
- Supabase-backed website enquiry storage boundary
- No repository analytics or advertising trackers
- Evidence-status and marketing-claims governance implemented in this repository

This audit does not certify the separate application, the entire connected database, legal compliance, security posture, accessibility conformance or research validity.
