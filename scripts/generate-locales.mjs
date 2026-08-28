import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const reviewedOverrides = JSON.parse(await readFile(join(root, 'i18n', 'reviewed-overrides.json'), 'utf8'));
const pages = ['index', 'research', 'organisations', 'pilots', 'platform', 'evidence', 'about', 'contact', 'privacy', 'accessibility'];
const sectionNames = {
  index: ['hero', 'audiences', 'approach', 'evidence', 'cta'],
  research: ['hero', 'collaboration', 'status', 'firstConversation', 'cta'],
  organisations: ['hero', 'themes', 'boundaries', 'startingInformation', 'cta'],
  pilots: ['hero', 'readiness', 'meaning', 'cta'],
  platform: ['hero', 'capabilities', 'boundaries', 'cta'],
  evidence: ['hero', 'framework', 'position', 'publication', 'cta'],
  about: ['hero', 'audience', 'principles', 'cta'],
  contact: ['hero', 'form'],
  privacy: ['hero', 'notice'],
  accessibility: ['hero', 'measures']
};

const common = new Map(Object.entries({
  'Skip to main content': 'common.a11y.skipToContent',
  'Cogna Bright home': 'common.a11y.home',
  'Primary navigation': 'common.a11y.primaryNavigation',
  'Mobile navigation': 'common.a11y.mobileNavigation',
  'Open menu': 'common.menu.open',
  'Close menu': 'common.menu.close',
  'Menu': 'common.menu.label',
  'Research': 'common.nav.research',
  'Organisations': 'common.nav.organisations',
  'Future pilots': 'common.nav.pilots',
  'Platform direction': 'common.nav.platform',
  'Evidence status': 'common.nav.evidence',
  'About': 'common.nav.about',
  'Sign in': 'common.nav.signIn',
  'Sign up': 'common.nav.signUp',
  'Discuss a partnership': 'common.actions.discussPartnership',
  'Discuss research': 'common.actions.discussResearch',
  'Express future interest': 'common.actions.expressInterest',
  'Enquire': 'common.actions.enquire',
  'Partnerships': 'common.footer.partnerships',
  'Governance': 'common.footer.governance',
  'Website privacy': 'common.footer.privacy',
  'Accessibility': 'common.footer.accessibility',
  'Verified now': 'common.status.verified',
  'In development': 'common.status.development',
  'Planned for evaluation': 'common.status.evaluation',
  'Not claimed': 'common.status.notClaimed',
  'Cogna Bright': 'common.brand.name',
  'Select language': 'common.language.select',
  'Choose a language': 'common.language.choose',
  'Current language': 'common.language.current',
  'English (Australia)': 'common.language.names.en-AU',
  'English (United States)': 'common.language.names.en-US',
  'Português (Brasil)': 'common.language.names.pt-BR',
  'Dansk': 'common.language.names.da-DK',
  'Français': 'common.language.names.fr-FR',
  'Deutsch': 'common.language.names.de-DE',
  'Italiano': 'common.language.names.it-IT',
  'Español': 'common.language.names.es-ES',
  'Svenska': 'common.language.names.sv-SE',
  'Navigation works as local files. Sending an enquiry requires the website to run through a local or hosted web server.': 'contact.form.messages.localServerRequired',
  'Please confirm that you have read the website privacy notice.': 'contact.form.messages.privacyRequired',
  'Sending…': 'contact.form.messages.sendingShort',
  'Sending your partnership enquiry…': 'contact.form.messages.sending',
  'Unable to send your enquiry right now.': 'contact.form.messages.unavailable',
  'Unable to send your enquiry right now. Please try again later.': 'contact.form.messages.tryLater',
  'Thank you. Your partnership enquiry has been received.': 'contact.form.messages.success',
  'Send partnership enquiry': 'contact.form.submit',
  'Please complete this field.': 'contact.form.validation.required',
  'Enter a valid email address.': 'contact.form.validation.email',
  'This value is too long.': 'contact.form.validation.tooLong',
  'A mother encouraging her son as they arrange visual routine cards together at home': 'home.hero.imageAlt',
  'For example, Australia': 'contact.form.country.placeholder',
  'For example, feasibility research or accessibility review': 'contact.form.interest.placeholder',
  'Describe the question, setting and type of collaboration you would like to explore.': 'contact.form.context.placeholder'
}));

const messages = {};
const valueKeys = new Map();
const usedKeys = new Set();

