import { Purchases } from './vendor/purchases-js/Purchases.es.js';

// The public catalog endpoint deployed to each Supabase project.
const PRICING_ENDPOINTS = Object.freeze({
  nonProduction: 'https://pugpplqqxztrwwlmnllk.supabase.co/functions/v1/sv1-public-family-pricing',
  production: 'https://twlaptblnznunafvbobr.supabase.co/functions/v1/sv1-public-family-pricing',
});
const ACTIVE_PRICING_ENDPOINT = PRICING_ENDPOINTS.production;

const CHILD_LIMITS = [1, 2, 3];
const INTERVALS = ['monthly', 'annual'];
const ANON_ID_STORAGE_KEY = 'cb_pricing_rc_anon_id';

function collectElements() {
  return {
    toggle: document.querySelector('[data-interval-toggle]'),
    toggleOptions: [...document.querySelectorAll('[data-interval-option]')],
    toggleSavingsBadge: document.querySelector('[data-toggle-savings-badge]'),
    toggleSavingsPercent: document.querySelector('[data-toggle-savings-percent]'),
    childSelector: document.querySelector('[data-child-selector]'),
    childOptions: [...document.querySelectorAll('[data-child-option]')],
    error: document.querySelector('[data-pricing-error]'),
    retry: document.querySelector('[data-pricing-retry]'),
    cards: new Map(CHILD_LIMITS.map((limit) => [limit, document.querySelector(`[data-plan-card="${limit}"]`)])),
  };
}

// RevenueCat's own anonymous-id generator (rather than a generic UUID),
// persisted so repeat visits reuse the same anonymous identity instead of
// minting a new one on every page load. No CognaBright family/user identity
// is ever attached here -- this id only ever backs price display.
function persistedAnonymousAppUserId() {
  try {
    const existing = localStorage.getItem(ANON_ID_STORAGE_KEY);
    if (existing) return existing;
    const generated = Purchases.generateRevenueCatAnonymousAppUserId();
    localStorage.setItem(ANON_ID_STORAGE_KEY, generated);
    return generated;
  } catch {
    return Purchases.generateRevenueCatAnonymousAppUserId();
  }
}

