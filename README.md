# Cogna Bright Public Website V0.3

Separate public showcase website for `cognabright.com`, ready for GitHub + Vercel.

## Architecture

Browser → `/api/interest` Vercel Function → Supabase `web_interest_submissions`

The browser never receives a Supabase key.

## Security model

- `SUPABASE_SERVICE_ROLE_KEY` is server-only.
- Never place it in JavaScript shipped to the browser.
- Never commit it to GitHub.
- Add it only in Vercel Project Settings > Environment Variables.
- The previous anonymous INSERT policy for `web_interest_submissions` has been removed.
- Form submissions now go through the Vercel serverless API route only.

## Vercel environment variables

Create these variables in Vercel:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Use Production, Preview, and Development as appropriate.

## Deploy with GitHub

1. Create a new GitHub repository, for example `cognabright-website`.
2. Upload or push the contents of this folder to the repository root.
3. In Vercel, choose **Add New > Project** and import the GitHub repository.
4. Add the two environment variables above.
5. Deploy.
6. In Vercel Domains, add `cognabright.com` and follow Vercel's DNS instructions.

## Form endpoint

`POST /api/interest`

Expected JSON fields:

- `name`
- `email`
- `role`
- `country`
- `message`
- `consent_updates`

The API performs basic validation, input length limits, a hidden honeypot bot check, and returns only generic public error messages.

## Files deliberately excluded

- `node_modules`
- `dist`
- `.env` files containing real secrets
