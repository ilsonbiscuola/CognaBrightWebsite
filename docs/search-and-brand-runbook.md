# Search, brand identity and social profiles — owner runbook

Prepared 3 October 2026 with the launch release. Steps marked **Owner** need an
account login that this repository does not have.

## 1. What the website now tells search engines

- One canonical host: `https://www.cognabright.com/`. Every indexable page
  self-canonicalises there, and `.htaccess` redirects the bare domain and the
  alias domains on the same hosting account to it (see `docs/deployment.md`).
- `robots.txt` allows the public site, disallows `/api/`, and lists
  `https://www.cognabright.com/sitemap.xml`.
- The sitemap lists 13 public pages with `lastmod`. Research is hidden and
  excluded. Language is chosen in the browser, so there are no per-language URLs
  or `hreflang` entries (see README).
- The homepage JSON-LD describes:
  - Organization: name `CognaBright`, legal name `CognaBright Pty Ltd`,
    ABN 54 701 887 774 (public ABN Lookup), Queensland, Australia,
    `developer@cognabright.com`, and `sameAs` for the four verified channels;
  - WebSite, SoftwareApplication (web app; no ratings, reviews, prices or offers);
  - VideoObject for the English and Portuguese launch videos.
- Every page has Open Graph and X/Twitter card tags with
  `assets/og-cognabright.png` (1200 × 630).
- The About page states who develops CognaBright and lists the official channels.

## 2. Google Search Console — **Owner**

No verification token or file exists in the repository, so Search Console must
be set up by the account owner. Do not paste a verification token into a chat;
add DNS records directly at the DNS host.

1. Open https://search.google.com/search-console and choose **Add property**.
2. Choose **Domain** and enter `cognabright.com`.
3. Add the TXT record Google shows at the DNS host for cognabright.com
   (the VentraIP / hostingplatform.net.au DNS zone), then select **Verify**.
4. Open **Sitemaps** and submit `https://www.cognabright.com/sitemap.xml`.
5. Open **URL Inspection**, enter `https://www.cognabright.com/` and run
   **Test live URL**. Confirm: page fetch successful, indexing allowed,
   user-declared canonical `https://www.cognabright.com/`, mobile rendering OK,
   structured data detected (Organization, VideoObject).
6. Select **Request indexing** for the homepage. Optionally repeat for
   `/families`, `/platform`, `/pricing` and `/about`. The sitemap covers the rest.
7. Add the alias domains you own (for example `cognabright.online`) as Domain
   properties too. Once they redirect, Search Console shows Google consolidating
   them into www.cognabright.com.
8. Monitor **Pages** (indexing), **Security issues**, **Manual actions** and
   **Performance** weekly for the first month. Indexing is asynchronous and can
   take days to weeks.

Validate structured data at https://search.google.com/test/rich-results and
https://validator.schema.org/ with the homepage URL.

## 3. cognabright.online — findings

Only public, non-intrusive checks were made (DNS, RDAP, TLS certificate, one
plain-text HTTP fetch with no scripts or assets):

| Check | Result |
| --- | --- |
| Registration (RDAP) | Registered 10 July 2026 through VentraIP (registrar Synergy Wholesale), expires 10 July 2027; nameservers `ns1/ns2.syd5.hostingplatform.net.au` |
| Hosting | 43.250.142.41 (`s05ge.syd5.hostingplatform.net.au`) — the same server as www.cognabright.com |
| Content | The homepage is byte-identical to the current www.cognabright.com homepage (same MD5) |
| TLS certificate | The same Let's Encrypt certificate as cognabright.com, covering cognabright.com, .com.au, .au, .co, .net and .online |
| Credentials / payments | None requested beyond what the identical CognaBright page shows |
| Google index | Could not be verified from this environment; check Search Console or search Google directly |

A single cPanel certificate covering all of these names is issued only to the
hosting account that controls them. The evidence therefore indicates that
cognabright.online is an alias domain on CognaBright's own VentraIP hosting
account, registered the same day as the other CognaBright infrastructure, and
serving a duplicate of the site. Google likely indexed it because the old
production site had no canonical tags and did not redirect alias domains.

**Recommended action:** do not file phishing, spam, trademark or abuse reports
against it. Instead:

1. **Owner:** sign in to VentraIP and confirm cognabright.online is in your
   domain list (and who registered it). Check cPanel → Domains for it as an
   addon/alias domain.
2. Deploy this release so `.htaccess` redirects it permanently to
   `https://www.cognabright.com/`. If it has its own document root, add the
   redirect in cPanel → Domains → Redirects instead.
3. Keep the domain registered (letting it lapse would let someone else take it),
   or point it only at the redirect.
4. Optional: add it as a Search Console property and use the Removals tool only
   if outdated cognabright.online URLs still appear after the redirects are
   crawled.

### If it turns out not to be yours

Only if VentraIP confirms it is not on your account:

- Preserve evidence: screenshots of the page and search results, the RDAP
  output (`https://rdap.org/domain/cognabright.online`) and dates.
- Registrar abuse: VentraIP / Synergy Wholesale (abuse contact from the RDAP
  record; registry contact listed was `registry-general@nexigen.digital`).
- Hosting abuse: the operator of `hostingplatform.net.au` (VentraIP).
- Google: phishing report https://safebrowsing.google.com/safebrowsing/report_phish/
  (only if it requests credentials or payments); spam report
  https://developers.google.com/search/help/report-quality-issues; trademark /
  legal removal https://support.google.com/legal/ (requires evidence of rights).
- Do not contact the operator from personal accounts.

## 4. Official social profiles — **Owner** checklist

Verified 3 October 2026. All four are linked from the website footer and the
Organization `sameAs`.

| Channel | URL | Needs updating |
| --- | --- | --- |
| YouTube | https://www.youtube.com/@CognaBright | Both video descriptions mention `cognabright.com`; change to the full `https://www.cognabright.com/` so it is clickable. Add the website link to the channel's Links. Upload the reviewed `.srt` caption files (`marketing/ad-90s/cognabright-ad-90s.srt` and the pt-BR file) — only automatic captions exist today. |
| Facebook | https://www.facebook.com/cognabright/ | Set Website to `https://www.cognabright.com/`; confirm category/company details; replace any "Register interest" or pre-launch wording; Google Play "coming soon" until the listing is live. |
| Instagram | https://www.instagram.com/cognabright | Display name is "Cogna Bright" — change to **CognaBright**. Add `https://www.cognabright.com/` as the link. |
| TikTok | https://www.tiktok.com/@cognabright.official | Bio still says "In development." — replace with the description below and add the website link. |
| LinkedIn | none verified | Create a CognaBright Pty Ltd company page if wanted, then add it to the footer and `sameAs`. |

Consistent profile details:

- Name: **CognaBright** (company: CognaBright Pty Ltd)
- Website: `https://www.cognabright.com/`
- Description: Visual support for communication, routines and everyday life for
  children, adolescents and adults with disability.
- Short line: Visual routines • Functional communication • Multilingual support • Connected support
- Availability: Available now on the web. Google Play and App Store coming soon
  (update Google Play when the listing is live).
- Logo: the current CognaBright mark (`marketing/Brand Kit/Assets/cognabright-512.png`).

## 5. Building brand-search results

Legitimate signals only: the official site, the Google Play listing once live,
the YouTube channel and videos, the social profiles above linking back, and
genuine external mentions (partners, directories, media). Do not buy links,
create doorway pages, fake reviews or ratings.
