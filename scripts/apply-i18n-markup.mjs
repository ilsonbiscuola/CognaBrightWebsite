import { readFile, writeFile } from 'node:fs/promises';

const pages = [
  'index', 'research', 'organisations', 'pilots', 'platform', 'evidence',
  'about', 'contact', 'privacy', 'accessibility', 'families', 'professionals', 'features'
];
const scripts = '<script src="./i18n/core.js"></script><script src="./i18n/locales/en-AU.js"></script><script src="./i18n/boot.js"></script>';
const redirectLabels = {
  families: 'Future pilots',
  professionals: 'Organisations',
  features: 'Platform direction'
};

for (const page of pages) {
  const path = `${page}.html`;
  let html = await readFile(path, 'utf8');
  if (!html.includes('./i18n/core.js')) {
    html = html.replace(/(<link rel="canonical"[^>]*>)/i, `$1${scripts}`);
  }
  if (!html.includes('property="og:title"')) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
    const description = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)?.[1];
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
    if (title && description && canonical) {
      const social = `<meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><meta property="og:url" content="${canonical}">`;
      html = html.replace(/(<meta\s+name="description"[^>]*>)/i, `$1${social}`);
    }
  }
  html = html.replace(/<body(?![^>]*data-page)/i, `<body data-page="${page}"`);
  html = html.replaceAll('<img src="./assets/logo.png"', '<img data-asset-id="logo" src="./assets/logo.png"');
  html = html.replace('<img src="./assets/mother-son-goals.png"', '<img data-asset-id="mother-son-goals" src="./assets/mother-son-goals.png"');
  if (redirectLabels[page]) {
    html = html.replace(/<main><p>This page has moved to <a ([^>]+)>[^<]+<\/a>\.<\/p><\/main>/i, `<main><p><a $1>${redirectLabels[page]}</a></p></main>`);
    if (!html.includes('<script src="./script.js"></script>')) {
      html = html.replace('</body>', '<script src="./script.js"></script></body>');
    }
  }
  await writeFile(path, html, 'utf8');
}
