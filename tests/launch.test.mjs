import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const redirectPages = new Set(['pilots.html', 'professionals.html', 'features.html', 'research.html', '404.html']);
const pages = (await readdir(root)).filter((file) => file.endsWith('.html') && !redirectPages.has(file));
const read = (file) => readFile(join(root, file), 'utf8');
const index = await read('index.html');

test('homepage leads with the launch video in English and Brazilian Portuguese', async () => {
  const videoSection = index.indexOf('id="launch-video"');
  assert.ok(videoSection > 0 && videoSection < index.indexOf('id="visual-routines"'), 'video sits before the feature sections');
  assert.match(index, /<h2 id="launch-video-heading">See CognaBright in action<\/h2>/);
  assert.match(index, /watch\?v=qW6ac3IKAvU/);
  assert.match(index, /watch\?v=MLXYikTzDCg/);
  assert.doesNotMatch(index, /<iframe/i, 'no player loads until the visitor presses play');
  const script = await read('script.js');
  assert.match(script, /youtube-nocookie\.com\/embed/);
  assert.match(script, /'pt-BR': Object\.freeze\(\{ id: 'MLXYikTzDCg'/);
});

test('store availability is never claimed without a public listing link', async () => {
  for (const file of pages) {
    const html = await read(file);
    if (/Available now on Google Play|Download CognaBright on Google Play/.test(html)) {
      assert.match(html, /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.cognabright\.app"/, `${file}: Google Play claim needs the listing link`);
    }
    assert.doesNotMatch(html, /apps\.apple\.com/, `${file}: no App Store link until the listing exists`);
  }
  assert.match(index, /<strong>Apple App Store<\/strong>/);
});

test('every indexable page self-canonicalises to www.cognabright.com with social metadata', async () => {
  for (const file of pages) {
    const html = await read(file);
    const slug = file === 'index.html' ? '' : file.replace(/\.html$/, '');
    assert.match(html, new RegExp(`<link rel="canonical" href="https://www\\.cognabright\\.com/${slug}">`), `${file}: canonical`);
    assert.match(html, new RegExp(`<meta property="og:url" content="https://www\\.cognabright\\.com/${slug}">`), `${file}: og:url`);
    assert.match(html, /<meta property="og:image" content="https:\/\/www\.cognabright\.com\/assets\/og-cognabright\.png">/, `${file}: og:image`);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${file}: twitter card`);
    assert.doesNotMatch(html, /noindex/i, `${file}: must stay indexable`);
  }
});

test('no public file points search engines or visitors at unofficial, staging or local hosts', async () => {
  const files = [...(await readdir(root)).filter((file) => file.endsWith('.html')), 'robots.txt', 'sitemap.xml', 'site.webmanifest', 'script.js'];
  for (const file of files) {
    const text = await read(file);
    assert.doesNotMatch(text, /cognabright\.online|staging-app\.cognabright|vercel\.app|localhost:\d/i, file);
  }
});

test('the hidden research page is not linked, listed or shipped', async () => {
  for (const file of pages) assert.doesNotMatch(await read(file), /href="\.\/research\.html"/, file);
  assert.doesNotMatch(await read('sitemap.xml'), /\/research</);
  assert.doesNotMatch(await read('scripts/build.mjs'), /'research\.html'/);
  const vercel = JSON.parse(await read('vercel.json'));
  assert.ok(vercel.redirects.some((r) => r.source === '/research' && r.permanent === false));
});

test('homepage structured data identifies the official organisation and channels', () => {
  const blocks = [...index.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const graph = blocks.flatMap((block) => block['@graph'] || [block]);
  const organisation = graph.find((node) => node['@type'] === 'Organization');
  assert.equal(organisation.name, 'CognaBright');
  assert.equal(organisation.legalName, 'CognaBright Pty Ltd');
  assert.equal(organisation.url, 'https://www.cognabright.com/');
  assert.deepEqual(organisation.sameAs.sort(), [
    'https://www.facebook.com/cognabright/',
    'https://www.instagram.com/cognabright',
    'https://www.tiktok.com/@cognabright.official',
    'https://www.youtube.com/@CognaBright'
  ]);
  for (const node of graph) assert.ok(!('aggregateRating' in node) && !('review' in node) && !('offers' in node), `${node['@type']}: no ratings, reviews or offers`);
  assert.equal(graph.filter((node) => node['@type'] === 'VideoObject').length, 2);
});

test('robots allows the public site, hides internal APIs and lists the sitemap', async () => {
  const robots = await read('robots.txt');
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Disallow: \/api\/$/m);
  assert.match(robots, /^Sitemap: https:\/\/www\.cognabright\.com\/sitemap\.xml$/m);
});
