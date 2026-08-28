import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');
const files = [
  'index.html', 'research.html', 'organisations.html', 'pilots.html', 'platform.html',
  'evidence.html', 'about.html', 'contact.html', 'privacy.html', 'accessibility.html',
  'families.html', 'professionals.html', 'features.html', 'styles.css', 'script.js',
  'robots.txt', 'sitemap.xml', 'vercel.json', 'htaccess', 'php.ini'
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) await cp(join(root, file), join(output, file));
await mkdir(join(output, 'assets'), { recursive: true });
for (const asset of ['logo.png', 'mother-son-goals.png']) {
  await cp(join(root, 'assets', asset), join(output, 'assets', asset));
}
await cp(join(root, 'api'), join(output, 'api'), { recursive: true });
await mkdir(join(output, 'i18n', 'locales'), { recursive: true });
for (const file of ['core.js', 'boot.js']) await cp(join(root, 'i18n', file), join(output, 'i18n', file));
for (const locale of ['en-AU', 'en-US', 'pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE']) {
  await cp(join(root, 'i18n', 'locales', `${locale}.js`), join(output, 'i18n', 'locales', `${locale}.js`));
}

const manifest = JSON.parse(await readFile(join(root, 'data/marketing-claims.json'), 'utf8'));
console.log(`Built ${files.length + 3} site entries with ${manifest.claims.length} governed public claims.`);