function addMessage(requestedKey, value) {
  if (!value || /^\d+$/.test(value) || value === '©') return;
  const commonKey = common.get(value);
  let key = commonKey || requestedKey;
  if (!key) return;
  if (messages[key] === value) return;
  let suffix = 2;
  while (usedKeys.has(key)) key = `${requestedKey}${suffix++}`;
  usedKeys.add(key);
  messages[key] = value;
  if (!valueKeys.has(value)) valueKeys.set(value, []);
  valueKeys.get(value).push(key);
}

function attrsFromTag(token) {
  const attrs = {};
  for (const match of token.matchAll(/([:\w-]+)(?:="([^"]*)"|'([^']*)'|=([^\s>]+))?/g)) {
    attrs[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? '';
  }
  return attrs;
}

function classHas(attrs, className) {
  return String(attrs.class || '').split(/\s+/).includes(className);
}

function keyForText(page, stack, counters) {
  const parent = stack.at(-1) || { tag: 'body', attrs: {} };
  const section = [...stack].reverse().find((node) => node.tag === 'section');
  const footer = stack.some((node) => node.tag === 'footer');
  const header = stack.some((node) => node.tag === 'header');
  const article = [...stack].reverse().find((node) => node.tag === 'article');
  const status = [...stack].reverse().find((node) => classHas(node.attrs, 'status-row'));
  if (parent.tag === 'title') return `${page}.meta.title`;
  if (header) return `${page}.header.${parent.tag}${++counters.header}`;
  if (footer) {
    if (classHas(parent.attrs, 'footer-bottom')) return `${page}.footer.legal`;
    return `${page}.footer.${parent.tag}${++counters.footer}`;
  }
  const scope = section ? section.scope : 'content';
  if (parent.tag === 'h1') return `${page}.${scope}.title`;
  if (parent.tag === 'h2') return `${page}.${scope}.heading${++counters[`${scope}Heading`] || 1}`;
  if (parent.tag === 'h3' && article) return `${page}.${scope}.card${article.articleIndex}.title`;
  if (parent.tag === 'li') return `${page}.${scope}.item${++counters[`${scope}Item`] || 1}`;
  if (parent.tag === 'a') return `${page}.${scope}.link${++counters[`${scope}Link`] || 1}`;
  if (parent.tag === 'button') return `${page}.${scope}.button${++counters[`${scope}Button`] || 1}`;
  if (parent.tag === 'label') return `${page}.form.${parent.attrs.for || ++counters.formLabel}.label`;
  if (parent.tag === 'option') return `${page}.form.option.${parent.attrs.value || 'placeholder'}${++counters.formOption}`;
  if (classHas(parent.attrs, 'eyebrow')) {
    if (article) return `${page}.${scope}.card${article.articleIndex}.eyebrow`;
    return `${page}.${scope}.eyebrow${++counters[`${scope}Eyebrow`] || 1}`;
  }
  if (classHas(parent.attrs, 'lead')) return `${page}.${scope}.intro`;
  if (classHas(parent.attrs, 'plain-note')) return `${page}.${scope}.note`;
  if (classHas(parent.attrs, 'status-label') && status) return `${page}.${scope}.status${status.statusIndex}.label`;
  if (parent.tag === 'p' && status) return `${page}.${scope}.status${status.statusIndex}.description`;
  if (parent.tag === 'p' && article) return `${page}.${scope}.card${article.articleIndex}.description`;
  if (parent.tag === 'strong') return `${page}.${scope}.label${++counters[`${scope}Label`] || 1}`;
  if (parent.tag === 'figcaption') return `${page}.${scope}.figureCaption`;
  if (parent.tag === 'span') return `${page}.${scope}.span${++counters[`${scope}Span`] || 1}`;
  return `${page}.${scope}.${parent.tag}${++counters[`${scope}${parent.tag}`] || 1}`;
}

function extractPage(page, html) {
  const meta = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  if (meta) addMessage(`${page}.meta.description`, meta[1]);
  const stack = [];
  const counters = { header: 0, footer: 0, formLabel: 0, formOption: 0 };
  let sectionIndex = 0;
  let articleIndex = 0;
  let statusIndex = 0;
  let skipDepth = 0;
  for (const tokenMatch of html.matchAll(/<[^>]+>|[^<]+/gs)) {
    const token = tokenMatch[0];
    if (token.startsWith('<!--') || token.startsWith('<!doctype')) continue;
    if (token.startsWith('</')) {
      const tag = token.match(/^<\/\s*([\w-]+)/)?.[1]?.toLowerCase();
      if (tag === 'script' || tag === 'style') skipDepth = Math.max(0, skipDepth - 1);
      while (stack.length) {
        const node = stack.pop();
        if (node.tag === tag) break;
      }
      continue;
    }
    if (token.startsWith('<')) {
      const tag = token.match(/^<\s*([\w-]+)/)?.[1]?.toLowerCase();
      if (!tag) continue;
      const attrs = attrsFromTag(token);
      const node = { tag, attrs };
      if (tag === 'section') node.scope = sectionNames[page][sectionIndex++] || `section${sectionIndex}`;
      if (tag === 'article') node.articleIndex = ++articleIndex;
      if (classHas(attrs, 'status-row')) node.statusIndex = ++statusIndex;
      if (['script', 'style'].includes(tag)) skipDepth++;
      if (!/\/$/.test(token.slice(0, -1)) && !['meta', 'link', 'img', 'input', 'br', 'hr'].includes(tag)) stack.push(node);
      if (attrs.placeholder) addMessage(`${page}.form.${attrs.id || attrs.name || tag}.placeholder`, attrs.placeholder);
      if (attrs['aria-label']) addMessage(`${page}.a11y.${attrs['aria-controls'] || tag}${++counters.header}`, attrs['aria-label']);
      if (attrs.alt) addMessage(`${page}.images.${attrs.src?.split('/').pop()?.replace(/\W+/g, '_') || ++counters.image}.alt`, attrs.alt);
      continue;
    }
    if (skipDepth) continue;
    const value = token.replace(/\s+/g, ' ').trim();
    if (value) addMessage(keyForText(page, stack, counters), value);
  }
}

for (const page of pages) extractPage(page, await readFile(join(root, `${page}.html`), 'utf8'));
for (const [value, key] of common) addMessage(key, value);

const localeNames = {
  'en-AU': 'English (Australia)', 'en-US': 'English (United States)', 'pt-BR': 'Português (Brasil)',
  'da-DK': 'Dansk', 'fr-FR': 'Français', 'de-DE': 'Deutsch', 'it-IT': 'Italiano',
  'es-ES': 'Español', 'sv-SE': 'Svenska'
};

function protect(value) {
  return value
    .replaceAll('Cogna Bright', '__COGNABRIGHT__')
    .replaceAll('WCAG 2.1 Level AA', '__WCAG21AA__')
    .replaceAll('WCAG 2.2', '__WCAG22__');
}

function restore(value) {
  return value
    .replaceAll('__COGNABRIGHT__', 'Cogna Bright')
    .replaceAll('__WCAG21AA__', 'WCAG 2.1 Level AA')
    .replaceAll('__WCAG22__', 'WCAG 2.2');
}

async function createBingSession() {
  const response = await fetch('https://www.bing.com/translator');
  const html = await response.text();
  const ig = html.match(/IG:"([^"]+)"/)?.[1];
  const abuse = html.match(/params_AbusePreventionHelper\s*=\s*\[(\d+),"([^"]+)"/);
  const iid = [...html.matchAll(/data-iid="(translator\.\d+)"/g)][0]?.[1];
  if (!response.ok || !ig || !abuse || !iid) throw new Error('Unable to initialise translation session');
  const cookie = response.headers.getSetCookie().map((value) => value.split(';', 1)[0]).join('; ');
  return { ig, key: abuse[1], token: abuse[2], iid, cookie, request: 0 };
}

