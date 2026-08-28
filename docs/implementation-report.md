# Implementation report

Date: 23 July 2026

## Outcome

The public website has been redesigned around university, research and organisation partnerships. The main action is a partnership enquiry. Families and providers are directed only to information about possible approved future pilots.

## Changed surfaces

- Public pages: home, research, organisations, future pilots, platform direction, evidence status, about, partnership enquiry, website privacy and accessibility.
- Local navigation: all page, stylesheet, script and image links use explicit file-relative targets so the site can be opened directly from `index.html`.
- Visual direction: restored the original preview’s white, navy, blue, teal and yellow design language and added an original mother-and-son everyday-goals hero concept.
- Legacy pages: families, professionals and features now redirect to the new information architecture.
- Shared interface: navigation, responsive layout, focus treatment, reduced-motion handling, semantic structure and form status announcements.
- Backend: Vercel JavaScript and cPanel PHP endpoints now share partnership-specific validation and a server-only Supabase RPC.
- Database: migrations add partnership fields, consent timestamp, a private rate-limit store, a service-role-only submission function and least-privilege table grants.
- Governance: evidence-status data, claims registry, repository audit, claim approval process and automated prohibited-pattern checks.
- Discovery and routing: Vercel redirects/headers, Apache redirects/headers, sitemap and robots file.
- Tooling: JavaScript syntax checks, Node tests and a deterministic static build.

## File inventory

Modified existing files:

- `.gitignore`
- `README.md`
- `README.txt`
- `about.html`
- `api/interest.js`
- `api/interest.php`
- `contact.html`
- `families.html`
- `features.html`
- `htaccess`
- `index.html`
- `package.json`
- `privacy.html`
- `professionals.html`
- `script.js`
- `styles.css`
- `vercel.json`

Added files:

- `accessibility.html`
- `assets/mother-son-goals.png`
- `evidence.html`
- `organisations.html`
- `pilots.html`
- `platform.html`
- `research.html`
- `robots.txt`
- `sitemap.xml`
- `data/evidence-status.json`
- `data/marketing-claims.json`
- `docs/claims-governance.md`
- `docs/deployment.md`
- `docs/implementation-report.md`
- `docs/repository-audit.md`
- `scripts/build.mjs`
- `supabase/migrations/20260723083004_add_partnership_enquiry_fields.sql`
- `supabase/migrations/20260723085919_harden_web_interest_grants.sql`
- `tests/site.test.mjs`

Unchanged production-sensitive surfaces include `assets/`, `php.ini` and the separate application/authentication repository, which is not present here.

## Removed or withheld claims

- Statistics, adoption and customer counts
- Testimonials, partner logos and case-study results
- Clinical, educational or family outcomes
- Time-saving, efficiency and return-on-investment language
- Regulatory, compliance, approval and security-certification language
- Integrations, pricing, trials, subscriptions and service guarantees
- Completed university research or institutional endorsement

## Verified capabilities

- Static responsive public website
- Server-mediated partnership enquiry handling on both retained hosting paths
- Server-only database credentials
- RLS-protected website enquiry table with no anonymous read/insert policy
- Public claim traceability and automated registry validation
- Absence of analytics and advertising code in this repository

## Deployment requirements

See `docs/deployment.md`. The database migration, environment configuration, legal review, manual accessibility review and a non-production end-to-end form test are required before production publication.

## Outstanding manual review

- Legal approval of privacy wording and retention schedule
- Accessibility review with assistive technologies and representative users
- Visual review across supported browsers and devices
- Operational ownership, response process and deletion-request process for enquiries
- Final review of all public wording by an authorised Cogna Bright owner
- Review of broader connected-project security advisor findings outside this repository’s scope

## Validation

`npm run check` passed: JavaScript syntax checks, six automated test groups and the static build. The database migrations were applied to the connected non-production project and verified with a transaction that was rolled back; no synthetic row remained. PHP was not installed in the workspace, so local `php -l` validation was unavailable and remains a deployment-environment check.
