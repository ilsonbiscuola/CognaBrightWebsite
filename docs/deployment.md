# Deployment requirements

## Before release

- Apply both migrations in `supabase/migrations/` in filename order.
- Configure `SUPABASE_URL` and `SUPABASE_SECRET_KEY` on Vercel and in the private cPanel configuration. The legacy service-role variable remains a temporary fallback.
- Confirm the deployed host is allowed by `SITE_ORIGIN` if it differs from the two production hostnames in code.
- Verify one successful enquiry and one rate-limited sequence in the intended non-production environment without using real personal information.
- Confirm redirects and clean routes on both Vercel and Apache.
- Obtain legal review of the website privacy notice and retention schedule.
- Complete manual accessibility, browser, device and assistive-technology review.
- Review hosting logs, backups, access controls and operational enquiry ownership.
- Decide how partnership enquiries are monitored; the repository does not send confirmation or notification email.

## Public account deletion (`/delete-account`)

- The page is the Google Play "Delete account URL": `https://cognabright.com/delete-account`. It must return HTTP 200 without sign-in.
- On cPanel, upload `dist/htaccess` as `.htaccess` in the web root. Its clean-URL rule serves `/delete-account` from `delete-account.html`; without it the route returns 404.
- The form posts to `/api/account-deletion.php` (cPanel) or the Vercel function behind the same path. Both call the existing server-only `web_submit_partnership_enquiry` RPC, so requests land in `public.web_interest_submissions` with `source = 'cognabright.com/delete-account'` and `partnership_interest = 'Account deletion request'`, under the same database rate limit.
- No notification email is sent. Someone must monitor these rows (and `developer@cognabright.com`, the email fallback) and process each request: verify the requester controls the account email, erase each child through the staged erasure worker, delete the Family with the System Administration tools, then disable the login.
- After deploying, submit one test request with a non-personal address and delete that row afterwards.

No external deployment is performed by the repository checks.

## Launch release (October 2026)

Production `www.cognabright.com` is the cPanel (LiteSpeed) host. The Vercel
project `cognabrightwebsitevercel` is not attached to the production DNS.

1. `npm run check` (syntax, tests, build). The deployable bundle is `dist/`.
2. Back up the current `public_html` from cPanel File Manager (Compress → download)
   so the previous site can be restored.
3. Upload the contents of `dist/` to `public_html`, then rename `htaccess` to
   `.htaccess` (replacing the old one). Keep the private configuration file
   outside `public_html` untouched.
4. If an older `research.html`, `pilots.html` or other legacy file remains on the
   server, it is harmless: `.htaccess` redirects `/research` to the homepage and
   the legacy routes to their current pages.
5. Run the checks in "Verify production" below.

`.htaccess` also makes `https://www.cognabright.com` the only canonical host: the
bare domain and the alias domains parked on the same hosting account
(`cognabright.online`, `.net`, `.co`, `.com.au`, `.au`) redirect permanently to it.
Those aliases only follow the rule if they share the `public_html` document root;
if an alias has its own document root in cPanel → Domains, set a permanent
redirect to `https://www.cognabright.com/` there instead.

### Verify production

```text
curl -sI https://cognabright.com/            # 301 -> https://www.cognabright.com/
curl -sI https://www.cognabright.online/      # 301 -> https://www.cognabright.com/
curl -s  https://www.cognabright.com/ | grep -o '<title>[^<]*'
curl -sI https://www.cognabright.com/research # 302 -> /
curl -sI https://www.cognabright.com/delete-account   # 200
curl -s  https://www.cognabright.com/sitemap.xml | head -3
```

Then open the homepage in English and Português (Brasil), play both launch
videos, and confirm Pricing loads live prices (the price function only accepts
the `cognabright.com` origins).

### Rollback

Restore the `public_html` backup from step 2, or check out the previous
production commit and upload its `npm run build` output.

## Switching Google Play to "available"

Only after `https://play.google.com/store/apps/details?id=com.cognabright.app`
loads publicly (it returned 404 on 3 October 2026):

1. In `index.html` and `families.html`, change the Google Play availability item
   from "Coming soon" / "Android app" to a link to the listing using the
   prepared text "Available now on Google Play" or
   "Download CognaBright on Google Play" (already translated in every locale as
   `common.availability.googlePlayLive` and `.googlePlayDownload`). Use Google's
   official, unaltered badge artwork if a badge is shown.
2. Update CB-MKT-019 in `data/marketing-claims.json` and
   `docs/launch-verification-2026-10.md`.
3. Add the listing URL to the Organization `sameAs` list only if desired; add
   `"operatingSystem": "Web browser, Android"` to the SoftwareApplication node.
4. `npm run check` — `tests/launch.test.mjs` requires the listing link whenever
   Google Play is described as available.