async function bingTranslateBatch(values, target, session) {
  const separators = values.slice(1).map((_, index) => `[CBSEP${String(index + 1).padStart(6, '0')}]`);
  const text = values.map(protect).reduce((result, value, index) => (
    index ? `${result} ${separators[index - 1]} ${value}` : value
  ), '');
  const body = new URLSearchParams({
    text,
    fromLang: 'en',
    to: target,
    token: session.token,
    key: session.key
  });
  const url = `https://www.bing.com/ttranslatev3?isVertical=1&IG=${session.ig}&IID=${session.iid}.${++session.request}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie': session.cookie,
        'Origin': 'https://www.bing.com',
        'Referer': 'https://www.bing.com/translator',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0 Safari/537.36 Edg/138.0',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body
    });
    if (response.ok) {
      const payload = await response.json();
      const translatedText = restore(payload?.[0]?.translations?.[0]?.text || '');
      const parts = separators.length
        ? translatedText.split(/\s*\[CBSEP\d{6}\]\s*/)
        : [translatedText];
      if (parts.length === values.length && parts.every(Boolean)) return parts;
    }
    await new Promise((resolve) => setTimeout(resolve, 700 * (attempt + 1)));
  }
  if (values.length > 1) {
    const translated = [];
    for (const value of values) translated.push((await bingTranslateBatch([value], target, session))[0]);
    return translated;
  }
  throw new Error(`Translation failed for ${target}: ${values[0].slice(0, 80)}`);
}

function createBatches(values, maxCharacters = 900) {
  const batches = [];
  let current = [];
  let length = 0;
  for (const value of values) {
    const nextLength = length + protect(value).length + 24;
    if (current.length && nextLength > maxCharacters) {
      batches.push(current);
      current = [];
      length = 0;
    }
    current.push(value);
    length += protect(value).length + 24;
  }
  if (current.length) batches.push(current);
  return batches;
}

function americanise(value) {
  const replacements = [
    [/organisational/gi, (m) => m[0] === 'O' ? 'Organizational' : 'organizational'],
    [/organisations/gi, (m) => m[0] === 'O' ? 'Organizations' : 'organizations'],
    [/organisation/gi, (m) => m[0] === 'O' ? 'Organization' : 'organization'],
    [/minimisation/gi, 'minimization'], [/behavioural/gi, 'behavioral'], [/colour/gi, 'color'],
    [/enrolment/gi, 'enrollment'], [/enrol/gi, 'enroll'], [/practise/gi, 'practice']
  ];
  return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
}

function resourceSource(locale, localeMessages) {
  return `(function (root) {\n  root.CognaBrightLocales = root.CognaBrightLocales || {};\n  root.CognaBrightLocales[${JSON.stringify(locale)}] = Object.freeze(${JSON.stringify({ locale, name: localeNames[locale], messages: localeMessages }, null, 2)});\n})(globalThis);\n`;
}

const output = join(root, 'i18n', 'locales');
await mkdir(output, { recursive: true });
await writeFile(join(output, 'en-AU.js'), resourceSource('en-AU', messages), 'utf8');
await writeFile(join(output, 'en-US.js'), resourceSource('en-US', Object.fromEntries(Object.entries(messages).map(([key, value]) => [key, americanise(value)]))), 'utf8');

if (process.argv.includes('--translate')) {
  const targets = { 'pt-BR': 'pt', 'da-DK': 'da', 'fr-FR': 'fr', 'de-DE': 'de', 'it-IT': 'it', 'es-ES': 'es', 'sv-SE': 'sv' };
  for (const [locale, target] of Object.entries(targets)) {
    const session = await createBingSession();
    const uniqueValues = [...new Set(Object.values(messages))];
    const batches = createBatches(uniqueValues);
    const valueTranslations = new Map();
    let cursor = 0;
    async function worker() {
      while (cursor < batches.length) {
        const batch = batches[cursor++];
        const results = await bingTranslateBatch(batch, target, session);
        batch.forEach((value, index) => valueTranslations.set(value, results[index]));
        await new Promise((resolve) => setTimeout(resolve, 120));
      }
    }
    await worker();
    const translated = {
      ...Object.fromEntries(Object.entries(messages).map(([key, value]) => [key, valueTranslations.get(value)])),
      ...(reviewedOverrides[locale] || {})
    };
    await writeFile(join(output, `${locale}.js`), resourceSource(locale, translated), 'utf8');
    console.log(`Generated ${locale}: ${Object.keys(translated).length} keys in ${batches.length} batches`);
  }
}

if (!process.argv.includes('--translate')) {
  for (const locale of Object.keys(reviewedOverrides)) {
    globalThis.CognaBrightLocales = {};
    const sourceUrl = `${pathToFileURL(join(output, `${locale}.js`)).href}?review=${Date.now()}-${locale}`;
    await import(sourceUrl);
    const existing = globalThis.CognaBrightLocales[locale]?.messages || {};
    const merged = Object.fromEntries(Object.keys(messages).map((key) => [
      key,
      reviewedOverrides[locale]?.[key] ?? existing[key] ?? messages[key]
    ]));
    await writeFile(join(output, `${locale}.js`), resourceSource(locale, merged), 'utf8');
  }
}

await writeFile(join(root, 'i18n', 'source-index.json'), `${JSON.stringify({ pages, keys: Object.keys(messages).length, messages }, null, 2)}\n`, 'utf8');
console.log(`Generated canonical resources: ${Object.keys(messages).length} keys`);