async function fetchPricingConfig() {
  const response = await fetch(ACTIVE_PRICING_ENDPOINT, { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`Pricing config request failed with HTTP ${response.status}`);
  const body = await response.json();
  if (!body || typeof body.publicApiKey !== 'string' || !body.packages) {
    throw new Error('Pricing config response was invalid.');
  }
  return body;
}

function matchPackage(offerings, packageId, productId) {
  const candidates = [];
  if (offerings.current) candidates.push(offerings.current);
  for (const offering of Object.values(offerings.all || {})) {
    if (!candidates.includes(offering)) candidates.push(offering);
  }
  for (const offering of candidates) {
    const candidate = offering.packagesById?.[packageId];
    const product = candidate?.webBillingProduct;
    if (!candidate || !product) continue;
    // Guard against a misconfigured offering silently showing the wrong
    // price: only trust a package/product pair that matches exactly what
    // the server told us to expect.
    if (candidate.identifier !== packageId || product.identifier !== productId) continue;
    return product;
  }
  return null;
}

function periodMatchesInterval(period, interval) {
  if (!period) return false;
  if (interval === 'monthly') return period.unit === 'month' && period.number === 1;
  return (period.unit === 'year' && period.number === 1) || (period.unit === 'month' && period.number === 12);
}

async function loadPrices(config) {
  const appUserId = persistedAnonymousAppUserId();
  const purchases = Purchases.isConfigured()
    ? Purchases.getSharedInstance()
    : Purchases.configure({ apiKey: config.publicApiKey, appUserId });
  const offerings = await purchases.getOfferings();

  const prices = {};
  for (const childLimit of CHILD_LIMITS) {
    prices[childLimit] = {};
    for (const interval of INTERVALS) {
      const mapping = config.packages?.[childLimit]?.[interval];
      if (!mapping) continue;
      const product = matchPackage(offerings, mapping.packageId, mapping.productId);
      if (!product || !periodMatchesInterval(product.period, interval)) continue;
      const amountMicros = typeof product.price?.amountMicros === 'number' ? product.price.amountMicros : null;
      const formattedPrice = typeof product.price?.formattedPrice === 'string' ? product.price.formattedPrice : null;
      if (!formattedPrice || amountMicros === null) continue;
      prices[childLimit][interval] = { formattedPrice, amountMicros };
    }
  }
  return prices;
}

// RevenueCat gives us a ready-formatted price string (e.g. "A$4.99") for
// each price it actually returns, but nothing to format *derived* amounts
// like "12 months of the monthly price" or "the dollar amount saved" --
// those numbers don't come from RevenueCat at all, we compute them. Rather
// than risk Intl.NumberFormat rendering a subtly different currency style
// (symbol placement, spacing) than RevenueCat's own string, we copy the
// exact prefix/suffix/decimal style straight off a real formatted price and
// reapply it to our own computed cent amounts.
function currencyFormatterFrom(formattedPrice) {
  const match = formattedPrice.match(/[\d](?:[\d.,]*[\d])?/);
  const numberPart = match ? match[0] : '0.00';
  const prefix = formattedPrice.slice(0, match ? match.index : 0);
  const suffix = formattedPrice.slice(match ? match.index + numberPart.length : formattedPrice.length);
  const usesCommaDecimal = /,\d{1,2}$/.test(numberPart) && !/\.\d{1,2}$/.test(numberPart);
  const decimalSeparator = usesCommaDecimal ? ',' : '.';
  const thousandsSeparator = usesCommaDecimal ? '.' : ',';
  return (cents) => {
    const [wholePart, fractionPart = '00'] = (cents / 100).toFixed(2).split('.');
    const withThousands = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    return `${prefix}${withThousands}${decimalSeparator}${fractionPart}${suffix}`;
  };
}

// Every number here is derived from the real fetched monthly/annual prices
// for this specific plan tier -- never a fixed marketing constant. Returns
// null when there is nothing honest to compute (missing data, or annual
// isn't actually cheaper).
function annualSavings(priceByInterval) {
  const monthly = priceByInterval.monthly;
  const annual = priceByInterval.annual;
  if (!monthly?.amountMicros || !annual?.amountMicros || monthly.amountMicros <= 0) return null;
  const monthlyCents = Math.round(monthly.amountMicros / 10000);
  const annualCents = Math.round(annual.amountMicros / 10000);
  const monthlyTotalCents = monthlyCents * 12;
  const savingsCents = monthlyTotalCents - annualCents;
  if (savingsCents <= 0) return null;
  const percent = Math.round((savingsCents / monthlyTotalCents) * 100);
  if (percent <= 0 || percent >= 100) return null;
  const format = currencyFormatterFrom(monthly.formattedPrice);
  return {
    percent,
    monthlyTotalFormatted: format(monthlyTotalCents),
    savingsFormatted: format(savingsCents),
  };
}

function resetCardToLoading(card) {
  card.querySelector('[data-price-loading]').hidden = false;
  card.querySelector('[data-price-value]').hidden = true;
  card.querySelector('[data-period-monthly]').hidden = true;
  card.querySelector('[data-period-annual]').hidden = true;
  card.querySelector('[data-monthly-reference]').hidden = true;
  card.querySelector('[data-annual-strike]').hidden = true;
  card.querySelector('[data-savings-tag]').hidden = true;
  card.querySelector('.pricing-card-price-columns').classList.add('is-single-column');
}

function renderCard(card, priceByInterval, activeInterval) {
  const loading = card.querySelector('[data-price-loading]');
  const amount = card.querySelector('[data-price-value]');
  const monthlySuffix = card.querySelector('[data-period-monthly]');
  const annualSuffix = card.querySelector('[data-period-annual]');
  const columns = card.querySelector('.pricing-card-price-columns');
  const monthlyRef = card.querySelector('[data-monthly-reference]');
  const monthlyRefValue = card.querySelector('[data-monthly-reference-value]');
  const strikeLine = card.querySelector('[data-annual-strike]');
  const monthlyTotalEl = card.querySelector('[data-monthly-total]');
  const savingsTag = card.querySelector('[data-savings-tag]');
  const savingsAmountEl = card.querySelector('[data-savings-amount]');

  const active = priceByInterval[activeInterval];
  if (!active) {
    resetCardToLoading(card);
    return;
  }
  loading.hidden = true;
  amount.hidden = false;
  amount.textContent = active.formattedPrice;
  monthlySuffix.hidden = activeInterval !== 'monthly';
  annualSuffix.hidden = activeInterval !== 'annual';

  // Shown only alongside the annual price, so the discount is legible at a
  // glance: the plain monthly rate for comparison, the true 12-month total
  // struck through underneath the annual price, and the dollar amount saved
  // as a distinct badge -- never implying the struck-through total is what
  // will actually be charged.
  const savings = activeInterval === 'annual' ? annualSavings(priceByInterval) : null;
  if (savings && priceByInterval.monthly?.formattedPrice) {
    monthlyRefValue.textContent = priceByInterval.monthly.formattedPrice;
    monthlyRef.hidden = false;
    monthlyTotalEl.textContent = savings.monthlyTotalFormatted;
    strikeLine.hidden = false;
    savingsAmountEl.textContent = savings.savingsFormatted;
    savingsTag.hidden = false;
    columns.classList.remove('is-single-column');
  } else {
    monthlyRef.hidden = true;
    strikeLine.hidden = true;
    savingsTag.hidden = true;
    columns.classList.add('is-single-column');
  }
}

function renderAll(prices, activeInterval, cards) {
  for (const [childLimit, card] of cards) {
    if (card) renderCard(card, prices[childLimit] || {}, activeInterval);
  }
}

// A single "Save X%" figure shown on the Annual option and in the hint line
// below the toggle -- computed from real data (every tier in practice
// resolves to the same genuine percentage; if they ever differ, the
// smallest real discount is shown so the claim is never overstated).
function renderToggleSavings(prices, els) {
  const percents = CHILD_LIMITS.map((limit) => annualSavings(prices[limit] || {})?.percent).filter((value) => value !== undefined && value !== null);
  const percent = percents.length ? Math.min(...percents) : null;
  if (els.toggleSavingsBadge) els.toggleSavingsBadge.hidden = percent === null;
  if (els.toggleSavingsPercent && percent !== null) els.toggleSavingsPercent.textContent = String(percent);
}

function setActiveToggle(options, activeInterval) {
  for (const option of options) {
    const isActive = option.dataset.intervalOption === activeInterval;
    option.setAttribute('aria-checked', String(isActive));
    option.tabIndex = isActive ? 0 : -1;
  }
}

// The child-count selector only highlights the matching card -- it never
// hides the other two, and the highlight styling is identical regardless
// of which count is chosen (no plan is visually marked as better).
function setSelectedChildCard(childLimit, els) {
  for (const [limit, card] of els.cards) {
    if (card) card.classList.toggle('pricing-card-selected', limit === childLimit);
  }
  for (const option of els.childOptions) {
    const isActive = Number(option.dataset.childOption) === childLimit;
    option.setAttribute('aria-checked', String(isActive));
    option.tabIndex = isActive ? 0 : -1;
  }
}

async function initialisePricing() {
  const els = collectElements();
  if (!els.toggle || els.cards.size === 0) return;

  let activeInterval = 'monthly';
  let prices = null;

  async function load() {
    if (els.error) els.error.hidden = true;
    if (els.toggleSavingsBadge) els.toggleSavingsBadge.hidden = true;
    for (const card of els.cards.values()) {
      if (card) resetCardToLoading(card);
    }
    try {
      const config = await fetchPricingConfig();
      prices = await loadPrices(config);
      renderAll(prices, activeInterval, els.cards);
      renderToggleSavings(prices, els);
    } catch (error) {
      console.error('[pricing] failed to load Family prices', error);
      if (els.error) els.error.hidden = false;
    }
  }

  function selectInterval(interval) {
    if (interval !== 'monthly' && interval !== 'annual') return;
    activeInterval = interval;
    setActiveToggle(els.toggleOptions, activeInterval);
    if (prices) renderAll(prices, activeInterval, els.cards);
  }

  for (const option of els.toggleOptions) {
    option.addEventListener('click', () => selectInterval(option.dataset.intervalOption));
  }
  els.toggle.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const next = activeInterval === 'monthly' ? 'annual' : 'monthly';
    selectInterval(next);
    els.toggleOptions.find((option) => option.dataset.intervalOption === next)?.focus();
  });
  els.retry?.addEventListener('click', () => { void load(); });

  if (els.childSelector) {
    setSelectedChildCard(1, els);
    for (const option of els.childOptions) {
      option.addEventListener('click', () => setSelectedChildCard(Number(option.dataset.childOption), els));
    }
    els.childSelector.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const current = els.childOptions.findIndex((option) => option.getAttribute('aria-checked') === 'true');
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      const next = els.childOptions[(current + delta + els.childOptions.length) % els.childOptions.length];
      setSelectedChildCard(Number(next.dataset.childOption), els);
      next.focus();
    });
  }

  await load();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => { void initialisePricing(); }, { once: true });
} else {
  void initialisePricing();
}
