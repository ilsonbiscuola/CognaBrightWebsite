import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { test } from 'node:test';

const locales = ['pt-BR', 'da-DK', 'fr-FR', 'de-DE', 'it-IT', 'es-ES', 'sv-SE'];

function messages(locale) {
  const context = { globalThis: {} };
  runInNewContext(readFileSync(new URL(`../i18n/locales/${locale}.js`, import.meta.url), 'utf8'), context);
  return context.globalThis.CognaBrightLocales[locale].messages;
}

test('authentication and accessibility language is reviewed in every translated locale', () => {
  for (const locale of locales) {
    const catalogue = messages(locale);
    assert.ok(catalogue['common.nav.signIn']);
    assert.ok(catalogue['common.nav.signUp']);
    assert.match(catalogue['accessibility.measures.p1'], /\(WCAG\) 2\.1/);
    assert.match(catalogue['accessibility.measures.p1'], /WCAG 2\.2/);
    assert.match(catalogue[keyFor('Fields marked * are required. This form is separate from the CognaBright application.')], /\*/);
  }
});

test('known partnership and consent mistranslations cannot return', () => {
  const blocked = /sociedade em nome coletivo|société en nom collectif|società in nome collettivo|sociedad colectiva/i;
  for (const locale of locales) {
    const catalogue = messages(locale);
    for (const value of Object.values(catalogue)) assert.doesNotMatch(value, blocked);
  }
  const portuguese = messages('pt-BR');
  assert.doesNotMatch(Object.values(portuguese).join('\n'), /salvaguardas?/i);
  assert.equal(portuguese['organisations.team.card1.title'], 'Manter o apoio centrado na pessoa');
  assert.match(portuguese['contact.form.span12'], /autorizo a CognaBright/);
});

test('reviewed translation overrides cover every non-English locale and only canonical keys', () => {
  const overrides = JSON.parse(readFileSync(new URL('../i18n/reviewed-overrides.json', import.meta.url), 'utf8'));
  const canonical = messagesFromCanonical();
  assert.deepEqual(Object.keys(overrides).sort(), locales.slice().sort());
  for (const [locale, entries] of Object.entries(overrides)) {
    assert.ok(Object.keys(entries).length >= 5, `${locale} should contain reviewed high-risk copy`);
    for (const key of Object.keys(entries)) assert.ok(key in canonical, `${locale} override uses unknown key ${key}`);
  }
});

function keyFor(english) {
  const key = Object.entries(messagesFromCanonical()).find(([, value]) => value === english)?.[0];
  assert.ok(key, `no catalogue key for: ${english}`);
  return key;
}

function messagesFromCanonical() {
  const context = { globalThis: {} };
  runInNewContext(readFileSync(new URL('../i18n/locales/en-AU.js', import.meta.url), 'utf8'), context);
  return context.globalThis.CognaBrightLocales['en-AU'].messages;
}

test('translated launch and legal copy never reintroduces pre-launch wording', () => {
  const prelaunch = /em desenvolvimento e podem mudar|Direção da plataforma|Parcerias organizacionais|Consulta de parceria \||descreve apenas o site público|Que CognaBright melhora/;
  const portuguese = messages('pt-BR');
  assert.doesNotMatch(Object.values(portuguese).join('\n'), prelaunch);
  assert.equal(portuguese[keyFor('See CognaBright in action')], 'Veja o CognaBright em ação');
  assert.equal(portuguese[keyFor('CognaBright | Visual Routines, Functional Communication & Disability Support')], 'CognaBright | Rotinas Visuais, Comunicação Funcional e Suporte para Pessoas com Deficiência');
});
