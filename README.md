# Cogna Bright Public Website V0.4 — cPanel/PHP

This package is designed for normal cPanel hosting such as VentraIP.

## Architecture

Browser -> `/api/interest.php` -> Supabase -> `web_interest_submissions`

The Supabase secret is **not** included in browser JavaScript and should not be placed in GitHub.

## Package layout

```text
cognabright-public-website-v0.4-cpanel-php/
├── public_html/                       <- upload these contents to your cPanel public_html
│   ├── api/
│   │   └── interest.php
│   ├── assets/
│   ├── index.html
│   ├── contact.html
│   ├── styles.css
│   ├── script.js
│   └── ...
│
├── private-config/
│   └── cognabright-config.example.php
│
└── README.md
```

## Step 1 — Upload the website

In cPanel:

1. Open **File Manager**.
2. Open `public_html`.
3. Upload the **contents inside this package's `public_html` folder**.
4. Confirm that `index.html` is directly inside your real cPanel `public_html` folder.

Correct:

```text
/home/YOUR_USERNAME/public_html/index.html
```

Wrong:

```text
/home/YOUR_USERNAME/public_html/cognabright-public-website-v0.4-cpanel-php/public_html/index.html
```

## Step 2 — Create the private Supabase config

1. Open `private-config/cognabright-config.example.php` locally.
2. Put your real Supabase URL and **Secret key** into a copy of the file.
3. Rename the copy to:

```text
cognabright-config.php
```

4. In cPanel File Manager, go one level above `public_html`.
5. Upload the real `cognabright-config.php` there.

Recommended final path:

```text
/home/YOUR_CPANEL_USERNAME/cognabright-config.php
```

Do **not** put the real config file inside `public_html`.

Example:

```php
<?php
return [
    'supabase_url' => 'https://YOUR-PROJECT-REF.supabase.co',
    'supabase_secret_key' => 'sb_secret_YOUR_REAL_SECRET',
];
```

## Step 3 — Test the site

Open:

```text
https://cognabright.com
```

Then submit the Register Interest form.

The browser sends the form to:

```text
https://cognabright.com/api/interest.php
```

The PHP endpoint writes server-side to:

```text
web_interest_submissions
```

## Security notes

- The browser never receives the Supabase secret key.
- The real config file stays outside `public_html`.
- The website table uses the `web_` prefix.
- Direct anonymous Supabase inserts were previously disabled for this table.
- The PHP endpoint validates input, limits body size, includes a honeypot and basic rate limiting.
- Never commit `cognabright-config.php` containing real secrets to GitHub.

## PHP requirements

The host should provide:

- PHP 8.x recommended
- PHP cURL extension
- HTTPS

Most standard cPanel hosting plans include PHP and cURL.
