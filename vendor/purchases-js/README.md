# Vendored `@revenuecat/purchases-js`

`Purchases.es.js` in this directory is copied verbatim from
`node_modules/@revenuecat/purchases-js/dist/Purchases.es.js` (version pinned
in `package.json`). It is a self-contained ESM bundle with no external
imports, so it is checked into git and served directly — this site has no
JS bundler, and Vercel serves the repo root as static files with no build
step, so a `node_modules` reference wouldn't be reachable in production.

To update after bumping the `@revenuecat/purchases-js` version in
`package.json`:

```bash
npm install
cp node_modules/@revenuecat/purchases-js/dist/Purchases.es.js vendor/purchases-js/Purchases.es.js
```

Used by `pricing.js` on the `/pricing` page only, to read live localized
Family plan prices client-side via RevenueCat's public Web Billing API key.
It never receives a secret key, and no CognaBright family/user identity is
ever attached to it.
