import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const redirectPages = new Set(['families.html', 'professionals.html', 'features.html']);
const htmlFiles = (await readdir(root)).filter((file) => file.endsWith('.html'));
const mainPages = htmlFiles.filter((file) => !redirectPages.has(file));
const registry = JSON.parse(await readFile(join(root, 'data/marketing-claims.json'), 'utf8'));
const claimMap = new Map(registry.claims.map((claim) => [claim.id, claim]));

test('all tagged public claims exist and are approved in the registry', async () => {
  const seen = new Set();
  for (const file of mainPages) {
    const html = await readFile(join(root, file), 'utf8');
    for (const [, id] of html.matchAll(/data-claim-id="([^"]+)"/g)) {
      seen.add(id);
      assert.ok(claimMap.has(id), `${file} references missing claim ${id}`);
      assert.equal(claimMap.get(id).approved_for_publication, true, `${id} is not approved`);
    }
  }
  assert.ok(seen.size >= 10, 'expected material public claims to be tagged');
});

test('claim evidence paths exist', async () => {
  for (const claim of registry.claims) {
    assert.match(claim.id, /^CB-MKT-\d{3}$/);
    assert.ok(registry.statuses.includes(claim.status), `${claim.id} has invalid status`);
    assert.ok(claim.evidence.length > 0, `${claim.id} needs evidence`);
    for (const path of claim.evidence) assert.ok((await stat(join(root, path))).isFile(), `${claim.id}: missing ${path}`);
  }
});

test('primary pages include accessibility and metadata basics', async () => {
  for (const file of mainPages) {
    const html = await readFile(join(root, file), 'utf8');
    assert.match(html, /<html lang="en-AU">/i, `${file}: lang`);
    assert.match(html, /<title>[^<]+<\/title>/i, `${file}: title`);
    assert.match(html, /<meta name="description"/i, `${file}: description`);
    assert.match(html, /class="skip-link"/i, `${file}: skip link`);
    assert.match(html, /<main id="main">/i, `${file}: main landmark`);
    assert.match(html, /aria-label="Primary navigation"/i, `${file}: labelled navigation`);
  }
});

test('no prohibited acronym or unsupported promotional patterns are published', async () => {
  const files = [...htmlFiles, 'README.md', 'docs/repository-audit.md', 'docs/claims-governance.md'];
  const prohibited = [
    /\b\d+\+?\s*(customers?|clinics?|therapists?|families?)\b/i,
    /\btrusted by\b/i,
    /\bstart (?:a )?free trial\b/i,
    /\bno credit card\b/i,
    /\bsave[sd]?\s+\d+\s*(?:hours?|days?)\b/i
  ];
  for (const file of files) {
    const text = await readFile(join(root, file), 'utf8');
    for (const pattern of prohibited) assert.doesNotMatch(text, pattern, `${file}: ${pattern}`);
  }
});

test('navigation targets and sitemap pages exist', async () => {
  for (const file of mainPages) {
    const html = await readFile(join(root, file), 'utf8');
    assert.doesNotMatch(html, /(?:href|src)="\/(?!\/)/, `${file}: root-relative path breaks direct file opening`);
    for (const [, rawTarget] of html.matchAll(/(?:href|src)="\.\/([^"]+)/g)) {
      const target = rawTarget.split(/[?#]/, 1)[0];
      if (!target || target.startsWith('api/')) continue;
      const path = join(root, target);
      assert.ok((await stat(path)).isFile(), `${file}: missing local target ./${target}`);
    }
  }
});

test('deployment redirects cover unsupported legacy conversion routes', async () => {
  const config = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
  const sources = new Set(config.redirects.map((redirect) => redirect.source));
  for (const route of ['/pricing', '/case-studies', '/outcomes', '/signup', '/for-families', '/for-therapists', '/for-clinics']) {
    assert.ok(sources.has(route), `missing redirect for ${route}`);
  }
});
