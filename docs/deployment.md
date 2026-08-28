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

No external deployment is performed by the repository checks.
