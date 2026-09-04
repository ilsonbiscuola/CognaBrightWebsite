var qg = Object.create;
var us = Object.defineProperty;
var Mg = Object.getOwnPropertyDescriptor;
var qc = (r, e) => (e = Symbol[r]) ? e : Symbol.for("Symbol." + r), ha = (r) => {
  throw TypeError(r);
};
var Mc = (r, e, t) => e in r ? us(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Fc = (r, e) => us(r, "name", { value: e, configurable: !0 });
var zc = (r) => [, , , qg((r == null ? void 0 : r[qc("metadata")]) ?? null)], Oc = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Qa = (r) => r !== void 0 && typeof r != "function" ? ha("Function expected") : r, zg = (r, e, t, n, a) => ({ kind: Oc[r], name: e, metadata: n, addInitializer: (i) => t._ ? ha("Already initialized") : a.push(Qa(i || null)) }), ds = (r, e) => Mc(e, qc("metadata"), r[3]), Nc = (r, e, t, n) => {
  for (var a = 0, i = r[e >> 1], s = i && i.length; a < s; a++) e & 1 ? i[a].call(t) : n = i[a].call(t, n);
  return n;
}, ps = (r, e, t, n, a, i) => {
  var s, l, c, u, d, p = e & 7, _ = !!(e & 8), f = !!(e & 16), g = p > 3 ? r.length + 1 : p ? _ ? 1 : 2 : 0, w = Oc[p + 5], k = p > 3 && (r[g - 1] = []), h = r[g] || (r[g] = []), y = p && (!f && !_ && (a = a.prototype), p < 5 && (p > 3 || !f) && Mg(p < 4 ? a : { get [t]() {
    return H(this, i);
  }, set [t](v) {
    return qe(this, i, v);
  } }, t));
  p ? f && p < 4 && Fc(i, (p > 2 ? "set " : p > 1 ? "get " : "") + t) : Fc(a, t);
  for (var b = n.length - 1; b >= 0; b--)
    u = zg(p, t, c = {}, r[3], h), p && (u.static = _, u.private = f, d = u.access = { has: f ? (v) => Og(a, v) : (v) => t in v }, p ^ 3 && (d.get = f ? (v) => (p ^ 1 ? H : sr)(v, a, p ^ 4 ? i : y.get) : (v) => v[t]), p > 2 && (d.set = f ? (v, P) => qe(v, a, P, p ^ 4 ? i : y.set) : (v, P) => v[t] = P)), l = (0, n[b])(p ? p < 4 ? f ? i : y[w] : p > 4 ? void 0 : { get: y.get, set: y.set } : a, u), c._ = 1, p ^ 4 || l === void 0 ? Qa(l) && (p > 4 ? k.unshift(l) : p ? f ? i = l : y[w] = l : a = l) : typeof l != "object" || l === null ? ha("Object expected") : (Qa(s = l.get) && (y.get = s), Qa(s = l.set) && (y.set = s), Qa(s = l.init) && k.unshift(s));
  return p || ds(r, a), y && us(a, t, y), f ? p ^ 4 ? i : y : a;
}, ee = (r, e, t) => Mc(r, typeof e != "symbol" ? e + "" : e, t), _s = (r, e, t) => e.has(r) || ha("Cannot " + t), Og = (r, e) => Object(e) !== e ? ha('Cannot use the "in" operator on this value') : r.has(e), H = (r, e, t) => (_s(r, e, "read from private field"), t ? t.call(r) : e.get(r)), Oe = (r, e, t) => e.has(r) ? ha("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), qe = (r, e, t, n) => (_s(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), sr = (r, e, t) => (_s(r, e, "access private method"), t);
const Ng = "5";
var xd;
typeof window < "u" && ((xd = window.__svelte ?? (window.__svelte = {})).v ?? (xd.v = /* @__PURE__ */ new Set())).add(Ng);
const Lg = 1, jg = 2, Id = 4, Bg = 8, Rg = 16, Ug = 1, Vg = 2, Wg = 4, Hg = 8, Yg = 16, Gg = 1, Kg = 2, Xg = 4, Cd = 1, Zg = 2, Fr = Symbol(), Jg = "http://www.w3.org/1999/xhtml", Qg = "http://www.w3.org/2000/svg", $g = "@attach", Js = !1;
var Bi = Array.isArray, ef = Array.prototype.indexOf, Ri = Array.from, Td = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Dd = Object.getOwnPropertyDescriptors, rf = Object.prototype, tf = Array.prototype, Ol = Object.getPrototypeOf, Lc = Object.isExtensible;
function ka(r) {
  return typeof r == "function";
}
const er = () => {
};
function nf(r) {
  return r();
}
function fi(r) {
  for (var e = 0; e < r.length; e++)
    r[e]();
}
function Ad() {
  var r, e, t = new Promise((n, a) => {
    r = n, e = a;
  });
  return { promise: t, resolve: r, reject: e };
}
function Ui(r, e) {
  if (Array.isArray(r))
    return r;
  if (e === void 0 || !(Symbol.iterator in r))
    return Array.from(r);
  const t = [];
  for (const n of r)
    if (t.push(n), t.length === e) break;
  return t;
}
const Br = 2, mi = 4, Fo = 8, Nl = 1 << 24, Xt = 16, dn = 32, Mn = 64, Ll = 128, yt = 512, jr = 1024, Kr = 2048, Zt = 4096, it = 8192, sn = 16384, Vi = 32768, Kt = 65536, jc = 1 << 17, Fd = 1 << 18, aa = 1 << 19, qd = 1 << 20, nn = 1 << 25, _o = 32768, Qs = 1 << 21, jl = 1 << 22, xn = 1 << 23, Ht = Symbol("$state"), Md = Symbol("legacy props"), af = Symbol(""), Pa = new class extends Error {
  constructor() {
    super(...arguments);
    ee(this, "name", "StaleReactionError");
    ee(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Bl(r) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function of() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function sf(r) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function lf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function cf(r) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function uf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function df(r) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function pf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function _f() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ff() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function mf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function hf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function zd(r) {
  return r === this.v;
}
function Rl(r, e) {
  return r != r ? e == e : r !== e || r !== null && typeof r == "object" || typeof r == "function";
}
function Od(r) {
  return !Rl(r, this.v);
}
let Ya = !1, vf = !1;
function yf() {
  Ya = !0;
}
let cr = null;
function La(r) {
  cr = r;
}
function He(r) {
  return (
    /** @type {T} */
    Nd().get(r)
  );
}
function gr(r, e) {
  return Nd().set(r, e), e;
}
function _e(r, e = !1, t) {
  cr = {
    p: cr,
    i: !1,
    c: null,
    e: null,
    s: r,
    x: null,
    l: Ya && !e ? { s: null, u: null, $: [] } : null
  };
}
function ge(r) {
  var e = (
    /** @type {ComponentContext} */
    cr
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var n of t)
      ap(n);
  }
  return r !== void 0 && (e.x = r), e.i = !0, cr = e.p, r ?? /** @type {T} */
  {};
}
function Ga() {
  return !Ya || cr !== null && cr.l === null;
}
function Nd(r) {
  return cr === null && Bl(), cr.c ?? (cr.c = new Map(bf(cr) || void 0));
}
function bf(r) {
  let e = r.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let Hn = [];
function Ld() {
  var r = Hn;
  Hn = [], fi(r);
}
function zn(r) {
  if (Hn.length === 0 && !io) {
    var e = Hn;
    queueMicrotask(() => {
      e === Hn && Ld();
    });
  }
  Hn.push(r);
}
function kf() {
  for (; Hn.length > 0; )
    Ld();
}
function jd(r) {
  var e = Xe;
  if (e === null)
    return Ge.f |= xn, r;
  if ((e.f & Vi) === 0) {
    if ((e.f & Ll) === 0)
      throw r;
    e.b.error(r);
  } else
    ja(r, e);
}
function ja(r, e) {
  for (; e !== null; ) {
    if ((e.f & Ll) !== 0)
      try {
        e.b.error(r);
        return;
      } catch (t) {
        r = t;
      }
    e = e.parent;
  }
  throw r;
}
const wf = -7169;
function Dr(r, e) {
  r.f = r.f & wf | e;
}
function Ul(r) {
  (r.f & yt) !== 0 || r.deps === null ? Dr(r, jr) : Dr(r, Zt);
}
function Bd(r) {
  if (r !== null)
    for (const e of r)
      (e.f & Br) === 0 || (e.f & _o) === 0 || (e.f ^= _o, Bd(
        /** @type {Derived} */
        e.deps
      ));
}
function Rd(r, e, t) {
  (r.f & Kr) !== 0 ? e.add(r) : (r.f & Zt) !== 0 && t.add(r), Bd(r.deps), Dr(r, jr);
}
const Wo = /* @__PURE__ */ new Set();
let Je = null, si = null, Nr = null, vt = [], Wi = null, $s = !1, io = !1;
var Ca, Ta, Gn, Kn, Eo, Da, Aa, kt, el, rl, Ud, Vd;
const zi = class zi {
  constructor() {
    Oe(this, kt);
    ee(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ee(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ee(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Oe(this, Ca, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    Oe(this, Ta, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Oe(this, Gn, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    Oe(this, Kn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Oe(this, Eo, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    Oe(this, Da, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    Oe(this, Aa, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ee(this, "skipped_effects", /* @__PURE__ */ new Set());
    ee(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || H(this, Kn) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    vt = [], si = null, this.apply();
    var t = [], n = [];
    for (const i of e)
      sr(this, kt, el).call(this, i, t, n);
    this.is_fork || sr(this, kt, Ud).call(this), this.is_deferred() ? (sr(this, kt, rl).call(this, n), sr(this, kt, rl).call(this, t)) : (si = this, Je = null, Bc(n), Bc(t), si = null, (a = H(this, Eo)) == null || a.resolve()), Nr = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    t !== Fr && !this.previous.has(e) && this.previous.set(e, t), (e.f & xn) === 0 && (this.current.set(e, e.v), Nr == null || Nr.set(e, e.v));
  }
  activate() {
    Je = this, this.apply();
  }
  deactivate() {
    Je === this && (Je = null, Nr = null);
  }
  flush() {
    if (this.activate(), vt.length > 0) {
      if (Wd(), Je !== null && Je !== this)
        return;
    } else H(this, Gn) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of H(this, Ta)) e(this);
    H(this, Ta).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    qe(this, Gn, H(this, Gn) + 1), e && qe(this, Kn, H(this, Kn) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    qe(this, Gn, H(this, Gn) - 1), e && qe(this, Kn, H(this, Kn) - 1), this.revive();
  }
  revive() {
    for (const e of H(this, Da))
      H(this, Aa).delete(e), Dr(e, Kr), un(e);
    for (const e of H(this, Aa))
      Dr(e, Zt), un(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    H(this, Ca).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    H(this, Ta).add(e);
  }
  settled() {
    return (H(this, Eo) ?? qe(this, Eo, Ad())).promise;
  }
  static ensure() {
    if (Je === null) {
      const e = Je = new zi();
      Wo.add(Je), io || zi.enqueue(() => {
        Je === e && e.flush();
      });
    }
    return Je;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    zn(e);
  }
  apply() {
  }
};
Ca = new WeakMap(), Ta = new WeakMap(), Gn = new WeakMap(), Kn = new WeakMap(), Eo = new WeakMap(), Da = new WeakMap(), Aa = new WeakMap(), kt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
el = function(e, t, n) {
  e.f ^= jr;
  for (var a = e.first, i = null; a !== null; ) {
    var s = a.f, l = (s & (dn | Mn)) !== 0, c = l && (s & jr) !== 0, u = c || (s & it) !== 0 || this.skipped_effects.has(a);
    if (!u && a.fn !== null) {
      l ? a.f ^= jr : i !== null && (s & (mi | Fo | Nl)) !== 0 ? i.b.defer_effect(a) : (s & mi) !== 0 ? t.push(a) : Za(a) && ((s & Xt) !== 0 && H(this, Da).add(a), Ra(a));
      var d = a.first;
      if (d !== null) {
        a = d;
        continue;
      }
    }
    var p = a.parent;
    for (a = a.next; a === null && p !== null; )
      p === i && (i = null), a = p.next, p = p.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
rl = function(e) {
  for (var t = 0; t < e.length; t += 1)
    Rd(e[t], H(this, Da), H(this, Aa));
}, Ud = function() {
  if (H(this, Kn) === 0) {
    for (const e of H(this, Ca)) e();
    H(this, Ca).clear();
  }
  H(this, Gn) === 0 && sr(this, kt, Vd).call(this);
}, Vd = function() {
  var a;
  if (Wo.size > 1) {
    this.previous.clear();
    var e = Nr, t = !0;
    for (const i of Wo) {
      if (i === this) {
        t = !1;
        continue;
      }
      const s = [];
      for (const [c, u] of this.current) {
        if (i.current.has(c))
          if (t && u !== i.current.get(c))
            i.current.set(c, u);
          else
            continue;
        s.push(c);
      }
      if (s.length === 0)
        continue;
      const l = [...i.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var n = vt;
        vt = [];
        const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const d of s)
          Hd(d, l, c, u);
        if (vt.length > 0) {
          Je = i, i.apply();
          for (const d of vt)
            sr(a = i, kt, el).call(a, d, [], []);
          i.deactivate();
        }
        vt = n;
      }
    }
    Je = null, Nr = e;
  }
  this.committed = !0, Wo.delete(this);
};
let Wt = zi;
function Pf(r) {
  var e = io;
  io = !0;
  try {
    for (var t; ; ) {
      if (kf(), vt.length === 0 && (Je == null || Je.flush(), vt.length === 0))
        return Wi = null, /** @type {T} */
        t;
      Wd();
    }
  } finally {
    io = e;
  }
}
function Wd() {
  var r = ra;
  $s = !0;
  var e = null;
  try {
    var t = 0;
    for (vi(!0); vt.length > 0; ) {
      var n = Wt.ensure();
      if (t++ > 1e3) {
        var a, i;
        xf();
      }
      n.process(vt), Sn.clear();
    }
  } finally {
    $s = !1, vi(r), Wi = null;
  }
}
function xf() {
  try {
    uf();
  } catch (r) {
    ja(r, Wi);
  }
}
let xt = null;
function Bc(r) {
  var e = r.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var n = r[t++];
      if ((n.f & (sn | it)) === 0 && Za(n) && (xt = /* @__PURE__ */ new Set(), Ra(n), n.deps === null && n.first === null && n.nodes === null && (n.teardown === null && n.ac === null ? cp(n) : n.fn = null), (xt == null ? void 0 : xt.size) > 0)) {
        Sn.clear();
        for (const a of xt) {
          if ((a.f & (sn | it)) !== 0) continue;
          const i = [a];
          let s = a.parent;
          for (; s !== null; )
            xt.has(s) && (xt.delete(s), i.push(s)), s = s.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const c = i[l];
            (c.f & (sn | it)) === 0 && Ra(c);
          }
        }
        xt.clear();
      }
    }
    xt = null;
  }
}
function Hd(r, e, t, n) {
  if (!t.has(r) && (t.add(r), r.reactions !== null))
    for (const a of r.reactions) {
      const i = a.f;
      (i & Br) !== 0 ? Hd(
        /** @type {Derived} */
        a,
        e,
        t,
        n
      ) : (i & (jl | Xt)) !== 0 && (i & Kr) === 0 && Yd(a, e, n) && (Dr(a, Kr), un(
        /** @type {Effect} */
        a
      ));
    }
}
function Yd(r, e, t) {
  const n = t.get(r);
  if (n !== void 0) return n;
  if (r.deps !== null)
    for (const a of r.deps) {
      if (e.includes(a))
        return !0;
      if ((a.f & Br) !== 0 && Yd(
        /** @type {Derived} */
        a,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          a,
          !0
        ), !0;
    }
  return t.set(r, !1), !1;
}
function un(r) {
  for (var e = Wi = r; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if ($s && e === Xe && (t & Xt) !== 0 && (t & Fd) === 0)
      return;
    if ((t & (Mn | dn)) !== 0) {
      if ((t & jr) === 0) return;
      e.f ^= jr;
    }
  }
  vt.push(e);
}
function Vl(r) {
  let e = 0, t = na(0), n;
  return () => {
    Hi() && (o(t), ia(() => (e === 0 && (n = Re(() => r(() => so(t)))), e += 1, () => {
      zn(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, so(t));
      });
    })));
  };
}
var Ef = Kt | aa | Ll;
function Gd(r, e, t) {
  new Sf(r, e, t);
}
var gt, zl, jt, Xn, Bt, ft, Jr, Rt, en, hn, Zn, vn, Jn, Fa, qa, yn, Oi, zr, If, Cf, tl, li, ci, nl;
class Sf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, n) {
    Oe(this, zr);
    /** @type {Boundary | null} */
    ee(this, "parent");
    ee(this, "is_pending", !1);
    /** @type {TemplateNode} */
    Oe(this, gt);
    /** @type {TemplateNode | null} */
    Oe(this, zl, null);
    /** @type {BoundaryProps} */
    Oe(this, jt);
    /** @type {((anchor: Node) => void)} */
    Oe(this, Xn);
    /** @type {Effect} */
    Oe(this, Bt);
    /** @type {Effect | null} */
    Oe(this, ft, null);
    /** @type {Effect | null} */
    Oe(this, Jr, null);
    /** @type {Effect | null} */
    Oe(this, Rt, null);
    /** @type {DocumentFragment | null} */
    Oe(this, en, null);
    /** @type {TemplateNode | null} */
    Oe(this, hn, null);
    Oe(this, Zn, 0);
    Oe(this, vn, 0);
    Oe(this, Jn, !1);
    /** @type {Set<Effect>} */
    Oe(this, Fa, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    Oe(this, qa, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Oe(this, yn, null);
    Oe(this, Oi, Vl(() => (qe(this, yn, na(H(this, Zn))), () => {
      qe(this, yn, null);
    })));
    qe(this, gt, e), qe(this, jt, t), qe(this, Xn, n), this.parent = /** @type {Effect} */
    Xe.b, this.is_pending = !!H(this, jt).pending, qe(this, Bt, sa(() => {
      Xe.b = this;
      {
        var a = sr(this, zr, tl).call(this);
        try {
          qe(this, ft, Qr(() => n(a)));
        } catch (i) {
          this.error(i);
        }
        H(this, vn) > 0 ? sr(this, zr, ci).call(this) : this.is_pending = !1;
      }
      return () => {
        var i;
        (i = H(this, hn)) == null || i.remove();
      };
    }, Ef));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Rd(e, H(this, Fa), H(this, qa));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!H(this, jt).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    sr(this, zr, nl).call(this, e), qe(this, Zn, H(this, Zn) + e), H(this, yn) && Ba(H(this, yn), H(this, Zn));
  }
  get_effect_pending() {
    return H(this, Oi).call(this), o(
      /** @type {Source<number>} */
      H(this, yn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = H(this, jt).onerror;
    let n = H(this, jt).failed;
    if (H(this, Jn) || !t && !n)
      throw e;
    H(this, ft) && (Mr(H(this, ft)), qe(this, ft, null)), H(this, Jr) && (Mr(H(this, Jr)), qe(this, Jr, null)), H(this, Rt) && (Mr(H(this, Rt)), qe(this, Rt, null));
    var a = !1, i = !1;
    const s = () => {
      if (a) {
        hf();
        return;
      }
      a = !0, i && ff(), Wt.ensure(), qe(this, Zn, 0), H(this, Rt) !== null && ea(H(this, Rt), () => {
        qe(this, Rt, null);
      }), this.is_pending = this.has_pending_snippet(), qe(this, ft, sr(this, zr, li).call(this, () => (qe(this, Jn, !1), Qr(() => H(this, Xn).call(this, H(this, gt)))))), H(this, vn) > 0 ? sr(this, zr, ci).call(this) : this.is_pending = !1;
    };
    var l = Ge;
    try {
      Rr(null), i = !0, t == null || t(e, s), i = !1;
    } catch (c) {
      ja(c, H(this, Bt) && H(this, Bt).parent);
    } finally {
      Rr(l);
    }
    n && zn(() => {
      qe(this, Rt, sr(this, zr, li).call(this, () => {
        Wt.ensure(), qe(this, Jn, !0);
        try {
          return Qr(() => {
            n(
              H(this, gt),
              () => e,
              () => s
            );
          });
        } catch (c) {
          return ja(
            c,
            /** @type {Effect} */
            H(this, Bt).parent
          ), null;
        } finally {
          qe(this, Jn, !1);
        }
      }));
    });
  }
}
gt = new WeakMap(), zl = new WeakMap(), jt = new WeakMap(), Xn = new WeakMap(), Bt = new WeakMap(), ft = new WeakMap(), Jr = new WeakMap(), Rt = new WeakMap(), en = new WeakMap(), hn = new WeakMap(), Zn = new WeakMap(), vn = new WeakMap(), Jn = new WeakMap(), Fa = new WeakMap(), qa = new WeakMap(), yn = new WeakMap(), Oi = new WeakMap(), zr = new WeakSet(), If = function() {
  try {
    qe(this, ft, Qr(() => H(this, Xn).call(this, H(this, gt))));
  } catch (e) {
    this.error(e);
  }
}, Cf = function() {
  const e = H(this, jt).pending;
  e && (qe(this, Jr, Qr(() => e(H(this, gt)))), Wt.enqueue(() => {
    var t = sr(this, zr, tl).call(this);
    qe(this, ft, sr(this, zr, li).call(this, () => (Wt.ensure(), Qr(() => H(this, Xn).call(this, t))))), H(this, vn) > 0 ? sr(this, zr, ci).call(this) : (ea(
      /** @type {Effect} */
      H(this, Jr),
      () => {
        qe(this, Jr, null);
      }
    ), this.is_pending = !1);
  }));
}, tl = function() {
  var e = H(this, gt);
  return this.is_pending && (qe(this, hn, Yt()), H(this, gt).before(H(this, hn)), e = H(this, hn)), e;
}, /**
 * @param {() => Effect | null} fn
 */
li = function(e) {
  var t = Xe, n = Ge, a = cr;
  bt(H(this, Bt)), Rr(H(this, Bt)), La(H(this, Bt).ctx);
  try {
    return e();
  } catch (i) {
    return jd(i), null;
  } finally {
    bt(t), Rr(n), La(a);
  }
}, ci = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    H(this, jt).pending
  );
  H(this, ft) !== null && (qe(this, en, document.createDocumentFragment()), H(this, en).append(
    /** @type {TemplateNode} */
    H(this, hn)
  ), pp(H(this, ft), H(this, en))), H(this, Jr) === null && qe(this, Jr, Qr(() => e(H(this, gt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
nl = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && sr(t = this.parent, zr, nl).call(t, e);
    return;
  }
  if (qe(this, vn, H(this, vn) + e), H(this, vn) === 0) {
    this.is_pending = !1;
    for (const n of H(this, Fa))
      Dr(n, Kr), un(n);
    for (const n of H(this, qa))
      Dr(n, Zt), un(n);
    H(this, Fa).clear(), H(this, qa).clear(), H(this, Jr) && ea(H(this, Jr), () => {
      qe(this, Jr, null);
    }), H(this, en) && (H(this, gt).before(H(this, en)), qe(this, en, null));
  }
};
function Kd(r, e, t, n) {
  const a = Ga() ? qo : En;
  if (t.length === 0 && r.length === 0) {
    n(e.map(a));
    return;
  }
  var i = Je, s = (
    /** @type {Effect} */
    Xe
  ), l = Tf();
  function c() {
    Promise.all(t.map((u) => /* @__PURE__ */ Df(u))).then((u) => {
      l();
      try {
        n([...e.map(a), ...u]);
      } catch (d) {
        (s.f & sn) === 0 && ja(d, s);
      }
      i == null || i.deactivate(), hi();
    }).catch((u) => {
      ja(u, s);
    });
  }
  r.length > 0 ? Promise.all(r).then(() => {
    l();
    try {
      return c();
    } finally {
      i == null || i.deactivate(), hi();
    }
  }) : c();
}
function Tf() {
  var r = Xe, e = Ge, t = cr, n = Je;
  return function(i = !0) {
    bt(r), Rr(e), La(t), i && (n == null || n.activate());
  };
}
function hi() {
  bt(null), Rr(null), La(null);
}
// @__NO_SIDE_EFFECTS__
function qo(r) {
  var e = Br | Kr, t = Ge !== null && (Ge.f & Br) !== 0 ? (
    /** @type {Derived} */
    Ge
  ) : null;
  return Xe !== null && (Xe.f |= aa), {
    ctx: cr,
    deps: null,
    effects: null,
    equals: zd,
    f: e,
    fn: r,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Fr
    ),
    wv: 0,
    parent: t ?? Xe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Df(r, e, t) {
  let n = (
    /** @type {Effect | null} */
    Xe
  );
  n === null && of();
  var a = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = na(
    /** @type {V} */
    Fr
  ), l = !Ge, c = /* @__PURE__ */ new Map();
  return Uf(() => {
    var f;
    var u = Ad();
    i = u.promise;
    try {
      Promise.resolve(r()).then(u.resolve, u.reject).then(() => {
        d === Je && d.committed && d.deactivate(), hi();
      });
    } catch (g) {
      u.reject(g), hi();
    }
    var d = (
      /** @type {Batch} */
      Je
    );
    if (l) {
      var p = a.is_rendered();
      a.update_pending_count(1), d.increment(p), (f = c.get(d)) == null || f.reject(Pa), c.delete(d), c.set(d, u);
    }
    const _ = (g, w = void 0) => {
      if (d.activate(), w)
        w !== Pa && (s.f |= xn, Ba(s, w));
      else {
        (s.f & xn) !== 0 && (s.f ^= xn), Ba(s, g);
        for (const [k, h] of c) {
          if (c.delete(k), k === d) break;
          h.reject(Pa);
        }
      }
      l && (a.update_pending_count(-1), d.decrement(p));
    };
    u.promise.then(_, (g) => _(null, g || "unknown"));
  }), Xa(() => {
    for (const u of c.values())
      u.reject(Pa);
  }), new Promise((u) => {
    function d(p) {
      function _() {
        p === i ? u(s) : d(i);
      }
      p.then(_, _);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function m(r) {
  const e = /* @__PURE__ */ qo(r);
  return _p(e), e;
}
// @__NO_SIDE_EFFECTS__
function En(r) {
  const e = /* @__PURE__ */ qo(r);
  return e.equals = Od, e;
}
function Xd(r) {
  var e = r.effects;
  if (e !== null) {
    r.effects = null;
    for (var t = 0; t < e.length; t += 1)
      Mr(
        /** @type {Effect} */
        e[t]
      );
  }
}
function Af(r) {
  for (var e = r.parent; e !== null; ) {
    if ((e.f & Br) === 0)
      return (e.f & sn) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Wl(r) {
  var e, t = Xe;
  bt(Af(r));
  try {
    r.f &= ~_o, Xd(r), e = hp(r);
  } finally {
    bt(t);
  }
  return e;
}
function Zd(r) {
  var e = Wl(r);
  if (!r.equals(e) && (r.wv = fp(), (!(Je != null && Je.is_fork) || r.deps === null) && (r.v = e, r.deps === null))) {
    Dr(r, jr);
    return;
  }
  In || (Nr !== null ? (Hi() || Je != null && Je.is_fork) && Nr.set(r, e) : Ul(r));
}
let al = /* @__PURE__ */ new Set();
const Sn = /* @__PURE__ */ new Map();
let Jd = !1;
function na(r, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: r,
    reactions: null,
    equals: zd,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function re(r, e) {
  const t = na(r);
  return _p(t), t;
}
// @__NO_SIDE_EFFECTS__
function lr(r, e = !1, t = !0) {
  var a;
  const n = na(r);
  return e || (n.equals = Od), Ya && t && cr !== null && cr.l !== null && ((a = cr.l).s ?? (a.s = [])).push(n), n;
}
function q(r, e, t = !1) {
  Ge !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!It || (Ge.f & jc) !== 0) && Ga() && (Ge.f & (Br | Xt | jl | jc)) !== 0 && !(Gr != null && Gr.includes(r)) && gf();
  let n = t ? rr(e) : e;
  return Ba(r, n);
}
function Ba(r, e) {
  if (!r.equals(e)) {
    var t = r.v;
    In ? Sn.set(r, e) : Sn.set(r, t), r.v = e;
    var n = Wt.ensure();
    if (n.capture(r, t), (r.f & Br) !== 0) {
      const a = (
        /** @type {Derived} */
        r
      );
      (r.f & Kr) !== 0 && Wl(a), Ul(a);
    }
    r.wv = fp(), Qd(r, Kr), Ga() && Xe !== null && (Xe.f & jr) !== 0 && (Xe.f & (dn | Mn)) === 0 && (_t === null ? Wf([r]) : _t.push(r)), !n.is_fork && al.size > 0 && !Jd && Ff();
  }
  return e;
}
function Ff() {
  Jd = !1;
  var r = ra;
  vi(!0);
  const e = Array.from(al);
  try {
    for (const t of e)
      (t.f & jr) !== 0 && Dr(t, Zt), Za(t) && Ra(t);
  } finally {
    vi(r);
  }
  al.clear();
}
function so(r) {
  q(r, r.v + 1);
}
function Qd(r, e) {
  var t = r.reactions;
  if (t !== null)
    for (var n = Ga(), a = t.length, i = 0; i < a; i++) {
      var s = t[i], l = s.f;
      if (!(!n && s === Xe)) {
        var c = (l & Kr) === 0;
        if (c && Dr(s, e), (l & Br) !== 0) {
          var u = (
            /** @type {Derived} */
            s
          );
          Nr == null || Nr.delete(u), (l & _o) === 0 && (l & yt && (s.f |= _o), Qd(u, Zt));
        } else c && ((l & Xt) !== 0 && xt !== null && xt.add(
          /** @type {Effect} */
          s
        ), un(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function rr(r) {
  if (typeof r != "object" || r === null || Ht in r)
    return r;
  const e = Ol(r);
  if (e !== rf && e !== tf)
    return r;
  var t = /* @__PURE__ */ new Map(), n = Bi(r), a = /* @__PURE__ */ re(0), i = ta, s = (l) => {
    if (ta === i)
      return l();
    var c = Ge, u = ta;
    Rr(null), Hc(i);
    var d = l();
    return Rr(c), Hc(u), d;
  };
  return n && t.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    r.length
  )), new Proxy(
    /** @type {any} */
    r,
    {
      defineProperty(l, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && pf();
        var d = t.get(c);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ re(u.value);
          return t.set(c, p), p;
        }) : q(d, u.value, !0), !0;
      },
      deleteProperty(l, c) {
        var u = t.get(c);
        if (u === void 0) {
          if (c in l) {
            const d = s(() => /* @__PURE__ */ re(Fr));
            t.set(c, d), so(a);
          }
        } else
          q(u, Fr), so(a);
        return !0;
      },
      get(l, c, u) {
        var f;
        if (c === Ht)
          return r;
        var d = t.get(c), p = c in l;
        if (d === void 0 && (!p || (f = Pn(l, c)) != null && f.writable) && (d = s(() => {
          var g = rr(p ? l[c] : Fr), w = /* @__PURE__ */ re(g);
          return w;
        }), t.set(c, d)), d !== void 0) {
          var _ = o(d);
          return _ === Fr ? void 0 : _;
        }
        return Reflect.get(l, c, u);
      },
      getOwnPropertyDescriptor(l, c) {
        var u = Reflect.getOwnPropertyDescriptor(l, c);
        if (u && "value" in u) {
          var d = t.get(c);
          d && (u.value = o(d));
        } else if (u === void 0) {
          var p = t.get(c), _ = p == null ? void 0 : p.v;
          if (p !== void 0 && _ !== Fr)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(l, c) {
        var _;
        if (c === Ht)
          return !0;
        var u = t.get(c), d = u !== void 0 && u.v !== Fr || Reflect.has(l, c);
        if (u !== void 0 || Xe !== null && (!d || (_ = Pn(l, c)) != null && _.writable)) {
          u === void 0 && (u = s(() => {
            var f = d ? rr(l[c]) : Fr, g = /* @__PURE__ */ re(f);
            return g;
          }), t.set(c, u));
          var p = o(u);
          if (p === Fr)
            return !1;
        }
        return d;
      },
      set(l, c, u, d) {
        var b;
        var p = t.get(c), _ = c in l;
        if (n && c === "length")
          for (var f = u; f < /** @type {Source<number>} */
          p.v; f += 1) {
            var g = t.get(f + "");
            g !== void 0 ? q(g, Fr) : f in l && (g = s(() => /* @__PURE__ */ re(Fr)), t.set(f + "", g));
          }
        if (p === void 0)
          (!_ || (b = Pn(l, c)) != null && b.writable) && (p = s(() => /* @__PURE__ */ re(void 0)), q(p, rr(u)), t.set(c, p));
        else {
          _ = p.v !== Fr;
          var w = s(() => rr(u));
          q(p, w);
        }
        var k = Reflect.getOwnPropertyDescriptor(l, c);
        if (k != null && k.set && k.set.call(d, u), !_) {
          if (n && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              t.get("length")
            ), y = Number(c);
            Number.isInteger(y) && y >= h.v && q(h, y + 1);
          }
          so(a);
        }
        return !0;
      },
      ownKeys(l) {
        o(a);
        var c = Reflect.ownKeys(l).filter((p) => {
          var _ = t.get(p);
          return _ === void 0 || _.v !== Fr;
        });
        for (var [u, d] of t)
          d.v !== Fr && !(u in l) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        _f();
      }
    }
  );
}
function Rc(r) {
  try {
    if (r !== null && typeof r == "object" && Ht in r)
      return r[Ht];
  } catch {
  }
  return r;
}
function qf(r, e) {
  return Object.is(Rc(r), Rc(e));
}
var Uc, $d, ep, rp;
function Mf() {
  if (Uc === void 0) {
    Uc = window, $d = /Firefox/.test(navigator.userAgent);
    var r = Element.prototype, e = Node.prototype, t = Text.prototype;
    ep = Pn(e, "firstChild").get, rp = Pn(e, "nextSibling").get, Lc(r) && (r.__click = void 0, r.__className = void 0, r.__attributes = null, r.__style = void 0, r.__e = void 0), Lc(t) && (t.__t = void 0);
  }
}
function Yt(r = "") {
  return document.createTextNode(r);
}
// @__NO_SIDE_EFFECTS__
function ot(r) {
  return (
    /** @type {TemplateNode | null} */
    ep.call(r)
  );
}
// @__NO_SIDE_EFFECTS__
function Mo(r) {
  return (
    /** @type {TemplateNode | null} */
    rp.call(r)
  );
}
function T(r, e) {
  return /* @__PURE__ */ ot(r);
}
function ce(r, e = !1) {
  {
    var t = /* @__PURE__ */ ot(r);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Mo(t) : t;
  }
}
function W(r, e = 1, t = !1) {
  let n = r;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Mo(n);
  return n;
}
function zf(r) {
  r.textContent = "";
}
function tp() {
  return !1;
}
function Of(r, e) {
  if (e) {
    const t = document.body;
    r.autofocus = !0, zn(() => {
      document.activeElement === t && r.focus();
    });
  }
}
let Vc = !1;
function Nf() {
  Vc || (Vc = !0, document.addEventListener(
    "reset",
    (r) => {
      Promise.resolve().then(() => {
        var e;
        if (!r.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            r.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ka(r) {
  var e = Ge, t = Xe;
  Rr(null), bt(null);
  try {
    return r();
  } finally {
    Rr(e), bt(t);
  }
}
function Lf(r, e, t, n = t) {
  r.addEventListener(e, () => Ka(t));
  const a = r.__on_r;
  a ? r.__on_r = () => {
    a(), n(!0);
  } : r.__on_r = () => n(!0), Nf();
}
function np(r) {
  Xe === null && (Ge === null && cf(), lf()), In && sf();
}
function jf(r, e) {
  var t = e.last;
  t === null ? e.last = e.first = r : (t.next = r, r.prev = t, e.last = r);
}
function wt(r, e, t) {
  var n = Xe;
  n !== null && (n.f & it) !== 0 && (r |= it);
  var a = {
    ctx: cr,
    deps: null,
    nodes: null,
    f: r | Kr | yt,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (t)
    try {
      Ra(a), a.f |= Vi;
    } catch (l) {
      throw Mr(a), l;
    }
  else e !== null && un(a);
  var i = a;
  if (t && i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
  (i.f & aa) === 0 && (i = i.first, (r & Xt) !== 0 && (r & Kt) !== 0 && i !== null && (i.f |= Kt)), i !== null && (i.parent = n, n !== null && jf(i, n), Ge !== null && (Ge.f & Br) !== 0 && (r & Mn) === 0)) {
    var s = (
      /** @type {Derived} */
      Ge
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return a;
}
function Hi() {
  return Ge !== null && !It;
}
function Xa(r) {
  const e = wt(Fo, null, !1);
  return Dr(e, jr), e.teardown = r, e;
}
function ar(r) {
  np();
  var e = (
    /** @type {Effect} */
    Xe.f
  ), t = !Ge && (e & dn) !== 0 && (e & Vi) === 0;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      cr
    );
    (n.e ?? (n.e = [])).push(r);
  } else
    return ap(r);
}
function ap(r) {
  return wt(mi | qd, r, !1);
}
function ol(r) {
  return np(), wt(Fo | qd, r, !0);
}
function Bf(r) {
  Wt.ensure();
  const e = wt(Mn | aa, r, !0);
  return () => {
    Mr(e);
  };
}
function Rf(r) {
  Wt.ensure();
  const e = wt(Mn | aa, r, !0);
  return (t = {}) => new Promise((n) => {
    t.outro ? ea(e, () => {
      Mr(e), n(void 0);
    }) : (Mr(e), n(void 0));
  });
}
function oa(r) {
  return wt(mi, r, !1);
}
function pr(r, e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    cr
  ), n = { effect: null, ran: !1, deps: r };
  t.l.$.push(n), n.effect = ia(() => {
    r(), !n.ran && (n.ran = !0, Re(e));
  });
}
function Hl() {
  var r = (
    /** @type {ComponentContextLegacy} */
    cr
  );
  ia(() => {
    for (var e of r.l.$) {
      e.deps();
      var t = e.effect;
      (t.f & jr) !== 0 && t.deps !== null && Dr(t, Zt), Za(t) && Ra(t), e.ran = !1;
    }
  });
}
function Uf(r) {
  return wt(jl | aa, r, !0);
}
function ia(r, e = 0) {
  return wt(Fo | e, r, !0);
}
function K(r, e = [], t = [], n = []) {
  Kd(n, e, t, (a) => {
    wt(Fo, () => r(...a.map(o)), !0);
  });
}
function sa(r, e = 0) {
  var t = wt(Xt | e, r, !0);
  return t;
}
function op(r, e = 0) {
  var t = wt(Nl | e, r, !0);
  return t;
}
function Qr(r) {
  return wt(dn | aa, r, !0);
}
function ip(r) {
  var e = r.teardown;
  if (e !== null) {
    const t = In, n = Ge;
    Wc(!0), Rr(null);
    try {
      e.call(null);
    } finally {
      Wc(t), Rr(n);
    }
  }
}
function sp(r, e = !1) {
  var t = r.first;
  for (r.first = r.last = null; t !== null; ) {
    const a = t.ac;
    a !== null && Ka(() => {
      a.abort(Pa);
    });
    var n = t.next;
    (t.f & Mn) !== 0 ? t.parent = null : Mr(t, e), t = n;
  }
}
function Vf(r) {
  for (var e = r.first; e !== null; ) {
    var t = e.next;
    (e.f & dn) === 0 && Mr(e), e = t;
  }
}
function Mr(r, e = !0) {
  var t = !1;
  (e || (r.f & Fd) !== 0) && r.nodes !== null && r.nodes.end !== null && (lp(
    r.nodes.start,
    /** @type {TemplateNode} */
    r.nodes.end
  ), t = !0), sp(r, e && !t), yi(r, 0), Dr(r, sn);
  var n = r.nodes && r.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ip(r);
  var a = r.parent;
  a !== null && a.first !== null && cp(r), r.next = r.prev = r.teardown = r.ctx = r.deps = r.fn = r.nodes = r.ac = null;
}
function lp(r, e) {
  for (; r !== null; ) {
    var t = r === e ? null : /* @__PURE__ */ Mo(r);
    r.remove(), r = t;
  }
}
function cp(r) {
  var e = r.parent, t = r.prev, n = r.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), e !== null && (e.first === r && (e.first = n), e.last === r && (e.last = t));
}
function ea(r, e, t = !0) {
  var n = [];
  up(r, n, !0);
  var a = () => {
    t && Mr(r), e && e();
  }, i = n.length;
  if (i > 0) {
    var s = () => --i || a();
    for (var l of n)
      l.out(s);
  } else
    a();
}
function up(r, e, t) {
  if ((r.f & it) === 0) {
    r.f ^= it;
    var n = r.nodes && r.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || t) && e.push(l);
    for (var a = r.first; a !== null; ) {
      var i = a.next, s = (a.f & Kt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (a.f & dn) !== 0 && (r.f & Xt) !== 0;
      up(a, e, s ? t : !1), a = i;
    }
  }
}
function Yl(r) {
  dp(r, !0);
}
function dp(r, e) {
  if ((r.f & it) !== 0) {
    r.f ^= it, (r.f & jr) === 0 && (Dr(r, Kr), un(r));
    for (var t = r.first; t !== null; ) {
      var n = t.next, a = (t.f & Kt) !== 0 || (t.f & dn) !== 0;
      dp(t, a ? e : !1), t = n;
    }
    var i = r.nodes && r.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || e) && s.in();
  }
}
function pp(r, e) {
  if (r.nodes)
    for (var t = r.nodes.start, n = r.nodes.end; t !== null; ) {
      var a = t === n ? null : /* @__PURE__ */ Mo(t);
      e.append(t), t = a;
    }
}
let ra = !1;
function vi(r) {
  ra = r;
}
let In = !1;
function Wc(r) {
  In = r;
}
let Ge = null, It = !1;
function Rr(r) {
  Ge = r;
}
let Xe = null;
function bt(r) {
  Xe = r;
}
let Gr = null;
function _p(r) {
  Ge !== null && (Gr === null ? Gr = [r] : Gr.push(r));
}
let Hr = null, nt = 0, _t = null;
function Wf(r) {
  _t = r;
}
let gp = 1, go = 0, ta = go;
function Hc(r) {
  ta = r;
}
function fp() {
  return ++gp;
}
function Za(r) {
  var e = r.f;
  if ((e & Kr) !== 0)
    return !0;
  if (e & Br && (r.f &= -32769), (e & Zt) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      r.deps
    ), n = t.length, a = 0; a < n; a++) {
      var i = t[a];
      if (Za(
        /** @type {Derived} */
        i
      ) && Zd(
        /** @type {Derived} */
        i
      ), i.wv > r.wv)
        return !0;
    }
    (e & yt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Nr === null && Dr(r, jr);
  }
  return !1;
}
function mp(r, e, t = !0) {
  var n = r.reactions;
  if (n !== null && !(Gr != null && Gr.includes(r)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & Br) !== 0 ? mp(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (t ? Dr(i, Kr) : (i.f & jr) !== 0 && Dr(i, Zt), un(
        /** @type {Effect} */
        i
      ));
    }
}
function hp(r) {
  var g;
  var e = Hr, t = nt, n = _t, a = Ge, i = Gr, s = cr, l = It, c = ta, u = r.f;
  Hr = /** @type {null | Value[]} */
  null, nt = 0, _t = null, Ge = (u & (dn | Mn)) === 0 ? r : null, Gr = null, La(r.ctx), It = !1, ta = ++go, r.ac !== null && (Ka(() => {
    r.ac.abort(Pa);
  }), r.ac = null);
  try {
    r.f |= Qs;
    var d = (
      /** @type {Function} */
      r.fn
    ), p = d(), _ = r.deps;
    if (Hr !== null) {
      var f;
      if (yi(r, nt), _ !== null && nt > 0)
        for (_.length = nt + Hr.length, f = 0; f < Hr.length; f++)
          _[nt + f] = Hr[f];
      else
        r.deps = _ = Hr;
      if (Hi() && (r.f & yt) !== 0)
        for (f = nt; f < _.length; f++)
          ((g = _[f]).reactions ?? (g.reactions = [])).push(r);
    } else _ !== null && nt < _.length && (yi(r, nt), _.length = nt);
    if (Ga() && _t !== null && !It && _ !== null && (r.f & (Br | Zt | Kr)) === 0)
      for (f = 0; f < /** @type {Source[]} */
      _t.length; f++)
        mp(
          _t[f],
          /** @type {Effect} */
          r
        );
    return a !== null && a !== r && (go++, _t !== null && (n === null ? n = _t : n.push(.../** @type {Source[]} */
    _t))), (r.f & xn) !== 0 && (r.f ^= xn), p;
  } catch (w) {
    return jd(w);
  } finally {
    r.f ^= Qs, Hr = e, nt = t, _t = n, Ge = a, Gr = i, La(s), It = l, ta = c;
  }
}
function Hf(r, e) {
  let t = e.reactions;
  if (t !== null) {
    var n = ef.call(t, r);
    if (n !== -1) {
      var a = t.length - 1;
      a === 0 ? t = e.reactions = null : (t[n] = t[a], t.pop());
    }
  }
  if (t === null && (e.f & Br) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Hr === null || !Hr.includes(e))) {
    var i = (
      /** @type {Derived} */
      e
    );
    (i.f & yt) !== 0 && (i.f ^= yt, i.f &= -32769), Ul(i), Xd(i), yi(i, 0);
  }
}
function yi(r, e) {
  var t = r.deps;
  if (t !== null)
    for (var n = e; n < t.length; n++)
      Hf(r, t[n]);
}
function Ra(r) {
  var e = r.f;
  if ((e & sn) === 0) {
    Dr(r, jr);
    var t = Xe, n = ra;
    Xe = r, ra = !0;
    try {
      (e & (Xt | Nl)) !== 0 ? Vf(r) : sp(r), ip(r);
      var a = hp(r);
      r.teardown = typeof a == "function" ? a : null, r.wv = gp;
      var i;
      Js && vf && (r.f & Kr) !== 0 && r.deps;
    } finally {
      ra = n, Xe = t;
    }
  }
}
async function vp() {
  await Promise.resolve(), Pf();
}
function o(r) {
  var e = r.f, t = (e & Br) !== 0;
  if (Ge !== null && !It) {
    var n = Xe !== null && (Xe.f & sn) !== 0;
    if (!n && !(Gr != null && Gr.includes(r))) {
      var a = Ge.deps;
      if ((Ge.f & Qs) !== 0)
        r.rv < go && (r.rv = go, Hr === null && a !== null && a[nt] === r ? nt++ : Hr === null ? Hr = [r] : Hr.includes(r) || Hr.push(r));
      else {
        (Ge.deps ?? (Ge.deps = [])).push(r);
        var i = r.reactions;
        i === null ? r.reactions = [Ge] : i.includes(Ge) || i.push(Ge);
      }
    }
  }
  if (In && Sn.has(r))
    return Sn.get(r);
  if (t) {
    var s = (
      /** @type {Derived} */
      r
    );
    if (In) {
      var l = s.v;
      return ((s.f & jr) === 0 && s.reactions !== null || bp(s)) && (l = Wl(s)), Sn.set(s, l), l;
    }
    var c = (s.f & yt) === 0 && !It && Ge !== null && (ra || (Ge.f & yt) !== 0), u = s.deps === null;
    Za(s) && (c && (s.f |= yt), Zd(s)), c && !u && yp(s);
  }
  if (Nr != null && Nr.has(r))
    return Nr.get(r);
  if ((r.f & xn) !== 0)
    throw r.v;
  return r.v;
}
function yp(r) {
  if (r.deps !== null) {
    r.f |= yt;
    for (const e of r.deps)
      (e.reactions ?? (e.reactions = [])).push(r), (e.f & Br) !== 0 && (e.f & yt) === 0 && yp(
        /** @type {Derived} */
        e
      );
  }
}
function bp(r) {
  if (r.v === Fr) return !0;
  if (r.deps === null) return !1;
  for (const e of r.deps)
    if (Sn.has(e) || (e.f & Br) !== 0 && bp(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Re(r) {
  var e = It;
  try {
    return It = !0, r();
  } finally {
    It = e;
  }
}
function Yf(r, e) {
  var t = {};
  for (var n in r)
    e.includes(n) || (t[n] = r[n]);
  for (var a of Object.getOwnPropertySymbols(r))
    Object.propertyIsEnumerable.call(r, a) && !e.includes(a) && (t[a] = r[a]);
  return t;
}
function We(r) {
  if (!(typeof r != "object" || !r || r instanceof EventTarget)) {
    if (Ht in r)
      il(r);
    else if (!Array.isArray(r))
      for (let e in r) {
        const t = r[e];
        typeof t == "object" && t && Ht in t && il(t);
      }
  }
}
function il(r, e = /* @__PURE__ */ new Set()) {
  if (typeof r == "object" && r !== null && // We don't want to traverse DOM elements
  !(r instanceof EventTarget) && !e.has(r)) {
    e.add(r), r instanceof Date && r.getTime();
    for (let n in r)
      try {
        il(r[n], e);
      } catch {
      }
    const t = Ol(r);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const n = Dd(t);
      for (let a in n) {
        const i = n[a].get;
        if (i)
          try {
            i.call(r);
          } catch {
          }
      }
    }
  }
}
const kp = /* @__PURE__ */ new Set(), sl = /* @__PURE__ */ new Set();
function Gl(r, e, t, n = {}) {
  function a(i) {
    if (n.capture || no.call(e, i), !i.cancelBubble)
      return Ka(() => t == null ? void 0 : t.call(this, i));
  }
  return r.startsWith("pointer") || r.startsWith("touch") || r === "wheel" ? zn(() => {
    e.addEventListener(r, a, n);
  }) : e.addEventListener(r, a, n), a;
}
function Gf(r, e, t, n = {}) {
  var a = Gl(e, r, t, n);
  return () => {
    r.removeEventListener(e, a, n);
  };
}
function qr(r, e, t, n, a) {
  var i = { capture: n, passive: a }, s = Gl(r, e, t, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Xa(() => {
    e.removeEventListener(r, s, i);
  });
}
function Jt(r) {
  for (var e = 0; e < r.length; e++)
    kp.add(r[e]);
  for (var t of sl)
    t(r);
}
let Yc = null;
function no(r) {
  var k;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), n = r.type, a = ((k = r.composedPath) == null ? void 0 : k.call(r)) || [], i = (
    /** @type {null | Element} */
    a[0] || r.target
  );
  Yc = r;
  var s = 0, l = Yc === r && r.__root;
  if (l) {
    var c = a.indexOf(l);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      r.__root = e;
      return;
    }
    var u = a.indexOf(e);
    if (u === -1)
      return;
    c <= u && (s = c);
  }
  if (i = /** @type {Element} */
  a[s] || r.target, i !== e) {
    Td(r, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var d = Ge, p = Xe;
    Rr(null), bt(null);
    try {
      for (var _, f = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + n];
          w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          r.target === i) && w.call(i, r);
        } catch (h) {
          _ ? f.push(h) : _ = h;
        }
        if (r.cancelBubble || g === e || g === null)
          break;
        i = g;
      }
      if (_) {
        for (let h of f)
          queueMicrotask(() => {
            throw h;
          });
        throw _;
      }
    } finally {
      r.__root = e, delete r.currentTarget, Rr(d), bt(p);
    }
  }
}
function Kl(r) {
  var e = document.createElement("template");
  return e.innerHTML = r.replaceAll("<!>", "<!---->"), e.content;
}
function Cn(r, e) {
  var t = (
    /** @type {Effect} */
    Xe
  );
  t.nodes === null && (t.nodes = { start: r, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function V(r, e) {
  var t = (e & Cd) !== 0, n = (e & Zg) !== 0, a, i = !r.startsWith("<!>");
  return () => {
    a === void 0 && (a = Kl(i ? r : "<!>" + r), t || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ ot(a)));
    var s = (
      /** @type {TemplateNode} */
      n || $d ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (t) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(s)
      ), c = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Cn(l, c);
    } else
      Cn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Kf(r, e, t = "svg") {
  var n = !r.startsWith("<!>"), a = (e & Cd) !== 0, i = `<${t}>${n ? r : "<!>" + r}</${t}>`, s;
  return () => {
    if (!s) {
      var l = (
        /** @type {DocumentFragment} */
        Kl(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ ot(l)
      );
      if (a)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ ot(c); )
          s.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ot(c)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ ot(c);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (a) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(u)
      ), p = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Cn(d, p);
    } else
      Cn(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Cr(r, e) {
  return /* @__PURE__ */ Kf(r, e, "svg");
}
function je(r = "") {
  {
    var e = Yt(r + "");
    return Cn(e, e), e;
  }
}
function Ee() {
  var r = document.createDocumentFragment(), e = document.createComment(""), t = Yt();
  return r.append(e, t), Cn(e, t), r;
}
function x(r, e) {
  r !== null && r.before(
    /** @type {Node} */
    e
  );
}
function Xf(r) {
  return r.endsWith("capture") && r !== "gotpointercapture" && r !== "lostpointercapture";
}
const Zf = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Jf(r) {
  return Zf.includes(r);
}
const Qf = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function $f(r) {
  return r = r.toLowerCase(), Qf[r] ?? r;
}
const em = ["touchstart", "touchmove"];
function rm(r) {
  return em.includes(r);
}
let bi = !0;
function Ho(r) {
  bi = r;
}
function fe(r, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = t, r.nodeValue = t + "");
}
function Vn(r, e) {
  return tm(r, e);
}
const va = /* @__PURE__ */ new Map();
function tm(r, { target: e, anchor: t, props: n = {}, events: a, context: i, intro: s = !0 }) {
  Mf();
  var l = /* @__PURE__ */ new Set(), c = (p) => {
    for (var _ = 0; _ < p.length; _++) {
      var f = p[_];
      if (!l.has(f)) {
        l.add(f);
        var g = rm(f);
        e.addEventListener(f, no, { passive: g });
        var w = va.get(f);
        w === void 0 ? (document.addEventListener(f, no, { passive: g }), va.set(f, 1)) : va.set(f, w + 1);
      }
    }
  };
  c(Ri(kp)), sl.add(c);
  var u = void 0, d = Rf(() => {
    var p = t ?? e.appendChild(Yt());
    return Gd(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (_) => {
        if (i) {
          _e({});
          var f = (
            /** @type {ComponentContext} */
            cr
          );
          f.c = i;
        }
        a && (n.$$events = a), bi = s, u = r(_, n) || {}, bi = !0, i && ge();
      }
    ), () => {
      var g;
      for (var _ of l) {
        e.removeEventListener(_, no);
        var f = (
          /** @type {number} */
          va.get(_)
        );
        --f === 0 ? (document.removeEventListener(_, no), va.delete(_)) : va.set(_, f);
      }
      sl.delete(c), p !== t && ((g = p.parentNode) == null || g.removeChild(p));
    };
  });
  return ll.set(u, d), u;
}
let ll = /* @__PURE__ */ new WeakMap();
function ao(r, e) {
  const t = ll.get(r);
  return t ? (ll.delete(r), t(e)) : Promise.resolve();
}
var St, Ut, at, Qn, So, Io, Ni;
class zo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    /** @type {TemplateNode} */
    ee(this, "anchor");
    /** @type {Map<Batch, Key>} */
    Oe(this, St, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    Oe(this, Ut, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    Oe(this, at, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    Oe(this, Qn, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    Oe(this, So, !0);
    Oe(this, Io, () => {
      var e = (
        /** @type {Batch} */
        Je
      );
      if (H(this, St).has(e)) {
        var t = (
          /** @type {Key} */
          H(this, St).get(e)
        ), n = H(this, Ut).get(t);
        if (n)
          Yl(n), H(this, Qn).delete(t);
        else {
          var a = H(this, at).get(t);
          a && (H(this, Ut).set(t, a.effect), H(this, at).delete(t), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, s] of H(this, St)) {
          if (H(this, St).delete(i), i === e)
            break;
          const l = H(this, at).get(s);
          l && (Mr(l.effect), H(this, at).delete(s));
        }
        for (const [i, s] of H(this, Ut)) {
          if (i === t || H(this, Qn).has(i)) continue;
          const l = () => {
            if (Array.from(H(this, St).values()).includes(i)) {
              var u = document.createDocumentFragment();
              pp(s, u), u.append(Yt()), H(this, at).set(i, { effect: s, fragment: u });
            } else
              Mr(s);
            H(this, Qn).delete(i), H(this, Ut).delete(i);
          };
          H(this, So) || !n ? (H(this, Qn).add(i), ea(s, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    Oe(this, Ni, (e) => {
      H(this, St).delete(e);
      const t = Array.from(H(this, St).values());
      for (const [n, a] of H(this, at))
        t.includes(n) || (Mr(a.effect), H(this, at).delete(n));
    });
    this.anchor = e, qe(this, So, t);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var n = (
      /** @type {Batch} */
      Je
    ), a = tp();
    if (t && !H(this, Ut).has(e) && !H(this, at).has(e))
      if (a) {
        var i = document.createDocumentFragment(), s = Yt();
        i.append(s), H(this, at).set(e, {
          effect: Qr(() => t(s)),
          fragment: i
        });
      } else
        H(this, Ut).set(
          e,
          Qr(() => t(this.anchor))
        );
    if (H(this, St).set(n, e), a) {
      for (const [l, c] of H(this, Ut))
        l === e ? n.skipped_effects.delete(c) : n.skipped_effects.add(c);
      for (const [l, c] of H(this, at))
        l === e ? n.skipped_effects.delete(c.effect) : n.skipped_effects.add(c.effect);
      n.oncommit(H(this, Io)), n.ondiscard(H(this, Ni));
    } else
      H(this, Io).call(this);
  }
}
St = new WeakMap(), Ut = new WeakMap(), at = new WeakMap(), Qn = new WeakMap(), So = new WeakMap(), Io = new WeakMap(), Ni = new WeakMap();
function yr(r, e, ...t) {
  var n = new zo(r);
  sa(() => {
    const a = e() ?? null;
    n.ensure(a, a && ((i) => a(i, ...t)));
  }, Kt);
}
function br(r) {
  cr === null && Bl(), Ya && cr.l !== null ? nm(cr).m.push(r) : ar(() => {
    const e = Re(r);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Tt(r) {
  cr === null && Bl(), br(() => () => Re(r));
}
function nm(r) {
  var e = (
    /** @type {ComponentContextLegacy} */
    r.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function G(r, e, t = !1) {
  var n = new zo(r), a = t ? Kt : 0;
  function i(s, l) {
    n.ensure(s, l);
  }
  sa(() => {
    var s = !1;
    e((l, c = !0) => {
      s = !0, i(c, l);
    }), s || i(!1, null);
  }, a);
}
function wp(r, e, t) {
  var n = new zo(r), a = !Ga();
  sa(() => {
    var i = e();
    a && i !== null && typeof i == "object" && (i = /** @type {V} */
    {}), n.ensure(i, t);
  });
}
function ln(r, e) {
  return e;
}
function am(r, e, t) {
  for (var n = [], a = e.length, i, s = e.length, l = 0; l < a; l++) {
    let p = e[l];
    ea(
      p,
      () => {
        if (i) {
          if (i.pending.delete(p), i.done.add(p), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              r.outrogroups
            );
            cl(Ri(i.done)), _.delete(i), _.size === 0 && (r.outrogroups = null);
          }
        } else
          s -= 1;
      },
      !1
    );
  }
  if (s === 0) {
    var c = n.length === 0 && t !== null;
    if (c) {
      var u = (
        /** @type {Element} */
        t
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      zf(d), d.append(u), r.items.clear();
    }
    cl(e, !c);
  } else
    i = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (r.outrogroups ?? (r.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function cl(r, e = !0) {
  for (var t = 0; t < r.length; t++)
    Mr(r[t], e);
}
var Gc;
function Gt(r, e, t, n, a, i = null) {
  var s = r, l = /* @__PURE__ */ new Map(), c = (e & Id) !== 0;
  if (c) {
    var u = (
      /** @type {Element} */
      r
    );
    s = u.appendChild(Yt());
  }
  var d = null, p = /* @__PURE__ */ En(() => {
    var h = t();
    return Bi(h) ? h : h == null ? [] : Ri(h);
  }), _, f = !0;
  function g() {
    k.fallback = d, om(k, _, s, e, n), d !== null && (_.length === 0 ? (d.f & nn) === 0 ? Yl(d) : (d.f ^= nn, oo(d, null, s)) : ea(d, () => {
      d = null;
    }));
  }
  var w = sa(() => {
    _ = /** @type {V[]} */
    o(p);
    for (var h = _.length, y = /* @__PURE__ */ new Set(), b = (
      /** @type {Batch} */
      Je
    ), v = tp(), P = 0; P < h; P += 1) {
      var I = _[P], E = n(I, P), C = f ? null : l.get(E);
      C ? (C.v && Ba(C.v, I), C.i && Ba(C.i, P), v && b.skipped_effects.delete(C.e)) : (C = im(
        l,
        f ? s : Gc ?? (Gc = Yt()),
        I,
        E,
        P,
        a,
        e,
        t
      ), f || (C.e.f |= nn), l.set(E, C)), y.add(E);
    }
    if (h === 0 && i && !d && (f ? d = Qr(() => i(s)) : (d = Qr(() => i(Gc ?? (Gc = Yt()))), d.f |= nn)), !f)
      if (v) {
        for (const [S, F] of l)
          y.has(S) || b.skipped_effects.add(F.e);
        b.oncommit(g), b.ondiscard(() => {
        });
      } else
        g();
    o(p);
  }), k = { effect: w, items: l, outrogroups: null, fallback: d };
  f = !1;
}
function om(r, e, t, n, a) {
  var F, D, O, N, L, Z, z, M, A;
  var i = (n & Bg) !== 0, s = e.length, l = r.items, c = r.effect.first, u, d = null, p, _ = [], f = [], g, w, k, h;
  if (i)
    for (h = 0; h < s; h += 1)
      g = e[h], w = a(g, h), k = /** @type {EachItem} */
      l.get(w).e, (k.f & nn) === 0 && ((D = (F = k.nodes) == null ? void 0 : F.a) == null || D.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(k));
  for (h = 0; h < s; h += 1) {
    if (g = e[h], w = a(g, h), k = /** @type {EachItem} */
    l.get(w).e, r.outrogroups !== null)
      for (const U of r.outrogroups)
        U.pending.delete(k), U.done.delete(k);
    if ((k.f & nn) !== 0)
      if (k.f ^= nn, k === c)
        oo(k, null, t);
      else {
        var y = d ? d.next : c;
        k === r.effect.last && (r.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), gn(r, d, k), gn(r, k, y), oo(k, y, t), d = k, _ = [], f = [], c = d.next;
        continue;
      }
    if ((k.f & it) !== 0 && (Yl(k), i && ((N = (O = k.nodes) == null ? void 0 : O.a) == null || N.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(k))), k !== c) {
      if (u !== void 0 && u.has(k)) {
        if (_.length < f.length) {
          var b = f[0], v;
          d = b.prev;
          var P = _[0], I = _[_.length - 1];
          for (v = 0; v < _.length; v += 1)
            oo(_[v], b, t);
          for (v = 0; v < f.length; v += 1)
            u.delete(f[v]);
          gn(r, P.prev, I.next), gn(r, d, P), gn(r, I, b), c = b, d = I, h -= 1, _ = [], f = [];
        } else
          u.delete(k), oo(k, c, t), gn(r, k.prev, k.next), gn(r, k, d === null ? r.effect.first : d.next), gn(r, d, k), d = k;
        continue;
      }
      for (_ = [], f = []; c !== null && c !== k; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(c), f.push(c), c = c.next;
      if (c === null)
        continue;
    }
    (k.f & nn) === 0 && _.push(k), d = k, c = k.next;
  }
  if (r.outrogroups !== null) {
    for (const U of r.outrogroups)
      U.pending.size === 0 && (cl(Ri(U.done)), (L = r.outrogroups) == null || L.delete(U));
    r.outrogroups.size === 0 && (r.outrogroups = null);
  }
  if (c !== null || u !== void 0) {
    var E = [];
    if (u !== void 0)
      for (k of u)
        (k.f & it) === 0 && E.push(k);
    for (; c !== null; )
      (c.f & it) === 0 && c !== r.fallback && E.push(c), c = c.next;
    var C = E.length;
    if (C > 0) {
      var S = (n & Id) !== 0 && s === 0 ? t : null;
      if (i) {
        for (h = 0; h < C; h += 1)
          (z = (Z = E[h].nodes) == null ? void 0 : Z.a) == null || z.measure();
        for (h = 0; h < C; h += 1)
          (A = (M = E[h].nodes) == null ? void 0 : M.a) == null || A.fix();
      }
      am(r, E, S);
    }
  }
  i && zn(() => {
    var U, j;
    if (p !== void 0)
      for (k of p)
        (j = (U = k.nodes) == null ? void 0 : U.a) == null || j.apply();
  });
}
function im(r, e, t, n, a, i, s, l) {
  var c = (s & Lg) !== 0 ? (s & Rg) === 0 ? /* @__PURE__ */ lr(t, !1, !1) : na(t) : null, u = (s & jg) !== 0 ? na(a) : null;
  return {
    v: c,
    i: u,
    e: Qr(() => (i(e, c ?? t, u ?? a, l), () => {
      r.delete(n);
    }))
  };
}
function oo(r, e, t) {
  if (r.nodes)
    for (var n = r.nodes.start, a = r.nodes.end, i = e && (e.f & nn) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; n !== null; ) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Mo(n)
      );
      if (i.before(n), n === a)
        return;
      n = s;
    }
}
function gn(r, e, t) {
  e === null ? r.effect.first = t : e.next = t, t === null ? r.effect.last = e : t.prev = e;
}
function pn(r, e, t = !1, n = !1, a = !1) {
  var i = r, s = "";
  K(() => {
    var l = (
      /** @type {Effect} */
      Xe
    );
    if (s !== (s = e() ?? "") && (l.nodes !== null && (lp(
      l.nodes.start,
      /** @type {TemplateNode} */
      l.nodes.end
    ), l.nodes = null), s !== "")) {
      var c = s + "";
      t ? c = `<svg>${c}</svg>` : n && (c = `<math>${c}</math>`);
      var u = Kl(c);
      if ((t || n) && (u = /** @type {Element} */
      /* @__PURE__ */ ot(u)), Cn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ot(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), t || n)
        for (; /* @__PURE__ */ ot(u); )
          i.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ ot(u)
          );
      else
        i.before(u);
    }
  });
}
function sm(r, e, t) {
  var n = new zo(r);
  sa(() => {
    var a = e() ?? null;
    n.ensure(a, a && ((i) => t(i, a)));
  }, Kt);
}
const lm = () => performance.now(), rn = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (r) => requestAnimationFrame(r)
  ),
  now: () => lm(),
  tasks: /* @__PURE__ */ new Set()
};
function Pp() {
  const r = rn.now();
  rn.tasks.forEach((e) => {
    e.c(r) || (rn.tasks.delete(e), e.f());
  }), rn.tasks.size !== 0 && rn.tick(Pp);
}
function cm(r) {
  let e;
  return rn.tasks.size === 0 && rn.tick(Pp), {
    promise: new Promise((t) => {
      rn.tasks.add(e = { c: r, f: t });
    }),
    abort() {
      rn.tasks.delete(e);
    }
  };
}
function Yo(r, e) {
  Ka(() => {
    r.dispatchEvent(new CustomEvent(e));
  });
}
function um(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const e = r.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Kc(r) {
  const e = {}, t = r.split(";");
  for (const n of t) {
    const [a, i] = n.split(":");
    if (!a || i === void 0) break;
    const s = um(a.trim());
    e[s] = i.trim();
  }
  return e;
}
const dm = (r) => r;
function xp(r, e, t, n) {
  var b;
  var a = (r & Gg) !== 0, i = (r & Kg) !== 0, s = a && i, l = (r & Xg) !== 0, c = s ? "both" : a ? "in" : "out", u, d = e.inert, p = e.style.overflow, _, f;
  function g() {
    return Ka(() => u ?? (u = t()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
    {}, {
      direction: c
    })));
  }
  var w = {
    is_global: l,
    in() {
      var v;
      if (e.inert = d, !a) {
        f == null || f.abort(), (v = f == null ? void 0 : f.reset) == null || v.call(f);
        return;
      }
      i || _ == null || _.abort(), Yo(e, "introstart"), _ = ul(e, g(), f, 1, () => {
        Yo(e, "introend"), _ == null || _.abort(), _ = u = void 0, e.style.overflow = p;
      });
    },
    out(v) {
      if (!i) {
        v == null || v(), u = void 0;
        return;
      }
      e.inert = !0, Yo(e, "outrostart"), f = ul(e, g(), _, 0, () => {
        Yo(e, "outroend"), v == null || v();
      });
    },
    stop: () => {
      _ == null || _.abort(), f == null || f.abort();
    }
  }, k = (
    /** @type {Effect & { nodes: EffectNodes }} */
    Xe
  );
  if (((b = k.nodes).t ?? (b.t = [])).push(w), a && bi) {
    var h = l;
    if (!h) {
      for (var y = (
        /** @type {Effect | null} */
        k.parent
      ); y && (y.f & Kt) !== 0; )
        for (; (y = y.parent) && (y.f & Xt) === 0; )
          ;
      h = !y || (y.f & Vi) !== 0;
    }
    h && oa(() => {
      Re(() => w.in());
    });
  }
}
function ul(r, e, t, n, a) {
  var i = n === 1;
  if (ka(e)) {
    var s, l = !1;
    return zn(() => {
      if (!l) {
        var k = e({ direction: i ? "in" : "out" });
        s = ul(r, k, t, n, a);
      }
    }), {
      abort: () => {
        l = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return a(), {
      abort: er,
      deactivate: er,
      reset: er,
      t: () => n
    };
  const { delay: c = 0, css: u, tick: d, easing: p = dm } = e;
  var _ = [];
  if (i && t === void 0 && (d && d(0, 1), u)) {
    var f = Kc(u(0, 1));
    _.push(f, f);
  }
  var g = () => 1 - n, w = r.animate(_, { duration: c, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var k = (t == null ? void 0 : t.t()) ?? 1 - n;
    t == null || t.abort();
    var h = n - k, y = (
      /** @type {number} */
      e.duration * Math.abs(h)
    ), b = [];
    if (y > 0) {
      var v = !1;
      if (u)
        for (var P = Math.ceil(y / 16.666666666666668), I = 0; I <= P; I += 1) {
          var E = k + h * p(I / P), C = Kc(u(E, 1 - E));
          b.push(C), v || (v = C.overflow === "hidden");
        }
      v && (r.style.overflow = "hidden"), g = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return k + h * p(S / y);
      }, d && cm(() => {
        if (w.playState !== "running") return !1;
        var S = g();
        return d(S, 1 - S), !0;
      });
    }
    w = r.animate(b, { duration: y, fill: "forwards" }), w.onfinish = () => {
      g = () => n, d == null || d(n, 1 - n), a();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = er);
    },
    deactivate: () => {
      a = er;
    },
    reset: () => {
      n === 0 && (d == null || d(1, 0));
    },
    t: () => g()
  };
}
function Xl(r, e, t, n, a, i) {
  var s = null, l = (
    /** @type {TemplateNode} */
    r
  ), c = new zo(l, !1);
  sa(() => {
    const u = e() || null;
    var d = u === "svg" ? Qg : null;
    if (u === null) {
      c.ensure(null, null), Ho(!0);
      return;
    }
    return c.ensure(u, (p) => {
      if (u) {
        if (s = d ? document.createElementNS(d, u) : document.createElement(u), Cn(s, s), n) {
          var _ = s.appendChild(Yt());
          n(s, _);
        }
        Xe.nodes.end = s, p.before(s);
      }
    }), Ho(!0), () => {
      u && Ho(!1);
    };
  }, Kt), Xa(() => {
    Ho(!0);
  });
}
function ke(r, e) {
  oa(() => {
    var t = r.getRootNode(), n = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + e.hash)) {
      const a = document.createElement("style");
      a.id = e.hash, a.textContent = e.code, n.appendChild(a);
    }
  });
}
function pm(r, e, t) {
  oa(() => {
    var n = Re(() => e(r, t == null ? void 0 : t()) || {});
    if (t && (n != null && n.update)) {
      var a = !1, i = (
        /** @type {any} */
        {}
      );
      ia(() => {
        var s = t();
        We(s), a && Rl(i, s) && (i = s, n.update(s));
      }), a = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function _m(r, e) {
  var t = void 0, n;
  op(() => {
    t !== (t = e()) && (n && (Mr(n), n = null), t && (n = Qr(() => {
      oa(() => (
        /** @type {(node: Element) => void} */
        t(r)
      ));
    })));
  });
}
function Ep(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (e = 0; e < a; e++) r[e] && (t = Ep(r[e])) && (n && (n += " "), n += t);
  } else for (t in r) r[t] && (n && (n += " "), n += t);
  return n;
}
function gm() {
  for (var r, e, t = 0, n = "", a = arguments.length; t < a; t++) (r = arguments[t]) && (e = Ep(r)) && (n && (n += " "), n += e);
  return n;
}
function la(r) {
  return typeof r == "object" ? gm(r) : r ?? "";
}
const Xc = [...` 	
\r\f \v\uFEFF`];
function fm(r, e, t) {
  var n = r == null ? "" : "" + r;
  if (e && (n = n ? n + " " + e : e), t) {
    for (var a in t)
      if (t[a])
        n = n ? n + " " + a : a;
      else if (n.length)
        for (var i = a.length, s = 0; (s = n.indexOf(a, s)) >= 0; ) {
          var l = s + i;
          (s === 0 || Xc.includes(n[s - 1])) && (l === n.length || Xc.includes(n[l])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(l + 1) : s = l;
        }
  }
  return n === "" ? null : n;
}
function Zc(r, e = !1) {
  var t = e ? " !important;" : ";", n = "";
  for (var a in r) {
    var i = r[a];
    i != null && i !== "" && (n += " " + a + ": " + i + t);
  }
  return n;
}
function gs(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r;
}
function mm(r, e) {
  if (e) {
    var t = "", n, a;
    if (Array.isArray(e) ? (n = e[0], a = e[1]) : n = e, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, l = !1, c = [];
      n && c.push(...Object.keys(n).map(gs)), a && c.push(...Object.keys(a).map(gs));
      var u = 0, d = -1;
      const w = r.length;
      for (var p = 0; p < w; p++) {
        var _ = r[p];
        if (l ? _ === "/" && r[p - 1] === "*" && (l = !1) : i ? i === _ && (i = !1) : _ === "/" && r[p + 1] === "*" ? l = !0 : _ === '"' || _ === "'" ? i = _ : _ === "(" ? s++ : _ === ")" && s--, !l && i === !1 && s === 0) {
          if (_ === ":" && d === -1)
            d = p;
          else if (_ === ";" || p === w - 1) {
            if (d !== -1) {
              var f = gs(r.substring(u, d).trim());
              if (!c.includes(f)) {
                _ !== ";" && p++;
                var g = r.substring(u, p).trim();
                t += " " + g + ";";
              }
            }
            u = p + 1, d = -1;
          }
        }
      }
    }
    return n && (t += Zc(n)), a && (t += Zc(a, !0)), t = t.trim(), t === "" ? null : t;
  }
  return r == null ? null : String(r);
}
function ur(r, e, t, n, a, i) {
  var s = r.__className;
  if (s !== t || s === void 0) {
    var l = fm(t, n, i);
    l == null ? r.removeAttribute("class") : e ? r.className = l : r.setAttribute("class", l), r.__className = t;
  } else if (i && a !== i)
    for (var c in i) {
      var u = !!i[c];
      (a == null || u !== !!a[c]) && r.classList.toggle(c, u);
    }
  return i;
}
function fs(r, e = {}, t, n) {
  for (var a in t) {
    var i = t[a];
    e[a] !== i && (t[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, i, n));
  }
}
function Fe(r, e, t, n) {
  var a = r.__style;
  if (a !== e) {
    var i = mm(e, n);
    i == null ? r.removeAttribute("style") : r.style.cssText = i, r.__style = e;
  } else n && (Array.isArray(n) ? (fs(r, t == null ? void 0 : t[0], n[0]), fs(r, t == null ? void 0 : t[1], n[1], "important")) : fs(r, t, n));
  return n;
}
function dl(r, e, t = !1) {
  if (r.multiple) {
    if (e == null)
      return;
    if (!Bi(e))
      return mf();
    for (var n of r.options)
      n.selected = e.includes(Jc(n));
    return;
  }
  for (n of r.options) {
    var a = Jc(n);
    if (qf(a, e)) {
      n.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (r.selectedIndex = -1);
}
function hm(r) {
  var e = new MutationObserver(() => {
    dl(r, r.__value);
  });
  e.observe(r, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Xa(() => {
    e.disconnect();
  });
}
function Jc(r) {
  return "__value" in r ? r.__value : r.value;
}
const $a = Symbol("class"), eo = Symbol("style"), Sp = Symbol("is custom element"), Ip = Symbol("is html");
function vm(r, e) {
  var t = Jl(r);
  t.checked !== (t.checked = // treat null and undefined the same for the initial value
  e ?? void 0) && (r.checked = e);
}
function ym(r, e) {
  e ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected");
}
function he(r, e, t, n) {
  var a = Jl(r);
  a[e] !== (a[e] = t) && (e === "loading" && (r[af] = t), t == null ? r.removeAttribute(e) : typeof t != "string" && Cp(r).includes(e) ? r[e] = t : r.setAttribute(e, t));
}
function bm(r, e, t, n, a = !1, i = !1) {
  var s = Jl(r), l = s[Sp], c = !s[Ip], u = e || {}, d = r.tagName === "OPTION";
  for (var p in e)
    p in t || (t[p] = null);
  t.class ? t.class = la(t.class) : (n || t[$a]) && (t.class = null), t[eo] && (t.style ?? (t.style = null));
  var _ = Cp(r);
  for (const b in t) {
    let v = t[b];
    if (d && b === "value" && v == null) {
      r.value = r.__value = "", u[b] = v;
      continue;
    }
    if (b === "class") {
      var f = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      ur(r, f, v, n, e == null ? void 0 : e[$a], t[$a]), u[b] = v, u[$a] = t[$a];
      continue;
    }
    if (b === "style") {
      Fe(r, v, e == null ? void 0 : e[eo], t[eo]), u[b] = v, u[eo] = t[eo];
      continue;
    }
    var g = u[b];
    if (!(v === g && !(v === void 0 && r.hasAttribute(b)))) {
      u[b] = v;
      var w = b[0] + b[1];
      if (w !== "$$")
        if (w === "on") {
          const P = {}, I = "$$" + b;
          let E = b.slice(2);
          var k = Jf(E);
          if (Xf(E) && (E = E.slice(0, -7), P.capture = !0), !k && g) {
            if (v != null) continue;
            r.removeEventListener(E, u[I], P), u[I] = null;
          }
          if (v != null)
            if (k)
              r[`__${E}`] = v, Jt([E]);
            else {
              let C = function(S) {
                u[b].call(this, S);
              };
              u[I] = Gl(E, r, C, P);
            }
          else k && (r[`__${E}`] = void 0);
        } else if (b === "style")
          he(r, b, v);
        else if (b === "autofocus")
          Of(
            /** @type {HTMLElement} */
            r,
            !!v
          );
        else if (!l && (b === "__value" || b === "value" && v != null))
          r.value = r.__value = v;
        else if (b === "selected" && d)
          ym(
            /** @type {HTMLOptionElement} */
            r,
            v
          );
        else {
          var h = b;
          c || (h = $f(h));
          var y = h === "defaultValue" || h === "defaultChecked";
          if (v == null && !l && !y)
            if (s[b] = null, h === "value" || h === "checked") {
              let P = (
                /** @type {HTMLInputElement} */
                r
              );
              const I = e === void 0;
              if (h === "value") {
                let E = P.defaultValue;
                P.removeAttribute(h), P.defaultValue = E, P.value = P.__value = I ? E : null;
              } else {
                let E = P.defaultChecked;
                P.removeAttribute(h), P.defaultChecked = E, P.checked = I ? E : !1;
              }
            } else
              r.removeAttribute(b);
          else y || _.includes(h) && (l || typeof v != "string") ? (r[h] = v, h in s && (s[h] = Fr)) : typeof v != "function" && he(r, h, v);
        }
    }
  }
  return u;
}
function Zl(r, e, t = [], n = [], a = [], i, s = !1, l = !1) {
  Kd(a, t, n, (c) => {
    var u = void 0, d = {}, p = r.nodeName === "SELECT", _ = !1;
    if (op(() => {
      var g = e(...c.map(o)), w = bm(
        r,
        u,
        g,
        i,
        s,
        l
      );
      _ && p && "value" in g && dl(
        /** @type {HTMLSelectElement} */
        r,
        g.value
      );
      for (let h of Object.getOwnPropertySymbols(d))
        g[h] || Mr(d[h]);
      for (let h of Object.getOwnPropertySymbols(g)) {
        var k = g[h];
        h.description === $g && (!u || k !== u[h]) && (d[h] && Mr(d[h]), d[h] = Qr(() => _m(r, () => k))), w[h] = k;
      }
      u = w;
    }), p) {
      var f = (
        /** @type {HTMLSelectElement} */
        r
      );
      oa(() => {
        dl(
          f,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), hm(f);
      });
    }
    _ = !0;
  });
}
function Jl(r) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    r.__attributes ?? (r.__attributes = {
      [Sp]: r.nodeName.includes("-"),
      [Ip]: r.namespaceURI === Jg
    })
  );
}
var Qc = /* @__PURE__ */ new Map();
function Cp(r) {
  var e = r.getAttribute("is") || r.nodeName, t = Qc.get(e);
  if (t) return t;
  Qc.set(e, t = []);
  for (var n, a = r, i = Element.prototype; i !== a; ) {
    n = Dd(a);
    for (var s in n)
      n[s].set && t.push(s);
    a = Ol(a);
  }
  return t;
}
function km(r, e, t = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Lf(r, "input", async (a) => {
    var i = a ? r.defaultValue : r.value;
    if (i = ms(r) ? hs(i) : i, t(i), Je !== null && n.add(Je), await vp(), i !== (i = e())) {
      var s = r.selectionStart, l = r.selectionEnd, c = r.value.length;
      if (r.value = i ?? "", l !== null) {
        var u = r.value.length;
        s === l && l === c && u > c ? (r.selectionStart = u, r.selectionEnd = u) : (r.selectionStart = s, r.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Re(e) == null && r.value && (t(ms(r) ? hs(r.value) : r.value), Je !== null && n.add(Je)), ia(() => {
    var a = e();
    if (r === document.activeElement) {
      var i = (
        /** @type {Batch} */
        si ?? Je
      );
      if (n.has(i))
        return;
    }
    ms(r) && a === hs(r.value) || r.type === "date" && !a && !r.value || a !== r.value && (r.value = a ?? "");
  });
}
function ms(r) {
  var e = r.type;
  return e === "number" || e === "range";
}
function hs(r) {
  return r === "" ? null : +r;
}
var bn, Ma, Co, Li, Tp;
const ji = class ji {
  /** @param {ResizeObserverOptions} options */
  constructor(e) {
    Oe(this, Li);
    /** */
    Oe(this, bn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    Oe(this, Ma);
    /** @type {ResizeObserverOptions} */
    Oe(this, Co);
    qe(this, Co, e);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(e, t) {
    var n = H(this, bn).get(e) || /* @__PURE__ */ new Set();
    return n.add(t), H(this, bn).set(e, n), sr(this, Li, Tp).call(this).observe(e, H(this, Co)), () => {
      var a = H(this, bn).get(e);
      a.delete(t), a.size === 0 && (H(this, bn).delete(e), H(this, Ma).unobserve(e));
    };
  }
};
bn = new WeakMap(), Ma = new WeakMap(), Co = new WeakMap(), Li = new WeakSet(), Tp = function() {
  return H(this, Ma) ?? qe(this, Ma, new ResizeObserver(
    /** @param {any} entries */
    (e) => {
      for (var t of e) {
        ji.entries.set(t.target, t);
        for (var n of H(this, bn).get(t.target) || [])
          n(t);
      }
    }
  ));
}, /** @static */
ee(ji, "entries", /* @__PURE__ */ new WeakMap());
let ki = ji;
var wm = /* @__PURE__ */ new ki({
  box: "content-box"
}), Pm = /* @__PURE__ */ new ki({
  box: "border-box"
});
function Dp(r, e, t) {
  var n = wm, a = n.observe(
    r,
    /** @param {any} entry */
    (i) => t(i[e])
  );
  Xa(a);
}
function fo(r, e, t) {
  var n = Pm.observe(r, () => t(r[e]));
  oa(() => (Re(() => t(r[e])), n));
}
function $c(r, e) {
  return r === e || (r == null ? void 0 : r[Ht]) === e;
}
function ca(r = {}, e, t, n) {
  return oa(() => {
    var a, i;
    return ia(() => {
      a = i, i = [], Re(() => {
        r !== t(...i) && (e(r, ...i), a && $c(t(...a), r) && e(null, ...a));
      });
    }), () => {
      zn(() => {
        i && $c(t(...i), r) && e(null, ...i);
      });
    };
  }), r;
}
function On(r = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    cr
  ), t = e.l.u;
  if (!t) return;
  let n = () => We(e.s);
  if (r) {
    let a = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ qo(() => {
      let l = !1;
      const c = e.s;
      for (const u in c)
        c[u] !== i[u] && (i[u] = c[u], l = !0);
      return l && a++, a;
    });
    n = () => o(s);
  }
  t.b.length && ol(() => {
    eu(e, n), fi(t.b);
  }), ar(() => {
    const a = Re(() => t.m.map(nf));
    return () => {
      for (const i of a)
        typeof i == "function" && i();
    };
  }), t.a.length && ar(() => {
    eu(e, n), fi(t.a);
  });
}
function eu(r, e) {
  if (r.l.s)
    for (const t of r.l.s) o(t);
  e();
}
function Ap(r, e) {
  var i;
  var t = (
    /** @type {Record<string, Function[] | Function>} */
    (i = r.$$events) == null ? void 0 : i[e.type]
  ), n = Bi(t) ? t.slice() : t == null ? [] : [t];
  for (var a of n)
    a.call(this, e);
}
function Ql(r, e, t) {
  if (r == null)
    return e(void 0), t && t(void 0), er;
  const n = Re(
    () => r.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ya = [];
function et(r, e) {
  return {
    subscribe: mr(r, e).subscribe
  };
}
function mr(r, e = er) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function a(l) {
    if (Rl(r, l) && (r = l, t)) {
      const c = !ya.length;
      for (const u of n)
        u[1](), ya.push(u, r);
      if (c) {
        for (let u = 0; u < ya.length; u += 2)
          ya[u][0](ya[u + 1]);
        ya.length = 0;
      }
    }
  }
  function i(l) {
    a(l(
      /** @type {T} */
      r
    ));
  }
  function s(l, c = er) {
    const u = [l, c];
    return n.add(u), n.size === 1 && (t = e(a, i) || er), l(
      /** @type {T} */
      r
    ), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: a, update: i, subscribe: s };
}
function Ct(r, e, t) {
  const n = !Array.isArray(r), a = n ? [r] : r;
  if (!a.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return et(t, (s, l) => {
    let c = !1;
    const u = [];
    let d = 0, p = er;
    const _ = () => {
      if (d)
        return;
      p();
      const g = e(n ? u[0] : u, s, l);
      i ? s(g) : p = typeof g == "function" ? g : er;
    }, f = a.map(
      (g, w) => Ql(
        g,
        (k) => {
          u[w] = k, d &= ~(1 << w), c && _();
        },
        () => {
          d |= 1 << w;
        }
      )
    );
    return c = !0, _(), function() {
      fi(f), p(), c = !1;
    };
  });
}
function Oo(r) {
  let e;
  return Ql(r, (t) => e = t)(), e;
}
let Go = !1, pl = Symbol();
function Be(r, e, t) {
  const n = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ lr(void 0),
    unsubscribe: er
  });
  if (n.store !== r && !(pl in t))
    if (n.unsubscribe(), n.store = r ?? null, r == null)
      n.source.v = void 0, n.unsubscribe = er;
    else {
      var a = !0;
      n.unsubscribe = Ql(r, (i) => {
        a ? n.source.v = i : q(n.source, i);
      }), a = !1;
    }
  return r && pl in t ? Oo(r) : o(n.source);
}
function wi(r, e) {
  return r.set(e), e;
}
function Ze() {
  const r = {};
  function e() {
    Xa(() => {
      for (var t in r)
        r[t].unsubscribe();
      Td(r, pl, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [r, e];
}
function xm(r) {
  var e = Go;
  try {
    return Go = !1, [r(), Go];
  } finally {
    Go = e;
  }
}
const Em = {
  get(r, e) {
    if (!r.exclude.includes(e))
      return r.props[e];
  },
  set(r, e) {
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    if (!r.exclude.includes(e) && e in r.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: r.props[e]
      };
  },
  has(r, e) {
    return r.exclude.includes(e) ? !1 : e in r.props;
  },
  ownKeys(r) {
    return Reflect.ownKeys(r.props).filter((e) => !r.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function xr(r, e, t) {
  return new Proxy(
    { props: r, exclude: e },
    Em
  );
}
const Sm = {
  get(r, e) {
    let t = r.props.length;
    for (; t--; ) {
      let n = r.props[t];
      if (ka(n) && (n = n()), typeof n == "object" && n !== null && e in n) return n[e];
    }
  },
  set(r, e, t) {
    let n = r.props.length;
    for (; n--; ) {
      let a = r.props[n];
      ka(a) && (a = a());
      const i = Pn(a, e);
      if (i && i.set)
        return i.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(r, e) {
    let t = r.props.length;
    for (; t--; ) {
      let n = r.props[t];
      if (ka(n) && (n = n()), typeof n == "object" && n !== null && e in n) {
        const a = Pn(n, e);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(r, e) {
    if (e === Ht || e === Md) return !1;
    for (let t of r.props)
      if (ka(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(r) {
    const e = [];
    for (let t of r.props)
      if (ka(t) && (t = t()), !!t) {
        for (const n in t)
          e.includes(n) || e.push(n);
        for (const n of Object.getOwnPropertySymbols(t))
          e.includes(n) || e.push(n);
      }
    return e;
  }
};
function dr(...r) {
  return new Proxy({ props: r }, Sm);
}
function X(r, e, t, n) {
  var b;
  var a = !Ya || (t & Vg) !== 0, i = (t & Hg) !== 0, s = (t & Yg) !== 0, l = (
    /** @type {V} */
    n
  ), c = !0, u = () => (c && (c = !1, l = s ? Re(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), d;
  if (i) {
    var p = Ht in r || Md in r;
    d = ((b = Pn(r, e)) == null ? void 0 : b.set) ?? (p && e in r ? (v) => r[e] = v : void 0);
  }
  var _, f = !1;
  i ? [_, f] = xm(() => (
    /** @type {V} */
    r[e]
  )) : _ = /** @type {V} */
  r[e], _ === void 0 && n !== void 0 && (_ = u(), d && (a && df(), d(_)));
  var g;
  if (a ? g = () => {
    var v = (
      /** @type {V} */
      r[e]
    );
    return v === void 0 ? u() : (c = !0, v);
  } : g = () => {
    var v = (
      /** @type {V} */
      r[e]
    );
    return v !== void 0 && (l = /** @type {V} */
    void 0), v === void 0 ? l : v;
  }, a && (t & Wg) === 0)
    return g;
  if (d) {
    var w = r.$$legacy;
    return (
      /** @type {() => V} */
      function(v, P) {
        return arguments.length > 0 ? ((!a || !P || w || f) && d(P ? g() : v), v) : g();
      }
    );
  }
  var k = !1, h = ((t & Ug) !== 0 ? qo : En)(() => (k = !1, g()));
  i && o(h);
  var y = (
    /** @type {Effect} */
    Xe
  );
  return (
    /** @type {() => V} */
    function(v, P) {
      if (arguments.length > 0) {
        const I = P ? o(h) : a && i ? rr(v) : v;
        return q(h, I), k = !0, l !== void 0 && (l = I), v;
      }
      return In && k || (y.f & sn) !== 0 ? h.v : o(h);
    }
  );
}
var Me = /* @__PURE__ */ ((r) => (r[r.UnknownError = 0] = "UnknownError", r[r.UserCancelledError = 1] = "UserCancelledError", r[r.StoreProblemError = 2] = "StoreProblemError", r[r.PurchaseNotAllowedError = 3] = "PurchaseNotAllowedError", r[r.PurchaseInvalidError = 4] = "PurchaseInvalidError", r[r.ProductNotAvailableForPurchaseError = 5] = "ProductNotAvailableForPurchaseError", r[r.ProductAlreadyPurchasedError = 6] = "ProductAlreadyPurchasedError", r[r.ReceiptAlreadyInUseError = 7] = "ReceiptAlreadyInUseError", r[r.InvalidReceiptError = 8] = "InvalidReceiptError", r[r.MissingReceiptFileError = 9] = "MissingReceiptFileError", r[r.NetworkError = 10] = "NetworkError", r[r.InvalidCredentialsError = 11] = "InvalidCredentialsError", r[r.UnexpectedBackendResponseError = 12] = "UnexpectedBackendResponseError", r[r.InvalidAppUserIdError = 14] = "InvalidAppUserIdError", r[r.OperationAlreadyInProgressError = 15] = "OperationAlreadyInProgressError", r[r.UnknownBackendError = 16] = "UnknownBackendError", r[r.InvalidAppleSubscriptionKeyError = 17] = "InvalidAppleSubscriptionKeyError", r[r.IneligibleError = 18] = "IneligibleError", r[r.InsufficientPermissionsError = 19] = "InsufficientPermissionsError", r[r.PaymentPendingError = 20] = "PaymentPendingError", r[r.InvalidSubscriberAttributesError = 21] = "InvalidSubscriberAttributesError", r[r.LogOutWithAnonymousUserError = 22] = "LogOutWithAnonymousUserError", r[r.ConfigurationError = 23] = "ConfigurationError", r[r.UnsupportedError = 24] = "UnsupportedError", r[r.EmptySubscriberAttributesError = 25] = "EmptySubscriberAttributesError", r[r.CustomerInfoError = 28] = "CustomerInfoError", r[r.SignatureVerificationError = 36] = "SignatureVerificationError", r[r.InvalidEmailError = 38] = "InvalidEmailError", r[r.TestStoreSimulatedPurchaseError = 42] = "TestStoreSimulatedPurchaseError", r))(Me || {});
function Im(r) {
  switch (r) {
    case 0:
      return "Unknown error.";
    case 1:
      return "Purchase was cancelled.";
    case 2:
      return "There was a problem with the store.";
    case 3:
      return "The device or user is not allowed to make the purchase.";
    case 4:
      return "One or more of the arguments provided are invalid.";
    case 5:
      return "The product is not available for purchase.";
    case 6:
      return "This product is already active for the user.";
    case 7:
      return "There is already another active subscriber using the same receipt.";
    case 8:
      return "The receipt is not valid.";
    case 9:
      return "The receipt is missing.";
    case 10:
      return "Error performing request. Please check your network connection and try again.";
    case 11:
      return "There was a credentials issue. Check the underlying error for more details.";
    case 12:
      return "Received unexpected response from the backend.";
    case 14:
      return "The app user ID is not valid.";
    case 15:
      return "The operation is already in progress.";
    case 16:
      return "There was an unknown backend error.";
    case 17:
      return "Apple Subscription Key is invalid or not present. In order to provide subscription offers, you must first generate a subscription key. Please see https://docs.revenuecat.com/docs/ios-subscription-offers for more info.";
    case 18:
      return "The User is ineligible for that action.";
    case 19:
      return "App does not have sufficient permissions to make purchases.";
    case 20:
      return "The payment is pending.";
    case 21:
      return "One or more of the attributes sent could not be saved.";
    case 22:
      return "Called logOut but the current user is anonymous.";
    case 23:
      return "There is an issue with your configuration. Check the underlying error for more details.";
    case 24:
      return "There was a problem with the operation. Looks like we don't support that yet. Check the underlying error for more details.";
    case 25:
      return "A request for subscriber attributes returned none.";
    case 28:
      return "There was a problem related to the customer info.";
    case 36:
      return "Request failed signature verification. Please see https://rev.cat/trusted-entitlements for more info.";
    case 38:
      return "Email is not valid. Please provide a valid email address.";
    case 42:
      return "Purchase failure simulated successfully in Test Store.";
  }
}
class Ia {
  // This is the message shown to developers. It is not intended to be displayed to end customers.
  static getPublicMessage(e) {
    return Im(e);
  }
  static getErrorCodeForBackendErrorCode(e) {
    switch (e) {
      case 7101:
      case 7773:
      case 7898:
      case 7899:
      case 7900:
      case 7901:
        return Me.StoreProblemError;
      case 7102:
        return Me.ReceiptAlreadyInUseError;
      case 7103:
        return Me.InvalidReceiptError;
      case 7107:
      case 7224:
      case 7225:
      case 7967:
        return Me.InvalidCredentialsError;
      case 7105:
      case 7106:
      case 7814:
      case 7877:
      case 7878:
        return Me.PurchaseInvalidError;
      case 7772:
        return Me.ProductAlreadyPurchasedError;
      case 7220:
        return Me.InvalidAppUserIdError;
      case 7259:
        return Me.CustomerInfoError;
      case 7229:
        return Me.StoreProblemError;
      case 7230:
      case 7e3:
        return Me.ConfigurationError;
      case 7231:
        return Me.StoreProblemError;
      case 7232:
        return Me.IneligibleError;
      case 7263:
      case 7264:
        return Me.InvalidSubscriberAttributesError;
      case 7104:
      case 7234:
      case 7226:
      case 7110:
        return Me.UnexpectedBackendResponseError;
      case 7662:
        return Me.UnsupportedError;
      case 7012:
      case 7834:
      case 7879:
        return Me.InvalidEmailError;
    }
  }
  static convertCodeToBackendErrorCode(e) {
    return e in an ? e : null;
  }
  static convertPurchaseFlowErrorCodeToErrorCode(e) {
    switch (e) {
      case me.ErrorSettingUpPurchase:
        return Me.StoreProblemError;
      case me.ErrorChargingPayment:
        return Me.PaymentPendingError;
      case me.NetworkError:
        return Me.NetworkError;
      case me.MissingEmailError:
        return Me.PurchaseInvalidError;
      case me.AlreadyPurchasedError:
        return Me.ProductAlreadyPurchasedError;
      case me.InvalidPaddleAPIKeyError:
        return Me.InvalidCredentialsError;
      default:
        return Me.UnknownError;
    }
  }
}
var an = /* @__PURE__ */ ((r) => (r[r.BackendInvalidPlatform = 7e3] = "BackendInvalidPlatform", r[r.BackendInvalidEmail = 7012] = "BackendInvalidEmail", r[r.BackendStoreProblem = 7101] = "BackendStoreProblem", r[r.BackendCannotTransferPurchase = 7102] = "BackendCannotTransferPurchase", r[r.BackendInvalidReceiptToken = 7103] = "BackendInvalidReceiptToken", r[r.BackendInvalidAppStoreSharedSecret = 7104] = "BackendInvalidAppStoreSharedSecret", r[r.BackendInvalidPaymentModeOrIntroPriceNotProvided = 7105] = "BackendInvalidPaymentModeOrIntroPriceNotProvided", r[r.BackendProductIdForGoogleReceiptNotProvided = 7106] = "BackendProductIdForGoogleReceiptNotProvided", r[r.BackendInvalidPlayStoreCredentials = 7107] = "BackendInvalidPlayStoreCredentials", r[r.BackendInternalServerError = 7110] = "BackendInternalServerError", r[r.BackendEmptyAppUserId = 7220] = "BackendEmptyAppUserId", r[r.BackendInvalidAuthToken = 7224] = "BackendInvalidAuthToken", r[r.BackendInvalidAPIKey = 7225] = "BackendInvalidAPIKey", r[r.BackendBadRequest = 7226] = "BackendBadRequest", r[r.BackendPlayStoreQuotaExceeded = 7229] = "BackendPlayStoreQuotaExceeded", r[r.BackendPlayStoreInvalidPackageName = 7230] = "BackendPlayStoreInvalidPackageName", r[r.BackendPlayStoreGenericError = 7231] = "BackendPlayStoreGenericError", r[r.BackendUserIneligibleForPromoOffer = 7232] = "BackendUserIneligibleForPromoOffer", r[r.BackendInvalidAppleSubscriptionKey = 7234] = "BackendInvalidAppleSubscriptionKey", r[r.BackendSubscriberNotFound = 7259] = "BackendSubscriberNotFound", r[r.BackendInvalidSubscriberAttributes = 7263] = "BackendInvalidSubscriberAttributes", r[r.BackendInvalidSubscriberAttributesBody = 7264] = "BackendInvalidSubscriberAttributesBody", r[r.BackendProductIDsMalformed = 7662] = "BackendProductIDsMalformed", r[r.BackendAlreadySubscribedError = 7772] = "BackendAlreadySubscribedError", r[r.BackendPaymentGatewayGenericError = 7773] = "BackendPaymentGatewayGenericError", r[r.BackendOfferNotFound = 7814] = "BackendOfferNotFound", r[r.BackendNoMXRecordsFound = 7834] = "BackendNoMXRecordsFound", r[r.BackendInvalidOperationSession = 7877] = "BackendInvalidOperationSession", r[r.BackendPurchaseCannotBeCompleted = 7878] = "BackendPurchaseCannotBeCompleted", r[r.BackendEmailIsRequired = 7879] = "BackendEmailIsRequired", r[r.BackendGatewaySetupErrorStripeTaxNotActive = 7898] = "BackendGatewaySetupErrorStripeTaxNotActive", r[r.BackendGatewaySetupErrorInvalidTaxOriginAddress = 7899] = "BackendGatewaySetupErrorInvalidTaxOriginAddress", r[r.BackendGatewaySetupErrorMissingRequiredPermission = 7900] = "BackendGatewaySetupErrorMissingRequiredPermission", r[r.BackendGatewaySetupErrorSandboxModeOnly = 7901] = "BackendGatewaySetupErrorSandboxModeOnly", r[r.BackendInvalidPaddleAPIKey = 7967] = "BackendInvalidPaddleAPIKey", r))(an || {});
class Qe extends Error {
  constructor(t, n, a, i) {
    super(n);
    ee(this, "toString", () => `PurchasesError(code: ${Me[this.errorCode]}, message: ${this.message})`);
    this.errorCode = t, this.underlyingErrorMessage = a, this.extra = i;
  }
  /** @internal */
  static getForBackendError(t, n) {
    const a = Ia.getErrorCodeForBackendErrorCode(t);
    return new Qe(
      a,
      Ia.getPublicMessage(a),
      n,
      { backendErrorCode: t }
    );
  }
  /** @internal */
  static getForPurchasesFlowError(t) {
    return new Qe(
      Ia.convertPurchaseFlowErrorCodeToErrorCode(
        t.errorCode
      ),
      t.message,
      t.underlyingErrorMessage
    );
  }
}
class Cm extends Error {
  constructor() {
    super("Purchases must be configured before calling getInstance");
  }
}
var on = /* @__PURE__ */ ((r) => (r.Started = "started", r.InProgress = "in_progress", r.Succeeded = "succeeded", r.Failed = "failed", r))(on || {}), wa = /* @__PURE__ */ ((r) => (r[r.SetupIntentCreationFailed = 1] = "SetupIntentCreationFailed", r[r.PaymentMethodCreationFailed = 2] = "PaymentMethodCreationFailed", r[r.PaymentChargeFailed = 3] = "PaymentChargeFailed", r[r.SetupIntentCompletionFailed = 4] = "SetupIntentCompletionFailed", r[r.AlreadyPurchased = 5] = "AlreadyPurchased", r))(wa || {}), tt = /* @__PURE__ */ ((r) => (r[r.Silent = 0] = "Silent", r[r.Error = 1] = "Error", r[r.Warn = 2] = "Warn", r[r.Info = 3] = "Info", r[r.Debug = 4] = "Debug", r[r.Verbose = 5] = "Verbose", r))(tt || {});
class be {
  static setLogLevel(e) {
    this.logLevel = e;
  }
  static setLogHandler(e) {
    this.logHandler = e;
  }
  static log(e, t = this.logLevel) {
    const n = `[Purchases] ${e}`;
    if (!(this.logLevel < t || t === tt.Silent)) {
      if (this.logHandler !== null) {
        this.logHandler(t, n);
        return;
      }
      switch (t) {
        case tt.Error:
          console.error(n);
          break;
        case tt.Warn:
          console.warn(n);
          break;
        case tt.Info:
          console.info(n);
          break;
        case tt.Debug:
          console.debug(n);
          break;
        case tt.Verbose:
          console.debug(n);
          break;
      }
    }
  }
  static errorLog(e) {
    this.log(e, tt.Error);
  }
  static warnLog(e) {
    this.log(e, tt.Warn);
  }
  static infoLog(e) {
    this.log(e, tt.Info);
  }
  static debugLog(e) {
    this.log(e, tt.Debug);
  }
  static verboseLog(e) {
    this.log(e, tt.Verbose);
  }
}
ee(be, "logLevel", tt.Silent), ee(be, "logHandler", null);
function Fp(r) {
  var e;
  return r.operation.redemption_info ? {
    redeemUrl: ((e = r.operation.redemption_info) == null ? void 0 : e.redeem_url) ?? null
  } : null;
}
var tn = /* @__PURE__ */ ((r) => (r.tax_collection_disabled = "tax_collection_disabled", r.invalid_tax_location = "invalid_tax_location", r.rate_limit_exceeded = "rate_limit_exceeded", r.missing_required_permission = "missing_required_permission", r.invalid_origin_address = "invalid_origin_address", r.invalid_head_office_address = "invalid_head_office_address", r.taxes_not_active = "taxes_not_active", r.stripe_tax_unsupported_country = "stripe_tax_unsupported_country", r.unexpected_gateway_error = "unexpected_gateway_error", r))(tn || {});
function qp(r, e) {
  const t = r.original_amount_in_micros ?? r.total_excluding_tax_in_micros, n = r.applied_discounts ?? [];
  return {
    currency: r.currency,
    originalAmountInMicros: t,
    totalAmountInMicros: r.total_amount_in_micros,
    totalExcludingTaxInMicros: r.total_excluding_tax_in_micros,
    taxCalculationStatus: e,
    taxAmountInMicros: r.tax_amount_in_micros,
    taxBreakdown: r.tax_breakdown,
    appliedDiscounts: n.map((a) => ({
      identifier: a.identifier,
      displayName: a.display_name,
      discountedAmountInMicros: a.discounted_amount_in_micros,
      percentage: a.percentage,
      discountCode: a.discount_code,
      durationMode: a.duration_mode,
      timeWindow: a.time_window
    }))
  };
}
function Mp(r, e) {
  if (r == null) {
    e(
      new ve(
        me.UnknownError,
        "Got an error status but error field is empty."
      )
    );
    return;
  }
  switch (r.code) {
    case wa.SetupIntentCreationFailed:
      e(
        new ve(
          me.ErrorSettingUpPurchase,
          "Setup intent creation failed"
        )
      );
      return;
    case wa.PaymentMethodCreationFailed:
      e(
        new ve(
          me.ErrorSettingUpPurchase,
          "Payment method creation failed"
        )
      );
      return;
    case wa.PaymentChargeFailed:
      e(
        new ve(
          me.ErrorChargingPayment,
          "Payment charge failed"
        )
      );
      return;
    case wa.SetupIntentCompletionFailed:
      e(
        new ve(
          me.ErrorSettingUpPurchase,
          "Setup intent completion failed"
        )
      );
      return;
    case wa.AlreadyPurchased:
      e(
        new ve(
          me.AlreadyPurchasedError,
          "Purchased was already completed"
        )
      );
      return;
    default:
      e(
        new ve(
          me.UnknownError,
          "Unknown error code received"
        )
      );
      return;
  }
}
var me = /* @__PURE__ */ ((r) => (r[r.ErrorSettingUpPurchase = 0] = "ErrorSettingUpPurchase", r[r.ErrorChargingPayment = 1] = "ErrorChargingPayment", r[r.UnknownError = 2] = "UnknownError", r[r.NetworkError = 3] = "NetworkError", r[r.MissingEmailError = 4] = "MissingEmailError", r[r.AlreadyPurchasedError = 5] = "AlreadyPurchasedError", r[r.StripeTaxNotActive = 6] = "StripeTaxNotActive", r[r.StripeInvalidTaxOriginAddress = 7] = "StripeInvalidTaxOriginAddress", r[r.StripeMissingRequiredPermission = 8] = "StripeMissingRequiredPermission", r[r.InvalidPaddleAPIKeyError = 9] = "InvalidPaddleAPIKeyError", r))(me || {});
class ve extends Error {
  constructor(e, t, n, a, i, s) {
    super(t), this.errorCode = e, this.underlyingErrorMessage = n, this.purchasesErrorCode = a, this.extra = i, this.displayPurchaseFlowErrorCode = s;
  }
  getErrorCode() {
    var t;
    const e = ((t = this.extra) == null ? void 0 : t.backendErrorCode) ?? this.purchasesErrorCode;
    return this.displayPurchaseFlowErrorCode ? this.errorCode ?? e : e ?? this.errorCode;
  }
  static fromPurchasesError(e, t, n = !1) {
    var i;
    let a;
    return e.errorCode === Me.ProductAlreadyPurchasedError ? a = 5 : e.errorCode === Me.InvalidEmailError ? a = 4 : e.errorCode === Me.NetworkError ? a = 3 : a = ve.fromBackendErrorCode((i = e.extra) == null ? void 0 : i.backendErrorCode) ?? t, new ve(
      a,
      e.message,
      e.underlyingErrorMessage,
      e.errorCode,
      e.extra,
      n
    );
  }
  static fromBackendErrorCode(e) {
    switch (e) {
      case an.BackendGatewaySetupErrorStripeTaxNotActive:
        return 6;
      case an.BackendGatewaySetupErrorInvalidTaxOriginAddress:
        return 7;
      case an.BackendGatewaySetupErrorMissingRequiredPermission:
        return 8;
      case an.BackendInvalidPaddleAPIKey:
        return 9;
      default:
        return null;
    }
  }
}
class Pi {
  constructor(e, t, n = 10) {
    ee(this, "operationSessionId", null);
    ee(this, "backend");
    ee(this, "eventsTracker");
    ee(this, "maxNumberAttempts");
    ee(this, "waitMSBetweenAttempts", 1e3);
    this.backend = e, this.eventsTracker = t, this.maxNumberAttempts = n;
  }
  static getBackendErrorCodeForInterruptedCheckout(e) {
    switch (e) {
      case tn.taxes_not_active:
      case tn.stripe_tax_unsupported_country:
        return an.BackendGatewaySetupErrorStripeTaxNotActive;
      case tn.invalid_origin_address:
      case tn.invalid_head_office_address:
        return an.BackendGatewaySetupErrorInvalidTaxOriginAddress;
      case tn.missing_required_permission:
        return an.BackendGatewaySetupErrorMissingRequiredPermission;
      default:
        return null;
    }
  }
  static throwIfCheckoutShouldBeInterrupted(e) {
    if (!e.interrupt_checkout)
      return;
    const t = Pi.getBackendErrorCodeForInterruptedCheckout(
      e.failed_reason
    );
    throw t == null ? new ve(
      0,
      "There was a problem with the store.",
      e.failed_reason ?? "Checkout interrupted."
    ) : ve.fromPurchasesError(
      Qe.getForBackendError(
        t,
        e.failed_reason ?? null
      ),
      0
      /* ErrorSettingUpPurchase */
    );
  }
  async prepareCheckout(e, t) {
    try {
      return await this.backend.postCheckoutPrepare(
        e,
        t
      );
    } catch (n) {
      if (n instanceof Qe)
        throw ve.fromPurchasesError(
          n,
          0
          /* ErrorSettingUpPurchase */
        );
      {
        const a = "Unknown error preparing purchase: " + String(n);
        throw be.errorLog(a), new ve(
          2,
          a
        );
      }
    }
  }
  async checkoutStart({
    appUserId: e,
    productId: t,
    purchaseOption: n,
    presentedOfferingContext: a,
    workflowPurchaseContext: i,
    paywallId: s,
    paywallSessionId: l,
    customerEmail: c,
    metadata: u,
    locale: d,
    attributionMetadata: p
  }) {
    try {
      const _ = this.eventsTracker.getTraceId(), f = i == null ? void 0 : i.stepId, g = i == null ? void 0 : i.urlParameters, w = await this.backend.postCheckoutStart({
        appUserId: e,
        productId: t,
        purchaseOption: n,
        presentedOfferingContext: a,
        traceId: _,
        presentedStepId: f,
        urlParameters: g,
        paywallId: s,
        paywallSessionId: l,
        customerEmail: c,
        metadata: u,
        locale: d,
        attributionMetadata: p
      });
      return this.operationSessionId = w.operation_session_id, w;
    } catch (_) {
      if (_ instanceof Qe)
        throw ve.fromPurchasesError(
          _,
          0
          /* ErrorSettingUpPurchase */
        );
      {
        const f = "Unknown error starting purchase: " + String(_);
        throw be.errorLog(f), new ve(
          2,
          f
        );
      }
    }
  }
  async checkoutRefreshPricing({
    countryCode: e,
    postalCode: t,
    state: n,
    city: a,
    addressLine1: i,
    addressLine2: s,
    discountCode: l,
    signal: c
  } = {}) {
    const u = this.operationSessionId;
    if (!u)
      throw new ve(
        0,
        "No purchase started"
      );
    try {
      const d = await this.backend.patchCheckoutRefreshPricing(
        u,
        {
          countryCode: e,
          postalCode: t,
          state: n,
          city: a,
          addressLine1: i,
          addressLine2: s,
          discountCode: l,
          signal: c
        }
      );
      return Pi.throwIfCheckoutShouldBeInterrupted(d), d;
    } catch (d) {
      if (d instanceof ve)
        throw d;
      if (d instanceof Qe)
        throw ve.fromPurchasesError(
          d,
          0
          /* ErrorSettingUpPurchase */
        );
      {
        const p = "Unknown error refreshing checkout pricing: " + String(d);
        throw be.errorLog(p), new ve(
          2,
          p
        );
      }
    }
  }
  async checkoutComplete(e, t) {
    const n = this.operationSessionId;
    if (!n)
      throw new ve(
        0,
        "No purchase started"
      );
    try {
      return await this.backend.postCheckoutComplete(
        n,
        e,
        t
      );
    } catch (a) {
      if (a instanceof Qe)
        throw ve.fromPurchasesError(
          a,
          0
          /* ErrorSettingUpPurchase */
        );
      {
        const i = "Unknown error starting purchase: " + String(a);
        throw be.errorLog(i), new ve(
          2,
          i
        );
      }
    }
  }
  async pollCurrentPurchaseForCompletion() {
    const e = this.operationSessionId;
    if (!e)
      throw new ve(
        0,
        "No purchase in progress"
      );
    return new Promise((t, n) => {
      const a = (i = 1) => {
        if (i > this.maxNumberAttempts) {
          this.clearPurchaseInProgress(), n(
            new ve(
              2,
              "Max attempts reached trying to get successful purchase status"
            )
          );
          return;
        }
        this.backend.getCheckoutStatus(e).then((s) => {
          const l = s.operation.store_transaction_identifier, c = s.operation.product_identifier, u = s.operation.purchase_date ? isNaN(Date.parse(s.operation.purchase_date)) ? null : new Date(s.operation.purchase_date) : null;
          switch (s.operation.status) {
            case on.Started:
            case on.InProgress:
              setTimeout(
                () => a(i + 1),
                this.waitMSBetweenAttempts
              );
              break;
            case on.Succeeded:
              if (this.clearPurchaseInProgress(), !l || !c || !u) {
                n(
                  new ve(
                    2,
                    "Missing required fields in operation response."
                  )
                );
                return;
              }
              t({
                redemptionInfo: Fp(s),
                operationSessionId: e,
                storeTransactionIdentifier: l,
                productIdentifier: c,
                purchaseDate: u,
                attributionMetadata: s.attribution_metadata ?? void 0
              });
              return;
            case on.Failed:
              this.clearPurchaseInProgress(), Mp(
                s.operation.error,
                n
              );
          }
        }).catch((s) => {
          const l = ve.fromPurchasesError(
            s,
            3
            /* NetworkError */
          );
          n(l);
        });
      };
      a();
    });
  }
  clearPurchaseInProgress() {
    this.operationSessionId = null;
  }
}
const fr = "rcb-ui-translator", Or = "en", Tm = {
  "periods.week": "{{amount}} week",
  "periods.month": "{{amount}} month",
  "periods.year": "{{amount}} year",
  "periods.day": "{{amount}} day",
  "periods.weekShort": "{{amount}}wk",
  "periods.monthShort": "{{amount}}mo",
  "periods.yearShort": "{{amount}}yr",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "lifetime",
  "periods.weekPlural": "{{amount}} weeks",
  "periods.monthPlural": "{{amount}} months",
  "periods.yearPlural": "{{amount}} years",
  "periods.dayPlural": "{{amount}} days",
  "periods.weekFrequency": "weekly",
  "periods.monthFrequency": "monthly",
  "periods.yearFrequency": "yearly",
  "periods.dayFrequency": "daily",
  "periods.perWeekFrequency": "per week",
  "periods.perMonthFrequency": "per month",
  "periods.perYearFrequency": "per year",
  "periods.perDayFrequency": "per day",
  "periods.unknownFrequency": "unknown",
  "periods.weekFrequencyPlural": "every {{amount}} weeks",
  "periods.monthFrequencyPlural": "every {{amount}} months",
  "periods.yearFrequencyPlural": "every {{amount}} years",
  "periods.dayFrequencyPlural": "every {{amount}} days",
  "product_info.subscribe_to": "Subscribe to",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "Try free for {{trialDuration}}",
  "product_info.price_after_free_trial": "After trial ends, on {{renewalDate}}",
  "product_info.intro_price_phase_after_trial": "Then {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase": "First {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "paid once",
  "product_info.price_after_intro_price": "After {{introPriceDuration}}, on {{renewalDate}}",
  "product_info.after_trial": "after trial",
  "product_info.after": "after",
  "product_info.total_due_today": "Total due today",
  "product_info.renewal_frequency": "Renews {{frequency}}",
  "product_info.continues_until_cancelled": "Continues until cancelled",
  "product_info.cancel_anytime": "Cancel anytime",
  "payment_entry_page.payment_step_title": "Secure checkout by RevenueCat",
  "payment_entry_page.trial_subscription_terms_info": "After your trial ends, you will be charged {{price}} {{perFrequency}} starting {{renewalDate}}. You can cancel any time before this date.",
  "payment_entry_page.subscription_terms_info": "By subscribing, you agree to allow {{appName}} to charge you according to their terms until you cancel.",
  "payment_entry_page.otp_terms_info": "By purchasing, you agree to allow {{appName}} to charge you according to their terms.",
  "payment_entry_page.terms_link_label": "Terms",
  "payment_entry_page.checkout_consent_agreement": "I agree to the {{appName}} {{termsOfService}}.",
  "payment_entry_page.checkout_consent_terms_of_service": "terms of service",
  "payment_entry_page.subscription_info": "Subscription renews automatically. Cancel anytime.",
  "payment_entry_page.button_pay": "Pay now",
  "payment_entry_page.button_start_trial": "Start trial",
  "payment_entry_page.button_with_price": "Pay {{formattedPrice}}",
  "payment_entry_page.button_payment_method": "Pay {{formattedPrice}} with {{paymentMethod}}",
  "payment_entry_page.express_checkout_divider": "OR PAY BY CARD",
  "loading_page.processing_payment": "Processing payment",
  "loading_page.keep_page_open": "The process is almost done. Keep this page open.",
  "success_page.purchase_successful": "Payment complete",
  "success_page.button_close": "Continue",
  "error_page.close_button_title": "Go to {{appName}}",
  "error_page.if_error_persists": "If it persists, please contact ",
  "error_page.trouble_accessing": "If you're having trouble accessing your purchase, reach out to support on ",
  "error_page.error_title_already_subscribed": "You already subscribed to {{productTitle}}",
  "error_page.error_title_already_purchased": "You already purchased {{productTitle}}",
  "error_page.error_title_other_errors": "Something went wrong",
  "error_page.error_message_already_subscribed": "You can't subscribe to this product again.",
  "error_page.error_message_already_purchased": "You can't purchase this product again.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax not active",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Invalid tax origin address",
  "error_page.error_title_stripe_missing_required_permission": "Missing Stripe permission",
  "error_page.error_message_missing_email_error": "Email is required to complete the purchase.",
  "error_page.error_message_invalid_email_error": "The email address {{email}} couldn't be verified. Please provide a valid email address.",
  "error_page.error_message_network_error": "Network error. Please check your internet connection.",
  "error_page.error_message_error_charging_payment": "Payment failed.",
  "error_page.error_message_error_setting_up_purchase": "Purchase not started due to an error (error code: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "We couldn't verify your billing address. Please double-check that the postal code and country are correct.",
  "error_page.error_message_unknown_error": "An unknown error occurred (error code: {{errorCode}}).",
  "error_page.error_message_stripe_tax_not_active": "The purchase failed because Stripe Tax isn’t enabled. In production, purchases will work without taxes applied.",
  "error_page.error_message_stripe_invalid_tax_origin_address": "The purchase failed because the tax origin address is invalid. In production, purchases will work without taxes applied.",
  "error_page.error_message_stripe_missing_required_permission": "The purchase failed because the Stripe app lacks a required permission. In production, purchases will work without taxes applied.",
  "error_page.error_only_in_sandbox": "This message appears only in sandbox.",
  "error_page.button_try_again": "Try again",
  "error_page.button_close": "Close",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "pricing_dropdown.show_details": "Show details",
  "pricing_dropdown.hide_details": "Hide details",
  "pricing_dropdown.add_promo_code": "Add promo code",
  "discount_input.label": "Promo code",
  "pricing_table.trial_ends": "After trial ends, on {{formattedTrialEndDate}}",
  "pricing_table.total_excluding_tax": "Total excluding tax",
  "pricing_table.total_due_today": "Total due today",
  "pricing_table.subtotal": "Subtotal",
  "pricing_table.discount": "Discount",
  "pricing_table.tax": "Tax",
  "pricing_table.enter_billing_address_to_calculate": "Enter billing address to calculate",
  "pricing_table.enter_postal_code_to_calculate": "Enter zip code to calculate",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Enter state or postal code to calculate",
  "navbar_header.details": "Details",
  "navbar_header.back_button": "Back",
  "price_update.title": "Price update",
  "price_update.base_message": "The total price was updated with tax based on your billing address. Please review and try again. Your card will only be charged once.",
  "price_update.trial_message": "The subscription price was updated to include tax based on your billing address. Free trial still applies. Review and try again.",
  "apple_pay.free_trial": "Free Trial"
}, Dm = {
  "periods.week": "{{amount}} semana",
  "periods.month": "{{amount}} mes",
  "periods.year": "{{amount}} año",
  "periods.day": "{{amount}} día",
  "periods.weekShort": "{{amount}} sem",
  "periods.monthShort": "{{amount}}mes",
  "periods.yearShort": "{{amount}}año",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "de por vida",
  "periods.weekPlural": "{{amount}} semanas",
  "periods.monthPlural": "{{amount}} meses",
  "periods.yearPlural": "{{amount}} años",
  "periods.dayPlural": "{{amount}} días",
  "periods.weekFrequency": "semanal",
  "periods.monthFrequency": "mensual",
  "periods.yearFrequency": "anual",
  "periods.dayFrequency": "diaria",
  "periods.perWeekFrequency": "por semana",
  "periods.perMonthFrequency": "por mes",
  "periods.perYearFrequency": "por año",
  "periods.perDayFrequency": "por día",
  "periods.unknownFrequency": "desconocida",
  "periods.weekFrequencyPlural": "cada {{amount}} semanas",
  "periods.monthFrequencyPlural": "cada {{amount}} meses",
  "periods.yearFrequencyPlural": "cada {{amount}} años",
  "periods.dayFrequencyPlural": "cada {{amount}} días",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} prueba gratuita",
  "product_info.price_after_free_trial": "Después de que termine el periodo de prueba, el {{renewalDate}}",
  "product_info.renewal_frequency": "Se renueva {{frequency}}",
  "product_info.continues_until_cancelled": "Continua hasta que se cancele",
  "product_info.cancel_anytime": "Cancelar en cualquier momento",
  "payment_entry_page.payment_step_title": "Pago seguro mediante RevenueCat",
  "payment_entry_page.button_pay": "Pagar ahora",
  "payment_entry_page.button_start_trial": "Comenzar prueba",
  "success_page.purchase_successful": "Pago completado",
  "success_page.button_close": "Continuar",
  "error_page.if_error_persists": "Si el error persiste, contacta con ",
  "error_page.error_title_already_subscribed": "Ya te has suscrito a {{productTitle}}",
  "error_page.error_title_already_purchased": "Ya has comprado {{productTitle}}",
  "error_page.error_title_other_errors": "Algo salió mal",
  "error_page.error_message_already_subscribed": "No puedes suscribirte a este producto de nuevo.",
  "error_page.error_message_already_purchased": "No puedes comprar este producto de nuevo.",
  "error_page.error_message_missing_email_error": "Se requiere un correo electrónico para completar la compra.",
  "error_page.error_message_network_error": "Error de red. Por favor, comprueba tu conexión a internet.",
  "error_page.error_message_error_charging_payment": "Pago fallido.",
  "error_page.error_message_error_setting_up_purchase": "No se pudo iniciar la compra debido a un error (código de error: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "No pudimos verificar tu dirección de facturación. Por favor, verifica que el código postal y el país sean correctos.",
  "error_page.error_message_unknown_error": "Ocurrió un error desconocido (código de error: {{errorCode}}).",
  "error_page.button_try_again": "Intentar de nuevo",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total a pagar hoy",
  "product_info.subscribe_to": "Suscribirse a",
  "navbar_header.details": "Detalles",
  "navbar_header.back_button": "Atrás",
  "pricing_dropdown.show_details": "Mostrar detalles",
  "pricing_dropdown.hide_details": "Ocultar detalles",
  "pricing_table.tax": "Impuestos",
  "pricing_table.trial_ends": "Después de que finalice la prueba, el {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total a pagar hoy",
  "pricing_table.total_excluding_tax": "Total sin impuestos",
  "pricing_table.enter_billing_address_to_calculate": "Introduce la dirección de facturación para calcular",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Introduce el estado o el código postal para calcular",
  "pricing_table.enter_postal_code_to_calculate": "Introduce el código postal para calcular",
  "error_page.error_message_invalid_email_error": "La dirección de correo electrónico {{email}} no se pudo verificar. Por favor, proporciona una dirección de correo electrónico válida.",
  "payment_entry_page.button_payment_method": "Pagar {{formattedPrice}} con {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Pagar {{formattedPrice}}",
  "price_update.title": "Actualización de precio",
  "price_update.base_message": "El precio total se actualizó con impuestos según su dirección de facturación. Revise e intente nuevamente. Solo se efectuará un cobro en su tarjeta.",
  "price_update.trial_message": "El precio de la suscripción se actualizó para incluir impuestos según su dirección de facturación. La prueba gratuita sigue aplicándose. Revise e intente nuevamente.",
  "payment_entry_page.express_checkout_divider": "O PAGA CON TARJETA",
  "error_page.trouble_accessing": "Si tiene problemas para acceder a su compra, póngase en contacto con el servicio de asistencia en ",
  "error_page.close_button_title": "Ir a {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Falta permiso de Stripe",
  "error_page.button_close": "Cerrar",
  "error_page.error_message_stripe_invalid_tax_origin_address": "La compra falló porque la dirección de origen fiscal no es válida. En producción, las compras funcionarán sin impuestos aplicados.",
  "error_page.error_message_stripe_tax_not_active": "La compra falló porque Stripe Tax no está habilitado. En producción, las compras funcionarán sin impuestos aplicados.",
  "error_page.error_only_in_sandbox": "Este mensaje aparece solo en el entorno de pruebas.",
  "error_page.error_message_stripe_missing_required_permission": "La compra falló porque la aplicación Stripe carece de un permiso necesario. En producción, las compras funcionarán sin impuestos aplicados.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax no está activo",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Dirección de origen fiscal no válida",
  "apple_pay.free_trial": "Prueba gratuita",
  "product_info.price_after_intro_price": "Después de {{introPriceDuration}}, el {{renewalDate}}",
  "product_info.after_trial": "después del período de prueba",
  "product_info.after": "después de",
  "product_info.intro_price_phase_after_trial": "Luego, {{introPriceDuration}} por {{introPrice}}",
  "product_info.intro_price_phase": "Primero, {{introPriceDuration}} por {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "pago único",
  "payment_entry_page.trial_subscription_terms_info": "Una vez finalizado el período de prueba, se te cobrarán {{price}} {{perFrequency}} a partir del {{renewalDate}}. Puedes cancelar en cualquier momento antes de esta fecha.",
  "payment_entry_page.subscription_info": "La suscripción se renueva automáticamente. Cancela en cualquier momento.",
  "payment_entry_page.otp_terms_info": "Al comprar, aceptas que {{appName}} te cobre de acuerdo con sus términos.",
  "payment_entry_page.terms_link_label": "Términos",
  "payment_entry_page.subscription_terms_info": "Al suscribirte, aceptas que {{appName}} te cobre de acuerdo con sus términos hasta que canceles.",
  "loading_page.keep_page_open": "El proceso está casi terminado. Mantén esta página abierta.",
  "loading_page.processing_payment": "Procesando el pago",
  "pricing_table.discount": "Descuento",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Añadir código promocional",
  "discount_input.label": "Código promocional",
  "payment_entry_page.checkout_consent_terms_of_service": "términos de servicio",
  "payment_entry_page.checkout_consent_agreement": "Acepto los {{termsOfService}} de {{appName}}."
}, Am = {
  "periods.week": "{{amount}} settimana",
  "periods.month": "{{amount}} mese",
  "periods.year": "{{amount}} anno",
  "periods.day": "{{amount}} giorno",
  "periods.weekShort": "{{amount}}sett",
  "periods.monthShort": "{{amount}}mese",
  "periods.yearShort": "{{amount}}anno",
  "periods.dayShort": "{{amount}}g",
  "periods.lifetime": "a vita",
  "periods.weekPlural": "{{amount}} settimane",
  "periods.monthPlural": "{{amount}} mesi",
  "periods.yearPlural": "{{amount}} anni",
  "periods.dayPlural": "{{amount}} giorni",
  "periods.weekFrequency": "settimanale",
  "periods.monthFrequency": "mensile",
  "periods.yearFrequency": "annuale",
  "periods.dayFrequency": "giornaliero",
  "periods.perWeekFrequency": "a settimana",
  "periods.perMonthFrequency": "al mese",
  "periods.perYearFrequency": "all'anno",
  "periods.perDayFrequency": "al giorno",
  "periods.unknownFrequency": "sconosciuto",
  "periods.weekFrequencyPlural": "ogni {{amount}} settimane",
  "periods.monthFrequencyPlural": "ogni {{amount}} mesi",
  "periods.yearFrequencyPlural": "ogni {{amount}} anni",
  "periods.dayFrequencyPlural": "ogni {{amount}} giorni",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} prova gratuita",
  "product_info.price_after_free_trial": "Dopo la fine della prova, il {{renewalDate}}",
  "product_info.renewal_frequency": "Si rinnova {{frequency}}",
  "product_info.continues_until_cancelled": "Continua fino a disdetta",
  "product_info.cancel_anytime": "Disdici in qualsiasi momento",
  "payment_entry_page.payment_step_title": "Pagamento sicuro tramite RevenueCat",
  "payment_entry_page.button_pay": "Paga ora",
  "payment_entry_page.button_start_trial": "Inizia la prova",
  "success_page.purchase_successful": "Pagamento completato",
  "success_page.button_close": "Continua",
  "error_page.if_error_persists": "Se l'errore persiste, contatta ",
  "error_page.error_title_already_subscribed": "Hai già un abbonamento a {{productTitle}}",
  "error_page.error_title_already_purchased": "Hai già acquistato {{productTitle}}",
  "error_page.error_title_other_errors": "Qualcosa è andato storto",
  "error_page.error_message_already_subscribed": "Non puoi abbonarti di nuovo a questo prodotto.",
  "error_page.error_message_already_purchased": "Non puoi acquistare di nuovo questo prodotto.",
  "error_page.error_message_missing_email_error": "L'email è necessaria per completare l'acquisto.",
  "error_page.error_message_network_error": "Errore di rete. Verifica la connessione internet.",
  "error_page.error_message_error_charging_payment": "Pagamento fallito.",
  "error_page.error_message_error_setting_up_purchase": "Acquisto non avviato a causa di un errore (codice errore: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Non siamo riusciti a verificare il tuo indirizzo di fatturazione. Per favore, controlla che il codice postale e il paese siano corretti.",
  "error_page.error_message_unknown_error": "Si è verificato un errore sconosciuto (codice errore: {{errorCode}}).",
  "error_page.button_try_again": "Riprova",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Totale dovuto oggi",
  "product_info.subscribe_to": "Abbonati a",
  "navbar_header.details": "Dettagli",
  "navbar_header.back_button": "Indietro",
  "pricing_dropdown.show_details": "Mostra dettagli",
  "pricing_dropdown.hide_details": "Nascondi dettagli",
  "pricing_table.tax": "Tasse",
  "pricing_table.trial_ends": "Al termine del periodo di prova, il {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Totale dovuto oggi",
  "pricing_table.total_excluding_tax": "Totale tasse escluse",
  "pricing_table.enter_billing_address_to_calculate": "Inserisci l'indirizzo di fatturazione per calcolare",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Inserisci la regione o il codice postale per calcolare",
  "pricing_table.enter_postal_code_to_calculate": "Inserisci il codice postale per calcolare",
  "error_page.error_message_invalid_email_error": "L'indirizzo email {{email}} non può essere verificato. Si prega di fornire un indirizzo email valido.",
  "payment_entry_page.button_payment_method": "Paga {{formattedPrice}} con {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Paga {{formattedPrice}}",
  "price_update.title": "Aggiornamento prezzo",
  "price_update.base_message": "Il prezzo totale è stato aggiornato con le tasse in base al tuo indirizzo di fatturazione. Rivedi e riprova. L'addebito sulla tua carta avverrà solo una volta.",
  "price_update.trial_message": "Il prezzo dell'abbonamento è stato aggiornato per includere le tasse in base al tuo indirizzo di fatturazione. La prova gratuita è ancora valida. Controlla e riprova.",
  "payment_entry_page.express_checkout_divider": "OPPURE PAGA CON CARTA",
  "error_page.trouble_accessing": "Se hai problemi ad accedere al tuo acquisto, contatta l'assistenza all'indirizzo ",
  "error_page.close_button_title": "Vai a {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Autorizzazione Stripe mancante",
  "error_page.button_close": "Chiudi",
  "error_page.error_message_stripe_invalid_tax_origin_address": "L'acquisto non è andato a buon fine perché l'indirizzo di origine fiscale non è valido. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sarà visibile.",
  "error_page.error_message_stripe_tax_not_active": "L'acquisto non è andato a buon fine perché Stripe Tax non è abilitato. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sarà visibile.",
  "error_page.error_only_in_sandbox": "Questo messaggio viene visualizzato solo in sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "L'acquisto non è andato a buon fine perché l'app Stripe non dispone dell'autorizzazione necessaria. In produzione, gli acquisti verranno effettuati senza l'applicazione delle imposte e questo errore non sarà visibile.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax non attivo",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Indirizzo di origine fiscale non valido",
  "apple_pay.free_trial": "Prova gratuita",
  "product_info.price_after_intro_price": "Dopo {{introPriceDuration}}, il {{renewalDate}}",
  "product_info.after_trial": "dopo il periodo di prova",
  "product_info.after": "dopo",
  "product_info.intro_price_phase_after_trial": "Poi {{introPriceDuration}} a {{introPrice}}",
  "product_info.intro_price_phase": "Prima {{introPriceDuration}} a {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "pagato una volta",
  "payment_entry_page.trial_subscription_terms_info": "Al termine del periodo di prova, ti verranno addebitati {{price}} {{perFrequency}} a partire dal {{renewalDate}}. Puoi annullare in qualsiasi momento prima di questa data.",
  "payment_entry_page.subscription_info": "L'abbonamento si rinnova automaticamente. Annulla in qualsiasi momento.",
  "payment_entry_page.otp_terms_info": "Acquistando, accetti che {{appName}} ti addebiti l'importo in base ai suoi termini.",
  "payment_entry_page.terms_link_label": "Termini",
  "payment_entry_page.subscription_terms_info": "Abbonandoti, accetti che {{appName}} ti addebiti l'importo secondo i suoi termini fino all'annullamento.",
  "loading_page.keep_page_open": "Il processo è quasi terminato. Mantieni questa pagina aperta.",
  "loading_page.processing_payment": "Elaborazione del pagamento",
  "pricing_table.discount": "Sconto",
  "pricing_table.subtotal": "Subtotale",
  "pricing_dropdown.add_promo_code": "Aggiungi codice promozionale",
  "discount_input.label": "Codice promozionale",
  "payment_entry_page.checkout_consent_terms_of_service": "termini di servizio",
  "payment_entry_page.checkout_consent_agreement": "Accetto i {{termsOfService}} di {{appName}}."
}, Fm = {
  "periods.week": "{{amount}} أسبوع",
  "periods.month": "{{amount}} شهر",
  "periods.year": "{{amount}} سنة",
  "periods.day": "{{amount}} يوم",
  "periods.weekShort": "{{amount}}أسبوع",
  "periods.monthShort": "{{amount}}شهر",
  "periods.yearShort": "{{amount}}سنة",
  "periods.dayShort": "{{amount}}يوم",
  "periods.lifetime": "مدى الحياة",
  "periods.weekPlural": "{{amount}} أسابيع",
  "periods.monthPlural": "{{amount}} أشهر",
  "periods.yearPlural": "{{amount}} سنوات",
  "periods.dayPlural": "{{amount}} أيام",
  "periods.weekFrequency": "أسبوعيًا",
  "periods.monthFrequency": "شهريًا",
  "periods.yearFrequency": "سنويًا",
  "periods.dayFrequency": "يوميًا",
  "periods.perWeekFrequency": "في الأسبوع",
  "periods.perMonthFrequency": "في الشهر",
  "periods.perYearFrequency": "في السنة",
  "periods.perDayFrequency": "في اليوم",
  "periods.unknownFrequency": "غير معروف",
  "periods.weekFrequencyPlural": "كل {{amount}} أسابيع",
  "periods.monthFrequencyPlural": "كل {{amount}} أشهر",
  "periods.yearFrequencyPlural": "كل {{amount}} سنوات",
  "periods.dayFrequencyPlural": "كل {{amount}} أيام",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} تجربة مجانية",
  "product_info.price_after_free_trial": "بعد انتهاء التجربة، في {{renewalDate}}",
  "product_info.renewal_frequency": "يتم التجديد {{frequency}}",
  "product_info.continues_until_cancelled": "يستمر حتى يتم إلغاؤه",
  "product_info.cancel_anytime": "يمكن الإلغاء في أي وقت",
  "payment_entry_page.payment_step_title": "الدفع الآمن عبر RevenueCat",
  "payment_entry_page.button_pay": "ادفع الآن",
  "payment_entry_page.button_start_trial": "ابدأ التجربة",
  "success_page.purchase_successful": "تم الدفع بنجاح",
  "success_page.button_close": "متابعة",
  "error_page.if_error_persists": "إذا استمرت المشكلة، يرجى الاتصال بـ ",
  "error_page.error_title_already_subscribed": "أنت مشترك بالفعل في {{productTitle}}",
  "error_page.error_title_already_purchased": "لقد اشتريت {{productTitle}} بالفعل",
  "error_page.error_title_other_errors": "حدث خطأ ما",
  "error_page.error_message_already_subscribed": "لا يمكنك الاشتراك في هذا المنتج مرة أخرى.",
  "error_page.error_message_already_purchased": "لا يمكنك شراء هذا المنتج مرة أخرى.",
  "error_page.error_message_missing_email_error": "يُطلب البريد الإلكتروني لإتمام عملية الشراء.",
  "error_page.error_message_network_error": "خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت.",
  "error_page.error_message_error_charging_payment": "فشل الدفع.",
  "error_page.error_message_error_setting_up_purchase": "لم تبدأ عملية الشراء بسبب خطأ (رمز الخطأ: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "لم نتمكن من التحقق من عنوان الفوترة الخاص بك. يرجى التحقق مرة أخرى من الرمز البريدي والبلد للتأكد من صحتهما.",
  "error_page.error_message_unknown_error": "حدث خطأ غير معروف (رمز الخطأ: {{errorCode}}).",
  "error_page.button_try_again": "حاول مرة أخرى",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "إجمالي المبلغ المستحق اليوم",
  "product_info.subscribe_to": "اشترك في",
  "navbar_header.details": "تفاصيل",
  "navbar_header.back_button": "عودة",
  "pricing_dropdown.show_details": "إظهار التفاصيل",
  "pricing_dropdown.hide_details": "إخفاء التفاصيل",
  "pricing_table.tax": "الضريبة",
  "pricing_table.trial_ends": "بعد انتهاء الفترة التجريبية، في {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "الإجمالي المستحق اليوم",
  "pricing_table.total_excluding_tax": "الإجمالي باستثناء الضريبة",
  "pricing_table.enter_billing_address_to_calculate": "أدخل عنوان إرسال الفواتير لحسابها",
  "pricing_table.enter_state_or_postal_code_to_calculate": "أدخل الولاية أو الرمز البريدي للحساب",
  "pricing_table.enter_postal_code_to_calculate": "أدخل الرمز البريدي للحساب",
  "error_page.error_message_invalid_email_error": "تعذر التحقق من عنوان البريد الإلكتروني {{email}}. يرجى تقديم عنوان بريد إلكتروني صالح.",
  "payment_entry_page.button_payment_method": "ادفع {{formattedPrice}} باستخدام {{paymentMethod}}",
  "payment_entry_page.button_with_price": "ادفع {{formattedPrice}}",
  "price_update.title": "تحديث السعر",
  "price_update.base_message": "تم تحديث السعر الإجمالي مع الضريبة بناءً على عنوان إرسال الفواتير الخاص بك. يرجى المراجعة والمحاولة مرة أخرى. لن يتم تحصيل رسوم من بطاقتك إلا مرة واحدة.",
  "price_update.trial_message": "تم تحديث سعر الاشتراك ليشمل الضرائب بناءً على عنوان الفوترة الخاص بك. فترة التجربة المجانية لا تزال سارية. يرجى التحقق والمحاولة مرة أخرى.",
  "payment_entry_page.express_checkout_divider": "أو ادفع بواسطة البطاقة",
  "error_page.trouble_accessing": "إذا كنت تواجه مشكلة في الوصول إلى عملية الشراء، فتواصل مع الدعم على ",
  "error_page.close_button_title": "اذهب إلى {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "إذن Stripe مفقود",
  "error_page.button_close": "إغلاق",
  "error_page.error_message_stripe_invalid_tax_origin_address": "فشلت عملية الشراء لأن عنوان المنشأ الضريبي غير صالح. في مرحلة الإنتاج، ستعمل عمليات الشراء بدون تطبيق الضرائب.",
  "error_page.error_message_stripe_tax_not_active": "فشلت عملية الشراء لأن ضريبة Stripe غير مفعلة. في مرحلة الإنتاج، ستعمل عمليات الشراء بدون تطبيق الضرائب.",
  "error_page.error_only_in_sandbox": "تظهر هذه الرسالة فقط في البيئة التجريبية.",
  "error_page.error_message_stripe_missing_required_permission": "فشلت عملية الشراء لأن تطبيق Stripe يفتقر إلى إذن مطلوب. في مرحلة الإنتاج، ستعمل عمليات الشراء بدون تطبيق الضرائب.",
  "error_page.error_title_stripe_tax_not_active": "ضريبة Stripe غير نشطة",
  "error_page.error_title_stripe_invalid_tax_origin_address": "عنوان منشأ ضريبي غير صالح",
  "apple_pay.free_trial": "تجربة مجانية",
  "product_info.price_after_intro_price": "بعد {{introPriceDuration}}، في {{renewalDate}}",
  "product_info.after_trial": "بعد الفترة التجريبية",
  "product_info.after": "بعد",
  "product_info.intro_price_phase_after_trial": "ثم {{introPriceDuration}} مقابل {{introPrice}}",
  "product_info.intro_price_phase": "أولاً {{introPriceDuration}} مقابل {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "تدفع مرة واحدة",
  "payment_entry_page.trial_subscription_terms_info": "بعد انتهاء الفترة التجريبية، سيتم محاسبتك بمبلغ {{price}} {{perFrequency}} بدءًا من {{renewalDate}}. يمكنك الإلغاء في أي وقت قبل هذا التاريخ.",
  "payment_entry_page.subscription_info": "يتم تجديد الاشتراك تلقائيًا. يمكنك الإلغاء في أي وقت.",
  "payment_entry_page.otp_terms_info": "بالشراء، أنت توافق على السماح لتطبيق {{appName}} بتحصيل الرسوم منك وفقًا لشروطه.",
  "payment_entry_page.terms_link_label": "الشروط",
  "payment_entry_page.subscription_terms_info": "بالاشتراك، فإنك توافق على السماح لـ {{appName}} بتحصيل رسوم منك وفقًا لشروطها حتى تقوم بالإلغاء.",
  "loading_page.keep_page_open": "العملية شارفت على الانتهاء. أبقِ هذه الصفحة مفتوحة.",
  "loading_page.processing_payment": "جاري معالجة الدفع",
  "pricing_table.discount": "خصم",
  "pricing_table.subtotal": "المجموع الفرعي",
  "pricing_dropdown.add_promo_code": "أضف رمزًا ترويجيًا",
  "discount_input.label": "رمز ترويجي",
  "payment_entry_page.checkout_consent_terms_of_service": "شروط الخدمة",
  "payment_entry_page.checkout_consent_agreement": "أوافق على {{termsOfService}} لـ {{appName}}."
}, qm = {
  "periods.week": "{{amount}} setmana",
  "periods.month": "{{amount}} mes",
  "periods.year": "{{amount}} any",
  "periods.day": "{{amount}} dia",
  "periods.weekShort": "{{amount}}set",
  "periods.monthShort": "{{amount}}mes",
  "periods.yearShort": "{{amount}}any",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "de per vida",
  "periods.weekPlural": "{{amount}} setmanes",
  "periods.monthPlural": "{{amount}} mesos",
  "periods.yearPlural": "{{amount}} anys",
  "periods.dayPlural": "{{amount}} dies",
  "periods.weekFrequency": "setmanal",
  "periods.monthFrequency": "mensual",
  "periods.yearFrequency": "anual",
  "periods.dayFrequency": "diari",
  "periods.perWeekFrequency": "per setmana",
  "periods.perMonthFrequency": "per mes",
  "periods.perYearFrequency": "per any",
  "periods.perDayFrequency": "per dia",
  "periods.unknownFrequency": "desconeguda",
  "periods.weekFrequencyPlural": "cada {{amount}} setmanes",
  "periods.monthFrequencyPlural": "cada {{amount}} mesos",
  "periods.yearFrequencyPlural": "cada {{amount}} anys",
  "periods.dayFrequencyPlural": "cada {{amount}} dies",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} de prova gratuïta",
  "product_info.price_after_free_trial": "Després del període de prova, el {{renewalDate}}",
  "product_info.renewal_frequency": "Es renova {{frequency}}",
  "product_info.continues_until_cancelled": "Continua fins que es cancel·li",
  "product_info.cancel_anytime": "Cancel·la en qualsevol moment",
  "payment_entry_page.payment_step_title": "Pagament segur amb RevenueCat",
  "payment_entry_page.button_pay": "Paga ara",
  "payment_entry_page.button_start_trial": "Comença la prova",
  "success_page.purchase_successful": "Pagament complet",
  "success_page.button_close": "Continua",
  "error_page.if_error_persists": "Si l'error persisteix, contacta amb ",
  "error_page.error_title_already_subscribed": "Ja us heu subscrit a {{productTitle}}",
  "error_page.error_title_already_purchased": "Ja heu comprat {{productTitle}}",
  "error_page.error_title_other_errors": "Alguna cosa ha anat malament",
  "error_page.error_message_already_subscribed": "No us podeu subscriure a aquest producte de nou.",
  "error_page.error_message_already_purchased": "No podeu comprar aquest producte de nou.",
  "error_page.error_message_missing_email_error": "Es necessita un correu electrònic per completar la compra.",
  "error_page.error_message_network_error": "Error de xarxa. Comprova la teva connexió a internet.",
  "error_page.error_message_error_charging_payment": "El pagament ha fallat.",
  "error_page.error_message_error_setting_up_purchase": "No s'ha iniciat la compra a causa d'un error (codi d'error: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "No hem pogut verificar la vostra adreça de facturació. Si us plau, verifiqueu de nou el codi postal i el país per assegurar-vos que són correctes.",
  "error_page.error_message_unknown_error": "S'ha produït un error desconegut (codi d'error: {{errorCode}}).",
  "error_page.button_try_again": "Torna a intentar-ho",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total a pagar avui",
  "product_info.subscribe_to": "Subscriu-te a",
  "navbar_header.details": "Detalls",
  "navbar_header.back_button": "Enrere",
  "pricing_dropdown.show_details": "Mostra detalls",
  "pricing_dropdown.hide_details": "Amaga detalls",
  "pricing_table.tax": "Impostos",
  "pricing_table.trial_ends": "Després que finalitzi la prova, el {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total a pagar avui",
  "pricing_table.total_excluding_tax": "Total sense impostos",
  "pricing_table.enter_billing_address_to_calculate": "Introduïu l'adreça de facturació per calcular",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Introduïu la província o el codi postal per calcular",
  "pricing_table.enter_postal_code_to_calculate": "Introduïu el codi postal per calcular",
  "error_page.error_message_invalid_email_error": "No s'ha pogut verificar l'adreça de correu electrònic {{email}}. Si us plau, proporcioneu una adreça de correu electrònic vàlida.",
  "payment_entry_page.button_payment_method": "Paga {{formattedPrice}} amb {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Paga {{formattedPrice}}",
  "price_update.title": "Actualització de preu",
  "price_update.base_message": "El preu total s'ha actualitzat amb els impostos segons la vostra adreça de facturació. Reviseu-ho i torneu-ho a provar. Només es carregarà la vostra targeta una vegada.",
  "price_update.trial_message": "El preu de la subscripció s'ha actualitzat per incloure els impostos segons la seva adreça de facturació. El període de prova gratuït segueix vigent. Si us plau, comprovi-ho i torni-ho a provar.",
  "payment_entry_page.express_checkout_divider": "O PAGUEU AMB TARGETA",
  "error_page.trouble_accessing": "Si teniu problemes per accedir a la vostra compra, poseu-vos en contacte amb el servei d'assistència a ",
  "error_page.close_button_title": "Vés a {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Falta el permís de Stripe",
  "error_page.button_close": "Tanca",
  "error_page.error_message_stripe_invalid_tax_origin_address": "La compra ha fallat perquè l'adreça d'origen fiscal no és vàlida. En producció, les compres funcionaran sense impostos aplicats.",
  "error_page.error_message_stripe_tax_not_active": "La compra ha fallat perquè Stripe Tax no està activat. En producció, les compres funcionaran sense impostos aplicats.",
  "error_page.error_only_in_sandbox": "Aquest missatge apareix només a l'entorn de proves.",
  "error_page.error_message_stripe_missing_required_permission": "La compra ha fallat perquè l'aplicació Stripe no té un permís necessari. En producció, les compres funcionaran sense impostos aplicats.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax no està actiu",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Adreça d'origen fiscal no vàlida",
  "apple_pay.free_trial": "Prova gratuïta",
  "product_info.price_after_intro_price": "Després de {{introPriceDuration}}, el {{renewalDate}}",
  "product_info.after_trial": "després del període de prova",
  "product_info.after": "després de",
  "product_info.intro_price_phase_after_trial": "Després {{introPriceDuration}} per {{introPrice}}",
  "product_info.intro_price_phase": "Primer {{introPriceDuration}} per {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "pagat un cop",
  "payment_entry_page.trial_subscription_terms_info": "Un cop finalitzat el període de prova, se us cobrarà {{price}} {{perFrequency}} a partir del {{renewalDate}}. Podeu cancel·lar-ho en qualsevol moment abans d'aquesta data.",
  "payment_entry_page.subscription_info": "La subscripció es renova automàticament. Cancel·leu-la quan vulgueu.",
  "payment_entry_page.otp_terms_info": "En comprar, accepteu que {{appName}} us cobri d'acord amb les seves condicions.",
  "payment_entry_page.terms_link_label": "Condicions",
  "payment_entry_page.subscription_terms_info": "En subscriure-us, accepteu que {{appName}} us cobri d'acord amb les seves condicions fins que ho cancel·leu.",
  "loading_page.keep_page_open": "El procés està gairebé acabat. Mantingueu aquesta pàgina oberta.",
  "loading_page.processing_payment": "S'està processant el pagament",
  "pricing_table.discount": "Descompte",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Afegir codi promocional",
  "discount_input.label": "Codi promocional",
  "payment_entry_page.checkout_consent_terms_of_service": "termes del servei",
  "payment_entry_page.checkout_consent_agreement": "Accepto els {{termsOfService}} de {{appName}}."
}, Mm = {
  "periods.week": "{{amount}} 周",
  "periods.month": "{{amount}} 月",
  "periods.year": "{{amount}} 年",
  "periods.day": "{{amount}} 天",
  "periods.weekShort": "{{amount}}周",
  "periods.monthShort": "{{amount}}月",
  "periods.yearShort": "{{amount}}年",
  "periods.dayShort": "{{amount}}天",
  "periods.lifetime": "终身",
  "periods.weekPlural": "{{amount}} 周",
  "periods.monthPlural": "{{amount}} 个月",
  "periods.yearPlural": "{{amount}} 年",
  "periods.dayPlural": "{{amount}} 天",
  "periods.weekFrequency": "每周",
  "periods.monthFrequency": "每月",
  "periods.yearFrequency": "每年",
  "periods.dayFrequency": "每天",
  "periods.perWeekFrequency": "每周",
  "periods.perMonthFrequency": "每月",
  "periods.perYearFrequency": "每年",
  "periods.perDayFrequency": "每天",
  "periods.unknownFrequency": "未知",
  "periods.weekFrequencyPlural": "每 {{amount}} 周",
  "periods.monthFrequencyPlural": "每 {{amount}} 个月",
  "periods.yearFrequencyPlural": "每 {{amount}} 年",
  "periods.dayFrequencyPlural": "每 {{amount}} 天",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} 天免费试用",
  "product_info.price_after_free_trial": "试用期结束后，于 {{renewalDate}}",
  "product_info.renewal_frequency": "续订 {{frequency}}",
  "product_info.continues_until_cancelled": "持续到取消",
  "product_info.cancel_anytime": "随时取消",
  "payment_entry_page.payment_step_title": "RevenueCat 安全结账",
  "payment_entry_page.button_pay": "立即支付",
  "payment_entry_page.button_start_trial": "开始试用",
  "success_page.purchase_successful": "支付完成",
  "success_page.button_close": "继续",
  "error_page.if_error_persists": "如果错误仍然存在，请联系 ",
  "error_page.error_title_already_subscribed": "您已订阅 {{productTitle}}",
  "error_page.error_title_already_purchased": "您已购买 {{productTitle}}",
  "error_page.error_title_other_errors": "出现错误",
  "error_page.error_message_already_subscribed": "您不能再次订阅此产品。",
  "error_page.error_message_already_purchased": "您不能再次购买此产品。",
  "error_page.error_message_missing_email_error": "完成购买需要邮箱地址。",
  "error_page.error_message_network_error": "网络错误。请检查您的互联网连接。",
  "error_page.error_message_error_charging_payment": "支付失败。",
  "error_page.error_message_error_setting_up_purchase": "由于错误，购买未启动（错误代码：{{errorCode}}）。",
  "error_page.error_message_invalid_tax_location": "我们无法验证您的账单地址。请仔细检查邮政编码和国家是否正确。",
  "error_page.error_message_unknown_error": "发生未知错误（错误代码：{{errorCode}}）。",
  "error_page.button_try_again": "重试",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "今天应付总额",
  "product_info.subscribe_to": "订阅",
  "navbar_header.details": "详情",
  "navbar_header.back_button": "返回",
  "pricing_dropdown.show_details": "显示详情",
  "pricing_dropdown.hide_details": "隐藏详情",
  "pricing_table.tax": "税",
  "pricing_table.trial_ends": "试用期结束后，于{{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "今日应付总额",
  "pricing_table.total_excluding_tax": "总计（不含税）",
  "pricing_table.enter_billing_address_to_calculate": "输入账单地址以计算",
  "pricing_table.enter_state_or_postal_code_to_calculate": "输入州或邮政编码以计算",
  "pricing_table.enter_postal_code_to_calculate": "输入邮政编码以计算",
  "error_page.error_message_invalid_email_error": "无法验证电子邮件地址{{email}}。请提供有效的电子邮件地址。",
  "payment_entry_page.button_payment_method": "使用{{paymentMethod}}支付{{formattedPrice}}",
  "payment_entry_page.button_with_price": "支付{{formattedPrice}}",
  "price_update.title": "价格更新",
  "price_update.base_message": "总价已根据您的账单地址更新了税费。请查看并重试。您的银行卡只会扣款一次。",
  "price_update.trial_message": "根据您的账单地址，订阅价格已更新为含税价格。免费试用仍然有效。请查看并重试。",
  "payment_entry_page.express_checkout_divider": "或使用银行卡支付",
  "error_page.trouble_accessing": "如果您在访问购买项目时遇到问题，请通过以下方式联系支持：",
  "error_page.close_button_title": "前往{{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "缺少Stripe权限",
  "error_page.button_close": "关闭",
  "error_page.error_message_stripe_invalid_tax_origin_address": "购买失败，因为税务起始地址无效。在生产环境中，购买将在不应用税款的情况下进行。",
  "error_page.error_message_stripe_tax_not_active": "购买失败，因为Stripe Tax未启用。在生产环境中，购买将在不应用税款的情况下进行。",
  "error_page.error_only_in_sandbox": "此消息仅在沙盒中显示。",
  "error_page.error_message_stripe_missing_required_permission": "购买失败，因为Stripe应用程序缺少必需的权限。在生产环境中，购买将在不应用税款的情况下进行。",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax未激活",
  "error_page.error_title_stripe_invalid_tax_origin_address": "税务起始地址无效",
  "apple_pay.free_trial": "免费试用",
  "product_info.price_after_intro_price": "在{{introPriceDuration}}之后，于{{renewalDate}}开始",
  "product_info.after_trial": "试用后",
  "product_info.after": "之后",
  "product_info.intro_price_phase_after_trial": "然后{{introPriceDuration}}，价格为{{introPrice}}",
  "product_info.intro_price_phase": "首先{{introPriceDuration}}，价格为{{introPrice}}",
  "product_info.intro_price_phase_paid_once": "一次性支付",
  "payment_entry_page.trial_subscription_terms_info": "试用期结束后，您将被收取 {{price}} {{perFrequency}}，从 {{renewalDate}} 开始。您可以在此日期之前的任何时间取消。",
  "payment_entry_page.subscription_info": "订阅自动续订。随时取消。",
  "payment_entry_page.otp_terms_info": "购买即表示您同意允许{{appName}}根据其条款向您收费。",
  "payment_entry_page.terms_link_label": "条款",
  "payment_entry_page.subscription_terms_info": "订阅即表示您同意允许 {{appName}} 按照其条款向您收费，直到您取消订阅。",
  "loading_page.keep_page_open": "流程即将完成。请保持此页面打开。",
  "loading_page.processing_payment": "正在处理付款",
  "pricing_table.discount": "折扣",
  "pricing_table.subtotal": "小计",
  "pricing_dropdown.add_promo_code": "添加优惠码",
  "discount_input.label": "优惠码",
  "payment_entry_page.checkout_consent_terms_of_service": "服务条款",
  "payment_entry_page.checkout_consent_agreement": "我同意{{appName}}的{{termsOfService}}。"
}, zm = {
  "periods.week": "{{amount}} 週",
  "periods.month": "{{amount}} 個月",
  "periods.year": "{{amount}} 年",
  "periods.day": "{{amount}} 天",
  "periods.weekShort": "{{amount}}週",
  "periods.monthShort": "{{amount}}月",
  "periods.yearShort": "{{amount}}年",
  "periods.dayShort": "{{amount}}天",
  "periods.lifetime": "終身",
  "periods.weekPlural": "{{amount}} 週",
  "periods.monthPlural": "{{amount}} 個月",
  "periods.yearPlural": "{{amount}} 年",
  "periods.dayPlural": "{{amount}} 天",
  "periods.weekFrequency": "每週",
  "periods.monthFrequency": "每月",
  "periods.yearFrequency": "每年",
  "periods.dayFrequency": "每天",
  "periods.perWeekFrequency": "每週",
  "periods.perMonthFrequency": "每月",
  "periods.perYearFrequency": "每年",
  "periods.perDayFrequency": "每天",
  "periods.unknownFrequency": "未知",
  "periods.weekFrequencyPlural": "每 {{amount}} 週",
  "periods.monthFrequencyPlural": "每 {{amount}} 個月",
  "periods.yearFrequencyPlural": "每 {{amount}} 年",
  "periods.dayFrequencyPlural": "每 {{amount}} 天",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} 天免費試用",
  "product_info.price_after_free_trial": "試用期結束後，於 {{renewalDate}}",
  "product_info.renewal_frequency": "每 {{frequency}} 續約",
  "product_info.continues_until_cancelled": "持續到取消",
  "product_info.cancel_anytime": "隨時取消",
  "payment_entry_page.payment_step_title": "RevenueCat 安全結帳",
  "payment_entry_page.button_pay": "立即付款",
  "payment_entry_page.button_start_trial": "開始試用",
  "success_page.purchase_successful": "付款完成",
  "success_page.button_close": "繼續",
  "error_page.if_error_persists": "如果錯誤持續存在，請聯絡 ",
  "error_page.error_title_already_subscribed": "您已經訂閱 {{productTitle}}",
  "error_page.error_title_already_purchased": "您已經購買 {{productTitle}}",
  "error_page.error_title_other_errors": "發生錯誤",
  "error_page.error_message_already_subscribed": "您無法再次訂閱此產品。",
  "error_page.error_message_already_purchased": "您無法再次購買此產品。",
  "error_page.error_message_missing_email_error": "完成購買需要電子郵件地址。",
  "error_page.error_message_network_error": "網路錯誤。請檢查您的網路連線。",
  "error_page.error_message_error_charging_payment": "付款失敗。",
  "error_page.error_message_error_setting_up_purchase": "由於發生錯誤，購買未啟動（錯誤代碼：{{errorCode}}）。",
  "error_page.error_message_invalid_tax_location": "我們無法驗證您的帳單地址。請仔細檢查郵遞區號和國家是否正確。",
  "error_page.error_message_unknown_error": "發生不明錯誤（錯誤代碼：{{errorCode}}）。",
  "error_page.button_try_again": "再試一次",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "今日應付總額",
  "product_info.subscribe_to": "訂閱",
  "navbar_header.details": "詳細資訊",
  "navbar_header.back_button": "返回",
  "pricing_dropdown.show_details": "顯示詳細資訊",
  "pricing_dropdown.hide_details": "隱藏詳細資訊",
  "pricing_table.tax": "稅金",
  "pricing_table.trial_ends": "試用期結束後，於 {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "今日應付總額",
  "pricing_table.total_excluding_tax": "總計（不含稅）",
  "pricing_table.enter_billing_address_to_calculate": "輸入帳單地址以計算",
  "pricing_table.enter_state_or_postal_code_to_calculate": "輸入州或郵政編碼以計算",
  "pricing_table.enter_postal_code_to_calculate": "輸入郵政編碼以計算",
  "error_page.error_message_invalid_email_error": "無法驗證電子郵件地址 {{email}}。請提供有效的電子郵件地址。",
  "payment_entry_page.button_payment_method": "使用 {{paymentMethod}} 支付 {{formattedPrice}}",
  "payment_entry_page.button_with_price": "支付 {{formattedPrice}}",
  "price_update.title": "價格更新",
  "price_update.base_message": "總價已根據您的帳單地址更新稅金。請檢查後重試。您的信用卡只會被收取一次費用。",
  "price_update.trial_message": "根據您的帳單地址，訂閱價格已更新為含稅價格。免費試用仍然有效。請查看並重試。",
  "payment_entry_page.express_checkout_divider": "或以信用卡付款",
  "error_page.trouble_accessing": "如果您在存取購買項目時遇到問題，請透過以下方式聯絡支援人員：",
  "error_page.close_button_title": "前往{{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "缺少 Stripe 權限",
  "error_page.button_close": "關閉",
  "error_page.error_message_stripe_invalid_tax_origin_address": "購買失敗，因為稅務起始地址無效。在正式環境中，購買將在不套用稅金的情況下運作。",
  "error_page.error_message_stripe_tax_not_active": "購買失敗，因為 Stripe Tax 未啟用。在正式環境中，購買將在不套用稅金的情況下運作。",
  "error_page.error_only_in_sandbox": "此訊息僅在沙盒中顯示。",
  "error_page.error_message_stripe_missing_required_permission": "購買失敗，因為 Stripe 應用程式缺少必要的權限。在正式環境中，購買將在不套用稅金的情況下運作。",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax 未啟用",
  "error_page.error_title_stripe_invalid_tax_origin_address": "無效的稅務起始地址",
  "apple_pay.free_trial": "免費試用",
  "product_info.price_after_intro_price": "在 {{introPriceDuration}} 之後，於 {{renewalDate}}",
  "product_info.after_trial": "試用期後",
  "product_info.after": "之後",
  "product_info.intro_price_phase_after_trial": "然後 {{introPriceDuration}}，價格為 {{introPrice}}",
  "product_info.intro_price_phase": "首先 {{introPriceDuration}}，價格為 {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "一次性支付",
  "payment_entry_page.trial_subscription_terms_info": "在您的試用期結束後，您將被收取 {{price}} {{perFrequency}}，從 {{renewalDate}} 開始。您可以隨時在此日期之前取消。",
  "payment_entry_page.subscription_info": "訂閱會自動續訂。隨時取消。",
  "payment_entry_page.otp_terms_info": "購買即表示您同意授權 {{appName}} 根據其條款向您收費。",
  "payment_entry_page.terms_link_label": "條款",
  "payment_entry_page.subscription_terms_info": "訂閱即表示您同意允許 {{appName}} 根據其條款向您收費，直到您取消為止。",
  "loading_page.keep_page_open": "程序即將完成。請保持此頁面開啟。",
  "loading_page.processing_payment": "正在處理付款",
  "pricing_table.discount": "折扣",
  "pricing_table.subtotal": "小計",
  "pricing_dropdown.add_promo_code": "新增優惠碼",
  "discount_input.label": "促銷代碼",
  "payment_entry_page.checkout_consent_terms_of_service": "服務條款",
  "payment_entry_page.checkout_consent_agreement": "我同意{{appName}}的{{termsOfService}}。"
}, Om = {
  "periods.week": "{{amount}} tjedan",
  "periods.month": "{{amount}} mjesec",
  "periods.year": "{{amount}} godina",
  "periods.day": "{{amount}} dan",
  "periods.weekShort": "{{amount}}tj",
  "periods.monthShort": "{{amount}}mj",
  "periods.yearShort": "{{amount}}g",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "doživotno",
  "periods.weekPlural": "{{amount}} tjedana",
  "periods.monthPlural": "{{amount}} mjeseci",
  "periods.yearPlural": "{{amount}} godina",
  "periods.dayPlural": "{{amount}} dana",
  "periods.weekFrequency": "tjedno",
  "periods.monthFrequency": "mjesečno",
  "periods.yearFrequency": "godišnje",
  "periods.dayFrequency": "dnevno",
  "periods.perWeekFrequency": "tjedno",
  "periods.perMonthFrequency": "mjesečno",
  "periods.perYearFrequency": "godišnje",
  "periods.perDayFrequency": "dnevno",
  "periods.unknownFrequency": "nepoznato",
  "periods.weekFrequencyPlural": "svakih {{amount}} tjedana",
  "periods.monthFrequencyPlural": "svakih {{amount}} mjeseci",
  "periods.yearFrequencyPlural": "svakih {{amount}} godina",
  "periods.dayFrequencyPlural": "svakih {{amount}} dana",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} besplatno probno razdoblje",
  "product_info.price_after_free_trial": "Nakon isteka probnog razdoblja, {{renewalDate}}",
  "product_info.renewal_frequency": "Obnavlja se {{frequency}}",
  "product_info.continues_until_cancelled": "Nastavlja se dok se ne otkaže",
  "product_info.cancel_anytime": "Otkažite u bilo kojem trenutku",
  "payment_entry_page.payment_step_title": "Sigurna naplata putem RevenueCat",
  "payment_entry_page.button_pay": "Plati sada",
  "payment_entry_page.button_start_trial": "Počni probno razdoblje",
  "success_page.purchase_successful": "Uplata je uspješna",
  "success_page.button_close": "Nastavi",
  "error_page.if_error_persists": "Ako se pogreška nastavi, obratite se ",
  "error_page.error_title_already_subscribed": "Već ste pretplaćeni na {{productTitle}}",
  "error_page.error_title_already_purchased": "Već ste kupili {{productTitle}}",
  "error_page.error_title_other_errors": "Nešto je pošlo po zlu",
  "error_page.error_message_already_subscribed": "Ne možete se ponovno pretplatiti na ovaj proizvod.",
  "error_page.error_message_already_purchased": "Ne možete ponovno kupiti ovaj proizvod.",
  "error_page.error_message_missing_email_error": "E-pošta je potrebna za dovršetak kupnje.",
  "error_page.error_message_network_error": "Mrežna pogreška. Provjerite internetsku vezu.",
  "error_page.error_message_error_charging_payment": "Plaćanje nije uspjelo.",
  "error_page.error_message_error_setting_up_purchase": "Kupnja nije započela zbog pogreške (kod pogreške: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nismo mogli potvrditi vašu adresu za naplatu. Molimo provjerite poštanski broj i državu kako biste bili sigurni da su točni.",
  "error_page.error_message_unknown_error": "Došlo je do nepoznate pogreške (kod pogreške: {{errorCode}}).",
  "error_page.button_try_again": "Pokušaj ponovno",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Ukupno dospijeće danas",
  "product_info.subscribe_to": "Pretplatite se",
  "navbar_header.details": "Detalji",
  "navbar_header.back_button": "Natrag",
  "pricing_dropdown.show_details": "Prikaži detalje",
  "pricing_dropdown.hide_details": "Sakrij detalje",
  "pricing_table.tax": "Porez",
  "pricing_table.trial_ends": "Nakon isteka probnog razdoblja, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Ukupan iznos dospijeća danas",
  "pricing_table.total_excluding_tax": "Ukupno bez poreza",
  "pricing_table.enter_billing_address_to_calculate": "Unesite adresu za naplatu za izračun",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Unesite državu ili poštanski broj za izračun",
  "pricing_table.enter_postal_code_to_calculate": "Unesite poštanski broj za izračun",
  "error_page.error_message_invalid_email_error": "Adresa e-pošte {{email}} nije se mogla potvrditi. Molimo unesite valjanu adresu e-pošte.",
  "payment_entry_page.button_payment_method": "Plati {{formattedPrice}} putem {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Plati {{formattedPrice}}",
  "price_update.title": "Ažuriranje cijene",
  "price_update.base_message": "Ukupna cijena je ažurirana s porezom na temelju vaše adrese za naplatu. Pregledajte i pokušajte ponovo. Vaša kartica bit će naplaćena samo jednom.",
  "price_update.trial_message": "Cijena pretplate je ažurirana da uključi poreze na temelju vaše adrese za naplatu. Besplatno probno razdoblje i dalje vrijedi. Molimo provjerite i pokušajte ponovno.",
  "payment_entry_page.express_checkout_divider": "ILI PLATITE KARTICOM",
  "error_page.trouble_accessing": "Ako imate problema s pristupom kupnji, obratite se podršci na ",
  "error_page.close_button_title": "Idi na {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Nedostaje Stripe dopuštenje",
  "error_page.button_close": "Zatvori",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Kupnja nije uspjela jer je adresa poreznog podrijetla nevažeća. U produkciji će kupnje funkcionirati bez primijenjenih poreza.",
  "error_page.error_message_stripe_tax_not_active": "Kupnja nije uspjela jer Stripe Tax nije omogućen. U produkciji će kupnje funkcionirati bez primijenjenih poreza.",
  "error_page.error_only_in_sandbox": "Ova se poruka pojavljuje samo u sandboxu.",
  "error_page.error_message_stripe_missing_required_permission": "Kupnja nije uspjela jer Stripe aplikaciji nedostaje potrebno dopuštenje. U produkciji će kupnje funkcionirati bez primijenjenih poreza.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax nije aktivan",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Nevažeća adresa poreznog podrijetla",
  "apple_pay.free_trial": "Besplatna proba",
  "product_info.price_after_intro_price": "Nakon {{introPriceDuration}}, na {{renewalDate}}",
  "product_info.after_trial": "nakon probnog perioda",
  "product_info.after": "nakon",
  "product_info.intro_price_phase_after_trial": "Zatim {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase": "Prvo {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "plaća se jednokratno",
  "payment_entry_page.trial_subscription_terms_info": "Nakon isteka probnog razdoblja, bit će vam naplaćeno {{price}} {{perFrequency}} počevši od {{renewalDate}}. Možete otkazati bilo kada prije tog datuma.",
  "payment_entry_page.subscription_info": "Pretplata se automatski obnavlja. Otkažite bilo kada.",
  "payment_entry_page.otp_terms_info": "Kupnjom pristajete dopustiti aplikaciji {{appName}} da vam naplati u skladu s njihovim uvjetima.",
  "payment_entry_page.terms_link_label": "Uvjeti",
  "payment_entry_page.subscription_terms_info": "Pretplatom se slažete da ćete dopustiti {{appName}} da vam naplaćuje u skladu s njihovim uvjetima dok ne otkažete.",
  "loading_page.keep_page_open": "Proces je skoro gotov. Ostavite ovu stranicu otvorenom.",
  "loading_page.processing_payment": "Obrada uplate",
  "pricing_table.discount": "Popust",
  "pricing_table.subtotal": "Međuzbroj",
  "pricing_dropdown.add_promo_code": "Dodaj promotivni kod",
  "discount_input.label": "Promo kod",
  "payment_entry_page.checkout_consent_terms_of_service": "uvjetima korištenja",
  "payment_entry_page.checkout_consent_agreement": "Slažem se s {{appName}} {{termsOfService}}."
}, Nm = {
  "periods.week": "{{amount}} týden",
  "periods.month": "{{amount}} měsíc",
  "periods.year": "{{amount}} rok",
  "periods.day": "{{amount}} den",
  "periods.weekShort": "{{amount}}týd",
  "periods.monthShort": "{{amount}}měs",
  "periods.yearShort": "{{amount}}rok",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "doživotně",
  "periods.weekPlural": "{{amount}} týdnů",
  "periods.monthPlural": "{{amount}} měsíců",
  "periods.yearPlural": "{{amount}} let",
  "periods.dayPlural": "{{amount}} dnů",
  "periods.weekFrequency": "týdně",
  "periods.monthFrequency": "měsíčně",
  "periods.yearFrequency": "ročně",
  "periods.dayFrequency": "denně",
  "periods.perWeekFrequency": "týdně",
  "periods.perMonthFrequency": "měsíčně",
  "periods.perYearFrequency": "ročně",
  "periods.perDayFrequency": "denně",
  "periods.unknownFrequency": "neznámé",
  "periods.weekFrequencyPlural": "každých {{amount}} týdnů",
  "periods.monthFrequencyPlural": "každých {{amount}} měsíců",
  "periods.yearFrequencyPlural": "každých {{amount}} let",
  "periods.dayFrequencyPlural": "každých {{amount}} dnů",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} zkušební verze zdarma",
  "product_info.price_after_free_trial": "Po skončení zkušební verze, {{renewalDate}}",
  "product_info.renewal_frequency": "Obnovuje se {{frequency}}",
  "product_info.continues_until_cancelled": "Pokračuje, dokud není zrušeno",
  "product_info.cancel_anytime": "Zrušit kdykoli",
  "payment_entry_page.payment_step_title": "Bezpečné placení přes RevenueCat",
  "payment_entry_page.button_pay": "Platit nyní",
  "payment_entry_page.button_start_trial": "Spustit zkušební verzi",
  "success_page.purchase_successful": "Platba dokončena",
  "success_page.button_close": "Pokračovat",
  "error_page.if_error_persists": "Pokud chyba přetrvává, kontaktujte ",
  "error_page.error_title_already_subscribed": "Již máte předplatné pro {{productTitle}}",
  "error_page.error_title_already_purchased": "Již jste zakoupili {{productTitle}}",
  "error_page.error_title_other_errors": "Něco se pokazilo",
  "error_page.error_message_already_subscribed": "Nemůžete si znovu předplatit tento produkt.",
  "error_page.error_message_already_purchased": "Tento produkt si nemůžete znovu zakoupit.",
  "error_page.error_message_missing_email_error": "Pro dokončení nákupu je vyžadován e-mail.",
  "error_page.error_message_network_error": "Síťová chyba. Zkontrolujte prosím své internetové připojení.",
  "error_page.error_message_error_charging_payment": "Platba selhala.",
  "error_page.error_message_error_setting_up_purchase": "Nákup nebyl zahájen z důvodu chyby (kód chyby: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nemohli jsme ověřit vaši fakturační adresu. Zkontrolujte prosím, zda je poštovní směrovací číslo a země správné.",
  "error_page.error_message_unknown_error": "Došlo k neznámé chybě (kód chyby: {{errorCode}}).",
  "error_page.button_try_again": "Zkusit znovu",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Celkem dnes k zaplacení",
  "product_info.subscribe_to": "Předplatit",
  "navbar_header.details": "Podrobnosti",
  "navbar_header.back_button": "Zpět",
  "pricing_dropdown.show_details": "Zobrazit podrobnosti",
  "pricing_dropdown.hide_details": "Skrýt podrobnosti",
  "pricing_table.tax": "Daň",
  "pricing_table.trial_ends": "Po skončení zkušební doby, dne {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Celkem splatné dnes",
  "pricing_table.total_excluding_tax": "Celkem bez daně",
  "pricing_table.enter_billing_address_to_calculate": "Zadejte fakturační adresu pro výpočet",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Zadejte stát nebo PSČ pro výpočet",
  "pricing_table.enter_postal_code_to_calculate": "Zadejte PSČ pro výpočet",
  "error_page.error_message_invalid_email_error": "E-mailová adresa {{email}} nemohla být ověřena. Zadejte prosím platnou e-mailovou adresu.",
  "payment_entry_page.button_payment_method": "Zaplatit {{formattedPrice}} pomocí {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Zaplatit {{formattedPrice}}",
  "price_update.title": "Aktualizace ceny",
  "price_update.base_message": "Celková cena byla aktualizována o daň na základě vaší fakturační adresy. Zkontrolujte ji a zkuste to znovu. Vaše karta bude stržena pouze jednou.",
  "price_update.trial_message": "Cena předplatného byla aktualizována včetně daní na základě vaší fakturační adresy. Bezplatná zkušební doba stále platí. Prosím, zkontrolujte a zkuste to znovu.",
  "payment_entry_page.express_checkout_divider": "NEBO ZAPLATIT KARTOU",
  "error_page.trouble_accessing": "Pokud máte potíže s přístupem k zakoupenému obsahu, kontaktujte podporu na ",
  "error_page.close_button_title": "Přejít na {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Chybí oprávnění Stripe",
  "error_page.button_close": "Zavřít",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Nákup se nezdařil, protože adresa původu daně je neplatná. V produkčním prostředí budou nákupy fungovat bez uplatnění daní.",
  "error_page.error_message_stripe_tax_not_active": "Nákup se nezdařil, protože Stripe Tax není aktivní. V produkčním prostředí budou nákupy fungovat bez uplatnění daní.",
  "error_page.error_only_in_sandbox": "Tato zpráva se zobrazuje pouze v sandboxu.",
  "error_page.error_message_stripe_missing_required_permission": "Nákup se nezdařil, protože aplikaci Stripe chybí požadované oprávnění. V produkčním prostředí budou nákupy fungovat bez uplatnění daní.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax není aktivní",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Neplatná adresa původu daně",
  "apple_pay.free_trial": "Zkušební verze zdarma",
  "product_info.price_after_intro_price": "Po {{introPriceDuration}}, dne {{renewalDate}}",
  "product_info.after_trial": "po zkušební době",
  "product_info.after": "po",
  "product_info.intro_price_phase_after_trial": "Poté {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase": "Nejprve {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "placeno jednorázově",
  "payment_entry_page.trial_subscription_terms_info": "Po skončení zkušebního období vám bude účtováno {{price}} {{perFrequency}} počínaje {{renewalDate}}. Před tímto datem můžete kdykoli zrušit.",
  "payment_entry_page.subscription_info": "Předplatné se automaticky obnovuje. Zrušit můžete kdykoli.",
  "payment_entry_page.otp_terms_info": "Zakoupením souhlasíte s tím, že umožníte aplikaci {{appName}} účtovat vám poplatky v souladu s jejími podmínkami.",
  "payment_entry_page.terms_link_label": "Podmínky",
  "payment_entry_page.subscription_terms_info": "Přihlášením k odběru souhlasíte s tím, že společnost {{appName}} vám bude účtovat poplatky v souladu s jejími podmínkami, dokud odběr nezrušíte.",
  "loading_page.keep_page_open": "Probíhá dokončování procesu. Nechte tuto stránku otevřenou.",
  "loading_page.processing_payment": "Probíhá zpracování platby",
  "pricing_table.discount": "Sleva",
  "pricing_table.subtotal": "Mezisoučet",
  "pricing_dropdown.add_promo_code": "Přidat promo kód",
  "discount_input.label": "Promo kód",
  "payment_entry_page.checkout_consent_terms_of_service": "podmínkami služby",
  "payment_entry_page.checkout_consent_agreement": "Souhlasím s {{appName}} {{termsOfService}}."
}, Lm = {
  "periods.week": "{{amount}} uge",
  "periods.month": "{{amount}} måned",
  "periods.year": "{{amount}} år",
  "periods.day": "{{amount}} dag",
  "periods.weekShort": "{{amount}}ug",
  "periods.monthShort": "{{amount}}md",
  "periods.yearShort": "{{amount}}år",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "livstid",
  "periods.weekPlural": "{{amount}} uger",
  "periods.monthPlural": "{{amount}} måneder",
  "periods.yearPlural": "{{amount}} år",
  "periods.dayPlural": "{{amount}} dage",
  "periods.weekFrequency": "ugentligt",
  "periods.monthFrequency": "månedligt",
  "periods.yearFrequency": "årligt",
  "periods.dayFrequency": "dagligt",
  "periods.perWeekFrequency": "pr. uge",
  "periods.perMonthFrequency": "pr. måned",
  "periods.perYearFrequency": "pr. år",
  "periods.perDayFrequency": "pr. dag",
  "periods.unknownFrequency": "ukendt",
  "periods.weekFrequencyPlural": "hver {{amount}} uger",
  "periods.monthFrequencyPlural": "hver {{amount}} måneder",
  "periods.yearFrequencyPlural": "hver {{amount}} år",
  "periods.dayFrequencyPlural": "hver {{amount}} dage",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} gratis prøveperiode",
  "product_info.price_after_free_trial": "Efter prøveperioden slutter, den {{renewalDate}}",
  "product_info.renewal_frequency": "Fornyes {{frequency}}",
  "product_info.continues_until_cancelled": "Fortsætter indtil annulleret",
  "product_info.cancel_anytime": "Annuller når som helst",
  "payment_entry_page.payment_step_title": "Sikker betaling via RevenueCat",
  "payment_entry_page.button_pay": "Betal nu",
  "payment_entry_page.button_start_trial": "Start prøveperiode",
  "success_page.purchase_successful": "Betaling gennemført",
  "success_page.button_close": "Fortsæt",
  "error_page.if_error_persists": "Hvis fejlen fortsætter, kontakt venligst ",
  "error_page.error_title_already_subscribed": "Du abonnerer allerede på {{productTitle}}",
  "error_page.error_title_already_purchased": "Du har allerede købt {{productTitle}}",
  "error_page.error_title_other_errors": "Noget gik galt",
  "error_page.error_message_already_subscribed": "Du kan ikke abonnere på dette produkt igen.",
  "error_page.error_message_already_purchased": "Du kan ikke købe dette produkt igen.",
  "error_page.error_message_missing_email_error": "Email er påkrævet for at gennemføre købet.",
  "error_page.error_message_network_error": "Netværksfejl. Kontroller din internetforbindelse.",
  "error_page.error_message_error_charging_payment": "Betalingen mislykkedes.",
  "error_page.error_message_error_setting_up_purchase": "Køb ikke startet på grund af en fejl (fejlkode: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Vi kunne ikke bekræfte din faktureringsadresse. Kontroller venligst, at postnummeret og landet er korrekte.",
  "error_page.error_message_unknown_error": "Der opstod en ukendt fejl (fejlkode: {{errorCode}}).",
  "error_page.button_try_again": "Prøv igen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Samlet beløb for i dag",
  "product_info.subscribe_to": "Abonner på",
  "navbar_header.details": "Detaljer",
  "navbar_header.back_button": "Tilbage",
  "pricing_dropdown.show_details": "Vis detaljer",
  "pricing_dropdown.hide_details": "Skjul detaljer",
  "pricing_table.tax": "Moms",
  "pricing_table.trial_ends": "Efter prøveperioden slutter, den {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Samlet beløb forfalden i dag",
  "pricing_table.total_excluding_tax": "Samlet beløb eksklusive moms",
  "pricing_table.enter_billing_address_to_calculate": "Indtast faktureringsadresse for at beregne",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Indtast stat eller postnummer for at beregne",
  "pricing_table.enter_postal_code_to_calculate": "Indtast postnummer for at beregne",
  "error_page.error_message_invalid_email_error": "E-mailadressen {{email}} kunne ikke bekræftes. Angiv en gyldig e-mailadresse.",
  "payment_entry_page.button_payment_method": "Betal {{formattedPrice}} med {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Betal {{formattedPrice}}",
  "price_update.title": "Prisopdatering",
  "price_update.base_message": "Den samlede pris er blevet opdateret med moms baseret på din faktureringsadresse. Gennemgå og prøv igen. Dit kort vil kun blive debiteret én gang.",
  "price_update.trial_message": "Abonnementsprisen er opdateret for at inkludere skatter baseret på din faktureringsadresse. Den gratis prøveperiode gælder stadig. Kontroller venligst og prøv igen.",
  "payment_entry_page.express_checkout_divider": "ELLER BETAL MED KORT",
  "error_page.trouble_accessing": "Hvis du har problemer med at få adgang til dit køb, kan du kontakte support på ",
  "error_page.close_button_title": "Gå til {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Manglende Stripe-tilladelse",
  "error_page.button_close": "Luk",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Købet mislykkedes, fordi skatteoprindelsesadressen er ugyldig. I produktion vil køb fungere uden påførte skatter.",
  "error_page.error_message_stripe_tax_not_active": "Købet mislykkedes, fordi Stripe Tax ikke er aktiveret. I produktion vil køb fungere uden påførte skatter.",
  "error_page.error_only_in_sandbox": "Denne meddelelse vises kun i sandkassen.",
  "error_page.error_message_stripe_missing_required_permission": "Købet mislykkedes, fordi Stripe-appen mangler en påkrævet tilladelse. I produktion vil køb fungere uden påførte skatter.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax er ikke aktiv",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Ugyldig skatteoprindelsesadresse",
  "apple_pay.free_trial": "Gratis prøveperiode",
  "product_info.price_after_intro_price": "Efter {{introPriceDuration}}, den {{renewalDate}}",
  "product_info.after_trial": "efter prøveperiode",
  "product_info.after": "efter",
  "product_info.intro_price_phase_after_trial": "Derefter {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase": "Først {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "betales én gang",
  "payment_entry_page.trial_subscription_terms_info": "Efter din prøveperiode slutter, vil du blive opkrævet {{price}} {{perFrequency}} fra og med {{renewalDate}}. Du kan opsige når som helst før denne dato.",
  "payment_entry_page.subscription_info": "Abonnementet fornys automatisk. Opsig når som helst.",
  "payment_entry_page.otp_terms_info": "Ved at købe accepterer du, at {{appName}} kan debitere dig i overensstemmelse med deres vilkår.",
  "payment_entry_page.terms_link_label": "Vilkår",
  "payment_entry_page.subscription_terms_info": "Ved at abonnere accepterer du, at {{appName}} kan opkræve dig i henhold til deres vilkår, indtil du opsiger.",
  "loading_page.keep_page_open": "Processen er næsten færdig. Hold denne side åben.",
  "loading_page.processing_payment": "Behandler betaling",
  "pricing_table.discount": "Rabat",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Tilføj rabatkode",
  "discount_input.label": "Kampagnekode",
  "payment_entry_page.checkout_consent_terms_of_service": "servicevilkår",
  "payment_entry_page.checkout_consent_agreement": "Jeg accepterer {{appName}}'s {{termsOfService}}."
}, jm = {
  "periods.week": "{{amount}} week",
  "periods.month": "{{amount}} maand",
  "periods.year": "{{amount}} jaar",
  "periods.day": "{{amount}} dag",
  "periods.weekShort": "{{amount}}wk",
  "periods.monthShort": "{{amount}}maand",
  "periods.yearShort": "{{amount}}jr",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "levenslang",
  "periods.weekPlural": "{{amount}} weken",
  "periods.monthPlural": "{{amount}} maanden",
  "periods.yearPlural": "{{amount}} jaren",
  "periods.dayPlural": "{{amount}} dagen",
  "periods.weekFrequency": "wekelijks",
  "periods.monthFrequency": "maandelijks",
  "periods.yearFrequency": "jaarlijks",
  "periods.dayFrequency": "dagelijks",
  "periods.perWeekFrequency": "per week",
  "periods.perMonthFrequency": "per maand",
  "periods.perYearFrequency": "per jaar",
  "periods.perDayFrequency": "per dag",
  "periods.unknownFrequency": "onbekend",
  "periods.weekFrequencyPlural": "elke {{amount}} weken",
  "periods.monthFrequencyPlural": "elke {{amount}} maanden",
  "periods.yearFrequencyPlural": "elke {{amount}} jaren",
  "periods.dayFrequencyPlural": "elke {{amount}} dagen",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} gratis proefperiode",
  "product_info.price_after_free_trial": "Na afloop van de proefperiode, op {{renewalDate}}",
  "product_info.renewal_frequency": "Wordt verlengd {{frequency}}",
  "product_info.continues_until_cancelled": "Wordt voortgezet tot annulering",
  "product_info.cancel_anytime": "Annuleer op elk gewenst moment",
  "payment_entry_page.payment_step_title": "Veilige afrekening via RevenueCat",
  "payment_entry_page.button_pay": "Nu betalen",
  "payment_entry_page.button_start_trial": "Start proefperiode",
  "success_page.purchase_successful": "Betaling voltooid",
  "success_page.button_close": "Doorgaan",
  "error_page.if_error_persists": "Neem contact op met  als de fout aanhoudt",
  "error_page.error_title_already_subscribed": "Je bent al geabonneerd op {{productTitle}}",
  "error_page.error_title_already_purchased": "Je hebt {{productTitle}} al gekocht",
  "error_page.error_title_other_errors": "Er is iets misgegaan",
  "error_page.error_message_already_subscribed": "Je kunt je niet opnieuw abonneren op dit product.",
  "error_page.error_message_already_purchased": "Je kunt dit product niet opnieuw kopen.",
  "error_page.error_message_missing_email_error": "Een e-mailadres is vereist om de aankoop te voltooien.",
  "error_page.error_message_network_error": "Netwerkfout. Controleer uw internetverbinding.",
  "error_page.error_message_error_charging_payment": "Betaling mislukt.",
  "error_page.error_message_error_setting_up_purchase": "Aankoop niet gestart vanwege een fout (foutcode: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "We konden uw factuuradres niet verifiëren. Controleer of de postcode en het land correct zijn.",
  "error_page.error_message_unknown_error": "Er is een onbekende fout opgetreden (foutcode: {{errorCode}}).",
  "error_page.button_try_again": "Opnieuw proberen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Totaal te betalen vandaag",
  "product_info.subscribe_to": "Abonneren op",
  "navbar_header.details": "Details",
  "navbar_header.back_button": "Terug",
  "pricing_dropdown.show_details": "Toon details",
  "pricing_dropdown.hide_details": "Verberg details",
  "pricing_table.tax": "Btw",
  "pricing_table.trial_ends": "Na afloop van de proefperiode, op {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Totaal vandaag te betalen",
  "pricing_table.total_excluding_tax": "Totaal exclusief btw",
  "pricing_table.enter_billing_address_to_calculate": "Voer het factuuradres in om te berekenen",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Voer provincie of postcode in om te berekenen",
  "pricing_table.enter_postal_code_to_calculate": "Voer postcode in om te berekenen",
  "error_page.error_message_invalid_email_error": "Het e-mailadres {{email}} kon niet worden geverifieerd. Geef een geldig e-mailadres op.",
  "payment_entry_page.button_payment_method": "Betaal {{formattedPrice}} met {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Betaal {{formattedPrice}}",
  "price_update.title": "Prijsupdate",
  "price_update.base_message": "De totale prijs is bijgewerkt met belasting op basis van uw factuuradres. Controleer en probeer het opnieuw. Uw kaart wordt slechts één keer belast.",
  "price_update.trial_message": "De abonnementsprijs is bijgewerkt om belastingen op te nemen op basis van uw factuuradres. De gratis proefperiode blijft van toepassing. Controleer en probeer het opnieuw.",
  "payment_entry_page.express_checkout_divider": "OF BETAAL MET EEN KAART",
  "error_page.trouble_accessing": "Als je problemen hebt met het verkrijgen van toegang tot je aankoop, neem dan contact op met de ondersteuning via ",
  "error_page.close_button_title": "Ga naar {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Ontbrekende Stripe-toestemming",
  "error_page.button_close": "Sluiten",
  "error_page.error_message_stripe_invalid_tax_origin_address": "De aankoop is mislukt omdat het belastingoorsprongadres ongeldig is. In productie werken aankopen zonder toegepaste belastingen.",
  "error_page.error_message_stripe_tax_not_active": "De aankoop is mislukt omdat Stripe Tax niet is ingeschakeld. In productie werken aankopen zonder toegepaste belastingen.",
  "error_page.error_only_in_sandbox": "Dit bericht verschijnt alleen in de sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "De aankoop is mislukt omdat de Stripe-app een vereiste toestemming mist. In productie werken aankopen zonder toegepaste belastingen.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax niet actief",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Ongeldig belastingoorsprongadres",
  "apple_pay.free_trial": "Gratis proefperiode",
  "product_info.price_after_intro_price": "Na {{introPriceDuration}}, op {{renewalDate}}",
  "product_info.after_trial": "na proefperiode",
  "product_info.after": "na",
  "product_info.intro_price_phase_after_trial": "Daarna {{introPriceDuration}} voor {{introPrice}}",
  "product_info.intro_price_phase": "Eerst {{introPriceDuration}} voor {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "eenmalig betaald",
  "payment_entry_page.trial_subscription_terms_info": "Na afloop van uw proefperiode wordt {{price}} {{perFrequency}} in rekening gebracht, beginnend op {{renewalDate}}. U kunt op elk moment vóór deze datum annuleren.",
  "payment_entry_page.subscription_info": "Abonnement wordt automatisch verlengd. Annuleer op elk moment.",
  "payment_entry_page.otp_terms_info": "Door de aankoop ga je ermee akkoord dat {{appName}} kosten in rekening brengt volgens hun voorwaarden.",
  "payment_entry_page.terms_link_label": "Voorwaarden",
  "payment_entry_page.subscription_terms_info": "Door u te abonneren, stemt u ermee in dat {{appName}} u kosten in rekening brengt volgens hun voorwaarden totdat u annuleert.",
  "loading_page.keep_page_open": "Het proces is bijna voltooid. Houd deze pagina open.",
  "loading_page.processing_payment": "Betaling verwerken",
  "pricing_table.discount": "Korting",
  "pricing_table.subtotal": "Subtotaal",
  "pricing_dropdown.add_promo_code": "Promotiecode toevoegen",
  "discount_input.label": "Promotiecode",
  "payment_entry_page.checkout_consent_terms_of_service": "servicevoorwaarden",
  "payment_entry_page.checkout_consent_agreement": "Ik ga akkoord met de {{appName}} {{termsOfService}}."
}, Bm = {
  "periods.week": "{{amount}} viikko",
  "periods.month": "{{amount}} kuukausi",
  "periods.year": "{{amount}} vuosi",
  "periods.day": "{{amount}} päivä",
  "periods.weekShort": "{{amount}}vk",
  "periods.monthShort": "{{amount}}kk",
  "periods.yearShort": "{{amount}}v",
  "periods.dayShort": "{{amount}}p",
  "periods.lifetime": "elämäaika",
  "periods.weekPlural": "{{amount}} viikkoa",
  "periods.monthPlural": "{{amount}} kuukautta",
  "periods.yearPlural": "{{amount}} vuotta",
  "periods.dayPlural": "{{amount}} päivää",
  "periods.weekFrequency": "viikoittain",
  "periods.monthFrequency": "kuukausittain",
  "periods.yearFrequency": "vuosittain",
  "periods.dayFrequency": "päivittäin",
  "periods.perWeekFrequency": "viikossa",
  "periods.perMonthFrequency": "kuukaudessa",
  "periods.perYearFrequency": "vuodessa",
  "periods.perDayFrequency": "päivässä",
  "periods.unknownFrequency": "tuntematon",
  "periods.weekFrequencyPlural": "joka {{amount}} viikko",
  "periods.monthFrequencyPlural": "joka {{amount}} kuukausi",
  "periods.yearFrequencyPlural": "joka {{amount}} vuosi",
  "periods.dayFrequencyPlural": "joka {{amount}} päivä",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} ilmainen kokeilujakso",
  "product_info.price_after_free_trial": "Kokeilujakson päätyttyä, {{renewalDate}}",
  "product_info.renewal_frequency": "Uusiutuu {{frequency}}",
  "product_info.continues_until_cancelled": "Jatkuu, kunnes peruutetaan",
  "product_info.cancel_anytime": "Peruuta milloin tahansa",
  "payment_entry_page.payment_step_title": "Suojautunut kassatoiminto RevenueCatin kautta",
  "payment_entry_page.button_pay": "Maksa nyt",
  "payment_entry_page.button_start_trial": "Aloita kokeilujakso",
  "success_page.purchase_successful": "Maksaminen onnistui",
  "success_page.button_close": "Jatka",
  "error_page.if_error_persists": "Jos virhe jatkuu, ota yhteyttä ",
  "error_page.error_title_already_subscribed": "Olet jo tilannut tuotteen {{productTitle}}",
  "error_page.error_title_already_purchased": "Olet jo ostanut tuotteen {{productTitle}}",
  "error_page.error_title_other_errors": "Jokin meni pieleen",
  "error_page.error_message_already_subscribed": "Et voi tilata tätä tuotetta uudelleen.",
  "error_page.error_message_already_purchased": "Et voi ostaa tätä tuotetta uudelleen.",
  "error_page.error_message_missing_email_error": "Sähköpostiosoite tarvitaan ostoksen loppuun saattamiseksi.",
  "error_page.error_message_network_error": "Verkkovirhe. Tarkista internet-yhteytesi.",
  "error_page.error_message_error_charging_payment": "Maksaminen epäonnistui.",
  "error_page.error_message_error_setting_up_purchase": "Ostoa ei aloitettu virheen vuoksi (virhekoodi: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Emme voineet vahvistaa laskutusosoitettasi. Tarkista, että postinumero ja maa ovat oikein.",
  "error_page.error_message_unknown_error": "Tapahtui tuntematon virhe (virhekoodi: {{errorCode}}).",
  "error_page.button_try_again": "Yritä uudelleen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Maksettava summa tänään",
  "product_info.subscribe_to": "Tilaa",
  "navbar_header.details": "Yksityiskohdat",
  "navbar_header.back_button": "Takaisin",
  "pricing_dropdown.show_details": "Näytä tiedot",
  "pricing_dropdown.hide_details": "Piilota tiedot",
  "pricing_table.tax": "Vero",
  "pricing_table.trial_ends": "Kokeilujakson päätyttyä, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Maksettava summa tänään",
  "pricing_table.total_excluding_tax": "Veroton kokonaissumma",
  "pricing_table.enter_billing_address_to_calculate": "Syötä laskutusosoite laskeaksesi",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Syötä osavaltio tai postinumero laskeaksesi",
  "pricing_table.enter_postal_code_to_calculate": "Syötä postinumero laskeaksesi",
  "error_page.error_message_invalid_email_error": "Sähköpostiosoitetta {{email}} ei voitu vahvistaa. Anna kelvollinen sähköpostiosoite.",
  "payment_entry_page.button_payment_method": "Maksa {{formattedPrice}} käyttämällä {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Maksa {{formattedPrice}}",
  "price_update.title": "Hinnan päivitys",
  "price_update.base_message": "Kokonaishinta on päivitetty verolla laskutusosoitteesi perusteella. Tarkista ja yritä uudelleen. Korttiasi veloitetaan vain kerran.",
  "price_update.trial_message": "Tilauksen hinta on päivitetty sisältämään verot laskutusosoitteesi perusteella. Ilmainen kokeilujakso on edelleen voimassa. Tarkista ja yritä uudelleen.",
  "payment_entry_page.express_checkout_divider": "TAI MAKSA KORTILLA",
  "error_page.trouble_accessing": "Jos sinulla on ongelmia ostoksesi käyttämisessä, ota yhteyttä tukeen osoitteessa ",
  "error_page.close_button_title": "Siirry sovellukseen {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Puuttuva Stripe-käyttöoikeus",
  "error_page.button_close": "Sulje",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Osto epäonnistui, koska veron alkuperäosoite on virheellinen. Tuotantoympäristössä ostot toimivat ilman veroja.",
  "error_page.error_message_stripe_tax_not_active": "Osto epäonnistui, koska Stripe Tax ei ole käytössä. Tuotantoympäristössä ostot toimivat ilman veroja.",
  "error_page.error_only_in_sandbox": "Tämä viesti näkyy vain hiekkalaatikossa.",
  "error_page.error_message_stripe_missing_required_permission": "Osto epäonnistui, koska Stripe-sovellukselta puuttuu vaadittu käyttöoikeus. Tuotantoympäristössä ostot toimivat ilman veroja.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax ei ole aktiivinen",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Virheellinen veron alkuperäosoite",
  "apple_pay.free_trial": "Ilmainen kokeilu",
  "product_info.price_after_intro_price": "{{introPriceDuration}} jälkeen, {{renewalDate}}",
  "product_info.after_trial": "kokeilujakson jälkeen",
  "product_info.after": "jälkeen",
  "product_info.intro_price_phase_after_trial": "Sitten {{introPriceDuration}} hintaan {{introPrice}}",
  "product_info.intro_price_phase": "Ensimmäiset {{introPriceDuration}} hintaan {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "maksetaan kerran",
  "payment_entry_page.trial_subscription_terms_info": "Kokeilujakson päätyttyä sinulta veloitetaan {{price}} {{perFrequency}} alkaen {{renewalDate}}. Voit peruuttaa milloin tahansa ennen tätä päivämäärää.",
  "payment_entry_page.subscription_info": "Tilaus uusiutuu automaattisesti. Peruuta milloin tahansa.",
  "payment_entry_page.otp_terms_info": "Ostamalla hyväksyt, että {{appName}} veloittaa sinua heidän ehtojensa mukaisesti.",
  "payment_entry_page.terms_link_label": "Ehdot",
  "payment_entry_page.subscription_terms_info": "Tilaamalla hyväksyt, että {{appName}} veloittaa sinulta ehtojensa mukaisesti, kunnes peruutat tilauksen.",
  "loading_page.keep_page_open": "Prosessi on melkein valmis. Pidä tämä sivu auki.",
  "loading_page.processing_payment": "Maksua käsitellään",
  "pricing_table.discount": "Alennus",
  "pricing_table.subtotal": "Välisumma",
  "pricing_dropdown.add_promo_code": "Lisää kampanjakoodi",
  "discount_input.label": "Kampanjakoodi",
  "payment_entry_page.checkout_consent_terms_of_service": "käyttöehdot",
  "payment_entry_page.checkout_consent_agreement": "Hyväksyn {{appName}}-palvelun {{termsOfService}}."
}, Rm = {
  "periods.week": "{{amount}} semaine",
  "periods.month": "{{amount}} mois",
  "periods.year": "{{amount}} an",
  "periods.day": "{{amount}} jour",
  "periods.weekShort": "{{amount}}sem",
  "periods.monthShort": "{{amount}}mois",
  "periods.yearShort": "{{amount}}an",
  "periods.dayShort": "{{amount}}j",
  "periods.lifetime": "à vie",
  "periods.weekPlural": "{{amount}} semaines",
  "periods.monthPlural": "{{amount}} mois",
  "periods.yearPlural": "{{amount}} ans",
  "periods.dayPlural": "{{amount}} jours",
  "periods.weekFrequency": "hebdomadaire",
  "periods.monthFrequency": "mensuel",
  "periods.yearFrequency": "annuel",
  "periods.dayFrequency": "quotidien",
  "periods.perWeekFrequency": "par semaine",
  "periods.perMonthFrequency": "par mois",
  "periods.perYearFrequency": "par an",
  "periods.perDayFrequency": "par jour",
  "periods.unknownFrequency": "inconnu",
  "periods.weekFrequencyPlural": "toutes les {{amount}} semaines",
  "periods.monthFrequencyPlural": "tous les {{amount}} mois",
  "periods.yearFrequencyPlural": "tous les {{amount}} ans",
  "periods.dayFrequencyPlural": "tous les {{amount}} jours",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} essai gratuit",
  "product_info.price_after_free_trial": "Après la fin de l'essai, le {{renewalDate}}",
  "product_info.renewal_frequency": "Renouvellement {{frequency}}",
  "product_info.continues_until_cancelled": "Continue jusqu'à annulation",
  "product_info.cancel_anytime": "Annulez à tout moment",
  "payment_entry_page.payment_step_title": "Paiement sécurisé par RevenueCat",
  "payment_entry_page.button_pay": "Payer maintenant",
  "payment_entry_page.button_start_trial": "Commencer l'essai",
  "success_page.purchase_successful": "Paiement effectué",
  "success_page.button_close": "Continuer",
  "error_page.if_error_persists": "Si l'erreur persiste, veuillez contacter ",
  "error_page.error_title_already_subscribed": "Vous êtes déjà abonné à {{productTitle}}",
  "error_page.error_title_already_purchased": "Vous avez déjà acheté {{productTitle}}",
  "error_page.error_title_other_errors": "Une erreur s'est produite",
  "error_page.error_message_already_subscribed": "Vous ne pouvez pas vous abonner à nouveau à ce produit.",
  "error_page.error_message_already_purchased": "Vous ne pouvez pas acheter ce produit à nouveau.",
  "error_page.error_message_missing_email_error": "L'adresse e-mail est requise pour effectuer l'achat.",
  "error_page.error_message_network_error": "Erreur réseau. Veuillez vérifier votre connexion Internet.",
  "error_page.error_message_error_charging_payment": "Échec du paiement.",
  "error_page.error_message_error_setting_up_purchase": "L'achat n'a pas pu démarrer en raison d'une erreur (code d'erreur : {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nous n'avons pas pu vérifier votre adresse de facturation. Veuillez vérifier que le code postal et le pays sont corrects.",
  "error_page.error_message_unknown_error": "Une erreur inconnue s'est produite (code d'erreur : {{errorCode}}).",
  "error_page.button_try_again": "Réessayer",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total dû aujourd'hui",
  "product_info.subscribe_to": "S'abonner à",
  "navbar_header.details": "Détails",
  "navbar_header.back_button": "Retour",
  "pricing_dropdown.show_details": "Afficher les détails",
  "pricing_dropdown.hide_details": "Masquer les détails",
  "pricing_table.tax": "Taxe",
  "pricing_table.trial_ends": "Après la fin de l'essai, le {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total dû aujourd'hui",
  "pricing_table.total_excluding_tax": "Total hors taxes",
  "pricing_table.enter_billing_address_to_calculate": "Saisir l'adresse de facturation pour calculer",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Entrez l'état ou le code postal pour calculer",
  "pricing_table.enter_postal_code_to_calculate": "Entrez le code postal pour calculer",
  "error_page.error_message_invalid_email_error": "L'adresse e-mail {{email}} n'a pas pu être vérifiée. Veuillez fournir une adresse e-mail valide.",
  "payment_entry_page.button_payment_method": "Payer {{formattedPrice}} avec {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Payer {{formattedPrice}}",
  "price_update.title": "Mise à jour du prix",
  "price_update.base_message": "Le prix total a été mis à jour avec la taxe en fonction de votre adresse de facturation. Veuillez vérifier et réessayer. Votre carte ne sera débitée qu'une seule fois.",
  "price_update.trial_message": "Le prix de l'abonnement a été mis à jour pour inclure les taxes en fonction de votre adresse de facturation. La période d'essai gratuit reste applicable. Veuillez vérifier et réessayer.",
  "payment_entry_page.express_checkout_divider": "OU PAYER PAR CARTE",
  "error_page.trouble_accessing": "Si vous avez des difficultés à accéder à votre achat, contactez le support à l'adresse suivante : ",
  "error_page.close_button_title": "Aller sur {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Autorisation Stripe manquante",
  "error_page.button_close": "Fermer",
  "error_page.error_message_stripe_invalid_tax_origin_address": "L'achat a échoué car l'adresse d'origine de la taxe n'est pas valide. En production, les achats fonctionneront sans taxes appliquées.",
  "error_page.error_message_stripe_tax_not_active": "L'achat a échoué car Stripe Tax n'est pas activé. En production, les achats fonctionneront sans taxes appliquées.",
  "error_page.error_only_in_sandbox": "Ce message apparaît uniquement dans l'environnement de test.",
  "error_page.error_message_stripe_missing_required_permission": "L'achat a échoué car l'application Stripe ne dispose pas d'une autorisation requise. En production, les achats fonctionneront sans taxes appliquées.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax non actif",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Adresse d'origine de la taxe non valide",
  "apple_pay.free_trial": "Essai gratuit",
  "product_info.price_after_intro_price": "Après {{introPriceDuration}}, le {{renewalDate}}",
  "product_info.after_trial": "après l'essai",
  "product_info.after": "après",
  "product_info.intro_price_phase_after_trial": "Puis {{introPriceDuration}} pour {{introPrice}}",
  "product_info.intro_price_phase": "{{introPriceDuration}} pour {{introPrice}} au départ",
  "product_info.intro_price_phase_paid_once": "payé une fois",
  "payment_entry_page.trial_subscription_terms_info": "Après la fin de votre essai, vous serez facturé {{price}} {{perFrequency}} à partir du {{renewalDate}}. Vous pouvez annuler à tout moment avant cette date.",
  "payment_entry_page.subscription_info": "L'abonnement est renouvelé automatiquement. Annulez à tout moment.",
  "payment_entry_page.otp_terms_info": "En achetant, vous acceptez d'autoriser {{appName}} à vous facturer conformément à ses conditions.",
  "payment_entry_page.terms_link_label": "Conditions",
  "payment_entry_page.subscription_terms_info": "En vous abonnant, vous acceptez d'autoriser {{appName}} à vous facturer conformément à ses conditions jusqu'à ce que vous annuliez.",
  "loading_page.keep_page_open": "Le processus est presque terminé. Veuillez garder cette page ouverte.",
  "loading_page.processing_payment": "Paiement en cours",
  "pricing_table.discount": "Remise",
  "pricing_table.subtotal": "Sous-total",
  "pricing_dropdown.add_promo_code": "Ajouter un code promotionnel",
  "discount_input.label": "Code promo",
  "payment_entry_page.checkout_consent_terms_of_service": "conditions d'utilisation",
  "payment_entry_page.checkout_consent_agreement": "J'accepte les {{termsOfService}} de {{appName}}."
}, Um = {
  "periods.week": "{{amount}} Woche",
  "periods.month": "{{amount}} Monat",
  "periods.year": "{{amount}} Jahr",
  "periods.day": "{{amount}} Tag",
  "periods.weekShort": "{{amount}}Wo",
  "periods.monthShort": "{{amount}}Mo",
  "periods.yearShort": "{{amount}}J",
  "periods.dayShort": "{{amount}}T",
  "periods.lifetime": "lebenslang",
  "periods.weekPlural": "{{amount}} Wochen",
  "periods.monthPlural": "{{amount}} Monate",
  "periods.yearPlural": "{{amount}} Jahre",
  "periods.dayPlural": "{{amount}} Tage",
  "periods.weekFrequency": "wöchentlich",
  "periods.monthFrequency": "monatlich",
  "periods.yearFrequency": "jährlich",
  "periods.dayFrequency": "täglich",
  "periods.perWeekFrequency": "pro Woche",
  "periods.perMonthFrequency": "pro Monat",
  "periods.perYearFrequency": "pro Jahr",
  "periods.perDayFrequency": "pro Tag",
  "periods.unknownFrequency": "unbekannt",
  "periods.weekFrequencyPlural": "alle {{amount}} Wochen",
  "periods.monthFrequencyPlural": "alle {{amount}} Monate",
  "periods.yearFrequencyPlural": "alle {{amount}} Jahre",
  "periods.dayFrequencyPlural": "alle {{amount}} Tage",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} kostenlose Testversion",
  "product_info.price_after_free_trial": "Nach Ablauf der Testversion, am {{renewalDate}}",
  "product_info.renewal_frequency": "Verlängert sich {{frequency}}",
  "product_info.continues_until_cancelled": "Läuft bis zur Kündigung",
  "product_info.cancel_anytime": "Jederzeit kündbar",
  "payment_entry_page.payment_step_title": "Sicherer Checkout über RevenueCat",
  "payment_entry_page.button_pay": "Jetzt bezahlen",
  "payment_entry_page.button_start_trial": "Testversion starten",
  "success_page.purchase_successful": "Zahlung abgeschlossen",
  "success_page.button_close": "Weiter",
  "error_page.if_error_persists": "Wenn der Fehler weiterhin besteht, wenden Sie sich bitte an ",
  "error_page.error_title_already_subscribed": "Du hast {{productTitle}} bereits abonniert",
  "error_page.error_title_already_purchased": "Du hast {{productTitle}} bereits gekauft",
  "error_page.error_title_other_errors": "Etwas ist schief gelaufen",
  "error_page.error_message_already_subscribed": "Du kannst dieses Produkt nicht erneut abonnieren.",
  "error_page.error_message_already_purchased": "Du kannst dieses Produkt nicht erneut kaufen.",
  "error_page.error_message_missing_email_error": "Für den Kauf ist eine E-Mail-Adresse erforderlich.",
  "error_page.error_message_network_error": "Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.",
  "error_page.error_message_error_charging_payment": "Zahlung fehlgeschlagen.",
  "error_page.error_message_error_setting_up_purchase": "Der Kauf wurde aufgrund eines Fehlers nicht gestartet (Fehlercode: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Wir konnten Ihre Rechnungsadresse nicht überprüfen. Bitte überprüfen Sie, ob die Postleitzahl und das Land korrekt sind.",
  "error_page.error_message_unknown_error": "Ein unbekannter Fehler ist aufgetreten (Fehlercode: {{errorCode}}).",
  "error_page.button_try_again": "Erneut versuchen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Heute fälliger Gesamtbetrag",
  "product_info.subscribe_to": "Abonnieren",
  "navbar_header.details": "Details",
  "navbar_header.back_button": "Zurück",
  "pricing_dropdown.show_details": "Details anzeigen",
  "pricing_dropdown.hide_details": "Details ausblenden",
  "pricing_table.tax": "Steuer",
  "pricing_table.trial_ends": "Nach Ablauf der Testphase, am {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Heute fälliger Gesamtbetrag",
  "pricing_table.total_excluding_tax": "Gesamtbetrag ohne Steuer",
  "pricing_table.enter_billing_address_to_calculate": "Rechnungsadresse eingeben, um zu berechnen",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Bundesland oder Postleitzahl zur Berechnung eingeben",
  "pricing_table.enter_postal_code_to_calculate": "Postleitzahl zur Berechnung eingeben",
  "error_page.error_message_invalid_email_error": "Die E-Mail-Adresse {{email}} konnte nicht verifiziert werden. Bitte gib eine gültige E-Mail-Adresse an.",
  "payment_entry_page.button_payment_method": "Mit {{paymentMethod}} für {{formattedPrice}} bezahlen",
  "payment_entry_page.button_with_price": "{{formattedPrice}} bezahlen",
  "price_update.title": "Preisaktualisierung",
  "price_update.base_message": "Der Gesamtpreis wurde basierend auf Ihrer Rechnungsadresse mit Steuern aktualisiert. Bitte überprüfen Sie ihn und versuchen Sie es erneut. Ihre Karte wird erst belastet, wenn alles korrekt ist.",
  "price_update.trial_message": "Der Abonnementpreis wurde aktualisiert, um Steuern basierend auf Ihrer Rechnungsadresse einzuschließen. Die kostenlose Testphase gilt weiterhin. Bitte überprüfen Sie und versuchen Sie es erneut.",
  "payment_entry_page.express_checkout_divider": "ODER MIT KARTE ZAHLEN",
  "error_page.trouble_accessing": "Wenn Sie Probleme beim Zugriff auf Ihren Kauf haben, wenden Sie sich an den Support unter ",
  "error_page.close_button_title": "Zu {{appName}} gehen",
  "error_page.error_title_stripe_missing_required_permission": "Fehlende Stripe-Berechtigung",
  "error_page.button_close": "Schließen",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Der Kauf ist fehlgeschlagen, da die Steuerursprungsadresse ungültig ist. In der Produktion funktionieren Käufe ohne angewendete Steuern.",
  "error_page.error_message_stripe_tax_not_active": "Der Kauf ist fehlgeschlagen, da Stripe Tax nicht aktiviert ist. In der Produktion funktionieren Käufe ohne angewendete Steuern.",
  "error_page.error_only_in_sandbox": "Diese Meldung wird nur in der Sandbox angezeigt.",
  "error_page.error_message_stripe_missing_required_permission": "Der Kauf ist fehlgeschlagen, da der Stripe-App eine erforderliche Berechtigung fehlt. In der Produktion funktionieren Käufe ohne angewendete Steuern.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax ist nicht aktiv",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Ungültige Steuerursprungsadresse",
  "apple_pay.free_trial": "Kostenlose Testversion",
  "product_info.price_after_intro_price": "Nach {{introPriceDuration}}, am {{renewalDate}}",
  "product_info.after_trial": "nach Testphase",
  "product_info.after": "nach",
  "product_info.intro_price_phase_after_trial": "Danach {{introPriceDuration}} für {{introPrice}}",
  "product_info.intro_price_phase": "Zuerst {{introPriceDuration}} für {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "einmalig bezahlt",
  "payment_entry_page.trial_subscription_terms_info": "Nach Ablauf Ihres Testzeitraums werden Ihnen {{price}} {{perFrequency}} ab dem {{renewalDate}} berechnet. Sie können jederzeit vor diesem Datum kündigen.",
  "payment_entry_page.subscription_info": "Das Abonnement verlängert sich automatisch. Jederzeit kündbar.",
  "payment_entry_page.otp_terms_info": "Mit dem Kauf erklären Sie sich einverstanden, dass {{appName}} Ihnen Gebühren gemäß ihren Bedingungen berechnet.",
  "payment_entry_page.terms_link_label": "Bedingungen",
  "payment_entry_page.subscription_terms_info": "Mit dem Abonnieren erklären Sie sich damit einverstanden, dass {{appName}} Ihnen gemäß ihren Bedingungen Gebühren berechnet, bis Sie kündigen.",
  "loading_page.keep_page_open": "Der Vorgang ist fast abgeschlossen. Bitte lassen Sie diese Seite geöffnet.",
  "loading_page.processing_payment": "Zahlung wird verarbeitet",
  "pricing_table.discount": "Rabatt",
  "pricing_table.subtotal": "Zwischensumme",
  "pricing_dropdown.add_promo_code": "Promo-Code hinzufügen",
  "discount_input.label": "Gutscheincode",
  "payment_entry_page.checkout_consent_terms_of_service": "Nutzungsbedingungen",
  "payment_entry_page.checkout_consent_agreement": "Ich stimme den {{appName}} {{termsOfService}} zu."
}, Vm = {
  "periods.week": "{{amount}} εβδομάδα",
  "periods.month": "{{amount}} μήνας",
  "periods.year": "{{amount}} χρόνος",
  "periods.day": "{{amount}} ημέρα",
  "periods.weekShort": "{{amount}} εβδ.",
  "periods.monthShort": "{{amount}} μήν.",
  "periods.yearShort": "{{amount}} έτ.",
  "periods.dayShort": "{{amount}} ημ.",
  "periods.lifetime": "διάρκεια ζωής",
  "periods.weekPlural": "{{amount}} εβδομάδες",
  "periods.monthPlural": "{{amount}} μήνες",
  "periods.yearPlural": "{{amount}} χρόνια",
  "periods.dayPlural": "{{amount}} ημέρες",
  "periods.weekFrequency": "εβδομαδιαία",
  "periods.monthFrequency": "μηνιαία",
  "periods.yearFrequency": "ετήσια",
  "periods.dayFrequency": "καθημερινά",
  "periods.perWeekFrequency": "ανά εβδομάδα",
  "periods.perMonthFrequency": "ανά μήνα",
  "periods.perYearFrequency": "ανά έτος",
  "periods.perDayFrequency": "ανά ημέρα",
  "periods.unknownFrequency": "άγνωστο",
  "periods.weekFrequencyPlural": "κάθε {{amount}} εβδομάδες",
  "periods.monthFrequencyPlural": "κάθε {{amount}} μήνες",
  "periods.yearFrequencyPlural": "κάθε {{amount}} χρόνια",
  "periods.dayFrequencyPlural": "κάθε {{amount}} ημέρες",
  "product_info.subscribe_to": "Εγγραφείτε στο",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "Δωρεάν για {{trialDuration}}",
  "product_info.price_after_free_trial": "Μετά τη λήξη της δοκιμής, στις {{renewalDate}}",
  "product_info.total_due_today": "Σύνολο πληρωτέο σήμερα",
  "product_info.renewal_frequency": "Ανανεώνεται {{frequency}}",
  "product_info.continues_until_cancelled": "Συνεχίζεται μέχρι την ακύρωση",
  "product_info.cancel_anytime": "Ακύρωση ανά πάσα στιγμή",
  "payment_entry_page.payment_step_title": "Ασφαλής ολοκλήρωση αγοράς από την RevenueCat",
  "payment_entry_page.button_pay": "Πληρωμή τώρα",
  "payment_entry_page.button_start_trial": "Έναρξη δοκιμής",
  "success_page.purchase_successful": "Η πληρωμή ολοκληρώθηκε",
  "success_page.button_close": "Συνέχεια",
  "error_page.if_error_persists": "Εάν το σφάλμα παραμένει, επικοινωνήστε με ",
  "error_page.error_title_already_subscribed": "Έχετε ήδη εγγραφεί στο {{productTitle}}",
  "error_page.error_title_already_purchased": "Έχετε ήδη αγοράσει το {{productTitle}}",
  "error_page.error_title_other_errors": "Κάτι πήγε στραβά",
  "error_page.error_message_already_subscribed": "Δεν μπορείτε να εγγραφείτε ξανά σε αυτό το προϊόν.",
  "error_page.error_message_already_purchased": "Δεν μπορείτε να αγοράσετε ξανά αυτό το προϊόν.",
  "error_page.error_message_missing_email_error": "Απαιτείται email για την ολοκλήρωση της αγοράς.",
  "error_page.error_message_network_error": "Σφάλμα δικτύου. Ελέγξτε τη σύνδεσή σας στο διαδίκτυο.",
  "error_page.error_message_error_charging_payment": "Η πληρωμή απέτυχε.",
  "error_page.error_message_error_setting_up_purchase": "Η αγορά δεν ξεκίνησε λόγω σφάλματος (κωδικός σφάλματος: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Δεν μπορέσαμε να επαληθεύσουμε τη διεύθυνση χρέωσής σας. Παρακαλούμε ελέγξτε ξανά τον ταχυδρομικό κώδικα και τη χώρα για να βεβαιωθείτε ότι είναι σωστά.",
  "error_page.error_message_unknown_error": "Παρουσιάστηκε ένα άγνωστο σφάλμα (κωδικός σφάλματος: {{errorCode}}).",
  "error_page.button_try_again": "Προσπαθήστε ξανά",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "navbar_header.details": "Λεπτομέρειες",
  "navbar_header.back_button": "Πίσω",
  "pricing_dropdown.show_details": "Εμφάνιση λεπτομερειών",
  "pricing_dropdown.hide_details": "Απόκρυψη λεπτομερειών",
  "pricing_table.tax": "Φόρος",
  "pricing_table.trial_ends": "Μετά τη λήξη της δοκιμαστικής περιόδου, στις {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Σύνολο πληρωτέο σήμερα",
  "pricing_table.total_excluding_tax": "Σύνολο χωρίς φόρο",
  "pricing_table.enter_billing_address_to_calculate": "Εισαγάγετε τη διεύθυνση χρέωσης για να υπολογιστεί",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Εισαγάγετε την πολιτεία ή τον ταχυδρομικό κώδικα για να υπολογιστεί",
  "pricing_table.enter_postal_code_to_calculate": "Εισαγάγετε τον ταχυδρομικό κώδικα για να υπολογιστεί",
  "error_page.error_message_invalid_email_error": "Η διεύθυνση email {{email}} δεν μπόρεσε να επαληθευτεί. Παρακαλώ δώστε μια έγκυρη διεύθυνση email.",
  "payment_entry_page.button_payment_method": "Πληρωμή {{formattedPrice}} με {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Πληρωμή {{formattedPrice}}",
  "price_update.title": "Ενημέρωση τιμής",
  "price_update.base_message": "Η συνολική τιμή ενημερώθηκε με τον φόρο βάσει της διεύθυνσης χρέωσής σας. Ελέγξτε και δοκιμάστε ξανά. Η κάρτα σας θα χρεωθεί μόνο μία φορά.",
  "price_update.trial_message": "Η τιμή της συνδρομής ενημερώθηκε για να συμπεριλάβει τους φόρους βάσει της διεύθυνσης χρέωσής σας. Η δωρεάν δοκιμαστική περίοδος εξακολουθεί να ισχύει. Παρακαλώ ελέγξτε και δοκιμάστε ξανά.",
  "payment_entry_page.express_checkout_divider": "Ή ΠΛΗΡΩΣΤΕ ΜΕ ΚΑΡΤΑ",
  "error_page.trouble_accessing": "Εάν αντιμετωπίζετε προβλήματα πρόσβασης στην αγορά σας, επικοινωνήστε με την υποστήριξη στο ",
  "error_page.close_button_title": "Μετάβαση στο {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Λείπει άδεια Stripe",
  "error_page.button_close": "Κλείσιμο",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Η αγορά απέτυχε επειδή η διεύθυνση προέλευσης φόρου δεν είναι έγκυρη. Στην παραγωγή, οι αγορές θα λειτουργούν χωρίς να εφαρμόζονται φόροι.",
  "error_page.error_message_stripe_tax_not_active": "Η αγορά απέτυχε επειδή το Stripe Tax δεν είναι ενεργοποιημένο. Στην παραγωγή, οι αγορές θα λειτουργούν χωρίς να εφαρμόζονται φόροι.",
  "error_page.error_only_in_sandbox": "Αυτό το μήνυμα εμφανίζεται μόνο στο sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "Η αγορά απέτυχε επειδή η εφαρμογή Stripe δεν διαθέτει την απαιτούμενη άδεια. Στην παραγωγή, οι αγορές θα λειτουργούν χωρίς να εφαρμόζονται φόροι.",
  "error_page.error_title_stripe_tax_not_active": "Το Stripe Tax δεν είναι ενεργό",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Μη έγκυρη διεύθυνση προέλευσης φόρου",
  "apple_pay.free_trial": "Δωρεάν δοκιμή",
  "product_info.price_after_intro_price": "Μετά από {{introPriceDuration}}, στις {{renewalDate}}",
  "product_info.after_trial": "μετά τη δοκιμή",
  "product_info.after": "μετά",
  "product_info.intro_price_phase_after_trial": "Έπειτα {{introPriceDuration}} για {{introPrice}}",
  "product_info.intro_price_phase": "Αρχικά {{introPriceDuration}} για {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "πληρωμένο εφάπαξ",
  "payment_entry_page.trial_subscription_terms_info": "Μετά τη λήξη της δοκιμαστικής περιόδου, θα χρεωθείτε {{price}} {{perFrequency}} ξεκινώντας από {{renewalDate}}. Μπορείτε να ακυρώσετε ανά πάσα στιγμή πριν από αυτήν την ημερομηνία.",
  "payment_entry_page.subscription_info": "Η συνδρομή ανανεώνεται αυτόματα. Ακυρώστε ανά πάσα στιγμή.",
  "payment_entry_page.otp_terms_info": "Με την αγορά, συμφωνείτε να επιτρέψετε στην {{appName}} να σας χρεώσει σύμφωνα με τους όρους της.",
  "payment_entry_page.terms_link_label": "Όροι",
  "payment_entry_page.subscription_terms_info": "Με την εγγραφή σας, συμφωνείτε να επιτρέψετε στην εφαρμογή {{appName}} να σας χρεώνει σύμφωνα με τους όρους της έως ότου ακυρώσετε.",
  "loading_page.keep_page_open": "Η διαδικασία σχεδόν ολοκληρώθηκε. Κρατήστε αυτή τη σελίδα ανοιχτή.",
  "loading_page.processing_payment": "Επεξεργασία πληρωμής",
  "pricing_table.discount": "Έκπτωση",
  "pricing_table.subtotal": "Υποσύνολο",
  "pricing_dropdown.add_promo_code": "Προσθήκη κωδικού προσφοράς",
  "discount_input.label": "Κωδικός προσφοράς",
  "payment_entry_page.checkout_consent_terms_of_service": "όρους χρήσης",
  "payment_entry_page.checkout_consent_agreement": "Συμφωνώ με τους {{appName}} {{termsOfService}}."
}, Wm = {
  "periods.week": "{{amount}} שבוע",
  "periods.month": "{{amount}} חודש",
  "periods.year": "{{amount}} שנה",
  "periods.day": "{{amount}} יום",
  "periods.weekShort": "{{amount}}wk",
  "periods.monthShort": "{{amount}}mo",
  "periods.yearShort": "{{amount}}yr",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "למשך כל החיים",
  "periods.weekPlural": "{{amount}} שבועות",
  "periods.monthPlural": "{{amount}} חודשים",
  "periods.yearPlural": "{{amount}} שנים",
  "periods.dayPlural": "{{amount}} ימים",
  "periods.weekFrequency": "שבועי",
  "periods.monthFrequency": "חודשי",
  "periods.yearFrequency": "שנתי",
  "periods.dayFrequency": "יומי",
  "periods.perWeekFrequency": "לשבוע",
  "periods.perMonthFrequency": "לחודש",
  "periods.perYearFrequency": "לשנה",
  "periods.perDayFrequency": "ליום",
  "periods.unknownFrequency": "לא ידוע",
  "periods.weekFrequencyPlural": "כל {{amount}} שבועות",
  "periods.monthFrequencyPlural": "כל {{amount}} חודשים",
  "periods.yearFrequencyPlural": "כל {{amount}} שנים",
  "periods.dayFrequencyPlural": "כל {{amount}} ימים",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} ניסיון חינם",
  "product_info.price_after_free_trial": "לאחר סיום הניסיון, ב-{{renewalDate}}",
  "product_info.renewal_frequency": "מתחדש {{frequency}}",
  "product_info.continues_until_cancelled": "נמשך עד ביטול",
  "product_info.cancel_anytime": "ניתן לבטל בכל עת",
  "payment_entry_page.payment_step_title": "קופה מאובטחת באמצעות RevenueCat",
  "payment_entry_page.button_pay": "שלם עכשיו",
  "payment_entry_page.button_start_trial": "התחל ניסיון",
  "success_page.purchase_successful": "התשלום הושלם",
  "success_page.button_close": "המשך",
  "error_page.if_error_persists": "אם השגיאה נמשכת, אנא פנה אל ",
  "error_page.error_title_already_subscribed": "כבר נרשמת כמנוי ל-{{productTitle}}",
  "error_page.error_title_already_purchased": "כבר רכשת את {{productTitle}}",
  "error_page.error_title_other_errors": "משהו השתבש",
  "error_page.error_message_already_subscribed": "אינך יכול להירשם כמנוי למוצר זה שוב.",
  "error_page.error_message_already_purchased": "אינך יכול לרכוש מוצר זה שוב.",
  "error_page.error_message_missing_email_error": 'דוא"ל נדרש כדי להשלים את הרכישה.',
  "error_page.error_message_network_error": "שגיאת רשת. אנא בדוק את חיבור האינטרנט שלך.",
  "error_page.error_message_error_charging_payment": "התשלום נכשל.",
  "error_page.error_message_error_setting_up_purchase": "הרכישה לא הופעלה עקב שגיאה (קוד שגיאה: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "לא הצלחנו לאמת את כתובת החיוב שלך. אנא בדוק שוב את המיקוד והמדינה כדי לוודא שהם נכונים.",
  "error_page.error_message_unknown_error": "אירעה שגיאה לא ידועה (קוד שגיאה: {{errorCode}}).",
  "error_page.button_try_again": "נסה שוב",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": 'סה"כ לתשלום היום',
  "product_info.subscribe_to": "הירשם כמנוי ל-",
  "navbar_header.details": "פרטים",
  "navbar_header.back_button": "חזרה",
  "pricing_dropdown.show_details": "הצג פרטים",
  "pricing_dropdown.hide_details": "הסתר פרטים",
  "pricing_table.tax": "מס",
  "pricing_table.trial_ends": "לאחר סיום תקופת הניסיון, בתאריך {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "סך הכל לתשלום היום",
  "pricing_table.total_excluding_tax": "סך הכל לא כולל מס",
  "pricing_table.enter_billing_address_to_calculate": "הזן כתובת לחיוב כדי לחשב",
  "pricing_table.enter_state_or_postal_code_to_calculate": "הזן מדינה או מיקוד לחישוב",
  "pricing_table.enter_postal_code_to_calculate": "הזן מיקוד לחישוב",
  "error_page.error_message_invalid_email_error": "לא ניתן לאמת את כתובת האימייל {{email}}. אנא ספק כתובת אימייל חוקית.",
  "payment_entry_page.button_payment_method": "שלם {{formattedPrice}} באמצעות {{paymentMethod}}",
  "payment_entry_page.button_with_price": "שלם {{formattedPrice}}",
  "price_update.title": "עדכון מחיר",
  "price_update.base_message": "המחיר הכולל עודכן עם מס בהתבסס על כתובת החיוב שלך. אנא בדוק שוב ונסה שוב. החיוב יתבצע רק פעם אחת.",
  "price_update.trial_message": "מחיר המנוי עודכן כדי לכלול מיסים בהתבסס על כתובת החיוב שלך. תקופת הניסיון החינמית עדיין תקפה. אנא בדוק ונסה שוב.",
  "payment_entry_page.express_checkout_divider": "או שלם באמצעות כרטיס",
  "error_page.trouble_accessing": "אם אתה מתקשה לגשת לרכישה שלך, פנה לתמיכה בכתובת ",
  "error_page.close_button_title": "עבור אל {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "חסרה הרשאה של Stripe",
  "error_page.button_close": "סגור",
  "error_page.error_message_stripe_invalid_tax_origin_address": "הרכישה נכשלה מכיוון שכתובת מקור המס אינה חוקית. בייצור, רכישות יעבדו ללא מסים.",
  "error_page.error_message_stripe_tax_not_active": "הרכישה נכשלה מכיוון שמס Stripe אינו מופעל. בייצור, רכישות יעבדו ללא מסים.",
  "error_page.error_only_in_sandbox": "הודעה זו מופיעה רק בארגז חול.",
  "error_page.error_message_stripe_missing_required_permission": "הרכישה נכשלה מכיוון שלאפליקציית Stripe חסרה הרשאה נדרשת. בייצור, רכישות יעבדו ללא מסים.",
  "error_page.error_title_stripe_tax_not_active": "מס Stripe לא פעיל",
  "error_page.error_title_stripe_invalid_tax_origin_address": "כתובת מקור מס לא חוקית",
  "apple_pay.free_trial": "תקופת ניסיון בחינם",
  "product_info.price_after_intro_price": "לאחר {{introPriceDuration}}, בתאריך {{renewalDate}}",
  "product_info.after_trial": "אחרי תקופת ניסיון",
  "product_info.after": "אחרי",
  "product_info.intro_price_phase_after_trial": "אחר כך {{introPriceDuration}} עבור {{introPrice}}",
  "product_info.intro_price_phase": "תחילה {{introPriceDuration}} עבור {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "משולם פעם אחת",
  "payment_entry_page.trial_subscription_terms_info": "לאחר סיום תקופת הניסיון שלך, תחויב בסך {{price}} {{perFrequency}} החל מ-{{renewalDate}}. באפשרותך לבטל בכל עת לפני תאריך זה.",
  "payment_entry_page.subscription_info": "המנוי מתחדש אוטומטית. ניתן לבטל בכל עת.",
  "payment_entry_page.otp_terms_info": "ברכישה, אתה מסכים לאפשר ל-{{appName}} לחייב אותך בהתאם לתנאים שלהם.",
  "payment_entry_page.terms_link_label": "תנאים",
  "payment_entry_page.subscription_terms_info": "על ידי הרשמה כמנוי, אתה מסכים לאפשר ל-{{appName}} לחייב אותך בהתאם לתנאים שלהם עד שתבטל.",
  "loading_page.keep_page_open": "התהליך כמעט הסתיים. השאר דף זה פתוח.",
  "loading_page.processing_payment": "מעבד תשלום תבעה",
  "pricing_table.discount": "הנחה",
  "pricing_table.subtotal": "סכום ביניים",
  "pricing_dropdown.add_promo_code": "הוסף קוד קידום מכירות",
  "discount_input.label": "קוד פרומו",
  "payment_entry_page.checkout_consent_terms_of_service": "תנאי השירות",
  "payment_entry_page.checkout_consent_agreement": "אני מסכים/ה ל{{termsOfService}} של {{appName}}."
}, Hm = {
  "periods.week": "{{amount}} सप्ताह",
  "periods.month": "{{amount}} महीना",
  "periods.year": "{{amount}} वर्ष",
  "periods.day": "{{amount}} दिन",
  "periods.weekShort": "{{amount}}सप्ताह",
  "periods.monthShort": "{{amount}}महीना",
  "periods.yearShort": "{{amount}}वर्ष",
  "periods.dayShort": "{{amount}}दिन",
  "periods.lifetime": "लाइफ़टाइम",
  "periods.weekPlural": "{{amount}} सप्ताह",
  "periods.monthPlural": "{{amount}} महीने",
  "periods.yearPlural": "{{amount}} वर्ष",
  "periods.dayPlural": "{{amount}} दिन",
  "periods.weekFrequency": "साप्ताहिक",
  "periods.monthFrequency": "मासिक",
  "periods.yearFrequency": "वार्षिक",
  "periods.dayFrequency": "दैनिक",
  "periods.perWeekFrequency": "प्रति सप्ताह",
  "periods.perMonthFrequency": "प्रति माह",
  "periods.perYearFrequency": "प्रति वर्ष",
  "periods.perDayFrequency": "प्रति दिन",
  "periods.unknownFrequency": "अज्ञात",
  "periods.weekFrequencyPlural": "प्रत्येक {{amount}} सप्ताह",
  "periods.monthFrequencyPlural": "प्रत्येक {{amount}} महीने",
  "periods.yearFrequencyPlural": "प्रत्येक {{amount}} वर्ष",
  "periods.dayFrequencyPlural": "प्रत्येक {{amount}} दिन",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} निःशुल्क परीक्षण",
  "product_info.price_after_free_trial": "परीक्षण समाप्त होने के बाद, {{renewalDate}} को",
  "product_info.renewal_frequency": "{{frequency}} पर नवीनीकृत होता है",
  "product_info.continues_until_cancelled": "रद्द होने तक जारी रहता है",
  "product_info.cancel_anytime": "किसी भी समय रद्द करें",
  "payment_entry_page.payment_step_title": "RevenueCat द्वारा सुरक्षित चेकआउट",
  "payment_entry_page.button_pay": "अभी भुगतान करें",
  "payment_entry_page.button_start_trial": "परीक्षण प्रारंभ करें",
  "success_page.purchase_successful": "भुगतान पूर्ण",
  "success_page.button_close": "जारी रखें",
  "error_page.if_error_persists": "यदि त्रुटि बनी रहती है, तो कृपया संपर्क करें ",
  "error_page.error_title_already_subscribed": "आपने पहले ही {{productTitle}} की सदस्यता ले ली है",
  "error_page.error_title_already_purchased": "आपने पहले ही {{productTitle}} खरीद लिया है",
  "error_page.error_title_other_errors": "कुछ गलत हो गया",
  "error_page.error_message_already_subscribed": "आप इस उत्पाद की सदस्यता फिर से नहीं ले सकते.",
  "error_page.error_message_already_purchased": "आप इस उत्पाद को फिर से नहीं खरीद सकते.",
  "error_page.error_message_missing_email_error": "खरीद को पूरा करने के लिए ईमेल आवश्यक है।",
  "error_page.error_message_network_error": "नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।",
  "error_page.error_message_error_charging_payment": "भुगतान विफल।",
  "error_page.error_message_error_setting_up_purchase": "किसी त्रुटि के कारण खरीदारी शुरू नहीं हुई (त्रुटि कोड: {{errorCode}})।",
  "error_page.error_message_invalid_tax_location": "हम आपके बिलिंग पते को सत्यापित नहीं कर सके। कृपया सुनिश्चित करें कि पिन कोड और देश सही हैं।",
  "error_page.error_message_unknown_error": "एक अज्ञात त्रुटि हुई (त्रुटि कोड: {{errorCode}})।",
  "error_page.button_try_again": "फिर से कोशिश करें",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "आज देय कुल राशि",
  "product_info.subscribe_to": "सदस्यता लें",
  "navbar_header.details": "विवरण",
  "navbar_header.back_button": "वापस",
  "pricing_dropdown.show_details": "विवरण दिखाएँ",
  "pricing_dropdown.hide_details": "विवरण छिपाएँ",
  "pricing_table.tax": "कर",
  "pricing_table.trial_ends": "{{formattedTrialEndDate}} पर परीक्षण समाप्त होने के बाद",
  "pricing_table.total_due_today": "आज देय कुल",
  "pricing_table.total_excluding_tax": "कर को छोड़कर कुल",
  "pricing_table.enter_billing_address_to_calculate": "गणना करने के लिए बिलिंग पता दर्ज करें",
  "pricing_table.enter_state_or_postal_code_to_calculate": "गणना करने के लिए राज्य या ज़िप कोड दर्ज करें",
  "pricing_table.enter_postal_code_to_calculate": "गणना करने के लिए ज़िप कोड दर्ज करें",
  "error_page.error_message_invalid_email_error": "ईमेल पता {{email}} सत्यापित नहीं किया जा सका. कृपया एक मान्य ईमेल पता प्रदान करें.",
  "payment_entry_page.button_payment_method": "{{paymentMethod}} के साथ {{formattedPrice}} का भुगतान करें",
  "payment_entry_page.button_with_price": "{{formattedPrice}} का भुगतान करें",
  "price_update.title": "मूल्य अपडेट",
  "price_update.base_message": "आप के बिलिंग पते के आधार पर कुल कीमत कर के साथ अपडेट की गई थी। कृपया समीक्षा करें और फिर से प्रयास करें। आपके कार्ड से केवल एक बार शुल्क लिया जाएगा।",
  "price_update.trial_message": "सदस्यता मूल्य आपके बिलिंग पते के आधार पर करों को शामिल करने के लिए अपडेट किया गया है। निःशुल्क परीक्षण अवधि अभी भी लागू है। कृपया जांचें और पुनः प्रयास करें।",
  "payment_entry_page.express_checkout_divider": "या कार्ड से भुगतान करें",
  "error_page.trouble_accessing": "यदि आपको अपनी खरीदारी तक पहुंचने में परेशानी हो रही है, तो पर समर्थन के लिए संपर्क करें",
  "error_page.close_button_title": "{{appName}} पर जाएं",
  "error_page.error_title_stripe_missing_required_permission": "स्ट्राइप अनुमति गुम है",
  "error_page.button_close": "बंद करें",
  "error_page.error_message_stripe_invalid_tax_origin_address": "खरीदारी विफल रही क्योंकि कर उत्पत्ति पता अमान्य है. उत्पादन में, खरीदारी बिना करों के लागू किए काम करेगी.",
  "error_page.error_message_stripe_tax_not_active": "खरीदारी विफल रही क्योंकि स्ट्राइप टैक्स सक्षम नहीं है. उत्पादन में, खरीदारी बिना करों के लागू किए काम करेगी.",
  "error_page.error_only_in_sandbox": "यह संदेश केवल सैंडबॉक्स में दिखाई देता है.",
  "error_page.error_message_stripe_missing_required_permission": "खरीदारी विफल रही क्योंकि स्ट्राइप ऐप में आवश्यक अनुमति नहीं है. उत्पादन में, खरीदारी बिना करों के लागू किए काम करेगी.",
  "error_page.error_title_stripe_tax_not_active": "स्ट्राइप टैक्स सक्रिय नहीं है",
  "error_page.error_title_stripe_invalid_tax_origin_address": "अमान्य कर उत्पत्ति पता",
  "apple_pay.free_trial": "मुफ़्त ट्रायल",
  "product_info.price_after_intro_price": "{{introPriceDuration}} के बाद, {{renewalDate}} पर",
  "product_info.after_trial": "ट्रायल के बाद",
  "product_info.after": "के बाद",
  "product_info.intro_price_phase_after_trial": "फिर {{introPriceDuration}} के लिए {{introPrice}}",
  "product_info.intro_price_phase": "पहले {{introPriceDuration}} के लिए {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "एक बार भुगतान किया गया",
  "payment_entry_page.trial_subscription_terms_info": "आपकी परीक्षण अवधि समाप्त होने के बाद, आपसे {{renewalDate}} से शुरू होकर {{price}} {{perFrequency}} शुल्क लिया जाएगा. आप इस तिथि से पहले कभी भी रद्द कर सकते हैं.",
  "payment_entry_page.subscription_info": "सदस्यता स्वतः नवीनीकृत हो जाती है. कभी भी रद्द करें.",
  "payment_entry_page.otp_terms_info": "खरीदकर, आप {{appName}} को उनकी शर्तों के अनुसार आपसे शुल्क लेने की अनुमति देने के लिए सहमत हैं.",
  "payment_entry_page.terms_link_label": "नियम",
  "payment_entry_page.subscription_terms_info": "सदस्यता लेकर, आप {{appName}} को रद्द करने तक उनकी शर्तों के अनुसार आपसे शुल्क लेने की अनुमति देने के लिए सहमत हैं.",
  "loading_page.keep_page_open": "प्रक्रिया लगभग पूरी हो चुकी है. इस पृष्ठ को खुला रखें.",
  "loading_page.processing_payment": "भुगतान संसाधित किया जा रहा है",
  "pricing_table.discount": "छूट",
  "pricing_table.subtotal": "उपकुल योग",
  "pricing_dropdown.add_promo_code": "प्रोमो_कोड_जोड़ें",
  "discount_input.label": "प्रोमो कोड",
  "payment_entry_page.checkout_consent_terms_of_service": "सेवा की शर्तें",
  "payment_entry_page.checkout_consent_agreement": "मैं {{appName}} की {{termsOfService}} से सहमत हूँ।"
}, Ym = {
  "periods.week": "{{amount}} hét",
  "periods.month": "{{amount}} hónap",
  "periods.year": "{{amount}} év",
  "periods.day": "{{amount}} nap",
  "periods.weekShort": "{{amount}}hét",
  "periods.monthShort": "{{amount}}hó",
  "periods.yearShort": "{{amount}}év",
  "periods.dayShort": "{{amount}}n",
  "periods.lifetime": "életre szóló",
  "periods.weekPlural": "{{amount}} hét",
  "periods.monthPlural": "{{amount}} hónap",
  "periods.yearPlural": "{{amount}} év",
  "periods.dayPlural": "{{amount}} nap",
  "periods.weekFrequency": "heti",
  "periods.monthFrequency": "havi",
  "periods.yearFrequency": "éves",
  "periods.dayFrequency": "napi",
  "periods.perWeekFrequency": "hetente",
  "periods.perMonthFrequency": "havonta",
  "periods.perYearFrequency": "évente",
  "periods.perDayFrequency": "naponta",
  "periods.unknownFrequency": "ismeretlen",
  "periods.weekFrequencyPlural": "minden {{amount}} hétben",
  "periods.monthFrequencyPlural": "minden {{amount}} hónapban",
  "periods.yearFrequencyPlural": "minden {{amount}} évben",
  "periods.dayFrequencyPlural": "minden {{amount}} napban",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} próbaidőszak",
  "product_info.price_after_free_trial": "A próbaidőszak vége után, {{renewalDate}}-kor",
  "product_info.renewal_frequency": "{{frequency}} gyakorisággal megújul",
  "product_info.continues_until_cancelled": "Folytatódik, amíg le nem mondják",
  "product_info.cancel_anytime": "Bármikor lemondható",
  "payment_entry_page.payment_step_title": "Biztonságos fizetés a RevenueCat-en keresztül",
  "payment_entry_page.button_pay": "Fizetés most",
  "payment_entry_page.button_start_trial": "Próbaidőszak indítása",
  "success_page.purchase_successful": "Fizetés sikeres",
  "success_page.button_close": "Tovább",
  "error_page.if_error_persists": "Ha a hiba továbbra is fennáll, kérjük, vedd fel a kapcsolatot ",
  "error_page.error_title_already_subscribed": "Már előfizettél a(z) {{productTitle}} termékre",
  "error_page.error_title_already_purchased": "Már megvásároltad a(z) {{productTitle}} terméket",
  "error_page.error_title_other_errors": "Valami hiba történt",
  "error_page.error_message_already_subscribed": "Nem fizethetsz elő újra erre a termékre.",
  "error_page.error_message_already_purchased": "Nem vásárolhatod meg újra ezt a terméket.",
  "error_page.error_message_missing_email_error": "Az email cím szükséges a vásárlás befejezéséhez.",
  "error_page.error_message_network_error": "Hálózati hiba. Kérjük, ellenőrizd az internetkapcsolatodat.",
  "error_page.error_message_error_charging_payment": "A fizetés sikertelen volt.",
  "error_page.error_message_error_setting_up_purchase": "Hiba miatt nem indult el a vásárlás (hibakód: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nem tudtuk ellenőrizni a számlázási címét. Kérjük, ellenőrizze, hogy az irányítószám és az ország helyes-e.",
  "error_page.error_message_unknown_error": "Ismeretlen hiba történt (hibakód: {{errorCode}}).",
  "error_page.button_try_again": "Újrapróbálkozás",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Ma fizetendő összesen",
  "product_info.subscribe_to": "Feliratkozás erre:",
  "navbar_header.details": "Részletek",
  "navbar_header.back_button": "Vissza",
  "pricing_dropdown.show_details": "Részletek mutatása",
  "pricing_dropdown.hide_details": "Részletek elrejtése",
  "pricing_table.tax": "Adó",
  "pricing_table.trial_ends": "A próbaidőszak vége: {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Ma fizetendő összeg",
  "pricing_table.total_excluding_tax": "Összesen adó nélkül",
  "pricing_table.enter_billing_address_to_calculate": "Adja meg a számlázási címet a számításhoz",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Adja meg az államot vagy az irányítószámot a számításhoz",
  "pricing_table.enter_postal_code_to_calculate": "Adja meg az irányítószámot a számításhoz",
  "error_page.error_message_invalid_email_error": "A(z) {{email}} e-mail címet nem sikerült ellenőrizni. Kérjük, adj meg egy érvényes e-mail címet.",
  "payment_entry_page.button_payment_method": "Fizetés {{formattedPrice}} összeggel a következővel: {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Fizetés {{formattedPrice}}",
  "price_update.title": "Ár frissítése",
  "price_update.base_message": "A teljes ár frissítve lett az adóval a számlázási címed alapján. Kérjük, tekintsd át és próbáld újra. A kártyádat csak egyszer terheljük meg.",
  "price_update.trial_message": "Az előfizetés ára adókkal együtt frissítésre került a számlázási címének megfelelően. Az ingyenes próbaidőszak továbbra is érvényes. Kérjük, ellenőrizze és próbálja újra.",
  "payment_entry_page.express_checkout_divider": "VAGY FIZESSEN KÁRTYÁVAL",
  "error_page.trouble_accessing": "Ha problémái vannak a vásárláshoz való hozzáféréssel, forduljon az ügyfélszolgálathoz a következő címen: ",
  "error_page.close_button_title": "Ugrás a(z) {{appName}} alkalmazáshoz",
  "error_page.error_title_stripe_missing_required_permission": "Hiányzó Stripe engedély",
  "error_page.button_close": "Bezárás",
  "error_page.error_message_stripe_invalid_tax_origin_address": "A vásárlás sikertelen volt, mert az adókiindulási cím érvénytelen. Éles környezetben a vásárlások adók alkalmazása nélkül fognak működni.",
  "error_page.error_message_stripe_tax_not_active": "A vásárlás sikertelen volt, mert a Stripe adó nincs engedélyezve. Éles környezetben a vásárlások adók alkalmazása nélkül fognak működni.",
  "error_page.error_only_in_sandbox": "Ez az üzenet csak a tesztkörnyezetben jelenik meg.",
  "error_page.error_message_stripe_missing_required_permission": "A vásárlás sikertelen volt, mert a Stripe alkalmazásból hiányzik egy szükséges engedély. Éles környezetben a vásárlások adók alkalmazása nélkül fognak működni.",
  "error_page.error_title_stripe_tax_not_active": "A Stripe adó nincs aktiválva",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Érvénytelen adókiindulási cím",
  "apple_pay.free_trial": "Ingyenes próbaidőszak",
  "product_info.price_after_intro_price": "{{introPriceDuration}} után, {{renewalDate}} napján",
  "product_info.after_trial": "próbaidőszak után",
  "product_info.after": "utána",
  "product_info.intro_price_phase_after_trial": "Ezután {{introPriceDuration}} ideig {{introPrice}} áron",
  "product_info.intro_price_phase": "Először {{introPriceDuration}} ideig {{introPrice}} áron",
  "product_info.intro_price_phase_paid_once": "egyszeri fizetéssel",
  "payment_entry_page.trial_subscription_terms_info": "A próbaidőszak vége után {{price}} összeget számítunk fel {{perFrequency}} gyakorisággal, kezdve {{renewalDate}} dátummal. Ezt a dátumot megelőzően bármikor lemondhatod.",
  "payment_entry_page.subscription_info": "Az előfizetés automatikusan megújul. Bármikor lemondhatod.",
  "payment_entry_page.otp_terms_info": "A vásárlással elfogadod, hogy a {{appName}} az általa meghatározott feltételek szerint terheljen.",
  "payment_entry_page.terms_link_label": "Feltételek",
  "payment_entry_page.subscription_terms_info": "A feliratkozással elfogadod, hogy a {{appName}} az általa meghatározott feltételek szerint terheljen, amíg le nem mondod.",
  "loading_page.keep_page_open": "A folyamat majdnem befejeződött. Tartsa nyitva ezt az oldalt.",
  "loading_page.processing_payment": "Fizetés feldolgozása",
  "pricing_table.discount": "Kedvezmény",
  "pricing_table.subtotal": "Részösszeg",
  "pricing_dropdown.add_promo_code": "Promóciós kód hozzáadása",
  "discount_input.label": "Promóciós kód",
  "payment_entry_page.checkout_consent_terms_of_service": "szolgáltatási feltételek",
  "payment_entry_page.checkout_consent_agreement": "Elfogadom a {{appName}} {{termsOfService}}."
}, Gm = {
  "periods.week": "{{amount}} minggu",
  "periods.month": "{{amount}} bulan",
  "periods.year": "{{amount}} tahun",
  "periods.day": "{{amount}} hari",
  "periods.weekShort": "{{amount}}mg",
  "periods.monthShort": "{{amount}}bl",
  "periods.yearShort": "{{amount}}th",
  "periods.dayShort": "{{amount}}h",
  "periods.lifetime": "seumur hidup",
  "periods.weekPlural": "{{amount}} minggu",
  "periods.monthPlural": "{{amount}} bulan",
  "periods.yearPlural": "{{amount}} tahun",
  "periods.dayPlural": "{{amount}} hari",
  "periods.weekFrequency": "mingguan",
  "periods.monthFrequency": "bulanan",
  "periods.yearFrequency": "tahunan",
  "periods.dayFrequency": "harian",
  "periods.perWeekFrequency": "per minggu",
  "periods.perMonthFrequency": "per bulan",
  "periods.perYearFrequency": "per tahun",
  "periods.perDayFrequency": "per hari",
  "periods.unknownFrequency": "tidak diketahui",
  "periods.weekFrequencyPlural": "setiap {{amount}} minggu",
  "periods.monthFrequencyPlural": "setiap {{amount}} bulan",
  "periods.yearFrequencyPlural": "setiap {{amount}} tahun",
  "periods.dayFrequencyPlural": "setiap {{amount}} hari",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} uji coba gratis",
  "product_info.price_after_free_trial": "Setelah uji coba berakhir, pada {{renewalDate}}",
  "product_info.renewal_frequency": "Diperbarui {{frequency}}",
  "product_info.continues_until_cancelled": "Berlanjut hingga dibatalkan",
  "product_info.cancel_anytime": "Batalkan kapan saja",
  "payment_entry_page.payment_step_title": "Pembayaran aman oleh RevenueCat",
  "payment_entry_page.button_pay": "Bayar sekarang",
  "payment_entry_page.button_start_trial": "Mulai Uji Coba",
  "success_page.purchase_successful": "Pembayaran selesai",
  "success_page.button_close": "Lanjutkan",
  "error_page.if_error_persists": "Jika kesalahan berlanjut, silakan hubungi ",
  "error_page.error_title_already_subscribed": "Anda sudah berlangganan ke {{productTitle}}",
  "error_page.error_title_already_purchased": "Anda sudah membeli {{productTitle}}",
  "error_page.error_title_other_errors": "Terjadi kesalahan",
  "error_page.error_message_already_subscribed": "Anda tidak dapat berlangganan produk ini lagi.",
  "error_page.error_message_already_purchased": "Anda tidak dapat membeli produk ini lagi.",
  "error_page.error_message_missing_email_error": "Email diperlukan untuk menyelesaikan pembelian.",
  "error_page.error_message_network_error": "Kesalahan jaringan. Periksa koneksi internet Anda.",
  "error_page.error_message_error_charging_payment": "Pembayaran gagal.",
  "error_page.error_message_error_setting_up_purchase": "Pembelian tidak dimulai karena kesalahan (kode kesalahan: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Kami tidak dapat memverifikasi alamat penagihan Anda. Harap periksa kembali kode pos dan negara untuk memastikan keduanya benar.",
  "error_page.error_message_unknown_error": "Terjadi kesalahan yang tidak diketahui (kode kesalahan: {{errorCode}}).",
  "error_page.button_try_again": "Coba lagi",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total yang harus dibayar hari ini",
  "product_info.subscribe_to": "Berlangganan ke",
  "navbar_header.details": "Detail",
  "navbar_header.back_button": "Kembali",
  "pricing_dropdown.show_details": "Tampilkan detail",
  "pricing_dropdown.hide_details": "Sembunyikan detail",
  "pricing_table.tax": "Pajak",
  "pricing_table.trial_ends": "Setelah masa percobaan berakhir, pada {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total yang harus dibayar hari ini",
  "pricing_table.total_excluding_tax": "Total belum termasuk pajak",
  "pricing_table.enter_billing_address_to_calculate": "Masukkan alamat penagihan untuk menghitung",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Masukkan negara bagian atau kode pos untuk menghitung",
  "pricing_table.enter_postal_code_to_calculate": "Masukkan kode pos untuk menghitung",
  "error_page.error_message_invalid_email_error": "Alamat email {{email}} tidak dapat diverifikasi. Harap berikan alamat email yang valid.",
  "payment_entry_page.button_payment_method": "Bayar {{formattedPrice}} dengan {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Bayar {{formattedPrice}}",
  "price_update.title": "Pembaruan harga",
  "price_update.base_message": "Total harga telah diperbarui dengan pajak berdasarkan alamat penagihan Anda. Harap tinjau dan coba lagi. Kartu Anda hanya akan dikenakan biaya sekali.",
  "price_update.trial_message": "Harga langganan telah diperbarui untuk menyertakan pajak berdasarkan alamat penagihan Anda. Masa percobaan gratis masih berlaku. Silakan periksa dan coba lagi.",
  "payment_entry_page.express_checkout_divider": "ATAU BAYAR DENGAN KARTU",
  "error_page.trouble_accessing": "Jika Anda mengalami masalah dalam mengakses pembelian, hubungi dukungan di ",
  "error_page.close_button_title": "Pergi ke {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Izin Stripe tidak ada",
  "error_page.button_close": "Tutup",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Pembelian gagal karena alamat asal pajak tidak valid. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
  "error_page.error_message_stripe_tax_not_active": "Pembelian gagal karena Stripe Tax tidak diaktifkan. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
  "error_page.error_only_in_sandbox": "Pesan ini hanya muncul di sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "Pembelian gagal karena aplikasi Stripe tidak memiliki izin yang diperlukan. Dalam produksi, pembelian akan berfungsi tanpa pajak yang diterapkan.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax tidak aktif",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Alamat asal pajak tidak valid",
  "apple_pay.free_trial": "Uji Coba Gratis",
  "product_info.price_after_intro_price": "Setelah {{introPriceDuration}}, pada {{renewalDate}}",
  "product_info.after_trial": "setelah uji coba",
  "product_info.after": "setelah",
  "product_info.intro_price_phase_after_trial": "Kemudian {{introPriceDuration}} dengan harga {{introPrice}}",
  "product_info.intro_price_phase": "Pertama {{introPriceDuration}} dengan harga {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "dibayar sekali",
  "payment_entry_page.trial_subscription_terms_info": "Setelah masa percobaan Anda berakhir, Anda akan dikenakan biaya sebesar {{price}} {{perFrequency}} mulai {{renewalDate}}. Anda dapat membatalkan kapan saja sebelum tanggal ini.",
  "payment_entry_page.subscription_info": "Langganan diperpanjang secara otomatis. Batalkan kapan saja.",
  "payment_entry_page.otp_terms_info": "Dengan membeli, Anda setuju untuk mengizinkan {{appName}} menagih Anda sesuai dengan ketentuan mereka.",
  "payment_entry_page.terms_link_label": "Ketentuan",
  "payment_entry_page.subscription_terms_info": "Dengan berlangganan, Anda setuju untuk mengizinkan {{appName}} mengenakan biaya sesuai dengan ketentuan mereka hingga Anda membatalkan.",
  "loading_page.keep_page_open": "Prosesnya hampir selesai. Jangan tutup halaman ini.",
  "loading_page.processing_payment": "Pembayaran sedang diproses",
  "pricing_table.discount": "Diskon",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Tambahkan kode promo",
  "discount_input.label": "Kode promo",
  "payment_entry_page.checkout_consent_terms_of_service": "ketentuan layanan",
  "payment_entry_page.checkout_consent_agreement": "Saya menyetujui {{termsOfService}} {{appName}}."
}, Km = {
  "periods.week": "{{amount}}週間",
  "periods.month": "{{amount}}ヶ月",
  "periods.year": "{{amount}}年",
  "periods.day": "{{amount}}日",
  "periods.weekShort": "{{amount}}週",
  "periods.monthShort": "{{amount}}ヶ月",
  "periods.yearShort": "{{amount}}年",
  "periods.dayShort": "{{amount}}日",
  "periods.lifetime": "生涯",
  "periods.weekPlural": "{{amount}}週間",
  "periods.monthPlural": "{{amount}}ヶ月",
  "periods.yearPlural": "{{amount}}年",
  "periods.dayPlural": "{{amount}}日",
  "periods.weekFrequency": "毎週",
  "periods.monthFrequency": "毎月",
  "periods.yearFrequency": "毎年",
  "periods.dayFrequency": "毎日",
  "periods.perWeekFrequency": "週ごと",
  "periods.perMonthFrequency": "月ごと",
  "periods.perYearFrequency": "年ごと",
  "periods.perDayFrequency": "日ごと",
  "periods.unknownFrequency": "不明",
  "periods.weekFrequencyPlural": "{{amount}}週間ごと",
  "periods.monthFrequencyPlural": "{{amount}}ヶ月ごと",
  "periods.yearFrequencyPlural": "{{amount}}年ごと",
  "periods.dayFrequencyPlural": "{{amount}}日ごと",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}}日間無料トライアル",
  "product_info.price_after_free_trial": "トライアル終了後、{{renewalDate}}に",
  "product_info.renewal_frequency": "{{frequency}}で更新",
  "product_info.continues_until_cancelled": "キャンセルされるまで継続されます",
  "product_info.cancel_anytime": "いつでもキャンセルできます",
  "payment_entry_page.payment_step_title": "RevenueCatによる安全なチェックアウト",
  "payment_entry_page.button_pay": "今すぐ支払う",
  "payment_entry_page.button_start_trial": "トライアルを開始",
  "success_page.purchase_successful": "支払いが完了しました",
  "success_page.button_close": "続行",
  "error_page.if_error_persists": "エラーが続く場合は、ご連絡ください。",
  "error_page.error_title_already_subscribed": "すでに{{productTitle}}を購読しています",
  "error_page.error_title_already_purchased": "すでに{{productTitle}}を購入しています",
  "error_page.error_title_other_errors": "エラーが発生しました",
  "error_page.error_message_already_subscribed": "この商品を再度購読することはできません。",
  "error_page.error_message_already_purchased": "この商品を再度購入することはできません。",
  "error_page.error_message_missing_email_error": "購入を完了するにはメールアドレスが必要です。",
  "error_page.error_message_network_error": "ネットワークエラーです。インターネット接続を確認してください。",
  "error_page.error_message_error_charging_payment": "支払いに失敗しました。",
  "error_page.error_message_error_setting_up_purchase": "エラーが発生したため、購入を開始できませんでした（エラーコード：{{errorCode}}）。",
  "error_page.error_message_invalid_tax_location": "請求先住所を確認できませんでした。郵便番号と国が正しいかご確認ください。",
  "error_page.error_message_unknown_error": "不明なエラーが発生しました（エラーコード：{{errorCode}}）。",
  "error_page.button_try_again": "再試行",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "本日のお支払い合計",
  "product_info.subscribe_to": "購読する",
  "navbar_header.details": "詳細",
  "navbar_header.back_button": "戻る",
  "pricing_dropdown.show_details": "詳細を表示",
  "pricing_dropdown.hide_details": "詳細を隠す",
  "pricing_table.tax": "税金",
  "pricing_table.trial_ends": "トライアル終了後、{{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "本日お支払いいただく合計金額",
  "pricing_table.total_excluding_tax": "税抜き合計",
  "pricing_table.enter_billing_address_to_calculate": "請求先住所を入力して計算",
  "pricing_table.enter_state_or_postal_code_to_calculate": "計算するには州または郵便番号を入力してください",
  "pricing_table.enter_postal_code_to_calculate": "計算するには郵便番号を入力してください",
  "error_page.error_message_invalid_email_error": "メールアドレス{{email}}を確認できませんでした。有効なメールアドレスを入力してください。",
  "payment_entry_page.button_payment_method": "{{paymentMethod}}で{{formattedPrice}}を支払う",
  "payment_entry_page.button_with_price": "{{formattedPrice}}を支払う",
  "price_update.title": "価格の更新",
  "price_update.base_message": "合計金額が、お客様の請求先住所に基づいて税金とともに更新されました。再度ご確認ください。カードへの請求は1回のみです。",
  "price_update.trial_message": "請求先住所に基づいて税金を含むサブスクリプション料金が更新されました。無料トライアルは引き続き適用されます。確認して再度お試しください。",
  "payment_entry_page.express_checkout_divider": "カードで支払う",
  "error_page.trouble_accessing": "購入へのアクセスに問題がある場合は、サポートにお問い合わせください: ",
  "error_page.close_button_title": "{{appName}} に移動",
  "error_page.error_title_stripe_missing_required_permission": "必要なStripeの権限がありません",
  "error_page.button_close": "閉じる",
  "error_page.error_message_stripe_invalid_tax_origin_address": "税の原産地住所が無効なため、購入に失敗しました。 本番環境では、税金が適用されなくても購入は可能です。",
  "error_page.error_message_stripe_tax_not_active": "Stripe Taxが有効になっていないため、購入に失敗しました。 本番環境では、税金が適用されなくても購入は可能です。",
  "error_page.error_only_in_sandbox": "このメッセージはサンドボックスでのみ表示されます。",
  "error_page.error_message_stripe_missing_required_permission": "Stripeアプリに必要な権限がないため、購入に失敗しました。 本番環境では、税金が適用されなくても購入は可能です。",
  "error_page.error_title_stripe_tax_not_active": "Stripe Taxが有効ではありません",
  "error_page.error_title_stripe_invalid_tax_origin_address": "税の原産地住所が無効です",
  "apple_pay.free_trial": "無料トライアル",
  "product_info.price_after_intro_price": "{{introPriceDuration}}の後、{{renewalDate}}に",
  "product_info.after_trial": "トライアル後",
  "product_info.after": "後",
  "product_info.intro_price_phase_after_trial": "その後、{{introPriceDuration}}間は{{introPrice}}",
  "product_info.intro_price_phase": "最初の{{introPriceDuration}}間は{{introPrice}}",
  "product_info.intro_price_phase_paid_once": "一回払い",
  "payment_entry_page.trial_subscription_terms_info": "トライアル期間が終了すると、{{renewalDate}}から{{price}} {{perFrequency}}が課金されます。この日より前にいつでもキャンセルできます。",
  "payment_entry_page.subscription_info": "サブスクリプションは自動的に更新されます。いつでもキャンセルできます。",
  "payment_entry_page.otp_terms_info": "購入することにより、{{appName}}が利用規約に基づいて料金を請求することに同意したことになります。",
  "payment_entry_page.terms_link_label": "利用規約",
  "payment_entry_page.subscription_terms_info": "サブスクリプションに登録すると、キャンセルするまで{{appName}}が利用規約に従って課金することを許可することに同意したことになります。",
  "loading_page.keep_page_open": "プロセスはほぼ完了です。このページを開いたままにしてください。",
  "loading_page.processing_payment": "お支払い手続き中",
  "pricing_table.discount": "割引",
  "pricing_table.subtotal": "小計",
  "pricing_dropdown.add_promo_code": "プロモーションコードを追加",
  "discount_input.label": "プロモーションコード",
  "payment_entry_page.checkout_consent_terms_of_service": "利用規約",
  "payment_entry_page.checkout_consent_agreement": "{{appName}}の{{termsOfService}}に同意します。"
}, Xm = {
  "periods.week": "{{amount}}주",
  "periods.month": "{{amount}}개월",
  "periods.year": "{{amount}}년",
  "periods.day": "{{amount}}일",
  "periods.weekShort": "{{amount}}주",
  "periods.monthShort": "{{amount}}개월",
  "periods.yearShort": "{{amount}}년",
  "periods.dayShort": "{{amount}}일",
  "periods.lifetime": "평생",
  "periods.weekPlural": "{{amount}}주",
  "periods.monthPlural": "{{amount}}개월",
  "periods.yearPlural": "{{amount}}년",
  "periods.dayPlural": "{{amount}}일",
  "periods.weekFrequency": "매주",
  "periods.monthFrequency": "매달",
  "periods.yearFrequency": "매년",
  "periods.dayFrequency": "매일",
  "periods.perWeekFrequency": "주당",
  "periods.perMonthFrequency": "월별",
  "periods.perYearFrequency": "연간",
  "periods.perDayFrequency": "매일",
  "periods.unknownFrequency": "알 수 없음",
  "periods.weekFrequencyPlural": "{{amount}}주마다",
  "periods.monthFrequencyPlural": "{{amount}}개월마다",
  "periods.yearFrequencyPlural": "{{amount}}년마다",
  "periods.dayFrequencyPlural": "{{amount}}일마다",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}}일 무료 체험",
  "product_info.price_after_free_trial": "체험 종료 후, {{renewalDate}}에",
  "product_info.renewal_frequency": "{{frequency}}마다 갱신",
  "product_info.continues_until_cancelled": "취소될 때까지 계속됩니다.",
  "product_info.cancel_anytime": "언제든지 취소 가능",
  "payment_entry_page.payment_step_title": "RevenueCat을 통한 안전한 결제",
  "payment_entry_page.button_pay": "지금 결제",
  "payment_entry_page.button_start_trial": "체험 시작",
  "success_page.purchase_successful": "결제가 완료되었습니다.",
  "success_page.button_close": "계속",
  "error_page.if_error_persists": "오류가 지속되면 다음으로 문의하십시오.",
  "error_page.error_title_already_subscribed": "이미 {{productTitle}}을 구독하셨습니다",
  "error_page.error_title_already_purchased": "이미 {{productTitle}}을 구매하셨습니다",
  "error_page.error_title_other_errors": "문제가 발생했습니다.",
  "error_page.error_message_already_subscribed": "이 제품을 다시 구독할 수 없습니다.",
  "error_page.error_message_already_purchased": "이 제품을 다시 구매할 수 없습니다.",
  "error_page.error_message_missing_email_error": "구매를 완료하려면 이메일이 필요합니다.",
  "error_page.error_message_network_error": "네트워크 오류입니다. 인터넷 연결을 확인하십시오.",
  "error_page.error_message_error_charging_payment": "결제에 실패했습니다.",
  "error_page.error_message_error_setting_up_purchase": "오류로 인해 구매가 시작되지 않았습니다(오류 코드: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "청구 주소를 확인할 수 없습니다. 우편번호와 국가가 정확한지 다시 한번 확인해 주세요.",
  "error_page.error_message_unknown_error": "알 수 없는 오류가 발생했습니다(오류 코드: {{errorCode}}).",
  "error_page.button_try_again": "다시 시도",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "오늘 총 결제 금액",
  "product_info.subscribe_to": "구독하기",
  "navbar_header.details": "세부 정보",
  "navbar_header.back_button": "뒤로",
  "pricing_dropdown.show_details": "세부 정보 표시",
  "pricing_dropdown.hide_details": "세부 정보 숨기기",
  "pricing_table.tax": "세금",
  "pricing_table.trial_ends": "체험판 종료 후, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "오늘 지불해야 할 총액",
  "pricing_table.total_excluding_tax": "세금 제외 총액",
  "pricing_table.enter_billing_address_to_calculate": "계산을 위해 청구지 주소를 입력하세요",
  "pricing_table.enter_state_or_postal_code_to_calculate": "주 또는 우편 번호를 입력하여 계산",
  "pricing_table.enter_postal_code_to_calculate": "우편 번호를 입력하여 계산",
  "error_page.error_message_invalid_email_error": "이메일 주소 {{email}}을(를) 확인할 수 없습니다. 유효한 이메일 주소를 제공해 주세요.",
  "payment_entry_page.button_payment_method": "{{paymentMethod}}으로 {{formattedPrice}} 결제",
  "payment_entry_page.button_with_price": "{{formattedPrice}} 결제",
  "price_update.title": "가격 업데이트",
  "price_update.base_message": "청구지 주소를 기준으로 세금이 포함된 총 가격이 업데이트되었습니다. 다시 확인하고 시도해 주세요. 카드는 한 번만 청구됩니다.",
  "price_update.trial_message": "청구 주소에 따라 세금이 포함된 구독 가격이 업데이트되었습니다. 무료 체험은 계속 적용됩니다. 확인하고 다시 시도해 주세요.",
  "payment_entry_page.express_checkout_divider": "또는 카드 결제",
  "error_page.trouble_accessing": "구매에 문제가 있는 경우 다음 주소로 지원팀에 문의하세요. ",
  "error_page.close_button_title": "{{appName}}으로 이동",
  "error_page.error_title_stripe_missing_required_permission": "필수 Stripe 권한 누락",
  "error_page.button_close": "닫기",
  "error_page.error_message_stripe_invalid_tax_origin_address": "세금 원산지 주소가 잘못되어 구매에 실패했습니다. 프로덕션 환경에서는 세금이 적용되지 않은 상태로 구매가 진행됩니다.",
  "error_page.error_message_stripe_tax_not_active": "Stripe Tax가 활성화되지 않아 구매에 실패했습니다. 프로덕션 환경에서는 세금이 적용되지 않은 상태로 구매가 진행됩니다.",
  "error_page.error_only_in_sandbox": "이 메시지는 샌드박스에서만 표시됩니다.",
  "error_page.error_message_stripe_missing_required_permission": "Stripe 앱에 필요한 권한이 없어 구매에 실패했습니다. 프로덕션 환경에서는 세금이 적용되지 않은 상태로 구매가 진행됩니다.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax가 활성화되지 않음",
  "error_page.error_title_stripe_invalid_tax_origin_address": "잘못된 세금 원산지 주소",
  "apple_pay.free_trial": "무료 체험",
  "product_info.price_after_intro_price": "{{introPriceDuration}} 후 {{renewalDate}}에",
  "product_info.after_trial": "체험 후",
  "product_info.after": "후",
  "product_info.intro_price_phase_after_trial": "다음 {{introPriceDuration}} 동안 {{introPrice}}",
  "product_info.intro_price_phase": "처음 {{introPriceDuration}} 동안 {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "1회 결제",
  "payment_entry_page.trial_subscription_terms_info": "체험 기간이 종료되면 {{renewalDate}}부터 {{price}} {{perFrequency}}가 청구됩니다. 이 날짜 전에는 언제든지 취소할 수 있습니다.",
  "payment_entry_page.subscription_info": "구독은 자동으로 갱신됩니다. 언제든지 취소할 수 있습니다.",
  "payment_entry_page.otp_terms_info": "구매하시면 {{appName}}의 약관에 따라 요금이 청구되는 것에 동의하는 것입니다.",
  "payment_entry_page.terms_link_label": "약관",
  "payment_entry_page.subscription_terms_info": "구독하면 취소할 때까지 {{appName}}이 약관에 따라 요금을 청구하는 데 동의하는 것입니다.",
  "loading_page.keep_page_open": "거의 완료되었습니다. 이 페이지를 계속 열어 두세요.",
  "loading_page.processing_payment": "결제 처리 중",
  "pricing_table.discount": "할인",
  "pricing_table.subtotal": "소계",
  "pricing_dropdown.add_promo_code": "프로모션 코드 추가",
  "discount_input.label": "프로모션 코드",
  "payment_entry_page.checkout_consent_terms_of_service": "이용 약관",
  "payment_entry_page.checkout_consent_agreement": "{{appName}} {{termsOfService}}에 동의합니다."
}, Zm = {
  "periods.week": "{{amount}} minggu",
  "periods.month": "{{amount}} bulan",
  "periods.year": "{{amount}} tahun",
  "periods.day": "{{amount}} hari",
  "periods.weekShort": "{{amount}}mg",
  "periods.monthShort": "{{amount}}bl",
  "periods.yearShort": "{{amount}}th",
  "periods.dayShort": "{{amount}}h",
  "periods.lifetime": "seumur hidup",
  "periods.weekPlural": "{{amount}} minggu",
  "periods.monthPlural": "{{amount}} bulan",
  "periods.yearPlural": "{{amount}} tahun",
  "periods.dayPlural": "{{amount}} hari",
  "periods.weekFrequency": "mingguan",
  "periods.monthFrequency": "bulanan",
  "periods.yearFrequency": "tahunan",
  "periods.dayFrequency": "harian",
  "periods.perWeekFrequency": "setiap minggu",
  "periods.perMonthFrequency": "setiap bulan",
  "periods.perYearFrequency": "setiap tahun",
  "periods.perDayFrequency": "setiap hari",
  "periods.unknownFrequency": "tidak diketahui",
  "periods.weekFrequencyPlural": "setiap {{amount}} minggu",
  "periods.monthFrequencyPlural": "setiap {{amount}} bulan",
  "periods.yearFrequencyPlural": "setiap {{amount}} tahun",
  "periods.dayFrequencyPlural": "setiap {{amount}} hari",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} percubaan percuma",
  "product_info.price_after_free_trial": "Selepas tamat percubaan, pada {{renewalDate}}",
  "product_info.renewal_frequency": "Diperbaharui {{frequency}}",
  "product_info.continues_until_cancelled": "Berterusan sehingga dibatalkan",
  "product_info.cancel_anytime": "Batal bila-bila masa",
  "payment_entry_page.payment_step_title": "Pembayaran selamat oleh RevenueCat",
  "payment_entry_page.button_pay": "Bayar sekarang",
  "payment_entry_page.button_start_trial": "Mula Percubaan",
  "success_page.purchase_successful": "Pembayaran selesai",
  "success_page.button_close": "Teruskan",
  "error_page.if_error_persists": "Jika ralat berterusan, sila hubungi ",
  "error_page.error_title_already_subscribed": "Anda sudah melanggan {{productTitle}}",
  "error_page.error_title_already_purchased": "Anda sudah membeli {{productTitle}}",
  "error_page.error_title_other_errors": "Ada sesuatu yang tidak kena",
  "error_page.error_message_already_subscribed": "Anda tidak boleh melanggan produk ini lagi.",
  "error_page.error_message_already_purchased": "Anda tidak boleh membeli produk ini lagi.",
  "error_page.error_message_missing_email_error": "Emel diperlukan untuk menyelesaikan pembelian.",
  "error_page.error_message_network_error": "Ralat rangkaian. Sila semak sambungan internet anda.",
  "error_page.error_message_error_charging_payment": "Pembayaran gagal.",
  "error_page.error_message_error_setting_up_purchase": "Pembelian tidak dimulakan disebabkan ralat (kod ralat: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Kami tidak dapat mengesahkan alamat bil anda. Sila semak sama ada poskod dan negara adalah betul.",
  "error_page.error_message_unknown_error": "Ralat yang tidak diketahui telah berlaku (kod ralat: {{errorCode}}).",
  "error_page.button_try_again": "Cuba lagi",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Jumlah yang perlu dibayar hari ini",
  "product_info.subscribe_to": "Langgan",
  "navbar_header.details": "Butiran",
  "navbar_header.back_button": "Kembali",
  "pricing_dropdown.show_details": "Tunjukkan butiran",
  "pricing_dropdown.hide_details": "Sembunyikan butiran",
  "pricing_table.tax": "Cukai",
  "pricing_table.trial_ends": "Selepas tempoh percubaan tamat, pada {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Jumlah yang perlu dibayar hari ini",
  "pricing_table.total_excluding_tax": "Jumlah tidak termasuk cukai",
  "pricing_table.enter_billing_address_to_calculate": "Masukkan alamat pengebilan untuk mengira",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Masukkan negeri atau poskod untuk mengira",
  "pricing_table.enter_postal_code_to_calculate": "Masukkan poskod untuk mengira",
  "error_page.error_message_invalid_email_error": "Alamat e-mel {{email}} tidak dapat disahkan. Sila berikan alamat e-mel yang sah.",
  "payment_entry_page.button_payment_method": "Bayar {{formattedPrice}} dengan {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Bayar {{formattedPrice}}",
  "price_update.title": "Kemaskini harga",
  "price_update.base_message": "Jumlah harga telah dikemas kini dengan cukai berdasarkan alamat pengebilan anda. Sila semak dan cuba lagi. Kad anda hanya akan dicaj sekali.",
  "price_update.trial_message": "Harga langganan telah dikemas kini untuk memasukkan cukai berdasarkan alamat bil anda. Tempoh percubaan percuma masih terpakai. Sila semak dan cuba lagi.",
  "payment_entry_page.express_checkout_divider": "ATAU BAYAR DENGAN KAD",
  "error_page.trouble_accessing": "Jika anda menghadapi masalah untuk mengakses pembelian anda, hubungi sokongan di ",
  "error_page.close_button_title": "Pergi ke {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Kebenaran Stripe hilang",
  "error_page.button_close": "Tutup",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Pembelian gagal kerana alamat asal cukai tidak sah. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
  "error_page.error_message_stripe_tax_not_active": "Pembelian gagal kerana Cukai Stripe tidak didayakan. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
  "error_page.error_only_in_sandbox": "Mesej ini hanya muncul dalam kotak pasir.",
  "error_page.error_message_stripe_missing_required_permission": "Pembelian gagal kerana aplikasi Stripe kekurangan kebenaran yang diperlukan. Dalam pengeluaran, pembelian akan berfungsi tanpa cukai dikenakan.",
  "error_page.error_title_stripe_tax_not_active": "Cukai Stripe tidak aktif",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Alamat asal cukai Stripe tidak sah",
  "apple_pay.free_trial": "Percubaan Percuma",
  "product_info.price_after_intro_price": "Selepas {{introPriceDuration}}, pada {{renewalDate}}",
  "product_info.after_trial": "selepas percubaan",
  "product_info.after": "selepas",
  "product_info.intro_price_phase_after_trial": "Kemudian {{introPriceDuration}} untuk {{introPrice}}",
  "product_info.intro_price_phase": "Pertama {{introPriceDuration}} untuk {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "dibayar sekali",
  "payment_entry_page.trial_subscription_terms_info": "Selepas tempoh percubaan anda tamat, anda akan dikenakan bayaran sebanyak {{price}} {{perFrequency}} bermula {{renewalDate}}. Anda boleh membatalkan pada bila-bila masa sebelum tarikh ini.",
  "payment_entry_page.subscription_info": "Langganan diperbaharui secara automatik. Batalkan bila-bila masa.",
  "payment_entry_page.otp_terms_info": "Dengan membuat pembelian, anda bersetuju untuk membenarkan {{appName}} mengenakan bayaran kepada anda mengikut terma mereka.",
  "payment_entry_page.terms_link_label": "Terma",
  "payment_entry_page.subscription_terms_info": "Dengan melanggan, anda bersetuju untuk membenarkan {{appName}} mengenakan bayaran kepada anda mengikut terma mereka sehingga anda membatalkan.",
  "loading_page.keep_page_open": "Proses hampir selesai. Pastikan halaman ini dibuka.",
  "loading_page.processing_payment": "Memproses pembayaran",
  "pricing_table.discount": "Diskaun",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Tambah kod promo",
  "discount_input.label": "Kod promo",
  "payment_entry_page.checkout_consent_terms_of_service": "syarat perkhidmatan",
  "payment_entry_page.checkout_consent_agreement": "Saya bersetuju dengan {{appName}} {{termsOfService}}."
}, Jm = {
  "periods.week": "{{amount}} uke",
  "periods.month": "{{amount}} måned",
  "periods.year": "{{amount}} år",
  "periods.day": "{{amount}} dag",
  "periods.weekShort": "{{amount}}uk",
  "periods.monthShort": "{{amount}}md",
  "periods.yearShort": "{{amount}}år",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "livstid",
  "periods.weekPlural": "{{amount}} uker",
  "periods.monthPlural": "{{amount}} måneder",
  "periods.yearPlural": "{{amount}} år",
  "periods.dayPlural": "{{amount}} dager",
  "periods.weekFrequency": "ukentlig",
  "periods.monthFrequency": "månedlig",
  "periods.yearFrequency": "årlig",
  "periods.dayFrequency": "daglig",
  "periods.perWeekFrequency": "per uke",
  "periods.perMonthFrequency": "per måned",
  "periods.perYearFrequency": "per år",
  "periods.perDayFrequency": "per dag",
  "periods.unknownFrequency": "ukjent",
  "periods.weekFrequencyPlural": "hver {{amount}} uker",
  "periods.monthFrequencyPlural": "hver {{amount}} måneder",
  "periods.yearFrequencyPlural": "hver {{amount}} år",
  "periods.dayFrequencyPlural": "hver {{amount}} dager",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} gratis prøveperiode",
  "product_info.price_after_free_trial": "Etter prøveperioden slutter, den {{renewalDate}}",
  "product_info.renewal_frequency": "Fornyes {{frequency}}",
  "product_info.continues_until_cancelled": "Varer til den avbestilles",
  "product_info.cancel_anytime": "Avbestille når som helst",
  "payment_entry_page.payment_step_title": "Sikker betaling via RevenueCat",
  "payment_entry_page.button_pay": "Betal nå",
  "payment_entry_page.button_start_trial": "Start prøveperiode",
  "success_page.purchase_successful": "Betalingen er fullført",
  "success_page.button_close": "Fortsett",
  "error_page.if_error_persists": "Hvis feilen vedvarer, vennligst kontakt ",
  "error_page.error_title_already_subscribed": "Du abonnerer allerede på {{productTitle}}",
  "error_page.error_title_already_purchased": "Du har allerede kjøpt {{productTitle}}",
  "error_page.error_title_other_errors": "Noe gikk galt",
  "error_page.error_message_already_subscribed": "Du kan ikke abonnere på dette produktet igjen.",
  "error_page.error_message_already_purchased": "Du kan ikke kjøpe dette produktet igjen.",
  "error_page.error_message_missing_email_error": "E-post er nødvendig for å fullføre kjøpet.",
  "error_page.error_message_network_error": "Nettverksfeil. Vennligst sjekk internettforbindelsen din.",
  "error_page.error_message_error_charging_payment": "Betalingen mislyktes.",
  "error_page.error_message_error_setting_up_purchase": "Kjøpet ble ikke startet på grunn av en feil (feilkode: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Vi kunne ikke bekrefte faktureringsadressen din. Vennligst sjekk at postnummeret og landet er korrekte.",
  "error_page.error_message_unknown_error": "En ukjent feil oppstod (feilkode: {{errorCode}}).",
  "error_page.button_try_again": "Prøv igjen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Totalt forfaller i dag",
  "product_info.subscribe_to": "Abonner på",
  "navbar_header.details": "Detaljer",
  "navbar_header.back_button": "Tilbake",
  "pricing_dropdown.show_details": "Vis detaljer",
  "pricing_dropdown.hide_details": "Skjul detaljer",
  "pricing_table.tax": "Skatt",
  "pricing_table.trial_ends": "Etter prøveperioden slutter, den {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Totalt forfaller i dag",
  "pricing_table.total_excluding_tax": "Total eksklusive skatt",
  "pricing_table.enter_billing_address_to_calculate": "Oppgi faktureringsadresse for å beregne",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Skriv inn stat eller postnummer for å beregne",
  "pricing_table.enter_postal_code_to_calculate": "Skriv inn postnummer for å beregne",
  "error_page.error_message_invalid_email_error": "E-postadressen {{email}} kunne ikke bekreftes. Vennligst oppgi en gyldig e-postadresse.",
  "payment_entry_page.button_payment_method": "Betal {{formattedPrice}} med {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Betal {{formattedPrice}}",
  "price_update.title": "Prisoppdatering",
  "price_update.base_message": "Totalprisen er oppdatert med skatt basert på fakturaadressen din. Vennligst se gjennom og prøv igjen. Kortet ditt vil kun bli belastet én gang.",
  "price_update.trial_message": "Abonnementsprisen er oppdatert for å inkludere skatter basert på din fakturaadresse. Den gratis prøveperioden gjelder fortsatt. Vennligst sjekk og prøv igjen.",
  "payment_entry_page.express_checkout_divider": "ELLER BETAL MED KORT",
  "error_page.trouble_accessing": "Hvis du har problemer med å få tilgang til kjøpet ditt, kan du kontakte support på ",
  "error_page.close_button_title": "Gå til {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Mangler Stripe-tillatelse",
  "error_page.button_close": "Lukk",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Kjøpet mislyktes fordi skatteopprinnelsesadressen er ugyldig. I produksjon vil kjøp fungere uten at skatter brukes.",
  "error_page.error_message_stripe_tax_not_active": "Kjøpet mislyktes fordi Stripe Tax ikke er aktivert. I produksjon vil kjøp fungere uten at skatter brukes.",
  "error_page.error_only_in_sandbox": "Denne meldingen vises bare i sandkassen.",
  "error_page.error_message_stripe_missing_required_permission": "Kjøpet mislyktes fordi Stripe-appen mangler en nødvendig tillatelse. I produksjon vil kjøp fungere uten at skatter brukes.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax er ikke aktivt",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Ugyldig skatteopprinnelsesadresse",
  "apple_pay.free_trial": "Gratis prøveperiode",
  "product_info.price_after_intro_price": "Etter {{introPriceDuration}}, den {{renewalDate}}",
  "product_info.after_trial": "etter prøveperiode",
  "product_info.after": "etter",
  "product_info.intro_price_phase_after_trial": "Deretter {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase": "Først {{introPriceDuration}} for {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "betales én gang",
  "payment_entry_page.trial_subscription_terms_info": "Etter at prøveperioden din er over, blir du belastet {{price}} {{perFrequency}} fra og med {{renewalDate}}. Du kan kansellere når som helst før denne datoen.",
  "payment_entry_page.subscription_info": "Abonnementet fornyes automatisk. Avbryt når som helst.",
  "payment_entry_page.otp_terms_info": "Ved å kjøpe godtar du at {{appName}} belaster deg i henhold til deres vilkår.",
  "payment_entry_page.terms_link_label": "Vilkår",
  "payment_entry_page.subscription_terms_info": "Ved å abonnere godtar du at {{appName}} belaster deg i henhold til deres vilkår til du kansellerer.",
  "loading_page.keep_page_open": "Prosessen er nesten ferdig. Hold denne siden åpen.",
  "loading_page.processing_payment": "Behandler betaling",
  "pricing_table.discount": "Rabatt",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Legg til kampanjekode",
  "discount_input.label": "Kampanjekode",
  "payment_entry_page.checkout_consent_terms_of_service": "vilkår for bruk",
  "payment_entry_page.checkout_consent_agreement": "Jeg godtar {{appName}} {{termsOfService}}."
}, Qm = {
  "periods.week": "{{amount}} tydzień",
  "periods.month": "{{amount}} miesiąc",
  "periods.year": "{{amount}} rok",
  "periods.day": "{{amount}} dzień",
  "periods.weekShort": "{{amount}}tydz",
  "periods.monthShort": "{{amount}}mies",
  "periods.yearShort": "{{amount}}rok",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "dożywotnio",
  "periods.weekPlural": "{{amount}} tygodni",
  "periods.monthPlural": "{{amount}} miesięcy",
  "periods.yearPlural": "{{amount}} lat",
  "periods.dayPlural": "{{amount}} dni",
  "periods.weekFrequency": "tygodniowo",
  "periods.monthFrequency": "miesięcznie",
  "periods.yearFrequency": "rocznie",
  "periods.dayFrequency": "dziennie",
  "periods.perWeekFrequency": "na tydzień",
  "periods.perMonthFrequency": "na miesiąc",
  "periods.perYearFrequency": "na rok",
  "periods.perDayFrequency": "na dzień",
  "periods.unknownFrequency": "nieznany",
  "periods.weekFrequencyPlural": "co {{amount}} tygodni",
  "periods.monthFrequencyPlural": "co {{amount}} miesięcy",
  "periods.yearFrequencyPlural": "co {{amount}} lat",
  "periods.dayFrequencyPlural": "co {{amount}} dni",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} dni próbnych",
  "product_info.price_after_free_trial": "Po zakończeniu okresu próbnego, dnia {{renewalDate}}",
  "product_info.renewal_frequency": "Odnawialny co {{frequency}}",
  "product_info.continues_until_cancelled": "Kontynuowane do momentu anulowania",
  "product_info.cancel_anytime": "Możesz anulować w dowolnym momencie",
  "payment_entry_page.payment_step_title": "Bezpieczna płatność przez RevenueCat",
  "payment_entry_page.button_pay": "Zapłać teraz",
  "payment_entry_page.button_start_trial": "Rozpocznij okres próbny",
  "success_page.purchase_successful": "Płatność zakończona",
  "success_page.button_close": "Kontynuuj",
  "error_page.if_error_persists": "Jeśli błąd będzie się powtarzał, skontaktuj się z ",
  "error_page.error_title_already_subscribed": "Już subskrybujesz {{productTitle}}",
  "error_page.error_title_already_purchased": "Już zakupiłeś/aś {{productTitle}}",
  "error_page.error_title_other_errors": "Coś poszło nie tak",
  "error_page.error_message_already_subscribed": "Nie możesz ponownie subskrybować tego produktu.",
  "error_page.error_message_already_purchased": "Nie możesz ponownie zakupić tego produktu.",
  "error_page.error_message_missing_email_error": "Adres e-mail jest wymagany do dokonania zakupu.",
  "error_page.error_message_network_error": "Błąd sieci. Sprawdź połączenie internetowe.",
  "error_page.error_message_error_charging_payment": "Płatność nieudana.",
  "error_page.error_message_error_setting_up_purchase": "Zakup nie został rozpoczęty z powodu błędu (kod błędu: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nie mogliśmy zweryfikować Twojego adresu rozliczeniowego. Sprawdź, czy kod pocztowy i kraj są poprawne.",
  "error_page.error_message_unknown_error": "Wystąpił nieznany błąd (kod błędu: {{errorCode}}).",
  "error_page.button_try_again": "Spróbuj ponownie",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Do zapłaty dzisiaj",
  "product_info.subscribe_to": "Subskrybuj",
  "navbar_header.details": "Szczegóły",
  "navbar_header.back_button": "Wstecz",
  "pricing_dropdown.show_details": "Pokaż szczegóły",
  "pricing_dropdown.hide_details": "Ukryj szczegóły",
  "pricing_table.tax": "Podatek",
  "pricing_table.trial_ends": "Po zakończeniu okresu próbnego, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Suma należna dzisiaj",
  "pricing_table.total_excluding_tax": "Suma bez podatku",
  "pricing_table.enter_billing_address_to_calculate": "Wprowadź adres rozliczeniowy, aby obliczyć",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Wprowadź stan lub kod pocztowy, aby obliczyć",
  "pricing_table.enter_postal_code_to_calculate": "Wprowadź kod pocztowy, aby obliczyć",
  "error_page.error_message_invalid_email_error": "Nie można zweryfikować adresu e-mail {{email}}. Proszę podać prawidłowy adres e-mail.",
  "payment_entry_page.button_payment_method": "Zapłać {{formattedPrice}} przez {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Zapłać {{formattedPrice}}",
  "price_update.title": "Aktualizacja ceny",
  "price_update.base_message": "Cena całkowita została zaktualizowana o podatek na podstawie Twojego adresu rozliczeniowego. Sprawdź i spróbuj ponownie. Twoja karta zostanie obciążona tylko raz.",
  "price_update.trial_message": "Cena subskrypcji została zaktualizowana o podatki na podstawie Twojego adresu rozliczeniowego. Okres próbny nadal obowiązuje. Sprawdź i spróbuj ponownie.",
  "payment_entry_page.express_checkout_divider": "LUB ZAPŁAĆ KARTĄ",
  "error_page.trouble_accessing": "Jeśli masz problemy z dostępem do zakupu, skontaktuj się z działem pomocy pod adresem ",
  "error_page.close_button_title": "Przejdź do {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Brakujące uprawnienie Stripe",
  "error_page.button_close": "Zamknij",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Zakup nie powiódł się, ponieważ adres pochodzenia podatku jest nieprawidłowy. W środowisku produkcyjnym zakupy będą działać bez naliczania podatków.",
  "error_page.error_message_stripe_tax_not_active": "Zakup nie powiódł się, ponieważ Stripe Tax nie jest włączony. W środowisku produkcyjnym zakupy będą działać bez naliczania podatków.",
  "error_page.error_only_in_sandbox": "Ta wiadomość pojawia się tylko w środowisku testowym.",
  "error_page.error_message_stripe_missing_required_permission": "Zakup nie powiódł się, ponieważ aplikacja Stripe nie ma wymaganego uprawnienia. W środowisku produkcyjnym zakupy będą działać bez naliczania podatków.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax nieaktywny",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Nieprawidłowy adres pochodzenia podatku",
  "apple_pay.free_trial": "Okres próbny",
  "product_info.price_after_intro_price": "Po {{introPriceDuration}}, od {{renewalDate}}",
  "product_info.after_trial": "po okresie próbnym",
  "product_info.after": "po",
  "product_info.intro_price_phase_after_trial": "Następnie {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase": "Najpierw {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "płatne jednorazowo",
  "payment_entry_page.trial_subscription_terms_info": "Po zakończeniu okresu próbnego zostanie pobrana opłata w wysokości {{price}} {{perFrequency}} począwszy od {{renewalDate}}. Możesz anulować subskrypcję w dowolnym momencie przed tą datą.",
  "payment_entry_page.subscription_info": "Subskrypcja odnawia się automatycznie. Anuluj w dowolnym momencie.",
  "payment_entry_page.otp_terms_info": "Dokonując zakupu, zgadzasz się na obciążenie przez {{appName}} zgodnie z ich warunkami.",
  "payment_entry_page.terms_link_label": "Warunki",
  "payment_entry_page.subscription_terms_info": "Subskrybując, zgadzasz się na obciążanie przez {{appName}} zgodnie z ich warunkami do momentu anulowania.",
  "loading_page.keep_page_open": "Proces jest prawie zakończony. Pozostaw tę stronę otwartą.",
  "loading_page.processing_payment": "Przetwarzanie płatności",
  "pricing_table.discount": "Rabat",
  "pricing_table.subtotal": "Suma częściowa",
  "pricing_dropdown.add_promo_code": "Dodaj kod promocyjny",
  "discount_input.label": "Kod promocyjny",
  "payment_entry_page.checkout_consent_terms_of_service": "regulamin",
  "payment_entry_page.checkout_consent_agreement": "Akceptuję {{appName}} {{termsOfService}}."
}, $m = {
  "periods.week": "{{amount}} semana",
  "periods.month": "{{amount}} mês",
  "periods.year": "{{amount}} ano",
  "periods.day": "{{amount}} dia",
  "periods.weekShort": "{{amount}}sem",
  "periods.monthShort": "{{amount}}mês",
  "periods.yearShort": "{{amount}}ano",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "vitalício",
  "periods.weekPlural": "{{amount}} semanas",
  "periods.monthPlural": "{{amount}} meses",
  "periods.yearPlural": "{{amount}} anos",
  "periods.dayPlural": "{{amount}} dias",
  "periods.weekFrequency": "semanal",
  "periods.monthFrequency": "mensal",
  "periods.yearFrequency": "anual",
  "periods.dayFrequency": "diário",
  "periods.perWeekFrequency": "por semana",
  "periods.perMonthFrequency": "por mês",
  "periods.perYearFrequency": "por ano",
  "periods.perDayFrequency": "por dia",
  "periods.unknownFrequency": "desconhecido",
  "periods.weekFrequencyPlural": "a cada {{amount}} semanas",
  "periods.monthFrequencyPlural": "a cada {{amount}} meses",
  "periods.yearFrequencyPlural": "a cada {{amount}} anos",
  "periods.dayFrequencyPlural": "a cada {{amount}} dias",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} teste grátis",
  "product_info.price_after_free_trial": "Após o término do teste, em {{renewalDate}}",
  "product_info.renewal_frequency": "Renova {{frequency}}",
  "product_info.continues_until_cancelled": "Continua até ser cancelado",
  "product_info.cancel_anytime": "Cancelar a qualquer momento",
  "payment_entry_page.payment_step_title": "Pagamento seguro pela RevenueCat",
  "payment_entry_page.button_pay": "Pagar agora",
  "payment_entry_page.button_start_trial": "Iniciar Teste",
  "success_page.purchase_successful": "Pagamento concluído",
  "success_page.button_close": "Continuar",
  "error_page.if_error_persists": "Se o erro persistir, entre em contato com ",
  "error_page.error_title_already_subscribed": "Você já se inscreveu em {{productTitle}}",
  "error_page.error_title_already_purchased": "Você já comprou {{productTitle}}",
  "error_page.error_title_other_errors": "Algo deu errado",
  "error_page.error_message_already_subscribed": "Você não pode se inscrever neste produto novamente.",
  "error_page.error_message_already_purchased": "Você não pode comprar este produto novamente.",
  "error_page.error_message_missing_email_error": "Email é necessário para concluir a compra.",
  "error_page.error_message_network_error": "Erro de rede. Verifique sua conexão com a internet.",
  "error_page.error_message_error_charging_payment": "Pagamento falhou.",
  "error_page.error_message_error_setting_up_purchase": "Compra não iniciada devido a um erro (código de erro: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Não conseguimos verificar seu endereço de cobrança. Por favor, verifique se o código postal e o país estão corretos.",
  "error_page.error_message_unknown_error": "Ocorreu um erro desconhecido (código de erro: {{errorCode}}).",
  "error_page.button_try_again": "Tentar novamente",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total a pagar hoje",
  "product_info.subscribe_to": "Subscrever",
  "navbar_header.details": "Detalhes",
  "navbar_header.back_button": "Voltar",
  "pricing_dropdown.show_details": "Mostrar detalhes",
  "pricing_dropdown.hide_details": "Ocultar detalhes",
  "pricing_table.tax": "Imposto",
  "pricing_table.trial_ends": "Após o término do período de avaliação, em {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total a pagar hoje",
  "pricing_table.total_excluding_tax": "Total sem impostos",
  "pricing_table.enter_billing_address_to_calculate": "Insira o endereço de cobrança para calcular",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Insira o estado ou o CEP para calcular",
  "pricing_table.enter_postal_code_to_calculate": "Insira o CEP para calcular",
  "error_page.error_message_invalid_email_error": "O endereço de e-mail {{email}} não pôde ser verificado. Por favor, forneça um endereço de e-mail válido.",
  "payment_entry_page.button_payment_method": "Pagar {{formattedPrice}} com {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Pagar {{formattedPrice}}",
  "price_update.title": "Atualização de preço",
  "price_update.base_message": "O preço total foi atualizado com impostos com base no seu endereço de cobrança. Por favor, revise e tente novamente. Seu cartão só será cobrado uma vez.",
  "price_update.trial_message": "O preço da assinatura foi atualizado para incluir impostos com base no seu endereço de faturação. O período de teste gratuito continua válido. Por favor, verifique e tente novamente.",
  "payment_entry_page.express_checkout_divider": "OU PAGUE COM CARTÃO",
  "error_page.trouble_accessing": "Se estiver com problemas para acessar sua compra, entre em contato com o suporte em ",
  "error_page.close_button_title": "Ir para {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Permissão do Stripe em falta",
  "error_page.button_close": "Fechar",
  "error_page.error_message_stripe_invalid_tax_origin_address": "A compra falhou porque o endereço de origem fiscal é inválido. Em produção, as compras funcionarão sem impostos aplicados.",
  "error_page.error_message_stripe_tax_not_active": "A compra falhou porque o Stripe Tax não está ativado. Em produção, as compras funcionarão sem impostos aplicados.",
  "error_page.error_only_in_sandbox": "Esta mensagem aparece apenas na sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "A compra falhou porque o aplicativo Stripe não tem uma permissão necessária. Em produção, as compras funcionarão sem impostos aplicados.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax não está ativo",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Endereço de origem fiscal inválido",
  "apple_pay.free_trial": "Teste Gratuito",
  "product_info.price_after_intro_price": "Após {{introPriceDuration}}, em {{renewalDate}}",
  "product_info.after_trial": "após o período de teste",
  "product_info.after": "após",
  "product_info.intro_price_phase_after_trial": "Depois, {{introPriceDuration}} por {{introPrice}}",
  "product_info.intro_price_phase": "Primeiro, {{introPriceDuration}} por {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "pago uma vez",
  "payment_entry_page.trial_subscription_terms_info": "Após o término do período de avaliação, será cobrado o valor de {{price}} {{perFrequency}} a partir de {{renewalDate}}. Pode cancelar a qualquer momento antes desta data.",
  "payment_entry_page.subscription_info": "A subscrição é renovada automaticamente. Cancele a qualquer momento.",
  "payment_entry_page.otp_terms_info": "Ao comprar, você concorda em permitir que o {{appName}} cobre de acordo com os termos deles.",
  "payment_entry_page.terms_link_label": "Termos",
  "payment_entry_page.subscription_terms_info": "Ao subscrever, concorda em permitir que a {{appName}} lhe cobre de acordo com os seus termos até cancelar.",
  "loading_page.keep_page_open": "O processo está quase concluído. Mantenha esta página aberta.",
  "loading_page.processing_payment": "Processando o pagamento",
  "pricing_table.discount": "Desconto",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Adicionar código promocional",
  "discount_input.label": "Código promocional",
  "payment_entry_page.checkout_consent_terms_of_service": "termos de serviço",
  "payment_entry_page.checkout_consent_agreement": "Concordo com os {{termsOfService}} do {{appName}}."
}, eh = {
  "periods.week": "{{amount}} săptămână",
  "periods.month": "{{amount}} lună",
  "periods.year": "{{amount}} an",
  "periods.day": "{{amount}} zi",
  "periods.weekShort": "{{amount}}săpt",
  "periods.monthShort": "{{amount}}lun",
  "periods.yearShort": "{{amount}}an",
  "periods.dayShort": "{{amount}}z",
  "periods.lifetime": "pe viață",
  "periods.weekPlural": "{{amount}} săptămâni",
  "periods.monthPlural": "{{amount}} luni",
  "periods.yearPlural": "{{amount}} ani",
  "periods.dayPlural": "{{amount}} zile",
  "periods.weekFrequency": "săptămânal",
  "periods.monthFrequency": "lunar",
  "periods.yearFrequency": "anual",
  "periods.dayFrequency": "zilnic",
  "periods.perWeekFrequency": "pe săptămână",
  "periods.perMonthFrequency": "pe lună",
  "periods.perYearFrequency": "pe an",
  "periods.perDayFrequency": "pe zi",
  "periods.unknownFrequency": "necunoscut",
  "periods.weekFrequencyPlural": "la fiecare {{amount}} săptămâni",
  "periods.monthFrequencyPlural": "la fiecare {{amount}} luni",
  "periods.yearFrequencyPlural": "la fiecare {{amount}} ani",
  "periods.dayFrequencyPlural": "la fiecare {{amount}} zile",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} perioadă de probă gratuită",
  "product_info.price_after_free_trial": "După terminarea perioadei de probă, pe {{renewalDate}}",
  "product_info.renewal_frequency": "Se reînnoiește {{frequency}}",
  "product_info.continues_until_cancelled": "Continuă până la anulare",
  "product_info.cancel_anytime": "Anulare oricând",
  "payment_entry_page.payment_step_title": "Plata securizată prin RevenueCat",
  "payment_entry_page.button_pay": "Plătește acum",
  "payment_entry_page.button_start_trial": "Începe perioada de probă",
  "success_page.purchase_successful": "Plata efectuată",
  "success_page.button_close": "Continuă",
  "error_page.if_error_persists": "Dacă eroarea persistă, vă rugăm să contactați ",
  "error_page.error_title_already_subscribed": "Sunteți deja abonat la {{productTitle}}",
  "error_page.error_title_already_purchased": "Ați achiziționat deja {{productTitle}}",
  "error_page.error_title_other_errors": "A apărut o eroare",
  "error_page.error_message_already_subscribed": "Nu vă puteți abona din nou la acest produs.",
  "error_page.error_message_already_purchased": "Nu puteți achiziționa din nou acest produs.",
  "error_page.error_message_missing_email_error": "Adresa de e-mail este necesară pentru a finaliza achiziția.",
  "error_page.error_message_network_error": "Eroare de rețea. Verificați conexiunea la internet.",
  "error_page.error_message_error_charging_payment": "Plata a eșuat.",
  "error_page.error_message_error_setting_up_purchase": "Achiziția nu a putut fi inițiată din cauza unei erori (cod de eroare: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nu am putut verifica adresa de facturare. Vă rugăm să verificați dacă codul poștal și țara sunt corecte.",
  "error_page.error_message_unknown_error": "A apărut o eroare necunoscută (cod de eroare: {{errorCode}}).",
  "error_page.button_try_again": "Încearcă din nou",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Total de plată astăzi",
  "product_info.subscribe_to": "Abonare la",
  "navbar_header.details": "Detalii",
  "navbar_header.back_button": "Înapoi",
  "pricing_dropdown.show_details": "Arată detalii",
  "pricing_dropdown.hide_details": "Ascunde detalii",
  "pricing_table.tax": "Taxă",
  "pricing_table.trial_ends": "După ce perioada de probă se termină, pe {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total de plătit astăzi",
  "pricing_table.total_excluding_tax": "Total fără taxe",
  "pricing_table.enter_billing_address_to_calculate": "Introduceți adresa de facturare pentru a calcula",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Introduceți statul sau codul poștal pentru a calcula",
  "pricing_table.enter_postal_code_to_calculate": "Introduceți codul poștal pentru a calcula",
  "error_page.error_message_invalid_email_error": "Adresa de e-mail {{email}} nu a putut fi verificată. Vă rugăm să furnizați o adresă de e-mail validă.",
  "payment_entry_page.button_payment_method": "Plătește {{formattedPrice}} cu {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Plătește {{formattedPrice}}",
  "price_update.title": "Actualizare preț",
  "price_update.base_message": "Prețul total a fost actualizat cu taxe, în funcție de adresa dumneavoastră de facturare. Vă rugăm să revizuiți și să încercați din nou. Cardul dumneavoastră va fi debitat o singură dată.",
  "price_update.trial_message": "Prețul abonamentului a fost actualizat pentru a include taxele bazate pe adresa dvs. de facturare. Perioada de probă gratuită rămâne valabilă. Vă rugăm să verificați și să încercați din nou.",
  "payment_entry_page.express_checkout_divider": "SAU PLĂTEȘTE CU CARDUL",
  "error_page.trouble_accessing": "Dacă întâmpini probleme în accesarea achiziției tale, contactează serviciul de asistență la ",
  "error_page.close_button_title": "Mergi la {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Permisiune Stripe lipsă",
  "error_page.button_close": "Închide",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Achiziția a eșuat deoarece adresa de origine fiscală este nevalidă. În producție, achizițiile vor funcționa fără taxe aplicate.",
  "error_page.error_message_stripe_tax_not_active": "Achiziția a eșuat deoarece Stripe Tax nu este activat. În producție, achizițiile vor funcționa fără taxe aplicate.",
  "error_page.error_only_in_sandbox": "Acest mesaj apare doar în sandbox.",
  "error_page.error_message_stripe_missing_required_permission": "Achiziția a eșuat deoarece aplicației Stripe îi lipsește o permisiune necesară. În producție, achizițiile vor funcționa fără taxe aplicate.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax nu este activ",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Adresă de origine fiscală Stripe nevalidă",
  "apple_pay.free_trial": "Perioadă de probă gratuită",
  "product_info.price_after_intro_price": "După {{introPriceDuration}}, pe {{renewalDate}}",
  "product_info.after_trial": "după perioada de probă",
  "product_info.after": "după",
  "product_info.intro_price_phase_after_trial": "Apoi {{introPriceDuration}} pentru {{introPrice}}",
  "product_info.intro_price_phase": "Mai întâi {{introPriceDuration}} pentru {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "plătit o singură dată",
  "payment_entry_page.trial_subscription_terms_info": "După ce perioada de probă se termină, veți fi taxat cu {{price}} {{perFrequency}} începând cu {{renewalDate}}. Puteți anula oricând înainte de această dată.",
  "payment_entry_page.subscription_info": "Abonamentul se reînnoiește automat. Anulați oricând.",
  "payment_entry_page.otp_terms_info": "Prin achiziționarea, sunteți de acord să permiteți {{appName}} să vă taxeze conform termenilor săi.",
  "payment_entry_page.terms_link_label": "Termeni",
  "payment_entry_page.subscription_terms_info": "Prin abonare, sunteți de acord să permiteți {{appName}} să vă taxeze conform termenilor săi până la anulare.",
  "loading_page.keep_page_open": "Procesul este aproape finalizat. Păstrați această pagină deschisă.",
  "loading_page.processing_payment": "Se procesează plata",
  "pricing_table.discount": "Reducere",
  "pricing_table.subtotal": "Subtotal",
  "pricing_dropdown.add_promo_code": "Adaugă cod promoțional",
  "discount_input.label": "Cod promoțional",
  "payment_entry_page.checkout_consent_terms_of_service": "condițiile de utilizare",
  "payment_entry_page.checkout_consent_agreement": "Sunt de acord cu {{termsOfService}} ale {{appName}}."
}, rh = {
  "periods.week": "{{amount}} неделя",
  "periods.month": "{{amount}} месяц",
  "periods.year": "{{amount}} год",
  "periods.day": "{{amount}} день",
  "periods.weekShort": "{{amount}}нед",
  "periods.monthShort": "{{amount}}мес",
  "periods.yearShort": "{{amount}}г",
  "periods.dayShort": "{{amount}}д",
  "periods.lifetime": "пожизненно",
  "periods.weekPlural": "{{amount}} недель",
  "periods.monthPlural": "{{amount}} месяцев",
  "periods.yearPlural": "{{amount}} лет",
  "periods.dayPlural": "{{amount}} дней",
  "periods.weekFrequency": "еженедельно",
  "periods.monthFrequency": "ежемесячно",
  "periods.yearFrequency": "ежегодно",
  "periods.dayFrequency": "ежедневно",
  "periods.perWeekFrequency": "в неделю",
  "periods.perMonthFrequency": "в месяц",
  "periods.perYearFrequency": "в год",
  "periods.perDayFrequency": "в день",
  "periods.unknownFrequency": "неизвестно",
  "periods.weekFrequencyPlural": "каждые {{amount}} недель",
  "periods.monthFrequencyPlural": "каждые {{amount}} месяцев",
  "periods.yearFrequencyPlural": "каждые {{amount}} лет",
  "periods.dayFrequencyPlural": "каждые {{amount}} дней",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} бесплатная пробная версия",
  "product_info.price_after_free_trial": "После окончания пробного периода, {{renewalDate}}",
  "product_info.renewal_frequency": "Продлевается {{frequency}}",
  "product_info.continues_until_cancelled": "Продолжается до отмены",
  "product_info.cancel_anytime": "Отменить в любое время",
  "payment_entry_page.payment_step_title": "Безопасная оплата через RevenueCat",
  "payment_entry_page.button_pay": "Оплатить сейчас",
  "payment_entry_page.button_start_trial": "Начать пробный период",
  "success_page.purchase_successful": "Оплата завершена",
  "success_page.button_close": "Продолжить",
  "error_page.if_error_persists": "Если ошибка сохраняется, пожалуйста, свяжитесь с ",
  "error_page.error_title_already_subscribed": "Вы уже подписаны на {{productTitle}}",
  "error_page.error_title_already_purchased": "Вы уже приобрели {{productTitle}}",
  "error_page.error_title_other_errors": "Что-то пошло не так",
  "error_page.error_message_already_subscribed": "Вы не можете подписаться на этот продукт повторно.",
  "error_page.error_message_already_purchased": "Вы не можете приобрести этот продукт повторно.",
  "error_page.error_message_missing_email_error": "Для завершения покупки необходим адрес электронной почты.",
  "error_page.error_message_network_error": "Ошибка сети. Проверьте ваше интернет-соединение.",
  "error_page.error_message_error_charging_payment": "Оплата не прошла.",
  "error_page.error_message_error_setting_up_purchase": "Покупка не была начата из-за ошибки (код ошибки: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Мы не смогли проверить ваш платежный адрес. Пожалуйста, проверьте, что почтовый индекс и страна указаны правильно.",
  "error_page.error_message_unknown_error": "Произошла неизвестная ошибка (код ошибки: {{errorCode}}).",
  "error_page.button_try_again": "Повторить попытку",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Всего к оплате сегодня",
  "product_info.subscribe_to": "Подписаться",
  "navbar_header.details": "Детали",
  "navbar_header.back_button": "Назад",
  "pricing_dropdown.show_details": "Показать детали",
  "pricing_dropdown.hide_details": "Скрыть детали",
  "pricing_table.tax": "Налог",
  "pricing_table.trial_ends": "После окончания пробного периода, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Итого к оплате сегодня",
  "pricing_table.total_excluding_tax": "Итого без учета налога",
  "pricing_table.enter_billing_address_to_calculate": "Введите платежный адрес для расчета",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Введите штат или почтовый индекс для расчета",
  "pricing_table.enter_postal_code_to_calculate": "Введите почтовый индекс для расчета",
  "error_page.error_message_invalid_email_error": "Не удалось проверить адрес электронной почты {{email}}. Пожалуйста, укажите действительный адрес электронной почты.",
  "payment_entry_page.button_payment_method": "Оплатить {{formattedPrice}} через {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Оплатить {{formattedPrice}}",
  "price_update.title": "Обновление цены",
  "price_update.base_message": "Общая цена была обновлена с учетом налога на основе вашего платежного адреса. Пожалуйста, проверьте и повторите попытку. С вашей карты будет списано только один раз.",
  "price_update.trial_message": "Цена подписки была обновлена с учетом налогов на основе вашего платежного адреса. Пробный период остается бесплатным. Пожалуйста, проверьте и попробуйте снова.",
  "payment_entry_page.express_checkout_divider": "ИЛИ ОПЛАТИТЕ КАРТОЙ",
  "error_page.trouble_accessing": "Если у вас возникли проблемы с доступом к вашей покупке, обратитесь в службу поддержки по адресу ",
  "error_page.close_button_title": "Перейти в {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Отсутствует разрешение Stripe",
  "error_page.button_close": "Закрыть",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Покупка не удалась, так как адрес отправления налога недействителен. В рабочей среде покупки будут работать без применения налогов.",
  "error_page.error_message_stripe_tax_not_active": "Покупка не удалась, так как Stripe Tax не включен. В рабочей среде покупки будут работать без применения налогов.",
  "error_page.error_only_in_sandbox": "Это сообщение появляется только в песочнице.",
  "error_page.error_message_stripe_missing_required_permission": "Покупка не удалась, так как у приложения Stripe отсутствует необходимое разрешение. В рабочей среде покупки будут работать без применения налогов.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax не активен",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Недействительный адрес отправления налога",
  "apple_pay.free_trial": "Бесплатная пробная версия",
  "product_info.price_after_intro_price": "После {{introPriceDuration}}, {{renewalDate}}",
  "product_info.after_trial": "после пробного периода",
  "product_info.after": "после",
  "product_info.intro_price_phase_after_trial": "Затем {{introPriceDuration}} за {{introPrice}}",
  "product_info.intro_price_phase": "Сначала {{introPriceDuration}} за {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "единоразовый платеж",
  "payment_entry_page.trial_subscription_terms_info": "По окончании пробного периода с вас будет взиматься плата в размере {{price}} {{perFrequency}}, начиная с {{renewalDate}}. Вы можете отменить подписку в любое время до этой даты.",
  "payment_entry_page.subscription_info": "Подписка продлевается автоматически. Отменить можно в любое время.",
  "payment_entry_page.otp_terms_info": "Совершая покупку, вы соглашаетесь с тем, что {{appName}} будет взимать с вас плату в соответствии со своими условиями.",
  "payment_entry_page.terms_link_label": "Условия",
  "payment_entry_page.subscription_terms_info": "Подписываясь, вы соглашаетесь с тем, что {{appName}} будет взимать с вас плату в соответствии с их условиями до тех пор, пока вы не отмените подписку.",
  "loading_page.keep_page_open": "Процесс почти завершен. Не закрывайте эту страницу.",
  "loading_page.processing_payment": "Обработка платежа",
  "pricing_table.discount": "Скидка",
  "pricing_table.subtotal": "Итого",
  "pricing_dropdown.add_promo_code": "Добавить промокод",
  "discount_input.label": "Промокод",
  "payment_entry_page.checkout_consent_terms_of_service": "условиями обслуживания",
  "payment_entry_page.checkout_consent_agreement": "Я согласен с {{appName}} {{termsOfService}}."
}, th = {
  "periods.week": "{{amount}} týždeň",
  "periods.month": "{{amount}} mesiac",
  "periods.year": "{{amount}} rok",
  "periods.day": "{{amount}} deň",
  "periods.weekShort": "{{amount}}týž",
  "periods.monthShort": "{{amount}}mes",
  "periods.yearShort": "{{amount}}rok",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "doživotne",
  "periods.weekPlural": "{{amount}} týždňov",
  "periods.monthPlural": "{{amount}} mesiacov",
  "periods.yearPlural": "{{amount}} rokov",
  "periods.dayPlural": "{{amount}} dní",
  "periods.weekFrequency": "týždenne",
  "periods.monthFrequency": "mesačne",
  "periods.yearFrequency": "ročne",
  "periods.dayFrequency": "denne",
  "periods.perWeekFrequency": "týždenne",
  "periods.perMonthFrequency": "mesačne",
  "periods.perYearFrequency": "ročne",
  "periods.perDayFrequency": "denne",
  "periods.unknownFrequency": "neznáme",
  "periods.weekFrequencyPlural": "každých {{amount}} týždňov",
  "periods.monthFrequencyPlural": "každých {{amount}} mesiacov",
  "periods.yearFrequencyPlural": "každých {{amount}} rokov",
  "periods.dayFrequencyPlural": "každých {{amount}} dní",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} bezplatné skúšobné obdobie",
  "product_info.price_after_free_trial": "Po skončení skúšobného obdobia, dňa {{renewalDate}}",
  "product_info.renewal_frequency": "Obnovuje sa {{frequency}}",
  "product_info.continues_until_cancelled": "Pokračuje, kým sa nezruší",
  "product_info.cancel_anytime": "Kedykoľvek zrušiť",
  "payment_entry_page.payment_step_title": "Bezpečný nákup prostredníctvom RevenueCat",
  "payment_entry_page.button_pay": "Zaplatiť teraz",
  "payment_entry_page.button_start_trial": "Spustiť skúšobné obdobie",
  "success_page.purchase_successful": "Platba dokončená",
  "success_page.button_close": "Pokračovať",
  "error_page.if_error_persists": "Ak chyba pretrváva, kontaktujte ",
  "error_page.error_title_already_subscribed": "Už ste si predplatili {{productTitle}}",
  "error_page.error_title_already_purchased": "Už ste si zakúpili {{productTitle}}",
  "error_page.error_title_other_errors": "Niečo sa pokazilo",
  "error_page.error_message_already_subscribed": "Na tento produkt sa nemôžete znova prihlásiť na odber.",
  "error_page.error_message_already_purchased": "Tento produkt si nemôžete znova zakúpiť.",
  "error_page.error_message_missing_email_error": "Na dokončenie nákupu je potrebný e-mail.",
  "error_page.error_message_network_error": "Chyba siete. Skontrolujte svoje internetové pripojenie.",
  "error_page.error_message_error_charging_payment": "Platba zlyhala.",
  "error_page.error_message_error_setting_up_purchase": "Nákup sa nespustil kvôli chybe (kód chyby: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Nepodarilo sa nám overiť vašu fakturačnú adresu. Skontrolujte, prosím, či je PSČ a krajina správne.",
  "error_page.error_message_unknown_error": "Vyskytla sa neznáma chyba (kód chyby: {{errorCode}}).",
  "error_page.button_try_again": "Skúsiť znova",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Celková suma splatná dnes",
  "product_info.subscribe_to": "Prihlásiť sa na odber",
  "navbar_header.details": "Podrobnosti",
  "navbar_header.back_button": "Späť",
  "pricing_dropdown.show_details": "Zobraziť podrobnosti",
  "pricing_dropdown.hide_details": "Skryť podrobnosti",
  "pricing_table.tax": "Daň",
  "pricing_table.trial_ends": "Po skončení skúšobnej verzie, dňa {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Celková suma splatná dnes",
  "pricing_table.total_excluding_tax": "Celkom bez dane",
  "pricing_table.enter_billing_address_to_calculate": "Zadajte fakturačnú adresu pre výpočet",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Zadajte štát alebo PSČ pre výpočet",
  "pricing_table.enter_postal_code_to_calculate": "Zadajte PSČ pre výpočet",
  "error_page.error_message_invalid_email_error": "E-mailová adresa {{email}} sa nedala overiť. Zadajte platnú e-mailovú adresu.",
  "payment_entry_page.button_payment_method": "Zaplatiť sumu {{formattedPrice}} pomocou {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Zaplatiť {{formattedPrice}}",
  "price_update.title": "Aktualizácia ceny",
  "price_update.base_message": "Celková cena bola aktualizovaná o daň na základe vašej fakturačnej adresy. Skontrolujte to a skúste znova. Vaša karta bude zaťažená iba raz.",
  "price_update.trial_message": "Cena predplatného bola aktualizovaná o daňe na základe vašej fakturačnej adresy. Bezplatná skúšobná doba stále platí. Prosím, skontrolujte a skúste znova.",
  "payment_entry_page.express_checkout_divider": "ALEBO ZAPLATIŤ KARTOU",
  "error_page.trouble_accessing": "Ak máte problémy s prístupom k svojmu nákupu, kontaktujte podporu na ",
  "error_page.close_button_title": "Prejsť na {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Chýbajúce povolenie Stripe",
  "error_page.button_close": "Zavrieť",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Nákup sa nepodaril, pretože adresa pôvodu dane je neplatná. V produkčnom prostredí budú nákupy fungovať bez uplatnenia daní.",
  "error_page.error_message_stripe_tax_not_active": "Nákup sa nepodaril, pretože Stripe Tax nie je povolený. V produkčnom prostredí budú nákupy fungovať bez uplatnenia daní.",
  "error_page.error_only_in_sandbox": "Táto správa sa zobrazuje iba v testovacom prostredí (sandbox).",
  "error_page.error_message_stripe_missing_required_permission": "Nákup sa nepodaril, pretože aplikácii Stripe chýba požadované povolenie. V produkčnom prostredí budú nákupy fungovať bez uplatnenia daní.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax nie je aktívny",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Neplatná adresa pôvodu dane",
  "apple_pay.free_trial": "Skúšobná verzia zdarma",
  "product_info.price_after_intro_price": "Po {{introPriceDuration}}, dňa {{renewalDate}}",
  "product_info.after_trial": "po skúšobnej dobe",
  "product_info.after": "po",
  "product_info.intro_price_phase_after_trial": "Potom {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase": "Najprv {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "zaplatené jednorazovo",
  "payment_entry_page.trial_subscription_terms_info": "Po skončení skúšobného obdobia vám bude účtovaná suma {{price}} {{perFrequency}} počnúc dňom {{renewalDate}}. Pred týmto dátumom môžete kedykoľvek zrušiť.",
  "payment_entry_page.subscription_info": "Predplatné sa automaticky obnovuje. Zrušiť môžete kedykoľvek.",
  "payment_entry_page.otp_terms_info": "Zakúpením súhlasíte s tým, že spoločnosti {{appName}} umožníte účtovať vám poplatky v súlade s jej podmienkami.",
  "payment_entry_page.terms_link_label": "Podmienky",
  "payment_entry_page.subscription_terms_info": "Prihlásením na odber súhlasíte s tým, že spoločnosť {{appName}} vám bude účtovať poplatky podľa svojich podmienok, až kým odber nezrušíte.",
  "loading_page.keep_page_open": "Proces sa takmer dokončil. Nechajte túto stránku otvorenú.",
  "loading_page.processing_payment": "Spracováva sa platba",
  "pricing_table.discount": "Zľava",
  "pricing_table.subtotal": "Medzisúčet",
  "pricing_dropdown.add_promo_code": "Pridať promo kód",
  "discount_input.label": "Propagačný kód",
  "payment_entry_page.checkout_consent_terms_of_service": "podmienkami používania",
  "payment_entry_page.checkout_consent_agreement": "Súhlasím s {{appName}} {{termsOfService}}."
}, nh = {
  "periods.week": "{{amount}} teden",
  "periods.month": "{{amount}} mesec",
  "periods.year": "{{amount}} leto",
  "periods.day": "{{amount}} dan",
  "periods.weekShort": "{{amount}}ted",
  "periods.monthShort": "{{amount}}mes",
  "periods.yearShort": "{{amount}}l",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "doživljenjsko",
  "periods.weekPlural": "{{amount}} tednov",
  "periods.monthPlural": "{{amount}} mesecev",
  "periods.yearPlural": "{{amount}} let",
  "periods.dayPlural": "{{amount}} dni",
  "periods.weekFrequency": "tedensko",
  "periods.monthFrequency": "mesečno",
  "periods.yearFrequency": "letno",
  "periods.dayFrequency": "dnevno",
  "periods.perWeekFrequency": "na teden",
  "periods.perMonthFrequency": "na mesec",
  "periods.perYearFrequency": "na leto",
  "periods.perDayFrequency": "na dan",
  "periods.unknownFrequency": "neznano",
  "periods.weekFrequencyPlural": "vsakih {{amount}} tednov",
  "periods.monthFrequencyPlural": "vsakih {{amount}} mesecev",
  "periods.yearFrequencyPlural": "vsakih {{amount}} let",
  "periods.dayFrequencyPlural": "vsakih {{amount}} dni",
  "product_info.subscribe_to": "Naročite se na",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "Brezplačno preizkusite za {{trialDuration}}",
  "product_info.price_after_free_trial": "Po koncu preizkusa, dne {{renewalDate}}",
  "product_info.intro_price_phase_after_trial": "Nato {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase": "Prvih {{introPriceDuration}} za {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "plačano enkrat",
  "product_info.price_after_intro_price": "Po {{introPriceDuration}}, dne {{renewalDate}}",
  "product_info.after_trial": "po preizkusu",
  "product_info.after": "po",
  "product_info.total_due_today": "Skupaj za plačilo danes",
  "product_info.renewal_frequency": "Se obnovi {{frequency}}",
  "product_info.continues_until_cancelled": "Traja do preklica",
  "product_info.cancel_anytime": "Prekličete lahko kadar koli",
  "payment_entry_page.payment_step_title": "Varno plačilo prek RevenueCat",
  "payment_entry_page.trial_subscription_terms_info": "Po koncu preizkusnega obdobja vam bo zaračunano {{price}} {{perFrequency}} z začetkom {{renewalDate}}. Prekličete lahko kadar koli pred tem datumom.",
  "payment_entry_page.subscription_terms_info": "Z naročnino se strinjate, da vam {{appName}} zaračunava v skladu s svojimi pogoji, dokler ne prekličete.",
  "payment_entry_page.otp_terms_info": "Z nakupom se strinjate, da vam {{appName}} zaračuna v skladu s svojimi pogoji.",
  "payment_entry_page.terms_link_label": "Pogoji",
  "payment_entry_page.subscription_info": "Naročnina se samodejno obnavlja. Prekličete lahko kadar koli.",
  "payment_entry_page.button_pay": "Plačaj zdaj",
  "payment_entry_page.button_start_trial": "Začni preizkus",
  "payment_entry_page.button_with_price": "Plačaj {{formattedPrice}}",
  "payment_entry_page.button_payment_method": "Plačaj {{formattedPrice}} z {{paymentMethod}}",
  "payment_entry_page.express_checkout_divider": "ALI PLAČAJTE S KARTICO",
  "loading_page.processing_payment": "Obdelava plačila",
  "loading_page.keep_page_open": "Postopek je skoraj končan. Pustite to stran odprto.",
  "success_page.purchase_successful": "Plačilo zaključeno",
  "success_page.button_close": "Nadaljuj",
  "error_page.close_button_title": "Pojdi na {{appName}}",
  "error_page.if_error_persists": "Če težava ne izgine, se obrnite na ",
  "error_page.trouble_accessing": "Če imate težave z dostopom do svojega nakupa, se obrnite na podporo na ",
  "error_page.error_title_already_subscribed": "Na {{productTitle}} ste že naročeni",
  "error_page.error_title_already_purchased": "{{productTitle}} ste že kupili",
  "error_page.error_title_other_errors": "Nekaj je šlo narobe",
  "error_page.error_message_already_subscribed": "Na ta izdelek se ne morete ponovno naročiti.",
  "error_page.error_message_already_purchased": "Tega izdelka ne morete ponovno kupiti.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax ni aktiven",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Neveljaven izvorni naslov za davek",
  "error_page.error_title_stripe_missing_required_permission": "Manjka dovoljenje Stripe",
  "error_page.error_message_missing_email_error": "Za dokončanje nakupa je potrebna e-pošta.",
  "error_page.error_message_invalid_email_error": "E-poštnega naslova {{email}} ni bilo mogoče preveriti. Vnesite veljaven e-poštni naslov.",
  "error_page.error_message_network_error": "Napaka omrežja. Preverite svojo internetno povezavo.",
  "error_page.error_message_error_charging_payment": "Plačilo ni uspelo.",
  "error_page.error_message_error_setting_up_purchase": "Nakup se ni začel zaradi napake (koda napake: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Vašega naslova za obračun nismo mogli preveriti. Preverite, ali sta poštna številka in država pravilni.",
  "error_page.error_message_unknown_error": "Prišlo je do neznane napake (koda napake: {{errorCode}}).",
  "error_page.error_message_stripe_tax_not_active": "Nakup ni uspel, ker Stripe Tax ni omogočen. V produkciji bodo nakupi delovali brez obračunanih davkov.",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Nakup ni uspel, ker je izvorni naslov za davek neveljaven. V produkciji bodo nakupi delovali brez obračunanih davkov.",
  "error_page.error_message_stripe_missing_required_permission": "Nakup ni uspel, ker aplikaciji Stripe manjka zahtevano dovoljenje. V produkciji bodo nakupi delovali brez obračunanih davkov.",
  "error_page.error_only_in_sandbox": "To sporočilo se prikaže samo v peskovniku (sandbox).",
  "error_page.button_try_again": "Poskusi znova",
  "error_page.button_close": "Zapri",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "pricing_dropdown.show_details": "Prikaži podrobnosti",
  "pricing_dropdown.hide_details": "Skrij podrobnosti",
  "pricing_dropdown.add_promo_code": "Dodaj promocijsko kodo",
  "discount_input.label": "Promocijska koda",
  "pricing_table.trial_ends": "Po koncu preizkusa, dne {{formattedTrialEndDate}}",
  "pricing_table.total_excluding_tax": "Skupaj brez davka",
  "pricing_table.total_due_today": "Skupaj za plačilo danes",
  "pricing_table.subtotal": "Vmesni seštevek",
  "pricing_table.discount": "Popust",
  "pricing_table.tax": "Davek",
  "pricing_table.enter_billing_address_to_calculate": "Vnesite naslov za obračun za izračun",
  "pricing_table.enter_postal_code_to_calculate": "Vnesite poštno številko za izračun",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Vnesite regijo ali poštno številko za izračun",
  "navbar_header.details": "Podrobnosti",
  "navbar_header.back_button": "Nazaj",
  "price_update.title": "Posodobitev cene",
  "price_update.base_message": "Skupna cena je bila posodobljena z davkom glede na vaš naslov za obračun. Preglejte in poskusite znova. Vaša kartica bo bremenjena samo enkrat.",
  "price_update.trial_message": "Cena naročnine je bila posodobljena, da vključuje davek glede na vaš naslov za obračun. Brezplačni preizkus še vedno velja. Preglejte in poskusite znova.",
  "apple_pay.free_trial": "Brezplačni preizkus",
  "payment_entry_page.checkout_consent_terms_of_service": "pogoji storitve",
  "payment_entry_page.checkout_consent_agreement": "Strinjam se s/z {{appName}} {{termsOfService}}."
}, ah = {
  "periods.week": "{{amount}} vecka",
  "periods.month": "{{amount}} månad",
  "periods.year": "{{amount}} år",
  "periods.day": "{{amount}} dag",
  "periods.weekShort": "{{amount}}v",
  "periods.monthShort": "{{amount}}mån",
  "periods.yearShort": "{{amount}}år",
  "periods.dayShort": "{{amount}}d",
  "periods.lifetime": "livstid",
  "periods.weekPlural": "{{amount}} veckor",
  "periods.monthPlural": "{{amount}} månader",
  "periods.yearPlural": "{{amount}} år",
  "periods.dayPlural": "{{amount}} dagar",
  "periods.weekFrequency": "veckovis",
  "periods.monthFrequency": "månadsvis",
  "periods.yearFrequency": "årligen",
  "periods.dayFrequency": "dagligen",
  "periods.perWeekFrequency": "per vecka",
  "periods.perMonthFrequency": "per månad",
  "periods.perYearFrequency": "per år",
  "periods.perDayFrequency": "per dag",
  "periods.unknownFrequency": "okänd",
  "periods.weekFrequencyPlural": "varje {{amount}} veckor",
  "periods.monthFrequencyPlural": "varje {{amount}} månader",
  "periods.yearFrequencyPlural": "varje {{amount}} år",
  "periods.dayFrequencyPlural": "varje {{amount}} dagar",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} gratis provperiod",
  "product_info.price_after_free_trial": "Efter provperioden slutar, den {{renewalDate}}",
  "product_info.renewal_frequency": "Förnyas {{frequency}}",
  "product_info.continues_until_cancelled": "Gäller tills avbokad",
  "product_info.cancel_anytime": "Avboka när som helst",
  "payment_entry_page.payment_step_title": "Säker betalning via RevenueCat",
  "payment_entry_page.button_pay": "Betala nu",
  "payment_entry_page.button_start_trial": "Starta provperiod",
  "success_page.purchase_successful": "Betalningen är klar",
  "success_page.button_close": "Fortsätt",
  "error_page.if_error_persists": "Om felet kvarstår, vänligen kontakta ",
  "error_page.error_title_already_subscribed": "Du prenumererar redan på {{productTitle}}",
  "error_page.error_title_already_purchased": "Du har redan köpt {{productTitle}}",
  "error_page.error_title_other_errors": "Något gick fel",
  "error_page.error_message_already_subscribed": "Du kan inte prenumerera på den här produkten igen.",
  "error_page.error_message_already_purchased": "Du kan inte köpa den här produkten igen.",
  "error_page.error_message_missing_email_error": "E-post krävs för att slutföra köpet.",
  "error_page.error_message_network_error": "Nätverksfel. Kontrollera din internetanslutning.",
  "error_page.error_message_error_charging_payment": "Betalningen misslyckades.",
  "error_page.error_message_error_setting_up_purchase": "Köp kunde inte startas på grund av ett fel (felkod: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Vi kunde inte verifiera din faktureringsadress. Kontrollera att postnummer och land är korrekta.",
  "error_page.error_message_unknown_error": "Ett okänt fel inträffade (felkod: {{errorCode}}).",
  "error_page.button_try_again": "Försök igen",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}} ({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Totalt att betala idag",
  "product_info.subscribe_to": "Prenumerera på",
  "navbar_header.details": "Detaljer",
  "navbar_header.back_button": "Tillbaka",
  "pricing_dropdown.show_details": "Visa detaljer",
  "pricing_dropdown.hide_details": "Dölj detaljer",
  "pricing_table.tax": "Moms",
  "pricing_table.trial_ends": "Efter provperiodens slut, den {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Total summa att betala idag",
  "pricing_table.total_excluding_tax": "Totalt exklusive moms",
  "pricing_table.enter_billing_address_to_calculate": "Ange faktureringsadress för att beräkna",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Ange delstat eller postnummer för att beräkna",
  "pricing_table.enter_postal_code_to_calculate": "Ange postnummer för att beräkna",
  "error_page.error_message_invalid_email_error": "E-postadressen {{email}} kunde inte verifieras. Ange en giltig e-postadress.",
  "payment_entry_page.button_payment_method": "Betala {{formattedPrice}} med {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Betala {{formattedPrice}}",
  "price_update.title": "Prisuppdatering",
  "price_update.base_message": "Det totala priset har uppdaterats med moms baserat på din faktureringsadress. Granska och försök igen. Ditt kort kommer endast att debiteras en gång.",
  "price_update.trial_message": "Prenumerationspriset har uppdaterats för att inkludera skatter baserat på din fakturaadress. Den kostnadsfria provperioden gäller fortfarande. Kontrollera och försök igen.",
  "payment_entry_page.express_checkout_divider": "ELLER BETALA MED KORT",
  "error_page.trouble_accessing": "Om du har problem med att komma åt ditt köp, kontakta support på ",
  "error_page.close_button_title": "Gå till {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Saknar Stripe-behörighet",
  "error_page.button_close": "Stäng",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Köpet misslyckades eftersom skatteursprungsadressen är ogiltig. I produktion kommer köp att fungera utan att skatter tillämpas.",
  "error_page.error_message_stripe_tax_not_active": "Köpet misslyckades eftersom Stripe Tax inte är aktiverat. I produktion kommer köp att fungera utan att skatter tillämpas.",
  "error_page.error_only_in_sandbox": "Det här meddelandet visas bara i sandlådan.",
  "error_page.error_message_stripe_missing_required_permission": "Köpet misslyckades eftersom Stripe-appen saknar en nödvändig behörighet. I produktion kommer köp att fungera utan att skatter tillämpas.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax är inte aktivt",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Ogiltig skatteursprungsadress",
  "apple_pay.free_trial": "Gratis provperiod",
  "product_info.price_after_intro_price": "Efter {{introPriceDuration}}, den {{renewalDate}}",
  "product_info.after_trial": "efter provperioden",
  "product_info.after": "efter",
  "product_info.intro_price_phase_after_trial": "Sedan {{introPriceDuration}} för {{introPrice}}",
  "product_info.intro_price_phase": "Först {{introPriceDuration}} för {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "betalas en gång",
  "payment_entry_page.trial_subscription_terms_info": "Efter att din provperiod slutar debiteras du {{price}} {{perFrequency}} från och med {{renewalDate}}. Du kan avbryta när som helst före detta datum.",
  "payment_entry_page.subscription_info": "Prenumerationen förnyas automatiskt. Avbryt när som helst.",
  "payment_entry_page.otp_terms_info": "Genom att köpa godkänner du att {{appName}} debiterar dig i enlighet med deras villkor.",
  "payment_entry_page.terms_link_label": "Villkor",
  "payment_entry_page.subscription_terms_info": "Genom att prenumerera godkänner du att {{appName}} debiterar dig i enlighet med deras villkor tills du avbryter.",
  "loading_page.keep_page_open": "Processen är nästan klar. Håll den här sidan öppen.",
  "loading_page.processing_payment": "Behandlar betalning",
  "pricing_table.discount": "Rabatt",
  "pricing_table.subtotal": "Delsumma",
  "pricing_dropdown.add_promo_code": "Lägg till kampanjkod",
  "discount_input.label": "Kampanjkod",
  "payment_entry_page.checkout_consent_terms_of_service": "användarvillkor",
  "payment_entry_page.checkout_consent_agreement": "Jag godkänner {{appName}} {{termsOfService}}."
}, oh = {
  "periods.week": "{{amount}} สัปดาห์",
  "periods.month": "{{amount}} เดือน",
  "periods.year": "{{amount}} ปี",
  "periods.day": "{{amount}} วัน",
  "periods.weekShort": "{{amount}} สัปดาห์",
  "periods.monthShort": "{{amount}} เดือน",
  "periods.yearShort": "{{amount}} ปี",
  "periods.dayShort": "{{amount}} วัน",
  "periods.lifetime": "ตลอดชีพ",
  "periods.weekPlural": "{{amount}} สัปดาห์",
  "periods.monthPlural": "{{amount}} เดือน",
  "periods.yearPlural": "{{amount}} ปี",
  "periods.dayPlural": "{{amount}} วัน",
  "periods.weekFrequency": "รายสัปดาห์",
  "periods.monthFrequency": "รายเดือน",
  "periods.yearFrequency": "รายปี",
  "periods.dayFrequency": "รายวัน",
  "periods.perWeekFrequency": "ต่อสัปดาห์",
  "periods.perMonthFrequency": "ต่อเดือน",
  "periods.perYearFrequency": "ต่อปี",
  "periods.perDayFrequency": "ต่อวัน",
  "periods.unknownFrequency": "ไม่รู้จัก",
  "periods.weekFrequencyPlural": "ทุกๆ {{amount}} สัปดาห์",
  "periods.monthFrequencyPlural": "ทุกๆ {{amount}} เดือน",
  "periods.yearFrequencyPlural": "ทุกๆ {{amount}} ปี",
  "periods.dayFrequencyPlural": "ทุกๆ {{amount}} วัน",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} ทดลองใช้ฟรี",
  "product_info.price_after_free_trial": "หลังจากสิ้นสุดการทดลองใช้ ในวันที่ {{renewalDate}}",
  "product_info.renewal_frequency": "ต่ออายุ {{frequency}}",
  "product_info.continues_until_cancelled": "ต่อเนื่องจนกว่าจะยกเลิก",
  "product_info.cancel_anytime": "ยกเลิกได้ตลอดเวลา",
  "payment_entry_page.payment_step_title": "การชำระเงินอย่างปลอดภัยโดย RevenueCat",
  "payment_entry_page.button_pay": "ชำระเงินตอนนี้",
  "payment_entry_page.button_start_trial": "เริ่มทดลองใช้",
  "success_page.purchase_successful": "การชำระเงินเสร็จสมบูรณ์",
  "success_page.button_close": "ดำเนินการต่อ",
  "error_page.if_error_persists": "หากข้อผิดพลาดยังคงอยู่ โปรดติดต่อ ",
  "error_page.error_title_already_subscribed": "คุณได้สมัครสมาชิก {{productTitle}} แล้ว",
  "error_page.error_title_already_purchased": "คุณได้ซื้อ {{productTitle}} แล้ว",
  "error_page.error_title_other_errors": "มีบางอย่างผิดพลาด",
  "error_page.error_message_already_subscribed": "คุณไม่สามารถสมัครสมาชิกผลิตภัณฑ์นี้ได้อีก",
  "error_page.error_message_already_purchased": "คุณไม่สามารถซื้อผลิตภัณฑ์นี้ได้อีก",
  "error_page.error_message_missing_email_error": "ต้องใช้อีเมลเพื่อทำการซื้อให้เสร็จสมบูรณ์",
  "error_page.error_message_network_error": "ข้อผิดพลาดของเครือข่าย โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ตของคุณ",
  "error_page.error_message_error_charging_payment": "การชำระเงินล้มเหลว",
  "error_page.error_message_error_setting_up_purchase": "ไม่สามารถเริ่มการซื้อได้เนื่องจากข้อผิดพลาด (รหัสข้อผิดพลาด: {{errorCode}})",
  "error_page.error_message_invalid_tax_location": "เราไม่สามารถยืนยันที่อยู่สำหรับออกใบแจ้งหนี้ของคุณได้ กรุณาตรวจสอบรหัสไปรษณีย์และประเทศให้ถูกต้อง",
  "error_page.error_message_unknown_error": "เกิดข้อผิดพลาดที่ไม่รู้จัก (รหัสข้อผิดพลาด: {{errorCode}})",
  "error_page.button_try_again": "ลองอีกครั้ง",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "ยอดรวมที่ต้องชำระวันนี้",
  "product_info.subscribe_to": "สมัครสมาชิก",
  "navbar_header.details": "รายละเอียด",
  "navbar_header.back_button": "ย้อนกลับ",
  "pricing_dropdown.show_details": "แสดงรายละเอียด",
  "pricing_dropdown.hide_details": "ซ่อนรายละเอียด",
  "pricing_table.tax": "ภาษี",
  "pricing_table.trial_ends": "หลังจากช่วงทดลองใช้สิ้นสุด ในวันที่ {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "ยอดรวมที่ต้องชำระวันนี้",
  "pricing_table.total_excluding_tax": "ราคารวมก่อนภาษี",
  "pricing_table.enter_billing_address_to_calculate": "กรุณากรอกที่อยู่สำหรับเรียกเก็บเงินเพื่อคำนวณ",
  "pricing_table.enter_state_or_postal_code_to_calculate": "ใส่รัฐหรือรหัสไปรษณีย์เพื่อคำนวณ",
  "pricing_table.enter_postal_code_to_calculate": "ใส่รหัสไปรษณีย์เพื่อคำนวณ",
  "error_page.error_message_invalid_email_error": "ไม่สามารถยืนยันที่อยู่อีเมล {{email}} ได้ โปรดระบุที่อยู่อีเมลที่ถูกต้อง",
  "payment_entry_page.button_payment_method": "ชำระเงิน {{formattedPrice}} ด้วย {{paymentMethod}}",
  "payment_entry_page.button_with_price": "ชำระเงิน {{formattedPrice}}",
  "price_update.title": "อัปเดตราคา",
  "price_update.base_message": "ราคารวมได้รับการอัปเดตพร้อมภาษีตามที่อยู่สำหรับการเรียกเก็บเงินของคุณ โปรดตรวจสอบและลองอีกครั้ง บัตรของคุณจะถูกเรียกเก็บเงินเพียงครั้งเดียวเท่านั้น",
  "price_update.trial_message": "ราคาการสมัครสมาชิกได้รับการอัปเดตเพื่อรวมภาษีตามที่อยู่สำหรับการเรียกเก็บเงินของคุณ ระยะเวลาทดลองใช้ฟรียังคงมีผล โปรดตรวจสอบและลองอีกครั้ง",
  "payment_entry_page.express_checkout_divider": "หรือชำระด้วยบัตร",
  "error_page.trouble_accessing": "หากคุณมีปัญหาในการเข้าถึงการซื้อ โปรดติดต่อฝ่ายสนับสนุนที่ ",
  "error_page.close_button_title": "ไปที่ {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "ขาดสิทธิ์ Stripe ที่จำเป็น",
  "error_page.button_close": "ปิด",
  "error_page.error_message_stripe_invalid_tax_origin_address": "การซื้อล้มเหลวเนื่องจากที่อยู่ต้นทางภาษีไม่ถูกต้อง ในสภาพแวดล้อมจริง การซื้อจะทำงานได้โดยไม่มีการเรียกเก็บภาษี",
  "error_page.error_message_stripe_tax_not_active": "การซื้อล้มเหลวเนื่องจากไม่ได้เปิดใช้งาน Stripe Tax ในสภาพแวดล้อมจริง การซื้อจะทำงานได้โดยไม่มีการเรียกเก็บภาษี",
  "error_page.error_only_in_sandbox": "ข้อความนี้จะปรากฏเฉพาะใน sandbox เท่านั้น",
  "error_page.error_message_stripe_missing_required_permission": "การซื้อล้มเหลวเนื่องจากแอป Stripe ขาดสิทธิ์ที่จำเป็น ในสภาพแวดล้อมจริง การซื้อจะทำงานได้โดยไม่มีการเรียกเก็บภาษี",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax ไม่เปิดใช้งาน",
  "error_page.error_title_stripe_invalid_tax_origin_address": "ที่อยู่ต้นทางภาษีไม่ถูกต้อง",
  "apple_pay.free_trial": "ทดลองใช้ฟรี",
  "product_info.price_after_intro_price": "หลังจาก {{introPriceDuration}} ในวันที่ {{renewalDate}}",
  "product_info.after_trial": "หลังช่วงทดลองใช้",
  "product_info.after": "หลังจาก",
  "product_info.intro_price_phase_after_trial": "จากนั้น {{introPriceDuration}} ในราคา {{introPrice}}",
  "product_info.intro_price_phase": "ช่วงแรก {{introPriceDuration}} ในราคา {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "ชำระครั้งเดียว",
  "payment_entry_page.trial_subscription_terms_info": "หลังจากช่วงทดลองใช้ของคุณสิ้นสุดลง คุณจะถูกเรียกเก็บเงิน {{price}} {{perFrequency}} เริ่มตั้งแต่วันที่ {{renewalDate}} คุณสามารถยกเลิกได้ตลอดเวลาก่อนวันดังกล่าว",
  "payment_entry_page.subscription_info": "การสมัครรับข้อมูลจะต่ออายุโดยอัตโนมัติ ยกเลิกได้ตลอดเวลา",
  "payment_entry_page.otp_terms_info": "เมื่อทำการซื้อ คุณตกลงที่จะอนุญาตให้ {{appName}} เรียกเก็บเงินจากคุณตามข้อกำหนดของพวกเขา",
  "payment_entry_page.terms_link_label": "ข้อกำหนด",
  "payment_entry_page.subscription_terms_info": "เมื่อสมัครรับข้อมูล แสดงว่าคุณยินยอมให้ {{appName}} เรียกเก็บเงินจากคุณตามข้อกำหนดจนกว่าคุณจะยกเลิก",
  "loading_page.keep_page_open": "กระบวนการเกือบเสร็จสมบูรณ์แล้ว โปรดเปิดหน้านี้ไว้",
  "loading_page.processing_payment": "กำลังดำเนินการชำระเงิน",
  "pricing_table.discount": "ส่วนลด",
  "pricing_table.subtotal": "ราคารวมย่อย",
  "pricing_dropdown.add_promo_code": "เพิ่มรหัสโปรโมชั่น",
  "discount_input.label": "รหัสโปรโมชั่น",
  "payment_entry_page.checkout_consent_terms_of_service": "ข้อกำหนดในการให้บริการ",
  "payment_entry_page.checkout_consent_agreement": "ฉันยอมรับ{{termsOfService}}ของ{{appName}}"
}, ih = {
  "periods.week": "{{amount}} hafta",
  "periods.month": "{{amount}} ay",
  "periods.year": "{{amount}} yıl",
  "periods.day": "{{amount}} gün",
  "periods.weekShort": "{{amount}}hf",
  "periods.monthShort": "{{amount}}ay",
  "periods.yearShort": "{{amount}}yl",
  "periods.dayShort": "{{amount}}g",
  "periods.lifetime": "ömür boyu",
  "periods.weekPlural": "{{amount}} hafta",
  "periods.monthPlural": "{{amount}} ay",
  "periods.yearPlural": "{{amount}} yıl",
  "periods.dayPlural": "{{amount}} gün",
  "periods.weekFrequency": "haftalık",
  "periods.monthFrequency": "aylık",
  "periods.yearFrequency": "yıllık",
  "periods.dayFrequency": "günlük",
  "periods.perWeekFrequency": "haftada",
  "periods.perMonthFrequency": "ayda",
  "periods.perYearFrequency": "yılda",
  "periods.perDayFrequency": "günde",
  "periods.unknownFrequency": "bilinmiyor",
  "periods.weekFrequencyPlural": "her {{amount}} haftada",
  "periods.monthFrequencyPlural": "her {{amount}} ayda",
  "periods.yearFrequencyPlural": "her {{amount}} yılda",
  "periods.dayFrequencyPlural": "her {{amount}} günde",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} ücretsiz deneme",
  "product_info.price_after_free_trial": "Deneme süresi sona erdiğinde, {{renewalDate}} tarihinde",
  "product_info.renewal_frequency": "{{frequency}} sıklığında yenilenir",
  "product_info.continues_until_cancelled": "İptal edilene kadar devam eder",
  "product_info.cancel_anytime": "İstediğiniz zaman iptal edebilirsiniz",
  "payment_entry_page.payment_step_title": "RevenueCat ile güvenli ödeme",
  "payment_entry_page.button_pay": "Şimdi öde",
  "payment_entry_page.button_start_trial": "Denemeyi başlat",
  "success_page.purchase_successful": "Ödeme tamamlandı",
  "success_page.button_close": "Devam et",
  "error_page.if_error_persists": "Hata devam ederse lütfen iletişime geçin ",
  "error_page.error_title_already_subscribed": "{{productTitle}} ürününe zaten abone oldunuz",
  "error_page.error_title_already_purchased": "{{productTitle}} ürününü zaten satın aldınız",
  "error_page.error_title_other_errors": "Bir şeyler ters gitti",
  "error_page.error_message_already_subscribed": "Bu ürüne tekrar abone olamazsınız.",
  "error_page.error_message_already_purchased": "Bu ürünü tekrar satın alamazsınız.",
  "error_page.error_message_missing_email_error": "Satın almayı tamamlamak için e-posta gereklidir.",
  "error_page.error_message_network_error": "Ağ hatası. Lütfen internet bağlantınızı kontrol edin.",
  "error_page.error_message_error_charging_payment": "Ödeme başarısız oldu.",
  "error_page.error_message_error_setting_up_purchase": "Bir hata nedeniyle satın alma başlatılamadı (hata kodu: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Fatura adresinizi doğrulayamadık. Lütfen posta kodu ve ülkenin doğru olduğunu kontrol edin.",
  "error_page.error_message_unknown_error": "Bilinmeyen bir hata oluştu (hata kodu: {{errorCode}}).",
  "error_page.button_try_again": "Tekrar dene",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Bugün ödenecek toplam tutar",
  "product_info.subscribe_to": "Abone Ol",
  "navbar_header.details": "Detaylar",
  "navbar_header.back_button": "Geri",
  "pricing_dropdown.show_details": "Detayları göster",
  "pricing_dropdown.hide_details": "Detayları gizle",
  "pricing_table.tax": "Vergi",
  "pricing_table.trial_ends": "Deneme süresi sona erdikten sonra, {{formattedTrialEndDate}} tarihinde",
  "pricing_table.total_due_today": "Bugün ödenecek toplam",
  "pricing_table.total_excluding_tax": "Vergi hariç toplam",
  "pricing_table.enter_billing_address_to_calculate": "Hesaplamak için fatura adresini girin",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Hesaplamak için eyalet veya posta kodunu girin",
  "pricing_table.enter_postal_code_to_calculate": "Hesaplamak için posta kodunu girin",
  "error_page.error_message_invalid_email_error": "{{email}} e-posta adresi doğrulanamadı. Lütfen geçerli bir e-posta adresi girin.",
  "payment_entry_page.button_payment_method": "{{paymentMethod}} ile {{formattedPrice}} öde",
  "payment_entry_page.button_with_price": "{{formattedPrice}} öde",
  "price_update.title": "Fiyat güncellemesi",
  "price_update.base_message": "Toplam fiyat, fatura adresinize göre vergi dahil olacak şekilde güncellendi. Lütfen inceleyip tekrar deneyin. Kartınızdan yalnızca bir kez ücret alınacaktır.",
  "price_update.trial_message": "Abonelik fiyatı, fatura adresinize göre vergileri içerecek şekilde güncellendi. Ücretsiz deneme süresi hala geçerli. Lütfen kontrol edin ve tekrar deneyin.",
  "payment_entry_page.express_checkout_divider": "VEYA KARTLA ÖDEYİN",
  "error_page.trouble_accessing": "Satın alımınıza erişmekte sorun yaşıyorsanız, şu adresten destek ekibine ulaşın: ",
  "error_page.close_button_title": "{{appName}}'e Git",
  "error_page.error_title_stripe_missing_required_permission": "Eksik Stripe izni",
  "error_page.button_close": "Kapat",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Vergi başlangıç adresi geçersiz olduğu için satın alma başarısız oldu. Üretimde, satın alımlar vergi uygulanmadan çalışacaktır.",
  "error_page.error_message_stripe_tax_not_active": "Stripe Vergi etkinleştirilmediği için satın alma başarısız oldu. Üretimde, satın alımlar vergi uygulanmadan çalışacaktır.",
  "error_page.error_only_in_sandbox": "Bu mesaj yalnızca sanal ortamda görünür.",
  "error_page.error_message_stripe_missing_required_permission": "Stripe uygulamasında gerekli bir izin eksik olduğu için satın alma başarısız oldu. Üretimde, satın alımlar vergi uygulanmadan çalışacaktır.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Vergi aktif değil",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Geçersiz vergi başlangıç adresi",
  "apple_pay.free_trial": "Ücretsiz Deneme",
  "product_info.price_after_intro_price": "{{introPriceDuration}} sonra, {{renewalDate}} tarihinde",
  "product_info.after_trial": "deneme süresinden sonra",
  "product_info.after": "sonra",
  "product_info.intro_price_phase_after_trial": "Sonra {{introPriceDuration}} boyunca {{introPrice}}",
  "product_info.intro_price_phase": "İlk {{introPriceDuration}} boyunca {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "bir defaya mahsus ödenir",
  "payment_entry_page.trial_subscription_terms_info": "Deneme süreniz sona erdikten sonra, {{renewalDate}} tarihinden itibaren {{price}} {{perFrequency}} ücretlendirileceksiniz. Bu tarihten önce istediğiniz zaman iptal edebilirsiniz.",
  "payment_entry_page.subscription_info": "Abonelik otomatik olarak yenilenir. İstediğiniz zaman iptal edin.",
  "payment_entry_page.otp_terms_info": "Satın alarak, {{appName}}'in sizi şartlarına göre ücretlendirmesine izin vermeyi kabul edersiniz.",
  "payment_entry_page.terms_link_label": "Koşullar",
  "payment_entry_page.subscription_terms_info": "Abone olarak, iptal edene kadar {{appName}}'in sizi şartlarına göre ücretlendirmesine izin vermeyi kabul edersiniz.",
  "loading_page.keep_page_open": "İşlem neredeyse tamamlandı. Bu sayfayı açık tutun.",
  "loading_page.processing_payment": "Ödeme işleniyor",
  "pricing_table.discount": "İndirim",
  "pricing_table.subtotal": "Ara Toplam",
  "pricing_dropdown.add_promo_code": "kupon kodu ekle",
  "discount_input.label": "Promosyon kodu",
  "payment_entry_page.checkout_consent_terms_of_service": "hizmet şartları",
  "payment_entry_page.checkout_consent_agreement": "{{appName}} {{termsOfService}}'ni kabul ediyorum."
}, sh = {
  "periods.week": "{{amount}} тиждень",
  "periods.month": "{{amount}} місяць",
  "periods.year": "{{amount}} рік",
  "periods.day": "{{amount}} день",
  "periods.weekShort": "{{amount}}тиж",
  "periods.monthShort": "{{amount}}міс",
  "periods.yearShort": "{{amount}}рік",
  "periods.dayShort": "{{amount}}дн",
  "periods.lifetime": "пожиттєво",
  "periods.weekPlural": "{{amount}} тижнів",
  "periods.monthPlural": "{{amount}} місяців",
  "periods.yearPlural": "{{amount}} років",
  "periods.dayPlural": "{{amount}} днів",
  "periods.weekFrequency": "щотижня",
  "periods.monthFrequency": "щомісяця",
  "periods.yearFrequency": "щороку",
  "periods.dayFrequency": "щодня",
  "periods.perWeekFrequency": "на тиждень",
  "periods.perMonthFrequency": "на місяць",
  "periods.perYearFrequency": "на рік",
  "periods.perDayFrequency": "на день",
  "periods.unknownFrequency": "невідомо",
  "periods.weekFrequencyPlural": "кожні {{amount}} тижнів",
  "periods.monthFrequencyPlural": "кожні {{amount}} місяців",
  "periods.yearFrequencyPlural": "кожні {{amount}} років",
  "periods.dayFrequencyPlural": "кожні {{amount}} днів",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} безкоштовний пробний період",
  "product_info.price_after_free_trial": "Після закінчення пробного періоду, {{renewalDate}}",
  "product_info.renewal_frequency": "Продовжується {{frequency}}",
  "product_info.continues_until_cancelled": "Триває до скасування",
  "product_info.cancel_anytime": "Можна скасувати в будь-який час",
  "payment_entry_page.payment_step_title": "Безпечна оплата через RevenueCat",
  "payment_entry_page.button_pay": "Оплатити зараз",
  "payment_entry_page.button_start_trial": "Розпочати пробний період",
  "success_page.purchase_successful": "Оплата завершена",
  "success_page.button_close": "Продовжити",
  "error_page.if_error_persists": "Якщо помилка повторюється, зверніться до ",
  "error_page.error_title_already_subscribed": "Ви вже підписалися на {{productTitle}}",
  "error_page.error_title_already_purchased": "Ви вже придбали {{productTitle}}",
  "error_page.error_title_other_errors": "Щось пішло не так",
  "error_page.error_message_already_subscribed": "Ви не можете підписатися на цей продукт знову.",
  "error_page.error_message_already_purchased": "Ви не можете придбати цей продукт знову.",
  "error_page.error_message_missing_email_error": "Для завершення покупки потрібна електронна пошта.",
  "error_page.error_message_network_error": "Помилка мережі. Перевірте підключення до інтернету.",
  "error_page.error_message_error_charging_payment": "Оплата не пройшла.",
  "error_page.error_message_error_setting_up_purchase": "Помилка при ініціалізації покупки (код помилки: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Ми не змогли перевірити вашу платіжну адресу. Будь ласка, перевірте, чи правильні поштовий індекс та країна.",
  "error_page.error_message_unknown_error": "Сталася невідома помилка (код помилки: {{errorCode}}).",
  "error_page.button_try_again": "Спробувати ще раз",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Всього до сплати сьогодні",
  "product_info.subscribe_to": "Підписатися на",
  "navbar_header.details": "Деталі",
  "navbar_header.back_button": "Назад",
  "pricing_dropdown.show_details": "Показати деталі",
  "pricing_dropdown.hide_details": "Приховати деталі",
  "pricing_table.tax": "Податок",
  "pricing_table.trial_ends": "Після закінчення пробного періоду, {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Загальна сума до сплати сьогодні",
  "pricing_table.total_excluding_tax": "Загальна сума без урахування податку",
  "pricing_table.enter_billing_address_to_calculate": "Введіть адресу виставлення рахунку для розрахунку",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Введіть штат або поштовий індекс для розрахунку",
  "pricing_table.enter_postal_code_to_calculate": "Введіть поштовий індекс для розрахунку",
  "error_page.error_message_invalid_email_error": "Електронну адресу {{email}} не вдалося підтвердити. Будь ласка, вкажіть дійсну електронну адресу.",
  "payment_entry_page.button_payment_method": "Сплатити {{formattedPrice}} за допомогою {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Сплатити {{formattedPrice}}",
  "price_update.title": "Оновлення ціни",
  "price_update.base_message": "Загальну ціну було оновлено з урахуванням податку на основі вашої платіжної адреси. Перегляньте та спробуйте ще раз. З вашої картки буде списано кошти лише один раз.",
  "price_update.trial_message": "Ціна підписки була оновлена для включення податків на основі вашої платіжної адреси. Безкоштовний пробний період все ще діє. Будь ласка, перевірте та спробуйте ще раз.",
  "payment_entry_page.express_checkout_divider": "АБО СПЛАТІТЬ КАРТКОЮ",
  "error_page.trouble_accessing": "Якщо у вас виникли проблеми з доступом до вашої покупки, зверніться до служби підтримки за адресою ",
  "error_page.close_button_title": "Перейти до {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Відсутній дозвіл Stripe",
  "error_page.button_close": "Закрити",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Покупка не вдалася, оскільки адреса походження податку недійсна. У виробництві покупки працюватимуть без застосування податків.",
  "error_page.error_message_stripe_tax_not_active": "Покупка не вдалася, оскільки Stripe Tax не ввімкнено. У виробництві покупки працюватимуть без застосування податків.",
  "error_page.error_only_in_sandbox": "Це повідомлення з’являється лише в пісочниці.",
  "error_page.error_message_stripe_missing_required_permission": "Покупка не вдалася, оскільки програмі Stripe не вистачає необхідного дозволу. У виробництві покупки працюватимуть без застосування податків.",
  "error_page.error_title_stripe_tax_not_active": "Stripe Tax не активовано",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Недійсна адреса походження податку",
  "apple_pay.free_trial": "Безкоштовна пробна версія",
  "product_info.price_after_intro_price": "Після {{introPriceDuration}}, {{renewalDate}}",
  "product_info.after_trial": "після пробного періоду",
  "product_info.after": "після",
  "product_info.intro_price_phase_after_trial": "Потім {{introPriceDuration}} за {{introPrice}}",
  "product_info.intro_price_phase": "Спочатку {{introPriceDuration}} за {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "сплачено один раз",
  "payment_entry_page.trial_subscription_terms_info": "Після закінчення пробного періоду з вас буде стягуватися плата в розмірі {{price}} {{perFrequency}} починаючи з {{renewalDate}}. Ви можете скасувати підписку в будь-який час до цієї дати.",
  "payment_entry_page.subscription_info": "Підписка поновлюється автоматично. Скасувати можна в будь-який час.",
  "payment_entry_page.otp_terms_info": "Купуючи, ви погоджуєтеся дозволити {{appName}} стягувати з вас плату відповідно до їхніх умов.",
  "payment_entry_page.terms_link_label": "Умови",
  "payment_entry_page.subscription_terms_info": "Підписуючись, ви погоджуєтеся дозволити {{appName}} стягувати з вас плату відповідно до їхніх умов, поки ви не скасуєте підписку.",
  "loading_page.keep_page_open": "Процес майже завершено. Залиште цю сторінку відкритою.",
  "loading_page.processing_payment": "Обробка платежу",
  "pricing_table.discount": "Знижка",
  "pricing_table.subtotal": "Сума до сплати",
  "pricing_dropdown.add_promo_code": "Додати промокод",
  "discount_input.label": "Промокод",
  "payment_entry_page.checkout_consent_terms_of_service": "умовами надання послуг",
  "payment_entry_page.checkout_consent_agreement": "Я погоджуюся з {{appName}} {{termsOfService}}."
}, lh = {
  "periods.week": "{{amount}} tuần",
  "periods.month": "{{amount}} tháng",
  "periods.year": "{{amount}} năm",
  "periods.day": "{{amount}} ngày",
  "periods.weekShort": "{{amount}}tuần",
  "periods.monthShort": "{{amount}}tháng",
  "periods.yearShort": "{{amount}}năm",
  "periods.dayShort": "{{amount}}ngày",
  "periods.lifetime": "trọn đời",
  "periods.weekPlural": "{{amount}} tuần",
  "periods.monthPlural": "{{amount}} tháng",
  "periods.yearPlural": "{{amount}} năm",
  "periods.dayPlural": "{{amount}} ngày",
  "periods.weekFrequency": "hàng tuần",
  "periods.monthFrequency": "hàng tháng",
  "periods.yearFrequency": "hàng năm",
  "periods.dayFrequency": "hàng ngày",
  "periods.perWeekFrequency": "mỗi tuần",
  "periods.perMonthFrequency": "mỗi tháng",
  "periods.perYearFrequency": "mỗi năm",
  "periods.perDayFrequency": "mỗi ngày",
  "periods.unknownFrequency": "không xác định",
  "periods.weekFrequencyPlural": "cứ {{amount}} tuần",
  "periods.monthFrequencyPlural": "cứ {{amount}} tháng",
  "periods.yearFrequencyPlural": "cứ {{amount}} năm",
  "periods.dayFrequencyPlural": "cứ {{amount}} ngày",
  "product_info.product_title": "{{productTitle}}",
  "product_info.product_description": "{{productDescription}}",
  "product_info.product_price": "{{productPrice}}",
  "product_info.free_trial_duration": "{{trialDuration}} dùng thử miễn phí",
  "product_info.price_after_free_trial": "Sau khi dùng thử kết thúc, vào {{renewalDate}}",
  "product_info.renewal_frequency": "Gia hạn {{frequency}}",
  "product_info.continues_until_cancelled": "Tiếp tục cho đến khi hủy",
  "product_info.cancel_anytime": "Hủy bất cứ lúc nào",
  "payment_entry_page.payment_step_title": "Thanh toán an toàn bởi RevenueCat",
  "payment_entry_page.button_pay": "Thanh toán ngay",
  "payment_entry_page.button_start_trial": "Bắt đầu dùng thử",
  "success_page.purchase_successful": "Thanh toán hoàn tất",
  "success_page.button_close": "Tiếp tục",
  "error_page.if_error_persists": "Nếu lỗi vẫn tiếp diễn, vui lòng liên hệ ",
  "error_page.error_title_already_subscribed": "Bạn đã đăng ký {{productTitle}} rồi",
  "error_page.error_title_already_purchased": "Bạn đã mua {{productTitle}} rồi",
  "error_page.error_title_other_errors": "Có lỗi xảy ra",
  "error_page.error_message_already_subscribed": "Bạn không thể đăng ký sản phẩm này lần nữa.",
  "error_page.error_message_already_purchased": "Bạn không thể mua sản phẩm này lần nữa.",
  "error_page.error_message_missing_email_error": "Email bắt buộc để hoàn tất việc mua hàng.",
  "error_page.error_message_network_error": "Lỗi mạng. Vui lòng kiểm tra kết nối internet của bạn.",
  "error_page.error_message_error_charging_payment": "Thanh toán thất bại.",
  "error_page.error_message_error_setting_up_purchase": "Không thể bắt đầu mua do lỗi (mã lỗi: {{errorCode}}).",
  "error_page.error_message_invalid_tax_location": "Chúng tôi không thể xác minh địa chỉ thanh toán của bạn. Vui lòng kiểm tra lại mã bưu điện và quốc gia.",
  "error_page.error_message_unknown_error": "Đã xảy ra lỗi không xác định (mã lỗi: {{errorCode}}).",
  "error_page.button_try_again": "Thử lại",
  "paywall_variables.price_per_period": "{{formattedPrice}}/{{period}}",
  "paywall_variables.sub_relative_discount": "{{discount}}%",
  "paywall_variables.total_price_and_per_month": "{{formattedPrice}}/{{period}}({{formattedPricePerMonth}}/{{monthPeriod}})",
  "product_info.total_due_today": "Tổng số tiền phải trả hôm nay",
  "product_info.subscribe_to": "Đăng ký",
  "navbar_header.details": "Chi tiết",
  "navbar_header.back_button": "Quay lại",
  "pricing_dropdown.show_details": "Xem chi tiết",
  "pricing_dropdown.hide_details": "Ẩn chi tiết",
  "pricing_table.tax": "Thuế",
  "pricing_table.trial_ends": "Sau khi thời gian dùng thử kết thúc, vào {{formattedTrialEndDate}}",
  "pricing_table.total_due_today": "Tổng số tiền phải trả hôm nay",
  "pricing_table.total_excluding_tax": "Tổng cộng chưa bao gồm thuế",
  "pricing_table.enter_billing_address_to_calculate": "Nhập địa chỉ thanh toán để tính toán",
  "pricing_table.enter_state_or_postal_code_to_calculate": "Nhập tiểu bang hoặc mã bưu điện để tính toán",
  "pricing_table.enter_postal_code_to_calculate": "Nhập mã bưu điện để tính toán",
  "error_page.error_message_invalid_email_error": "Không thể xác minh địa chỉ email {{email}}. Vui lòng cung cấp một địa chỉ email hợp lệ.",
  "payment_entry_page.button_payment_method": "Thanh toán {{formattedPrice}} bằng {{paymentMethod}}",
  "payment_entry_page.button_with_price": "Thanh toán {{formattedPrice}}",
  "price_update.title": "Cập nhật giá",
  "price_update.base_message": "Tổng giá đã được cập nhật với thuế dựa trên địa chỉ thanh toán của bạn. Vui lòng xem lại và thử lại. Thẻ của bạn sẽ chỉ bị tính phí một lần.",
  "price_update.trial_message": "Giá đăng ký đã được cập nhật để bao gồm thuế dựa trên địa chỉ thanh toán của bạn. Thời gian dùng thử miễn phí vẫn được áp dụng. Vui lòng kiểm tra và thử lại.",
  "payment_entry_page.express_checkout_divider": "HOẶC THANH TOÁN BẰNG THẺ",
  "error_page.trouble_accessing": "Nếu bạn gặp sự cố khi truy cập giao dịch mua của mình, hãy liên hệ với bộ phận hỗ trợ theo địa chỉ ",
  "error_page.close_button_title": "Đi đến {{appName}}",
  "error_page.error_title_stripe_missing_required_permission": "Thiếu quyền Stripe",
  "error_page.button_close": "Đóng",
  "error_page.error_message_stripe_invalid_tax_origin_address": "Giao dịch mua không thành công vì địa chỉ gốc thuế không hợp lệ. Trong môi trường thực tế, giao dịch mua sẽ hoạt động mà không áp dụng thuế.",
  "error_page.error_message_stripe_tax_not_active": "Giao dịch mua không thành công vì Thuế Stripe chưa được bật. Trong môi trường thực tế, giao dịch mua sẽ hoạt động mà không áp dụng thuế.",
  "error_page.error_only_in_sandbox": "Thông báo này chỉ xuất hiện trong môi trường thử nghiệm.",
  "error_page.error_message_stripe_missing_required_permission": "Giao dịch mua không thành công vì ứng dụng Stripe thiếu một quyền cần thiết. Trong môi trường thực tế, giao dịch mua sẽ hoạt động mà không áp dụng thuế.",
  "error_page.error_title_stripe_tax_not_active": "Thuế Stripe chưa hoạt động",
  "error_page.error_title_stripe_invalid_tax_origin_address": "Địa chỉ gốc thuế không hợp lệ",
  "apple_pay.free_trial": "Dùng thử miễn phí",
  "product_info.price_after_intro_price": "Sau {{introPriceDuration}}, vào {{renewalDate}}",
  "product_info.after_trial": "sau khi dùng thử",
  "product_info.after": "sau",
  "product_info.intro_price_phase_after_trial": "Sau đó {{introPriceDuration}} với giá {{introPrice}}",
  "product_info.intro_price_phase": "{{introPriceDuration}} đầu tiên với giá {{introPrice}}",
  "product_info.intro_price_phase_paid_once": "trả một lần",
  "payment_entry_page.trial_subscription_terms_info": "Sau khi thời gian dùng thử của bạn kết thúc, bạn sẽ bị tính phí {{price}} {{perFrequency}} bắt đầu từ {{renewalDate}}. Bạn có thể hủy bất cứ lúc nào trước ngày này.",
  "payment_entry_page.subscription_info": "Gói đăng ký tự động gia hạn. Hủy bất cứ lúc nào.",
  "payment_entry_page.otp_terms_info": "Bằng cách mua, bạn đồng ý cho phép {{appName}} tính phí bạn theo các điều khoản của họ.",
  "payment_entry_page.terms_link_label": "Điều khoản",
  "payment_entry_page.subscription_terms_info": "Bằng cách đăng ký, bạn đồng ý cho phép {{appName}} tính phí bạn theo các điều khoản của họ cho đến khi bạn hủy.",
  "loading_page.keep_page_open": "Quá trình gần hoàn tất. Vui lòng giữ trang này mở.",
  "loading_page.processing_payment": "Đang xử lý thanh toán",
  "pricing_table.discount": "Giảm giá",
  "pricing_table.subtotal": "Tổng cộng",
  "pricing_dropdown.add_promo_code": "Thêm mã khuyến mãi",
  "discount_input.label": "Mã khuyến mãi",
  "payment_entry_page.checkout_consent_terms_of_service": "điều khoản dịch vụ",
  "payment_entry_page.checkout_consent_agreement": "Tôi đồng ý với {{termsOfService}} của {{appName}}."
};
var ue = /* @__PURE__ */ ((r) => (r.PeriodsWeek = "periods.week", r.PeriodsMonth = "periods.month", r.PeriodsYear = "periods.year", r.PeriodsDay = "periods.day", r.PeriodsWeekShort = "periods.weekShort", r.PeriodsMonthShort = "periods.monthShort", r.PeriodsYearShort = "periods.yearShort", r.PeriodsDayShort = "periods.dayShort", r.PeriodsLifetime = "periods.lifetime", r.PeriodsWeekPlural = "periods.weekPlural", r.PeriodsMonthPlural = "periods.monthPlural", r.PeriodsYearPlural = "periods.yearPlural", r.PeriodsDayPlural = "periods.dayPlural", r.PeriodsWeekFrequency = "periods.weekFrequency", r.PeriodsMonthFrequency = "periods.monthFrequency", r.PeriodsYearFrequency = "periods.yearFrequency", r.PeriodsDayFrequency = "periods.dayFrequency", r.PeriodsPerWeekFrequency = "periods.perWeekFrequency", r.PeriodsPerMonthFrequency = "periods.perMonthFrequency", r.PeriodsPerYearFrequency = "periods.perYearFrequency", r.PeriodsPerDayFrequency = "periods.perDayFrequency", r.PeriodsUnknownFrequency = "periods.unknownFrequency", r.PeriodsWeekFrequencyPlural = "periods.weekFrequencyPlural", r.PeriodsMonthFrequencyPlural = "periods.monthFrequencyPlural", r.PeriodsYearFrequencyPlural = "periods.yearFrequencyPlural", r.PeriodsDayFrequencyPlural = "periods.dayFrequencyPlural", r.ProductInfoProductTitle = "product_info.product_title", r.ProductInfoProductDescription = "product_info.product_description", r.ProductInfoProductPrice = "product_info.product_price", r.ProductInfoFreeTrialDuration = "product_info.free_trial_duration", r.ProductInfoPriceAfterFreeTrial = "product_info.price_after_free_trial", r.ProductInfoIntroPricePhaseAfterTrial = "product_info.intro_price_phase_after_trial", r.ProductInfoIntroPricePhasePaidOnce = "product_info.intro_price_phase_paid_once", r.ProductInfoIntroPricePhase = "product_info.intro_price_phase", r.ProductInfoPriceAfterIntroPrice = "product_info.price_after_intro_price", r.ProductInfoAfterTrial = "product_info.after_trial", r.ProductInfoAfter = "product_info.after", r.ProductInfoPriceTotalDueToday = "product_info.total_due_today", r.ProductInfoSubscribeTo = "product_info.subscribe_to", r.ProductInfoRenewalFrequency = "product_info.renewal_frequency", r.ProductInfoContinuesUntilCancelled = "product_info.continues_until_cancelled", r.ProductInfoCancelAnytime = "product_info.cancel_anytime", r.PaymentEntryPagePaymentStepTitle = "payment_entry_page.payment_step_title", r.PaymentEntryPageTrialSubscriptionTermsInfo = "payment_entry_page.trial_subscription_terms_info", r.PaymentEntryPageSubscriptionTermsInfo = "payment_entry_page.subscription_terms_info", r.PaymentEntryPageOtpTermsInfo = "payment_entry_page.otp_terms_info", r.PaymentEntryPageTermsLinkLabel = "payment_entry_page.terms_link_label", r.PaymentEntryPageCheckoutConsentAgreement = "payment_entry_page.checkout_consent_agreement", r.PaymentEntryPageCheckoutConsentTermsOfService = "payment_entry_page.checkout_consent_terms_of_service", r.PaymentEntryPageSubscriptionInfo = "payment_entry_page.subscription_info", r.PaymentEntryPageButtonPay = "payment_entry_page.button_pay", r.PaymentEntryPageButtonStartTrial = "payment_entry_page.button_start_trial", r.PaymentEntryPageButtonWithPrice = "payment_entry_page.button_with_price", r.PaymentEntryPageButtonPaymentMethod = "payment_entry_page.button_payment_method", r.PaymentEntryPageExpressCheckoutDivider = "payment_entry_page.express_checkout_divider", r.SuccessPagePurchaseSuccessful = "success_page.purchase_successful", r.SuccessPageButtonClose = "success_page.button_close", r.LoadingPageProcessingPayment = "loading_page.processing_payment", r.LoadingPageKeepPageOpen = "loading_page.keep_page_open", r.ErrorPageCloseButtonTitle = "error_page.close_button_title", r.ErrorPageIfErrorPersists = "error_page.if_error_persists", r.ErrorPageTroubleAccessing = "error_page.trouble_accessing", r.ErrorPageErrorTitleAlreadySubscribed = "error_page.error_title_already_subscribed", r.ErrorPageErrorTitleAlreadyPurchased = "error_page.error_title_already_purchased", r.ErrorPageErrorTitleOtherErrors = "error_page.error_title_other_errors", r.ErrorPageErrorTitleStripeTaxNotActive = "error_page.error_title_stripe_tax_not_active", r.ErrorPageErrorTitleStripeInvalidTaxOriginAddress = "error_page.error_title_stripe_invalid_tax_origin_address", r.ErrorPageErrorTitleStripeMissingRequiredPermission = "error_page.error_title_stripe_missing_required_permission", r.ErrorPageErrorMessageAlreadySubscribed = "error_page.error_message_already_subscribed", r.ErrorPageErrorMessageAlreadyPurchased = "error_page.error_message_already_purchased", r.ErrorPageErrorMessageMissingEmailError = "error_page.error_message_missing_email_error", r.ErrorPageErrorMessageInvalidEmailError = "error_page.error_message_invalid_email_error", r.ErrorPageErrorMessageNetworkError = "error_page.error_message_network_error", r.ErrorPageErrorMessageErrorChargingPayment = "error_page.error_message_error_charging_payment", r.ErrorPageErrorMessageErrorSettingUpPurchase = "error_page.error_message_error_setting_up_purchase", r.ErrorPageErrorMessageUnknownError = "error_page.error_message_unknown_error", r.ErrorPageErrorMessageInvalidTaxLocation = "error_page.error_message_invalid_tax_location", r.ErrorPageErrorMessageStripeTaxNotActive = "error_page.error_message_stripe_tax_not_active", r.ErrorPageErrorMessageStripeInvalidTaxOriginAddress = "error_page.error_message_stripe_invalid_tax_origin_address", r.ErrorPageErrorMessageStripeMissingRequiredPermission = "error_page.error_message_stripe_missing_required_permission", r.ErrorPageErrorMessageOnlyInSandbox = "error_page.error_only_in_sandbox", r.ErrorButtonTryAgain = "error_page.button_try_again", r.ErrorButtonClose = "error_page.button_close", r.PaywallVariablesPricePerPeriod = "paywall_variables.price_per_period", r.PaywallVariablesSubRelativeDiscount = "paywall_variables.sub_relative_discount", r.PaywallVariablesTotalPriceAndPerMonth = "paywall_variables.total_price_and_per_month", r.PricingDropdownShowDetails = "pricing_dropdown.show_details", r.PricingDropdownHideDetails = "pricing_dropdown.hide_details", r.PricingDropdownAddPromoCode = "pricing_dropdown.add_promo_code", r.DiscountInputLabel = "discount_input.label", r.PricingTotalExcludingTax = "pricing_table.total_excluding_tax", r.PricingTableTrialEnds = "pricing_table.trial_ends", r.PricingTableTotalDueToday = "pricing_table.total_due_today", r.PricingTableSubtotal = "pricing_table.subtotal", r.PricingTableDiscount = "pricing_table.discount", r.PricingTableTax = "pricing_table.tax", r.PricingTableEnterBillingAddressToCalculate = "pricing_table.enter_billing_address_to_calculate", r.PricingTableEnterStateOrPostalCodeToCalculate = "pricing_table.enter_state_or_postal_code_to_calculate", r.PricingTableEnterPostalCodeToCalculate = "pricing_table.enter_postal_code_to_calculate", r.NavbarHeaderDetails = "navbar_header.details", r.NavbarBackButton = "navbar_header.back_button", r.PriceUpdateTitle = "price_update.title", r.PriceUpdateBaseMessage = "price_update.base_message", r.PriceUpdateTrialMessage = "price_update.trial_message", r.ApplePayFreeTrial = "apple_pay.free_trial", r))(ue || {});
const ch = {
  en: Tm,
  es: Dm,
  it: Am,
  ar: Fm,
  ca: qm,
  zh_Hans: Mm,
  zh_Hant: zm,
  hr: Om,
  cs: Nm,
  da: Lm,
  nl: jm,
  fi: Bm,
  fr: Rm,
  de: Um,
  el: Vm,
  he: Wm,
  hi: Hm,
  hu: Ym,
  id: Gm,
  ja: Km,
  ko: Xm,
  ms: Zm,
  no: Jm,
  pl: Qm,
  pt: $m,
  ro: eh,
  ru: rh,
  sk: th,
  sl: nh,
  sv: ah,
  th: oh,
  tr: ih,
  uk: sh,
  vi: lh
};
var Ne = /* @__PURE__ */ ((r) => (r.Year = "year", r.Month = "month", r.Week = "week", r.Day = "day", r))(Ne || {});
function No(r) {
  const e = r.match(/^PT?([0-9]+)([MDYW])$/);
  if (!e || e.length < 3)
    return be.errorLog(`Invalid ISO 8601 duration format: ${r}`), null;
  const t = parseInt(e[1]);
  switch (e[2]) {
    case "Y":
      return {
        number: t,
        unit: "year"
        /* Year */
      };
    case "M":
      return {
        number: t,
        unit: "month"
        /* Month */
      };
    case "W":
      return {
        number: t,
        unit: "week"
        /* Week */
      };
    case "D":
      return {
        number: t,
        unit: "day"
        /* Day */
      };
    default:
      return be.errorLog(`Invalid ISO 8601 unit duration format: ${r}`), null;
  }
}
function mo(r, e, t) {
  if (!t)
    return null;
  let n = new Date(r);
  switch (e.unit) {
    case "year":
      n.getDate() === 29 && n.getMonth() === 1 && e.number !== 4 ? n.setFullYear(
        n.getFullYear() + e.number,
        n.getMonth(),
        28
      ) : n.setFullYear(
        n.getFullYear() + e.number,
        n.getMonth(),
        n.getDate()
      );
      break;
    case "month":
      n.setMonth(n.getMonth() + e.number, n.getDate()), n.getDate() !== r.getDate() && (n = new Date(r), n.setMonth(n.getMonth() + e.number + 1, 0));
      break;
    case "week":
      n.setDate(n.getDate() + e.number * 7);
      break;
    case "day":
      n.setDate(n.getDate() + e.number);
      break;
  }
  return n;
}
const Yn = (r) => {
  if (!r)
    return r;
  const e = r.replace(/_/g, "-");
  try {
    const [n] = Intl.getCanonicalLocales(e);
    if (n)
      return n;
  } catch {
  }
  const t = e.split("-")[0];
  try {
    const [n] = Intl.getCanonicalLocales(t);
    if (n)
      return n;
  } catch {
  }
  return t;
}, uh = (r) => r / 1e6, ru = /* @__PURE__ */ new Map();
function dh(r) {
  const e = ru.get(r);
  if (e !== void 0) return e;
  let t;
  try {
    t = new Intl.NumberFormat("en", {
      style: "currency",
      currency: r
    }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {
    t = 2;
  }
  return ru.set(r, t), t;
}
function ui(r, e) {
  const n = 10 ** (6 - dh(e)), a = Math.round(r / n * 1e9) / 1e9;
  return Math.floor(a) * n;
}
const cn = (r, e, t, n = {}) => {
  const a = uh(r), i = {
    style: "currency",
    currency: e,
    currencyDisplay: "symbol",
    ...n,
    // Some browsers require minimumFractionDigits to be set if maximumFractionDigits is set.
    minimumFractionDigits: n.maximumFractionDigits
  };
  return new Intl.NumberFormat(
    Yn(t),
    i
  ).format(a).replace("US$", "$");
}, ph = (r, e) => {
  const t = No(r);
  return t ? e.translatePeriod(t.number, t.unit) || `${t.number} ${t.unit}s` : r;
}, _h = (r) => {
  try {
    return r.charAt(0).toUpperCase() + r.slice(1);
  } catch {
    return r;
  }
}, xa = {
  noWhitespace: !1,
  short: !1
}, zp = {
  useMultipleWords: !1
};
class Tn {
  constructor(e = {}, t = Or, n = Or) {
    ee(this, "locales", {});
    this.selectedLocale = t, this.defaultLocale = n;
    const a = {};
    Object.entries(ch).forEach(([i, s]) => {
      a[i] = new tu(s, i);
    }), this.locales = a, e && this.override(e);
  }
  static fallback() {
    return new Tn();
  }
  override(e) {
    Object.entries(e).forEach(([t, n]) => {
      this.locales[t] = new tu(
        {
          ...this.locales[t].labels || {},
          ...n
        },
        this.getLanguageCodeString(t)
      );
    });
  }
  formatPrice(e, t) {
    const n = { currencyDisplay: "narrowSymbol" };
    e === 0 && (n.maximumFractionDigits = 0);
    try {
      return cn(
        e,
        t,
        this.bcp47Locale,
        n
      );
    } catch {
      be.errorLog(
        `Failed to create a price formatter for locale: ${this.bcp47Locale}`
      );
    }
    try {
      return cn(
        e,
        t,
        this.fallbackBcp47Locale,
        n
      );
    } catch {
      be.errorLog(
        `Failed to create a price formatter for locale: ${this.fallbackBcp47Locale}`
      );
    }
    return cn(
      e,
      t,
      Or,
      n
    );
  }
  /**
   * Returns the locale in a format that is compatible with other JS libraries.
   * This is particularly important for zh_Hans and zh_Hant that are instead
   * represented as zh-Hans and zh-Hant in Intl.DateTimeFormat.
   */
  get bcp47Locale() {
    var e;
    return Yn((e = this.getLocaleInstance(this.selectedLocale)) == null ? void 0 : e.localeKey) || Yn(this.getLanguageCodeString(this.selectedLocale)) || Or;
  }
  /**
   * Returns the fallback locale in a format that is compatible with other JS
   * libraries.
   * This is particularly important for zh_Hans and zh_Hant that are instead
   * represented as zh-Hans and zh-Hant in Intl.DateTimeFormat.
   */
  get fallbackBcp47Locale() {
    var e;
    return Yn((e = this.getLocaleInstance(this.defaultLocale)) == null ? void 0 : e.localeKey) || Yn(this.getLanguageCodeString(this.defaultLocale)) || Or;
  }
  getLanguageCodeString(e) {
    return e.split("_")[0].split("-")[0];
  }
  getLocaleInstance(e) {
    const t = this.getLanguageCodeString(e);
    return this.locales[e] || this.locales[t];
  }
  translate(e, t) {
    const n = this.getLocaleInstance(this.selectedLocale), a = this.getLocaleInstance(this.defaultLocale);
    return (n == null ? void 0 : n.translate(e, t)) || (a == null ? void 0 : a.translate(e, t)) || "";
  }
  formatCountry(e) {
    return new Intl.DisplayNames([this.bcp47Locale], { type: "region" }).of(
      e
    ) || e;
  }
  translatePeriod(e, t, n = xa) {
    const a = this.getLocaleInstance(this.selectedLocale), i = this.getLocaleInstance(this.defaultLocale);
    return (a == null ? void 0 : a.translatePeriod(e, t, n)) || (i == null ? void 0 : i.translatePeriod(e, t, n));
  }
  translatePeriodUnit(e, t = xa) {
    const n = this.getLocaleInstance(this.selectedLocale), a = this.getLocaleInstance(this.defaultLocale);
    return (n == null ? void 0 : n.translatePeriodUnit(e, t)) || (a == null ? void 0 : a.translatePeriodUnit(e, t));
  }
  translatePeriodFrequency(e, t, n = zp) {
    const a = this.getLocaleInstance(this.selectedLocale), i = this.getLocaleInstance(this.defaultLocale);
    return (a == null ? void 0 : a.translatePeriodFrequency(e, t, n)) || (i == null ? void 0 : i.translatePeriodFrequency(e, t, n));
  }
  translateDate(e, t = {}) {
    const n = this.getLocaleInstance(this.selectedLocale), a = this.getLocaleInstance(this.defaultLocale);
    return (n == null ? void 0 : n.translateDate(e, t)) || (a == null ? void 0 : a.translateDate(e, t));
  }
}
class tu {
  constructor(e = {}, t) {
    this.labels = e, this.localeKey = t;
  }
  replaceVariables(e, t) {
    return Object.entries(t).reduce(
      (n, [a, i]) => n.replace(
        `{{${a}}}`,
        `${i ?? ""}`
      ),
      e
    );
  }
  translate(e, t) {
    const n = this.labels[e];
    if (n)
      return this.replaceVariables(n, t || {});
  }
  translatePeriod(e, t, n = xa) {
    var l;
    const { noWhitespace: a, short: i } = {
      ...xa,
      ...n
    }, s = i ? `periods.${t}Short` : Math.abs(e) === 1 ? `periods.${t}` : `periods.${t}Plural`;
    return (l = this.translate(s, {
      amount: e.toString()
    })) == null ? void 0 : l.replace(" ", a ? "" : " ");
  }
  translatePeriodUnit(e, t = xa) {
    var s;
    const { noWhitespace: n, short: a } = {
      ...xa,
      ...t
    }, i = `periods.${e}${a ? "Short" : ""}`;
    return (s = this.translate(i, { amount: "" })) == null ? void 0 : s.replace(
      " ",
      n ? "" : " "
    );
  }
  translatePeriodFrequency(e, t, n = zp) {
    const a = n == null ? void 0 : n.useMultipleWords, i = Math.abs(e) === 1 ? `periods.${a === !0 ? "per" : ""}${a ? _h(t.toString()) : t}Frequency` : `periods.${t}FrequencyPlural`;
    return this.translate(i, {
      amount: e.toString()
    });
  }
  translateDate(e, t = {}) {
    return e.toLocaleDateString(Yn(this.localeKey), t);
  }
}
function gh(r) {
  return r != null;
}
var fh = /* @__PURE__ */ ((r) => (r.Unknown = "unknown", r.Custom = "custom", r.Lifetime = "$rc_lifetime", r.Annual = "$rc_annual", r.SixMonth = "$rc_six_month", r.ThreeMonth = "$rc_three_month", r.TwoMonth = "$rc_two_month", r.Monthly = "$rc_monthly", r.Weekly = "$rc_weekly", r))(fh || {}), Ur = /* @__PURE__ */ ((r) => (r.Subscription = "subscription", r.Consumable = "consumable", r.NonConsumable = "non_consumable", r))(Ur || {});
const _l = (r, e) => ({
  amount: r / 1e4,
  amountMicros: r,
  currency: e,
  formattedPrice: cn(r, e)
}), Op = (r) => _l(r.amount_micros, r.currency), vs = (r) => {
  const e = r.period_duration, t = r.price ? Op(r.price) : null, n = e ? No(e) : null;
  let a = null, i = null, s = null;
  if (t !== null && n !== null) {
    const l = mh(n), c = 1e4, u = ui(
      t.amountMicros * l.toWeek,
      t.currency
    );
    a = {
      amount: u / c,
      amountMicros: u,
      currency: t.currency,
      formattedPrice: cn(u, t.currency)
    };
    const d = ui(
      t.amountMicros * l.toMonth,
      t.currency
    );
    i = {
      amount: d / c,
      amountMicros: d,
      currency: t.currency,
      formattedPrice: cn(d, t.currency)
    };
    const p = ui(
      t.amountMicros * l.toYear,
      t.currency
    );
    s = {
      amount: p / c,
      amountMicros: p,
      currency: t.currency,
      formattedPrice: cn(p, t.currency)
    };
  }
  return {
    periodDuration: e,
    period: n,
    cycleCount: r.cycle_count,
    price: t,
    pricePerWeek: a,
    pricePerMonth: i,
    pricePerYear: s
  };
}, Np = (r, e) => {
  const t = r.duration_mode ?? "one_time";
  let n = r.time_window ?? null;
  (t === "one_time" || t === "forever") && n === null && e !== null && (n = e);
  let a = null, i = null;
  const s = n ? No(n) : null;
  return s && (a = { number: 1, unit: s.unit }, i = t === "forever" ? 0 : s.number), {
    timeWindow: r.time_window,
    durationMode: t,
    price: _l(r.amount_micros, r.currency),
    name: r.name,
    period: a,
    cycleCount: i ?? 0,
    periodDuration: n,
    discountType: r.discount_type,
    percentage: r.percentage ?? null,
    fixedAmount: r.fixed_amount_micros != null ? _l(
      r.fixed_amount_micros,
      r.currency
    ) : null
  };
};
function mh(r) {
  const { number: e, unit: t } = r, n = 7, a = 30, i = 365;
  let s;
  switch (t) {
    case Ne.Day:
      s = e;
      break;
    case Ne.Week:
      s = e * n;
      break;
    case Ne.Month:
      s = e * a;
      break;
    case Ne.Year:
      s = e * i;
      break;
    default:
      s = 0, be.errorLog(`Unknown period unit: ${t}`);
  }
  const l = s > 0 ? n / s : 0, c = s > 0 ? a / s : 0, u = s > 0 ? i / s : 0;
  return { toWeek: l, toMonth: c, toYear: u };
}
const Lp = (r) => {
  var e;
  return r.base == null ? (be.debugLog("Missing base phase for subscription option. Ignoring."), null) : {
    id: r.id,
    priceId: r.price_id,
    base: vs(r.base),
    trial: r.trial ? vs(r.trial) : null,
    introPrice: r.intro_price ? vs(r.intro_price) : null,
    discount: r.discount ? Np(r.discount, (e = r.base) == null ? void 0 : e.period_duration) : null
  };
}, jp = (r) => r.base_price == null ? (be.debugLog(
  "Missing base price for non-subscription option. Ignoring."
), null) : {
  id: r.id,
  priceId: r.price_id,
  basePrice: Op(r.base_price),
  discount: r.discount ? Np(r.discount, null) : null
}, hh = (r, e) => {
  const t = r.product_type;
  return t === "subscription" ? bh(
    r,
    e,
    t
  ) : yh(
    r,
    e,
    t
  );
}, vh = (r, e) => r === "subscription" ? "base" in e ? Lp(e) : null : "base_price" in e ? jp(e) : null, yh = (r, e, t) => {
  const n = {};
  if (Object.entries(r.purchase_options).forEach(
    ([s, l]) => {
      const c = jp(
        l
      );
      c != null && (n[s] = c);
    }
  ), Object.keys(n).length === 0)
    return be.debugLog(
      `Product ${r.identifier} has no purchase options. Ignoring.`
    ), null;
  const a = r.default_purchase_option_id, i = a && a in r.purchase_options ? n[a] : null;
  return i == null ? (be.debugLog(
    `Product ${r.identifier} has no default purchase option. Ignoring.`
  ), null) : {
    identifier: r.identifier,
    displayName: r.title,
    title: r.title,
    description: r.description,
    productType: t,
    currentPrice: i.basePrice,
    normalPeriodDuration: null,
    presentedOfferingIdentifier: e.offeringIdentifier,
    presentedOfferingContext: e,
    defaultPurchaseOption: i,
    defaultSubscriptionOption: null,
    subscriptionOptions: {},
    defaultNonSubscriptionOption: i,
    price: i.basePrice,
    period: null,
    freeTrialPhase: null,
    introPricePhase: null,
    discountPhase: i.discount
  };
}, bh = (r, e, t) => {
  const n = {};
  if (Object.entries(r.purchase_options).forEach(
    ([l, c]) => {
      const u = Lp(c);
      u != null && (n[l] = u);
    }
  ), Object.keys(n).length === 0)
    return be.debugLog(
      `Product ${r.identifier} has no subscription options. Ignoring.`
    ), null;
  const a = r.default_purchase_option_id, i = a && a in n ? n[a] : null;
  if (i == null)
    return be.debugLog(
      `Product ${r.identifier} has no default subscription option. Ignoring.`
    ), null;
  const s = i.base.price;
  return s == null ? (be.debugLog(
    `Product ${r.identifier} default option has no base price. Ignoring.`
  ), null) : {
    identifier: r.identifier,
    displayName: r.title,
    title: r.title,
    description: r.description,
    productType: t,
    currentPrice: s,
    normalPeriodDuration: i.base.periodDuration,
    presentedOfferingIdentifier: e.offeringIdentifier,
    presentedOfferingContext: e,
    defaultPurchaseOption: i,
    defaultSubscriptionOption: i,
    subscriptionOptions: n,
    defaultNonSubscriptionOption: null,
    price: s,
    period: i.base.period,
    freeTrialPhase: i.trial,
    introPricePhase: i.introPrice,
    discountPhase: i.discount
  };
}, kh = (r, e, t) => {
  const n = t[e.platform_product_identifier];
  if (n === void 0) return null;
  const a = hh(n, r);
  return a === null ? null : {
    identifier: e.identifier,
    rcBillingProduct: a,
    webBillingProduct: a,
    ...e.web_checkout_url ? { webCheckoutURL: e.web_checkout_url } : {},
    packageType: Ph(e.identifier)
  };
}, wh = (r, e, t, n, a) => {
  const i = {
    offeringIdentifier: e.identifier,
    targetingContext: r && n ? {
      ruleId: n.rule_id,
      revision: n.revision
    } : null,
    placementIdentifier: null
  }, s = e.packages.map(
    (c) => kh(i, c, t)
  ).filter(gh), l = {};
  for (const c of s)
    c != null && (l[c.identifier] = c);
  return s.length == 0 ? null : {
    identifier: e.identifier,
    serverDescription: e.description,
    metadata: e.metadata,
    ...e.web_checkout_url ? { webCheckoutURL: e.web_checkout_url } : {},
    packagesById: l,
    availablePackages: s,
    lifetime: l.$rc_lifetime ?? null,
    annual: l.$rc_annual ?? null,
    sixMonth: l.$rc_six_month ?? null,
    threeMonth: l.$rc_three_month ?? null,
    twoMonth: l.$rc_two_month ?? null,
    monthly: l.$rc_monthly ?? null,
    weekly: l.$rc_weekly ?? null,
    hasPaywall: e.paywall_components != null,
    paywallComponents: e.paywall_components,
    ...a !== void 0 ? { uiConfig: a } : {}
  };
};
function Ph(r) {
  switch (r) {
    case "$rc_lifetime":
      return "$rc_lifetime";
    case "$rc_annual":
      return "$rc_annual";
    case "$rc_six_month":
      return "$rc_six_month";
    case "$rc_three_month":
      return "$rc_three_month";
    case "$rc_two_month":
      return "$rc_two_month";
    case "$rc_monthly":
      return "$rc_monthly";
    case "$rc_weekly":
      return "$rc_weekly";
    default:
      return r.startsWith("$rc_") ? "unknown" : "custom";
  }
}
function lo(r, e = !1) {
  return (r == null ? void 0 : r.full_address_collection_mode) === "always" ? !0 : !!(r != null && r.gateway_tax_collection_enabled) && e;
}
yf();
const xh = `<svg viewBox="0 0 124 124" fill="var(--rc-color-grey-text-dark)" xmlns="http://www.w3.org/2000/svg">
    <circle cx="62" cy="62" r="62" fill="var(--rc-color-grey-text-dark)" opacity="0.2"/>
    <path d="M87.6668 41.504L82.4968 36.334L62.0002 56.8307L41.5035 36.334L36.3335 41.504L56.8302 62.0006L36.3335 82.4973L41.5035 87.6673L62.0002 67.1706L82.4968 87.6673L87.6668 82.4973L67.1702 62.0006L87.6668 41.504Z"
          />
</svg>
`;
var Eh = /* @__PURE__ */ V('<div style="color:var(--rc-color-primary);"><!></div>');
function Bp(r) {
  var e = Eh(), t = T(e);
  pn(t, () => xh), x(r, e);
}
function Sh(r, e) {
  var t = Xe, n = Ge, a = r();
  return {
    subscribe: mr(a, (s) => {
      var l = a !== r(), c, u = Ge, d = Xe;
      Rr(n), bt(t);
      try {
        c = Bf(() => {
          ia(() => {
            const p = r();
            l && s(p);
          });
        });
      } finally {
        Rr(u), bt(d);
      }
      return l = !0, c;
    }).subscribe
  };
}
function Rn(r) {
  let e;
  const t = Vl((a) => {
    let i = !1;
    const s = r.subscribe((l) => {
      e = l, i && a();
    });
    return i = !0, s;
  });
  function n() {
    return Hi() ? (t(), e) : Oo(r);
  }
  return "set" in r ? {
    get current() {
      return n();
    },
    set current(a) {
      r.set(a);
    }
  } : {
    get current() {
      return n();
    }
  };
}
const Rp = Symbol("hover");
function Ih(r) {
  gr(Rp, r);
}
function Ch() {
  return He(Rp) ?? et(!1);
}
const $l = Symbol("packageInfo");
function Up(r) {
  gr($l, r);
}
function Th() {
  const r = He($l);
  if (r === void 0)
    throw new Error("PackageInfo context not found");
  return r;
}
const Dh = et(void 0);
function Ah() {
  return He($l) ?? Dh;
}
const Vp = Symbol("paywall");
function Wp(r) {
  gr(Vp, r);
}
function Pt() {
  const r = He(Vp);
  if (r === void 0)
    throw new Error("Paywall context not found");
  return r;
}
const Hp = Symbol("selected");
function Yi(r) {
  gr(Hp, r);
}
function Fh() {
  return He(Hp) ?? et(!1);
}
const Ko = {
  Boolean: "boolean",
  Integer: "integer",
  Double: "double",
  String: "string"
}, qh = "$value", Mh = 1e-10;
var To, kn, Vt, $n, za, Oa, Wr, gl, fl, di, pi;
class Yp {
  constructor(e = {}) {
    Oe(this, Wr);
    Oe(this, To, mr(0));
    Oe(this, kn, {});
    Oe(this, Vt, {});
    Oe(this, $n, {});
    // Cached per-version snapshots, invalidated in #bump() on any state change, so the
    // getters don't reclone for every subscribing component on every reactive tick.
    Oe(this, za, null);
    Oe(this, Oa, null);
    ee(this, "subscribe");
    this.subscribe = H(this, To).subscribe, sr(this, Wr, gl).call(this, e);
  }
  /**
   * Additive, non-overwriting registration.
   * Used by workflow screens to incrementally contribute their declarations to the shared store.
   */
  registerDeclarations(e) {
    let t = !1;
    for (const [n, a] of Object.entries(e)) {
      if (Object.hasOwn(H(this, kn), n))
        continue;
      const i = sr(this, Wr, di).call(this, a.default, a.type);
      i !== void 0 && (H(this, kn)[n] = i, H(this, $n)[n] = a.type, Object.hasOwn(H(this, Vt), n) || (H(this, Vt)[n] = i, t = !0));
    }
    t && sr(this, Wr, pi).call(this);
  }
  /** Replaces all declarations and values. Used when the workflow prop is swapped. */
  reset(e) {
    qe(this, kn, {}), qe(this, Vt, {}), qe(this, $n, {}), qe(this, za, null), qe(this, Oa, null), sr(this, Wr, gl).call(this, e), sr(this, Wr, pi).call(this);
  }
  /**
   * Apply a list of state updates, writing each resolved value to the target key.
   * Undeclared keys and type mismatches are ignored (iOS parity).
   */
  applyUpdates(e, t) {
    let n = !1;
    for (const a of e) {
      const i = a.to === qh ? t : a.to;
      if (i === void 0)
        continue;
      const s = sr(this, Wr, fl).call(this, i, a.set);
      s !== void 0 && H(this, Vt)[a.set] !== s && (H(this, Vt)[a.set] = s, n = !0);
    }
    n && sr(this, Wr, pi).call(this);
  }
  /** Snapshot of current state values (defaults overlaid with applied updates). */
  get values() {
    return H(this, za) ?? qe(this, za, { ...H(this, Vt) });
  }
  /** Snapshot of declared default values. */
  get defaults() {
    return H(this, Oa) ?? qe(this, Oa, { ...H(this, kn) });
  }
  /** Returns true if the given value is compatible with the declared type of the key. */
  matchesDeclaredType(e, t) {
    return sr(this, Wr, fl).call(this, e, t) !== void 0;
  }
}
To = new WeakMap(), kn = new WeakMap(), Vt = new WeakMap(), $n = new WeakMap(), za = new WeakMap(), Oa = new WeakMap(), Wr = new WeakSet(), gl = function(e) {
  for (const [t, n] of Object.entries(e)) {
    const a = sr(this, Wr, di).call(this, n.default, n.type);
    a !== void 0 && (H(this, kn)[t] = a, H(this, Vt)[t] = a, H(this, $n)[t] = n.type);
  }
}, fl = function(e, t) {
  return sr(this, Wr, di).call(this, e, H(this, $n)[t]);
}, di = function(e, t) {
  if (t !== void 0 && (t === Ko.String && typeof e == "string" || t === Ko.Boolean && typeof e == "boolean" || t === Ko.Double && typeof e == "number" || t === Ko.Integer && typeof e == "number" && Number.isInteger(e)))
    return e;
}, pi = function() {
  qe(this, za, null), qe(this, Oa, null), H(this, To).update((e) => e + 1);
};
const Gp = Symbol("paywall-state");
function Kp(r) {
  gr(Gp, r);
}
function Gi() {
  return He(Gp);
}
function zh() {
  return Gi() ?? et(0);
}
const ec = Symbol("variables");
function rc(r) {
  gr(ec, r);
}
function tc() {
  const r = He(ec);
  if (r === void 0)
    throw new Error("Variables context not found");
  return r;
}
const Oh = et(void 0);
function nc() {
  return He(ec) ?? Oh;
}
function lt(r = {}) {
  const e = Rn(Fh()), t = r.hover ? Rn(Ch()) : null, n = Rn(Ah()), a = Rn(Pt().selectedPackageId), i = Rn(nc()), s = r.state ? Gi() : void 0, l = r.state ? Rn(zh()) : null;
  return (c) => {
    l == null || l.current;
    const u = {
      selectedPackageId: a.current,
      packageInfo: n.current,
      variables: i.current ?? {},
      selected: e.current,
      ...c
    };
    return t && (u.hover = t.current), r.state && (u.stateValues = (s == null ? void 0 : s.values) ?? {}, u.stateDefaults = (s == null ? void 0 : s.defaults) ?? {}), u;
  };
}
const Xp = Symbol("inputValidation"), Zp = Symbol("initialInputSelections");
function Nh(r = !0) {
  const e = mr(r);
  return {
    isSatisfied: e,
    updateSatisfaction: (n) => {
      e.set(n);
    }
  };
}
function Lh(r) {
  gr(Xp, r);
}
function Ki() {
  return He(Xp);
}
function jh(r) {
  gr(Zp, r);
}
function Jp() {
  return He(Zp) ?? {};
}
const Qp = Symbol("localization");
function Bh(r) {
  const t = {
    getLocalizedString: (n) => {
      var d, p;
      if (!n)
        return "";
      const { selectedLocale: a, defaultLocale: i, localizations: s } = r(), c = (d = s[a ?? i]) == null ? void 0 : d[n], u = (p = s[i]) == null ? void 0 : p[n];
      return c ?? u;
    }
  };
  return gr(Qp, t), t;
}
function Xi() {
  const r = He(Qp);
  if (r === void 0)
    throw new Error("Localization context not found");
  return r;
}
const $p = {
  StateCondition: "state_condition"
};
function Rh(r) {
  switch (r.type) {
    case "stack": {
      const e = [...r.components];
      return r.badge && e.push(r.badge.stack), e;
    }
    case "button":
    case "purchase_button":
    case "redemption_button":
      return [r.stack];
    case "carousel":
      return r.pages;
    case "countdown": {
      const e = [r.countdown_stack];
      return r.end_stack && e.push(r.end_stack), e;
    }
    case "footer":
      return [r.stack];
    case "input_multiple_choice":
    case "input_single_choice":
    case "input_option":
      return [r.stack];
    case "tabs":
      return [r.control.stack, ...r.tabs];
    case "tab":
      return [r.stack];
    case "tab_control_button":
      return [r.stack];
    case "timeline":
      return r.items.flatMap((e) => {
        const t = [e.icon, e.title];
        return e.description && t.push(e.description), t;
      });
    case "express_purchase_button":
      return [
        r.wallet_unknown_stack,
        r.wallet_available_stack,
        r.wallet_unavailable_stack
      ];
    default:
      return [];
  }
}
function Xo(r, e) {
  const t = [r];
  for (; t.length > 0; ) {
    const n = t.pop();
    if (n.type === "package" && e(n))
      return n;
    const a = Rh(n);
    for (let i = a.length - 1; i >= 0; i--)
      t.push(a[i]);
  }
}
function Uh({ stack: r, sticky_footer: e }) {
  const t = Xo(r, (a) => a.is_selected_by_default);
  if (t !== void 0)
    return t.package_id;
  const n = Xo(r, () => !0);
  if (n !== void 0)
    return n.package_id;
  if (e != null) {
    const a = Xo(e, (s) => s.is_selected_by_default);
    if (a !== void 0)
      return a.package_id;
    const i = Xo(e, () => !0);
    if (i !== void 0)
      return i.package_id;
  }
}
const ct = (r, e) => {
  if (!e)
    return {};
  let t = {};
  for (const n of e)
    if (n.conditions.every((a) => Vh(a, r))) {
      const a = { ...n.properties }, i = n.conditions.some((s) => s.type === $p.StateCondition);
      (a.visible === null || a.visible === !0 && !i) && delete a.visible, t = { ...t, ...a };
    }
  return t;
}, Vh = (r, e) => {
  var t, n, a;
  if (r.type === "selected")
    return !!e.selected;
  if (r.type === "hover")
    return !!e.hover;
  if (r.type === "focus")
    return !!e.focus;
  if (r.type === "error")
    return !!e.error;
  if (r.type === "multiple_intro_offers")
    return !1;
  if (r.type === "intro_offer" || r.type === "intro_offer_condition") {
    const i = !!((t = e.packageInfo) != null && t.hasIntroOffer) || !!((n = e.packageInfo) != null && n.hasTrial);
    if (r.type === "intro_offer")
      return i;
    if (r.operator === "=")
      return i === r.value;
    if (r.operator === "!=")
      return i !== r.value;
  }
  if (r.type === "promo_offer" || r.type === "promo_offer_condition") {
    const i = !!((a = e.packageInfo) != null && a.hasPromoOffer);
    if (r.type === "promo_offer")
      return i;
    if (r.operator === "=")
      return i === r.value;
    if (r.operator === "!=")
      return i !== r.value;
  }
  if (r.type === "selected_package_condition") {
    const i = e.selectedPackageId ?? "";
    if (r.operator === "in")
      return r.packages.includes(i);
    if (r.operator === "not in")
      return !r.packages.includes(i);
  }
  if (r.type === "variable_condition") {
    const i = r.variable.replace(/^\$?custom\./, ""), s = e.variables[i], l = r.value, c = String(typeof l == "object" && l !== null && "value" in l ? l.value : l);
    if (r.operator === "=")
      return s === c;
    if (r.operator === "!=")
      return s !== c;
  }
  if (r.type === $p.StateCondition) {
    const i = e.stateValues ?? {}, s = e.stateDefaults ?? {}, l = Object.hasOwn(i, r.name), c = Object.hasOwn(s, r.name);
    if (!l && !c)
      return !1;
    const u = l ? i[r.name] : s[r.name];
    if (typeof u != typeof r.value)
      return !1;
    const d = Wh(u, r.value);
    if (r.operator === "=")
      return d;
    if (r.operator === "!=")
      return !d;
  }
  return !1;
};
function Wh(r, e) {
  return typeof r == "string" && typeof e == "string" || typeof r == "boolean" && typeof e == "boolean" ? r === e : typeof r == "number" && typeof e == "number" ? Math.abs(r - e) < Mh : !1;
}
function nu(r, e, t) {
  return e !== !1 && (r === "workflow" || r === "complete_workflow") && !t;
}
function Hh(r, e) {
  _e(e, !0);
  const t = () => Be(u, "$selectedPackageId", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), {
    emitComponentInteraction: s,
    onButtonAction: l,
    hideBackButtons: c,
    selectedPackageId: u
  } = Pt(), d = lt(), p = /* @__PURE__ */ m(() => ({
    ...i,
    ...ct(d(), e.overrides)
  })), _ = /* @__PURE__ */ m(() => o(p).action), f = /* @__PURE__ */ m(() => o(p).stack), g = Ki(), { getLocalizedString: w } = Xi(), k = Rn((g == null ? void 0 : g.isSatisfied) ?? et(!0)), h = () => {
    switch (o(_).type) {
      case "workflow":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "workflow"
        };
      case "complete_workflow": {
        const C = w(o(_).url.url_lid);
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "navigate_to_url",
          ...C ? { componentURL: C } : {}
        };
      }
      case "navigate_back":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "navigate_back"
        };
      case "close_workflow":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "close_workflow"
        };
      case "restore_purchases":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "restore_purchases"
        };
    }
    switch (o(_).destination) {
      case "customer_center":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "navigate_to_customer_center"
        };
      case "screen_redirect":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "screen_redirect"
        };
      case "privacy_policy":
      case "terms":
      case "url": {
        const C = w(o(_).url.url_lid);
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: o(_).destination === "privacy_policy" ? "navigate_to_privacy_policy" : o(_).destination === "terms" ? "navigate_to_terms" : "navigate_to_url",
          ...C ? { componentURL: C } : {}
        };
      }
      case "sheet":
        throw new Error("Sheet actions must be handled by the sheet branches in onclick");
      case "offer_code":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "navigate_to_offer_code"
        };
      case "web_paywall_link":
        return {
          componentType: "button",
          componentName: e.name,
          componentValue: "navigate_to_web_paywall_link"
        };
    }
  }, y = (C) => {
    var S;
    return {
      componentType: "package_selection_sheet",
      componentName: ((S = C.sheet) == null ? void 0 : S.name) ?? e.name,
      componentValue: "open",
      currentPackageId: t()
    };
  }, b = () => {
    if (nu(o(_).type, e.require_valid_inputs, k.current))
      return;
    const C = o(_).type === "workflow" ? e.id : void 0;
    if (o(_).type === "navigate_to" && o(_).destination === "sheet") {
      o(_).sheet != null && s(y(o(_))), l(o(_), C);
      return;
    }
    s(h()), l(o(_), C);
  }, v = /* @__PURE__ */ m(() => {
    switch (o(_).type) {
      case "workflow":
        return !0;
      case "complete_workflow":
        return !0;
      case "restore_purchases":
        return !1;
      case "navigate_back":
        return !c;
      case "close_workflow":
        return !0;
      case "navigate_to":
        return o(_).destination !== "web_paywall_link";
      default:
        return !0;
    }
  });
  var P = Ee(), I = ce(P);
  {
    var E = (C) => {
      const S = /* @__PURE__ */ m(() => nu(o(_).type, e.require_valid_inputs, k.current));
      {
        let F = /* @__PURE__ */ m(() => o(S) ? {
          opacity: "0.4",
          "pointer-events": "none",
          cursor: "not-allowed"
        } : void 0), D = /* @__PURE__ */ m(() => `button-${o(_).type}`);
        Tr(C, dr(() => o(f), {
          onclick: b,
          get style() {
            return o(F);
          },
          get testId() {
            return o(D);
          }
        }));
      }
    };
    G(I, (C) => {
      o(v) && C(E);
    });
  }
  x(r, P), ge(), a();
}
const au = 1e3, ml = "light", Yh = "#000000", ho = {
  top: 0,
  bottom: 0,
  leading: 0,
  trailing: 0
};
var Do, Ao;
class Gh {
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(e, t) {
    Oe(this, Do);
    Oe(this, Ao);
    qe(this, Do, e), qe(this, Ao, Vl(t));
  }
  get current() {
    return H(this, Ao).call(this), H(this, Do).call(this);
  }
}
Do = new WeakMap(), Ao = new WeakMap();
const Kh = /\(.+\)/, Xh = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class Zh extends Gh {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(e, t) {
    let n = Kh.test(e) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    e.split(/[\s,]+/).some((i) => Xh.has(i.trim())) ? e : `(${e})`;
    const a = window.matchMedia(n);
    super(
      () => a.matches,
      (i) => Gf(a, "change", i)
    );
  }
}
const e_ = Symbol("color-mode");
function Jh(r) {
  const e = new Zh("prefers-color-scheme: dark", ((r == null ? void 0 : r()) ?? ml) === "dark"), t = () => (r == null ? void 0 : r()) ?? (e.current ? "dark" : ml);
  return gr(e_, t), t;
}
function rt() {
  return He(e_) ?? (() => ml);
}
var ou;
(function(r) {
  r.body_s = "p", r.body_m = "p", r.body_l = "p", r.body_xl = "p", r.heading_xs = "h6", r.heading_s = "h5", r.heading_m = "h4", r.heading_l = "h3", r.heading_xl = "h2", r.heading_xxl = "h1";
})(ou || (ou = {}));
var Ua;
(function(r) {
  r[r.extra_light = 100] = "extra_light", r[r.thin = 200] = "thin", r[r.light = 300] = "light", r[r.regular = 400] = "regular", r[r.medium = 500] = "medium", r[r.semibold = 600] = "semibold", r[r.bold = 700] = "bold", r[r.extra_bold = 800] = "extra_bold", r[r.black = 900] = "black";
})(Ua || (Ua = {}));
var xi;
(function(r) {
  r.body_s = "13px", r.body_m = "14px", r.body_l = "15px", r.body_xl = "16px", r.heading_xs = "14px", r.heading_s = "16px", r.heading_m = "18px", r.heading_l = "20px", r.heading_xl = "26px", r.heading_xxl = "32px";
})(xi || (xi = {}));
var wn;
(function(r) {
  r.leading = "start", r.center = "center", r.trailing = "end";
})(wn || (wn = {}));
var iu;
(function(r) {
  r.vertical = "column", r.horizontal = "row", r.zlayer = "zstack";
})(iu || (iu = {}));
var su;
(function(r) {
  r.top = "flex-start", r.leading = "flex-start", r.center = "center", r.bottom = "flex-end", r.trailing = "flex-end";
})(su || (su = {}));
var lu;
(function(r) {
  r.space_between = "space-between", r.space_around = "space-around", r.space_evenly = "space-evenly", r.start = "flex-start", r.center = "center", r.end = "flex-end";
})(lu || (lu = {}));
function nr(r) {
  return Object.entries(r).map(([e, t]) => `${e}:${t}`).join(";");
}
function Pr(r) {
  return `${r}px`;
}
function r_(...r) {
  return r.map(Pr).join(" ");
}
function Yr(r, e) {
  return e[r] ?? e.light;
}
function hr(r) {
  switch (r.type) {
    case "fill":
      return navigator.userAgent.includes("Firefox") ? "-moz-available" : "-webkit-fill-available";
    case "fit":
      return "fit-content";
    case "fixed":
      return Pr(r.value);
    case "relative":
      return `${r.value * 100}%`;
  }
}
function kr(r) {
  const { top: e, bottom: t, leading: n, trailing: a } = r ?? ho;
  return r_(e, a, t, n);
}
function Lo(r) {
  if (r.type === "alias" || r.type === "hex")
    return r.value;
  const e = r.points.map((t) => `${t.color} ${t.percent}%`).join(", ");
  switch (r.type) {
    case "linear":
      return `linear-gradient(${r.degrees}deg, ${e})`;
    case "radial":
      return `radial-gradient(circle, ${e})`;
  }
}
function $r(r, e) {
  if (e == null)
    return "transparent";
  const t = Yr(r, e);
  return Lo(t);
}
function Ei(r, e) {
  return e == null ? "transparent" : $r(r, e);
}
function Dn(r, e) {
  const t = {
    "--rc-border-display": "none",
    "--rc-border-bg": "transparent",
    "--rc-border-width": "0px"
  };
  if (e == null)
    return {
      border: "none",
      ...t
    };
  const { width: n } = e, a = Yr(r, e.color), i = Lo(a);
  return a.type === "alias" || a.type === "hex" ? {
    border: `${n}px solid ${i}`,
    ...t
  } : {
    border: `${n}px solid transparent`,
    "--rc-border-display": "block",
    "--rc-border-bg": i,
    "--rc-border-width": `${n}px`
  };
}
function Qh(r) {
  if (r == null)
    return "0";
  const { top_leading: e, top_trailing: t, bottom_trailing: n, bottom_leading: a } = r;
  return r_(e, t, n, a);
}
function Nn(r) {
  switch (r == null ? void 0 : r.type) {
    case void 0:
    case "concave":
    case "convex":
      return "0";
    case "rectangle":
      return `${Qh(r.corners)}`;
    case "circle":
    case "pill":
      return "9999px";
  }
}
function ua(r, e) {
  if (e == null)
    return "none";
  const { x: t, y: n, radius: a } = e, i = $r(r, e.color);
  return `${t}px ${n}px ${a}px ${i}`;
}
function Va(r) {
  switch (r) {
    case "fill":
      return "cover";
    case "fit":
      return "contain";
  }
}
function $h(r, e) {
  const t = Yr(r, e), n = String(t.url_low_res ?? "").trim();
  return {
    url: t.url,
    url_low_res: n.length > 0 ? n : null
  };
}
function jo(r, e) {
  const t = rv(e), n = $h(r, e.value);
  return {
    url: n.url,
    url_low_res: n.url_low_res,
    fit: Va(t.fit_mode),
    position: t.fit_mode === "fill" ? "center" : "top center",
    overlay: Ei(r, e.color_overlay),
    mute: t.mute_audio,
    loop: t.loop,
    posterWebp: t.fallback_image ? Yr(r, t.fallback_image).webp : null
  };
}
function ev(r, e) {
  return `url(${Yr(r, e).webp})`;
}
function rv(r) {
  return {
    fit_mode: r.fit_mode ?? "fill",
    mute_audio: r.mute_audio ?? !0,
    loop: r.loop ?? !0,
    fallback_image: r.fallback_image ?? null
  };
}
function tv(r, e, t) {
  return t == null ? e == null ? "none" : $r(r, e) : t.type === "color" ? $r(r, e ?? t.value) : t.type === "image" ? ev(r, t.value) : "transparent";
}
function nv(r, e) {
  var a, i;
  const t = (i = (a = r == null ? void 0 : r.components_config) == null ? void 0 : a.base) == null ? void 0 : i.background;
  if (t == null)
    return { kind: "none" };
  if (t.type === "video") {
    const s = jo(e, t);
    return {
      kind: "video",
      url: s.url,
      url_low_res: s.url_low_res,
      fit: s.fit,
      position: s.position,
      overlay: s.overlay,
      mute: s.mute,
      loop: s.loop,
      posterWebp: s.posterWebp
    };
  }
  if (t.type !== "image") {
    const s = Ln(e, null, t), l = s["--overlay"] ?? "none", c = { ...s };
    return delete c["--overlay"], { kind: "style", style: c, overlay: l };
  }
  return {
    kind: "image",
    src: Yr(e, t.value).webp,
    fit: Va(t.fit_mode),
    position: t.fit_mode === "fill" ? "center" : "top center",
    overlay: Ei(e, t.color_overlay)
  };
}
function Ln(r, e, t) {
  if ((t == null ? void 0 : t.type) === "video")
    return {
      background: "transparent",
      "--overlay": Ei(r, t.color_overlay)
    };
  const n = tv(r, e, t);
  if ((t == null ? void 0 : t.type) !== "image")
    return {
      background: n,
      "--overlay": "none"
    };
  const { fit_mode: a, color_overlay: i } = t;
  return {
    background: n,
    "background-size": Va(a),
    "background-position": a === "fill" ? "center" : "top center",
    "background-repeat": "no-repeat",
    "--overlay": Ei(r, i)
  };
}
function hl(r) {
  return r.startsWith("RCFM:");
}
function vo(r) {
  return `RevCatPaywall-${r}`;
}
async function av(r) {
  var t;
  if (!r.app.fonts || typeof document > "u")
    return;
  const e = [];
  for (const [n, a] of Object.entries(r.app.fonts)) {
    const i = a.web;
    if (!i || !i.url || !i.family) {
      console.warn(`[Font Registration] Skipping font ${n}: missing web config or required fields`);
      continue;
    }
    try {
      const s = `${vo(i.family)}-${i.style}-${i.weight}`, l = new FontFace(s, `url(${i.url})`, {
        weight: ((t = i.weight) == null ? void 0 : t.toString()) || "400",
        style: i.style || "normal"
      });
      l.family = vo(i.family);
      const c = l.load().then(() => {
        document.fonts.add(l), console.debug(`[Font Registration] Successfully registered font: ${s} (${i.family}, ${i.weight}, ${i.style})`);
      }).catch((u) => {
        console.warn(`[Font Registration] Failed to load font ${i.family}:`, u);
      });
      e.push(c);
    } catch (s) {
      console.warn(`[Font Registration] Failed to create FontFace for ${n}:`, s);
    }
  }
  try {
    await Promise.allSettled(e), console.debug(`[Font Registration] Font registration complete. Processed ${e.length} fonts.`);
  } catch (n) {
    console.warn("[Font Registration] Unexpected error during font registration:", n);
  }
}
function ov(r) {
  return r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();
}
const iv = {
  uppercase: (r) => String(r ?? "").toUpperCase(),
  lowercase: (r) => String(r ?? "").toLowerCase(),
  capitalize: (r) => String(r ?? "").replaceAll(new RegExp("(\\p{Letter}+)", "giu"), ov)
}, sv = /^\$?custom\./;
function lv(r, e) {
  const t = /\{\{\s*([$a-z0-9._-]+)(?:\s*\|\s*([^}]*))?\s*\}\}/gi;
  return r.replace(t, (n, a, i) => {
    var d;
    const s = (d = a == null ? void 0 : a.trim()) == null ? void 0 : d.replace(sv, ""), l = s && e[s];
    if (l === void 0)
      return "";
    const c = i == null ? void 0 : i.trim();
    if (c === void 0)
      return l;
    const u = iv[c];
    return u ? u(l) : l;
  });
}
function t_(r = "", e) {
  return lv(r, e ?? {});
}
const cv = {
  light: { type: "hex", value: Yh }
};
function vl(r, e) {
  const t = Yr(r, e), n = Lo(t);
  switch (t.type) {
    case "alias":
    case "hex":
      return { color: n };
    case "linear":
    case "radial":
      return {
        color: "transparent",
        background: n,
        "-webkit-background-clip": "text",
        "background-clip": "text"
      };
  }
}
const uv = (r, e, t) => {
  var g;
  const { font_name: n, font_size: a, font_weight: i, font_weight_int: s, horizontal_alignment: l, color: c = cv, padding: u, margin: d, size: p } = e, _ = t[n ?? ""], f = (g = _ == null ? void 0 : _.web) == null ? void 0 : g.family;
  return nr({
    display: "block",
    width: hr(p.width),
    height: hr(p.height),
    margin: kr(d),
    padding: kr(u),
    ...vl(r, c),
    "text-align": wn[l] || wn.leading,
    "font-weight": s ?? Ua[i] ?? Ua.regular,
    "font-size": Number.isInteger(Number(a)) ? `${a}px` : xi[a] || xi.body_m,
    "font-family": hl(n ?? "") ? vo(f ?? "") : "sans-serif"
  });
};
function dv(r, e, t, n) {
  return nr({
    display: "block",
    position: "relative",
    width: hr(t.width),
    height: hr(t.height),
    ...Ln(r, n, null)
  });
}
const pv = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function _v(r) {
  return r.replace(/[&<>"']/g, (e) => pv[e]);
}
const gv = ["http", "https", "mailto", "tel"];
function fv(r) {
  const t = Array.from(r).filter((n) => n.charCodeAt(0) > 32).join("").toLowerCase().match(/^([a-z][a-z0-9+.-]*):/);
  return t && !gv.includes(t[1]) ? null : r;
}
function mv(r) {
  if (!r)
    return "";
  const e = _v(r), t = [], n = e.replaceAll(/\\([\\`*_[\]{}()#+\-.!~])/g, (s, l) => (t.push(l), `\0RC_ESCAPED_MARKDOWN_${t.length - 1}\0`)), i = Object.values({
    newLine: { regexp: /\\\n/g, output: "<br/>" },
    bold: { regexp: /\*\*(.*?)\*\*/g, output: "<b>$1</b>" },
    italic: { regexp: /\*(.*?)\*/g, output: "<i>$1</i>" },
    strikethrough: { regexp: /~(.*?)~/g, output: "<s>$1</s>" },
    code: {
      regexp: /`(.*?)`/g,
      output: "<span style='font-family: monospace'>$1</span>"
    },
    link: {
      regexp: /\[(.*?)\]\((.*?)\)/g,
      output: (s, l, c) => {
        const u = fv(c);
        return u === null ? l : `<a href="${u}" target='_blank' rel='noopener noreferrer'>${l}</a>`;
      }
    }
  }).reduce((s, { regexp: l, output: c }) => s.replaceAll(l, c), n);
  return t.reduce((s, l, c) => s.replaceAll(`\0RC_ESCAPED_MARKDOWN_${c}\0`, l), i);
}
var hv = /* @__PURE__ */ V('<div class="rc-gradient-border"><input class="svelte-ft2y3d"/></div>');
const vv = {
  hash: "svelte-ft2y3d",
  code: "input.svelte-ft2y3d {width:100%;height:100%;border:none;background:transparent;border-radius:inherit;}input.svelte-ft2y3d:focus-visible {outline:none;}input.svelte-ft2y3d::placeholder {color:var(--placeholder-color);background:var(--placeholder-background);background-clip:var(--placeholder-background-clip);-webkit-background-clip:var(--placeholder-webkit-background-clip);text-align:var(--placeholder-text-align);font-weight:var(--placeholder-font-weight);font-size:var(--placeholder-font-size);font-family:var(--placeholder-font-family);}"
};
function yv(r, e) {
  _e(e, !0), ke(r, vv);
  const t = () => Be(Ie, "$variables", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]);
  let s = /* @__PURE__ */ re(!1), l = /* @__PURE__ */ re(!1), c = /* @__PURE__ */ re(!e.required);
  const u = lt({ state: !0 }), d = /* @__PURE__ */ m(() => ({
    ...i,
    ...ct(u({ focus: o(s), error: o(l) }), e.overrides)
  })), p = /* @__PURE__ */ m(() => o(d).placeholder_lid), _ = /* @__PURE__ */ m(() => o(d).keyboard_type), f = /* @__PURE__ */ m(() => o(d).capitalize), g = /* @__PURE__ */ m(() => o(d).field_id), w = /* @__PURE__ */ m(() => o(d).reserved_attribute), k = /* @__PURE__ */ m(() => o(d).required), h = /* @__PURE__ */ m(() => o(d).size), y = /* @__PURE__ */ m(() => o(d).padding), b = /* @__PURE__ */ m(() => o(d).margin), v = /* @__PURE__ */ m(() => o(d).vertical_alignment), P = /* @__PURE__ */ m(() => o(d).border), I = /* @__PURE__ */ m(() => o(d).shape), E = /* @__PURE__ */ m(() => o(d).shadow), C = /* @__PURE__ */ m(() => o(d).font_name), S = /* @__PURE__ */ m(() => o(d).font_weight_int), F = /* @__PURE__ */ m(() => o(d).font_size), D = /* @__PURE__ */ m(() => o(d).horizontal_alignment), O = /* @__PURE__ */ m(() => o(d).color), N = /* @__PURE__ */ m(() => o(d).placeholder_font_name), L = /* @__PURE__ */ m(() => o(d).placeholder_font_weight_int), Z = /* @__PURE__ */ m(() => o(d).placeholder_font_size), z = /* @__PURE__ */ m(() => o(d).placeholder_horizontal_alignment), M = /* @__PURE__ */ m(() => o(d).placeholder_color), A = /* @__PURE__ */ m(() => o(d).background_color), U = /* @__PURE__ */ m(() => o(d).visible);
  function j(De) {
    const Ye = De.value.trim();
    if (o(_) === "password") {
      oe == null || oe(o(g), Ye);
      return;
    }
    o(w) ? B ? B(o(w), Ye) : console.error("onReservedAttributeChanged is not set") : $ == null || $(o(g), Ye);
  }
  function R(De) {
    q(l, !De.validity.valid), !o(l) && j(De);
  }
  const Q = (De) => {
    const Ye = De.currentTarget;
    q(c, Ye.validity.valid, !0), o(c) && j(Ye), o(l) && R(Ye);
  }, se = (De) => {
    q(s, !1), q(c, De.currentTarget.validity.valid, !0), R(De.currentTarget);
  }, te = Ki(), le = rt(), ae = /* @__PURE__ */ m(le), {
    uiConfig: Y,
    onInputChanged: $,
    onSensitiveInputChanged: oe,
    onReservedAttributeChanged: B
  } = Pt(), de = /* @__PURE__ */ m(() => o(v) === "top" ? "flex-start" : o(v) === "bottom" ? "flex-end" : null), J = /* @__PURE__ */ m(() => nr({
    display: "flex",
    ...o(de) ? { "align-items": o(de) } : {},
    width: hr(o(h).width),
    height: hr(o(h).height),
    margin: kr(o(b)),
    ...Ln(o(ae), o(A), null),
    ...Dn(o(ae), o(P)),
    "border-radius": Nn(o(I)),
    "box-shadow": ua(o(ae), o(E))
  })), ie = /* @__PURE__ */ m(() => {
    var or, _r;
    const De = Y.app.fonts[o(C) ?? ""], Ye = (or = De == null ? void 0 : De.web) == null ? void 0 : or.family, Ke = Y.app.fonts[o(N) ?? ""], pe = (_r = Ke == null ? void 0 : Ke.web) == null ? void 0 : _r.family, Le = vl(o(ae), o(M));
    return nr({
      ...o(de) ? { height: "auto" } : {},
      padding: kr(o(y)),
      ...vl(o(ae), o(O)),
      "text-align": wn[o(D)] || wn.leading,
      "font-weight": o(S) ?? Ua.regular,
      "font-size": `${o(F)}px`,
      "font-family": hl(o(C) ?? "") ? vo(Ye ?? "") : "sans-serif",
      "--placeholder-color": Le.color,
      "--placeholder-background": Le.background,
      "--placeholder-background-clip": Le["background-clip"],
      "--placeholder-webkit-background-clip": Le["-webkit-background-clip"],
      "--placeholder-text-align": wn[o(z)] || wn.leading,
      "--placeholder-font-weight": o(L) ?? Ua.regular,
      "--placeholder-font-size": `${o(Z)}px`,
      "--placeholder-font-family": hl(o(N) ?? "") ? vo(pe ?? "") : "sans-serif"
    });
  }), Ie = nc(), { getLocalizedString: we } = Xi(), xe = /* @__PURE__ */ m(() => t_(we(o(p)), t())), Se = /* @__PURE__ */ m(() => {
    switch (e.keyboard_type) {
      case "decimal":
      case "numeric":
        return "number";
      case "email":
        return "email";
      case "password":
        return "password";
      case "tel":
        return "tel";
      case "text":
        return "text";
      case "url":
        return "url";
    }
  }), Ue = /* @__PURE__ */ m(() => o(_) === "password" ? "text" : o(_)), ye = /* @__PURE__ */ m(() => o(U) !== !1);
  te && ar(() => {
    te.updateSatisfaction(!o(ye) || o(c));
  });
  var Ce = Ee(), Te = ce(Ce);
  {
    var Pe = (De) => {
      var Ye = hv(), Ke = T(Ye);
      Ke.__input = Q, K(() => {
        Fe(Ye, o(J)), he(Ke, "type", o(Se)), he(Ke, "placeholder", o(xe)), Ke.required = o(k), he(Ke, "inputmode", o(Ue)), he(Ke, "autocapitalize", o(f)), Fe(Ke, o(ie));
      }), qr("focus", Ke, () => q(s, !0)), qr("blur", Ke, se), x(De, Ye);
    };
    G(Te, (De) => {
      o(ye) && De(Pe);
    });
  }
  x(r, Ce), ge(), a();
}
Jt(["input"]);
const n_ = Symbol("inputChoice");
function a_(r, e, t = !1, n = null, a = []) {
  const i = mr(new Set(a)), s = Ct(i, (d) => (n == null ? void 0 : n.max) == null ? !1 : d.size >= n.max), l = Ct(i, (d) => {
    const p = d.size;
    return !t && n == null ? !0 : t && n == null ? p >= 1 : t && n != null ? n.min === n.max ? p === n.min : p >= n.min && p <= n.max : !0;
  });
  let c = !1;
  return s.subscribe((d) => c = d), {
    fieldId: r,
    mode: e,
    required: t,
    selectionRange: n,
    selectedOptionIds: i,
    selectOption: (d) => {
      i.update((p) => {
        if (e === "single")
          return /* @__PURE__ */ new Set([d]);
        const _ = new Set(p);
        return _.has(d) ? _.delete(d) : c || _.add(d), _;
      });
    },
    isAtMax: s,
    isSatisfied: l
  };
}
function o_(r) {
  gr(n_, r);
}
function bv() {
  return He(n_);
}
function kv(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { stack: n, field_id: a, required: i = !1, selection_range: s = null } = t, c = Jp()[a] ?? [], u = a_(a, "multiple", i, s, c);
  o_(u);
  const d = Ki();
  if (d) {
    const p = u.isSatisfied.subscribe((_) => {
      d.updateSatisfaction(_);
    });
    Tt(p);
  }
  co(r, {
    get nodeData() {
      return n;
    }
  }), ge();
}
var wv = /* @__PURE__ */ V('<div class="option-wrapper svelte-7dwsc9"><!></div>');
const Pv = {
  hash: "svelte-7dwsc9",
  code: ".option-wrapper.svelte-7dwsc9 {display:contents;}"
};
function xv(r, e) {
  _e(e, !0), ke(r, Pv);
  const t = () => Be(_, "$isDisabled", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { stack: s, option_id: l } = i, { onButtonAction: c, onInputChanged: u } = Pt(), d = bv(), p = d ? Ct(d.selectedOptionIds, (v) => v.has(l)) : et(!1);
  Yi(p);
  const _ = d ? Ct([p, d.isAtMax], ([v, P]) => !v && P) : et(!1), f = mr(!1);
  Ih(f);
  const g = () => f.set(!0), w = () => f.set(!1), k = () => {
    var I;
    if (t()) return;
    const v = (I = e.triggers) == null ? void 0 : I.on_press;
    d == null || d.selectOption(l);
    const P = d == null ? void 0 : d.fieldId;
    P && (u == null || u(P, l, v)), c({ type: "workflow" }, v);
  }, h = /* @__PURE__ */ m(() => t() ? { "pointer-events": "none", opacity: "0.4" } : void 0);
  var y = wv(), b = T(y);
  Tr(b, dr(() => s, {
    onclick: k,
    get style() {
      return o(h);
    }
  })), qr("mouseenter", y, g), qr("mouseleave", y, w), x(r, y), ge(), a();
}
function Ev(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { stack: n, field_id: a, required: i = !1, selection_range: s = null } = t, c = Jp()[a] ?? [], u = a_(a, "single", i, s, c);
  o_(u);
  const d = Ki();
  if (d) {
    const p = u.isSatisfied.subscribe((_) => {
      d.updateSatisfaction(_);
    });
    Tt(p);
  }
  co(r, {
    get nodeData() {
      return n;
    }
  }), ge();
}
function Sv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ba = {}, ys, cu;
function Iv() {
  return cu || (cu = 1, ys = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), ys;
}
var bs = {}, fn = {}, uu;
function da() {
  if (uu) return fn;
  uu = 1;
  let r;
  const e = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  return fn.getSymbolSize = function(n) {
    if (!n) throw new Error('"version" cannot be null or undefined');
    if (n < 1 || n > 40) throw new Error('"version" should be in range from 1 to 40');
    return n * 4 + 17;
  }, fn.getSymbolTotalCodewords = function(n) {
    return e[n];
  }, fn.getBCHDigit = function(t) {
    let n = 0;
    for (; t !== 0; )
      n++, t >>>= 1;
    return n;
  }, fn.setToSJISFunction = function(n) {
    if (typeof n != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    r = n;
  }, fn.isKanjiModeEnabled = function() {
    return typeof r < "u";
  }, fn.toSJIS = function(n) {
    return r(n);
  }, fn;
}
var ks = {}, du;
function ac() {
  return du || (du = 1, function(r) {
    r.L = { bit: 1 }, r.M = { bit: 0 }, r.Q = { bit: 3 }, r.H = { bit: 2 };
    function e(t) {
      if (typeof t != "string")
        throw new Error("Param is not a string");
      switch (t.toLowerCase()) {
        case "l":
        case "low":
          return r.L;
        case "m":
        case "medium":
          return r.M;
        case "q":
        case "quartile":
          return r.Q;
        case "h":
        case "high":
          return r.H;
        default:
          throw new Error("Unknown EC Level: " + t);
      }
    }
    r.isValid = function(n) {
      return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
    }, r.from = function(n, a) {
      if (r.isValid(n))
        return n;
      try {
        return e(n);
      } catch {
        return a;
      }
    };
  }(ks)), ks;
}
var ws, pu;
function Cv() {
  if (pu) return ws;
  pu = 1;
  function r() {
    this.buffer = [], this.length = 0;
  }
  return r.prototype = {
    get: function(e) {
      const t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, t) {
      for (let n = 0; n < t; n++)
        this.putBit((e >>> t - n - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    }
  }, ws = r, ws;
}
var Ps, _u;
function Tv() {
  if (_u) return Ps;
  _u = 1;
  function r(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return r.prototype.set = function(e, t, n, a) {
    const i = e * this.size + t;
    this.data[i] = n, a && (this.reservedBit[i] = !0);
  }, r.prototype.get = function(e, t) {
    return this.data[e * this.size + t];
  }, r.prototype.xor = function(e, t, n) {
    this.data[e * this.size + t] ^= n;
  }, r.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t];
  }, Ps = r, Ps;
}
var xs = {}, gu;
function Dv() {
  return gu || (gu = 1, function(r) {
    const e = da().getSymbolSize;
    r.getRowColCoords = function(n) {
      if (n === 1) return [];
      const a = Math.floor(n / 7) + 2, i = e(n), s = i === 145 ? 26 : Math.ceil((i - 13) / (2 * a - 2)) * 2, l = [i - 7];
      for (let c = 1; c < a - 1; c++)
        l[c] = l[c - 1] - s;
      return l.push(6), l.reverse();
    }, r.getPositions = function(n) {
      const a = [], i = r.getRowColCoords(n), s = i.length;
      for (let l = 0; l < s; l++)
        for (let c = 0; c < s; c++)
          l === 0 && c === 0 || // top-left
          l === 0 && c === s - 1 || // bottom-left
          l === s - 1 && c === 0 || a.push([i[l], i[c]]);
      return a;
    };
  }(xs)), xs;
}
var Es = {}, fu;
function Av() {
  if (fu) return Es;
  fu = 1;
  const r = da().getSymbolSize, e = 7;
  return Es.getPositions = function(n) {
    const a = r(n);
    return [
      // top-left
      [0, 0],
      // top-right
      [a - e, 0],
      // bottom-left
      [0, a - e]
    ];
  }, Es;
}
var Ss = {}, mu;
function Fv() {
  return mu || (mu = 1, function(r) {
    r.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const e = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    r.isValid = function(a) {
      return a != null && a !== "" && !isNaN(a) && a >= 0 && a <= 7;
    }, r.from = function(a) {
      return r.isValid(a) ? parseInt(a, 10) : void 0;
    }, r.getPenaltyN1 = function(a) {
      const i = a.size;
      let s = 0, l = 0, c = 0, u = null, d = null;
      for (let p = 0; p < i; p++) {
        l = c = 0, u = d = null;
        for (let _ = 0; _ < i; _++) {
          let f = a.get(p, _);
          f === u ? l++ : (l >= 5 && (s += e.N1 + (l - 5)), u = f, l = 1), f = a.get(_, p), f === d ? c++ : (c >= 5 && (s += e.N1 + (c - 5)), d = f, c = 1);
        }
        l >= 5 && (s += e.N1 + (l - 5)), c >= 5 && (s += e.N1 + (c - 5));
      }
      return s;
    }, r.getPenaltyN2 = function(a) {
      const i = a.size;
      let s = 0;
      for (let l = 0; l < i - 1; l++)
        for (let c = 0; c < i - 1; c++) {
          const u = a.get(l, c) + a.get(l, c + 1) + a.get(l + 1, c) + a.get(l + 1, c + 1);
          (u === 4 || u === 0) && s++;
        }
      return s * e.N2;
    }, r.getPenaltyN3 = function(a) {
      const i = a.size;
      let s = 0, l = 0, c = 0;
      for (let u = 0; u < i; u++) {
        l = c = 0;
        for (let d = 0; d < i; d++)
          l = l << 1 & 2047 | a.get(u, d), d >= 10 && (l === 1488 || l === 93) && s++, c = c << 1 & 2047 | a.get(d, u), d >= 10 && (c === 1488 || c === 93) && s++;
      }
      return s * e.N3;
    }, r.getPenaltyN4 = function(a) {
      let i = 0;
      const s = a.data.length;
      for (let c = 0; c < s; c++) i += a.data[c];
      return Math.abs(Math.ceil(i * 100 / s / 5) - 10) * e.N4;
    };
    function t(n, a, i) {
      switch (n) {
        case r.Patterns.PATTERN000:
          return (a + i) % 2 === 0;
        case r.Patterns.PATTERN001:
          return a % 2 === 0;
        case r.Patterns.PATTERN010:
          return i % 3 === 0;
        case r.Patterns.PATTERN011:
          return (a + i) % 3 === 0;
        case r.Patterns.PATTERN100:
          return (Math.floor(a / 2) + Math.floor(i / 3)) % 2 === 0;
        case r.Patterns.PATTERN101:
          return a * i % 2 + a * i % 3 === 0;
        case r.Patterns.PATTERN110:
          return (a * i % 2 + a * i % 3) % 2 === 0;
        case r.Patterns.PATTERN111:
          return (a * i % 3 + (a + i) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + n);
      }
    }
    r.applyMask = function(a, i) {
      const s = i.size;
      for (let l = 0; l < s; l++)
        for (let c = 0; c < s; c++)
          i.isReserved(c, l) || i.xor(c, l, t(a, c, l));
    }, r.getBestMask = function(a, i) {
      const s = Object.keys(r.Patterns).length;
      let l = 0, c = 1 / 0;
      for (let u = 0; u < s; u++) {
        i(u), r.applyMask(u, a);
        const d = r.getPenaltyN1(a) + r.getPenaltyN2(a) + r.getPenaltyN3(a) + r.getPenaltyN4(a);
        r.applyMask(u, a), d < c && (c = d, l = u);
      }
      return l;
    };
  }(Ss)), Ss;
}
var Zo = {}, hu;
function i_() {
  if (hu) return Zo;
  hu = 1;
  const r = ac(), e = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], t = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  return Zo.getBlocksCount = function(a, i) {
    switch (i) {
      case r.L:
        return e[(a - 1) * 4 + 0];
      case r.M:
        return e[(a - 1) * 4 + 1];
      case r.Q:
        return e[(a - 1) * 4 + 2];
      case r.H:
        return e[(a - 1) * 4 + 3];
      default:
        return;
    }
  }, Zo.getTotalCodewordsCount = function(a, i) {
    switch (i) {
      case r.L:
        return t[(a - 1) * 4 + 0];
      case r.M:
        return t[(a - 1) * 4 + 1];
      case r.Q:
        return t[(a - 1) * 4 + 2];
      case r.H:
        return t[(a - 1) * 4 + 3];
      default:
        return;
    }
  }, Zo;
}
var Is = {}, ro = {}, vu;
function qv() {
  if (vu) return ro;
  vu = 1;
  const r = new Uint8Array(512), e = new Uint8Array(256);
  return function() {
    let n = 1;
    for (let a = 0; a < 255; a++)
      r[a] = n, e[n] = a, n <<= 1, n & 256 && (n ^= 285);
    for (let a = 255; a < 512; a++)
      r[a] = r[a - 255];
  }(), ro.log = function(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return e[n];
  }, ro.exp = function(n) {
    return r[n];
  }, ro.mul = function(n, a) {
    return n === 0 || a === 0 ? 0 : r[e[n] + e[a]];
  }, ro;
}
var yu;
function Mv() {
  return yu || (yu = 1, function(r) {
    const e = qv();
    r.mul = function(n, a) {
      const i = new Uint8Array(n.length + a.length - 1);
      for (let s = 0; s < n.length; s++)
        for (let l = 0; l < a.length; l++)
          i[s + l] ^= e.mul(n[s], a[l]);
      return i;
    }, r.mod = function(n, a) {
      let i = new Uint8Array(n);
      for (; i.length - a.length >= 0; ) {
        const s = i[0];
        for (let c = 0; c < a.length; c++)
          i[c] ^= e.mul(a[c], s);
        let l = 0;
        for (; l < i.length && i[l] === 0; ) l++;
        i = i.slice(l);
      }
      return i;
    }, r.generateECPolynomial = function(n) {
      let a = new Uint8Array([1]);
      for (let i = 0; i < n; i++)
        a = r.mul(a, new Uint8Array([1, e.exp(i)]));
      return a;
    };
  }(Is)), Is;
}
var Cs, bu;
function zv() {
  if (bu) return Cs;
  bu = 1;
  const r = Mv();
  function e(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(n) {
    this.degree = n, this.genPoly = r.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(n) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const a = new Uint8Array(n.length + this.degree);
    a.set(n);
    const i = r.mod(a, this.genPoly), s = this.degree - i.length;
    if (s > 0) {
      const l = new Uint8Array(this.degree);
      return l.set(i, s), l;
    }
    return i;
  }, Cs = e, Cs;
}
var Ts = {}, Ds = {}, As = {}, ku;
function s_() {
  return ku || (ku = 1, As.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), As;
}
var Dt = {}, wu;
function l_() {
  if (wu) return Dt;
  wu = 1;
  const r = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  t = t.replace(/u/g, "\\u");
  const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + t + `)(?:.|[\r
]))+`;
  Dt.KANJI = new RegExp(t, "g"), Dt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), Dt.BYTE = new RegExp(n, "g"), Dt.NUMERIC = new RegExp(r, "g"), Dt.ALPHANUMERIC = new RegExp(e, "g");
  const a = new RegExp("^" + t + "$"), i = new RegExp("^" + r + "$"), s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return Dt.testKanji = function(c) {
    return a.test(c);
  }, Dt.testNumeric = function(c) {
    return i.test(c);
  }, Dt.testAlphanumeric = function(c) {
    return s.test(c);
  }, Dt;
}
var Pu;
function pa() {
  return Pu || (Pu = 1, function(r) {
    const e = s_(), t = l_();
    r.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, r.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, r.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, r.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, r.MIXED = {
      bit: -1
    }, r.getCharCountIndicator = function(i, s) {
      if (!i.ccBits) throw new Error("Invalid mode: " + i);
      if (!e.isValid(s))
        throw new Error("Invalid version: " + s);
      return s >= 1 && s < 10 ? i.ccBits[0] : s < 27 ? i.ccBits[1] : i.ccBits[2];
    }, r.getBestModeForData = function(i) {
      return t.testNumeric(i) ? r.NUMERIC : t.testAlphanumeric(i) ? r.ALPHANUMERIC : t.testKanji(i) ? r.KANJI : r.BYTE;
    }, r.toString = function(i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }, r.isValid = function(i) {
      return i && i.bit && i.ccBits;
    };
    function n(a) {
      if (typeof a != "string")
        throw new Error("Param is not a string");
      switch (a.toLowerCase()) {
        case "numeric":
          return r.NUMERIC;
        case "alphanumeric":
          return r.ALPHANUMERIC;
        case "kanji":
          return r.KANJI;
        case "byte":
          return r.BYTE;
        default:
          throw new Error("Unknown mode: " + a);
      }
    }
    r.from = function(i, s) {
      if (r.isValid(i))
        return i;
      try {
        return n(i);
      } catch {
        return s;
      }
    };
  }(Ds)), Ds;
}
var xu;
function Ov() {
  return xu || (xu = 1, function(r) {
    const e = da(), t = i_(), n = ac(), a = pa(), i = s_(), s = 7973, l = e.getBCHDigit(s);
    function c(_, f, g) {
      for (let w = 1; w <= 40; w++)
        if (f <= r.getCapacity(w, g, _))
          return w;
    }
    function u(_, f) {
      return a.getCharCountIndicator(_, f) + 4;
    }
    function d(_, f) {
      let g = 0;
      return _.forEach(function(w) {
        const k = u(w.mode, f);
        g += k + w.getBitsLength();
      }), g;
    }
    function p(_, f) {
      for (let g = 1; g <= 40; g++)
        if (d(_, g) <= r.getCapacity(g, f, a.MIXED))
          return g;
    }
    r.from = function(f, g) {
      return i.isValid(f) ? parseInt(f, 10) : g;
    }, r.getCapacity = function(f, g, w) {
      if (!i.isValid(f))
        throw new Error("Invalid QR Code version");
      typeof w > "u" && (w = a.BYTE);
      const k = e.getSymbolTotalCodewords(f), h = t.getTotalCodewordsCount(f, g), y = (k - h) * 8;
      if (w === a.MIXED) return y;
      const b = y - u(w, f);
      switch (w) {
        case a.NUMERIC:
          return Math.floor(b / 10 * 3);
        case a.ALPHANUMERIC:
          return Math.floor(b / 11 * 2);
        case a.KANJI:
          return Math.floor(b / 13);
        case a.BYTE:
        default:
          return Math.floor(b / 8);
      }
    }, r.getBestVersionForData = function(f, g) {
      let w;
      const k = n.from(g, n.M);
      if (Array.isArray(f)) {
        if (f.length > 1)
          return p(f, k);
        if (f.length === 0)
          return 1;
        w = f[0];
      } else
        w = f;
      return c(w.mode, w.getLength(), k);
    }, r.getEncodedBits = function(f) {
      if (!i.isValid(f) || f < 7)
        throw new Error("Invalid QR Code version");
      let g = f << 12;
      for (; e.getBCHDigit(g) - l >= 0; )
        g ^= s << e.getBCHDigit(g) - l;
      return f << 12 | g;
    };
  }(Ts)), Ts;
}
var Fs = {}, Eu;
function Nv() {
  if (Eu) return Fs;
  Eu = 1;
  const r = da(), e = 1335, t = 21522, n = r.getBCHDigit(e);
  return Fs.getEncodedBits = function(i, s) {
    const l = i.bit << 3 | s;
    let c = l << 10;
    for (; r.getBCHDigit(c) - n >= 0; )
      c ^= e << r.getBCHDigit(c) - n;
    return (l << 10 | c) ^ t;
  }, Fs;
}
var qs = {}, Ms, Su;
function Lv() {
  if (Su) return Ms;
  Su = 1;
  const r = pa();
  function e(t) {
    this.mode = r.NUMERIC, this.data = t.toString();
  }
  return e.getBitsLength = function(n) {
    return 10 * Math.floor(n / 3) + (n % 3 ? n % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(n) {
    let a, i, s;
    for (a = 0; a + 3 <= this.data.length; a += 3)
      i = this.data.substr(a, 3), s = parseInt(i, 10), n.put(s, 10);
    const l = this.data.length - a;
    l > 0 && (i = this.data.substr(a), s = parseInt(i, 10), n.put(s, l * 3 + 1));
  }, Ms = e, Ms;
}
var zs, Iu;
function jv() {
  if (Iu) return zs;
  Iu = 1;
  const r = pa(), e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function t(n) {
    this.mode = r.ALPHANUMERIC, this.data = n;
  }
  return t.getBitsLength = function(a) {
    return 11 * Math.floor(a / 2) + 6 * (a % 2);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(a) {
    let i;
    for (i = 0; i + 2 <= this.data.length; i += 2) {
      let s = e.indexOf(this.data[i]) * 45;
      s += e.indexOf(this.data[i + 1]), a.put(s, 11);
    }
    this.data.length % 2 && a.put(e.indexOf(this.data[i]), 6);
  }, zs = t, zs;
}
var Os, Cu;
function Bv() {
  if (Cu) return Os;
  Cu = 1;
  const r = pa();
  function e(t) {
    this.mode = r.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
  }
  return e.getBitsLength = function(n) {
    return n * 8;
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(t) {
    for (let n = 0, a = this.data.length; n < a; n++)
      t.put(this.data[n], 8);
  }, Os = e, Os;
}
var Ns, Tu;
function Rv() {
  if (Tu) return Ns;
  Tu = 1;
  const r = pa(), e = da();
  function t(n) {
    this.mode = r.KANJI, this.data = n;
  }
  return t.getBitsLength = function(a) {
    return a * 13;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(n) {
    let a;
    for (a = 0; a < this.data.length; a++) {
      let i = e.toSJIS(this.data[a]);
      if (i >= 33088 && i <= 40956)
        i -= 33088;
      else if (i >= 57408 && i <= 60351)
        i -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[a] + `
Make sure your charset is UTF-8`
        );
      i = (i >>> 8 & 255) * 192 + (i & 255), n.put(i, 13);
    }
  }, Ns = t, Ns;
}
var Ls = { exports: {} }, Du;
function Uv() {
  return Du || (Du = 1, function(r) {
    var e = {
      single_source_shortest_paths: function(t, n, a) {
        var i = {}, s = {};
        s[n] = 0;
        var l = e.PriorityQueue.make();
        l.push(n, 0);
        for (var c, u, d, p, _, f, g, w, k; !l.empty(); ) {
          c = l.pop(), u = c.value, p = c.cost, _ = t[u] || {};
          for (d in _)
            _.hasOwnProperty(d) && (f = _[d], g = p + f, w = s[d], k = typeof s[d] > "u", (k || w > g) && (s[d] = g, l.push(d, g), i[d] = u));
        }
        if (typeof a < "u" && typeof s[a] > "u") {
          var h = ["Could not find a path from ", n, " to ", a, "."].join("");
          throw new Error(h);
        }
        return i;
      },
      extract_shortest_path_from_predecessor_list: function(t, n) {
        for (var a = [], i = n; i; )
          a.push(i), t[i], i = t[i];
        return a.reverse(), a;
      },
      find_path: function(t, n, a) {
        var i = e.single_source_shortest_paths(t, n, a);
        return e.extract_shortest_path_from_predecessor_list(
          i,
          a
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(t) {
          var n = e.PriorityQueue, a = {}, i;
          t = t || {};
          for (i in n)
            n.hasOwnProperty(i) && (a[i] = n[i]);
          return a.queue = [], a.sorter = t.sorter || n.default_sorter, a;
        },
        default_sorter: function(t, n) {
          return t.cost - n.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(t, n) {
          var a = { value: t, cost: n };
          this.queue.push(a), this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    r.exports = e;
  }(Ls)), Ls.exports;
}
var Au;
function Vv() {
  return Au || (Au = 1, function(r) {
    const e = pa(), t = Lv(), n = jv(), a = Bv(), i = Rv(), s = l_(), l = da(), c = Uv();
    function u(h) {
      return unescape(encodeURIComponent(h)).length;
    }
    function d(h, y, b) {
      const v = [];
      let P;
      for (; (P = h.exec(b)) !== null; )
        v.push({
          data: P[0],
          index: P.index,
          mode: y,
          length: P[0].length
        });
      return v;
    }
    function p(h) {
      const y = d(s.NUMERIC, e.NUMERIC, h), b = d(s.ALPHANUMERIC, e.ALPHANUMERIC, h);
      let v, P;
      return l.isKanjiModeEnabled() ? (v = d(s.BYTE, e.BYTE, h), P = d(s.KANJI, e.KANJI, h)) : (v = d(s.BYTE_KANJI, e.BYTE, h), P = []), y.concat(b, v, P).sort(function(E, C) {
        return E.index - C.index;
      }).map(function(E) {
        return {
          data: E.data,
          mode: E.mode,
          length: E.length
        };
      });
    }
    function _(h, y) {
      switch (y) {
        case e.NUMERIC:
          return t.getBitsLength(h);
        case e.ALPHANUMERIC:
          return n.getBitsLength(h);
        case e.KANJI:
          return i.getBitsLength(h);
        case e.BYTE:
          return a.getBitsLength(h);
      }
    }
    function f(h) {
      return h.reduce(function(y, b) {
        const v = y.length - 1 >= 0 ? y[y.length - 1] : null;
        return v && v.mode === b.mode ? (y[y.length - 1].data += b.data, y) : (y.push(b), y);
      }, []);
    }
    function g(h) {
      const y = [];
      for (let b = 0; b < h.length; b++) {
        const v = h[b];
        switch (v.mode) {
          case e.NUMERIC:
            y.push([
              v,
              { data: v.data, mode: e.ALPHANUMERIC, length: v.length },
              { data: v.data, mode: e.BYTE, length: v.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            y.push([
              v,
              { data: v.data, mode: e.BYTE, length: v.length }
            ]);
            break;
          case e.KANJI:
            y.push([
              v,
              { data: v.data, mode: e.BYTE, length: u(v.data) }
            ]);
            break;
          case e.BYTE:
            y.push([
              { data: v.data, mode: e.BYTE, length: u(v.data) }
            ]);
        }
      }
      return y;
    }
    function w(h, y) {
      const b = {}, v = { start: {} };
      let P = ["start"];
      for (let I = 0; I < h.length; I++) {
        const E = h[I], C = [];
        for (let S = 0; S < E.length; S++) {
          const F = E[S], D = "" + I + S;
          C.push(D), b[D] = { node: F, lastCount: 0 }, v[D] = {};
          for (let O = 0; O < P.length; O++) {
            const N = P[O];
            b[N] && b[N].node.mode === F.mode ? (v[N][D] = _(b[N].lastCount + F.length, F.mode) - _(b[N].lastCount, F.mode), b[N].lastCount += F.length) : (b[N] && (b[N].lastCount = F.length), v[N][D] = _(F.length, F.mode) + 4 + e.getCharCountIndicator(F.mode, y));
          }
        }
        P = C;
      }
      for (let I = 0; I < P.length; I++)
        v[P[I]].end = 0;
      return { map: v, table: b };
    }
    function k(h, y) {
      let b;
      const v = e.getBestModeForData(h);
      if (b = e.from(y, v), b !== e.BYTE && b.bit < v.bit)
        throw new Error('"' + h + '" cannot be encoded with mode ' + e.toString(b) + `.
 Suggested mode is: ` + e.toString(v));
      switch (b === e.KANJI && !l.isKanjiModeEnabled() && (b = e.BYTE), b) {
        case e.NUMERIC:
          return new t(h);
        case e.ALPHANUMERIC:
          return new n(h);
        case e.KANJI:
          return new i(h);
        case e.BYTE:
          return new a(h);
      }
    }
    r.fromArray = function(y) {
      return y.reduce(function(b, v) {
        return typeof v == "string" ? b.push(k(v, null)) : v.data && b.push(k(v.data, v.mode)), b;
      }, []);
    }, r.fromString = function(y, b) {
      const v = p(y, l.isKanjiModeEnabled()), P = g(v), I = w(P, b), E = c.find_path(I.map, "start", "end"), C = [];
      for (let S = 1; S < E.length - 1; S++)
        C.push(I.table[E[S]].node);
      return r.fromArray(f(C));
    }, r.rawSplit = function(y) {
      return r.fromArray(
        p(y, l.isKanjiModeEnabled())
      );
    };
  }(qs)), qs;
}
var Fu;
function Wv() {
  if (Fu) return bs;
  Fu = 1;
  const r = da(), e = ac(), t = Cv(), n = Tv(), a = Dv(), i = Av(), s = Fv(), l = i_(), c = zv(), u = Ov(), d = Nv(), p = pa(), _ = Vv();
  function f(I, E) {
    const C = I.size, S = i.getPositions(E);
    for (let F = 0; F < S.length; F++) {
      const D = S[F][0], O = S[F][1];
      for (let N = -1; N <= 7; N++)
        if (!(D + N <= -1 || C <= D + N))
          for (let L = -1; L <= 7; L++)
            O + L <= -1 || C <= O + L || (N >= 0 && N <= 6 && (L === 0 || L === 6) || L >= 0 && L <= 6 && (N === 0 || N === 6) || N >= 2 && N <= 4 && L >= 2 && L <= 4 ? I.set(D + N, O + L, !0, !0) : I.set(D + N, O + L, !1, !0));
    }
  }
  function g(I) {
    const E = I.size;
    for (let C = 8; C < E - 8; C++) {
      const S = C % 2 === 0;
      I.set(C, 6, S, !0), I.set(6, C, S, !0);
    }
  }
  function w(I, E) {
    const C = a.getPositions(E);
    for (let S = 0; S < C.length; S++) {
      const F = C[S][0], D = C[S][1];
      for (let O = -2; O <= 2; O++)
        for (let N = -2; N <= 2; N++)
          O === -2 || O === 2 || N === -2 || N === 2 || O === 0 && N === 0 ? I.set(F + O, D + N, !0, !0) : I.set(F + O, D + N, !1, !0);
    }
  }
  function k(I, E) {
    const C = I.size, S = u.getEncodedBits(E);
    let F, D, O;
    for (let N = 0; N < 18; N++)
      F = Math.floor(N / 3), D = N % 3 + C - 8 - 3, O = (S >> N & 1) === 1, I.set(F, D, O, !0), I.set(D, F, O, !0);
  }
  function h(I, E, C) {
    const S = I.size, F = d.getEncodedBits(E, C);
    let D, O;
    for (D = 0; D < 15; D++)
      O = (F >> D & 1) === 1, D < 6 ? I.set(D, 8, O, !0) : D < 8 ? I.set(D + 1, 8, O, !0) : I.set(S - 15 + D, 8, O, !0), D < 8 ? I.set(8, S - D - 1, O, !0) : D < 9 ? I.set(8, 15 - D - 1 + 1, O, !0) : I.set(8, 15 - D - 1, O, !0);
    I.set(S - 8, 8, 1, !0);
  }
  function y(I, E) {
    const C = I.size;
    let S = -1, F = C - 1, D = 7, O = 0;
    for (let N = C - 1; N > 0; N -= 2)
      for (N === 6 && N--; ; ) {
        for (let L = 0; L < 2; L++)
          if (!I.isReserved(F, N - L)) {
            let Z = !1;
            O < E.length && (Z = (E[O] >>> D & 1) === 1), I.set(F, N - L, Z), D--, D === -1 && (O++, D = 7);
          }
        if (F += S, F < 0 || C <= F) {
          F -= S, S = -S;
          break;
        }
      }
  }
  function b(I, E, C) {
    const S = new t();
    C.forEach(function(L) {
      S.put(L.mode.bit, 4), S.put(L.getLength(), p.getCharCountIndicator(L.mode, I)), L.write(S);
    });
    const F = r.getSymbolTotalCodewords(I), D = l.getTotalCodewordsCount(I, E), O = (F - D) * 8;
    for (S.getLengthInBits() + 4 <= O && S.put(0, 4); S.getLengthInBits() % 8 !== 0; )
      S.putBit(0);
    const N = (O - S.getLengthInBits()) / 8;
    for (let L = 0; L < N; L++)
      S.put(L % 2 ? 17 : 236, 8);
    return v(S, I, E);
  }
  function v(I, E, C) {
    const S = r.getSymbolTotalCodewords(E), F = l.getTotalCodewordsCount(E, C), D = S - F, O = l.getBlocksCount(E, C), N = S % O, L = O - N, Z = Math.floor(S / O), z = Math.floor(D / O), M = z + 1, A = Z - z, U = new c(A);
    let j = 0;
    const R = new Array(O), Q = new Array(O);
    let se = 0;
    const te = new Uint8Array(I.buffer);
    for (let oe = 0; oe < O; oe++) {
      const B = oe < L ? z : M;
      R[oe] = te.slice(j, j + B), Q[oe] = U.encode(R[oe]), j += B, se = Math.max(se, B);
    }
    const le = new Uint8Array(S);
    let ae = 0, Y, $;
    for (Y = 0; Y < se; Y++)
      for ($ = 0; $ < O; $++)
        Y < R[$].length && (le[ae++] = R[$][Y]);
    for (Y = 0; Y < A; Y++)
      for ($ = 0; $ < O; $++)
        le[ae++] = Q[$][Y];
    return le;
  }
  function P(I, E, C, S) {
    let F;
    if (Array.isArray(I))
      F = _.fromArray(I);
    else if (typeof I == "string") {
      let Z = E;
      if (!Z) {
        const z = _.rawSplit(I);
        Z = u.getBestVersionForData(z, C);
      }
      F = _.fromString(I, Z || 40);
    } else
      throw new Error("Invalid data");
    const D = u.getBestVersionForData(F, C);
    if (!D)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!E)
      E = D;
    else if (E < D)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + D + `.
`
      );
    const O = b(E, C, F), N = r.getSymbolSize(E), L = new n(N);
    return f(L, E), g(L), w(L, E), h(L, C, 0), E >= 7 && k(L, E), y(L, O), isNaN(S) && (S = s.getBestMask(
      L,
      h.bind(null, L, C)
    )), s.applyMask(S, L), h(L, C, S), {
      modules: L,
      version: E,
      errorCorrectionLevel: C,
      maskPattern: S,
      segments: F
    };
  }
  return bs.create = function(E, C) {
    if (typeof E > "u" || E === "")
      throw new Error("No input text");
    let S = e.M, F, D;
    return typeof C < "u" && (S = e.from(C.errorCorrectionLevel, e.M), F = u.from(C.version), D = s.from(C.maskPattern), C.toSJISFunc && r.setToSJISFunction(C.toSJISFunc)), P(E, F, S, D);
  }, bs;
}
var js = {}, Bs = {}, qu;
function c_() {
  return qu || (qu = 1, function(r) {
    function e(t) {
      if (typeof t == "number" && (t = t.toString()), typeof t != "string")
        throw new Error("Color should be defined as hex string");
      let n = t.slice().replace("#", "").split("");
      if (n.length < 3 || n.length === 5 || n.length > 8)
        throw new Error("Invalid hex color: " + t);
      (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(i) {
        return [i, i];
      }))), n.length === 6 && n.push("F", "F");
      const a = parseInt(n.join(""), 16);
      return {
        r: a >> 24 & 255,
        g: a >> 16 & 255,
        b: a >> 8 & 255,
        a: a & 255,
        hex: "#" + n.slice(0, 6).join("")
      };
    }
    r.getOptions = function(n) {
      n || (n = {}), n.color || (n.color = {});
      const a = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, i = n.width && n.width >= 21 ? n.width : void 0, s = n.scale || 4;
      return {
        width: i,
        scale: i ? 4 : s,
        margin: a,
        color: {
          dark: e(n.color.dark || "#000000ff"),
          light: e(n.color.light || "#ffffffff")
        },
        type: n.type,
        rendererOpts: n.rendererOpts || {}
      };
    }, r.getScale = function(n, a) {
      return a.width && a.width >= n + a.margin * 2 ? a.width / (n + a.margin * 2) : a.scale;
    }, r.getImageWidth = function(n, a) {
      const i = r.getScale(n, a);
      return Math.floor((n + a.margin * 2) * i);
    }, r.qrToImageData = function(n, a, i) {
      const s = a.modules.size, l = a.modules.data, c = r.getScale(s, i), u = Math.floor((s + i.margin * 2) * c), d = i.margin * c, p = [i.color.light, i.color.dark];
      for (let _ = 0; _ < u; _++)
        for (let f = 0; f < u; f++) {
          let g = (_ * u + f) * 4, w = i.color.light;
          if (_ >= d && f >= d && _ < u - d && f < u - d) {
            const k = Math.floor((_ - d) / c), h = Math.floor((f - d) / c);
            w = p[l[k * s + h] ? 1 : 0];
          }
          n[g++] = w.r, n[g++] = w.g, n[g++] = w.b, n[g] = w.a;
        }
    };
  }(Bs)), Bs;
}
var Mu;
function Hv() {
  return Mu || (Mu = 1, function(r) {
    const e = c_();
    function t(a, i, s) {
      a.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = s, i.width = s, i.style.height = s + "px", i.style.width = s + "px";
    }
    function n() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    r.render = function(i, s, l) {
      let c = l, u = s;
      typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), s || (u = n()), c = e.getOptions(c);
      const d = e.getImageWidth(i.modules.size, c), p = u.getContext("2d"), _ = p.createImageData(d, d);
      return e.qrToImageData(_.data, i, c), t(p, u, d), p.putImageData(_, 0, 0), u;
    }, r.renderToDataURL = function(i, s, l) {
      let c = l;
      typeof c > "u" && (!s || !s.getContext) && (c = s, s = void 0), c || (c = {});
      const u = r.render(i, s, c), d = c.type || "image/png", p = c.rendererOpts || {};
      return u.toDataURL(d, p.quality);
    };
  }(js)), js;
}
var Rs = {}, zu;
function Yv() {
  if (zu) return Rs;
  zu = 1;
  const r = c_();
  function e(a, i) {
    const s = a.a / 255, l = i + '="' + a.hex + '"';
    return s < 1 ? l + " " + i + '-opacity="' + s.toFixed(2).slice(1) + '"' : l;
  }
  function t(a, i, s) {
    let l = a + i;
    return typeof s < "u" && (l += " " + s), l;
  }
  function n(a, i, s) {
    let l = "", c = 0, u = !1, d = 0;
    for (let p = 0; p < a.length; p++) {
      const _ = Math.floor(p % i), f = Math.floor(p / i);
      !_ && !u && (u = !0), a[p] ? (d++, p > 0 && _ > 0 && a[p - 1] || (l += u ? t("M", _ + s, 0.5 + f + s) : t("m", c, 0), c = 0, u = !1), _ + 1 < i && a[p + 1] || (l += t("h", d), d = 0)) : c++;
    }
    return l;
  }
  return Rs.render = function(i, s, l) {
    const c = r.getOptions(s), u = i.modules.size, d = i.modules.data, p = u + c.margin * 2, _ = c.color.light.a ? "<path " + e(c.color.light, "fill") + ' d="M0 0h' + p + "v" + p + 'H0z"/>' : "", f = "<path " + e(c.color.dark, "stroke") + ' d="' + n(d, u, c.margin) + '"/>', g = 'viewBox="0 0 ' + p + " " + p + '"', k = '<svg xmlns="http://www.w3.org/2000/svg" ' + (c.width ? 'width="' + c.width + '" height="' + c.width + '" ' : "") + g + ' shape-rendering="crispEdges">' + _ + f + `</svg>
`;
    return typeof l == "function" && l(null, k), k;
  }, Rs;
}
var Ou;
function Gv() {
  if (Ou) return ba;
  Ou = 1;
  const r = Iv(), e = Wv(), t = Hv(), n = Yv();
  function a(i, s, l, c, u) {
    const d = [].slice.call(arguments, 1), p = d.length, _ = typeof d[p - 1] == "function";
    if (!_ && !r())
      throw new Error("Callback required as last argument");
    if (_) {
      if (p < 2)
        throw new Error("Too few arguments provided");
      p === 2 ? (u = l, l = s, s = c = void 0) : p === 3 && (s.getContext && typeof u > "u" ? (u = c, c = void 0) : (u = c, c = l, l = s, s = void 0));
    } else {
      if (p < 1)
        throw new Error("Too few arguments provided");
      return p === 1 ? (l = s, s = c = void 0) : p === 2 && !s.getContext && (c = l, l = s, s = void 0), new Promise(function(f, g) {
        try {
          const w = e.create(l, c);
          f(i(w, s, c));
        } catch (w) {
          g(w);
        }
      });
    }
    try {
      const f = e.create(l, c);
      u(null, i(f, s, c));
    } catch (f) {
      u(f);
    }
  }
  return ba.create = e.create, ba.toCanvas = a.bind(null, t.render), ba.toDataURL = a.bind(null, t.renderToDataURL), ba.toString = a.bind(null, function(i, s, l) {
    return n.render(i, l);
  }), ba;
}
var Kv = Gv();
const Xv = /* @__PURE__ */ Sv(Kv);
var Zv = /* @__PURE__ */ V('<div class="qr-wrapper svelte-db8lgx"><img alt="Redemption QR Code" class="qr-code svelte-db8lgx"/></div>');
const Jv = {
  hash: "svelte-db8lgx",
  code: ".qr-wrapper.svelte-db8lgx {display:flex;justify-content:center;align-items:center;align-self:center;width:fit-content;margin:0 auto;background-color:#ffffff;border-radius:8px;padding:16px;}.qr-code.svelte-db8lgx {display:block;width:128px;height:128px;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;}"
};
function Qv(r, e) {
  _e(e, !0), ke(r, Jv);
  const t = () => Be(i, "$variables", n), [n, a] = Ze(), i = tc(), s = /* @__PURE__ */ m(() => {
    var g;
    return (g = t()) == null ? void 0 : g["success.redemption_url"];
  });
  let l = /* @__PURE__ */ re(!0), c = /* @__PURE__ */ re(""), u = /* @__PURE__ */ re(!1);
  br(() => {
    const g = window.matchMedia("(max-width: 767px)");
    q(l, g.matches, !0);
    const w = (k) => {
      q(l, k.matches, !0);
    };
    return g.addEventListener("change", w), () => {
      g.removeEventListener("change", w);
    };
  }), ar(() => {
    !o(l) && o(s) && (q(u, !1), Xv.toDataURL(o(s), {
      width: 512,
      margin: 2,
      errorCorrectionLevel: "M",
      color: { dark: "#000000", light: "#ffffff" }
    }).then((g) => {
      q(c, g, !0);
    }).catch((g) => {
      console.warn("Failed to generate QR code:", g), q(u, !0);
    }));
  });
  var d = Ee(), p = ce(d);
  {
    var _ = (g) => {
      Tr(g, dr(() => e.stack, {
        onclick: () => {
          window.location.href = o(s);
        }
      }));
    }, f = (g) => {
      var w = Ee(), k = ce(w);
      {
        var h = (y) => {
          var b = Zv(), v = T(b);
          K(() => he(v, "src", o(c))), x(y, b);
        };
        G(
          k,
          (y) => {
            o(c) && y(h);
          },
          !0
        );
      }
      x(g, w);
    };
    G(p, (g) => {
      (o(l) || o(u)) && o(s) ? g(_) : g(f, !1);
    });
  }
  x(r, d), ge(), a();
}
function $v(r, e) {
  const t = X(e, "style", 3, ""), n = X(e, "component", 3, "p");
  var a = Ee(), i = ce(a);
  Xl(i, n, !1, (s, l) => {
    Zl(s, () => ({ style: t() }));
    var c = Ee(), u = ce(c);
    yr(u, () => e.children ?? er), x(l, c);
  }), x(r, a);
}
var ey = /* @__PURE__ */ V("<span><!></span>");
function yl(r, e) {
  _e(e, !0);
  const t = () => Be(u, "$variables", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { uiConfig: s, emitComponentInteraction: l, onNavigateToUrl: c } = Pt(), u = nc(), d = lt({ state: !0 }), p = /* @__PURE__ */ m(() => ({
    ...i,
    ...ct(d(), e.overrides)
  })), _ = rt(), f = /* @__PURE__ */ m(_);
  let g = /* @__PURE__ */ m(() => uv(o(f), o(p), s.app.fonts));
  const w = /* @__PURE__ */ m(() => dv(o(f), o(p), o(p).size, o(p).background_color)), { getLocalizedString: k } = Xi(), h = /* @__PURE__ */ m(() => t_(k(o(p).text_lid), t())), y = /* @__PURE__ */ m(() => o(p).visible !== !1), b = /* @__PURE__ */ m(() => mv(o(h))), v = (C) => {
    if (C.defaultPrevented || C.button !== 0 || C.metaKey || C.ctrlKey || C.shiftKey || C.altKey)
      return;
    const S = C.target;
    if (!(S instanceof Element))
      return;
    const F = S.closest("a[href]");
    if (!(F instanceof HTMLAnchorElement))
      return;
    const D = F.getAttribute("href") ?? F.href;
    D && (l({
      componentType: "text",
      componentName: e.name,
      componentValue: "navigate_to_url",
      componentURL: D
    }), c == null || c(D));
  };
  var P = Ee(), I = ce(P);
  {
    var E = (C) => {
      var S = ey();
      S.__click = v;
      var F = T(S);
      $v(F, {
        get style() {
          return o(g);
        },
        component: "span",
        children: (D, O) => {
          var N = Ee(), L = ce(N);
          pn(L, () => o(b)), x(D, N);
        },
        $$slots: { default: !0 }
      }), K(() => Fe(S, o(w))), x(C, S);
    };
    G(I, (C) => {
      o(y) && C(E);
    });
  }
  x(r, P), ge(), a();
}
Jt(["click"]);
function ry(r, e) {
  return typeof r.addEventListener == "function" ? (r.addEventListener("change", e), () => r.removeEventListener("change", e)) : (r.addListener(e), () => r.removeListener(e));
}
function Si(r, e) {
  r.muted = e.preferMuted || e.mutedPlaybackOverride, r.playsInline = !0;
}
function ty(r, e) {
  const { cancelled: t, preferMuted: n, getMutedOverride: a, setMutedOverride: i } = e;
  if (t() || !r.paused || (Si(r, {
    preferMuted: n,
    mutedPlaybackOverride: a()
  }), r.readyState < HTMLMediaElement.HAVE_CURRENT_DATA))
    return;
  const s = r.play();
  s !== void 0 && s.catch(() => {
    t() || !r.isConnected || !n && !a() && (i(!0), Si(r, {
      preferMuted: n,
      mutedPlaybackOverride: !0
    }), r.play().catch(() => {
    }));
  });
}
function u_(r, e, t) {
  const n = () => {
    t() || e();
  }, a = () => n();
  r.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ? (r.addEventListener("loadeddata", a), r.addEventListener("canplay", a)) : queueMicrotask(n), queueMicrotask(n), requestAnimationFrame(() => {
    n();
  });
  const i = () => n();
  return typeof document < "u" && typeof window < "u" && (document.readyState === "complete" ? queueMicrotask(n) : window.addEventListener("load", i)), () => {
    r.removeEventListener("loadeddata", a), r.removeEventListener("canplay", a), typeof window < "u" && window.removeEventListener("load", i);
  };
}
var ny = /* @__PURE__ */ V('<div class="rc-bg-video svelte-8v4ynu" aria-hidden="true"><img alt="" class="fill svelte-8v4ynu"/></div>'), ay = /* @__PURE__ */ V('<source media="(max-width: 600px)"/>'), oy = /* @__PURE__ */ V('<div class="rc-bg-video svelte-8v4ynu" aria-hidden="true"><video class="fill svelte-8v4ynu" playsinline="" autoplay preload="auto"><!> <source/></video></div>', 2);
const iy = {
  hash: "svelte-8v4ynu",
  code: `.rc-bg-video.svelte-8v4ynu {position:absolute;inset:0;overflow:hidden;z-index:1;pointer-events:none;}

  /**
   * Fill the layer with absolute edges (percent heights are unreliable under nested
   * flex/absolute hosts). Beat Paywall's global \`.paywall video { max-width: 100% }\`
   * so \`object-fit: cover|contain\` applies to the full backdrop box (e.g. carousel).
   */.rc-bg-video.svelte-8v4ynu :is(video:where(.svelte-8v4ynu), img:where(.svelte-8v4ynu)).fill:where(.svelte-8v4ynu) {position:absolute;inset:0;width:100%;height:100%;max-width:none;max-height:none;display:block;}.rc-bg-video.svelte-8v4ynu video.fill:where(.svelte-8v4ynu) {transform:translateZ(0);-webkit-transform:translateZ(0);}`
};
function Bo(r, e) {
  _e(e, !0), ke(r, iy);
  let t = X(e, "urlLowRes", 3, null), n = X(e, "poster", 3, null), a = /* @__PURE__ */ re(null), i = /* @__PURE__ */ re(!1), s = /* @__PURE__ */ re(!1), l = /* @__PURE__ */ re(!1);
  br(() => {
    if (typeof window > "u") return;
    const w = window.matchMedia("(prefers-reduced-motion: reduce)");
    return q(s, w.matches, !0), ry(w, () => {
      q(s, w.matches, !0);
    });
  }), ar(() => {
    e.url, t(), Re(() => {
      q(i, !1), q(l, !1);
    }), queueMicrotask(() => {
      var w;
      (w = o(a)) == null || w.load();
    });
  });
  const c = /* @__PURE__ */ m(() => o(s) || o(i)), u = /* @__PURE__ */ m(() => `object-fit:${e.objectFit};object-position:${e.objectPosition}`);
  ar(() => {
    if (o(c) || !o(a)) {
      Re(() => {
        q(l, !1);
      });
      return;
    }
    const w = o(a);
    let k = !1;
    const h = () => k, b = u_(w, () => {
      ty(w, {
        cancelled: h,
        preferMuted: e.mute,
        getMutedOverride: () => o(l),
        setMutedOverride: (v) => Re(() => {
          q(l, v, !0);
        })
      });
    }, h);
    return () => {
      k = !0, b();
    };
  });
  function d() {
    q(i, !0);
  }
  var p = Ee(), _ = ce(p);
  {
    var f = (w) => {
      var k = ny(), h = T(k);
      K(() => {
        he(h, "src", n()), Fe(h, o(u));
      }), x(w, k);
    }, g = (w) => {
      var k = Ee(), h = ce(k);
      {
        var y = (v) => {
        }, b = (v) => {
          var P = oy(), I = T(P), E = T(I);
          {
            var C = (F) => {
              var D = ay();
              K(() => he(D, "src", t())), x(F, D);
            };
            G(E, (F) => {
              t() && F(C);
            });
          }
          var S = W(E, 2);
          ca(I, (F) => q(a, F), () => o(a)), K(() => {
            Fe(I, o(u)), I.loop = e.loop, I.muted = e.mute || o(l), he(I, "poster", n() ?? void 0), he(S, "src", e.url);
          }), qr("error", I, d), x(v, P);
        };
        G(
          h,
          (v) => {
            o(c) ? v(y) : v(b, !1);
          },
          !0
        );
      }
      x(w, k);
    };
    G(_, (w) => {
      o(c) && n() ? w(f) : w(g, !1);
    });
  }
  x(r, p), ge();
}
function Zi(r) {
  return `rc-${r}-video-bg`;
}
function Ji(r) {
  if (!r.hasVideoBg)
    return {};
  const e = { isolation: "isolate" };
  return r.positionRelative && (e.position = "relative"), r.clipOverflow && (e.overflow = "hidden"), e;
}
function sy(r) {
  switch (r) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function d_(r, e, t) {
  return Math.max(e, Math.min(r, t));
}
const ly = 0.2;
function cy({ startPage: r, dragDistance: e, pageWidth: t, pageCount: n, loop: a, advanceThreshold: i = ly }) {
  const s = t * i;
  let l = r;
  return e < -s ? l += 1 : e > s && (l -= 1), a ? l : d_(l, 0, n - 1);
}
function Jo(r) {
  if (r === null)
    return 0;
  const e = window.getComputedStyle(r);
  return new WebKitCSSMatrix(e.transform).m41;
}
var uy = /* @__PURE__ */ V('<div class="page svelte-1t372qb" role="group" aria-roledescription="slide"><!></div>');
const dy = {
  hash: "svelte-1t372qb",
  code: "div.svelte-1t372qb {flex:0 0 100%;scroll-snap-align:center;scroll-snap-stop:always;}"
};
function Us(r, e) {
  ke(r, dy);
  const t = X(e, "hidden", 3, !1);
  var n = uy(), a = T(n);
  Tr(a, dr(() => e.page)), K(() => {
    he(n, "aria-label", `Slide ${e.index + 1} of ${e.pages}`), he(n, "aria-current", e.selected), he(n, "aria-hidden", t());
  }), x(r, n);
}
var py = /* @__PURE__ */ V("<div></div>"), _y = /* @__PURE__ */ V('<div class="control rc-gradient-border svelte-17szyrm"></div>');
const gy = {
  hash: "svelte-17szyrm",
  code: ".control.svelte-17szyrm {align-self:center;display:flex;flex-direction:row;align-items:center;justify-content:center;}"
};
function fy(r, e) {
  _e(e, !0), ke(r, gy);
  const t = X(e, "background_color", 3, null), n = X(e, "border", 3, null), a = X(e, "shape", 3, null), i = X(e, "shadow", 3, null), s = rt(), l = /* @__PURE__ */ m(s);
  function c(g) {
    return Dn(o(l), g.stroke_width == null || g.stroke_color == null ? null : { width: g.stroke_width, color: g.stroke_color });
  }
  function u(g) {
    return nr({
      width: Pr(g.width),
      height: Pr(g.height),
      background: $r(o(l), g.color),
      ...c(g),
      "border-radius": "9999px"
    });
  }
  const d = /* @__PURE__ */ m(() => u(e.default)), p = /* @__PURE__ */ m(() => u(e.active)), _ = /* @__PURE__ */ m(() => nr({
    order: e.position === "top" ? -1 : 1,
    gap: Pr(e.spacing),
    margin: kr(e.margin),
    padding: kr(e.padding),
    ...Ln(o(l), t(), null),
    ...Dn(o(l), n()),
    "border-radius": Nn(a()),
    "box-shadow": ua(o(l), i())
  }));
  var f = _y();
  Gt(f, 21, () => ({ length: e.length }), ln, (g, w, k) => {
    var h = py();
    K(() => Fe(h, k === e.selected ? o(p) : o(d))), x(g, h);
  }), K(() => Fe(f, o(_))), x(r, f), ge();
}
var my = /* @__PURE__ */ V('<div class="carousel-bg-video-mount svelte-qtlkrg"><!></div>'), hy = /* @__PURE__ */ V('<div><!> <div class="carousel-clip svelte-qtlkrg"><div class="slider svelte-qtlkrg" role="region" aria-label="Feature carousel" aria-roledescription="carousel" aria-live="polite"><!> <!> <!></div> <!></div></div>');
const vy = {
  hash: "svelte-qtlkrg",
  code: '.carousel.svelte-qtlkrg {max-width:100%;display:flex;flex-direction:column;flex-shrink:0;align-self:stretch;}.carousel-clip.svelte-qtlkrg {display:flex;flex-direction:column;flex:1;min-width:0;min-height:0;overflow:hidden;border-radius:inherit;}.carousel-bg-video-mount.svelte-qtlkrg {position:absolute;inset:0;z-index:1;border-radius:inherit;overflow:hidden;pointer-events:none;}.carousel.rc-carousel-video-bg.svelte-qtlkrg::before {content:"";position:absolute;inset:0;background:var(--overlay);pointer-events:none;z-index:2;}.carousel.rc-carousel-video-bg.svelte-qtlkrg .carousel-clip:where(.svelte-qtlkrg) {position:relative;z-index:3;}.slider.svelte-qtlkrg {display:flex;flex-direction:row;flex-wrap:nowrap;transition-property:transform;transition-duration:500ms;transition-timing-function:ease-in-out;transition-delay:2500ms;transform:translateX(0);touch-action:pan-y;cursor:grab;&:active {cursor:grabbing;user-select:none;}}'
};
function yy(r, e) {
  _e(e, !0), ke(r, vy);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { emitComponentInteraction: n } = Pt(), a = lt(), i = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(a(), e.overrides)
  })), s = /* @__PURE__ */ m(() => o(i).pages), l = /* @__PURE__ */ m(() => o(i).padding), c = /* @__PURE__ */ m(() => o(i).margin), u = /* @__PURE__ */ m(() => o(i).background), d = /* @__PURE__ */ m(() => o(i).shape), p = /* @__PURE__ */ m(() => o(i).border), _ = /* @__PURE__ */ m(() => o(i).shadow), f = /* @__PURE__ */ m(() => o(i).page_alignment), g = /* @__PURE__ */ m(() => o(i).page_spacing), w = /* @__PURE__ */ m(() => o(i).page_peek), k = /* @__PURE__ */ m(() => o(i).page_control), h = /* @__PURE__ */ m(() => o(i).initial_page_index), y = /* @__PURE__ */ m(() => o(i).loop), b = /* @__PURE__ */ m(() => o(i).auto_advance), v = rt(), P = /* @__PURE__ */ m(v), I = /* @__PURE__ */ m(() => {
    var pe;
    return ((pe = o(u)) == null ? void 0 : pe.type) === "video";
  }), E = /* @__PURE__ */ m(() => {
    if (!o(I)) return null;
    const pe = o(u);
    return !pe || pe.type !== "video" ? null : jo(o(P), pe);
  }), C = /* @__PURE__ */ m(() => Nn(o(d))), S = /* @__PURE__ */ m(() => {
    var pe;
    return nr({
      margin: kr(o(c)),
      padding: kr(o(l)),
      ...Ji({ hasVideoBg: o(I), positionRelative: !0 }),
      ...Ln(o(P), null, o(u)),
      ...Dn(o(P), o(p)),
      "border-radius": o(C),
      "box-shadow": ua(o(P), o(_)),
      "transition-duration": `${((pe = o(b)) == null ? void 0 : pe.ms_transition_time) ?? 0}ms`
    });
  }), F = /* @__PURE__ */ m(() => nr({
    gap: Pr(o(g)),
    padding: `0 ${o(w) + o(g)}px`,
    "align-items": sy(o(f))
  })), D = /* @__PURE__ */ m(() => {
    if (!o(y))
      return [];
    const pe = o(s).length - 1;
    switch (o(s).length) {
      case 0:
        return [];
      case 1:
        return [0, 0];
      case 2:
        return [0, pe];
      default:
        return [pe - 1, pe];
    }
  }), O = /* @__PURE__ */ m(() => {
    if (!o(y))
      return [];
    switch (o(s).length) {
      case 0:
        return [];
      case 1:
        return [0, 0];
      default:
        return [0, 1];
    }
  });
  let N = null, L = /* @__PURE__ */ re(0), Z = /* @__PURE__ */ re(0), z = /* @__PURE__ */ m(() => 2 * o(w) + o(g)), M = /* @__PURE__ */ m(() => o(Z) - o(z)), A = /* @__PURE__ */ re(null);
  function U() {
    return o(s).at(o(h)) !== void 0 ? o(h) : 0;
  }
  function j(pe) {
    return o(s).length === 0 ? 0 : (pe % o(s).length + o(s).length) % o(s).length;
  }
  function R(pe) {
    var Le;
    return (Le = o(s)[pe]) == null ? void 0 : Le.name;
  }
  function Q(pe = !0, Le) {
    var _r, Ar;
    if (N === null)
      return;
    const or = pe ? ((_r = o(b)) == null ? void 0 : _r.ms_time_per_page) ?? 0 : 0;
    Le ?? (Le = ((Ar = o(b)) == null ? void 0 : Ar.ms_transition_time) ?? 0), N.style.transition = `transform ${Le}ms ease-in-out ${or}ms`;
  }
  function se() {
    N !== null && (N.style.transition = "none");
  }
  const te = /* @__PURE__ */ m(() => o(y) ? 2 : 0);
  function le(pe) {
    N !== null && (N.style.transform = `translateX(${pe}px)`);
  }
  function ae(pe) {
    if (N === null)
      return;
    pe += o(te);
    const Le = pe * -o(M);
    le(Le);
  }
  function Y(pe) {
    pe %= o(s).length + o(te), Q(!0), ae(pe);
  }
  function $() {
    o(b) != null && requestAnimationFrame(() => {
      Y(o(L) + 1);
    });
  }
  br(() => {
    const pe = U();
    q(L, pe, !0), se(), ae(o(L)), $();
  });
  function oe(pe) {
    return Math.round(pe / -o(M)) - o(te);
  }
  function B() {
    const pe = Jo(N), Le = oe(pe);
    q(L, (Le + o(s).length) % o(s).length), se(), ae(o(L)), requestAnimationFrame(() => {
      $();
    });
  }
  let de = /* @__PURE__ */ re(0), J = 0;
  function ie(pe) {
    pe.currentTarget.setPointerCapture(pe.pointerId), q(de, Jo(N), !0), q(A, o(L), !0), J = pe.clientX;
  }
  function Ie(pe) {
    const Le = pe.currentTarget;
    Le.hasPointerCapture(pe.pointerId) && Le.releasePointerCapture(pe.pointerId);
    const or = Jo(N), _r = cy({
      startPage: o(A) ?? oe(or),
      dragDistance: or - o(de),
      pageWidth: o(M),
      pageCount: o(s).length,
      loop: o(y)
    }), Ar = j(_r);
    o(A) !== null && o(A) !== Ar && n({
      componentType: "carousel",
      componentName: e.name,
      componentValue: Ar.toString(),
      originIndex: o(A),
      destinationIndex: Ar,
      originContextName: R(o(A)),
      destinationContextName: R(Ar),
      defaultIndex: U()
    }), q(A, null), q(L, Ar, !0), Q(!1, 500), ae(_r);
  }
  function we(pe) {
    if (!pe.currentTarget.hasPointerCapture(pe.pointerId))
      return;
    const or = pe.clientX - J;
    J = pe.clientX;
    const [_r, Ar] = o(y) ? [
      o(de) - o(Z),
      o(de) + o(Z)
    ] : [-(o(s).length - 1) * o(M), 0], ut = Jo(N), Qt = d_(ut + or, _r, Ar), fa = oe(Qt);
    q(L, (fa + o(s).length) % o(s).length), le(Qt), se();
  }
  var xe = hy(), Se = T(xe);
  {
    var Ue = (pe) => {
      var Le = my(), or = T(Le);
      Bo(or, {
        get url() {
          return o(E).url;
        },
        get urlLowRes() {
          return o(E).url_low_res;
        },
        get objectFit() {
          return o(E).fit;
        },
        get objectPosition() {
          return o(E).position;
        },
        get poster() {
          return o(E).posterWebp;
        },
        get mute() {
          return o(E).mute;
        },
        get loop() {
          return o(E).loop;
        }
      }), x(pe, Le);
    };
    G(Se, (pe) => {
      o(E) && pe(Ue);
    });
  }
  var ye = W(Se, 2), Ce = T(ye);
  Ce.__pointerdown = ie, Ce.__pointerup = Ie, Ce.__pointermove = we;
  var Te = T(Ce);
  Gt(Te, 17, () => o(D), ln, (pe, Le) => {
    {
      let or = /* @__PURE__ */ m(() => o(L) === o(Le));
      Us(pe, {
        get page() {
          return o(s)[o(Le)];
        },
        get index() {
          return o(Le);
        },
        get pages() {
          return o(s).length;
        },
        get selected() {
          return o(or);
        },
        hidden: !0
      });
    }
  });
  var Pe = W(Te, 2);
  Gt(Pe, 17, () => o(s), ln, (pe, Le, or) => {
    {
      let _r = /* @__PURE__ */ m(() => o(L) === or);
      Us(pe, {
        get page() {
          return o(Le);
        },
        index: or,
        get pages() {
          return o(s).length;
        },
        get selected() {
          return o(_r);
        }
      });
    }
  });
  var De = W(Pe, 2);
  Gt(De, 17, () => o(O), ln, (pe, Le) => {
    {
      let or = /* @__PURE__ */ m(() => o(L) === o(Le));
      Us(pe, {
        get page() {
          return o(s)[o(Le)];
        },
        get index() {
          return o(Le);
        },
        get pages() {
          return o(s).length;
        },
        get selected() {
          return o(or);
        },
        hidden: !0
      });
    }
  }), ca(Ce, (pe) => N = pe, () => N);
  var Ye = W(Ce, 2);
  {
    var Ke = (pe) => {
      fy(pe, dr(() => o(k), {
        get length() {
          return o(s).length;
        },
        get selected() {
          return o(L);
        }
      }));
    };
    G(Ye, (pe) => {
      o(k) != null && pe(Ke);
    });
  }
  K(
    (pe) => {
      ur(xe, 1, pe, "svelte-qtlkrg"), Fe(xe, o(S)), Fe(Ce, o(F));
    },
    [
      () => la([
        "carousel",
        "rc-gradient-border",
        o(I) ? Zi("carousel") : ""
      ].filter(Boolean).join(" "))
    ]
  ), qr("transitionend", Ce, B), fo(Ce, "clientWidth", (pe) => q(Z, pe)), x(r, xe), ge();
}
Jt(["pointerdown", "pointerup", "pointermove"]);
var by = /* @__PURE__ */ V('<div class="rc-gradient-border"><div></div></div>');
function p_(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), n = lt({ state: !0 }), a = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(n(), e.overrides)
  })), i = /* @__PURE__ */ m(() => o(a).base_url), s = /* @__PURE__ */ m(() => o(a).formats), l = /* @__PURE__ */ m(() => o(a).size), c = /* @__PURE__ */ m(() => o(a).margin), u = /* @__PURE__ */ m(() => o(a).padding), d = /* @__PURE__ */ m(() => o(a).color), p = /* @__PURE__ */ m(() => o(a).icon_background), _ = /* @__PURE__ */ m(() => o(a).visible), f = rt(), g = /* @__PURE__ */ m(f), w = /* @__PURE__ */ m(() => {
    var I, E, C, S;
    return nr({
      width: hr(o(l).width),
      height: hr(o(l).height),
      margin: kr(o(c)),
      padding: kr(o(u)),
      "background-color": $r(o(g), (I = o(p)) == null ? void 0 : I.color),
      ...Dn(o(g), (E = o(p)) == null ? void 0 : E.border),
      "border-radius": Nn((C = o(p)) == null ? void 0 : C.shape),
      "box-shadow": ua(o(g), (S = o(p)) == null ? void 0 : S.shadow),
      flex: "0 0 auto"
    });
  }), k = /* @__PURE__ */ m(() => o(_) !== !1), h = /* @__PURE__ */ m(() => `${o(i)}/${o(s).webp}`), y = /* @__PURE__ */ m(() => nr({
    width: "100%",
    height: "100%",
    position: "relative",
    "z-index": 1,
    overflow: "hidden",
    "background-color": $r(o(g), o(d)),
    "mask-image": `url(${o(h)})`,
    "-webkit-mask-image": `url(${o(h)})`,
    "mask-size": "contain",
    "-webkit-mask-size": "contain",
    "mask-position": "center",
    "-webkit-mask-position": "center",
    "mask-repeat": "no-repeat",
    "-webkit-mask-repeat": "no-repeat"
  }));
  var b = Ee(), v = ce(b);
  {
    var P = (I) => {
      var E = by(), C = T(E);
      K(() => {
        Fe(E, o(w)), Fe(C, o(y));
      }), x(I, E);
    };
    G(v, (I) => {
      o(k) && I(P);
    });
  }
  x(r, b), ge();
}
const __ = Symbol("selected");
function ky(r) {
  gr(__, r);
}
function oc() {
  const r = He(__);
  if (r === void 0)
    throw new Error("Tabs context not found");
  return r;
}
function wy(r, e) {
  _e(e, !0);
  const t = () => Be(i, "$control", n), [n, a] = Ze(), { control: i } = oc();
  Tr(r, dr(() => t().stack)), ge(), a();
}
function Py(r, e) {
  _e(e, !0);
  const { selectedTabId: t, selectTab: n } = oc();
  Yi(Ct(t, (i) => i === e.tab_id)), Tr(r, dr(() => e.stack, { onclick: () => {
    n(e.tab_id, e.tab_index, "tab");
  } })), ge();
}
var xy = /* @__PURE__ */ V('<div role="button" tabindex="0" aria-label="Toggle" class="toggle svelte-ykicus"><div class="thumb svelte-ykicus"></div></div>');
const Ey = {
  hash: "svelte-ykicus",
  code: `.toggle.svelte-ykicus {appearance:none;--height: 31px;position:relative;width:51px;height:var(--height);border-radius:calc(var(--height) / 2);cursor:pointer;user-select:none;transition:background-color 300ms ease;}.thumb.svelte-ykicus {--size: 27px;position:absolute;top:2px;width:var(--size);height:var(--size);border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.12);transition:left 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
      background-color 300ms ease;}`
};
function Sy(r, e) {
  _e(e, !0), ke(r, Ey);
  const t = () => Be(_, "$isActive", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), s = lt({ state: !0 }), l = /* @__PURE__ */ m(() => ({
    ...i,
    ...ct(s(), e.overrides)
  })), c = /* @__PURE__ */ m(() => o(l).thumb_color_on), u = /* @__PURE__ */ m(() => o(l).thumb_color_off), d = /* @__PURE__ */ m(() => o(l).track_color_on), p = /* @__PURE__ */ m(() => o(l).track_color_off), { isActive: _, selectTab: f } = oc();
  Yi(_);
  const g = rt(), w = /* @__PURE__ */ m(g), k = /* @__PURE__ */ m(() => nr({
    background: t() ? $r(o(w), o(d)) : $r(o(w), o(p))
  })), h = /* @__PURE__ */ m(() => nr({
    left: t() ? "22px" : "2px",
    background: t() ? $r(o(w), o(c)) : $r(o(w), o(u))
  })), y = () => {
    f("", t() ? 0 : 1, "switch");
  }, b = (I) => {
    (I.code === "Enter" || I.code === "Space") && y();
  };
  var v = xy();
  v.__click = y, v.__keydown = b;
  var P = T(v);
  K(() => {
    Fe(v, o(k)), Fe(P, o(h));
  }), x(r, v), ge(), a();
}
Jt(["click", "keydown"]);
var Iy = /* @__PURE__ */ V("<div><!> <!></div>");
const Cy = {
  hash: "svelte-m8wp5c",
  code: '.rc-tabs-video-bg.svelte-m8wp5c::before {content:"";position:absolute;inset:0;background:var(--overlay);pointer-events:none;z-index:2;}.rc-tabs-video-bg.svelte-m8wp5c > .rc-bg-video {z-index:1;}.rc-tabs-video-bg.svelte-m8wp5c > .rc-tabs-stack-front {position:relative;z-index:3;}'
};
function Ty(r, e) {
  _e(e, !0), ke(r, Cy);
  const t = () => Be(z, "$selectedTabIndex", a), n = () => Be(M, "$tab", a), [a, i] = Ze(), s = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { name: l, control: c, tabs: u, default_tab_id: d, state_updates: p } = s, _ = lt(), f = Gi(), g = /* @__PURE__ */ m(() => ({
    ...s,
    ...ct(_(), e.overrides)
  })), w = /* @__PURE__ */ m(() => o(g).size), k = /* @__PURE__ */ m(() => o(g).padding), h = /* @__PURE__ */ m(() => o(g).margin), y = /* @__PURE__ */ m(() => o(g).background), b = /* @__PURE__ */ m(() => o(g).shape), v = /* @__PURE__ */ m(() => o(g).border), P = /* @__PURE__ */ m(() => o(g).shadow), I = /* @__PURE__ */ m(() => o(g).visible), E = /* @__PURE__ */ m(() => o(I) !== !1), C = rt(), S = /* @__PURE__ */ m(C), F = /* @__PURE__ */ m(() => {
    var te;
    return ((te = o(y)) == null ? void 0 : te.type) === "video";
  }), D = /* @__PURE__ */ m(() => {
    if (!o(F)) return null;
    const te = o(y);
    return !te || te.type !== "video" ? null : jo(o(S), te);
  }), O = /* @__PURE__ */ m(() => Nn(o(b))), N = /* @__PURE__ */ m(() => nr({
    position: "relative",
    width: hr(o(w).width),
    height: hr(o(w).height),
    margin: kr(o(h)),
    padding: kr(o(k)),
    ...Ji({
      hasVideoBg: o(F),
      clipOverflow: o(O) !== "0"
    }),
    ...Ln(o(S), null, o(y)),
    ...Dn(o(S), o(v)),
    "border-radius": o(O),
    "box-shadow": ua(o(S), o(P))
  })), { emitComponentInteraction: L } = Pt(), Z = Math.max(0, u.findIndex((te) => te.id === d)), z = mr(Z), M = Ct(z, (te) => u[te]), A = (te) => {
    var le;
    return (le = u[te]) == null ? void 0 : le.name;
  }, U = (te, le, ae) => {
    var oe;
    const Y = u.findIndex((B) => B.id === te), $ = Y !== -1 ? Y : le;
    if ($ >= 0 && $ < u.length) {
      const B = Oo(z);
      if (B === $)
        return;
      ae === "tab" ? L({
        componentType: "tab",
        componentName: l,
        componentValue: ((oe = u[$]) == null ? void 0 : oe.id) ?? te,
        originIndex: B,
        destinationIndex: $,
        originContextName: A(B),
        destinationContextName: A($),
        defaultIndex: Z
      }) : ae === "switch" && L({
        componentType: "switch",
        componentName: l,
        componentValue: $ === 1 ? "on" : "off"
      }), z.set($);
    }
  };
  let j;
  ar(() => {
    var le;
    if (!o(E) || !(p != null && p.length)) return;
    const te = (le = u[t()]) == null ? void 0 : le.id;
    te == null || te === j || (j = te, f == null || f.applyUpdates(p, te));
  }), ky({
    control: et(c),
    selectedTabId: Ct(M, (te) => (te == null ? void 0 : te.id) ?? ""),
    selectTab: U,
    isActive: Ct(z, (te) => te === 1)
  });
  var R = Ee(), Q = ce(R);
  {
    var se = (te) => {
      var le = Iy(), ae = T(le);
      {
        var Y = (B) => {
          Bo(B, {
            get url() {
              return o(D).url;
            },
            get urlLowRes() {
              return o(D).url_low_res;
            },
            get objectFit() {
              return o(D).fit;
            },
            get objectPosition() {
              return o(D).position;
            },
            get poster() {
              return o(D).posterWebp;
            },
            get mute() {
              return o(D).mute;
            },
            get loop() {
              return o(D).loop;
            }
          });
        };
        G(ae, (B) => {
          o(D) && B(Y);
        });
      }
      var $ = W(ae, 2);
      {
        var oe = (B) => {
          {
            let de = /* @__PURE__ */ m(() => o(F) ? "rc-tabs-stack-front" : void 0);
            Tr(B, dr(() => n().stack, {
              get class() {
                return o(de);
              }
            }));
          }
        };
        G($, (B) => {
          n() !== void 0 && B(oe);
        });
      }
      K(
        (B) => {
          ur(le, 1, B, "svelte-m8wp5c"), Fe(le, o(N));
        },
        [
          () => la([
            "rc-gradient-border",
            o(F) ? Zi("tabs") : ""
          ].filter(Boolean).join(" "))
        ]
      ), x(te, le);
    };
    G(Q, (te) => {
      o(E) && te(se);
    });
  }
  x(r, R), ge(), i();
}
const Dy = Object.freeze({
  leading: "flex-start",
  top: "flex-start",
  center: "center",
  trailing: "flex-end",
  bottom: "flex-end"
}), Ay = Object.freeze({
  space_between: "space-between",
  space_around: "space-around",
  space_evenly: "space-evenly",
  start: "flex-start",
  center: "center",
  end: "flex-end"
});
function Fy(r) {
  if (r.type !== "fixed")
    return {};
  const e = Pr(r.value);
  return { "min-width": e, "max-width": e };
}
function qy(r) {
  if (r.type !== "fixed")
    return {};
  const e = Pr(r.value);
  return { "min-height": e, "max-height": e };
}
function ic(r) {
  if (r.type === "zlayer")
    return {};
  const e = r.type === "vertical" ? "column" : "row", t = Ay[r.distribution] || "center", n = Dy[r.alignment] || "center";
  return {
    "flex-direction": e,
    "justify-content": t,
    "align-items": n
  };
}
const My = Object.freeze({
  top_leading: { justifyContent: "flex-start", alignItems: "flex-start" },
  top: { justifyContent: "center", alignItems: "flex-start" },
  top_trailing: { justifyContent: "flex-end", alignItems: "flex-start" },
  leading: { justifyContent: "flex-start", alignItems: "center" },
  center: { justifyContent: "center", alignItems: "center" },
  trailing: { justifyContent: "flex-end", alignItems: "center" },
  bottom_leading: { justifyContent: "flex-start", alignItems: "flex-end" },
  bottom: { justifyContent: "center", alignItems: "flex-end" },
  bottom_trailing: { justifyContent: "flex-end", alignItems: "flex-end" }
});
function zy(r) {
  return My[r];
}
function Oy(r, e) {
  if (r == null)
    return {};
  const { style: t, alignment: n } = r, a = n.startsWith("top"), i = n.endsWith("leading"), s = n.endsWith("trailing"), l = !i && !s, c = e ?? 0;
  if (t === "overlay") {
    const u = l ? "translateX(-50%)" : "", d = a ? "translateY(-50%)" : "translateY(50%)";
    return {
      "z-index": 10,
      position: "absolute",
      width: "max-content",
      top: a ? Pr(-c / 2) : "initial",
      bottom: a ? "initial" : Pr(-c / 2),
      left: i ? Pr(-c) : l ? "50%" : "initial",
      right: s ? Pr(-c) : "initial",
      transform: `${u} ${d}`
    };
  }
  return t === "nested" ? {
    "z-index": 10,
    position: "absolute",
    inset: 0,
    display: "flex",
    top: a ? Pr(c) : "initial",
    bottom: a ? "initial" : Pr(c),
    left: i ? Pr(c) : l ? "50%" : "initial",
    right: s ? Pr(c) : "initial",
    transform: l ? "translateX(-50%)" : "initial"
  } : {};
}
var Ny = /* @__PURE__ */ V('<div style="flex-grow: 1; width:100%;"></div>'), Ly = /* @__PURE__ */ V("<div><!></div>");
function jy(r, e) {
  _e(e, !0);
  const t = () => Be(l, "$selectedPackageId", n), [n, a] = Ze(), { walletButtonRender: i, onWalletButtonReady: s, selectedPackageId: l } = Pt(), c = rt(), u = /* @__PURE__ */ m(c), d = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), p = /* @__PURE__ */ m(() => {
    const { style: C } = d;
    if (C != null)
      return o(u) === "dark" && C.dark != null ? C.dark : C.light;
  }), _ = { width: { type: "fill" }, height: { type: "fit" } }, f = {
    type: "vertical",
    alignment: "center",
    distribution: "center"
  }, g = /* @__PURE__ */ m(() => ({
    size: e.size ?? _,
    dimension: e.dimension ?? f,
    spacing: e.spacing ?? 0,
    margin: e.margin ?? ho,
    border: e.border ?? null,
    shape: e.shape ?? null,
    shadow: e.shadow ?? null
  })), w = /* @__PURE__ */ m(() => o(g).size), k = /* @__PURE__ */ m(() => o(g).dimension), h = /* @__PURE__ */ m(() => o(g).spacing), y = /* @__PURE__ */ m(() => o(g).margin), b = /* @__PURE__ */ m(() => ({
    display: "flex",
    position: "relative",
    width: hr(o(w).width),
    height: hr(o(w).height),
    ...ic(o(k)),
    gap: Pr(o(h)),
    margin: kr({
      ...o(y) ? { ...o(y) } : { ...ho }
    })
  })), v = /* @__PURE__ */ m(() => nr(o(b)));
  var P = Ee(), I = ce(P);
  {
    var E = (C) => {
      var S = Ly(), F = T(S);
      wp(F, () => o(p), (D) => {
        var O = Ny();
        pm(O, (N, L) => i == null ? void 0 : i(N, L), () => ({
          selectedPackageId: t(),
          onReady: e.onWalletButtonReady ?? s,
          walletButtonTheme: o(p)
        })), x(D, O);
      }), K(() => Fe(S, o(v))), x(C, S);
    };
    G(I, (C) => {
      i && t() && C(E);
    });
  }
  x(r, P), ge(), a();
}
var By = /* @__PURE__ */ V('<div class="wallet-skeleton rc-gradient-border svelte-16fkfdj">&nbsp; <div class="wallet-skeleton-shimmer svelte-16fkfdj"></div></div>');
const Ry = {
  hash: "svelte-16fkfdj",
  code: `.wallet-skeleton.svelte-16fkfdj {position:relative;border-radius:9999px;background-color:rgba(128, 128, 128, 0.16);backdrop-filter:blur(18px);min-height:48px;flex-grow:1;width:100%;}.wallet-skeleton-shimmer.svelte-16fkfdj {position:absolute;inset:0;overflow:hidden;border-radius:inherit;}.wallet-skeleton-shimmer.svelte-16fkfdj::before {content:"";position:absolute;inset:0;background:linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.01)
    );opacity:0.9;mix-blend-mode:screen;}.wallet-skeleton-shimmer.svelte-16fkfdj::after {content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 20%,
      transparent 40%
    );opacity:0.8;
    animation: svelte-16fkfdj-wallet-skeleton-shimmer 1.4s ease-in-out infinite;}

  @keyframes svelte-16fkfdj-wallet-skeleton-shimmer {
    100% {
      transform: translateX(100%);
    }
  }`
};
function Uy(r, e) {
  _e(e, !0), ke(r, Ry);
  const t = { width: { type: "fill" }, height: { type: "fit" } }, n = {
    type: "vertical",
    alignment: "center",
    distribution: "center"
  }, a = /* @__PURE__ */ m(() => ({
    size: e.size ?? t,
    dimension: e.dimension ?? n,
    spacing: e.spacing ?? 0,
    margin: e.margin ?? ho,
    border: e.border ?? null,
    shape: e.shape ?? null,
    shadow: e.shadow ?? null,
    style: e.style
  })), i = /* @__PURE__ */ m(() => o(a).size), s = /* @__PURE__ */ m(() => o(a).dimension), l = /* @__PURE__ */ m(() => o(a).spacing), c = /* @__PURE__ */ m(() => o(a).margin), u = /* @__PURE__ */ m(() => o(a).border), d = /* @__PURE__ */ m(() => o(a).shape), p = /* @__PURE__ */ m(() => o(a).shadow), _ = /* @__PURE__ */ m(() => o(a).style), f = 10, g = rt(), w = /* @__PURE__ */ m(g), k = /* @__PURE__ */ m(() => ({
    ...o(_),
    display: "flex",
    position: "relative",
    width: hr(o(i).width),
    height: hr(o(i).height),
    ...ic(o(s)),
    gap: Pr(o(l)),
    margin: kr({
      ...o(c) ? {
        ...o(c),
        bottom: Math.max(o(c).bottom, f)
      } : {
        ...ho,
        bottom: f
      }
    })
  })), h = /* @__PURE__ */ m(() => nr({
    ...o(k),
    ...Dn(o(w), o(u)),
    "border-radius": Nn(o(d)),
    "box-shadow": ua(o(w), o(p))
  }));
  var y = By();
  he(y, "aria-hidden", !0), K(() => Fe(y, o(h))), x(r, y), ge();
}
const Wn = (r, e) => {
  var t;
  return r.components.some((n) => g_(n, e)) || ((t = r.badge) != null && t.stack ? Wn(r.badge.stack, e) : !1);
}, g_ = (r, e) => {
  if (r.type === e || r.fallback && g_(r.fallback, e))
    return !0;
  switch (r.type) {
    case "carousel":
      return r.pages.some((t) => Wn(t, e));
    case "package":
    case "purchase_button":
    case "tab":
    case "tab_control_button":
      return Wn(r.stack, e);
    case "stack":
      return Wn(r, e);
    case "tabs":
      return Wn(r.control.stack, e) || r.tabs.some((t) => Wn(t.stack, e));
    default:
      return !1;
  }
};
var Vy = /* @__PURE__ */ V("<div><!></div> <!>", 1);
const Wy = {
  hash: "svelte-rmil0y",
  code: ".wallet-slot.svelte-rmil0y {display:contents;}.wallet-slot-hidden.svelte-rmil0y {display:none;}"
};
function Hy(r, e) {
  _e(e, !0), ke(r, Wy);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), {
    wallet_unknown_stack: n,
    wallet_available_stack: a,
    wallet_unavailable_stack: i,
    type: s,
    ...l
  } = t, { walletButtonRender: c, ...u } = Pt(), d = Wn(a, "wallet_button");
  let p = /* @__PURE__ */ re(rr(d ? void 0 : !1)), _ = /* @__PURE__ */ re(rr(!!c && d));
  Wp({ walletButtonRender: c, ...u, onWalletButtonReady: (h) => {
    q(p, h, !0), q(_, !1);
  } });
  const g = /* @__PURE__ */ m(() => !o(p) || !a), w = /* @__PURE__ */ m(() => !!(a && o(p) && !o(_))), k = {
    components: [],
    type: "stack",
    visible: null,
    dimension: { type: "vertical", distribution: "start", alignment: "center" },
    background_color: null,
    spacing: 0,
    ...l
  };
  Tr(r, dr(() => k, {
    children: (h, y) => {
      var b = Vy(), v = ce(b), P = T(v);
      Tr(P, dr(() => a));
      var I = W(v, 2);
      {
        var E = (S) => {
          Tr(S, dr(() => n));
        }, C = (S) => {
          var F = Ee(), D = ce(F);
          {
            var O = (N) => {
              Tr(N, dr(() => i));
            };
            G(
              D,
              (N) => {
                o(g) && N(O);
              },
              !0
            );
          }
          x(S, F);
        };
        G(I, (S) => {
          o(_) ? S(E) : S(C, !1);
        });
      }
      K(() => ur(v, 1, la(o(w) ? "wallet-slot" : "wallet-slot-hidden"), "svelte-rmil0y")), x(h, b);
    },
    $$slots: { default: !0 }
  })), ge();
}
function co(r, e) {
  _e(e, !0);
  const t = {
    button: Hh,
    carousel: yy,
    countdown: eb,
    express_purchase_button: Hy,
    footer: f_,
    header: m_,
    icon: p_,
    image: kb,
    input_multiple_choice: kv,
    input_option: xv,
    input_single_choice: Ev,
    input_text: yv,
    package: xb,
    purchase_button: Wb,
    redemption_button: Qv,
    skeleton_loader: Uy,
    stack: Tr,
    tab_control_button: Py,
    tab_control_toggle: Sy,
    tab_control: wy,
    tabs: Ty,
    text: yl,
    timeline: Jb,
    video: ck,
    wallet_button: jy,
    web_view: Nk
  }, n = (g) => g.type in t, a = (g) => {
    if (n(g))
      return [t[g.type], g];
    if (g.type === "fallback_header")
      return;
    const { fallback: w } = g;
    if (w && n(w))
      return [t[w.type], w];
  }, i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy", "nodeData"]), s = /* @__PURE__ */ m(() => a(e.nodeData) ?? []), l = /* @__PURE__ */ m(() => Ui(o(s), 2)), c = /* @__PURE__ */ m(() => o(l)[0]), u = /* @__PURE__ */ m(() => o(l)[1]);
  var d = { getComponentClass: a }, p = Ee(), _ = ce(p);
  {
    var f = (g) => {
      var w = Ee(), k = ce(w);
      sm(k, () => o(c), (h, y) => {
        y(h, dr(() => o(u) || {}, () => i));
      }), x(g, w);
    };
    G(_, (g) => {
      o(c) && g(f);
    });
  }
  return x(r, p), ge(d);
}
var Yy = /* @__PURE__ */ V("<div><!></div>"), Gy = /* @__PURE__ */ V('<div class="rc-zlayer-layer svelte-19iog96"><!></div>'), Ky = /* @__PURE__ */ V('<div style="position: relative; width: 100%; height: 100%; isolation: isolate;"></div>'), Xy = /* @__PURE__ */ V("<!> <!> <!> <!>", 1);
const Zy = {
  hash: "svelte-19iog96",
  code: `.stack.svelte-19iog96 {appearance:none;position:relative;&[role="button"] {cursor:pointer;}&::before {content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:var(--overlay);}}.stack.rc-stack-video-bg.svelte-19iog96::before {z-index:2;pointer-events:none;}.stack.rc-stack-video-bg.svelte-19iog96 > .rc-bg-video {z-index:1;}

  /* Keep flex children interactive and above tinted overlay (::before z-index). */.stack.rc-stack-video-bg.svelte-19iog96 > :not(.rc-bg-video) {position:relative;z-index:3;}

  /*
   * Each overlay layer is a full-size (inset:0) box, so by default it swallows
   * clicks anywhere over the stack — including where it has no content —
   * blocking interactive elements on the layers beneath. Only its own content
   * should be hit-testable.
   */.rc-zlayer-layer.svelte-19iog96 {pointer-events:none;}.rc-zlayer-layer.svelte-19iog96 > * {pointer-events:auto;}`
};
function Tr(r, e) {
  _e(e, !0), ke(r, Zy);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { onclick: n, children: a, class: i, testId: s } = t, l = lt({ state: !0, hover: !0 }), c = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(l(), e.overrides)
  })), u = /* @__PURE__ */ m(() => o(c).components), d = /* @__PURE__ */ m(() => o(c).size), p = /* @__PURE__ */ m(() => o(c).dimension), _ = /* @__PURE__ */ m(() => o(c).spacing), f = /* @__PURE__ */ m(() => o(c).margin), g = /* @__PURE__ */ m(() => o(c).padding), w = /* @__PURE__ */ m(() => o(c).background_color), k = /* @__PURE__ */ m(() => o(c).background), h = /* @__PURE__ */ m(() => o(c).border), y = /* @__PURE__ */ m(() => o(c).shape), b = /* @__PURE__ */ m(() => o(c).shadow), v = /* @__PURE__ */ m(() => o(c).badge), P = /* @__PURE__ */ m(() => o(c).visible), I = rt(), E = /* @__PURE__ */ m(I), C = /* @__PURE__ */ m(() => {
    var A;
    return ((A = o(k)) == null ? void 0 : A.type) === "video";
  }), S = /* @__PURE__ */ m(() => {
    if (!o(C)) return null;
    const A = o(k);
    return !A || A.type !== "video" ? null : jo(o(E), A);
  }), F = /* @__PURE__ */ m(() => Nn(o(y))), D = /* @__PURE__ */ m(() => nr({
    display: "flex",
    position: "relative",
    width: hr(o(d).width),
    height: hr(o(d).height),
    ...Fy(o(d).width),
    ...qy(o(d).height),
    ...ic(o(p)),
    gap: Pr(o(_)),
    margin: kr(o(f)),
    padding: kr(o(g)),
    ...Ln(o(E), o(w), o(k)),
    ...Dn(o(E), o(h)),
    "border-radius": o(F),
    "box-shadow": ua(o(E), o(b)),
    ...Ji({
      hasVideoBg: o(C),
      clipOverflow: o(F) !== "0"
    }),
    // Read from props proxy so $derived re-evaluates when parent updates style
    ...e.style
  })), O = (A) => {
    if (A === 0 || o(p).type !== "zlayer")
      return "";
    const { justifyContent: U, alignItems: j } = zy(o(p).alignment);
    return nr({
      position: "absolute",
      inset: 0,
      display: "flex",
      "justify-content": U,
      "align-items": j,
      "z-index": A + 1
    });
  }, N = /* @__PURE__ */ m(() => {
    var A;
    return nr(Oy(o(v), (A = o(h)) == null ? void 0 : A.width));
  }), L = /* @__PURE__ */ m(() => o(P) !== !1);
  var Z = Ee(), z = ce(Z);
  {
    var M = (A) => {
      var U = Ee(), j = ce(U);
      Xl(j, () => n !== void 0 ? "button" : "div", !1, (R, Q) => {
        Zl(
          R,
          (J) => ({
            role: n !== void 0 ? "button" : void 0,
            onclick: n,
            style: o(D),
            class: J,
            "data-testid": s
          }),
          [
            () => [
              "stack",
              "rc-gradient-border",
              i,
              o(C) ? Zi("stack") : ""
            ].filter(Boolean).join(" ")
          ],
          void 0,
          void 0,
          "svelte-19iog96"
        );
        var se = Xy(), te = ce(se);
        {
          var le = (J) => {
            Bo(J, {
              get url() {
                return o(S).url;
              },
              get urlLowRes() {
                return o(S).url_low_res;
              },
              get objectFit() {
                return o(S).fit;
              },
              get objectPosition() {
                return o(S).position;
              },
              get poster() {
                return o(S).posterWebp;
              },
              get mute() {
                return o(S).mute;
              },
              get loop() {
                return o(S).loop;
              }
            });
          };
          G(te, (J) => {
            o(S) && J(le);
          });
        }
        var ae = W(te, 2);
        {
          var Y = (J) => {
            var ie = Yy(), Ie = T(ie);
            co(Ie, {
              get nodeData() {
                return o(v).stack;
              }
            }), K(() => Fe(ie, o(N))), x(J, ie);
          };
          G(ae, (J) => {
            o(v) && J(Y);
          });
        }
        var $ = W(ae, 2);
        {
          var oe = (J) => {
            var ie = Ky();
            Gt(ie, 21, () => o(u), ln, (Ie, we, xe) => {
              var Se = Gy(), Ue = T(Se);
              co(Ue, {
                get nodeData() {
                  return o(we);
                }
              }), K((ye) => Fe(Se, ye), [() => O(xe)]), x(Ie, Se);
            }), x(J, ie);
          }, B = (J) => {
            var ie = Ee(), Ie = ce(ie);
            Gt(Ie, 17, () => o(u), ln, (we, xe) => {
              co(we, {
                get nodeData() {
                  return o(xe);
                }
              });
            }), x(J, ie);
          };
          G($, (J) => {
            o(p).type === "zlayer" ? J(oe) : J(B, !1);
          });
        }
        var de = W($, 2);
        a == null || a(de), x(Q, se);
      }), x(A, U);
    };
    G(z, (A) => {
      o(L) && A(M);
    });
  }
  x(r, Z), ge();
}
function Qo(r) {
  return r < 10 ? `0${r}` : `${r}`;
}
function $o(r) {
  return `${r}`;
}
function Jy(r, e = Date.now()) {
  const n = new Date(r).getTime() - e;
  if (n <= 0)
    return {
      count_days_with_zero: "00",
      count_days_without_zero: "0",
      count_hours_with_zero: "00",
      count_hours_without_zero: "0",
      count_minutes_with_zero: "00",
      count_minutes_without_zero: "0",
      count_seconds_with_zero: "00",
      count_seconds_without_zero: "0"
    };
  const a = Math.floor(n / 1e3), i = Math.floor(a / 60), s = Math.floor(i / 60), c = Math.floor(s / 24), u = s % 24, d = i % 60, p = a % 60;
  return {
    count_days_with_zero: Qo(c),
    count_days_without_zero: $o(c),
    count_hours_with_zero: Qo(u),
    count_hours_without_zero: $o(u),
    count_minutes_with_zero: Qo(d),
    count_minutes_without_zero: $o(d),
    count_seconds_with_zero: Qo(p),
    count_seconds_without_zero: $o(p)
  };
}
function Qy(r, e = Date.now()) {
  return new Date(r).getTime() <= e;
}
const $y = et(Date.now(), (r) => {
  r(Date.now());
  let e;
  const t = setTimeout(() => {
    r(Date.now()), e = setInterval(() => r(Date.now()), 1e3);
  }, 1e3 - Date.now() % 1e3);
  return () => {
    clearTimeout(t), e !== void 0 && clearInterval(e);
  };
});
function eb(r, e) {
  _e(e, !0);
  const t = () => Be($y, "$sharedNow", n), [n, a] = Ze(), i = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { countdown_stack: s, end_stack: l } = i, c = /* @__PURE__ */ m(() => Jy(e.style.date, t())), u = /* @__PURE__ */ m(() => Qy(e.style.date, t())), d = tc(), p = Ct([d, Sh(() => o(c))], ([h, y]) => ({ ...h, ...y }));
  rc(p);
  const _ = /* @__PURE__ */ m(() => o(u) && l ? l : s), f = /* @__PURE__ */ m(() => e.visible !== !1);
  var g = Ee(), w = ce(g);
  {
    var k = (h) => {
      Tr(h, dr(() => o(_)));
    };
    G(w, (h) => {
      o(f) && h(k);
    });
  }
  x(r, g), ge(), a();
}
var rb = /* @__PURE__ */ V('<div class="svelte-nyb2ku"><!></div>');
const tb = {
  hash: "svelte-nyb2ku",
  code: "div.svelte-nyb2ku {width:100%;display:flex;flex-direction:row;justify-content:center;}"
};
function f_(r, e) {
  ke(r, tb);
  var t = rb(), n = T(t);
  Tr(n, dr(() => e.stack)), x(r, t);
}
var nb = /* @__PURE__ */ V('<div class="svelte-nwqu5u"><!></div>');
const ab = {
  hash: "svelte-nwqu5u",
  code: "div.svelte-nwqu5u {display:flex;flex-direction:row;justify-content:center;}"
};
function m_(r, e) {
  ke(r, ab);
  var t = nb(), n = T(t);
  Tr(n, dr(() => e.stack)), x(r, t);
}
var ob = /* @__PURE__ */ Cr("<circle></circle>"), ib = /* @__PURE__ */ Cr("<path></path>"), sb = /* @__PURE__ */ Cr("<path></path>"), lb = /* @__PURE__ */ Cr("<path></path>"), cb = /* @__PURE__ */ Cr("<!><!><!><!>", 1);
function Ii(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ m(() => {
    var y;
    if (((y = e.shape) == null ? void 0 : y.type) !== "rectangle")
      return [0, 0, 0, 0];
    const { corners: h } = e.shape;
    return [
      (h == null ? void 0 : h.top_leading) ?? 0,
      (h == null ? void 0 : h.top_trailing) ?? 0,
      (h == null ? void 0 : h.bottom_trailing) ?? 0,
      (h == null ? void 0 : h.bottom_leading) ?? 0
    ];
  }), n = /* @__PURE__ */ m(() => Ui(o(t), 4)), a = /* @__PURE__ */ m(() => o(n)[0]), i = /* @__PURE__ */ m(() => o(n)[1]), s = /* @__PURE__ */ m(() => o(n)[2]), l = /* @__PURE__ */ m(() => o(n)[3]);
  var c = cb(), u = ce(c);
  {
    var d = (h) => {
      var y = ob();
      K(
        (b) => {
          he(y, "cx", e.width / 2), he(y, "cy", e.height / 2), he(y, "r", b);
        },
        [() => Math.min(e.width, e.height) / 2]
      ), x(h, y);
    };
    G(u, (h) => {
      var y;
      ((y = e.shape) == null ? void 0 : y.type) === "circle" && h(d);
    });
  }
  var p = W(u);
  {
    var _ = (h) => {
      var y = ib();
      K(() => he(y, "d", `M 0 0 L ${e.width} 0 L ${e.width}  ${e.height} Q ${e.width / 2} ${e.height - 54} 0 ${e.height} Z`)), x(h, y);
    };
    G(p, (h) => {
      var y;
      ((y = e.shape) == null ? void 0 : y.type) === "concave" && h(_);
    });
  }
  var f = W(p);
  {
    var g = (h) => {
      var y = sb();
      K(() => he(y, "d", `M 0 0 L ${e.width} 0 L ${e.width} ${e.height - 27} Q ${e.width / 2} ${e.height + 27} 0 ${e.height - 27} Z`)), x(h, y);
    };
    G(f, (h) => {
      var y;
      ((y = e.shape) == null ? void 0 : y.type) === "convex" && h(g);
    });
  }
  var w = W(f);
  {
    var k = (h) => {
      var y = lb();
      K(() => he(y, "d", `M ${o(a)} 0 H ${e.width - o(i)} A ${o(i)} ${o(i)} 0 0 1 ${e.width} ${o(i)}
        V ${e.height - o(s)} A ${o(s)} ${o(s)} 0 0 1 ${e.width - o(s)} ${e.height}
        H ${o(l)} A ${o(l)} ${o(l)} 0 0 1 0 ${e.height - o(l)}
        V ${o(a)} A ${o(a)} ${o(a)} 0 0 1 ${o(a)} 0 Z`)), x(h, y);
    };
    G(w, (h) => {
      var y, b;
      (((y = e.shape) == null ? void 0 : y.type) === "rectangle" || ((b = e.shape) == null ? void 0 : b.type) === void 0) && h(k);
    });
  }
  x(r, c), ge();
}
var ub = /* @__PURE__ */ Cr('<linearGradient x1="0" y1="0" x2="100%" y2="100%"><stop offset="0%"></stop><stop offset="100%"></stop></linearGradient>'), db = /* @__PURE__ */ Cr("<stop></stop>"), pb = /* @__PURE__ */ Cr("<linearGradient></linearGradient>"), _b = /* @__PURE__ */ Cr("<stop></stop>"), gb = /* @__PURE__ */ Cr("<radialGradient></radialGradient>"), fb = /* @__PURE__ */ Cr("<!><!><!>", 1);
function Ci(r, e) {
  _e(e, !0);
  var t = fb(), n = ce(t);
  {
    var a = (u) => {
      var d = ub(), p = T(d), _ = W(p);
      K(() => {
        he(d, "id", e.id), he(p, "stop-color", e.overlay.value), he(_, "stop-color", e.overlay.value);
      }), x(u, d);
    };
    G(n, (u) => {
      var d;
      ((d = e.overlay) == null ? void 0 : d.type) === "hex" && u(a);
    });
  }
  var i = W(n);
  {
    var s = (u) => {
      var d = pb();
      Gt(d, 21, () => e.overlay.points, ln, (p, _) => {
        var f = db();
        K(() => {
          he(f, "offset", `${o(_).percent}%`), he(f, "stop-color", o(_).color);
        }), x(p, f);
      }), K(() => {
        he(d, "id", e.id), he(d, "gradientTransform", `rotate(${e.overlay.degrees - 90}, 0.5, 0.5)`);
      }), x(u, d);
    };
    G(i, (u) => {
      var d;
      ((d = e.overlay) == null ? void 0 : d.type) === "linear" && u(s);
    });
  }
  var l = W(i);
  {
    var c = (u) => {
      var d = gb();
      Gt(d, 21, () => e.overlay.points, ln, (p, _) => {
        var f = _b();
        K(() => {
          he(f, "offset", `${o(_).percent}%`), he(f, "stop-color", o(_).color);
        }), x(p, f);
      }), K(() => he(d, "id", e.id)), x(u, d);
    };
    G(l, (u) => {
      var d;
      ((d = e.overlay) == null ? void 0 : d.type) === "radial" && u(c);
    });
  }
  x(r, t), ge();
}
var mb = /* @__PURE__ */ Cr('<use fill="transparent"></use>'), hb = /* @__PURE__ */ Cr('<rect x="0" y="0" height="100%" width="100%"></rect>'), vb = /* @__PURE__ */ Cr('<use fill="none"></use>'), yb = /* @__PURE__ */ V('<div><svg width="100%" height="100%"><defs><clipPath><!></clipPath><g><!></g><!><!></defs><!><g><foreignObject x="0" y="0" width="100%" height="100%"><img alt="" class="svelte-qlhja6"/></foreignObject><!><!></g></svg></div>');
const bb = {
  hash: "svelte-qlhja6",
  code: "img.svelte-qlhja6 {width:100%;height:100%;object-fit:contain;object-position:center;}"
};
function kb(r, e) {
  _e(e, !0), ke(r, bb);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), n = lt({ state: !0 }), a = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(n(), e.overrides)
  })), i = /* @__PURE__ */ m(() => o(a).id), s = /* @__PURE__ */ m(() => o(a).source), l = /* @__PURE__ */ m(() => o(a).size), c = /* @__PURE__ */ m(() => o(a).mask_shape), u = /* @__PURE__ */ m(() => o(a).fit_mode), d = /* @__PURE__ */ m(() => o(a).padding), p = /* @__PURE__ */ m(() => o(a).margin), _ = /* @__PURE__ */ m(() => o(a).color_overlay), f = /* @__PURE__ */ m(() => o(a).border), g = /* @__PURE__ */ m(() => o(a).shadow), w = /* @__PURE__ */ m(() => o(a).visible), k = rt(), h = /* @__PURE__ */ m(k), y = /* @__PURE__ */ m(() => Yr(o(h), o(s)));
  let b = /* @__PURE__ */ re(0), v = /* @__PURE__ */ re(rr({ height: 0, width: 0 }));
  ar(() => {
    if (o(y).width || o(y).height) {
      q(v, { height: o(y).height, width: o(y).width }, !0);
      return;
    }
    const U = new window.Image();
    U.src = o(y).original;
    const j = () => {
      q(v, { height: U.height, width: U.width }, !0);
    };
    return U.addEventListener("load", j), () => {
      U.removeEventListener("load", j);
    };
  });
  const P = /* @__PURE__ */ m(() => o(l).height.type === "fixed" ? o(l).height.value : Math.round(o(b) * (o(v).height / o(v).width))), I = /* @__PURE__ */ m(() => nr({
    width: hr(o(l).width),
    height: `${o(P)}px`,
    margin: kr(o(p)),
    padding: kr(o(d)),
    "line-height": 0,
    "flex-shrink": o(l).width.type === "fixed" ? 0 : 1
  }));
  let E = /* @__PURE__ */ re(null);
  const C = /* @__PURE__ */ m(() => {
    var U, j;
    return [((U = o(E)) == null ? void 0 : U.width) ?? 0, ((j = o(E)) == null ? void 0 : j.height) ?? 0];
  }), S = /* @__PURE__ */ m(() => Ui(o(C), 2)), F = /* @__PURE__ */ m(() => o(S)[0]), D = /* @__PURE__ */ m(() => o(S)[1]), O = /* @__PURE__ */ m(() => `0 0 ${o(F)} ${o(D)}`), N = /* @__PURE__ */ m(() => {
    var te;
    if (!((te = o(g)) != null && te.color))
      return "";
    const { x: U, y: j, radius: R, color: Q } = o(g), se = $r(o(h), Q);
    return `filter: drop-shadow(${U}px ${j}px ${R}px ${se})`;
  }), L = /* @__PURE__ */ m(() => o(_) && Yr(o(h), o(_))), Z = /* @__PURE__ */ m(() => o(w) !== !1);
  var z = Ee(), M = ce(z);
  {
    var A = (U) => {
      var j = yb(), R = T(j), Q = T(R), se = T(Q), te = T(se);
      Ii(te, {
        get shape() {
          return o(c);
        },
        get width() {
          return o(F);
        },
        get height() {
          return o(D);
        }
      });
      var le = W(se), ae = T(le);
      Ii(ae, {
        get shape() {
          return o(c);
        },
        get width() {
          return o(F);
        },
        get height() {
          return o(D);
        }
      });
      var Y = W(le);
      {
        let ye = /* @__PURE__ */ m(() => `${o(i)}-overlay`);
        Ci(Y, {
          get id() {
            return o(ye);
          },
          get overlay() {
            return o(L);
          }
        });
      }
      var $ = W(Y);
      {
        var oe = (ye) => {
          {
            let Ce = /* @__PURE__ */ m(() => `${o(i)}-border-color`), Te = /* @__PURE__ */ m(() => Yr(o(h), o(f).color));
            Ci(ye, {
              get id() {
                return o(Ce);
              },
              get overlay() {
                return o(Te);
              }
            });
          }
        };
        G($, (ye) => {
          o(f) && o(f).width > 0 && ye(oe);
        });
      }
      var B = W(Q);
      {
        var de = (ye) => {
          var Ce = mb();
          K(() => he(Ce, "href", `#${o(i)}-border`)), x(ye, Ce);
        };
        G(B, (ye) => {
          o(f) && o(f).width > 0 && ye(de);
        });
      }
      var J = W(B), ie = T(J), Ie = T(ie), we = W(ie);
      {
        var xe = (ye) => {
          var Ce = hb();
          K(() => he(Ce, "fill", `url(#${o(i)}-overlay)`)), x(ye, Ce);
        };
        G(we, (ye) => {
          o(L) && ye(xe);
        });
      }
      var Se = W(we);
      {
        var Ue = (ye) => {
          var Ce = vb();
          K(() => {
            he(Ce, "href", `#${o(i)}-border`), he(Ce, "stroke", `url(#${o(i)}-border-color)`), he(Ce, "stroke-width", o(f).width * 2);
          }), x(ye, Ce);
        };
        G(Se, (ye) => {
          o(f) && o(f).width > 0 && ye(Ue);
        });
      }
      K(
        (ye) => {
          Fe(j, o(I)), he(R, "viewBox", o(O)), Fe(R, o(N)), he(se, "id", `${o(i)}-path`), he(le, "id", `${o(i)}-border`), he(J, "clip-path", `url(#${o(i)}-path)`), he(Ie, "src", o(y).original), Fe(Ie, `object-fit:${ye ?? ""}`);
        },
        [() => Va(o(u))]
      ), Dp(R, "contentRect", (ye) => q(E, ye)), fo(j, "clientWidth", (ye) => q(b, ye)), x(U, j);
    };
    G(M, (U) => {
      o(Z) && U(A);
    });
  }
  x(r, z), ge();
}
const h_ = Symbol("packageId");
function wb(r) {
  gr(h_, r);
}
function Pb() {
  return He(h_);
}
function xb(r, e) {
  _e(e, !0);
  const t = () => Be(f, "$selectedPackageId", c), n = () => Be(g, "$variablesPerPackage", c), a = () => Be(v, "$fallbackVariables", c), i = () => Be(w, "$baseVariables", c), s = () => Be(k, "$infoPerPackage", c), l = () => Be(E, "$fallbackPackageInfo", c), [c, u] = Ze(), d = mr(e.package_id);
  ar(() => {
    d.set(e.package_id);
  }), wb(d);
  const {
    defaultPackageId: p,
    emitComponentInteraction: _,
    selectedPackageId: f,
    variablesPerPackage: g,
    baseVariables: w,
    infoPerPackage: k
  } = Pt();
  ar(() => {
    if (e.is_selected_by_default) {
      const F = e.package_id;
      Re(() => {
        wi(f, F);
      });
    }
  });
  const h = /* @__PURE__ */ m(() => t() === e.package_id), y = mr(o(h));
  ar(() => {
    y.set(o(h));
  }), Yi(y);
  const b = () => {
    const F = t();
    F !== e.package_id && (wi(f, e.package_id), _({
      componentType: "package",
      componentName: e.name,
      componentValue: e.package_id,
      originPackageId: F,
      destinationPackageId: e.package_id,
      defaultPackageId: p
    }));
  }, v = tc(), P = /* @__PURE__ */ m(() => {
    var D;
    const F = (D = n()) == null ? void 0 : D[e.package_id];
    return F === void 0 ? a() : { ...i(), ...F };
  }), I = mr(o(P));
  ar(() => {
    I.set(o(P));
  }), rc(I);
  const E = Th(), C = /* @__PURE__ */ m(() => {
    var F;
    return ((F = s()) == null ? void 0 : F[e.package_id]) ?? l();
  }), S = mr(o(C));
  ar(() => {
    S.set(o(C));
  }), Up(S), Tr(r, dr(() => e.stack, { onclick: b })), ge(), u();
}
var Nu;
(function(r) {
  r.weekly = "$rc_weekly", r.monthly = "$rc_monthly", r.two_month = "$rc_two_month", r.three_month = "$rc_three_month", r.six_month = "$rc_six_month", r.annual = "$rc_annual", r.lifetime = "$rc_lifetime";
})(Nu || (Nu = {}));
const AI = {
  /**
   * Creates a string custom variable value.
   * @param value The string value for the custom variable.
   * @returns A CustomVariableValue containing the string.
   */
  string: (r) => ({ type: "string", value: r }),
  /**
   * Creates a number custom variable value.
   * @param value The number value for the custom variable.
   * @returns A CustomVariableValue containing the number.
   */
  number: (r) => ({ type: "number", value: r }),
  /**
   * Creates a boolean custom variable value.
   * @param value The boolean value for the custom variable.
   * @returns A CustomVariableValue containing the boolean.
   */
  boolean: (r) => ({
    type: "boolean",
    value: r
  })
};
function v_(r, e) {
  const t = Object.fromEntries(Object.entries(r).map(([a, { value: i }]) => [
    a,
    String(i)
  ]));
  return e ? {
    ...Object.fromEntries(Object.entries(e.custom_variables ?? {}).map(([a, { default_value: i }]) => [
      a,
      String(i)
    ])),
    ...t
  } : t;
}
const Lu = "--rc-purchases-ui-bg-color";
function Eb(r, e, t) {
  const n = (a) => t === "dark" ? a == null ? void 0 : a.dark : a == null ? void 0 : a.light;
  return n(r) ?? n(e) ?? null;
}
const y_ = /^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/;
function Sb(r) {
  return y_.test(r);
}
function Ib(r) {
  const e = y_.exec(r);
  return e != null && (e[1] == null || e[1].toLowerCase() === "ff");
}
function ei(r) {
  return r.length === 7 ? `${r.toLowerCase()}ff` : r.toLowerCase();
}
function b_(r, e, t) {
  const n = Eb(r, e, t);
  return n ? Lo(n) : null;
}
function Vs(r, e) {
  const t = r[0], n = r.at(-1);
  if (t == null || n == null)
    return null;
  if (e <= t.percent)
    return ei(t.color);
  if (e >= n.percent)
    return ei(n.color);
  const a = r.findIndex((l) => l.percent >= e), i = r[a - 1], s = r[a];
  return i == null || s == null ? null : i.color.toLowerCase() === s.color.toLowerCase() ? ei(i.color) : i.percent === s.percent ? ei(s.color) : null;
}
function Cb(r) {
  return r.filter((e) => Number.isFinite(e.percent) && Sb(e.color)).slice().sort((e, t) => e.percent - t.percent);
}
function ju(r, [e, t]) {
  const n = Vs(r, e);
  if (n == null || !Ib(n))
    return null;
  const a = [
    e,
    ...r.map((s) => s.percent).filter((s) => s > e && s < t),
    t
  ];
  return a.every((s, l) => {
    if (Vs(r, s) !== n)
      return !1;
    const c = a[l + 1];
    return c == null || c === s ? !0 : Vs(r, (s + c) / 2) === n;
  }) ? n : null;
}
function Bu(r) {
  return Math.abs(r) < 1e-10 ? 0 : r;
}
function Ru(r, e, t, n) {
  const a = r * Math.PI / 180, i = Bu(Math.sin(a)), s = Bu(-Math.cos(a)), l = Math.abs(i) * n.width + Math.abs(s) * n.height;
  return ((e - n.width / 2) * i + (t - n.height / 2) * s + l / 2) / l * 100;
}
function Tb(r, e, t) {
  const n = e === "top" ? 0 : t.height, a = Ru(r, 0, n, t), i = Ru(r, t.width, n, t);
  return [Math.min(a, i), Math.max(a, i)];
}
function Uu(r, e, t) {
  const n = Math.hypot(t.width / 2, t.height / 2);
  return Math.hypot(r - t.width / 2, e - t.height / 2) / n * 100;
}
function Db(r, e) {
  const t = r === "top" ? 0 : e.height, n = Uu(e.width / 2, t, e), a = Uu(0, t, e);
  return [Math.min(n, a), Math.max(n, a)];
}
function Vu(r, e, t, n) {
  switch (r.type) {
    case "hex":
    case "alias":
      return Lo(r);
    case "linear":
      return ju(n ?? [], Tb(r.degrees, e, t));
    case "radial":
      return ju(n ?? [], Db(e, t));
  }
}
function Ab(r, e, t, n) {
  let a = null, i = null;
  if ((r == null ? void 0 : r.type) === "color") {
    const s = Yr(e, r.value), l = s.type === "linear" || s.type === "radial" ? Cb(s.points) : null;
    a = Vu(s, "top", t, l), i = Vu(s, "bottom", t, l);
  }
  if (n != null && n.stickyComponents) {
    const s = n.stickyComponents.hasHeader === !0, l = n.stickyComponents.hasFooter === !0;
    a = l && !s ? a : null, i = s && !l ? i : null;
  }
  if ((n == null ? void 0 : n.paywallFallbackColor) != null || (n == null ? void 0 : n.hostFallbackColor) != null) {
    const s = b_(n.paywallFallbackColor, n.hostFallbackColor, e);
    a = a ?? s, i = i ?? s;
  }
  return { top: a, bottom: i };
}
let Ws = null;
function Fb(r, e, t) {
  var u;
  if (typeof document > "u")
    return () => {
    };
  const { paywallData: n, colorMode: a, hostFallbackColor: i } = t, s = document.documentElement, l = (u = n == null ? void 0 : n.components_config) == null ? void 0 : u.base;
  let c = null;
  if (e.kind === "style" && e.style.background) {
    const d = e.style.background;
    if (!d.includes("gradient"))
      c = d;
    else {
      const p = Ab(l == null ? void 0 : l.background, a, { width: window.innerWidth, height: window.innerHeight }, {
        stickyComponents: {
          hasHeader: (l == null ? void 0 : l.header) != null,
          hasFooter: (l == null ? void 0 : l.sticky_footer) != null
        }
      });
      c = p.top ?? p.bottom;
    }
  }
  return c === null && (c = b_(l == null ? void 0 : l.safe_area_fallback_color, i, a)), c !== null && (Ws = r, s.style.setProperty(Lu, c)), () => {
    Ws === r && (Ws = null, s.style.removeProperty(Lu));
  };
}
var qb = /* @__PURE__ */ V('<div class="backdrop svelte-1ozp8sb" role="presentation" tabindex="-1" aria-hidden="true"><div role="dialog" aria-modal="true"><!> <!></div></div>');
const Mb = {
  hash: "svelte-1ozp8sb",
  code: `.backdrop.svelte-1ozp8sb {position:absolute;inset:0 0 0 0;width:100%;height:100%;background-color:#0000003f;display:flex;flex-direction:column;}.sheet.svelte-1ozp8sb {position:absolute;inset:auto 0 0 0;transition-property:transform;transition-duration:225ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:translateY(100%);&::before {content:"";position:absolute;inset:0;background:var(--overlay);pointer-events:none;}&.visible {transform:translateY(0);}}.sheet.rc-sheet-video-bg.svelte-1ozp8sb::before {z-index:2;}

  /* Match stack video stacking: tint above video (::before z-index). */.sheet.rc-sheet-video-bg.svelte-1ozp8sb > .rc-bg-video {z-index:1;}.sheet.rc-sheet-video-bg.svelte-1ozp8sb > .rc-sheet-stack-above-video {position:relative;z-index:3;}`
};
function zb(r, e) {
  _e(e, !0), ke(r, Mb);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { stack: n } = t, a = lt({ state: !0 }), i = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(a(), e.overrides)
  })), s = /* @__PURE__ */ m(() => o(i).size), l = /* @__PURE__ */ m(() => o(i).background), c = /* @__PURE__ */ m(() => o(i).background_blur), u = rt(), d = /* @__PURE__ */ m(u), p = /* @__PURE__ */ m(() => {
    var O;
    return ((O = o(l)) == null ? void 0 : O.type) === "video";
  }), _ = /* @__PURE__ */ m(() => {
    if (!o(p)) return null;
    const O = o(l);
    return !O || O.type !== "video" ? null : jo(o(d), O);
  }), f = /* @__PURE__ */ m(() => nr({ background: o(c) ? "#0000003f" : "" })), g = /* @__PURE__ */ m(() => nr({
    height: hr(o(s).height),
    ...Ji({ hasVideoBg: o(p), clipOverflow: !0 }),
    ...Ln(o(d), null, o(l))
  })), { onButtonAction: w } = Pt();
  let k, h = /* @__PURE__ */ re(!1);
  br(() => {
    requestAnimationFrame(() => {
      q(h, !0);
    });
  });
  const y = () => {
    q(h, !1);
  }, b = () => {
    o(h) || w({ type: "navigate_to", destination: "sheet", sheet: null });
  }, v = (O) => {
    O.target === O.currentTarget && y();
  }, P = (O) => {
    O.key === "Escape" && y();
  };
  let I = /* @__PURE__ */ m(() => [
    `sheet ${o(h) ? "visible" : ""}`,
    o(p) ? Zi("sheet") : ""
  ].filter(Boolean).join(" "));
  var E = qb();
  E.__click = v, E.__keydown = P;
  var C = T(E), S = T(C);
  {
    var F = (O) => {
      Bo(O, {
        get url() {
          return o(_).url;
        },
        get urlLowRes() {
          return o(_).url_low_res;
        },
        get objectFit() {
          return o(_).fit;
        },
        get objectPosition() {
          return o(_).position;
        },
        get poster() {
          return o(_).posterWebp;
        },
        get mute() {
          return o(_).mute;
        },
        get loop() {
          return o(_).loop;
        }
      });
    };
    G(S, (O) => {
      o(_) && O(F);
    });
  }
  var D = W(S, 2);
  {
    let O = /* @__PURE__ */ m(() => o(p) ? "rc-sheet-stack-above-video" : void 0);
    Tr(D, dr(() => n, {
      get class() {
        return o(O);
      }
    }));
  }
  ca(C, (O) => k = O, () => k), K(() => {
    Fe(E, o(f)), ur(C, 1, la(o(I)), "svelte-1ozp8sb"), Fe(C, o(g));
  }), qr("transitionend", C, b), x(r, E), ge();
}
Jt(["click", "keydown"]);
var Ob = /* @__PURE__ */ V("<div></div>"), Nb = /* @__PURE__ */ V('<div class="viewport-backdrop svelte-1h1llo0"><!> <!></div>');
const Lb = {
  hash: "svelte-1h1llo0",
  code: ".viewport-backdrop.svelte-1h1llo0 {position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;isolation:isolate;}.viewport-backdrop-overlay.svelte-1h1llo0 {position:absolute;inset:0;pointer-events:none;z-index:1;}.viewport-backdrop-overlay.z-over-video-bg.svelte-1h1llo0 {z-index:2;}"
};
function jb(r, e) {
  _e(e, !0), ke(r, Lb);
  const t = /* @__PURE__ */ m(() => {
    var c;
    return e.model.kind === "style" && ((c = e.model.style.background) != null && c.includes("gradient")) ? Object.entries(e.model.style).map(([u, d]) => `${u}:${d}`).join(";") : e.model.kind === "image" ? [
      `background-image:url("${e.model.src}")`,
      `background-size:${e.model.fit}`,
      `background-position:${e.model.position}`,
      "background-repeat:no-repeat"
    ].join(";") : "";
  }), n = /* @__PURE__ */ m(() => e.model.kind !== "image" && e.model.kind !== "video" || !e.model.overlay || e.model.overlay === "none" ? null : `background:${e.model.overlay}`), a = /* @__PURE__ */ m(() => o(t) !== "" || e.model.kind === "video");
  var i = Ee(), s = ce(i);
  {
    var l = (c) => {
      var u = Nb(), d = T(u);
      {
        var p = (g) => {
          Bo(g, {
            get url() {
              return e.model.url;
            },
            get urlLowRes() {
              return e.model.url_low_res;
            },
            get objectFit() {
              return e.model.fit;
            },
            get objectPosition() {
              return e.model.position;
            },
            get poster() {
              return e.model.posterWebp;
            },
            get mute() {
              return e.model.mute;
            },
            get loop() {
              return e.model.loop;
            }
          });
        };
        G(d, (g) => {
          e.model.kind === "video" && g(p);
        });
      }
      var _ = W(d, 2);
      {
        var f = (g) => {
          var w = Ob();
          let k;
          K(() => {
            k = ur(w, 1, "viewport-backdrop-overlay svelte-1h1llo0", null, k, { "z-over-video-bg": e.model.kind === "video" }), Fe(w, o(n));
          }), x(g, w);
        };
        G(_, (g) => {
          o(n) && g(f);
        });
      }
      K(() => Fe(u, o(t) !== "" ? o(t) : void 0)), x(c, u);
    };
    G(s, (c) => {
      o(a) && c(l);
    });
  }
  x(r, i), ge();
}
var Bb = /* @__PURE__ */ V('<div class="header-wrapper svelte-178te1m"><!></div>'), Rb = /* @__PURE__ */ V('<div class="footer-wrapper svelte-178te1m"><!></div>'), Ub = /* @__PURE__ */ V('<div><!> <!> <div class="paywall-content svelte-178te1m"><!></div> <!></div> <!>', 1);
const Vb = {
  hash: "svelte-178te1m",
  code: `.paywall.svelte-178te1m {position:relative;display:flex;flex-direction:column;align-items:stretch;height:100%;transition-property:filter, transform;transition-duration:0.1s;transition-timing-function:ease-in-out;transform-origin:center;&.blur {filter:blur(10px) brightness(0.8);transform:scale(1.045);}}.header-wrapper.svelte-178te1m {position:sticky;top:0;width:100%;}.footer-wrapper.svelte-178te1m {position:sticky;bottom:0;width:100%;flex-shrink:0;}.paywall-content.svelte-178te1m {z-index:2;width:100%;flex:1 1 auto;display:flex;flex-direction:column;min-height:0;& > .paywall-content-scroll {flex:1 1 auto;min-height:0;overflow-y:auto;}}
    /* Scoped reset - same as original but only affects .paywall descendants */.paywall *,
    .paywall *::before,
    .paywall *::after {box-sizing:border-box;margin:0;padding:0;font-family:inherit;}.paywall {font-family:sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;}.paywall img,
    .paywall picture,
    .paywall video,
    .paywall canvas,
    .paywall svg {display:block;max-width:100%;}.paywall input,
    .paywall button,
    .paywall textarea,
    .paywall select {font:inherit;}.paywall p,
    .paywall h1,
    .paywall h2,
    .paywall h3,
    .paywall h4,
    .paywall h5,
    .paywall h6 {overflow-wrap:break-word;}.paywall p {text-wrap:pretty;}.paywall h1,
    .paywall h2,
    .paywall h3,
    .paywall h4,
    .paywall h5,
    .paywall h6 {text-wrap:balance;}.paywall .rc-gradient-border {position:relative;}.paywall .rc-gradient-border::after {content:"";display:var(--rc-border-display, none);position:absolute;inset:calc(-1 * var(--rc-border-width, 0px));border-radius:inherit;padding:var(--rc-border-width, 0px);background:var(--rc-border-bg, transparent);mask:linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);-webkit-mask:linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;pointer-events:none;}`
};
function k_(r, e) {
  _e(e, !0), ke(r, Vb);
  const t = () => Be(P, "$selectedPackageId", n), [n, a] = Ze(), i = X(e, "variablesPerPackage", 19, () => ({})), s = X(e, "globalVariables", 19, () => ({})), l = X(e, "infoPerPackage", 19, () => ({})), c = X(e, "hideBackButtons", 3, !1), u = X(e, "initialInputSelections", 19, () => ({})), d = X(e, "customVariables", 19, () => ({})), p = Jh(() => e.preferredColorMode), _ = /* @__PURE__ */ m(() => nv(e.paywallData, p())), f = Symbol();
  ar(() => Fb(f, o(_), {
    paywallData: e.paywallData,
    colorMode: p(),
    hostFallbackColor: e.safeAreaFallbackColor
  }));
  const { default_locale: g, components_config: w, components_localizations: k } = e.paywallData, { base: h } = w, y = Uh(h), b = /* @__PURE__ */ m(() => {
    const oe = o(_);
    return oe.kind === "style" && oe.style.background && !oe.style.background.includes("gradient") ? nr(oe.style) : "";
  }), { getLocalizedString: v } = Bh(() => ({
    defaultLocale: g,
    selectedLocale: e.selectedLocale,
    localizations: k
  })), P = mr(y), I = (oe) => {
    if (oe !== void 0)
      return oe.trim().length > 0 ? oe : void 0;
  }, E = (oe) => {
    var B;
    (B = e.onComponentInteraction) == null || B.call(e, {
      ...oe,
      componentName: I(oe.componentName)
    });
  }, C = (oe) => {
    var de;
    const B = t();
    B !== void 0 && ((de = e.onPurchaseClicked) == null || de.call(e, B, oe ?? ""));
  };
  let S = /* @__PURE__ */ re(void 0);
  const F = (oe, B) => {
    var de, J, ie, Ie, we, xe, Se, Ue;
    switch (oe.type) {
      case "workflow":
        B && ((de = e.onActionTriggered) == null || de.call(e, B));
        return;
      case "complete_workflow": {
        const ye = v(oe.url.url_lid);
        if (!ye)
          return;
        (J = e.onCompleteWorkflowNavigate) == null || J.call(e, {
          url: ye,
          method: oe.url.method,
          url_query_params: oe.url_query_params
        });
        return;
      }
      case "navigate_back":
        (ie = e.onBackClicked) == null || ie.call(e);
        return;
      case "close_workflow":
        (Ie = e.onClose) == null || Ie.call(e);
        return;
      case "restore_purchases":
        (we = e.onRestorePurchasesClicked) == null || we.call(e);
        return;
    }
    switch (oe.destination) {
      case "customer_center":
        (xe = e.onVisitCustomerCenterClicked) == null || xe.call(e);
        return;
      case "screen_redirect":
        (Se = e.onActionTriggered) == null || Se.call(e, "screen_redirect");
        return;
      case "privacy_policy":
      case "terms":
      case "url":
        const ye = v(oe.url.url_lid);
        ye && ((Ue = e.onNavigateToUrlClicked) == null || Ue.call(e, ye));
        return;
      case "sheet":
        if (oe.sheet)
          q(
            S,
            {
              props: oe.sheet,
              rootSelectedPackageId: t()
            },
            !0
          );
        else {
          if (o(S)) {
            const Ce = o(S).rootSelectedPackageId;
            E({
              componentType: "package_selection_sheet",
              componentName: o(S).props.name,
              componentValue: "close",
              currentPackageId: t(),
              resultingPackageId: Ce
            }), P.set(Ce);
          }
          q(S, void 0);
        }
        return;
      case "offer_code":
      case "web_paywall_link":
        return;
    }
  }, D = v_(d(), e.uiConfig);
  Wp({
    defaultPackageId: y,
    selectedPackageId: P,
    variablesPerPackage: et(i()),
    baseVariables: et({ ...s(), ...D }),
    infoPerPackage: et(l()),
    onPurchase: C,
    emitComponentInteraction: E,
    onNavigateToUrl: e.onNavigateToUrlClicked,
    onButtonAction: F,
    onInputChanged: e.onInputChanged,
    onSensitiveInputChanged: e.onSensitiveInputChanged,
    onReservedAttributeChanged: e.onReservedAttributeChanged,
    walletButtonRender: e.walletButtonRender,
    uiConfig: e.uiConfig,
    hideBackButtons: c()
  });
  const O = Gi(), N = O ?? new Yp();
  N.registerDeclarations(e.paywallData.state_declarations ?? {}), O || Kp(N);
  const L = Nh();
  Lh(L), jh(u());
  const Z = Ct(P, (oe) => {
    const B = i()[oe || ""];
    return { ...s(), ...D, ...B };
  });
  rc(Z);
  const z = Ct(P, (oe) => l()[oe || ""]);
  Up(z), br(() => {
    av(e.uiConfig);
  });
  const M = /* @__PURE__ */ m(() => o(S) ? "paywall blur" : "paywall"), { stack: A, sticky_footer: U, header: j } = h, R = A.components[0], Q = (R == null ? void 0 : R.type) === "image" && R.size.width.type === "fill", se = !!j && Q;
  let te = /* @__PURE__ */ re(0), le = /* @__PURE__ */ re(0);
  const ae = /* @__PURE__ */ m(() => e.maxContentWidth ? `max-width: ${e.maxContentWidth}; margin-inline: auto;` : "");
  var Y = Ee(), $ = ce(Y);
  Gd(
    $,
    {
      get onerror() {
        return e.onError;
      }
    },
    (oe) => {
      var B = Ub(), de = ce(B), J = T(de);
      jb(J, {
        get model() {
          return o(_);
        }
      });
      var ie = W(J, 2);
      {
        var Ie = (Te) => {
          var Pe = Bb(), De = T(Pe);
          m_(De, dr(() => j)), K(() => Fe(Pe, `z-index: ${au};`)), fo(Pe, "clientHeight", (Ye) => q(te, Ye)), x(Te, Pe);
        };
        G(ie, (Te) => {
          j && Te(Ie);
        });
      }
      var we = W(ie, 2), xe = T(we);
      {
        let Te = /* @__PURE__ */ m(() => {
          var De;
          return U ? {
            ...A.padding,
            bottom: (((De = A.padding) == null ? void 0 : De.bottom) ?? 0) + o(le)
          } : A.padding;
        }), Pe = /* @__PURE__ */ m(() => ({
          height: "auto",
          ...se ? { "margin-top": `-${o(te)}px` } : {}
        }));
        Tr(xe, dr(() => A, {
          class: "paywall-content-scroll",
          get padding() {
            return o(Te);
          },
          get style() {
            return o(Pe);
          }
        }));
      }
      var Se = W(we, 2);
      {
        var Ue = (Te) => {
          var Pe = Rb(), De = T(Pe);
          f_(De, dr(() => U)), K(() => Fe(Pe, `z-index: ${au}; margin-top: -${o(le) ?? ""}px; ${o(ae) ?? ""}`)), fo(Pe, "clientHeight", (Ye) => q(le, Ye)), x(Te, Pe);
        };
        G(Se, (Te) => {
          U && Te(Ue);
        });
      }
      var ye = W(de, 2);
      {
        var Ce = (Te) => {
          zb(Te, dr(() => o(S).props));
        };
        G(ye, (Te) => {
          o(S) && Te(Ce);
        });
      }
      K(() => {
        ur(de, 1, la(o(M)), "svelte-178te1m"), Fe(de, o(b)), Fe(we, o(ae));
      }), x(oe, B);
    }
  ), x(r, Y), ge(), a();
}
function Wb(r, e) {
  _e(e, !0);
  const t = () => Be(p, "$infoPerPackage", a), n = () => Be(d, "$selectedPackageId", a), [a, i] = Ze(), s = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), { stack: l } = s, {
    emitComponentInteraction: c,
    onPurchase: u,
    selectedPackageId: d,
    infoPerPackage: p
  } = Pt(), { getLocalizedString: _ } = Xi(), f = Pb(), g = (h, y, b) => {
    const v = h.indexOf("#"), P = v === -1 ? "" : h.slice(v), I = v === -1 ? h : h.slice(0, v), E = I.includes("?") ? "&" : "?";
    return `${I}${E}${encodeURIComponent(y)}=${encodeURIComponent(b)}${P}`;
  }, w = (h) => {
    var P, I, E, C, S;
    let y;
    const b = ((P = e.method) == null ? void 0 : P.type) === "unknown" || (I = e.method) == null ? void 0 : I.type, v = (C = (E = t()) == null ? void 0 : E[h]) == null ? void 0 : C.webCheckoutURL;
    if (((S = e.method) == null ? void 0 : S.type) === "custom_web_checkout") {
      const F = _(e.method.custom_url.url_lid);
      if (F) {
        const D = e.method.custom_url.package_param;
        y = D ? g(F, D, h) : F;
      }
    }
    if (y === void 0) {
      const F = b ?? e.action;
      (F === "web_checkout" || F === "web_product_selection" || F === "custom_web_checkout") && (y = v);
    }
    return {
      componentType: "purchase_button",
      componentName: e.name,
      componentValue: b ?? e.action ?? "web_checkout",
      ...y ? { componentURL: y } : {},
      currentPackageId: h
    };
  };
  Tr(r, dr(() => l, { onclick: () => {
    var y;
    const h = (f ? Oo(f) : void 0) ?? n();
    h !== void 0 && (wi(d, h), c(w(h))), u((y = e.triggers) == null ? void 0 : y.on_purchase_press);
  } })), ge(), i();
}
function Hb(r) {
  return {
    display: "grid",
    "grid-template-columns": "auto 1fr",
    "column-gap": `${r.column_gutter}px`,
    "align-items": "stretch",
    position: "relative",
    flex: "0 1 auto",
    width: hr(r.size.width),
    height: hr(r.size.height),
    padding: kr(r.padding),
    margin: kr(r.margin)
  };
}
function Yb(r, e) {
  return {
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-start",
    "align-items": "flex-start",
    gap: `${e.text_spacing}px`,
    height: "fit-content",
    "margin-bottom": `${e.item_spacing}px`
  };
}
var Gb = /* @__PURE__ */ V("<div><div></div></div>"), Kb = /* @__PURE__ */ V("<div><!> <div><!></div></div> <div><!> <!></div>", 1);
function Xb(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), n = lt(), a = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(n(), e.overrides)
  })), i = /* @__PURE__ */ m(() => o(a).icon), s = /* @__PURE__ */ m(() => o(a).title), l = /* @__PURE__ */ m(() => o(a).description), c = /* @__PURE__ */ m(() => o(a).connector), u = /* @__PURE__ */ m(() => o(a).text_spacing), d = /* @__PURE__ */ m(() => o(a).item_spacing), p = rt(), _ = /* @__PURE__ */ m(p), f = nr({ position: "relative" }), g = nr({ position: "relative", "z-index": "2" }), w = /* @__PURE__ */ m(() => nr(Yb(o(_), {
    text_spacing: o(u),
    item_spacing: o(d)
  }))), k = /* @__PURE__ */ m(() => {
    var O;
    return o(c) ? nr({
      position: "absolute",
      left: "50%",
      top: `${(((O = o(i)) == null ? void 0 : O.size.width.value) ?? 24) / 2}px`,
      transform: "translateX(-50%)",
      "z-index": "1",
      width: `${o(c).width}px`,
      height: "100%",
      // Extend beyond icon
      "padding-top": `${o(c).margin.top}px`,
      "padding-bottom": `${o(c).margin.bottom}px`
    }) : "";
  }), h = /* @__PURE__ */ m(() => {
    if (!o(c)) return "";
    const O = $r(o(_), o(c).color);
    return nr({ width: "100%", height: "100%", background: O });
  });
  var y = Kb(), b = ce(y), v = T(b);
  {
    var P = (O) => {
      var N = Gb(), L = T(N);
      K(() => {
        Fe(N, o(k)), Fe(L, o(h));
      }), x(O, N);
    };
    G(v, (O) => {
      o(c) && O(P);
    });
  }
  var I = W(v, 2), E = T(I);
  p_(E, dr(() => o(i)));
  var C = W(b, 2), S = T(C);
  yl(S, dr(() => o(s)));
  var F = W(S, 2);
  {
    var D = (O) => {
      yl(O, dr(() => o(l)));
    };
    G(F, (O) => {
      o(l) && O(D);
    });
  }
  K(() => {
    Fe(b, f), Fe(I, g), Fe(C, o(w));
  }), x(r, y), ge();
}
var Zb = /* @__PURE__ */ V("<div></div>");
function Jb(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), n = lt(), a = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(n(), e.overrides)
  })), i = /* @__PURE__ */ m(() => o(a).items), s = /* @__PURE__ */ m(() => o(a).text_spacing), l = /* @__PURE__ */ m(() => o(a).item_spacing), c = /* @__PURE__ */ m(() => o(a).column_gutter), u = /* @__PURE__ */ m(() => o(a).icon_alignment), d = /* @__PURE__ */ m(() => o(a).size), p = /* @__PURE__ */ m(() => o(a).padding), _ = /* @__PURE__ */ m(() => o(a).margin), f = /* @__PURE__ */ m(() => o(a).visible), g = /* @__PURE__ */ m(() => Yf(o(a), [
    "items",
    "text_spacing",
    "item_spacing",
    "column_gutter",
    "icon_alignment",
    "size",
    "padding",
    "margin",
    "visible"
  ])), w = /* @__PURE__ */ m(() => o(f) !== !1), k = /* @__PURE__ */ m(() => nr(Hb({
    items: o(i),
    text_spacing: o(s),
    item_spacing: o(l),
    column_gutter: o(c),
    icon_alignment: o(u),
    size: o(d),
    padding: o(p),
    margin: o(_),
    ...o(g)
  })));
  var h = Ee(), y = ce(h);
  {
    var b = (v) => {
      var P = Zb();
      Gt(P, 21, () => o(i), (I) => I.id, (I, E) => {
        Xb(I, dr(() => o(E), {
          get text_spacing() {
            return o(s);
          },
          get item_spacing() {
            return o(l);
          }
        }));
      }), K(() => Fe(P, o(k))), x(v, P);
    };
    G(y, (v) => {
      o(w) && o(i).length && v(b);
    });
  }
  x(r, h), ge();
}
var Qb = /* @__PURE__ */ V("<div><p>No paywall data provided</p></div>"), $b = /* @__PURE__ */ V('<div class="paywall-container"><!></div>');
function ek(r, e) {
  _e(e, !0);
  const t = X(e, "selectedLocale", 3, "en_US"), n = X(e, "globalVariables", 19, () => ({})), a = X(e, "containerId", 3, "screen-container"), i = X(e, "initialInputSelections", 19, () => ({}));
  var s = $b(), l = T(s);
  {
    var c = (d) => {
      k_(d, {
        get paywallData() {
          return e.paywallComponents;
        },
        get selectedLocale() {
          return t();
        },
        get uiConfig() {
          return e.uiConfig;
        },
        get variablesPerPackage() {
          return e.variablesPerPackage;
        },
        get infoPerPackage() {
          return e.infoPerPackage;
        },
        get globalVariables() {
          return n();
        },
        get maxContentWidth() {
          return e.maxContentWidth;
        },
        get initialInputSelections() {
          return i();
        },
        onNavigateToUrlClicked: (p) => {
          e.onNavigateToUrlClicked ? e.onNavigateToUrlClicked(p) : window.open(p, "_blank");
        },
        get onCompleteWorkflowNavigate() {
          return e.onCompleteWorkflowNavigate;
        },
        onVisitCustomerCenterClicked: () => {
          var p;
          return (p = e.onVisitCustomerCenterClicked) == null ? void 0 : p.call(e);
        },
        get onBackClicked() {
          return e.onBackClicked;
        },
        get onClose() {
          return e.onClose;
        },
        onRestorePurchasesClicked: () => {
          var p;
          return (p = e.onRestorePurchasesClicked) == null ? void 0 : p.call(e);
        },
        onActionTriggered: (p) => {
          var _;
          (_ = e.onActionTriggered) == null || _.call(e, p);
        },
        get onComponentInteraction() {
          return e.onComponentInteraction;
        },
        get onPurchaseClicked() {
          return e.onPurchaseClicked;
        },
        get onInputChanged() {
          return e.onInputChanged;
        },
        get onSensitiveInputChanged() {
          return e.onSensitiveInputChanged;
        },
        get onReservedAttributeChanged() {
          return e.onReservedAttributeChanged;
        },
        get walletButtonRender() {
          return e.walletButtonRender;
        },
        get safeAreaFallbackColor() {
          return e.safeAreaFallbackColor;
        },
        onError: (p) => {
          console.error("Paywall error:", p);
        }
      });
    }, u = (d) => {
      var p = Qb();
      x(d, p);
    };
    G(l, (d) => {
      e.paywallComponents ? d(c) : d(u, !1);
    });
  }
  K(() => he(s, "id", a())), x(r, s), ge();
}
function rk(r, e) {
  _e(e, !0);
  function t(k) {
    return k.type === "step" && typeof k.step_id == "string";
  }
  const n = new Yp();
  Kp(n);
  function a(k) {
    const h = {};
    for (const y of Object.values(k))
      for (const [b, v] of Object.entries(y.state_declarations ?? {}))
        Object.hasOwn(h, b) || (h[b] = v);
    return h;
  }
  let i = /* @__PURE__ */ re(void 0);
  ol(() => {
    o(i) !== e.workflow.workflowId && (q(i, e.workflow.workflowId, !0), n.reset(a(e.workflow.pages)));
  });
  let s = /* @__PURE__ */ re(rr([])), l = /* @__PURE__ */ re(void 0);
  const c = /* @__PURE__ */ m(() => o(s)[o(s).length - 1] ?? {
    pageId: e.workflow.initial_page_id,
    stepId: e.workflow.initial_step_id
  }), u = /* @__PURE__ */ m(() => e.workflow.pages[o(c).pageId]);
  ol(() => {
    const k = `${e.workflow.workflowId}:${e.workflow.initial_page_id}`;
    o(l) !== k && (q(l, k), q(
      s,
      [
        {
          pageId: e.workflow.initial_page_id,
          stepId: e.workflow.initial_step_id
        }
      ],
      !0
    ), p({
      workflowId: e.workflow.workflowId,
      stepId: e.workflow.initial_step_id,
      fromStepId: void 0,
      toStepId: void 0,
      reason: "start",
      ...d(e.workflow.initial_step_id)
    }));
  });
  function d(k) {
    const h = e.workflow.steps[k];
    return {
      isFirstStep: k === e.workflow.initial_step_id,
      // A step is "last" when it has no step-type trigger actions — i.e. no
      // client-resolvable forward navigation. Condition-based actions fall back
      // to onActionTriggered and are not counted here.
      isLastStep: h !== void 0 && !Object.values(h.trigger_actions).some((y) => t(y))
    };
  }
  function p(k) {
    var h;
    (h = e.onStepChanged) == null || h.call(e, k);
  }
  function _(k) {
    var C, S, F, D;
    const h = e.workflow.steps[o(c).stepId];
    if (!h) {
      console.warn(`[Workflow] onActionTriggered: no current step found for step_id "${o(c).stepId}"`);
      return;
    }
    const y = (C = h.triggers.find((O) => O.component_id === k)) == null ? void 0 : C.action_id;
    if (!y) {
      console.warn(`[Workflow] onActionTriggered: no trigger entry found for component "${k}" on step "${o(c).stepId}"`), (S = e.onActionTriggered) == null || S.call(e, k);
      return;
    }
    const b = h.trigger_actions[y];
    if (!b) {
      console.warn(`[Workflow] onActionTriggered: no trigger_action found for action_id "${y}" on step "${o(c).stepId}"`), (F = e.onActionTriggered) == null || F.call(e, k);
      return;
    }
    if (!t(b)) {
      console.warn("[Workflow] onActionTriggered: trigger_action is not a simple step action, falling back to onActionTriggered"), (D = e.onActionTriggered) == null || D.call(e, k);
      return;
    }
    const v = e.workflow.steps[b.step_id];
    if (!v) {
      console.warn(`[Workflow] onActionTriggered: step_id "${b.step_id}" not found in workflow steps`);
      return;
    }
    const P = v.screen_id;
    if (!P) {
      console.warn(`[Workflow] onActionTriggered: step "${b.step_id}" has no screen_id (logic/experiment step?)`);
      return;
    }
    if (!e.workflow.pages[P]) {
      console.warn(`[Workflow] onActionTriggered: screen_id "${P}" not found in workflow pages`);
      return;
    }
    const I = o(c).stepId, E = b.step_id;
    p({
      workflowId: e.workflow.workflowId,
      stepId: I,
      fromStepId: void 0,
      toStepId: E,
      reason: "completed",
      ...d(I)
    }), q(s, [...o(s), { pageId: P, stepId: E }], !0), p({
      workflowId: e.workflow.workflowId,
      stepId: E,
      fromStepId: I,
      toStepId: void 0,
      reason: "forward",
      ...d(E)
    });
  }
  function f() {
    var k;
    if (o(s).length > 1) {
      const h = o(c).stepId, y = o(s)[o(s).length - 2].stepId;
      p({
        workflowId: e.workflow.workflowId,
        stepId: h,
        fromStepId: void 0,
        toStepId: y,
        reason: "completed",
        ...d(h)
      }), q(s, o(s).slice(0, -1), !0), p({
        workflowId: e.workflow.workflowId,
        stepId: y,
        fromStepId: h,
        toStepId: void 0,
        reason: "back",
        ...d(y)
      });
    } else
      p({
        workflowId: e.workflow.workflowId,
        stepId: o(c).stepId,
        fromStepId: void 0,
        toStepId: void 0,
        reason: "completed",
        ...d(o(c).stepId)
      }), (k = e.onExitBack) == null || k.call(e);
  }
  var g = Ee(), w = ce(g);
  wp(w, () => o(c).pageId, (k) => {
    ek(k, {
      get paywallComponents() {
        return o(u);
      },
      get uiConfig() {
        return e.uiConfig;
      },
      get selectedLocale() {
        return e.selectedLocale;
      },
      get globalVariables() {
        return e.globalVariables;
      },
      get variablesPerPackage() {
        return e.variablesPerPackage;
      },
      get maxContentWidth() {
        return e.maxContentWidth;
      },
      get initialInputSelections() {
        return e.initialInputSelections;
      },
      get containerId() {
        return e.containerId;
      },
      get walletButtonRender() {
        return e.walletButtonRender;
      },
      get safeAreaFallbackColor() {
        return e.safeAreaFallbackColor;
      },
      get onPurchaseClicked() {
        return e.onPurchaseClicked;
      },
      onActionTriggered: _,
      get onInputChanged() {
        return e.onInputChanged;
      },
      get onSensitiveInputChanged() {
        return e.onSensitiveInputChanged;
      },
      get onReservedAttributeChanged() {
        return e.onReservedAttributeChanged;
      },
      get onCompleteWorkflowNavigate() {
        return e.onCompleteWorkflowNavigate;
      },
      get onNavigateToUrlClicked() {
        return e.onNavigateToUrlClicked;
      },
      get onRestorePurchasesClicked() {
        return e.onRestorePurchasesClicked;
      },
      get onVisitCustomerCenterClicked() {
        return e.onVisitCustomerCenterClicked;
      },
      get onComponentInteraction() {
        return e.onComponentInteraction;
      },
      onBackClicked: f,
      onClose: () => {
        var h;
        p({
          workflowId: e.workflow.workflowId,
          stepId: o(c).stepId,
          fromStepId: void 0,
          toStepId: void 0,
          reason: "completed",
          ...d(o(c).stepId)
        }), (h = e.onClose) == null || h.call(e);
      }
    });
  }), x(r, g), ge();
}
var tk = /* @__PURE__ */ V('<img alt="" class="svelte-duamz6"/>'), nk = /* @__PURE__ */ V('<video playsinline="" class="svelte-duamz6"><track kind="captions"/></video>', 2), ak = /* @__PURE__ */ Cr('<use fill="transparent"></use>'), ok = /* @__PURE__ */ Cr('<rect x="0" y="0" height="100%" width="100%"></rect>'), ik = /* @__PURE__ */ Cr('<use fill="none"></use>'), sk = /* @__PURE__ */ V('<div class="video-outer svelte-duamz6"><div class="video-media svelte-duamz6"><div class="video-clip"><!></div> <svg class="video-deco svelte-duamz6" width="100%" height="100%"><defs><clipPath><!></clipPath><g><!></g><!><!></defs><!><g><!><!></g></svg></div></div>');
const lk = {
  hash: "svelte-duamz6",
  code: `.video-outer.svelte-duamz6 {position:relative;}.video-media.svelte-duamz6 {position:relative;width:100%;height:100%;min-height:0;}.video-deco.svelte-duamz6 {position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}video.svelte-duamz6,
  img.svelte-duamz6 {width:100%;height:100%;object-fit:contain;object-position:center;}

  /* Own compositing layer — mitigates WebKit freezing video frames under animated/transform ancestors */video.svelte-duamz6 {transform:translateZ(0);-webkit-transform:translateZ(0);}`
};
function ck(r, e) {
  _e(e, !0), ke(r, lk);
  const t = /* @__PURE__ */ xr(e, ["$$slots", "$$events", "$$legacy"]), n = lt(), a = /* @__PURE__ */ m(() => ({
    ...t,
    ...ct(n(), e.overrides)
  })), i = /* @__PURE__ */ m(() => o(a).id), s = /* @__PURE__ */ m(() => o(a).source), l = /* @__PURE__ */ m(() => o(a).fallback_source), c = /* @__PURE__ */ m(() => o(a).size), u = /* @__PURE__ */ m(() => o(a).mask_shape), d = /* @__PURE__ */ m(() => o(a).fit_mode), p = /* @__PURE__ */ m(() => o(a).padding), _ = /* @__PURE__ */ m(() => o(a).margin), f = /* @__PURE__ */ m(() => o(a).color_overlay), g = /* @__PURE__ */ m(() => o(a).border), w = /* @__PURE__ */ m(() => o(a).shadow), k = /* @__PURE__ */ m(() => o(a).auto_play), h = /* @__PURE__ */ m(() => o(a).loop), y = /* @__PURE__ */ m(() => o(a).mute_audio), b = /* @__PURE__ */ m(() => o(a).show_controls), v = /* @__PURE__ */ m(() => o(a).visible), P = rt(), I = /* @__PURE__ */ m(P), E = /* @__PURE__ */ m(() => o(s) ? Yr(o(I), o(s)) : null), C = /* @__PURE__ */ m(() => o(l) ? Yr(o(I), o(l)) : null);
  let S = /* @__PURE__ */ re(0), F = /* @__PURE__ */ re(rr({ height: 0, width: 0 })), D = /* @__PURE__ */ re(null), O = /* @__PURE__ */ re(!1), N = /* @__PURE__ */ re(!1), L = /* @__PURE__ */ re(null);
  ar(() => {
    if (o(E)) {
      if (o(E).width && o(E).height) {
        q(F, { height: o(E).height, width: o(E).width }, !0);
        return;
      }
      if (o(D)) {
        const J = () => {
          var Ie, we;
          q(
            F,
            {
              height: ((Ie = o(D)) == null ? void 0 : Ie.videoHeight) ?? 0,
              width: ((we = o(D)) == null ? void 0 : we.videoWidth) ?? 0
            },
            !0
          );
        }, ie = () => {
          q(O, !0);
        };
        return o(D).addEventListener("loadedmetadata", J), o(D).addEventListener("error", ie), () => {
          var Ie, we;
          (Ie = o(D)) == null || Ie.removeEventListener("loadedmetadata", J), (we = o(D)) == null || we.removeEventListener("error", ie);
        };
      }
    } else if (o(C)) {
      if (o(C).width && o(C).height) {
        q(
          F,
          {
            height: o(C).height,
            width: o(C).width
          },
          !0
        );
        return;
      }
      const J = new window.Image();
      J.src = o(C).original;
      const ie = () => {
        q(F, { height: J.height, width: J.width }, !0);
      };
      return J.addEventListener("load", ie), () => {
        J.removeEventListener("load", ie);
      };
    }
  });
  const Z = /* @__PURE__ */ m(() => {
    if (o(c).height.type === "fixed")
      return o(c).height.value;
    const J = o(F).width, ie = o(F).height;
    return !Number.isFinite(J) || !Number.isFinite(ie) || J <= 0 || ie <= 0 ? o(S) > 0 ? Math.round(o(S) * (9 / 16)) : 200 : Math.round(o(S) * (ie / J));
  }), z = /* @__PURE__ */ m(() => nr({
    width: hr(o(c).width),
    height: `${o(Z)}px`,
    margin: kr(o(_)),
    padding: kr(o(p)),
    "line-height": 0,
    "flex-shrink": o(c).width.type === "fixed" ? 0 : 1
  }));
  let M = /* @__PURE__ */ re(null);
  const A = /* @__PURE__ */ m(() => {
    var J, ie;
    return [((J = o(M)) == null ? void 0 : J.width) ?? 0, ((ie = o(M)) == null ? void 0 : ie.height) ?? 0];
  }), U = /* @__PURE__ */ m(() => Ui(o(A), 2)), j = /* @__PURE__ */ m(() => o(U)[0]), R = /* @__PURE__ */ m(() => o(U)[1]), Q = /* @__PURE__ */ m(() => `0 0 ${o(j)} ${o(R)}`), se = /* @__PURE__ */ m(() => {
    var Se;
    if (!((Se = o(w)) != null && Se.color))
      return "";
    const { x: J, y: ie, radius: Ie, color: we } = o(w), xe = $r(o(I), we);
    return `filter:drop-shadow(${J}px ${ie}px ${Ie}px ${xe})`;
  }), te = /* @__PURE__ */ m(() => o(se) ? `${o(z)};${o(se)}` : o(z)), le = /* @__PURE__ */ m(() => {
    var J, ie;
    return nr({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "border-radius": Nn(o(u)),
      "clip-path": ((J = o(u)) == null ? void 0 : J.type) === "concave" || ((ie = o(u)) == null ? void 0 : ie.type) === "convex" ? `url(#${o(i)}-path)` : "none"
    });
  }), ae = /* @__PURE__ */ m(() => o(f) && Yr(o(I), o(f))), Y = /* @__PURE__ */ m(() => o(O) || !o(E));
  ar(() => {
    if (!o(k)) {
      Re(() => {
        q(N, !1);
      });
      return;
    }
    if (o(Y) || !o(E)) {
      Re(() => {
        q(N, !1);
      });
      return;
    }
    const J = o(D);
    if (!J) return;
    const ie = o(E).url, Ie = o(L) !== ie;
    Ie && (q(L, ie, !0), Re(() => {
      q(N, !1);
    }));
    let we = !1;
    const xe = () => {
      Si(J, {
        preferMuted: o(y),
        mutedPlaybackOverride: o(N)
      });
    };
    let Se = null;
    const Ue = () => {
      Se !== null && (J.removeEventListener("playing", Se), Se = null);
    }, ye = () => {
      if (we || !J.paused || (xe(), J.readyState < HTMLMediaElement.HAVE_CURRENT_DATA))
        return;
      const Pe = J.play();
      Pe !== void 0 && Pe.catch(() => {
        if (!(we || !J.isConnected) && !o(y) && !o(N)) {
          Re(() => {
            q(N, !0);
          }), Si(J, { preferMuted: o(y), mutedPlaybackOverride: !0 });
          let De = !1;
          const Ye = () => {
            De || o(y) || we || !J.isConnected || (De = !0, queueMicrotask(() => {
              if (we) return;
              Re(() => {
                q(N, !1);
              }), xe(), J.volume = 1;
              const Le = J.play();
              Le !== void 0 && Le.catch(() => {
                we || !J.isConnected || (Re(() => {
                  q(N, !0);
                }), xe());
              });
            }));
          }, Ke = () => {
            we || !J.isConnected || (Se = null, Ye());
          }, pe = J.play();
          pe !== void 0 ? pe.then(() => {
            we || o(y) || De || (Se = Ke, J.addEventListener("playing", Ke, { once: !0 }), queueMicrotask(() => {
              if (!(we || o(y) || De || J.paused)) {
                if (!J.muted) {
                  Ue();
                  return;
                }
                Ye();
              }
            }));
          }) : (Se = Ke, J.addEventListener("playing", Ke, { once: !0 }));
        }
      });
    }, Ce = () => {
      if (xe(), o(y))
        J.play().catch(() => {
        });
      else
        try {
          J.load();
        } catch {
        }
    };
    Ie && J.readyState < HTMLMediaElement.HAVE_CURRENT_DATA && Ce();
    const Te = u_(J, ye, () => we);
    return () => {
      we = !0, Ue(), Te();
    };
  });
  const $ = /* @__PURE__ */ m(() => o(v) !== !1);
  var oe = Ee(), B = ce(oe);
  {
    var de = (J) => {
      var ie = sk(), Ie = T(ie), we = T(Ie), xe = T(we);
      {
        var Se = (tr) => {
          var wr = tk();
          K(
            (_n) => {
              he(wr, "src", o(C).original), Fe(wr, `object-fit:${_n ?? ""}`);
            },
            [() => Va(o(d))]
          ), x(tr, wr);
        }, Ue = (tr) => {
          var wr = Ee(), _n = ce(wr);
          {
            var Vo = (ma) => {
              var dt = nk();
              ca(dt, (Ja) => q(D, Ja), () => o(D)), K(
                (Ja) => {
                  he(dt, "src", o(E).url), Fe(dt, `object-fit:${Ja ?? ""}`), dt.loop = o(h), dt.muted = o(y) || o(N), dt.controls = o(b), dt.autoplay = o(k), he(dt, "preload", o(k) ? "auto" : "metadata");
                },
                [() => Va(o(d))]
              ), x(ma, dt);
            };
            G(
              _n,
              (ma) => {
                o(E) && ma(Vo);
              },
              !0
            );
          }
          x(tr, wr);
        };
        G(xe, (tr) => {
          o(Y) && o(C) ? tr(Se) : tr(Ue, !1);
        });
      }
      var ye = W(we, 2), Ce = T(ye), Te = T(Ce), Pe = T(Te);
      Ii(Pe, {
        get shape() {
          return o(u);
        },
        get width() {
          return o(j);
        },
        get height() {
          return o(R);
        }
      });
      var De = W(Te), Ye = T(De);
      Ii(Ye, {
        get shape() {
          return o(u);
        },
        get width() {
          return o(j);
        },
        get height() {
          return o(R);
        }
      });
      var Ke = W(De);
      {
        let tr = /* @__PURE__ */ m(() => `${o(i)}-overlay`);
        Ci(Ke, {
          get id() {
            return o(tr);
          },
          get overlay() {
            return o(ae);
          }
        });
      }
      var pe = W(Ke);
      {
        var Le = (tr) => {
          {
            let wr = /* @__PURE__ */ m(() => `${o(i)}-border-color`), _n = /* @__PURE__ */ m(() => Yr(o(I), o(g).color));
            Ci(tr, {
              get id() {
                return o(wr);
              },
              get overlay() {
                return o(_n);
              }
            });
          }
        };
        G(pe, (tr) => {
          o(g) && o(g).width > 0 && tr(Le);
        });
      }
      var or = W(Ce);
      {
        var _r = (tr) => {
          var wr = ak();
          K(() => he(wr, "href", `#${o(i)}-border`)), x(tr, wr);
        };
        G(or, (tr) => {
          o(g) && o(g).width > 0 && tr(_r);
        });
      }
      var Ar = W(or), ut = T(Ar);
      {
        var Qt = (tr) => {
          var wr = ok();
          K(() => he(wr, "fill", `url(#${o(i)}-overlay)`)), x(tr, wr);
        };
        G(ut, (tr) => {
          o(ae) && tr(Qt);
        });
      }
      var fa = W(ut);
      {
        var ss = (tr) => {
          var wr = ik();
          K(() => {
            he(wr, "href", `#${o(i)}-border`), he(wr, "stroke", `url(#${o(i)}-border-color)`), he(wr, "stroke-width", o(g).width * 2);
          }), x(tr, wr);
        };
        G(fa, (tr) => {
          o(g) && o(g).width > 0 && tr(ss);
        });
      }
      K(() => {
        Fe(ie, o(te)), Fe(we, o(le)), he(ye, "viewBox", o(Q)), he(Te, "id", `${o(i)}-path`), he(De, "id", `${o(i)}-border`), he(Ar, "clip-path", `url(#${o(i)}-path)`);
      }), Dp(ye, "contentRect", (tr) => q(M, tr)), fo(ie, "clientWidth", (tr) => q(S, tr)), x(J, ie);
    };
    G(B, (J) => {
      o($) && J(de);
    });
  }
  x(r, oe), ge();
}
const uk = "https:";
function dk(r) {
  const e = Array.from(r).filter((n) => n.charCodeAt(0) > 32).join("");
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.protocol.toLowerCase() !== uk || t.username !== "" || t.password !== "" ? null : t.href;
}
function pk(r, e) {
  try {
    return new URL(r).origin === e;
  } catch {
    return !0;
  }
}
var _k = Object.defineProperty, gk = (r, e, t) => e in r ? _k(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, vr = (r, e, t) => gk(r, typeof e != "symbol" ? e + "" : e, t), w_ = "rc-web-components", fk = 1, mk = 3e4, hk = "resize", vk = "fit", yk = [
  "connect",
  "init",
  "reject",
  "message",
  "request",
  "response",
  "error"
], bk = new Set(yk);
function kk(r) {
  return typeof r == "string" && bk.has(r);
}
function wk(r) {
  if (typeof r != "object" || r === null) return !1;
  const e = r;
  return !(e.channel !== w_ || typeof e.protocol_version != "number" || !Number.isFinite(e.protocol_version) || !kk(e.kind) || typeof e.component_id != "string" || e.type !== void 0 && typeof e.type != "string" || e.id !== void 0 && typeof e.id != "string" || e.error !== void 0 && typeof e.error != "string");
}
function Pk(r) {
  return wk(r) ? r : null;
}
function xk(r, e) {
  const t = {
    channel: w_,
    protocol_version: r.protocol_version ?? e.protocolVersion,
    kind: r.kind,
    component_id: r.component_id ?? e.componentId
  };
  return r.type !== void 0 && (t.type = r.type), r.id !== void 0 && (t.id = r.id), r.payload !== void 0 && (t.payload = r.payload), r.error !== void 0 && (t.error = r.error), t;
}
function Ek(r) {
  if (r instanceof Error) return r.message;
  if (typeof r == "string") return r;
  try {
    return JSON.stringify(r);
  } catch {
    return String(r);
  }
}
function Sk(r) {
  return typeof r == "object" && r !== null && typeof r.then == "function";
}
function Ik(r) {
  const e = r;
  typeof e.unref == "function" && e.unref();
}
var Ck = class {
  constructor(r) {
    vr(this, "transport"), vr(this, "protocolVersion"), vr(this, "componentId"), vr(this, "peerWindow", null), vr(this, "peerOrigin", null), vr(this, "open", !1), vr(this, "destroyed", !1), vr(this, "handshakeError", null), vr(this, "handlers", /* @__PURE__ */ new Map()), vr(this, "pending", /* @__PURE__ */ new Map()), vr(this, "readyListeners", /* @__PURE__ */ new Set()), vr(this, "readyResolvers", []), vr(this, "outbox", []), vr(this, "idPrefix"), vr(this, "idCounter", 0), vr(this, "onFrame", (e) => {
      if (this.destroyed) return;
      const t = Pk(e.data);
      t && this.receive(t, e);
    }), this.transport = r.transport, this.protocolVersion = r.protocolVersion, this.componentId = r.componentId, this.idPrefix = `${r.rolePrefix}-${Math.random().toString(36).slice(2, 8)}`, this.transport.subscribe(this.onFrame);
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  on(r, e) {
    let t = this.handlers.get(r);
    return t || (t = /* @__PURE__ */ new Set(), this.handlers.set(r, t)), t.add(e), () => this.off(r, e);
  }
  off(r, e) {
    const t = this.handlers.get(r);
    t && (t.delete(e), t.size === 0 && this.handlers.delete(r));
  }
  send(r, e) {
    this.postEnvelope({ kind: "message", type: r, payload: e });
  }
  request(r, e, t) {
    const n = (t == null ? void 0 : t.timeoutMs) ?? mk;
    return new Promise((a, i) => {
      if (this.destroyed) {
        i(new Error("Bridge has been destroyed"));
        return;
      }
      if (this.handshakeError) {
        i(this.handshakeError);
        return;
      }
      const s = this.nextId(), l = setTimeout(() => {
        this.pending.delete(s), i(new Error(`Request "${r}" timed out after ${n}ms`));
      }, n);
      Ik(l), this.pending.set(s, {
        resolve: a,
        reject: i,
        timer: l,
        type: r
      }), this.postEnvelope({ kind: "request", type: r, id: s, payload: e });
    });
  }
  ready() {
    return this.open;
  }
  onReady(r) {
    return this.open ? (queueMicrotask(() => {
      this.destroyed || r();
    }), () => {
    }) : (this.readyListeners.add(r), () => this.readyListeners.delete(r));
  }
  whenReady() {
    return this.open ? Promise.resolve() : this.handshakeError ? Promise.reject(this.handshakeError) : this.destroyed ? Promise.reject(new Error("Bridge has been destroyed")) : new Promise((r, e) => {
      this.readyResolvers.push({ resolve: r, reject: e });
    });
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = !0, this.open = !1, this.transport.destroy();
    const r = new Error("Bridge has been destroyed");
    this.rejectAllPending(r), this.rejectAllReadyResolvers(r), this.handlers.clear(), this.readyListeners.clear(), this.outbox = [], this.peerWindow = null;
  }
  // ---------------------------------------------------------------------------
  // Shared internals for subclasses
  // ---------------------------------------------------------------------------
  /** Build a full envelope from partial fields, applying this side's defaults. */
  buildEnvelope(r) {
    return xk(r, {
      protocolVersion: this.protocolVersion,
      componentId: this.componentId ?? ""
    });
  }
  /**
   * Post a frame to the peer via the transport. On web the pinned peer
   * window/origin are used; on a trusted-peer (native) transport the target is
   * ignored and the frame is serialized to the native channel.
   */
  rawPost(r) {
    this.transport.post(r, {
      window: this.peerWindow,
      targetOrigin: this.peerOrigin ?? ""
    });
  }
  /**
   * Validate and dispatch an open-channel app frame
   * (`message` / `request` / `response` / `error`).
   */
  acceptOpenFrame(r, e) {
    this.open && (!this.transport.trustedPeer && (!this.isExpectedSource(e.source) || !this.isAllowedOrigin(e.origin)) || r.component_id === this.componentId && this.dispatchEnvelope(r));
  }
  /** Mark the channel open, flush the outbox, and notify ready subscribers. */
  emitReady() {
    if (this.open || this.destroyed) return;
    this.open = !0, this.flushOutbox();
    const r = this.readyResolvers;
    this.readyResolvers = [];
    for (const t of r) t.resolve();
    const e = [...this.readyListeners];
    this.readyListeners.clear();
    for (const t of e)
      try {
        t();
      } catch {
      }
  }
  /** Abort the handshake: reject `whenReady()` and any queued requests. */
  failHandshake(r) {
    this.open || this.handshakeError || this.destroyed || (this.handshakeError = r, this.rejectAllReadyResolvers(r), this.readyListeners.clear(), this.rejectAllPending(r), this.outbox = []);
  }
  postEnvelope(r) {
    if (!this.destroyed) {
      if (!this.open) {
        this.outbox.push(r);
        return;
      }
      this.rawPost(this.buildEnvelope(r));
    }
  }
  flushOutbox() {
    const r = this.outbox;
    this.outbox = [];
    for (const e of r) this.rawPost(this.buildEnvelope(e));
  }
  dispatchEnvelope(r) {
    switch (r.kind) {
      case "message":
        this.invokeMessageHandlers(r);
        break;
      case "request":
        this.invokeRequestHandlers(r);
        break;
      case "response":
        this.resolvePending(r);
        break;
      case "error":
        this.rejectPending(r);
        break;
    }
  }
  invokeMessageHandlers(r) {
    const e = r.type;
    if (typeof e != "string") return;
    const t = this.handlers.get(e);
    if (!t || t.size === 0) return;
    const n = { type: e, kind: "message" };
    for (const a of [...t])
      try {
        const i = a(r.payload, n);
        Sk(i) && i.catch(() => {
        });
      } catch {
      }
  }
  async invokeRequestHandlers(r) {
    const e = r.type, t = r.id;
    if (typeof e != "string" || typeof t != "string") return;
    const n = this.handlers.get(e);
    if (!n || n.size === 0) {
      this.postEnvelope({
        kind: "error",
        type: e,
        id: t,
        error: `No handler registered for request type "${e}"`
      });
      return;
    }
    const a = { type: e, kind: "request", id: t };
    try {
      const s = (await Promise.all(
        [...n].map((l) => l(r.payload, a))
      )).find((l) => l !== void 0);
      this.postEnvelope({ kind: "response", type: e, id: t, payload: s });
    } catch (i) {
      this.postEnvelope({ kind: "error", type: e, id: t, error: Ek(i) });
    }
  }
  resolvePending(r) {
    const e = r.id;
    if (typeof e != "string") return;
    const t = this.pending.get(e);
    t && (this.pending.delete(e), clearTimeout(t.timer), t.resolve(r.payload));
  }
  rejectPending(r) {
    const e = r.id;
    if (typeof e != "string") return;
    const t = this.pending.get(e);
    t && (this.pending.delete(e), clearTimeout(t.timer), t.reject(new Error(r.error ?? `Request "${t.type}" failed`)));
  }
  rejectAllPending(r) {
    const e = [...this.pending.values()];
    this.pending.clear();
    for (const t of e)
      clearTimeout(t.timer), t.reject(r);
  }
  rejectAllReadyResolvers(r) {
    const e = this.readyResolvers;
    this.readyResolvers = [];
    for (const t of e) t.reject(r);
  }
  nextId() {
    return this.idCounter += 1, `${this.idPrefix}-${this.idCounter}`;
  }
}, Tk = class {
  constructor(r) {
    vr(this, "trustedPeer", !1), vr(this, "self"), vr(this, "listener", null), this.self = r;
  }
  subscribe(r) {
    this.listener || (this.listener = (e) => {
      r({ data: e.data, source: e.source, origin: e.origin });
    }, this.self.addEventListener("message", this.listener));
  }
  post(r, e) {
    e.window && e.window.postMessage(r, e.targetOrigin);
  }
  destroy() {
    this.listener && (this.self.removeEventListener("message", this.listener), this.listener = null);
  }
}, Wu = "null";
function Dk(r) {
  const e = (r == null ? void 0 : r.window) ?? globalThis.window;
  if (!e)
    throw new Error(
      "createHostBridge: no window available. Pass `{ window }` when running outside a browser."
    );
  return e;
}
var Ak = class extends Ck {
  constructor(r, e) {
    super({
      protocolVersion: r.protocolVersion ?? fk,
      componentId: r.componentId,
      // The host is web-only: default to the window/postMessage transport.
      transport: (e == null ? void 0 : e.transport) ?? new Tk(Dk(e)),
      rolePrefix: "host"
    }), vr(this, "iframe"), vr(this, "allowedOrigin"), vr(this, "allowInsecureOpaqueOrigin"), this.iframe = r.iframe, this.allowedOrigin = r.allowedOrigin, this.allowInsecureOpaqueOrigin = r.allowInsecureOpaqueOrigin ?? !1;
  }
  receive(r, e) {
    switch (r.kind) {
      case "connect":
        this.handleConnect(r, e);
        break;
      case "message":
      case "request":
      case "response":
      case "error":
        this.acceptOpenFrame(r, e);
        break;
    }
  }
  isExpectedSource(r) {
    const e = this.iframe.contentWindow;
    return e !== null && r === e;
  }
  isAllowedOrigin(r) {
    return !!(r === this.allowedOrigin || r === Wu && this.allowInsecureOpaqueOrigin);
  }
  handleConnect(r, e) {
    if (this.open || !this.isExpectedSource(e.source) || !this.isAllowedOrigin(e.origin)) return;
    const t = this.replyTargetOrigin(e.origin), n = e.source;
    if (r.protocol_version !== this.protocolVersion) {
      const i = this.buildEnvelope({
        kind: "reject",
        error: `Unsupported protocol_version ${r.protocol_version}; host supports ${this.protocolVersion}`
      });
      this.transport.post(i, {
        window: n,
        targetOrigin: t
      });
      return;
    }
    this.peerWindow = this.iframe.contentWindow ?? n, this.peerOrigin = t;
    const a = this.buildEnvelope({ kind: "init" });
    this.rawPost(a), this.emitReady();
  }
  replyTargetOrigin(r) {
    return r === Wu ? "*" : this.allowedOrigin;
  }
};
function Fk(r, e) {
  return new Ak(r, e);
}
function qk(r) {
  if (!Number.isInteger(r) || r < 1)
    throw new Error(`invalid web_view protocol_version: ${r}`);
}
async function Mk(r) {
  return qk(r), Fk;
}
var zk = /* @__PURE__ */ V('<div class="web-view svelte-1x91uxt"><iframe sandbox="allow-scripts allow-same-origin" referrerpolicy="no-referrer" allow="" class="svelte-1x91uxt"></iframe></div>');
const Ok = {
  hash: "svelte-1x91uxt",
  code: ".web-view.svelte-1x91uxt {position:relative;overflow:hidden;}iframe.svelte-1x91uxt {display:block;width:100%;height:100%;border:0;}"
};
function Nk(r, e) {
  _e(e, !0), ke(r, Ok);
  const t = 300, n = 1e4, a = (b) => Math.max(1, Math.min(n, Math.round(b))), i = (b) => typeof b == "number" && Number.isFinite(b) && b > 0;
  let s = /* @__PURE__ */ re(!1);
  br(() => {
    q(s, !0);
  });
  const l = /* @__PURE__ */ m(() => dk(e.url)), c = /* @__PURE__ */ m(() => o(s) && o(l) !== null && !pk(o(l), window.location.origin));
  let u = /* @__PURE__ */ re(void 0), d = /* @__PURE__ */ re(void 0);
  const p = (b) => b.type === "fit" && typeof b.default == "number" ? b.default : t, _ = /* @__PURE__ */ m(() => {
    const { width: b, height: v } = e.size, P = b.type === "fit", I = v.type === "fit", E = P ? a(o(u) ?? p(b)) : null, C = I ? a(o(d) ?? p(v)) : null;
    return nr({
      width: E != null ? Pr(E) : hr(b),
      height: C != null ? Pr(C) : hr(v),
      // Cap a fit axis to the parent. Do not mirror the reported size in `min-*`:
      // that defeats `max-*` and clips content when the report exceeds the viewport.
      ...E != null ? { "max-width": "100%" } : {},
      ...C != null ? { "max-height": "100%" } : {},
      "flex-shrink": b.type === "fixed" || P || I ? 0 : 1,
      "line-height": 0
      // No transition: the iframe is height:100% of this box, so animating the
      // resize would flash the iframe's own scrollbar mid-change.
    });
  }), f = /* @__PURE__ */ m(() => e.visible !== !1);
  let g = /* @__PURE__ */ re(void 0), w;
  ar(() => {
    const b = o(l);
    b !== w && (q(u, void 0), q(d, void 0), w = b);
    const v = o(g), P = e.id, I = e.protocol_version, E = e.size.width.type === "fit", C = e.size.height.type === "fit";
    if (!v || !b) return;
    let S = !1, F;
    return Mk(I).then((D) => {
      if (!S)
        try {
          F = D({
            iframe: v,
            allowedOrigin: new URL(b).origin,
            componentId: P,
            protocolVersion: I
          }), (E || C) && F.onReady(() => F == null ? void 0 : F.send(vk, { width: E, height: C })), F.on(hk, (O) => {
            const { width: N, height: L } = O ?? {};
            E && i(N) && q(u, N, !0), C && i(L) && q(d, L, !0);
          });
        } catch (O) {
          console.warn("web_view: failed to wire host bridge", O);
        }
    }).catch(() => {
    }), () => {
      S = !0, F == null || F.destroy();
    };
  });
  var k = Ee(), h = ce(k);
  {
    var y = (b) => {
      var v = zk(), P = T(v);
      ca(P, (I) => q(g, I), () => o(g)), K(() => {
        Fe(v, o(_)), he(P, "title", e.name ?? "Web view"), he(P, "src", o(l));
      }), x(b, v);
    };
    G(h, (b) => {
      o(f) && o(l) && o(c) && b(y);
    });
  }
  x(r, k), ge();
}
function Lk(r) {
  const e = r.steps[r.initial_step_id];
  if (!e)
    return console.warn(`[workflowDataToNavData] initial_step_id "${r.initial_step_id}" not found in steps`), null;
  const t = e.screen_id;
  return t ? r.screens[t] ? {
    workflowId: r.id,
    initial_page_id: t,
    initial_step_id: r.initial_step_id,
    // Shared by reference intentionally — screens/steps are never mutated after
    // WorkflowData is received from the SDK, so a copy would be wasteful.
    pages: r.screens,
    steps: r.steps
  } : (console.warn(`[workflowDataToNavData] screen_id "${t}" not found in screens`), null) : (console.warn(`[workflowDataToNavData] initial step "${r.initial_step_id}" has no screen_id (logic/experiment step?)`), null);
}
var jk = /* @__PURE__ */ V("<span><!></span>");
const Bk = {
  hash: "svelte-1d00vmd",
  code: `
  /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-1d00vmd {font:var(--rc-text-heading2xl-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-1d00vmd {font:var(--rc-text-headingXl-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-1d00vmd {font:var(--rc-text-headingLg-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-1d00vmd {font:var(--rc-text-headingMd-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-1d00vmd {font:var(--rc-text-bodyBase-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-1d00vmd {font:var(--rc-text-bodySmall-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-1d00vmd {font:var(--rc-text-labelButton-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-1d00vmd {font:var(--rc-text-labelDefault-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-1d00vmd {font:var(--rc-text-captionDefault-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-1d00vmd {font:var(--rc-text-captionLink-mobile);}

  @container layout-query-container (width >= 768px) {
    /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-1d00vmd {font:var(--rc-text-heading2xl-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-1d00vmd {font:var(--rc-text-headingXl-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-1d00vmd {font:var(--rc-text-headingLg-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-1d00vmd {font:var(--rc-text-headingMd-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-1d00vmd {font:var(--rc-text-bodyBase-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-1d00vmd {font:var(--rc-text-bodySmall-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-1d00vmd {font:var(--rc-text-labelButton-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-1d00vmd {font:var(--rc-text-labelDefault-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-1d00vmd {font:var(--rc-text-captionDefault-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-1d00vmd {font:var(--rc-text-captionLink-desktop);}
  }`
};
function Rk(r, e) {
  ke(r, Bk);
  const t = X(e, "size", 3, "body-base");
  var n = jk(), a = T(n);
  yr(a, () => e.children ?? er), K(() => ur(n, 1, `rcb-typography rcb-typography-${t() ?? ""}`, "svelte-1d00vmd")), x(r, n);
}
const Uk = {
  outerPadding: {
    mobile: "clamp(1.3125rem, 5.6vw, 1.5rem)",
    desktop: "clamp(1.5rem, 9.44vw, 5rem)"
  },
  outerPaddingSmall: {
    mobile: "clamp(0.75rem, 4.2vw, 1rem)",
    desktop: "clamp(1.5rem, 9.44vw, 5rem)"
  },
  gapSmall: {
    mobile: "0.25rem",
    desktop: "0.375rem"
  },
  gapMedium: {
    mobile: "0.5rem",
    desktop: "0.75rem"
  },
  gapLarge: {
    mobile: "0.75rem",
    desktop: "0.75rem"
  },
  gapXLarge: {
    mobile: "1rem",
    desktop: "1.5rem"
  },
  gapXXLarge: {
    mobile: "1.25rem",
    desktop: "2.25rem"
  },
  gapXXXLarge: {
    mobile: "2.25rem",
    desktop: "4.5rem"
  },
  inputHeight: {
    mobile: "3rem",
    desktop: "3rem"
  },
  gapStripeElement: {
    mobile: "0.70rem",
    desktop: "1rem"
  }
}, Hu = "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif", At = {
  regular: "400",
  medium: "500",
  semibold: "600"
}, mt = {
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px"
}, Ft = {
  120: "120%",
  130: "130%",
  140: "140%"
}, qt = {
  tight: "0.20%",
  regular: "0"
}, Sr = {
  heading2xl: {
    fontSize: mt[28],
    lineHeight: Ft[120],
    fontWeight: At.semibold,
    letterSpacing: qt.tight
  },
  headingXl: {
    fontSize: mt[24],
    lineHeight: Ft[130],
    fontWeight: At.semibold,
    letterSpacing: qt.regular
  },
  headingLg: {
    fontSize: "20px",
    lineHeight: Ft[130],
    fontWeight: At.semibold,
    letterSpacing: qt.regular
  },
  headingMd: {
    fontSize: "16px",
    lineHeight: Ft[140],
    fontWeight: At.medium,
    letterSpacing: qt.regular
  },
  bodyBase: {
    fontSize: mt[16],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.regular
  },
  bodySmall: {
    fontSize: mt[14],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.regular
  },
  labelButton: {
    fontSize: mt[16],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.tight
  },
  labelDefault: {
    fontSize: mt[14],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.tight
  },
  captionDefault: {
    fontSize: mt[12],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.regular
  },
  captionLink: {
    fontSize: mt[12],
    lineHeight: Ft[140],
    fontWeight: At.regular,
    letterSpacing: qt.regular
  }
}, Mt = {
  heading2xl: {
    ...Sr.heading2xl,
    fontSize: mt[36]
  },
  headingXl: {
    ...Sr.headingXl,
    fontSize: mt[32]
  },
  headingLg: {
    ...Sr.headingLg,
    fontSize: mt[24]
  },
  headingMd: {
    ...Sr.headingMd,
    fontSize: mt[18]
  },
  bodyBase: {
    ...Sr.bodyBase
  },
  bodySmall: {
    ...Sr.bodySmall
  },
  labelButton: {
    ...Sr.labelButton
  },
  labelDefault: {
    ...Sr.labelDefault
  },
  captionDefault: {
    ...Sr.captionDefault
  },
  captionLink: {
    ...Sr.captionLink
  }
}, Vk = {
  heading2xl: {
    mobile: Sr.heading2xl,
    desktop: Mt.heading2xl
  },
  headingXl: {
    desktop: Mt.headingXl,
    mobile: Sr.headingXl
  },
  headingLg: {
    desktop: Mt.headingLg,
    mobile: Sr.headingLg
  },
  headingMd: {
    desktop: Mt.headingMd,
    mobile: Sr.headingMd
  },
  bodyBase: {
    desktop: Mt.bodyBase,
    mobile: Sr.bodyBase
  },
  bodySmall: {
    desktop: Mt.bodySmall,
    mobile: Sr.bodySmall
  },
  labelButton: {
    desktop: Mt.labelButton,
    mobile: Sr.labelButton
  },
  labelDefault: {
    desktop: Mt.labelDefault,
    mobile: Sr.labelDefault
  },
  captionDefault: {
    desktop: Mt.captionDefault,
    mobile: Sr.captionDefault
  },
  captionLink: {
    desktop: Mt.captionLink,
    mobile: Sr.captionLink
  }
}, Wk = {
  error: "#B0171F",
  warning: "#f4e971",
  focus: "#1148B8",
  accent: "#767676",
  primary: "#576CDB",
  "primary-hover": "rgba(87, 108, 219, .8)",
  "primary-pressed": "rgba(87, 108, 219, .9)",
  "primary-text": "#ffffff",
  white: "#ffffff",
  "grey-text-dark": "rgba(0,0,0,1)",
  "grey-text-light": "rgba(0,0,0,0.7)",
  "grey-ui-dark": "rgba(0,0,0,0.3)",
  "grey-ui-light": "rgba(0,0,0,0.1)",
  "input-background": "white",
  background: "white"
}, Hk = {
  error: "#B0171F",
  warning: "#f4e971",
  focus: "#1148B8",
  accent: "#767676",
  primary: "#576CDB",
  "primary-hover": "rgba(87, 108, 219, .8)",
  "primary-pressed": "rgba(87, 108, 219, .9)",
  "primary-text": "#ffffff",
  white: "#ffffff",
  "grey-text-dark": "rgba(0,0,0,1)",
  "grey-text-light": "rgba(0,0,0,0.7)",
  "grey-ui-dark": "rgba(0,0,0,0.3)",
  "grey-ui-light": "rgba(0,0,0,0.1)",
  "input-background": "white",
  background: "#EFF3FA"
}, P_ = {
  error: "color_error",
  focus: "color_accent",
  accent: "color_accent",
  primary: "color_buttons_primary"
}, Yk = {
  ...P_,
  "input-background": "color_form_bg",
  background: "color_form_bg"
}, Gk = {
  ...P_,
  "input-background": "color_product_info_bg",
  background: "color_product_info_bg"
}, x_ = {
  "input-border-radius": "4px",
  "input-button-border-radius": "8px"
}, Kk = {
  "input-border-radius": "0px",
  "input-button-border-radius": "0px"
}, Xk = {
  "input-border-radius": "12px",
  "input-button-border-radius": "9999px"
}, Yu = x_, yo = (r) => r.length == 7 ? {
  r: parseInt(r.slice(1, 3), 16),
  g: parseInt(r.slice(3, 5), 16),
  b: parseInt(r.slice(5, 7), 16)
} : r.length == 4 ? {
  r: parseInt(r[1], 16),
  g: parseInt(r[2], 16),
  b: parseInt(r[3], 16)
} : null, sc = ({ r, g: e, b: t, luminanceThreshold: n }) => {
  const a = (s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
  return 0.2126 * a(r) + 0.7152 * a(e) + 0.0722 * a(t) > n;
}, lc = 0.37, Zk = (r, e = lc) => {
  const t = sc({ ...r, luminanceThreshold: e }) ? "0,0,0" : "255,255,255";
  return {
    "grey-text-dark": `rgb(${t})`,
    "grey-text-light": `rgba(${t},0.70)`,
    "grey-ui-dark": `rgba(${t},0.3)`,
    "grey-ui-light": `rgba(${t},0.1)`
  };
};
function Jk(r, e, t) {
  const n = yo(r) || { r: 0, g: 0, b: 0 }, a = yo(e) || { r: 255, g: 255, b: 255 }, i = Math.round(a.r * t + n.r * (1 - t)), s = Math.round(a.g * t + n.g * (1 - t)), l = Math.round(a.b * t + n.b * (1 - t));
  return `#${Hs(i)}${Hs(s)}${Hs(l)}`;
}
function Gu(r, e) {
  const t = { r: 255, g: 255, b: 255 }, n = Math.max(0, Math.min(1, e));
  let a = r, i = yo(r) || t;
  (isNaN(i.r) || isNaN(i.g) || isNaN(i.b)) && (i = t, a = "#FFFFFF");
  const l = sc({
    ...i,
    luminanceThreshold: lc
  }) ? "#000000" : "#FFFFFF";
  return Jk(a, l, n);
}
function Hs(r) {
  return r.toString(16).padStart(2, "0").toUpperCase();
}
const Qk = (r, e, t, n, a = lc) => {
  const i = {
    "grey-text-dark": n["grey-text-dark"],
    "grey-text-light": n["grey-text-light"],
    "grey-ui-dark": n["grey-ui-dark"],
    "grey-ui-light": n["grey-ui-light"],
    "primary-text": n["primary-text"]
  };
  if (r != null && r.startsWith("#")) {
    const s = yo(r);
    s !== null && Object.assign(i, Zk(s));
  }
  if (t)
    i["primary-text"] = t;
  else if (e != null && e.startsWith("#")) {
    const s = yo(e);
    s !== null && (i["primary-text"] = sc({ ...s, luminanceThreshold: a }) ? "black" : "white");
  }
  return i;
}, $k = (r) => ({
  "primary-hover": Gu(r, 0.1),
  "primary-pressed": Gu(r, 0.15)
}), ew = (r, e) => r || e, rw = (r, e, t) => {
  const n = Object.entries(r).map(([a, i]) => [
    a,
    ew(t ? t[i] : null, e[a])
  ]);
  return Object.fromEntries(n);
}, E_ = (r, e, t) => {
  const n = rw(r, e, t);
  return t ? {
    ...e,
    ...n,
    ...Qk(n.background, n.primary, t.color_buttons_primary_text, e),
    ...$k(n.primary)
  } : { ...e };
}, tw = (r) => E_(Gk, Hk, r), S_ = (r) => E_(Yk, Wk, r), cc = (r) => {
  if (!r)
    return Yu;
  switch (r.shapes) {
    case "rounded":
      return x_;
    case "rectangle":
      return Kk;
    case "pill":
      return Xk;
    default:
      return Yu;
  }
}, Ti = (r = "", e) => e.map(([t, n]) => `--rc-${r}-${t}: ${n}`).join("; "), nw = (r) => {
  const e = Ti("color", Object.entries(tw(r))), t = Ti("shape", Object.entries(cc(r)));
  return [e, t].join("; ");
}, aw = (r) => {
  const e = Ti("color", Object.entries(S_(r))), t = Ti("shape", Object.entries(cc(r)));
  return [e, t].join("; ");
}, ow = (r = "", e) => Object.entries(e).flatMap(([t, { desktop: n, mobile: a }]) => [
  `--rc-${r}-${t}-desktop: normal normal ${n.fontWeight} ${n.fontSize}/${n.lineHeight} ${Hu}`,
  `--rc-${r}-${t}-mobile: normal normal ${a.fontWeight} ${a.fontSize}/${a.lineHeight} ${Hu}`,
  `--rc-${r}-${t}-desktop-font-size: ${n.fontSize}`,
  `--rc-${r}-${t}-mobile-font-size: ${a.fontSize}`
]).join("; "), iw = (r = "", e) => Object.entries(e).map(([t, { mobile: n, desktop: a }]) => `--rc-${r}-${t}-mobile: ${n};  --rc-${r}-${t}-desktop: ${a};`).join(" ");
let sw = class {
  constructor(e) {
    ee(this, "brandingAppearance");
    e ? this.brandingAppearance = e : this.brandingAppearance = void 0;
  }
  get shape() {
    return cc(this.brandingAppearance);
  }
  get formColors() {
    return S_(this.brandingAppearance);
  }
  get formStyleVars() {
    return aw(this.brandingAppearance);
  }
  get productInfoStyleVars() {
    return nw(this.brandingAppearance);
  }
  get spacing() {
    return Uk;
  }
  get textStyles() {
    return Vk;
  }
  get textStyleVars() {
    return ow("text", this.textStyles);
  }
  get spacingStyleVars() {
    return iw("spacing", this.spacing);
  }
};
var lw = /* @__PURE__ */ V('<div class="rcb-processing svelte-1opqqrp"></div>');
const cw = {
  hash: "svelte-1opqqrp",
  code: `.rcb-processing.svelte-1opqqrp {width:var(--width, 12px);aspect-ratio:1;border-radius:50%;
    animation: svelte-1opqqrp-l5 1.5s infinite linear;}

  @keyframes svelte-1opqqrp-l5 {
    0% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
    25% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #ffff;
      background: #fff2;
    }
    50% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #ffff;
    }
    75% {
      box-shadow:
        var(--shadow-offset) 0 #ffff,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
    100% {
      box-shadow:
        var(--shadow-offset) 0 #fff2,
        calc(-1 * var(--shadow-offset)) 0 #fff2;
      background: #fff2;
    }
  }`
};
function uw(r, e) {
  ke(r, cw);
  let t = X(e, "size", 8, "medium");
  const n = {
    small: { width: "8px", offset: "10px" },
    medium: { width: "12px", offset: "20px" },
    large: { width: "16px", offset: "30px" }
  };
  var a = lw();
  K(() => Fe(a, `--shadow-offset: ${We(t()), Re(() => n[t()].offset) ?? ""}; --width: ${We(t()), Re(() => n[t()].width) ?? ""};`)), x(r, a);
}
var dw = /* @__PURE__ */ V("<button><!></button>");
const pw = {
  hash: "svelte-16hedkl",
  code: `button.svelte-16hedkl {border:none;border-radius:var(--rc-shape-input-button-border-radius);cursor:pointer;height:var(--rc-spacing-inputHeight-mobile);color:var(--rc-color-grey-text-dark);background-color:var(--rc-color-grey-ui-dark);display:flex;align-items:center;justify-content:center;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent;transition:background-color 0.15s ease-in-out;user-select:none;}

  @container layout-query-container (width >= 768px) {button.svelte-16hedkl {height:var(--rc-spacing-inputHeight-desktop);}
  }

  /* focus-visible is triggered only when focused with keyboard/reader */button.svelte-16hedkl:focus-visible {outline:2px solid var(--rc-color-focus);}button.intent-primary.svelte-16hedkl {background-color:var(--rc-color-primary);color:var(--rc-color-primary-text);}button.svelte-16hedkl:disabled {color:var(--rc-color-grey-text-light);background-color:var(--rc-color-grey-ui-light);outline:none;}button.intent-primary.svelte-16hedkl:not(:disabled):hover {background-color:var(--rc-color-primary-hover);}button.intent-primary.svelte-16hedkl:not(:disabled):active,
  button.svelte-16hedkl:active {background-color:var(--rc-color-primary-pressed);outline:none;}button.intent-primary.svelte-16hedkl:disabled {color:var(--rc-color-grey-text-light);background-color:var(--rc-color-grey-ui-light);}`
};
function I_(r, e) {
  _e(e, !0), ke(r, pw);
  const t = X(e, "intent", 3, "primary"), n = X(e, "disabled", 3, !1), a = X(e, "loading", 3, !1), i = /* @__PURE__ */ m(() => new sw(e.brandingAppearance)), s = /* @__PURE__ */ m(() => o(i).textStyleVars), l = /* @__PURE__ */ m(() => o(i).spacingStyleVars), c = /* @__PURE__ */ m(() => o(i).productInfoStyleVars), u = /* @__PURE__ */ m(() => o(i).formStyleVars), d = /* @__PURE__ */ m(() => [
    e.styleOverrides,
    o(s),
    o(l),
    o(c),
    o(u)
  ].join("; "));
  var p = dw();
  p.__click = function(...w) {
    var k;
    (k = e.onclick) == null || k.apply(this, w);
  };
  var _ = T(p);
  {
    var f = (w) => {
      uw(w, { size: "small" });
    }, g = (w) => {
      Rk(w, {
        size: "body-base",
        children: (k, h) => {
          var y = Ee(), b = ce(y);
          yr(b, () => e.children ?? er), x(k, y);
        },
        $$slots: { default: !0 }
      });
    };
    G(_, (w) => {
      a() ? w(f) : w(g, !1);
    });
  }
  K(() => {
    ur(p, 1, `intent-${t()}`, "svelte-16hedkl"), p.disabled = n(), he(p, "data-testid", e.testId), he(p, "type", e.type), Fe(p, o(d));
  }), x(r, p), ge();
}
Jt(["click"]);
var _w = /* @__PURE__ */ V('<footer class="rcb-modal-footer svelte-gz2zuy"><!></footer>');
const gw = {
  hash: "svelte-gz2zuy",
  code: "footer.svelte-gz2zuy {display:flex;flex-direction:column;}"
};
function fw(r, e) {
  ke(r, gw);
  let t = X(e, "children", 8);
  var n = _w(), a = T(n);
  yr(a, () => t() ?? er), x(r, n);
}
const mw = {
  hash: "svelte-1lkpm18",
  code: ".rcb-modal-section.svelte-1lkpm18 {padding:8px 0px;display:flex;}section.rcb-modal-section.svelte-1lkpm18 {flex-grow:1;}.rcb-modal-section.svelte-1lkpm18:last-of-type {padding:0;}"
};
function hw(r, e) {
  ke(r, mw);
  let t = X(e, "as", 8, "section"), n = X(e, "children", 8);
  var a = Ee(), i = ce(a);
  Xl(i, t, !1, (s, l) => {
    Zl(s, () => ({ class: "rcb-modal-section" }), void 0, void 0, void 0, "svelte-1lkpm18");
    var c = Ee(), u = ce(c);
    yr(u, () => n() ?? er), x(l, c);
  }), x(r, a);
}
var vw = /* @__PURE__ */ V("<div><!></div>");
const yw = {
  hash: "svelte-7lmlfa",
  code: `.rcb-column.svelte-7lmlfa {display:flex;flex-direction:column;justify-content:flex-start;flex-grow:1;min-width:100%;}.rcb-column.justify-center.svelte-7lmlfa {justify-content:center;}.rcb-column.justify-end.svelte-7lmlfa {justify-content:flex-end;}.rcb-column.align-center.svelte-7lmlfa {align-items:center;}.rcb-column.align-end.svelte-7lmlfa {align-items:flex-end;}.rcb-column.gap-small.svelte-7lmlfa {gap:var(--rc-spacing-gapSmall-mobile);}.rcb-column.gap-medium.svelte-7lmlfa {gap:var(--rc-spacing-gapXLarge-mobile);}.rcb-column.gap-large.svelte-7lmlfa {gap:var(--rc-spacing-gapXXLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rcb-column.gap-small.svelte-7lmlfa {gap:var(--rc-spacing-gapSmall-desktop);}.rcb-column.gap-medium.svelte-7lmlfa {gap:var(--rc-spacing-gapLarge-desktop);}.rcb-column.gap-large.svelte-7lmlfa {gap:var(--rc-spacing-gapXXLarge-desktop);}
  }`
};
function Ro(r, e) {
  ke(r, yw);
  let t = X(e, "gap", 8, "small"), n = X(e, "justify", 8, "start"), a = X(e, "align", 8, "start"), i = X(e, "children", 8);
  var s = vw(), l = T(s);
  yr(l, () => i() ?? er), K(() => ur(s, 1, `rcb-column gap-${t() ?? ""} justify-${n() ?? ""} align-${a() ?? ""}`, "svelte-7lmlfa")), x(r, s);
}
var bw = /* @__PURE__ */ V('<div class="rcb-row svelte-130pyos"><!></div>');
const kw = {
  hash: "svelte-130pyos",
  code: ".rcb-row.svelte-130pyos {display:flex;flex-direction:row;justify-content:flex-start;}"
};
function ww(r, e) {
  ke(r, kw);
  let t = X(e, "children", 8);
  var n = bw(), a = T(n);
  yr(a, () => t() ?? er), x(r, n);
}
var Pw = /* @__PURE__ */ V("<span><!></span>");
const xw = {
  hash: "svelte-y2q9vo",
  code: `.rcb-typography.svelte-y2q9vo {display:inline-block;line-height:normal;}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-y2q9vo {font:var(--rc-text-heading2xl-mobile);}.rcb-typography-heading-2xl.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-heading2xl-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-y2q9vo {font:var(--rc-text-headingXl-mobile);}.rcb-typography-heading-xl.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingXl-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-y2q9vo {font:var(--rc-text-headingLg-mobile);}.rcb-typography-heading-lg.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingLg-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-y2q9vo {font:var(--rc-text-headingMd-mobile);}.rcb-typography-heading-md.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingMd-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-y2q9vo {font:var(--rc-text-bodyBase-mobile);}.rcb-typography-body-base.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-bodyBase-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-y2q9vo {font:var(--rc-text-bodySmall-mobile);}.rcb-typography-body-small.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-bodySmall-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-y2q9vo {font:var(--rc-text-labelButton-mobile);}.rcb-typography-label-button.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-labelButton-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-y2q9vo {font:var(--rc-text-labelDefault-mobile);}.rcb-typography-label-default.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-labelDefault-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-y2q9vo {font:var(--rc-text-captionDefault-mobile);}.rcb-typography-caption-default.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-captionDefault-branded-mobile);}

  /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-y2q9vo {font:var(--rc-text-captionLink-mobile);}.rcb-typography-caption-link.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-captionLink-branded-mobile);}

  @container layout-query-container (width >= 768px) {span.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-brandedText-font-style-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-2xl.svelte-y2q9vo {font:var(--rc-text-heading2xl-desktop);}.rcb-typography-heading-2xl.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-heading2xl-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-xl.svelte-y2q9vo {font:var(--rc-text-headingXl-desktop);}.rcb-typography-heading-xl.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingXl-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-lg.svelte-y2q9vo {font:var(--rc-text-headingLg-desktop);}.rcb-typography-heading-lg.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingLg-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-heading-md.svelte-y2q9vo {font:var(--rc-text-headingMd-desktop);}.rcb-typography-heading-md.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-headingMd-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-base.svelte-y2q9vo {font:var(--rc-text-bodyBase-desktop);}.rcb-typography-body-base.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-bodyBase-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-body-small.svelte-y2q9vo {font:var(--rc-text-bodySmall-desktop);}.rcb-typography-body-small.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-bodySmall-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-button.svelte-y2q9vo {font:var(--rc-text-labelButton-desktop);}.rcb-typography-label-button.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-labelButton-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-label-default.svelte-y2q9vo {font:var(--rc-text-labelDefault-desktop);}.rcb-typography-label-default.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-labelDefault-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-default.svelte-y2q9vo {font:var(--rc-text-captionDefault-desktop);}.rcb-typography-caption-default.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-captionDefault-branded-desktop);}

    /* svelte-ignore css-unused-selector */.rcb-typography-caption-link.svelte-y2q9vo {font:var(--rc-text-captionLink-desktop);}.rcb-typography-caption-link.rcb-typography-branded.svelte-y2q9vo {font:var(--rc-text-captionLink-branded-desktop);}
  }`
};
function ze(r, e) {
  ke(r, xw);
  const t = X(e, "size", 3, "body-base"), n = X(e, "branded", 3, !1);
  var a = Pw(), i = T(a);
  yr(i, () => e.children ?? er), K(() => ur(a, 1, `rcb-typography rcb-typography-${t() ?? ""} ${n() ? "rcb-typography-branded" : ""}`, "svelte-y2q9vo")), x(r, a);
}
var Ew = /* @__PURE__ */ V("<div><!></div>"), Sw = /* @__PURE__ */ V('<span style="display: block;"><!></span>'), Iw = /* @__PURE__ */ V("<!> <!>", 1), Cw = /* @__PURE__ */ V("<!> <!>", 1), Tw = /* @__PURE__ */ V('<div class="rcb-modal-message svelte-1ldqsgm" data-type="error"><!></div>');
const Dw = {
  hash: "svelte-1ldqsgm",
  code: `.rcb-modal-message-icon.svelte-1ldqsgm {flex-shrink:0;align-self:center;margin-right:16px;}.rcb-modal-message.svelte-1ldqsgm {width:100%;min-height:160px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:left;margin-top:4px;}.rcb-modal-message[data-has-title="false"].svelte-1ldqsgm {margin-top:var(--rc-spacing-gapXXLarge-mobile);}.rcb-modal-message-icon.small.svelte-1ldqsgm {height:var(--rc-text-headingLg-mobile-font-size);width:var(--rc-text-headingLg-mobile-font-size);}.rcb-modal-message-icon.large.svelte-1ldqsgm {height:calc(2 * var(--rc-text-headingMd-mobile-font-size));width:calc(2 * var(--rc-text-headingMd-mobile-font-size));}

  @container layout-query-container (width >= 768px) {.rcb-modal-message-icon.small.svelte-1ldqsgm {height:var(--rc-text-headingLg-desktop-font-size);width:var(--rc-text-headingLg-desktop-font-size);}.rcb-modal-message-icon.large.svelte-1ldqsgm {height:calc(2 * var(--rc-text-headingMd-desktop-font-size));width:calc(2 * var(--rc-text-headingMd-desktop-font-size));}.rcb-modal-message[data-has-title="false"].svelte-1ldqsgm {margin-top:var(--rc-spacing-gapXXLarge-desktop);}
  }`
};
function Aw(r, e) {
  _e(e, !0), ke(r, Dw);
  const t = X(e, "title", 3, null), n = X(e, "icon", 3, null), a = 32;
  let i = /* @__PURE__ */ re(null), s = /* @__PURE__ */ re(!1), l;
  br(() => (o(i) && (l = new ResizeObserver(() => {
    var d;
    q(s, (((d = o(i)) == null ? void 0 : d.offsetHeight) ?? 0) > a);
  }), l.observe(o(i))), () => {
    l == null || l.disconnect();
  }));
  var c = Tw(), u = T(c);
  Ro(u, {
    gap: "medium",
    justify: "start",
    children: (d, p) => {
      var _ = Cw(), f = ce(_);
      ww(f, {
        children: (k, h) => {
          var y = Iw(), b = ce(y);
          {
            var v = (E) => {
              var C = Ew(), S = T(C);
              yr(S, n), K(() => ur(C, 1, `rcb-modal-message-icon ${o(s) ? "large" : "small"}`, "svelte-1ldqsgm")), x(E, C);
            };
            G(b, (E) => {
              n() && E(v);
            });
          }
          var P = W(b, 2);
          {
            var I = (E) => {
              var C = Sw(), S = T(C);
              ze(S, {
                size: "heading-md",
                children: (F, D) => {
                  var O = je();
                  K(() => fe(O, t())), x(F, O);
                },
                $$slots: { default: !0 }
              }), ca(C, (F) => q(i, F), () => o(i)), x(E, C);
            };
            G(P, (E) => {
              t() && E(I);
            });
          }
          x(k, y);
        },
        $$slots: { default: !0 }
      });
      var g = W(f, 2);
      {
        var w = (k) => {
          ze(k, {
            size: "body-small",
            children: (h, y) => {
              var b = Ee(), v = ce(b);
              yr(v, () => e.message ?? er), x(h, b);
            },
            $$slots: { default: !0 }
          });
        };
        G(g, (k) => {
          e.message && k(w);
        });
      }
      x(d, _);
    },
    $$slots: { default: !0 }
  }), K(() => he(c, "data-has-title", !!t())), x(r, c), ge();
}
var Fw = /* @__PURE__ */ V('<div class="rcb-modal-message-icon svelte-1h8pwwr"><!></div>'), qw = /* @__PURE__ */ V("<!> <!>", 1), Mw = /* @__PURE__ */ V('<div class="rcb-modal-message svelte-1h8pwwr" data-type="success"><!></div>');
const zw = {
  hash: "svelte-1h8pwwr",
  code: `.rcb-modal-message-icon.svelte-1h8pwwr {height:54px;width:54px;margin:0 auto;}.rcb-modal-message[data-has-title="false"].svelte-1h8pwwr {margin-top:var(--rc-spacing-gapXXLarge-mobile);}.rcb-modal-message.svelte-1h8pwwr {width:100%;min-height:160px;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;}

  @container layout-query-container (width >= 768px) {.rcb-modal-message[data-has-title="false"].svelte-1h8pwwr {margin-top:var(--rc-spacing-gapXXLarge-desktop);}
  }`
};
function Ow(r, e) {
  ke(r, zw);
  const t = X(e, "title", 3, null), n = X(e, "icon", 3, null);
  var a = Mw(), i = T(a);
  Ro(i, {
    gap: "large",
    justify: "center",
    children: (s, l) => {
      var c = qw(), u = ce(c);
      {
        var d = (f) => {
          var g = Fw(), w = T(g);
          yr(w, n), x(f, g);
        };
        G(u, (f) => {
          n() && f(d);
        });
      }
      var p = W(u, 2);
      {
        var _ = (f) => {
          ze(f, {
            size: "heading-md",
            children: (g, w) => {
              var k = je();
              K(() => fe(k, t())), x(g, k);
            },
            $$slots: { default: !0 }
          });
        };
        G(p, (f) => {
          t() && f(_);
        });
      }
      x(s, c);
    },
    $$slots: { default: !0 }
  }), K(() => he(a, "data-has-title", !!t())), x(r, a);
}
const Uo = "rcb-ui-events-tracker", jn = "branding";
var Nw = /* @__PURE__ */ V("<div><div><!></div> <div><!></div></div>");
const Lw = {
  hash: "svelte-clabfx",
  code: `.message-layout.svelte-clabfx {display:flex;flex-direction:column;}.message-layout-content.svelte-clabfx {flex-grow:1;display:flex;flex-direction:column;justify-content:center;}.message-layout-content-full-width.svelte-clabfx {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}.message-layout-footer-full-width.svelte-clabfx {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}

  @container layout-query-container (width < 768px) {.message-layout.svelte-clabfx {flex-grow:1;gap:var(--rc-spacing-gapXXLarge-mobile);}
  }

  @container layout-query-container (width >= 768px) {.message-layout.svelte-clabfx {min-height:354px;gap:var(--rc-spacing-gapXXLarge-desktop);}.message-layout-content.svelte-clabfx {justify-content:flex-start;flex-grow:1;}
  }.message-layout-full-width.svelte-clabfx {width:100%;}

  @media (min-width: 768px) {.message-layout-full-width.svelte-clabfx {width:544px;}
  }`
};
function uc(r, e) {
  _e(e, !0), ke(r, Lw);
  const t = () => Be(d, "$brandingAppearanceStore", n), [n, a] = Ze();
  let i = X(e, "title", 3, null), s = X(e, "closeButtonTitle", 3, "Go back to app"), l = X(e, "icon", 3, null), c = X(e, "message", 3, null), u = X(e, "fullWidth", 3, !1);
  const d = He(jn), p = /* @__PURE__ */ m(() => t() ?? void 0);
  function _() {
    e.onDismiss();
  }
  var f = Nw();
  let g;
  var w = T(f);
  let k;
  var h = T(w);
  hw(h, {
    children: (P, I) => {
      var E = Ee(), C = ce(E);
      {
        var S = (D) => {
          Ow(D, {
            get title() {
              return i();
            },
            get icon() {
              return l();
            }
          });
        }, F = (D) => {
          Aw(D, {
            get title() {
              return i();
            },
            get icon() {
              return l();
            },
            get message() {
              return c();
            }
          });
        };
        G(C, (D) => {
          e.type === "success" ? D(S) : D(F, !1);
        });
      }
      x(P, E);
    },
    $$slots: { default: !0 }
  });
  var y = W(w, 2);
  let b;
  var v = T(y);
  fw(v, {
    children: (P, I) => {
      I_(P, {
        onclick: _,
        type: "submit",
        get brandingAppearance() {
          return o(p);
        },
        children: (E, C) => {
          var S = je();
          K(() => fe(S, s())), x(E, S);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  }), K(() => {
    g = ur(f, 1, "message-layout svelte-clabfx", null, g, { "message-layout-full-width": u() }), k = ur(w, 1, "message-layout-content svelte-clabfx", null, k, { "message-layout-content-full-width": u() }), b = ur(y, 1, "message-layout-footer svelte-clabfx", null, b, { "message-layout-footer-full-width": u() });
  }), x(r, f), ge(), a();
}
function st(r, e) {
  _e(e, !0);
  const t = () => Be(s, "$translator", n), [n, a] = Ze(), i = X(e, "key", 3, ""), s = He(fr), l = /* @__PURE__ */ m(() => i() ? t().translate(i() || "", e.variables) : void 0);
  var c = Ee(), u = ce(c);
  {
    var d = (_) => {
      var f = je();
      K(() => fe(f, o(l))), x(_, f);
    }, p = (_) => {
      var f = Ee(), g = ce(f);
      yr(g, () => e.children ?? er), x(_, f);
    };
    G(u, (_) => {
      o(l) ? _(d) : _(p, !1);
    });
  }
  x(r, c), ge(), a();
}
const dc = 7, Qi = 30, pc = 365, $i = 4.33, _c = 52, es = 12;
function bo(r) {
  switch (r.unit) {
    case Ne.Year:
      return r.number * pc;
    case Ne.Month:
      return r.number * Qi;
    case Ne.Week:
      return r.number * dc;
    case Ne.Day:
      return r.number;
  }
}
function jw(r) {
  switch (r.unit) {
    case Ne.Year:
      return r.number * _c;
    case Ne.Month:
      return Math.floor(r.number * $i);
    case Ne.Week:
      return r.number;
    case Ne.Day:
      return 0;
  }
}
function Bw(r) {
  switch (r.unit) {
    case Ne.Year:
      return r.number * es;
    case Ne.Month:
      return r.number;
    case Ne.Week:
    case Ne.Day:
      return 0;
  }
}
function Rw(r) {
  switch (r.unit) {
    case Ne.Year:
      return r.number;
    case Ne.Month:
    case Ne.Week:
    case Ne.Day:
      return 0;
  }
}
function bl(r, e) {
  const { unit: t, number: n } = r;
  return {
    period: e.translatePeriodUnit(t, { noWhitespace: !0 }) ?? "",
    periodAbbreviated: e.translatePeriodUnit(t, {
      noWhitespace: !0,
      short: !0
    }) ?? "",
    periodWithUnit: e.translatePeriod(n, t) ?? "",
    periodInDays: bo(r).toString(),
    periodInWeeks: jw(r).toString(),
    periodInMonths: Bw(r).toString(),
    periodInYears: Rw(r).toString()
  };
}
var Uw = /* @__PURE__ */ V('<p class="footer-caption svelte-1fu2zos"><!></p>'), Vw = /* @__PURE__ */ V('<p class="footer-caption svelte-1fu2zos"><!></p>'), Ww = /* @__PURE__ */ V('<a class="terms-link svelte-1fu2zos" rel="noopener noreferrer" target="_blank"><!></a> <span class="terms-divider svelte-1fu2zos"></span>', 1), Hw = /* @__PURE__ */ V("<!> <!>", 1), Yw = /* @__PURE__ */ V('<div class="footer-caption-container svelte-1fu2zos"><!> <!> <p class="footer-caption svelte-1fu2zos"><!></p></div>');
const Gw = {
  hash: "svelte-1fu2zos",
  code: `.footer-caption-container.svelte-1fu2zos {display:flex;flex-direction:column;gap:var(--rc-spacing-gapLarge-mobile);}.footer-caption.svelte-1fu2zos {color:var(--rc-color-grey-text-light);text-align:center;margin:0;}.terms-link.svelte-1fu2zos {color:inherit;}.terms-divider.svelte-1fu2zos {margin:0 4px;}

  @container layout-query-container (width >= 768px) {.footer-caption-container.svelte-1fu2zos {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
};
function Kw(r, e) {
  _e(e, !1), ke(r, Gw);
  const t = () => Be(v, "$translator", n), [n, a] = Ze(), i = /* @__PURE__ */ lr(), s = /* @__PURE__ */ lr(), l = /* @__PURE__ */ lr(), c = /* @__PURE__ */ lr(), u = /* @__PURE__ */ lr(), d = /* @__PURE__ */ lr(), p = /* @__PURE__ */ lr(), _ = /* @__PURE__ */ lr(), f = /* @__PURE__ */ lr(), g = /* @__PURE__ */ lr(), w = /* @__PURE__ */ lr(), k = /* @__PURE__ */ lr();
  let h = X(e, "brandingInfo", 8, null), y = X(e, "purchaseOption", 8, null), b = X(e, "termsAndConditionsUrl", 8, null);
  const v = He(fr);
  function P(R) {
    return R != null && "base" in R;
  }
  function I(R) {
    return R != null && "basePrice" in R;
  }
  function E(R) {
    return R ? R.trial ? ue.PaymentEntryPageTrialSubscriptionTermsInfo : ue.PaymentEntryPageSubscriptionTermsInfo : ue.PaymentEntryPageOtpTermsInfo;
  }
  const C = "Discount applied to your subscription. Auto-renews at the discounted rate. Cancel anytime.", S = "Discount applies to your first payment only. Subscription auto-renews at the standard rate. Cancel anytime.", F = "One-time discount applied. Auto-renews at the standard rate. Cancel anytime.", D = "Limited-time discount. Auto-renews at the standard rate. Cancel anytime.";
  function O(R, Q) {
    if (Q.durationMode !== "time_window")
      return !1;
    const se = R.base.period, te = Q.period;
    if (!se || !te || Q.cycleCount <= 0)
      return !1;
    const le = bo(se), ae = bo({
      number: te.number * Q.cycleCount,
      unit: te.unit
    });
    return le > 0 && ae <= le;
  }
  function N(R) {
    const Q = R == null ? void 0 : R.discount;
    if (!R || !Q)
      return null;
    switch (Q.durationMode) {
      case "forever":
        return C;
      case "one_time":
        return F;
      case "time_window":
        return O(R, Q) ? S : D;
      default:
        return null;
    }
  }
  pr(() => We(y()), () => {
    q(i, P(y()) ? y() : null);
  }), pr(() => We(y()), () => {
    q(s, I(y()) ? y() : null);
  }), pr(() => o(i), () => {
    q(l, E(o(i)));
  }), pr(() => o(i), () => {
    var R, Q, se;
    q(c, ((R = o(i)) == null ? void 0 : R.discount) ?? ((Q = o(i)) == null ? void 0 : Q.introPrice) ?? ((se = o(i)) == null ? void 0 : se.base) ?? null);
  }), pr(
    () => (o(s), o(c)),
    () => {
      var R, Q, se, te;
      q(u, ((Q = (R = o(s)) == null ? void 0 : R.discount) == null ? void 0 : Q.price) || ((se = o(s)) == null ? void 0 : se.basePrice) || ((te = o(c)) == null ? void 0 : te.price));
    }
  ), pr(() => (o(u), t()), () => {
    q(d, o(u) ? cn(o(u).amountMicros, o(u).currency, t().bcp47Locale || t().fallbackBcp47Locale) : null);
  }), pr(() => (o(c), t()), () => {
    var R, Q, se, te, le;
    q(p, (R = o(c)) != null && R.period ? t().translatePeriodFrequency(((se = (Q = o(c)) == null ? void 0 : Q.period) == null ? void 0 : se.number) || 1, (le = (te = o(c)) == null ? void 0 : te.period) == null ? void 0 : le.unit, { useMultipleWords: !0 }) : null);
  }), pr(() => (o(i), t(), mo), () => {
    var R, Q;
    q(_, (Q = (R = o(i)) == null ? void 0 : R.trial) != null && Q.period ? t().translateDate(mo(/* @__PURE__ */ new Date(), o(i).trial.period, !0), { year: "numeric", month: "long", day: "numeric" }) : null);
  }), pr(
    () => (We(h()), o(u), t(), o(l), o(d), o(p), o(_)),
    () => {
      var R;
      q(f, h() && o(u) ? t().translate(o(l), {
        appName: (R = h()) == null ? void 0 : R.app_name,
        price: o(d),
        perFrequency: o(p),
        renewalDate: o(_)
      }) : null);
    }
  ), pr(() => o(i), () => {
    q(g, N(o(i)));
  }), pr(() => (o(g), o(f)), () => {
    q(w, o(g) ?? o(f));
  }), pr(() => (o(i), t(), ue), () => {
    q(k, o(i) ? t().translate(ue.PaymentEntryPageSubscriptionInfo) : null);
  }), Hl(), On();
  var L = Yw(), Z = T(L);
  {
    var z = (R) => {
      var Q = Uw(), se = T(Q);
      ze(se, {
        size: "caption-default",
        children: (te, le) => {
          var ae = je();
          K(() => fe(ae, o(w))), x(te, ae);
        },
        $$slots: { default: !0 }
      }), x(R, Q);
    };
    G(Z, (R) => {
      o(w) && R(z);
    });
  }
  var M = W(Z, 2);
  {
    var A = (R) => {
      var Q = Vw(), se = T(Q);
      ze(se, {
        size: "caption-default",
        children: (te, le) => {
          var ae = je();
          K(() => fe(ae, o(k))), x(te, ae);
        },
        $$slots: { default: !0 }
      }), x(R, Q);
    };
    G(M, (R) => {
      o(k) && !o(g) && R(A);
    });
  }
  var U = W(M, 2), j = T(U);
  ze(j, {
    size: "caption-default",
    children: (R, Q) => {
      var se = Hw(), te = ce(se);
      {
        var le = (Y) => {
          var $ = Ww(), oe = ce($), B = T(oe);
          st(B, {
            get key() {
              return We(ue), Re(() => ue.PaymentEntryPageTermsLinkLabel);
            }
          });
          var de = W(oe, 2);
          de.textContent = "|", K(() => he(oe, "href", b())), x(Y, $);
        };
        G(te, (Y) => {
          b() && Y(le);
        });
      }
      var ae = W(te, 2);
      st(ae, {
        get key() {
          return We(ue), Re(() => ue.PaymentEntryPagePaymentStepTitle);
        }
      }), x(R, se);
    },
    $$slots: { default: !0 }
  }), x(r, L), ge(), a();
}
var Xw = /* @__PURE__ */ V(' <a target="_blank" rel="noopener noreferrer" data-testid="CheckoutConsentTermsLink"> </a> ', 1), Zw = /* @__PURE__ */ V('<label class="rcb-checkout-consent svelte-1v4vd7h" data-testid="CheckoutConsent"><input type="checkbox" class="rcb-checkout-consent-checkbox svelte-1v4vd7h" data-testid="CheckoutConsentCheckbox"/> <!></label>');
const Jw = {
  hash: "svelte-1v4vd7h",
  code: ".rcb-checkout-consent.svelte-1v4vd7h {display:flex;align-items:flex-start;gap:8px;margin-bottom:12px;cursor:pointer;}.rcb-checkout-consent-checkbox.svelte-1v4vd7h {margin-top:2px;flex-shrink:0;}.rcb-checkout-consent.svelte-1v4vd7h a {color:inherit;text-decoration:underline;}"
};
function Qw(r, e) {
  _e(e, !0), ke(r, Jw);
  const t = () => Be(l, "$translator", n), [n, a] = Ze(), i = "__TERMS_OF_SERVICE__";
  let s = X(e, "checked", 15, !1);
  const l = He(fr), c = /* @__PURE__ */ m(() => t().translate(ue.PaymentEntryPageCheckoutConsentTermsOfService)), u = /* @__PURE__ */ m(() => {
    const g = t().translate(ue.PaymentEntryPageCheckoutConsentAgreement, {
      appName: e.appName ?? "",
      termsOfService: i
    }), [w = "", k = ""] = g.split(i);
    return { before: w, after: k };
  }), d = (g) => {
    const w = g.currentTarget;
    s(w.checked), e.onChange(w.checked);
  };
  var p = Zw(), _ = T(p);
  _.__change = d;
  var f = W(_, 2);
  ze(f, {
    size: "caption-default",
    children: (g, w) => {
      var k = Xw(), h = ce(k, !0), y = W(h);
      y.__click = (P) => P.stopPropagation();
      var b = T(y), v = W(y, 1, !0);
      K(() => {
        fe(h, o(u).before), he(y, "href", e.termsAndConditionsUrl), fe(b, o(c)), fe(v, o(u).after);
      }), x(g, k);
    },
    $$slots: { default: !0 }
  }), K(() => vm(_, s())), x(r, p), ge(), a();
}
Jt(["change", "click"]);
function $w({
  brandingInfo: r,
  termsAndConditionsUrl: e,
  productDetails: t
}) {
  return !!(r != null && r.require_checkout_consent) && !!e && t.productType === Ur.Subscription;
}
var Vr = /* @__PURE__ */ ((r) => (r.SDKInitialized = "sdk_initialized", r.CheckoutSessionStart = "checkout_session_start", r.CheckoutSessionEnd = "checkout_session_end", r.CheckoutFlowError = "checkout_flow_error", r.CheckoutPaymentTaxCalculation = "checkout_payment_tax_calculation", r.CheckoutPaymentFormImpression = "checkout_payment_form_impression", r.CheckoutPaymentFormError = "checkout_payment_form_error", r.CheckoutPaymentFormDismiss = "checkout_payment_form_dismiss", r.CheckoutPaymentFormSubmit = "checkout_payment_form_submit", r.CheckoutPaymentFormGatewayError = "checkout_payment_form_gateway_error", r.CheckoutPurchaseSuccessfulImpression = "checkout_purchase_successful_impression", r.CheckoutPurchaseSuccessfulDismiss = "checkout_purchase_successful_dismiss", r.WorkflowStepStarted = "workflow_step_started", r.WorkflowStepCompleted = "workflow_step_completed", r))(Vr || {});
function C_(r) {
  const e = {};
  for (const t in r)
    if (Object.prototype.hasOwnProperty.call(r, t)) {
      const n = t.replace(/([A-Z])/g, "_$1").toLowerCase(), a = r[t];
      a && typeof a == "object" && !Array.isArray(a) ? e[n] = C_(
        a
      ) : e[n] = a;
    }
  return e;
}
function Ku(r) {
  for (let e = 0; e < r.length; e++)
    r[e] = Math.floor(Math.random() * 256);
}
function An() {
  const r = typeof crypto < "u" ? crypto : globalThis.crypto;
  if (r && r.randomUUID)
    return r.randomUUID();
  const e = new Uint8Array(16);
  try {
    r && r.getRandomValues ? r.getRandomValues(e) : Ku(e);
  } catch (n) {
    console.log(
      `Error using crypto.getRandomValues(), falling back to Math.random. + ${n}`
    ), Ku(e);
  }
  e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128;
  const t = Array.from(e).map((n) => n.toString(16).padStart(2, "0"));
  return [
    t.slice(0, 4).join(""),
    t.slice(4, 6).join(""),
    t.slice(6, 8).join(""),
    t.slice(8, 10).join(""),
    t.slice(10, 16).join("")
  ].join("-");
}
const Xr = "sdk_checkout";
class eP {
  constructor(e) {
    ee(this, "EVENT_TYPE", "web_billing");
    ee(this, "id");
    ee(this, "timestampMs");
    ee(this, "data");
    this.id = An(), this.timestampMs = Date.now(), this.data = e;
  }
  toJSON() {
    return C_({
      id: this.id,
      timestampMs: this.timestampMs,
      type: this.EVENT_TYPE,
      eventName: this.data.eventName,
      appUserId: this.data.appUserId,
      context: {
        ...this.data.context
      },
      properties: {
        ...this.data.properties,
        traceId: this.data.traceId,
        ...this.data.workflowIdentifier !== void 0 ? { workflowIdentifier: this.data.workflowIdentifier } : {}
      }
    });
  }
}
function T_({
  errorCode: r,
  errorMessage: e,
  mode: t = Xr
}) {
  return {
    eventName: Vr.CheckoutFlowError,
    properties: {
      mode: t,
      errorCode: r,
      errorMessage: e
    }
  };
}
function rP({
  errorCode: r,
  errorMessage: e,
  mode: t = Xr
}) {
  return {
    eventName: Vr.CheckoutPaymentFormError,
    properties: {
      mode: t,
      errorCode: r,
      errorMessage: e
    }
  };
}
function _i({
  appearance: r,
  rcPackage: e,
  purchaseOptionToUse: t,
  customerEmail: n,
  mode: a = Xr
}) {
  return {
    eventName: Vr.CheckoutSessionStart,
    properties: {
      mode: a,
      customizationColorButtonsPrimary: (r == null ? void 0 : r.color_buttons_primary) ?? null,
      customizationColorAccent: (r == null ? void 0 : r.color_accent) ?? null,
      customizationColorError: (r == null ? void 0 : r.color_error) ?? null,
      customizationColorProductInfoBg: (r == null ? void 0 : r.color_product_info_bg) ?? null,
      customizationColorFormBg: (r == null ? void 0 : r.color_form_bg) ?? null,
      customizationColorPageBg: (r == null ? void 0 : r.color_page_bg) ?? null,
      customizationFont: (r == null ? void 0 : r.font) ?? null,
      customizationShapes: (r == null ? void 0 : r.shapes) ?? null,
      customizationShowProductDescription: (r == null ? void 0 : r.show_product_description) ?? null,
      productInterval: e.webBillingProduct.normalPeriodDuration,
      productPrice: e.webBillingProduct.price.amountMicros,
      productCurrency: e.webBillingProduct.price.currency,
      selectedProductId: e.webBillingProduct.identifier,
      selectedPackageId: e.identifier,
      selectedPurchaseOption: t.id,
      customerEmailProvidedByDeveloper: !!n
    }
  };
}
function Xu({
  redemptionInfo: r,
  mode: e = Xr
}) {
  return {
    eventName: Vr.CheckoutSessionEnd,
    properties: {
      mode: e,
      outcome: "finished",
      withRedemptionInfo: !!r
    }
  };
}
function D_(r) {
  return {
    eventName: Vr.CheckoutSessionEnd,
    properties: {
      mode: (r == null ? void 0 : r.mode) ?? Xr,
      outcome: "closed"
    }
  };
}
function Zu({
  errorCode: r,
  errorMessage: e,
  mode: t = Xr
}) {
  return {
    eventName: Vr.CheckoutSessionEnd,
    properties: {
      mode: t,
      outcome: "errored",
      errorCode: r,
      errorMessage: e
    }
  };
}
function A_({
  taxCalculation: r,
  taxCustomerDetails: e,
  mode: t = Xr
}) {
  const n = r.failed_reason === tn.tax_collection_disabled ? "disabled" : r.failed_reason ? "failed" : r.tax_amount_in_micros === 0 ? "not-taxed" : "taxed", a = e === null ? "auto" : "form";
  return {
    eventName: Vr.CheckoutPaymentTaxCalculation,
    properties: {
      mode: t,
      outcome: n,
      ui_element: a,
      tax_inclusive: r.tax_inclusive,
      error_code: r.failed_reason ?? null
    }
  };
}
function F_({
  selectedPaymentMethod: r,
  mode: e = Xr
}) {
  return {
    eventName: Vr.CheckoutPaymentFormSubmit,
    properties: {
      mode: e,
      selectedPaymentMethod: r ?? null
    }
  };
}
function kl({
  errorCode: r,
  errorMessage: e,
  mode: t = Xr
}) {
  return {
    eventName: Vr.CheckoutPaymentFormGatewayError,
    properties: {
      mode: t,
      errorCode: r,
      errorMessage: e
    }
  };
}
function tP(r, e = Xr) {
  return {
    eventName: Vr.CheckoutPurchaseSuccessfulDismiss,
    properties: {
      mode: e,
      ui_element: r
    }
  };
}
function nP(r = Xr) {
  return {
    eventName: Vr.CheckoutPurchaseSuccessfulImpression,
    properties: {
      mode: r
    }
  };
}
const aP = `<svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(0.5)" transform-origin="center">
  <path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 11.5858 20.8358 11.25 21.25 11.25C21.6642 11.25 22 11.5858 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.4142 2 12.75 2.33579 12.75 2.75C12.75 3.16421 12.4142 3.5 12 3.5Z" fill="currentColor"/>
  </g>
</svg>`;
var oP = /* @__PURE__ */ V('<div class="rcb-ui-asset-icon svelte-6k29hu"><!></div>');
const iP = {
  hash: "svelte-6k29hu",
  code: `
  @-webkit-keyframes svelte-6k29hu-rotating /* Safari and Chrome */ {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes svelte-6k29hu-rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }div.svelte-6k29hu {width:80px;height:80px;
    -webkit-animation: svelte-6k29hu-rotating 2s ease-in-out infinite;
    -moz-animation: svelte-6k29hu-rotating 2s ease-in-out infinite;
    -ms-animation: svelte-6k29hu-rotating 2s ease-in-out infinite;
    -o-animation: svelte-6k29hu-rotating 2s ease-in-out infinite;
    animation: svelte-6k29hu-rotating 2s ease-in-out infinite;}`
};
function rs(r, e) {
  ke(r, iP);
  const t = X(e, "color", 3, "var(--rc-color-accent)");
  var n = oP(), a = T(n);
  pn(a, () => aP), K(() => Fe(n, `color:${t() ?? ""};`)), x(r, n);
}
var sP = /* @__PURE__ */ V('<div class="rcb-modal-loader svelte-rhstd0"><!></div>');
const lP = {
  hash: "svelte-rhstd0",
  code: `.rcb-modal-loader.svelte-rhstd0 {width:100%;flex-grow:1;display:flex;justify-content:center;align-items:center;}

  @container layout-query-container (width >= 768px) {.rcb-modal-loader.svelte-rhstd0 {align-items:flex-start;margin-top:calc(var(--rc-spacing-gapXXLarge-desktop) * 6);}
  }`
};
function q_(r) {
  ke(r, lP);
  var e = sP(), t = T(e);
  rs(t, {}), x(r, e);
}
function cP(r, e) {
  var _, f;
  _e(e, !0);
  const t = () => Be(l, "$brandingAppearanceStore", a), n = () => Be(s, "$translator", a), [a, i] = Ze(), s = He(fr), l = He(jn), c = /* @__PURE__ */ m(() => t() ?? void 0), u = /* @__PURE__ */ m(() => e.priceBreakdown ? n().formatPrice(e.priceBreakdown.totalAmountInMicros, e.priceBreakdown.currency) : null), d = (f = (_ = e.subscriptionOption) == null ? void 0 : _.trial) == null ? void 0 : f.period, p = /* @__PURE__ */ m(() => d ? n().translatePeriod(d.number, d.unit) : null);
  I_(r, {
    get disabled() {
      return e.disabled;
    },
    testId: "PayButton",
    get brandingAppearance() {
      return o(c);
    },
    children: (g, w) => {
      var k = Ee(), h = ce(k);
      {
        var y = (v) => {
          {
            let P = /* @__PURE__ */ m(() => ({ trialPeriodLabel: o(p) }));
            st(v, {
              get key() {
                return ue.PaymentEntryPageButtonStartTrial;
              },
              get variables() {
                return o(P);
              }
            });
          }
        }, b = (v) => {
          var P = Ee(), I = ce(P);
          {
            var E = (S) => {
              {
                let F = /* @__PURE__ */ m(() => ({ formattedPrice: o(u) }));
                st(S, {
                  get key() {
                    return ue.PaymentEntryPageButtonWithPrice;
                  },
                  get variables() {
                    return o(F);
                  }
                });
              }
            }, C = (S) => {
              st(S, {
                get key() {
                  return ue.PaymentEntryPageButtonPay;
                }
              });
            };
            G(
              I,
              (S) => {
                o(u) ? S(E) : S(C, !1);
              },
              !0
            );
          }
          x(v, P);
        };
        G(h, (v) => {
          var P;
          (P = e.subscriptionOption) != null && P.trial ? v(y) : v(b, !1);
        });
      }
      x(g, k);
    },
    $$slots: { default: !0 }
  }), ge(), i();
}
function uo(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? uo = function(e) {
    return typeof e;
  } : uo = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, uo(r);
}
var M_ = "dahlia", uP = function(e) {
  return e === 3 ? "v3" : e;
}, z_ = "https://js.stripe.com", dP = "".concat(z_, "/").concat(M_, "/stripe.js"), pP = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, _P = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/, Ju = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used", gP = function(e) {
  return pP.test(e) || _P.test(e);
}, fP = function() {
  for (var e = document.querySelectorAll('script[src^="'.concat(z_, '"]')), t = 0; t < e.length; t++) {
    var n = e[t];
    if (gP(n.src))
      return n;
  }
  return null;
}, Qu = function(e) {
  var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "", n = document.createElement("script");
  n.src = "".concat(dP).concat(t);
  var a = document.head || document.body;
  if (!a)
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  return a.appendChild(n), n;
}, mP = function(e, t) {
  !e || !e._registerWrapper || e._registerWrapper({
    name: "stripe-js",
    version: "9.7.0",
    startTime: t
  });
}, to = null, ri = null, ti = null, hP = function(e) {
  return function(t) {
    e(new Error("Failed to load Stripe.js", {
      cause: t
    }));
  };
}, vP = function(e, t) {
  return function() {
    window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"));
  };
}, yP = function(e) {
  return to !== null ? to : (to = new Promise(function(t, n) {
    if (typeof window > "u" || typeof document > "u") {
      t(null);
      return;
    }
    if (window.Stripe && e && console.warn(Ju), window.Stripe) {
      t(window.Stripe);
      return;
    }
    try {
      var a = fP();
      if (a && e)
        console.warn(Ju);
      else if (!a)
        a = Qu(e);
      else if (a && ti !== null && ri !== null) {
        var i;
        a.removeEventListener("load", ti), a.removeEventListener("error", ri), (i = a.parentNode) === null || i === void 0 || i.removeChild(a), a = Qu(e);
      }
      ti = vP(t, n), ri = hP(n), a.addEventListener("load", ti), a.addEventListener("error", ri);
    } catch (s) {
      n(s);
      return;
    }
  }), to.catch(function(t) {
    return to = null, Promise.reject(t);
  }));
}, bP = function(e, t, n) {
  if (e === null)
    return null;
  var a = t[0];
  if (typeof a != "string")
    throw new Error("Expected publishable key to be of type string, got type ".concat(uo(a), " instead."));
  var i = a.match(/^pk_test/), s = uP(e.version), l = M_;
  i && s !== l && console.warn("Stripe.js@".concat(s, " was loaded on the page, but @stripe/stripe-js@").concat("9.7.0", " expected Stripe.js@").concat(l, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  var c = e.apply(void 0, t);
  return mP(c, n), c;
}, $u = function(e) {
  var t = `invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e), `
`);
  if (e === null || uo(e) !== "object")
    throw new Error(t);
  if (Object.keys(e).length === 1 && typeof e.advancedFraudSignals == "boolean")
    return e;
  throw new Error(t);
}, gi, wl = !1, O_ = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  wl = !0;
  var a = Date.now();
  return yP(gi).then(function(i) {
    return bP(i, t, a);
  });
};
O_.setLoadParameters = function(r) {
  if (wl && gi) {
    var e = $u(r), t = Object.keys(e), n = t.reduce(function(a, i) {
      var s;
      return a && r[i] === ((s = gi) === null || s === void 0 ? void 0 : s[i]);
    }, !0);
    if (n)
      return;
  }
  if (wl)
    throw new Error("You cannot change load parameters after calling loadStripe");
  gi = $u(r);
};
const kP = {
  error: "#B0171F",
  warning: "#f4e971",
  focus: "#1148B8",
  accent: "#767676",
  primary: "#576CDB",
  "primary-hover": "rgba(87, 108, 219, .8)",
  "primary-pressed": "rgba(87, 108, 219, .9)",
  "primary-text": "#ffffff",
  white: "#ffffff",
  "grey-text-dark": "rgba(0,0,0,1)",
  "grey-text-light": "rgba(0,0,0,0.7)",
  "grey-ui-dark": "rgba(0,0,0,0.3)",
  "grey-ui-light": "rgba(0,0,0,0.1)",
  "input-background": "white",
  background: "white"
}, wP = {
  error: "#B0171F",
  warning: "#f4e971",
  focus: "#1148B8",
  accent: "#767676",
  primary: "#576CDB",
  "primary-hover": "rgba(87, 108, 219, .8)",
  "primary-pressed": "rgba(87, 108, 219, .9)",
  "primary-text": "#ffffff",
  white: "#ffffff",
  "grey-text-dark": "rgba(0,0,0,1)",
  "grey-text-light": "rgba(0,0,0,0.7)",
  "grey-ui-dark": "rgba(0,0,0,0.3)",
  "grey-ui-light": "rgba(0,0,0,0.1)",
  "input-background": "white",
  background: "#EFF3FA"
}, PP = {
  error: "#B0171F",
  warning: "#f4e971",
  focus: "#1148B8",
  accent: "#767676",
  primary: "#576CDB",
  "primary-hover": "rgba(87, 108, 219, .8)",
  "primary-pressed": "rgba(87, 108, 219, .9)",
  "primary-text": "#ffffff",
  white: "#ffffff",
  "grey-text-dark": "rgba(0,0,0,1)",
  "grey-text-light": "rgba(0,0,0,0.7)",
  "grey-ui-dark": "rgba(0,0,0,0.3)",
  "grey-ui-light": "rgba(0,0,0,0.1)",
  "input-background": "white",
  background: "#ffffff"
}, gc = {
  error: "color_error",
  focus: "color_accent",
  accent: "color_accent",
  primary: "color_buttons_primary"
}, xP = {
  ...gc,
  "input-background": "color_form_bg",
  background: "color_form_bg"
}, EP = {
  ...gc,
  "input-background": "color_product_info_bg",
  background: "color_product_info_bg"
}, SP = {
  ...gc,
  "input-background": "color_page_bg",
  background: "color_page_bg"
}, N_ = {
  "input-border-radius": "4px",
  "input-button-border-radius": "8px"
}, IP = {
  "input-border-radius": "0px",
  "input-button-border-radius": "0px"
}, CP = {
  "input-border-radius": "12px",
  "input-button-border-radius": "9999px"
}, ed = N_, ko = "-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif", L_ = "BrandCustomFont", rd = `${L_}, ${ko}`, zt = {
  regular: "400",
  medium: "500",
  semibold: "600"
}, ht = {
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  24: "24px",
  28: "28px",
  32: "32px",
  36: "36px"
}, Ot = {
  130: "130%",
  140: "140%"
}, Nt = {
  tight: "0.20%",
  regular: "0",
  loose: "0.20%"
}, Ir = {
  heading2xl: {
    fontSize: ht[28],
    lineHeight: Ot[130],
    fontWeight: zt.semibold,
    letterSpacing: Nt.loose
  },
  headingXl: {
    fontSize: ht[24],
    lineHeight: Ot[130],
    fontWeight: zt.semibold,
    letterSpacing: Nt.loose
  },
  headingLg: {
    fontSize: "20px",
    lineHeight: Ot[130],
    fontWeight: zt.semibold,
    letterSpacing: Nt.loose
  },
  headingMd: {
    fontSize: "16px",
    lineHeight: Ot[140],
    fontWeight: zt.medium,
    letterSpacing: Nt.regular
  },
  bodyBase: {
    fontSize: ht[16],
    lineHeight: Ot[140],
    fontWeight: zt.regular,
    letterSpacing: Nt.regular
  },
  bodySmall: {
    fontSize: ht[14],
    lineHeight: Ot[140],
    fontWeight: zt.regular,
    letterSpacing: Nt.regular
  },
  labelButton: {
    fontSize: ht[16],
    lineHeight: Ot[140],
    fontWeight: zt.semibold,
    letterSpacing: Nt.tight
  },
  labelDefault: {
    fontSize: ht[14],
    lineHeight: Ot[140],
    fontWeight: zt.regular,
    letterSpacing: Nt.tight
  },
  captionDefault: {
    fontSize: ht[12],
    lineHeight: Ot[140],
    fontWeight: zt.regular,
    letterSpacing: Nt.regular
  },
  captionLink: {
    fontSize: ht[12],
    lineHeight: Ot[140],
    fontWeight: zt.regular,
    letterSpacing: Nt.regular
  }
}, Lt = {
  heading2xl: {
    ...Ir.heading2xl,
    fontSize: ht[36]
  },
  headingXl: {
    ...Ir.headingXl,
    fontSize: ht[32]
  },
  headingLg: {
    ...Ir.headingLg,
    fontSize: ht[24]
  },
  headingMd: {
    ...Ir.headingMd,
    fontSize: ht[18]
  },
  bodyBase: {
    ...Ir.bodyBase
  },
  bodySmall: {
    ...Ir.bodySmall
  },
  labelButton: {
    ...Ir.labelButton
  },
  labelDefault: {
    ...Ir.labelDefault
  },
  captionDefault: {
    ...Ir.captionDefault
  },
  captionLink: {
    ...Ir.captionLink
  }
}, Pl = {
  heading2xl: {
    mobile: Ir.heading2xl,
    desktop: Lt.heading2xl
  },
  headingXl: {
    desktop: Lt.headingXl,
    mobile: Ir.headingXl
  },
  headingLg: {
    desktop: Lt.headingLg,
    mobile: Ir.headingLg
  },
  headingMd: {
    desktop: Lt.headingMd,
    mobile: Ir.headingMd
  },
  bodyBase: {
    desktop: Lt.bodyBase,
    mobile: Ir.bodyBase
  },
  bodySmall: {
    desktop: Lt.bodySmall,
    mobile: Ir.bodySmall
  },
  labelButton: {
    desktop: Lt.labelButton,
    mobile: Ir.labelButton
  },
  labelDefault: {
    desktop: Lt.labelDefault,
    mobile: Ir.labelDefault
  },
  captionDefault: {
    desktop: Lt.captionDefault,
    mobile: Ir.captionDefault
  },
  captionLink: {
    desktop: Lt.captionLink,
    mobile: Ir.captionLink
  }
}, Wa = (r) => r.length == 7 ? {
  r: parseInt(r.slice(1, 3), 16),
  g: parseInt(r.slice(3, 5), 16),
  b: parseInt(r.slice(5, 7), 16)
} : r.length == 4 ? {
  r: parseInt(r[1], 16),
  g: parseInt(r[2], 16),
  b: parseInt(r[3], 16)
} : null, ts = ({
  r,
  g: e,
  b: t,
  luminanceThreshold: n
}) => {
  const a = (s) => (s = s / 255, s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4));
  return 0.2126 * a(r) + 0.7152 * a(e) + 0.0722 * a(t) > n;
}, ns = 0.37, TP = (r, e = ns) => {
  const t = Wa(r);
  return t ? ts({ ...t, luminanceThreshold: e }) : !0;
}, DP = (r, e = ns) => {
  const t = ts({ ...r, luminanceThreshold: e }) ? "0,0,0" : "255,255,255";
  return {
    "grey-text-dark": `rgb(${t})`,
    "grey-text-light": `rgba(${t},0.70)`,
    "grey-ui-dark": `rgba(${t},0.3)`,
    "grey-ui-light": `rgba(${t},0.1)`
  };
};
function AP(r, e, t) {
  const n = Wa(r) || { r: 0, g: 0, b: 0 }, a = Wa(e) || { r: 255, g: 255, b: 255 }, i = Math.round(a.r * t + n.r * (1 - t)), s = Math.round(a.g * t + n.g * (1 - t)), l = Math.round(a.b * t + n.b * (1 - t));
  return `#${Ys(i)}${Ys(s)}${Ys(l)}`;
}
function td(r, e) {
  const t = { r: 255, g: 255, b: 255 }, n = Math.max(0, Math.min(1, e));
  let a = r, i = Wa(r) || t;
  (isNaN(i.r) || isNaN(i.g) || isNaN(i.b)) && (i = t, a = "#FFFFFF");
  const l = ts({
    ...i,
    luminanceThreshold: ns
  }) ? "#000000" : "#FFFFFF";
  return AP(a, l, n);
}
function Ys(r) {
  return r.toString(16).padStart(2, "0").toUpperCase();
}
const FP = (r, e, t, n, a = ns) => {
  const i = {
    "grey-text-dark": n["grey-text-dark"],
    "grey-text-light": n["grey-text-light"],
    "grey-ui-dark": n["grey-ui-dark"],
    "grey-ui-light": n["grey-ui-light"],
    "primary-text": n["primary-text"]
  };
  if (r != null && r.startsWith("#")) {
    const s = Wa(r);
    s !== null && Object.assign(i, DP(s));
  }
  if (t)
    i["primary-text"] = t;
  else if (e != null && e.startsWith("#")) {
    const s = Wa(e);
    s !== null && (i["primary-text"] = ts({ ...s, luminanceThreshold: a }) ? "black" : "white");
  }
  return i;
}, qP = (r) => ({
  "primary-hover": td(r, 0.1),
  "primary-pressed": td(r, 0.15)
}), MP = (r, e) => r || e, zP = (r, e, t) => {
  const n = Object.entries(r).map(([a, i]) => [
    a,
    MP(
      t ? t[i] : null,
      e[a]
    )
  ]);
  return Object.fromEntries(n);
}, fc = (r, e, t) => {
  const n = zP(
    r,
    e,
    t
  );
  return t ? {
    ...e,
    ...n,
    ...FP(
      n.background,
      n.primary,
      t.color_buttons_primary_text,
      e
    ),
    ...qP(n.primary)
  } : { ...e };
}, j_ = (r) => fc(
  EP,
  wP,
  r
), B_ = (r) => fc(
  xP,
  kP,
  r
), OP = (r) => fc(
  SP,
  PP,
  r
), as = (r) => {
  if (!r)
    return ed;
  switch (r.shapes) {
    case "rounded":
      return N_;
    case "rectangle":
      return IP;
    case "pill":
      return CP;
    default:
      return ed;
  }
}, Ha = (r = "", e) => e.map(([t, n]) => `--rc-${r}-${t}: ${n}`).join("; "), R_ = (r) => {
  const e = Ha(
    "color",
    Object.entries(j_(r))
  ), t = Ha(
    "shape",
    Object.entries(as(r))
  );
  return [e, t].join("; ");
}, NP = (r) => {
  const e = Ha(
    "color",
    Object.entries(B_(r))
  ), t = Ha(
    "shape",
    Object.entries(as(r))
  );
  return [e, t].join("; ");
}, LP = (r) => {
  const e = Ha(
    "color",
    Object.entries(OP(r))
  ), t = Ha(
    "shape",
    Object.entries(as(r))
  );
  return [e, t].join("; ");
}, jP = (r = "", e, t) => Object.entries(e).flatMap(([n, { desktop: a, mobile: i }]) => {
  const s = `normal normal ${a.fontWeight} ${a.fontSize}/${a.lineHeight} ${ko}`, l = `normal normal ${i.fontWeight} ${i.fontSize}/${i.lineHeight} ${ko}`, c = `normal normal ${t == null ? void 0 : t.desktop.font_weight} ${t == null ? void 0 : t.desktop.font_size} ${rd}`, u = `normal normal ${t == null ? void 0 : t.mobile.font_weight} ${t == null ? void 0 : t.mobile.font_size} ${rd}`;
  return [
    `--rc-${r}-${n}-desktop: ${s}`,
    `--rc-${r}-${n}-mobile: ${l}`,
    `--rc-${r}-${n}-branded-desktop: ${t ? c : s}`,
    `--rc-${r}-${n}-branded-mobile: ${t ? u : l}`,
    `--rc-${r}-${n}-desktop-font-size: ${a.fontSize}`,
    `--rc-${r}-${n}-mobile-font-size: ${i.fontSize}`
  ];
}).join("; "), BP = (r = "", e) => Object.entries(e).map(
  ([t, { mobile: n, desktop: a }]) => `--rc-${r}-${t}-mobile: ${n};  --rc-${r}-${t}-desktop: ${a};`
).join(" "), RP = {
  outerPaddingTop: {
    mobile: "0.25rem",
    // 4px
    desktop: "clamp(1rem, 8.44vw, 7.5rem)"
    // 16px to 128px
  },
  outerPadding: {
    mobile: "clamp(1.3125rem, 5.6vw, 1.5rem)",
    // 21px to 24px
    desktop: "clamp(3rem, 6.44vw, 4.5rem)"
    // 48px to 72px
  },
  gapSmall: {
    mobile: "0.25rem",
    // 4px
    desktop: "0.5rem"
    // 8px
  },
  gapMedium: {
    mobile: "0.5rem",
    // 8px
    desktop: "0.75rem"
    // 12px
  },
  gapLarge: {
    mobile: "0.75rem",
    // 12px
    desktop: "1rem"
    // 16px
  },
  gapXLarge: {
    mobile: "1rem",
    // 16px
    desktop: "2rem"
    // 32px
  },
  gapXXLarge: {
    mobile: "1.25rem",
    // 20px
    desktop: "2.25rem"
    // 36px
  },
  gapXXXLarge: {
    mobile: "2.25rem",
    // 36px
    desktop: "5rem"
    // 80px
  },
  inputHeight: {
    // Only used with button
    // Inconsistent with design system
    // Should rely on padding spacings
    mobile: "3rem",
    // 48px
    desktop: "3rem"
    // 48px
  }
};
class Fn {
  constructor(e) {
    ee(this, "brandingAppearance");
    e ? this.brandingAppearance = e : this.brandingAppearance = void 0;
  }
  get shape() {
    return as(this.brandingAppearance);
  }
  get formColors() {
    return B_(this.brandingAppearance);
  }
  get formStyleVars() {
    return NP(this.brandingAppearance);
  }
  get productInfoStyleVars() {
    return R_(this.brandingAppearance);
  }
  get pageStyleVars() {
    return LP(this.brandingAppearance);
  }
  get spacing() {
    return RP;
  }
  get textStyles() {
    return Pl;
  }
  getTextStyleVars(e) {
    return jP("text", this.textStyles, e);
  }
  get spacingStyleVars() {
    return BP("spacing", this.spacing);
  }
}
var xl = /* @__PURE__ */ ((r) => (r[r.ErrorLoadingStripe = 0] = "ErrorLoadingStripe", r[r.HandledFormError = 1] = "HandledFormError", r[r.UnhandledFormError = 2] = "UnhandledFormError", r))(xl || {});
class po {
  constructor(e, t, n) {
    this.code = e, this.gatewayErrorCode = t, this.message = n;
  }
}
const pt = class pt {
  /**
   * This function converts some particular locales to the ones that stripe supports.
   * Finally falls back to 'auto' if the initialLocale is not supported by stripe.
   * @param locale
   */
  static getStripeLocale(e) {
    if (["ca", "hi", "uk"].includes(e))
      return "auto";
    const n = {
      zh_Hans: "zh",
      "zh-Hans": "zh",
      zh_Hant: "zh-TW",
      "zh-Hant": "zh-TW"
    };
    return Object.keys(n).includes(e) ? n[e] : e;
  }
  static async getStripeClient(e, t) {
    const n = await O_(t, {
      stripeAccount: e
    }).catch((a) => {
      throw this.mapInitializationError(a);
    });
    if (!n)
      throw {
        code: 0,
        gatewayErrorCode: void 0,
        message: "Stripe client not found"
      };
    return { stripe: n };
  }
  static async initializeStripe(e, t, n, a, i, s, l) {
    if (!t || !e || !n)
      throw {
        code: 0,
        gatewayErrorCode: void 0,
        message: "Stripe configuration is missing"
      };
    const { stripe: c } = await this.getStripeClient(
      e,
      t
    ), u = new Fn(a == null ? void 0 : a.appearance), d = u.shape, p = u.formColors, _ = u.textStyles, f = Pl.bodyBase[l].fontSize || Pl.bodyBase.mobile.fontSize;
    let g;
    try {
      g = c.elements({
        mode: n.mode,
        paymentMethodTypes: n.payment_method_types,
        setupFutureUsage: n.setup_future_usage,
        amount: n.amount,
        currency: n.currency,
        loader: "always",
        locale: i,
        appearance: {
          theme: "stripe",
          labels: "floating",
          variables: {
            borderRadius: d["input-border-radius"],
            focusBoxShadow: "none",
            colorDanger: p.error,
            colorTextPlaceholder: p["grey-text-light"],
            colorText: p["grey-text-dark"],
            colorTextSecondary: p["grey-text-light"],
            fontSizeBase: f,
            ...s
          },
          rules: {
            ".Input": {
              boxShadow: "none",
              paddingTop: "6px",
              paddingBottom: "6px",
              fontSize: f,
              border: `1px solid ${p["grey-ui-dark"]}`,
              backgroundColor: p["input-background"],
              color: p["grey-text-dark"]
            },
            ".Input:focus": {
              border: `1px solid ${p.focus}`,
              outline: "none"
            },
            ".Label": {
              fontWeight: _.labelDefault[l].fontWeight,
              lineHeight: "22px",
              color: p["grey-text-dark"]
            },
            ".Label--floating": {
              opacity: "1"
            },
            ".Input--invalid": {
              boxShadow: "none"
            }
          }
        }
        // Backend guarantees payment-mode amount/currency; v9 types elements()
        // options as a discriminated union, so assert the union shape.
      });
    } catch (w) {
      throw this.mapInitializationError(w);
    }
    return { stripe: c, elements: g };
  }
  static async initializeStripeCheckout(e, t, n, a) {
    if (!e || !t || !n)
      throw {
        code: 0,
        gatewayErrorCode: void 0,
        message: "Stripe configuration is missing"
      };
    const { stripe: i } = await this.getStripeClient(
      e,
      t
    );
    let s;
    try {
      s = await i.createEmbeddedCheckoutPage({
        fetchClientSecret: () => Promise.resolve(n.client_secret),
        onComplete: a
      });
    } catch (l) {
      throw this.mapInitializationError(l);
    }
    return { stripe: i, embeddedCheckout: s };
  }
  static updateElementsConfiguration(e, t) {
    e.update({
      mode: t.mode,
      paymentMethodTypes: t.payment_method_types,
      setupFutureUsage: t.setup_future_usage,
      amount: t.amount,
      currency: t.currency
    });
  }
  static isStripeHandledFormError(e) {
    const t = e.type === "validation_error", n = e.type === "card_error" && e.code && this.FORM_VALIDATED_CARD_ERROR_CODES.includes(e.code);
    return t || n;
  }
  static createPaymentElement(e, t) {
    return e.create("payment", {
      business: t ? { name: t } : void 0,
      layout: {
        type: "tabs"
      },
      terms: {
        applePay: "never",
        auBecsDebit: "never",
        bancontact: "never",
        card: "never",
        cashapp: "never",
        googlePay: "never",
        ideal: "never",
        paypal: "never",
        sepaDebit: "never",
        sofort: "never",
        usBankAccount: "never"
      }
    });
  }
  /**
   * Whether the given country requires the full billing address to be collected
   * to resolve taxes via Stripe Tax.
   */
  static countryRequiresFullAddressForTaxes(e) {
    return !!e && pt.FULL_ADDRESS_REQUIRED_TAX_COUNTRY_CODES.includes(
      e
    );
  }
  static createAddressElement(e, t) {
    return e.create("address", {
      mode: "billing",
      display: {
        name: "full"
      },
      // Seed the country with the one already selected in the payment element so
      // the full address form opens on the country the customer just picked.
      ...t ? { defaultValues: { address: { country: t } } } : {}
    });
  }
  static createExpressCheckoutElement(e, t, n) {
    const a = {
      billingAddressRequired: !0,
      emailRequired: !0,
      ...t ? {
        paymentMethods: {
          applePay: "always",
          googlePay: "always"
        }
      } : {},
      ...n || {}
    };
    return e.create("expressCheckout", a);
  }
  static createLinkAuthenticationElement(e, t) {
    return e.create("linkAuthentication", {
      defaultValues: {
        email: t ?? ""
      }
    });
  }
  static async submitElements(e) {
    const { error: t } = await e.submit();
    if (t)
      throw this.mapError(t);
  }
  static mapInitializationError(e) {
    return new po(
      0,
      e.code,
      e.message
    );
  }
  static mapError(e) {
    return this.isStripeHandledFormError(e) ? new po(
      1,
      e.code,
      e.message
    ) : new po(
      2,
      e.code,
      e.message
    );
  }
  static async confirmElements(e, t, n, a) {
    const i = {
      clientSecret: n,
      redirect: "if_required"
    }, s = a ? {
      ...i,
      confirmParams: { confirmation_token: a }
    } : {
      ...i,
      elements: t
    }, l = n.startsWith("seti_");
    let c;
    if (l ? c = await e.confirmSetup(s) : c = await e.confirmPayment(s), c != null && c.error)
      throw this.mapError(c.error);
  }
  static async extractTaxCustomerDetails(e, t) {
    var s, l;
    const { error: n, confirmationToken: a } = await t.createConfirmationToken({
      elements: e
    });
    if (n)
      throw this.mapError(n);
    const i = (l = (s = a.payment_method_preview) == null ? void 0 : s.billing_details) == null ? void 0 : l.address;
    return {
      customerDetails: {
        countryCode: (i == null ? void 0 : i.country) ?? void 0,
        postalCode: (i == null ? void 0 : i.postal_code) ?? void 0,
        state: (i == null ? void 0 : i.state) ?? void 0,
        city: (i == null ? void 0 : i.city) ?? void 0,
        addressLine1: (i == null ? void 0 : i.line1) ?? void 0,
        addressLine2: (i == null ? void 0 : i.line2) ?? void 0
      },
      confirmationTokenId: a.id
    };
  }
  static nextDateForPeriod(e, t) {
    return e.unit === Ne.Year ? (t.setFullYear(t.getFullYear() + e.number), t) : e.unit === Ne.Month ? (t.setMonth(t.getMonth() + e.number), t) : e.unit === Ne.Week ? (t.setDate(t.getDate() + e.number * 7), t) : (e.unit === Ne.Day && t.setDate(t.getDate() + e.number), t);
  }
  static applePayPeriod(e) {
    return e.unit === Ne.Week ? {
      recurringPaymentIntervalUnit: "day",
      recurringPaymentIntervalCount: e.number * 7
    } : {
      recurringPaymentIntervalUnit: e.unit,
      recurringPaymentIntervalCount: e.number
    };
  }
  // https://docs.stripe.com/js/elements_object/create_without_intent#stripe_elements_no_intent-options-amount
  static microsToMinimumAmountPrice(e, t) {
    return [
      "BIF",
      "CLP",
      "DJF",
      "GNF",
      "JPY",
      "KMF",
      "KRW",
      "MGA",
      "PYG",
      "RWF",
      "UGX",
      "VND",
      "VUV",
      "XAF",
      "XOF",
      "XPF"
    ].includes(t) ? Math.floor(e / 1e6) : Math.floor(e / 1e4);
  }
  static toExpressCheckoutLineItems(e, t, n) {
    const { currency: a } = t, i = pt.microsToMinimumAmountPrice(
      t.totalAmountInMicros,
      a
    ), s = pt.microsToMinimumAmountPrice(
      n.discountAmountInMicros,
      a
    );
    return [
      {
        name: e,
        amount: i + s
      },
      { name: n.label, amount: -s }
    ];
  }
  static buildStripeExpressCheckoutOptionsForSubscription(e, t, n, a, i, s, l, c, u) {
    var y;
    const d = { maxRows: l, maxColumns: c, overflow: u }, p = s && s.discountAmountInMicros > 0 ? pt.toExpressCheckoutLineItems(
      e.title,
      t,
      s
    ) : void 0, _ = pt.microsToMinimumAmountPrice(
      t.totalAmountInMicros,
      t.currency
    ), f = n.trial, g = (y = n.trial) == null ? void 0 : y.period, w = n.base.period, k = f && g ? pt.nextDateForPeriod(g, /* @__PURE__ */ new Date()) : void 0, h = w ? pt.applePayPeriod(w) : {};
    return {
      layout: d,
      ...p ? { lineItems: p } : {},
      applePay: {
        recurringPaymentRequest: {
          paymentDescription: e.title,
          managementURL: i,
          ...f ? {
            trialBilling: {
              label: a.translate(
                ue.ApplePayFreeTrial
              ),
              amount: 0
            }
          } : {},
          regularBilling: {
            label: e.title,
            amount: _,
            recurringPaymentStartDate: k,
            ...h
          }
        }
      }
    };
  }
  static buildStripeExpressCheckoutOptionsForNonSubscription(e, t, n, a, i, s) {
    const l = { maxRows: a, maxColumns: i, overflow: s }, c = n && n.discountAmountInMicros > 0 ? pt.toExpressCheckoutLineItems(
      e.title,
      t,
      n
    ) : void 0;
    return {
      layout: l,
      ...c ? { lineItems: c } : {}
    };
  }
};
ee(pt, "FORM_VALIDATED_CARD_ERROR_CODES", [
  "card_declined",
  "expired_card",
  "incorrect_cvc",
  "incorrect_number"
]), /**
 * Country codes (ISO 3166-1 alpha-2) that require the full billing address to
 * be collected when tax collection is enabled, because country alone is not
 * enough to resolve the tax rate.
 * See https://docs.stripe.com/tax/customer-locations?#supported-formats
 */
ee(pt, "FULL_ADDRESS_REQUIRED_TAX_COUNTRY_CODES", ["CA", "PR", "IN"]);
let $e = pt;
var UP = /* @__PURE__ */ V("<div></div>");
function VP(r, e) {
  _e(e, !0);
  let t = null;
  const n = "payment-element", a = async (s) => {
    await e.onError($e.mapInitializationError(s.error));
  };
  br(() => {
    var s;
    try {
      t = $e.createPaymentElement(e.elements, (s = e.brandingInfo) == null ? void 0 : s.app_name), t.mount(`#${n}`), t.on("ready", e.onReady), t.on("change", e.onChange), t.on("loaderror", a);
    } catch (l) {
      e.onError($e.mapInitializationError(l));
    }
  }), Tt(() => {
    t == null || t.destroy(), t = null;
  });
  var i = UP();
  he(i, "id", n), x(r, i), ge();
}
var WP = /* @__PURE__ */ V("<div></div>");
function HP(r, e) {
  _e(e, !0);
  let t = null;
  const n = "link-authentication-element", a = async (s) => {
    await e.onError($e.mapInitializationError(s.error));
  };
  br(() => {
    try {
      t = $e.createLinkAuthenticationElement(e.elements, e.email), t.mount(`#${n}`), t.on("ready", e.onReady), t.on("change", e.onChange), t.on("loaderror", a);
    } catch (s) {
      e.onError($e.mapInitializationError(s));
    }
  }), Tt(() => {
    t == null || t.destroy(), t = null;
  });
  var i = WP();
  he(i, "id", n), x(r, i), ge();
}
var YP = /* @__PURE__ */ V('<div class="text-separator svelte-3efq78"><hr class="line svelte-3efq78"/> <span class="text svelte-3efq78"><!></span> <hr class="line svelte-3efq78"/></div>');
const GP = {
  hash: "svelte-3efq78",
  code: `.text-separator.svelte-3efq78 {display:flex;align-items:center;justify-content:center;gap:var(--rc-spacing-gapSmall-mobile);}

  @container layout-query-container (width >= 768px) {.text-separator.svelte-3efq78 {gap:var(--rc-spacing-gapSmall-desktop);}
  }.line.svelte-3efq78 {flex:1;height:1px;background-color:var(--rc-color-grey-ui-dark);border:none;}.text.svelte-3efq78 {color:var(--rc-color-grey-text-light);text-transform:uppercase;white-space:nowrap;}`
};
function KP(r, e) {
  ke(r, GP);
  let t = X(e, "text", 8);
  var n = YP(), a = W(T(n), 2), i = T(a);
  ze(i, {
    size: "caption-default",
    children: (s, l) => {
      var c = je();
      K(() => fe(c, t())), x(s, c);
    },
    $$slots: { default: !0 }
  }), x(r, n);
}
var XP = /* @__PURE__ */ V("<div></div> <!>", 1);
const ZP = {
  hash: "svelte-jy91ia",
  code: ".rcb-express-checkout-hidden.svelte-jy91ia {display:none;}"
};
function U_(r, e) {
  _e(e, !0), ke(r, ZP);
  const t = () => Be(l, "$translator", n), [n, a] = Ze(), i = X(e, "hideCheckoutSeparator", 3, !1), s = X(e, "allowExpressCheckout", 3, !0), l = He(fr);
  let c = null, u = /* @__PURE__ */ re(!1);
  const d = `express-checkout-element-${An()}`, p = async () => {
    e.onCancel && e.onCancel();
  }, _ = async (P) => {
    if (!s())
      return;
    const { business: I, ...E } = e.expressCheckoutOptions ?? {};
    e.onClick && e.onClick(P), P.resolve(E);
  }, f = async (P) => {
    await e.onError($e.mapInitializationError(P.error));
  }, g = async (P) => {
    var I;
    return e.onSubmit(P.expressPaymentType, ((I = P.billingDetails) == null ? void 0 : I.email) ?? "", P);
  }, w = async (P) => {
    q(u, !P.availablePaymentMethods), e.onReady && e.onReady(P);
  };
  br(() => {
    try {
      c = $e.createExpressCheckoutElement(e.elements, e.forceEnableWalletMethods, e.expressCheckoutOptions), c.mount(`#${d}`), c.on("ready", w), c.on("confirm", g), c.on("loaderror", f), c.on("click", _), c.on("cancel", p);
    } catch (P) {
      e.onError($e.mapInitializationError(P));
    }
  }), Tt(() => {
    c == null || c.destroy(), c = null;
  });
  var k = XP(), h = ce(k);
  let y;
  var b = W(h, 2);
  {
    var v = (P) => {
      {
        let I = /* @__PURE__ */ m(() => t().translate(ue.PaymentEntryPageExpressCheckoutDivider));
        KP(P, {
          get text() {
            return o(I);
          }
        });
      }
    };
    G(b, (P) => {
      !i() && s() && !o(u) && P(v);
    });
  }
  K(() => {
    he(h, "id", d), he(h, "aria-hidden", !s() || o(u)), y = ur(h, 1, "svelte-jy91ia", null, y, {
      "rcb-express-checkout-hidden": !s() || o(u)
    });
  }), x(r, k), ge(), a();
}
var JP = /* @__PURE__ */ V("<div></div>");
function QP(r, e) {
  _e(e, !0);
  let t = null;
  const n = "address-element";
  let a = null, i = null;
  const s = async (d) => {
    await e.onError($e.mapInitializationError(d.error));
  }, l = async (d) => {
    const { complete: p } = d, _ = d.value.address, f = p !== a, g = !c(i, _);
    !f && !g || (a = p, i = _, await e.onChange(p, _));
  }, c = (d, p) => (d == null ? void 0 : d.country) === p.country && (d == null ? void 0 : d.postal_code) === p.postal_code && (d == null ? void 0 : d.state) === p.state && (d == null ? void 0 : d.city) === p.city && (d == null ? void 0 : d.line1) === p.line1 && (d == null ? void 0 : d.line2) === p.line2;
  br(() => {
    try {
      t = $e.createAddressElement(e.elements, e.defaultCountryCode), t.mount(`#${n}`), t.on("ready", e.onReady), t.on("change", l), t.on("loaderror", s);
    } catch (d) {
      e.onError($e.mapInitializationError(d));
    }
  }), Tt(() => {
    t == null || t.destroy(), t = null;
  });
  var u = JP();
  he(u, "id", n), x(r, u), ge();
}
var $P = /* @__PURE__ */ V('<div class="rc-elements svelte-kvz7kd"><!> <!> <!> <!></div>');
const e1 = {
  hash: "svelte-kvz7kd",
  code: `.rc-elements.svelte-kvz7kd {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rc-elements.svelte-kvz7kd {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
};
function r1(r, e) {
  _e(e, !0), ke(r, e1);
  const t = () => Be(c, "$translator", n), [n, a] = Ze();
  let i = X(e, "stripe", 15, null), s = X(e, "elements", 15, null), l = X(e, "allowExpressCheckout", 3, !0);
  const c = He(fr), u = $e.getStripeLocale(t().bcp47Locale || t().fallbackBcp47Locale);
  let d = /* @__PURE__ */ re(void 0), p = /* @__PURE__ */ re(rr(lo(e.brandingInfo)));
  ar(() => {
    lo(e.brandingInfo, $e.countryRequiresFullAddressForTaxes(o(d))) && q(p, !0);
  });
  let _ = /* @__PURE__ */ re(!1), f = /* @__PURE__ */ re(rr(e.skipEmail)), g = /* @__PURE__ */ re(!1), w = /* @__PURE__ */ re(!lo(e.brandingInfo)), k = /* @__PURE__ */ re(void 0), h = /* @__PURE__ */ re("mobile"), y = /* @__PURE__ */ re(void 0);
  function b() {
    window.matchMedia && window.matchMedia("(max-width: 767px)").matches ? q(h, "mobile") : q(h, "desktop"), q(
      k,
      {
        // Floating labels size cannot be overriden in Stripe since `!important` is being used.
        // There we set fontSizeBase to the desired label size
        // and update the input font size to 16px.
        fontSizeBase: "14px",
        fontFamily: ko,
        // Spacing is hardcoded to 16px to match the desired gaps in mobile/desktop
        // which do not match the design system spacing. Also we cannot use "rem" units
        // since the fontSizeBase is set to 14px per the comment above.
        spacingGridRow: "16px"
      },
      !0
    );
  }
  function v() {
    clearTimeout(o(y)), q(
      y,
      setTimeout(
        () => {
          b();
        },
        150
      ),
      !0
    );
  }
  const P = (M) => {
    e.onError(M), e.onLoadingComplete();
  }, I = () => {
    o(f) && o(_) && o(g) && o(w) && e.onLoadingComplete();
  }, E = async () => {
    o(f) || (q(f, !0), I());
  }, C = async () => {
    o(g) || (q(g, !0), I());
  }, S = async () => {
    o(_) || (q(_, !0), I());
  }, F = async () => {
    o(w) || (q(w, !0), I());
  }, D = async (M, A) => {
    e.onAddressInfoChange(M, A);
  }, O = async (M) => {
    var U, j;
    const A = (j = (U = M.value.billingDetails) == null ? void 0 : U.address) == null ? void 0 : j.country;
    A && q(d, A, !0), e.onPaymentInfoChange({
      complete: M.complete,
      paymentMethod: M.complete ? M.value.type : void 0,
      countryCode: o(d)
    });
  }, N = async (M) => {
    e.onEmailChange(M.complete, M.value.email);
  };
  br(() => (window.addEventListener("resize", v), () => {
    window.removeEventListener("resize", v);
  })), br(async () => {
    b(), !i() && (s() || !e.stripeAccountId || !e.publishableApiKey || !e.elementsConfiguration || await $e.initializeStripe(e.stripeAccountId, e.publishableApiKey, e.elementsConfiguration, e.brandingInfo, u, o(k), o(h)).then(({ stripe: M, elements: A }) => {
      i(M), s(A);
    }).catch((M) => {
      e.onError(M);
    }));
  }), ar(() => {
    e.elementsConfiguration && s() && $e.updateElementsConfiguration(s(), e.elementsConfiguration);
  });
  var L = Ee(), Z = ce(L);
  {
    var z = (M) => {
      var A = $P(), U = T(A);
      U_(U, {
        get elements() {
          return s();
        },
        onError: P,
        onReady: C,
        get onSubmit() {
          return e.onExpressCheckoutElementSubmit;
        },
        get expressCheckoutOptions() {
          return e.expressCheckoutOptions;
        },
        get forceEnableWalletMethods() {
          return e.forceEnableWalletMethods;
        },
        get allowExpressCheckout() {
          return l();
        }
      });
      var j = W(U, 2);
      {
        var R = (le) => {
          HP(le, {
            get elements() {
              return s();
            },
            onReady: E,
            onChange: N,
            onError: P
          });
        };
        G(j, (le) => {
          e.skipEmail || le(R);
        });
      }
      var Q = W(j, 2);
      VP(Q, {
        get elements() {
          return s();
        },
        get brandingInfo() {
          return e.brandingInfo;
        },
        onReady: S,
        onChange: O,
        onError: P
      });
      var se = W(Q, 2);
      {
        var te = (le) => {
          QP(le, {
            get elements() {
              return s();
            },
            get defaultCountryCode() {
              return o(d);
            },
            onReady: F,
            onChange: D,
            onError: P
          });
        };
        G(se, (le) => {
          o(p) && le(te);
        });
      }
      x(M, A);
    };
    G(Z, (M) => {
      s() && M(z);
    });
  }
  x(r, L), ge(), a();
}
const t1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 6.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 4.5a1.25 1.25 0 10-2.5 0v4.5a1.25 1.25 0 102.5 0v-4.5z" clip-rule="evenodd" />
</svg> `;
var n1 = /* @__PURE__ */ V('<div class="rcb-ui-asset-icon svelte-a15aei"><!></div>');
const a1 = {
  hash: "svelte-a15aei",
  code: ".rcb-ui-asset-icon.svelte-a15aei {display:inline-block;width:1em;height:1em;}"
};
function V_(r) {
  ke(r, a1);
  var e = n1(), t = T(e);
  pn(t, () => t1), x(r, e);
}
var o1 = /* @__PURE__ */ V('<div class="rcb-info svelte-jea5iu"><div class="rcb-info-icon-wrapper svelte-jea5iu"><!></div> <div class="rcb-info-content svelte-jea5iu"><div class="rcb-info-title svelte-jea5iu"><!></div> <div class="rcb-info-message svelte-jea5iu"><!></div></div></div>');
const i1 = {
  hash: "svelte-jea5iu",
  code: `.rcb-info.svelte-jea5iu {display:flex;align-items:flex-start;background-color:var(--rc-color-grey-ui-light);border-radius:var(--rc-shape-input-border-radius);gap:var(--rc-spacing-gapLarge-mobile);padding:var(--rc-spacing-gapLarge-mobile);}.rcb-info-content.svelte-jea5iu {flex:1;}.rcb-info-icon-wrapper.svelte-jea5iu {flex-shrink:0;color:var(--rc-color-accent-primary);}.rcb-info-title.svelte-jea5iu {color:var(--rc-color-grey-text-dark);margin-bottom:var(--rc-spacing-gapSmall-mobile);display:flex;}.rcb-info-message.svelte-jea5iu {color:var(--rc-color-grey-text-light);}

  @container layout-query-container (width >= 768px) {.rcb-info.svelte-jea5iu {gap:var(--rc-spacing-gapLarge-desktop);padding:var(--rc-spacing-gapLarge-desktop);}.rcb-info-title.svelte-jea5iu {margin-bottom:var(--rc-spacing-gapSmall-desktop);}
  }`
};
function s1(r, e) {
  ke(r, i1);
  var t = o1(), n = T(t), a = T(n);
  V_(a);
  var i = W(n, 2), s = T(i), l = T(s);
  ze(l, {
    size: "body-small",
    children: (d, p) => {
      var _ = je();
      K(() => fe(_, e.title)), x(d, _);
    },
    $$slots: { default: !0 }
  });
  var c = W(s, 2), u = T(c);
  ze(u, {
    size: "body-small",
    children: (d, p) => {
      var _ = je();
      K(() => fe(_, e.message)), x(d, _);
    },
    $$slots: { default: !0 }
  }), x(r, t);
}
function l1(r, e) {
  _e(e, !0);
  const t = () => Be(i, "$translator", n), [n, a] = Ze(), i = He(fr);
  {
    let s = /* @__PURE__ */ m(() => t().translate(ue.PriceUpdateTitle)), l = /* @__PURE__ */ m(() => {
      var c;
      return t().translate((c = e.subscriptionOption) != null && c.trial ? ue.PriceUpdateTrialMessage : ue.PriceUpdateBaseMessage);
    });
    s1(r, {
      get title() {
        return o(s);
      },
      get message() {
        return o(l);
      }
    });
  }
  ge(), a();
}
function wo(r, e) {
  var n, a, i;
  if (r.productType === "subscription") {
    const s = e, l = ((n = s.discount) == null ? void 0 : n.price) ?? ((a = s.introPrice) == null ? void 0 : a.price) ?? s.base.price;
    if (l)
      return l;
  } else {
    const s = e;
    return ((i = s.discount) == null ? void 0 : i.price) ?? s.basePrice;
  }
  return r.price;
}
function c1(r, e) {
  if (!r || !e)
    return !1;
  const t = bo(r), n = bo(e);
  return t > 0 && n > t;
}
function Di(r) {
  return `${r}% off`;
}
function El(r, e, t, n) {
  if (!c1(t, e))
    return Di(r);
  const a = n.translatePeriod(
    e.number,
    e.unit
  );
  return `${r}% off for ${a}`;
}
function u1(r) {
  return r.durationMode === "time_window" && r.timeWindow ? No(r.timeWindow) : r.durationMode === "time_window" && r.period && r.cycleCount > 0 ? {
    number: r.period.number * r.cycleCount,
    unit: r.period.unit
  } : null;
}
function W_(r, e, t) {
  return r.percentage == null ? null : r.durationMode === "time_window" ? El(
    r.percentage,
    u1(r),
    e,
    t
  ) : Di(r.percentage);
}
function d1({
  appliedDiscount: r,
  purchaseOptionDiscount: e,
  basePeriod: t,
  translator: n
}) {
  const a = r.percentage;
  if (a == null)
    return null;
  if (r.durationMode === "time_window" && r.timeWindow)
    return El(
      a,
      No(r.timeWindow),
      t,
      n
    );
  if (!e || e.durationMode !== "time_window")
    return Di(a);
  const i = e.period;
  return !i || e.cycleCount <= 0 ? Di(a) : El(
    a,
    {
      number: i.number * e.cycleCount,
      unit: i.unit
    },
    t,
    n
  );
}
function H_(r, e, t) {
  const n = (r == null ? void 0 : r.trim()) || t;
  return e ? `${n} (${e})` : n;
}
function p1(r, e, t, n, a) {
  const i = W_(
    e,
    t,
    n
  );
  return H_(r, i, a);
}
function _1({
  priceBreakdown: r,
  purchaseOptionDiscount: e,
  fullPriceMicros: t,
  basePeriod: n,
  translator: a,
  fallbackDiscountName: i
}) {
  var p, _;
  const s = (p = r.appliedDiscounts) == null ? void 0 : p[0];
  if (s && s.discountedAmountInMicros > 0) {
    const f = d1({
      appliedDiscount: s,
      purchaseOptionDiscount: e,
      basePeriod: n,
      translator: a
    }), g = s.displayName;
    return {
      discountAmountInMicros: s.discountedAmountInMicros,
      displayName: (g == null ? void 0 : g.trim()) || i,
      suffix: f,
      label: H_(
        g,
        f,
        i
      )
    };
  }
  if (!e) return null;
  const l = (_ = e.price) == null ? void 0 : _.amountMicros;
  if (l == null) return null;
  const c = t - l;
  if (c <= 0) return null;
  const u = W_(
    e,
    n,
    a
  ), d = e.name;
  return {
    discountAmountInMicros: c,
    displayName: (d == null ? void 0 : d.trim()) || i,
    suffix: u,
    label: p1(
      d,
      e,
      n,
      a,
      i
    )
  };
}
function mc({
  priceBreakdown: r,
  productDetails: e,
  purchaseOption: t,
  translator: n
}) {
  var d;
  const a = e.productType === Ur.Subscription, i = a ? t : null, s = a ? null : t, l = (i == null ? void 0 : i.discount) ?? (s == null ? void 0 : s.discount) ?? null, c = a ? ((d = i == null ? void 0 : i.base.price) == null ? void 0 : d.amountMicros) ?? e.price.amountMicros : (s == null ? void 0 : s.basePrice.amountMicros) ?? e.price.amountMicros, u = a ? i == null ? void 0 : i.base.period : null;
  return _1({
    priceBreakdown: r,
    purchaseOptionDiscount: l,
    fullPriceMicros: c,
    basePeriod: u,
    translator: n,
    fallbackDiscountName: n.translate(
      ue.PricingTableDiscount
    )
  });
}
class nd extends Error {
}
const g1 = 500;
var f1 = /* @__PURE__ */ V('<div class="rc-loading svelte-zfhfge"><!></div>'), m1 = /* @__PURE__ */ V('<div class="rc-checkout-container svelte-zfhfge"><!> <!> <form data-testid="payment-form" class="rc-checkout-form svelte-zfhfge"><div><div class="rc-elements-container svelte-zfhfge"><!></div> <div><!></div> <div><!> <!> <div class="rc-checkout-secure-container svelte-zfhfge"><!></div></div></div></form></div>');
const h1 = {
  hash: "svelte-zfhfge",
  code: `.rc-checkout-secure-container.svelte-zfhfge {margin-top:var(--rc-spacing-gapXLarge-mobile);}.rc-checkout-container.svelte-zfhfge {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);user-select:none;position:relative;}.rc-checkout-price-update-info-container.svelte-zfhfge {margin-top:var(--rc-spacing-gapXLarge-mobile);}.fully-hidden.svelte-zfhfge {display:none;height:0;}.rc-checkout-pay-container.svelte-zfhfge {display:flex;flex-direction:column;margin-top:var(--rc-spacing-gapXLarge-mobile);}.rc-checkout-pay-container.fully-hidden.svelte-zfhfge {display:none;}.rc-checkout-form-container.svelte-zfhfge {width:100%;}.rc-elements-container.svelte-zfhfge {
    /* The standard height of the payment form from Stripe */
    /* Added to avoid the card getting smaller while loading */min-height:210px;}.rc-checkout-form-container.invisible.svelte-zfhfge {visibility:hidden;}.rc-loading.svelte-zfhfge {width:100%;height:100%;display:flex;justify-content:center;align-items:center;}

  @container layout-query-container (width <= 767px) {.rc-checkout-pay-container.svelte-zfhfge {flex-grow:1;justify-content:flex-end;}.rc-checkout-form.svelte-zfhfge {flex-grow:1;}.rc-checkout-form-container.svelte-zfhfge {height:100%;display:flex;flex-direction:column;}.rc-checkout-container.svelte-zfhfge {flex-grow:1;}.rc-loading.svelte-zfhfge {position:absolute;top:0;left:0;}
  }

  @container layout-query-container (width >= 768px) {.rc-checkout-secure-container.svelte-zfhfge {margin-top:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-container.svelte-zfhfge {gap:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-pay-container.svelte-zfhfge {margin-top:var(--rc-spacing-gapXLarge-desktop);}.rc-checkout-price-update-info-container.svelte-zfhfge {margin-top:var(--rc-spacing-gapXLarge-desktop);}
  }form.svelte-zfhfge {display:flex;flex-direction:column;flex-grow:1;}`
};
function v1(r, e) {
  var xc, Ec, Sc, Ic, Cc, Tc, Dc, Ac;
  _e(e, !0), ke(r, h1);
  const t = () => Be(u, "$translator", n), [n, a] = Ze();
  let i = X(e, "onSessionPricingUpdated", 3, void 0), s = X(e, "onProcessingStateChange", 3, void 0), l = X(e, "lastTaxCustomerDetailsStore", 19, () => mr(null));
  const c = He(Uo), u = He(fr), d = /* @__PURE__ */ m(() => "base" in e.purchaseOption ? e.purchaseOption : null), p = /* @__PURE__ */ m(() => wo(e.productDetails, e.purchaseOption));
  let _ = /* @__PURE__ */ re(rr(((xc = e.defaultPriceBreakdown) == null ? void 0 : xc.taxCalculationStatus) ?? ((Ec = e.brandingInfo) != null && Ec.gateway_tax_collection_enabled ? "unavailable" : "disabled"))), f = /* @__PURE__ */ re(rr(((Sc = e.defaultPriceBreakdown) == null ? void 0 : Sc.originalAmountInMicros) ?? o(p).amountMicros)), g = /* @__PURE__ */ re(rr(((Ic = e.defaultPriceBreakdown) == null ? void 0 : Ic.taxAmountInMicros) ?? null)), w = /* @__PURE__ */ re(rr(((Cc = e.defaultPriceBreakdown) == null ? void 0 : Cc.taxBreakdown) ?? null)), k = /* @__PURE__ */ re(rr(((Tc = e.defaultPriceBreakdown) == null ? void 0 : Tc.totalExcludingTaxInMicros) ?? o(p).amountMicros)), h = /* @__PURE__ */ re(rr(((Dc = e.defaultPriceBreakdown) == null ? void 0 : Dc.totalAmountInMicros) ?? o(p).amountMicros)), y = /* @__PURE__ */ re(rr(((Ac = e.defaultPriceBreakdown) == null ? void 0 : Ac.appliedDiscounts) ?? [])), b = /* @__PURE__ */ m(() => ({
    currency: o(p).currency,
    originalAmountInMicros: o(f),
    totalAmountInMicros: o(h),
    totalExcludingTaxInMicros: o(k),
    taxCalculationStatus: o(_),
    taxAmountInMicros: o(g),
    taxBreakdown: o(w),
    appliedDiscounts: o(y)
  })), v = /* @__PURE__ */ re(rr(e.gatewayParams.elements_configuration)), P = /* @__PURE__ */ re(null), I = /* @__PURE__ */ re(null), E = /* @__PURE__ */ re(rr(e.customerEmail ?? void 0)), C = /* @__PURE__ */ re(rr(!!e.customerEmail)), S = /* @__PURE__ */ re(!0), F = /* @__PURE__ */ re(!1), D = /* @__PURE__ */ re(void 0), O = /* @__PURE__ */ re(!1), N = /* @__PURE__ */ re(rr(lo(e.brandingInfo)));
  ar(() => {
    lo(e.brandingInfo, $e.countryRequiresFullAddressForTaxes(o(D))) && q(N, !0);
  });
  const L = /* @__PURE__ */ m(() => !o(N) || o(O));
  let Z = /* @__PURE__ */ re(void 0), z = /* @__PURE__ */ re(void 0), M = /* @__PURE__ */ re(void 0), A = /* @__PURE__ */ re(!1), U = /* @__PURE__ */ re(null), j = null, R = /* @__PURE__ */ m(() => o(S) || o(A) ? "loading" : o(z) ? "error" : "form"), Q = /* @__PURE__ */ re("unavailable"), se = null, te = /* @__PURE__ */ m(() => $w({
    brandingInfo: e.brandingInfo,
    termsAndConditionsUrl: e.termsAndConditionsUrl,
    productDetails: e.productDetails
  })), le = /* @__PURE__ */ re(!1), ae = /* @__PURE__ */ m(() => !o(A) && o(F) && o(C) && o(L) && (!o(te) || o(le)) && (o(_) === "disabled" || o(_) === "calculated" || o(_) === "miss-match")), Y = /* @__PURE__ */ m(() => mc({
    priceBreakdown: o(b),
    productDetails: e.productDetails,
    purchaseOption: e.purchaseOption,
    translator: t()
  })), $ = /* @__PURE__ */ m(() => o(b) && (e.productDetails.productType === Ur.Subscription ? o(d) && e.managementUrl ? $e.buildStripeExpressCheckoutOptionsForSubscription(e.productDetails, o(b), o(d), t(), e.managementUrl, o(Y)) : void 0 : e.productDetails.defaultNonSubscriptionOption ? $e.buildStripeExpressCheckoutOptionsForNonSubscription(e.productDetails, o(b), o(Y)) : void 0));
  ar(() => {
    e.onPriceBreakdownUpdated(o(b));
  });
  function oe(ne) {
    q(_, ne.taxCalculationStatus, !0), q(f, ne.originalAmountInMicros ?? o(p).amountMicros, !0), q(g, ne.taxAmountInMicros, !0), q(w, ne.taxBreakdown, !0), q(k, ne.totalExcludingTaxInMicros, !0), q(h, ne.totalAmountInMicros, !0), q(y, ne.appliedDiscounts ?? [], !0);
  }
  ar(() => {
    e.defaultPriceBreakdown || (q(f, o(p).amountMicros, !0), q(g, null), q(w, null), q(k, o(p).amountMicros, !0), q(h, o(p).amountMicros, !0), q(y, [], !0));
  }), ar(() => {
    e.defaultPriceBreakdown && oe(e.defaultPriceBreakdown);
  }), ar(() => {
    q(v, e.gatewayParams.elements_configuration, !0);
  }), ar(() => {
    var ne;
    (ne = s()) == null || ne(o(A));
  }), br(async () => {
    o(_) === "unavailable" && await B(null).catch(_r);
  }), Tt(() => {
    j && (clearTimeout(j), j = null), o(U) && (o(U).abort(), q(U, null));
  });
  async function B(ne, Ae) {
    await e.purchaseOperationHelper.checkoutRefreshPricing({
      countryCode: ne == null ? void 0 : ne.countryCode,
      postalCode: ne == null ? void 0 : ne.postalCode,
      state: ne == null ? void 0 : ne.state,
      city: ne == null ? void 0 : ne.city,
      addressLine1: ne == null ? void 0 : ne.addressLine1,
      addressLine2: ne == null ? void 0 : ne.addressLine2,
      signal: Ae
    }).then((Ve) => {
      const ir = A_({ taxCalculation: Ve, taxCustomerDetails: ne });
      c.trackSDKEvent(ir), Ae == null || Ae.throwIfAborted();
      let $t;
      Ve.failed_reason ? !ne && Ve.failed_reason === tn.invalid_tax_location ? $t = "pending" : $t = "disabled" : $t = "calculated", de(Ve, $t, ne);
    });
  }
  function de(ne, Ae, Ve) {
    const ir = qp(ne, Ae);
    oe(ir), i() ? i()(ne, ir) : q(v, ne.gateway_params.elements_configuration, !0), se = Ve, J(Ve);
  }
  function J(ne) {
    ne != null && ne.countryCode && wi(l(), ne);
  }
  function ie() {
    c.trackSDKEvent({
      eventName: Vr.CheckoutPaymentFormImpression,
      properties: { mode: Xr }
    }), q(S, !1);
  }
  function Ie(ne, Ae) {
    q(E, Ae, !0), q(C, ne, !0), Se();
  }
  function we({ complete: ne, paymentMethod: Ae, countryCode: Ve }) {
    q(Z, Ae, !0), q(F, ne, !0), q(D, Ve, !0), Se();
  }
  function xe(ne, Ae) {
    q(O, ne, !0), J({
      countryCode: Ae.country ?? void 0,
      postalCode: Ae.postal_code ?? void 0,
      state: Ae.state ?? void 0,
      city: Ae.city ?? void 0,
      addressLine1: Ae.line1 ?? void 0,
      addressLine2: Ae.line2 ?? void 0
    }), Se();
  }
  function Se() {
    Ce() && o(_) !== "loading" && (q(Q, o(_), !0), q(_, "loading")), j && clearTimeout(j), j = setTimeout(
      () => {
        j = null, Te();
      },
      g1
    );
  }
  async function Ue(ne) {
    if (ne == null || ne.preventDefault(), o(A) || o(te) && !o(le)) return;
    const Ae = F_({ selectedPaymentMethod: o(Z) ?? null });
    c.trackSDKEvent(Ae), q(A, !0), await Pe() ? e.onContinue() : q(A, !1);
  }
  async function ye(ne, Ae) {
    q(Z, ne, !0), q(E, e.customerEmail ?? Ae, !0), await Ue();
  }
  function Ce() {
    return o(Z) === "card" && o(C) && o(F) && o(L) && !o(A) && o(_) !== "disabled";
  }
  async function Te() {
    if (!Ce()) {
      o(_) === "loading" && q(_, o(Q), !0);
      return;
    }
    o(_) !== "loading" && (q(Q, o(_), !0), q(_, "loading")), await De(async (ne) => {
      await Ye().then(() => ne.throwIfAborted()).then(() => Ke(ne)).then(() => ne.throwIfAborted()).catch((Ae) => {
        ne.aborted || _r(Ae);
      }).finally(() => {
        o(_) === "loading" && !ne.aborted && q(_, o(Q), !0);
      });
    });
  }
  async function Pe() {
    return await De(async (ne) => {
      const Ae = o(h);
      let Ve;
      return await Ye().then(() => ne.throwIfAborted()).then(() => Ke(ne)).then((ir) => {
        Ve = ir;
      }).then(() => ne.throwIfAborted()).then(pe(Ae)).then(() => ne.throwIfAborted()).then(Le).then(() => ne.throwIfAborted()).then(() => or(Ve)).then(() => ne.throwIfAborted()).then(() => !0).catch((ir) => (ne.aborted || _r(ir), !1));
    });
  }
  async function De(ne) {
    o(U) && o(U).abort(), q(U, new AbortController(), !0);
    const Ae = o(U).signal;
    try {
      return await ne(Ae);
    } catch (Ve) {
      if (Ve instanceof DOMException && Ve.name === "AbortError")
        return Promise.resolve(void 0);
      throw Ve;
    }
  }
  async function Ye() {
    o(I) && await $e.submitElements(o(I));
  }
  async function Ke(ne) {
    if (o(_) === "unavailable" || o(_) === "disabled" || !o(I) || !o(P))
      return;
    const {
      customerDetails: Ae,
      confirmationTokenId: Ve
    } = await $e.extractTaxCustomerDetails(o(I), o(P));
    ne == null || ne.throwIfAborted();
    const ir = se;
    return Ae.postalCode === (ir == null ? void 0 : ir.postalCode) && Ae.countryCode === (ir == null ? void 0 : ir.countryCode) && Ae.state === (ir == null ? void 0 : ir.state) && Ae.city === (ir == null ? void 0 : ir.city) && Ae.addressLine1 === (ir == null ? void 0 : ir.addressLine1) && Ae.addressLine2 === (ir == null ? void 0 : ir.addressLine2) || await B(Ae, ne), Ve && o(Z) !== "card" ? Ve : void 0;
  }
  function pe(ne) {
    return () => {
      if (o(h) !== ne)
        throw new nd();
    };
  }
  async function Le() {
    var Ve;
    const ne = await e.purchaseOperationHelper.checkoutComplete(o(E), t().selectedLocale), Ae = (Ve = ne == null ? void 0 : ne.gateway_params) == null ? void 0 : Ve.client_secret;
    Ae && q(M, Ae, !0);
  }
  async function or(ne) {
    !o(P) || !o(I) || !o(M) || await $e.confirmElements(o(P), o(I), o(M), ne);
  }
  async function _r(ne) {
    if (ne instanceof nd)
      q(_, "miss-match");
    else if (ne instanceof ve) {
      const Ae = rP({
        errorCode: ne.errorCode.toString(),
        errorMessage: ne.message
      });
      c.trackSDKEvent(Ae), ne.errorCode === me.MissingEmailError ? q(z, t().translate(ue.ErrorPageErrorMessageInvalidEmailError, { email: o(E) }), !0) : e.onError(ne);
    } else if (ne instanceof po)
      await Ar(ne);
    else
      throw ne;
  }
  async function Ar(ne) {
    const Ae = kl({
      errorCode: ne.gatewayErrorCode ?? "",
      errorMessage: ne.message ?? ""
    });
    c.trackSDKEvent(Ae), ne.code === xl.HandledFormError || (ne.code === xl.UnhandledFormError ? q(z, ne.message, !0) : e.onError(new ve(me.ErrorSettingUpPurchase, "Failed to initialize payment form", ne.message)));
  }
  const ut = () => {
    q(z, void 0);
  };
  var Qt = m1(), fa = T(Qt);
  {
    var ss = (ne) => {
      var Ae = f1(), Ve = T(Ae);
      q_(Ve), x(ne, Ae);
    };
    G(fa, (ne) => {
      o(R) === "loading" && ne(ss);
    });
  }
  var tr = W(fa, 2);
  {
    var wr = (ne) => {
      {
        const Ae = ($t) => {
          Bp($t);
        }, Ve = ($t) => {
          var cs = je();
          K(() => fe(cs, o(z))), x($t, cs);
        };
        let ir = /* @__PURE__ */ m(() => t().translate(ue.ErrorButtonTryAgain));
        uc(ne, {
          title: null,
          type: "error",
          get closeButtonTitle() {
            return o(ir);
          },
          onDismiss: ut,
          icon: Ae,
          message: Ve,
          $$slots: { icon: !0, message: !0 }
        });
      }
    };
    G(tr, (ne) => {
      o(R) === "error" && ne(wr);
    });
  }
  var _n = W(tr, 2), Vo = T(_n);
  let ma;
  var dt = T(Vo), Ja = T(dt);
  {
    let ne = /* @__PURE__ */ m(() => !!e.customerEmail), Ae = /* @__PURE__ */ m(() => !o(te) || o(le));
    r1(Ja, {
      get stripeAccountId() {
        return e.gatewayParams.stripe_account_id;
      },
      get publishableApiKey() {
        return e.gatewayParams.publishable_api_key;
      },
      get elementsConfiguration() {
        return o(v);
      },
      get brandingInfo() {
        return e.brandingInfo;
      },
      get forceEnableWalletMethods() {
        return e.forceEnableWalletMethods;
      },
      get skipEmail() {
        return o(ne);
      },
      onLoadingComplete: ie,
      onError: Ar,
      onEmailChange: Ie,
      onPaymentInfoChange: we,
      onAddressInfoChange: xe,
      onExpressCheckoutElementSubmit: ye,
      get expressCheckoutOptions() {
        return o($);
      },
      get allowExpressCheckout() {
        return o(Ae);
      },
      get stripe() {
        return o(P);
      },
      set stripe(Ve) {
        q(P, Ve, !0);
      },
      get elements() {
        return o(I);
      },
      set elements(Ve) {
        q(I, Ve, !0);
      }
    });
  }
  var ls = W(dt, 2);
  let yc;
  var Tg = T(ls);
  l1(Tg, {
    get subscriptionOption() {
      return o(d);
    }
  });
  var bc = W(ls, 2);
  let kc;
  var wc = T(bc);
  {
    var Dg = (ne) => {
      {
        let Ae = /* @__PURE__ */ m(() => {
          var Ve;
          return (Ve = e.brandingInfo) == null ? void 0 : Ve.app_name;
        });
        Qw(ne, {
          get appName() {
            return o(Ae);
          },
          get termsAndConditionsUrl() {
            return e.termsAndConditionsUrl;
          },
          onChange: (Ve) => q(le, Ve, !0),
          get checked() {
            return o(le);
          },
          set checked(Ve) {
            q(le, Ve, !0);
          }
        });
      }
    };
    G(wc, (ne) => {
      o(te) && e.termsAndConditionsUrl && ne(Dg);
    });
  }
  var Pc = W(wc, 2);
  {
    let ne = /* @__PURE__ */ m(() => !o(ae)), Ae = /* @__PURE__ */ m(() => {
      var Ve;
      return (Ve = e.brandingInfo) != null && Ve.gateway_tax_collection_enabled ? o(b) : void 0;
    });
    cP(Pc, {
      get disabled() {
        return o(ne);
      },
      get subscriptionOption() {
        return o(d);
      },
      get priceBreakdown() {
        return o(Ae);
      }
    });
  }
  var Ag = W(Pc, 2), Fg = T(Ag);
  Kw(Fg, {
    get brandingInfo() {
      return e.brandingInfo;
    },
    get purchaseOption() {
      return e.purchaseOption;
    },
    get termsAndConditionsUrl() {
      return e.termsAndConditionsUrl;
    }
  }), K(() => {
    ma = ur(Vo, 1, "rc-checkout-form-container svelte-zfhfge", null, ma, { invisible: o(R) !== "form" }), yc = ur(ls, 1, "rc-checkout-price-update-info-container svelte-zfhfge", null, yc, {
      "fully-hidden": o(_) !== "miss-match" || o(R) !== "form"
    }), kc = ur(bc, 1, "rc-checkout-pay-container svelte-zfhfge", null, kc, { "fully-hidden": o(R) !== "form" });
  }), qr("submit", _n, Ue), x(r, Qt), ge(), a();
}
var y1 = /* @__PURE__ */ Cr('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" class="arrow-fill svelte-1eerlbf" fill-opacity="0.7"></path></svg>');
const b1 = {
  hash: "svelte-1eerlbf",
  code: ".arrow.svelte-1eerlbf {transition:transform 0.3s ease;}.arrow-fill.svelte-1eerlbf {fill:var(--rc-color-grey-text-dark);}.arrow.left.svelte-1eerlbf {transform:rotate(90deg);}.arrow.up.svelte-1eerlbf {transform:rotate(180deg);}.arrow.right.svelte-1eerlbf {transform:rotate(-90deg);}.arrow.down.svelte-1eerlbf {transform:rotate(0deg);}"
};
function ni(r, e) {
  ke(r, b1);
  let t = X(e, "direction", 8);
  var n = y1();
  K(() => ur(n, 0, `arrow ${t() ?? ""}`, "svelte-1eerlbf")), x(r, n);
}
var k1 = /* @__PURE__ */ Cr('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow"><path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" class="arrow-fill svelte-159d2rl" fill-opacity="0.7"></path></svg>');
const w1 = {
  hash: "svelte-159d2rl",
  code: ".arrow-fill.svelte-159d2rl {fill:var(--rc-color-grey-text-dark);}"
};
function P1(r) {
  ke(r, w1);
  var e = k1();
  x(r, e);
}
const x1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
     xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5" clip-path="url(#clip0_344_3390)">
        <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
              fill="currentColor"/>
    </g>
    <defs>
        <clipPath id="clip0_344_3390">
            <rect width="24" height="24" fill="currentColor"/>
        </clipPath>
    </defs>
</svg>
`;
var E1 = /* @__PURE__ */ V('<div style="color:var(--rc-color-gray-text-dark);"><!></div>');
function S1(r) {
  var e = E1(), t = T(e);
  pn(t, () => x1), x(r, e);
}
const I1 = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
     xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
          fill="currentColor"/>
</svg>
`;
var C1 = /* @__PURE__ */ V('<div style="color:var(--rc-color-accent);" class="rcb-ui-asset-icon svelte-1dhcigx"><!></div>');
const T1 = {
  hash: "svelte-1dhcigx",
  code: "div.svelte-1dhcigx {height:24px;width:24px;}"
};
function D1(r) {
  ke(r, T1);
  var e = C1(), t = T(e);
  pn(t, () => I1), x(r, e);
}
const A1 = `<svg viewBox="0 0 124 124" fill="var(--rc-color-grey-text-dark)" xmlns="http://www.w3.org/2000/svg">
    <circle cx="62" cy="62" r="62" fill="var(--rc-color-grey-text-dark)" opacity="0.2"/>
    <rect x="44.1116" y="56" width="27.5" height="11" transform="rotate(45 44.1116 56)" fill="var(--rc-color-grey-text-dark)"/>
    <rect x="79.1133" y="44.334" width="11" height="44" transform="rotate(45 79.1133 44.334)" fill="var(--rc-color-grey-text-dark)"/>
</svg>
`;
var F1 = /* @__PURE__ */ V('<div style="color:var(--rc-color-primary)"><!></div>');
function Y_(r) {
  var e = F1(), t = T(e);
  pn(t, () => A1), x(r, e);
}
var q1 = /* @__PURE__ */ Cr('<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" class="arrow-fill svelte-1prqhxu" fill-opacity="0.7"></path></svg>');
const M1 = {
  hash: "svelte-1prqhxu",
  code: ".arrow-fill.svelte-1prqhxu {fill:var(--arrow-fill-color, var(--rc-color-grey-text-dark));}"
};
function z1(r) {
  ke(r, M1);
  var e = q1();
  x(r, e);
}
const O1 = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path d="M7.99697 9.21971C8.54919 9.21978 8.99697 9.66747 8.99697 10.2197C8.99696 10.772 8.54919 11.2196 7.99697 11.2197C7.44469 11.2197 6.996 10.772 6.99599 10.2197C6.99599 9.66743 7.44468 9.21971 7.99697 9.21971Z" fill="var(--rc-color-grey-text-dark)" fill-opacity="0.9"/>
<path d="M7.99599 4.21971C8.54822 4.21978 8.99599 4.66747 8.99599 5.21971V7.21971C8.99598 7.77195 8.54821 8.21965 7.99599 8.21971C7.44371 8.21971 6.996 7.77199 6.99599 7.21971V5.21971C6.99599 4.66743 7.44371 4.21971 7.99599 4.21971Z" fill="var(--rc-color-grey-text-dark)" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.15615 1.63964C6.4187 -0.546529 9.57428 -0.546561 10.8368 1.63964L15.5477 9.79979C16.8097 11.9862 15.2322 14.7192 12.7079 14.7197H3.28505C0.76025 14.7196 -0.818142 11.9864 0.444233 9.79979L5.15615 1.63964ZM9.10537 2.63964C8.61269 1.78643 7.3803 1.78645 6.88759 2.63964L2.17665 10.7998C1.68403 11.6531 2.29983 12.7196 3.28505 12.7197H12.7079C13.6926 12.7192 14.3084 11.6528 13.8163 10.7998L9.10537 2.63964Z" fill="var(--rc-color-grey-text-dark)" fill-opacity="0.9"/>
</svg>`;
var N1 = /* @__PURE__ */ V('<div class="rcb-ui-asset-icon svelte-18og1ci"><!></div>');
const L1 = {
  hash: "svelte-18og1ci",
  code: ".rcb-ui-asset-icon.svelte-18og1ci {display:inline-block;width:1em;height:1em;}"
};
function j1(r) {
  ke(r, L1);
  var e = N1(), t = T(e);
  pn(t, () => O1), x(r, e);
}
const B1 = {
  cart: S1,
  error: Bp,
  lock: D1,
  success: Y_,
  back: P1,
  info: V_,
  close: z1,
  warning: j1,
  "chevron-left": ni,
  "chevron-right": ni,
  "chevron-up": ni,
  "chevron-down": ni
};
function qn(r, e) {
  _e(e, !0);
  const t = B1[e.name];
  let n = /* @__PURE__ */ re(rr({}));
  if (e.name.startsWith("chevron")) {
    const a = e.name.split("-")[1];
    q(n, { direction: a }, !0);
  }
  t(r, dr(() => o(n))), ge();
}
var R1 = /* @__PURE__ */ V('<span class="rc-sandbox-only-error svelte-1dod9xz"><!></span> <br/> <br/>', 1), U1 = /* @__PURE__ */ V('<!> <a class="svelte-1dod9xz"> </a>.', 1), V1 = /* @__PURE__ */ V("<!> <!>", 1);
const W1 = {
  hash: "svelte-1dod9xz",
  code: "a.svelte-1dod9xz {color:var(--rc-color-grey-text-dark);}.rc-sandbox-only-error.svelte-1dod9xz {font-weight:bold;}"
};
function os(r, e) {
  _e(e, !0), ke(r, W1);
  const t = () => Be(l, "$translator", n), [n, a] = Ze(), i = X(e, "fullWidth", 3, !1), s = /* @__PURE__ */ m(() => e.lastError ?? new ve(me.UnknownError, "Unknown error without state set.")), l = He(fr), c = /* @__PURE__ */ m(() => o(s).errorCode === me.StripeTaxNotActive || o(s).errorCode === me.StripeInvalidTaxOriginAddress || o(s).errorCode === me.StripeMissingRequiredPermission);
  br(() => {
    be.errorLog(`Displayed error: ${me[o(s).errorCode]}. Message: ${o(s).message ?? "None"}. Underlying error: ${o(s).underlyingErrorMessage ?? "None"}`);
  });
  function u() {
    return o(s).errorCode === me.AlreadyPurchasedError ? t().translate(ue.ErrorPageCloseButtonTitle, { appName: e.appName ?? "App" }) : o(c) ? t().translate(ue.ErrorButtonClose) : t().translate(ue.ErrorButtonTryAgain);
  }
  function d() {
    switch (o(s).errorCode) {
      case me.AlreadyPurchasedError:
        return e.productDetails.productType === Ur.Subscription ? t().translate(ue.ErrorPageErrorTitleAlreadySubscribed, { productTitle: e.productDetails.title }) : t().translate(ue.ErrorPageErrorTitleAlreadyPurchased, { productTitle: e.productDetails.title });
      case me.StripeTaxNotActive:
        return t().translate(ue.ErrorPageErrorTitleStripeTaxNotActive);
      case me.StripeInvalidTaxOriginAddress:
        return t().translate(ue.ErrorPageErrorTitleStripeInvalidTaxOriginAddress);
      case me.StripeMissingRequiredPermission:
        return t().translate(ue.ErrorPageErrorTitleStripeMissingRequiredPermission);
      default:
        return t().translate(ue.ErrorPageErrorTitleOtherErrors);
    }
  }
  function p() {
    const g = o(s).getErrorCode();
    switch (o(s).errorCode) {
      case me.ErrorSettingUpPurchase:
      case me.InvalidPaddleAPIKeyError:
        return t().translate(ue.ErrorPageErrorMessageErrorSettingUpPurchase, { errorCode: g });
      case me.ErrorChargingPayment:
        return t().translate(ue.ErrorPageErrorMessageErrorChargingPayment, { errorCode: g });
      case me.AlreadyPurchasedError:
        return e.productDetails.productType === Ur.Subscription ? t().translate(ue.ErrorPageErrorMessageAlreadySubscribed, { errorCode: g }) : t().translate(ue.ErrorPageErrorMessageAlreadyPurchased, { errorCode: g });
      case me.StripeTaxNotActive:
        return t().translate(ue.ErrorPageErrorMessageStripeTaxNotActive, { errorCode: g });
      case me.StripeInvalidTaxOriginAddress:
        return t().translate(ue.ErrorPageErrorMessageStripeInvalidTaxOriginAddress, { errorCode: g });
      case me.StripeMissingRequiredPermission:
        return t().translate(ue.ErrorPageErrorMessageStripeMissingRequiredPermission, { errorCode: g });
      case me.NetworkError:
        return t().translate(ue.ErrorPageErrorMessageNetworkError, { errorCode: g });
      default:
        return t().translate(ue.ErrorPageErrorMessageUnknownError, { errorCode: g });
    }
  }
  function _() {
    return o(s).errorCode === me.AlreadyPurchasedError ? ue.ErrorPageTroubleAccessing : ue.ErrorPageIfErrorPersists;
  }
  function f() {
    return o(s).errorCode === me.AlreadyPurchasedError ? "success" : "error";
  }
  {
    const g = (y) => {
      {
        let b = /* @__PURE__ */ m(f);
        qn(y, {
          get name() {
            return o(b);
          }
        });
      }
    }, w = (y) => {
      var b = V1(), v = ce(b);
      {
        var P = (S) => {
          var F = R1(), D = ce(F), O = T(D);
          st(O, {
            get key() {
              return ue.ErrorPageErrorMessageOnlyInSandbox;
            }
          }), x(S, F);
        };
        G(v, (S) => {
          o(c) && S(P);
        });
      }
      var I = W(v), E = W(I);
      {
        var C = (S) => {
          var F = U1(), D = ce(F);
          {
            let L = /* @__PURE__ */ m(_);
            st(D, {
              get key() {
                return o(L);
              }
            });
          }
          var O = W(D, 2), N = T(O);
          K(() => {
            he(O, "href", `mailto:${e.supportEmail ?? ""}`), fe(N, e.supportEmail);
          }), x(S, F);
        };
        G(E, (S) => {
          !o(c) && e.supportEmail && S(C);
        });
      }
      K((S) => fe(I, ` ${S ?? ""} `), [p]), x(y, b);
    };
    let k = /* @__PURE__ */ m(d), h = /* @__PURE__ */ m(u);
    uc(r, {
      get title() {
        return o(k);
      },
      get onDismiss() {
        return e.onDismiss;
      },
      type: "error",
      get closeButtonTitle() {
        return o(h);
      },
      get fullWidth() {
        return i();
      },
      icon: g,
      message: w,
      $$slots: { icon: !0, message: !0 }
    });
  }
  ge(), a();
}
function is(r, e) {
  _e(e, !1);
  const t = () => Be(u, "$translator", n), [n, a] = Ze();
  let i = X(e, "onContinue", 8), s = X(e, "title", 8, void 0), l = X(e, "closeButtonTitle", 8, void 0), c = X(e, "fullWidth", 8, !1);
  const u = He(fr), d = He(Uo);
  function p() {
    d.trackSDKEvent(tP("go_back_to_app", Xr)), i()();
  }
  br(() => {
    d.trackSDKEvent(nP(Xr));
  }), On();
  {
    const _ = (w) => {
      Y_(w);
    };
    let f = /* @__PURE__ */ En(() => (We(s()), t(), We(ue), Re(() => s() ?? t().translate(ue.SuccessPagePurchaseSuccessful)))), g = /* @__PURE__ */ En(() => (We(l()), t(), We(ue), Re(() => l() ?? t().translate(ue.SuccessPageButtonClose))));
    uc(r, {
      type: "success",
      get title() {
        return o(f);
      },
      onDismiss: p,
      get closeButtonTitle() {
        return o(g);
      },
      get fullWidth() {
        return c();
      },
      icon: _,
      $$slots: { icon: !0 }
    });
  }
  ge(), a();
}
function H1(r) {
  q_(r);
}
var Y1 = /* @__PURE__ */ V('<button class="rcb-applied-discount-chip svelte-56pxsq" type="button"><span class="rcb-applied-discount-code svelte-56pxsq"> </span> <span class="rcb-applied-discount-icon svelte-56pxsq" aria-hidden="true"><!></span></button>'), G1 = /* @__PURE__ */ V('<div class="rcb-applied-discount-chip rcb-applied-discount-chip--static svelte-56pxsq"><span class="rcb-applied-discount-code svelte-56pxsq"> </span></div>'), K1 = /* @__PURE__ */ V('<div class="rcb-applied-discount-label svelte-56pxsq"> </div>'), X1 = /* @__PURE__ */ V('<div class="rcb-applied-discount svelte-56pxsq"><!> <!></div>'), Z1 = /* @__PURE__ */ V('<div class="rcb-discount-error svelte-56pxsq" role="alert"><span class="rcb-discount-error-icon svelte-56pxsq" aria-hidden="true"><!></span> <span> </span></div>'), J1 = /* @__PURE__ */ V('<div class="rcb-discount-input svelte-56pxsq"><div class="rcb-discount-input-row svelte-56pxsq"><div><label class="rcb-discount-field-label svelte-56pxsq" for="rc-discount-code"> </label> <input class="rcb-discount-field-input svelte-56pxsq" id="rc-discount-code" type="text" autocomplete="off" placeholder=" "/></div> <button type="button"> </button></div> <!></div>'), Q1 = /* @__PURE__ */ V('<div class="rcb-product-price-container svelte-56pxsq"><!></div>');
const $1 = {
  hash: "svelte-56pxsq",
  code: `.rcb-product-price-container.svelte-56pxsq {display:flex;flex-direction:column;justify-content:space-between;gap:var(--rc-spacing-gapMedium-mobile);color:var(--rc-color-grey-text-dark);}.rcb-discount-input.svelte-56pxsq {display:flex;flex-direction:column;gap:4px;}.rcb-discount-input-row.svelte-56pxsq {display:flex;gap:8px;width:100%;}.rcb-discount-field.svelte-56pxsq {position:relative;display:flex;align-items:flex-end;flex:1 1 auto;min-width:0;min-height:48px;padding:4px 12px;border:1px solid var(--rc-color-grey-ui-dark);border-radius:var(--rc-shape-input-border-radius);background:var(--rc-color-background);transition:border-color 150ms ease;}.rcb-discount-field--focused.svelte-56pxsq {border-color:var(--rc-color-grey-text-light);}.rcb-discount-field-label.svelte-56pxsq {position:absolute;top:50%;left:12px;max-width:calc(100% - 24px);overflow:hidden;color:var(--rc-color-grey-text-light);font:var(--rc-text-bodySmall-mobile);text-overflow:ellipsis;pointer-events:none;transform:translateY(-50%);transform-origin:left top;transition:top 150ms ease,
      transform 150ms ease,
      font-size 150ms ease,
      color 150ms ease;white-space:nowrap;}.rcb-discount-field--floating.svelte-56pxsq .rcb-discount-field-label:where(.svelte-56pxsq) {top:8px;font-size:12px;transform:translateY(0);}.rcb-discount-field-input.svelte-56pxsq {width:100%;min-width:0;padding:14px 0 0;border:none;outline:none;background:transparent;color:var(--rc-color-grey-text-dark);font:var(--rc-text-bodySmall-mobile);}.rcb-discount-field-input.svelte-56pxsq::placeholder {color:transparent;}.rcb-discount-field-input.svelte-56pxsq:disabled {cursor:not-allowed;}.rcb-discount-action-button.svelte-56pxsq {flex:0 0 auto;min-width:82px;min-height:48px;padding:0 16px;border-radius:var(--rc-shape-input-button-border-radius);color:var(--rc-color-grey-text-light);font:var(--rc-text-bodyBase-desktop);transition:background-color 150ms ease,
      color 150ms ease,
      opacity 150ms ease;}.rcb-discount-action-button--enabled.svelte-56pxsq {border:1px solid var(--rc-color-grey-ui-dark);background-color:var(--rc-color-grey-ui-light);color:var(--rc-color-grey-text-light);cursor:pointer;}.rcb-discount-action-button.svelte-56pxsq:disabled {background-color:var(--rc-color-grey-ui-light);cursor:not-allowed;opacity:0.7;}.rcb-discount-error.svelte-56pxsq {display:flex;align-items:center;gap:8px;color:var(--rc-color-grey-text-dark);font:var(--rc-text-bodySmall-mobile);}.rcb-discount-error-icon.svelte-56pxsq {display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;width:16px;height:16px;}.rcb-discount-error-icon.svelte-56pxsq {display:block;width:16px;height:16px;}.rcb-applied-discount.svelte-56pxsq {display:flex;flex-direction:column;align-items:flex-start;gap:4px;max-width:100%;}.rcb-applied-discount-chip.svelte-56pxsq {--arrow-fill-color: var(--rc-color-grey-text-dark);display:inline-flex;align-items:center;gap:8px;width:fit-content;max-width:100%;padding:0 12px;border:1px solid var(--rc-color-grey-ui-light);border-radius:var(--rc-shape-input-button-border-radius);background-color:var(--rc-color-grey-ui-light);color:var(--rc-color-grey-text-dark);font:var(--rc-text-bodySmall-mobile);font-weight:500;transition:background-color 150ms ease,
      border-color 150ms ease,
      opacity 150ms ease;}button.rcb-applied-discount-chip.svelte-56pxsq {cursor:pointer;}.rcb-applied-discount-chip--static.svelte-56pxsq {cursor:default;}button.rcb-applied-discount-chip.svelte-56pxsq:disabled {cursor:not-allowed;opacity:0.7;}.rcb-applied-discount-code.svelte-56pxsq {overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:4px 0;}.rcb-applied-discount-icon.svelte-56pxsq {display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;color:var(--rc-color-grey-text-light);}.rcb-applied-discount-icon.svelte-56pxsq {width:16px;height:16px;}.rcb-applied-discount-label.svelte-56pxsq {color:var(--rc-color-grey-text-light);font:var(--rc-text-bodySmall-mobile);}`
};
function ad(r, e) {
  _e(e, !1), ke(r, $1);
  const t = () => Be(P, "$translator", n), [n, a] = Ze(), i = /* @__PURE__ */ lr(), s = /* @__PURE__ */ lr(), l = /* @__PURE__ */ lr(), c = /* @__PURE__ */ lr(), u = /* @__PURE__ */ lr();
  let d = X(e, "showDiscountCodeField", 8, !1), p = X(e, "discountCode", 12, ""), _ = X(e, "appliedDiscountCode", 8, null), f = X(e, "discountSuffix", 8, null), g = X(e, "discountCodeError", 8, null), w = X(e, "isUpdatingDiscountCode", 8, !1), k = X(e, "isDiscountCodeControlsEnabled", 8, !1), h = X(e, "onDiscountCodeChange", 8, void 0), y = X(e, "onApplyDiscountCode", 8, void 0), b = X(e, "onRemoveDiscountCode", 8, void 0), v = /* @__PURE__ */ lr(!1);
  const P = He(fr), I = (N) => N.toUpperCase(), E = () => {
    var N;
    p(I(p())), (N = h()) == null || N(p());
  }, C = (N) => {
    var L;
    N.key === "Enter" && (N.preventDefault(), N.stopPropagation(), o(l) && ((L = y()) == null || L()));
  };
  pr(() => We(p()), () => {
    q(i, p().trim().length > 0);
  }), pr(() => (o(v), o(i)), () => {
    q(s, o(v) || o(i));
  }), pr(
    () => (We(k()), We(w()), o(i)),
    () => {
      q(l, k() && !w() && o(i));
    }
  ), pr(() => We(g()), () => {
    q(c, g() === "Enter a discount code." ? g() : "Code can't be applied.");
  }), pr(() => We(_()), () => {
    q(u, _() ? I(_()) : null);
  }), Hl(), On();
  var S = Q1(), F = T(S);
  {
    var D = (N) => {
      var L = X1(), Z = T(L);
      {
        var z = (j) => {
          var R = Y1();
          R.__click = () => {
            var ae;
            return (ae = b()) == null ? void 0 : ae();
          };
          var Q = T(R), se = T(Q), te = W(Q, 2), le = T(te);
          qn(le, { name: "close" }), K(() => {
            R.disabled = w(), he(R, "aria-label", `Remove promo code ${o(u)}`), fe(se, o(u));
          }), x(j, R);
        }, M = (j) => {
          var R = G1(), Q = T(R), se = T(Q);
          K(() => fe(se, o(u))), x(j, R);
        };
        G(Z, (j) => {
          k() ? j(z) : j(M, !1);
        });
      }
      var A = W(Z, 2);
      {
        var U = (j) => {
          var R = K1(), Q = T(R);
          K(() => fe(Q, ` 
          ${f() ?? ""}`)), x(j, R);
        };
        G(A, (j) => {
          f() && j(U);
        });
      }
      x(N, L);
    }, O = (N) => {
      var L = Ee(), Z = ce(L);
      {
        var z = (M) => {
          var A = J1(), U = T(A), j = T(U);
          let R;
          var Q = T(j), se = T(Q), te = W(Q, 2);
          te.__input = E, te.__keydown = C;
          var le = W(j, 2);
          let ae;
          le.__click = () => {
            var B;
            return (B = y()) == null ? void 0 : B();
          };
          var Y = T(le), $ = W(U, 2);
          {
            var oe = (B) => {
              var de = Z1(), J = T(de), ie = T(J);
              qn(ie, { name: "warning" });
              var Ie = W(J, 2), we = T(Ie);
              K(() => fe(we, o(c))), x(B, de);
            };
            G($, (B) => {
              g() && B(oe);
            });
          }
          K(
            (B, de) => {
              R = ur(j, 1, "rcb-discount-field svelte-56pxsq", null, R, {
                "rcb-discount-field--focused": o(v),
                "rcb-discount-field--floating": o(s)
              }), fe(se, B), he(te, "aria-invalid", !!g()), te.disabled = w() || !k(), ae = ur(le, 1, "rcb-discount-action-button svelte-56pxsq", null, ae, {
                "rcb-discount-action-button--enabled": o(l)
              }), le.disabled = de, fe(Y, w() ? "Applying..." : "Apply");
            },
            [
              () => (t(), We(ue), Re(() => t().translate(ue.DiscountInputLabel))),
              () => (We(w()), We(k()), We(p()), Re(() => w() || !k() || !p().trim()))
            ]
          ), qr("focus", te, () => q(v, !0)), qr("blur", te, () => q(v, !1)), km(te, p), x(M, A);
        };
        G(
          Z,
          (M) => {
            d() && M(z);
          },
          !0
        );
      }
      x(N, L);
    };
    G(F, (N) => {
      _() ? N(D) : N(O, !1);
    });
  }
  x(r, S), ge(), a();
}
Jt(["click", "input", "keydown"]);
var e0 = /* @__PURE__ */ V('<div class="rcb-pricing-dropdown svelte-v5skdw"><div class="rcb-pricing-dropdown-header svelte-v5skdw" tabindex="0" role="button"><!> <span class="rcb-pricing-dropdown-toggle svelte-v5skdw"><!></span></div> <div><div class="rcb-pricing-dropdown-content-inner svelte-v5skdw"><!></div></div></div>');
const r0 = {
  hash: "svelte-v5skdw",
  code: `.rcb-pricing-dropdown.svelte-v5skdw {width:100%;overflow:hidden;display:flex;flex-direction:column;}.rcb-pricing-dropdown-header.svelte-v5skdw {padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);padding-left:var(--rc-spacing-gapLarge-mobile);padding-right:var(--rc-spacing-gapMedium-mobile);color:var(--rc-color-grey-text-light);border-radius:var(--rc-shape-input-button-border-radius);cursor:pointer;display:inline-flex;align-items:center;background-color:var(--rc-color-grey-ui-light);width:fit-content;user-select:none;}.rcb-pricing-dropdown-toggle.svelte-v5skdw {display:flex;align-items:center;margin-left:var(--rc-spacing-gapSmall-mobile);}.rcb-pricing-dropdown-content.svelte-v5skdw {display:flex;flex-direction:column;overflow:hidden;}

  @container layout-query-container (width < 768px) {.rcb-pricing-dropdown-content.svelte-v5skdw {max-height:1000px; /* Set a large max-height for animation */transition:max-height 0.2s ease-in-out;}.rcb-pricing-dropdown-content.collapsed.svelte-v5skdw {max-height:0;}.rcb-pricing-dropdown-content-inner.svelte-v5skdw {padding-top:var(--rc-spacing-gapMedium-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-pricing-dropdown-header.svelte-v5skdw {display:none;}
  }`
};
function t0(r, e) {
  _e(e, !1), ke(r, r0);
  const t = () => Be(c, "$translator", n), [n, a] = Ze();
  let i = X(e, "isExpanded", 12, !0), s = X(e, "showDiscountCodeField", 8, !1), l = X(e, "children", 8);
  const c = He(fr);
  function u() {
    i(!i());
  }
  On();
  var d = e0(), p = T(d), _ = T(p);
  ze(_, {
    size: "label-default",
    children: (P, I) => {
      var E = Ee(), C = ce(E);
      {
        var S = (D) => {
          var O = je();
          K((N) => fe(O, N), [
            () => (t(), We(ue), Re(() => t().translate(ue.PricingDropdownHideDetails)))
          ]), x(D, O);
        }, F = (D) => {
          var O = Ee(), N = ce(O);
          {
            var L = (z) => {
              var M = je();
              K((A) => fe(M, A), [
                () => (t(), We(ue), Re(() => t().translate(ue.PricingDropdownAddPromoCode)))
              ]), x(z, M);
            }, Z = (z) => {
              var M = je();
              K((A) => fe(M, A), [
                () => (t(), We(ue), Re(() => t().translate(ue.PricingDropdownShowDetails)))
              ]), x(z, M);
            };
            G(
              N,
              (z) => {
                s() ? z(L) : z(Z, !1);
              },
              !0
            );
          }
          x(D, O);
        };
        G(C, (D) => {
          i() ? D(S) : D(F, !1);
        });
      }
      x(P, E);
    },
    $$slots: { default: !0 }
  });
  var f = W(_, 2), g = T(f);
  {
    var w = (P) => {
      qn(P, { name: "chevron-up" });
    }, k = (P) => {
      qn(P, { name: "chevron-down" });
    };
    G(g, (P) => {
      i() ? P(w) : P(k, !1);
    });
  }
  var h = W(p, 2);
  let y;
  var b = T(h), v = T(b);
  yr(v, () => l() ?? er), K(() => {
    he(p, "aria-expanded", i()), y = ur(h, 1, "rcb-pricing-dropdown-content svelte-v5skdw", null, y, { collapsed: !i() });
  }), qr("click", p, u), qr("keydown", p, (P) => P.key === "Enter" || P.key === " " ? u() : null), x(r, d), ge(), a();
}
var n0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-value-loading svelte-w1kcbi"><!></div>');
const a0 = {
  hash: "svelte-w1kcbi",
  code: `.rcb-pricing-table-value-loading.svelte-w1kcbi {color:transparent;
    animation: svelte-w1kcbi-rcb-pricing-table-value-loading 1.5s ease-in-out 0s infinite
      normal none running;cursor:progress;background-color:var(--rc-color-grey-text-dark);user-select:none;border-radius:var(--rc-shape-input-border-radius);}

  @keyframes svelte-w1kcbi-rcb-pricing-table-value-loading {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.3;
    }
  }`
};
function od(r, e) {
  ke(r, a0);
  let t = X(e, "children", 8);
  var n = n0(), a = T(n);
  yr(a, () => t() ?? er), x(r, n);
}
var o0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><div class="rcb-pricing-table-value"><!></div></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div> <div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><div class="rcb-pricing-table-value"><!></div></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div> <div class="rcb-pricing-table-separator svelte-1cr4unj"></div>', 1), i0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><div class="rcb-pricing-table-value"><!></div></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div> <div class="rcb-pricing-table-row rcb-pricing-table-row-applied-discount svelte-1cr4unj"><!> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div>', 1), s0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj" data-testid="tax-loading-skeleton"><div class="rcb-pricing-table-header svelte-1cr4unj"><!></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div>'), l0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"> </div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div>'), c0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><!></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div>'), u0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><!></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div> <!>', 1), d0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-separator svelte-1cr4unj"></div>'), p0 = /* @__PURE__ */ V('<div class="rcb-pricing-table-row svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><!></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div>'), _0 = /* @__PURE__ */ V('<div class="rcb-pricing-table svelte-1cr4unj"><!> <!> <!> <!> <!> <div class="rcb-pricing-table-row rcb-header svelte-1cr4unj"><div class="rcb-pricing-table-header svelte-1cr4unj"><!></div> <div class="rcb-pricing-table-value svelte-1cr4unj"><!></div></div></div>');
const g0 = {
  hash: "svelte-1cr4unj",
  code: `.rcb-pricing-table.svelte-1cr4unj {display:flex;flex-direction:column;gap:var(--rc-spacing-gapSmall-mobile);}.rcb-pricing-table-row.svelte-1cr4unj {display:flex;flex-direction:row;align-items:center;justify-content:space-between;}.rcb-pricing-table-row-applied-discount.svelte-1cr4unj {align-items:flex-end;}.rcb-pricing-table-separator.svelte-1cr4unj {height:1px;background-color:var(--rc-color-grey-ui-dark);}.rcb-pricing-table-row.svelte-1cr4unj > .rcb-pricing-table-header:where(.svelte-1cr4unj) {color:var(--rc-color-grey-text-light);}.rcb-pricing-table-row.svelte-1cr4unj > .rcb-pricing-table-value:where(.svelte-1cr4unj) {color:var(--rc-color-grey-text-dark);}.rcb-pricing-table-row.svelte-1cr4unj:last-child > .rcb-pricing-table-header:where(.svelte-1cr4unj),
  .rcb-pricing-table-row.svelte-1cr4unj:last-child > .rcb-pricing-table-value:where(.svelte-1cr4unj) {color:var(--rc-color-grey-text-dark);}

  @container layout-query-container (width >= 768px) {.rcb-pricing-table-separator.svelte-1cr4unj {display:none;}.rcb-pricing-table.svelte-1cr4unj {gap:var(--rc-spacing-gapSmall-desktop);}.rcb-pricing-table-row.svelte-1cr4unj > .rcb-pricing-table-header:where(.svelte-1cr4unj),
    .rcb-pricing-table-row.svelte-1cr4unj > .rcb-pricing-table-value:where(.svelte-1cr4unj) {color:var(--rc-color-grey-text-light);}
  }`
};
function f0(r, e) {
  _e(e, !0), ke(r, g0);
  const t = () => Be(l, "$translator", n), [n, a] = Ze(), i = (b) => {
    var v = _0(), P = T(v);
    {
      var I = (j) => {
        var R = o0(), Q = ce(R), se = T(Q), te = T(se), le = T(te);
        ze(le, {
          size: "body-small",
          children: (Ie, we) => {
            var xe = je();
            K((Se) => fe(xe, Se), [
              () => t().translate(ue.PricingTableSubtotal)
            ]), x(Ie, xe);
          },
          $$slots: { default: !0 }
        });
        var ae = W(se, 2), Y = T(ae);
        ze(Y, {
          size: "body-small",
          children: (Ie, we) => {
            var xe = je();
            K((Se) => fe(xe, Se), [
              () => t().formatPrice(o(p), e.priceBreakdown.currency)
            ]), x(Ie, xe);
          },
          $$slots: { default: !0 }
        });
        var $ = W(Q, 2), oe = T($), B = T(oe), de = T(B);
        ze(de, {
          size: "body-small",
          children: (Ie, we) => {
            var xe = je();
            K((Se) => fe(xe, `${Se ?? ""}${e.resolvedDiscount.displayName ? `: ${e.resolvedDiscount.displayName}` : ""}${o(f) ? ` (${o(f)})` : ""}`), [
              () => t().translate(ue.PricingTableDiscount)
            ]), x(Ie, xe);
          },
          $$slots: { default: !0 }
        });
        var J = W(oe, 2), ie = T(J);
        ze(ie, {
          size: "body-small",
          children: (Ie, we) => {
            var xe = je();
            K((Se) => fe(xe, `-${Se ?? ""}`), [
              () => t().formatPrice(o(_), e.priceBreakdown.currency)
            ]), x(Ie, xe);
          },
          $$slots: { default: !0 }
        }), x(j, R);
      };
      G(P, (j) => {
        e.resolvedDiscount && !e.showDiscountCodeField && j(I);
      });
    }
    var E = W(P, 2);
    {
      var C = (j) => {
        var R = Ee(), Q = ce(R);
        {
          var se = (le) => {
            ad(le, {
              get showDiscountCodeField() {
                return e.showDiscountCodeField;
              },
              get discountCode() {
                return e.discountCode;
              },
              get appliedDiscountCode() {
                return e.appliedDiscountCode;
              },
              get discountSuffix() {
                return o(f);
              },
              get discountCodeError() {
                return e.discountCodeError;
              },
              get isUpdatingDiscountCode() {
                return e.isUpdatingDiscountCode;
              },
              get isDiscountCodeControlsEnabled() {
                return e.isDiscountCodeControlsEnabled;
              },
              get onDiscountCodeChange() {
                return e.onDiscountCodeChange;
              },
              get onApplyDiscountCode() {
                return e.onApplyDiscountCode;
              },
              get onRemoveDiscountCode() {
                return e.onRemoveDiscountCode;
              }
            });
          }, te = (le) => {
            var ae = i0(), Y = ce(ae), $ = T(Y), oe = T($), B = T(oe);
            ze(B, {
              size: "body-small",
              children: (Se, Ue) => {
                var ye = je();
                K((Ce) => fe(ye, Ce), [
                  () => t().translate(ue.PricingTableSubtotal)
                ]), x(Se, ye);
              },
              $$slots: { default: !0 }
            });
            var de = W($, 2), J = T(de);
            ze(J, {
              size: "body-small",
              children: (Se, Ue) => {
                var ye = je();
                K((Ce) => fe(ye, Ce), [
                  () => t().formatPrice(o(p), e.priceBreakdown.currency)
                ]), x(Se, ye);
              },
              $$slots: { default: !0 }
            });
            var ie = W(Y, 2), Ie = T(ie);
            ad(Ie, {
              get showDiscountCodeField() {
                return e.showDiscountCodeField;
              },
              get discountCode() {
                return e.discountCode;
              },
              get appliedDiscountCode() {
                return e.appliedDiscountCode;
              },
              get discountSuffix() {
                return o(f);
              },
              get discountCodeError() {
                return e.discountCodeError;
              },
              get isUpdatingDiscountCode() {
                return e.isUpdatingDiscountCode;
              },
              get isDiscountCodeControlsEnabled() {
                return e.isDiscountCodeControlsEnabled;
              },
              get onDiscountCodeChange() {
                return e.onDiscountCodeChange;
              },
              get onApplyDiscountCode() {
                return e.onApplyDiscountCode;
              },
              get onRemoveDiscountCode() {
                return e.onRemoveDiscountCode;
              }
            });
            var we = W(Ie, 2), xe = T(we);
            ze(xe, {
              size: "body-small",
              children: (Se, Ue) => {
                var ye = je();
                K((Ce) => fe(ye, `-${Ce ?? ""}`), [
                  () => t().formatPrice(o(_), e.priceBreakdown.currency)
                ]), x(Se, ye);
              },
              $$slots: { default: !0 }
            }), x(le, ae);
          };
          G(Q, (le) => {
            e.appliedDiscountCode ? le(te, !1) : le(se);
          });
        }
        x(j, R);
      };
      G(E, (j) => {
        e.showDiscountCodeField && j(C);
      });
    }
    var S = W(E, 2);
    {
      var F = (j) => {
        var R = u0(), Q = ce(R), se = T(Q), te = T(se);
        ze(te, {
          size: "body-small",
          children: (B, de) => {
            var J = je();
            K((ie) => fe(J, ie), [
              () => t().translate(ue.PricingTotalExcludingTax)
            ]), x(B, J);
          },
          $$slots: { default: !0 }
        });
        var le = W(se, 2), ae = T(le);
        ze(ae, {
          size: "body-small",
          children: (B, de) => {
            var J = Ee(), ie = ce(J);
            {
              var Ie = (xe) => {
                od(xe, {
                  children: (Se, Ue) => {
                    var ye = je();
                    K((Ce) => fe(ye, Ce), [
                      () => t().formatPrice(e.priceBreakdown.totalExcludingTaxInMicros, e.priceBreakdown.currency)
                    ]), x(Se, ye);
                  },
                  $$slots: { default: !0 }
                });
              }, we = (xe) => {
                var Se = je();
                K((Ue) => fe(Se, Ue), [
                  () => t().formatPrice(e.priceBreakdown.totalExcludingTaxInMicros, e.priceBreakdown.currency)
                ]), x(xe, Se);
              };
              G(ie, (xe) => {
                e.priceBreakdown.taxCalculationStatus === "loading" ? xe(Ie) : xe(we, !1);
              });
            }
            x(B, J);
          },
          $$slots: { default: !0 }
        });
        var Y = W(Q, 2);
        {
          var $ = (B) => {
            var de = s0(), J = T(de), ie = T(J);
            ze(ie, {
              size: "body-small",
              children: (xe, Se) => {
                var Ue = je();
                K((ye) => fe(Ue, ye), [
                  () => t().translate(ue.PricingTableTax)
                ]), x(xe, Ue);
              },
              $$slots: { default: !0 }
            });
            var Ie = W(J, 2), we = T(Ie);
            ze(we, {
              size: "body-small",
              children: (xe, Se) => {
                od(xe, {
                  children: (Ue, ye) => {
                    var Ce = je();
                    K((Te) => fe(Ce, Te), [
                      () => t().formatPrice(1234e4, e.priceBreakdown.currency)
                    ]), x(Ue, Ce);
                  },
                  $$slots: { default: !0 }
                });
              },
              $$slots: { default: !0 }
            }), x(B, de);
          }, oe = (B) => {
            var de = Ee(), J = ce(de);
            {
              var ie = (we) => {
                var xe = l0(), Se = T(xe), Ue = T(Se), ye = W(Se, 2), Ce = T(ye);
                ze(Ce, {
                  size: "body-small",
                  children: (Te, Pe) => {
                    var De = je();
                    K((Ye) => fe(De, Ye), [
                      () => t().translate(ue.PricingTableEnterBillingAddressToCalculate)
                    ]), x(Te, De);
                  },
                  $$slots: { default: !0 }
                }), K((Te) => fe(Ue, Te), [
                  () => t().translate(ue.PricingTableTax)
                ]), x(we, xe);
              }, Ie = (we) => {
                var xe = Ee(), Se = ce(xe);
                {
                  var Ue = (ye) => {
                    var Ce = Ee(), Te = ce(Ce);
                    Gt(Te, 17, () => e.priceBreakdown.taxBreakdown, ln, (Pe, De) => {
                      var Ye = c0(), Ke = T(Ye), pe = T(Ke);
                      ze(pe, {
                        size: "body-small",
                        children: (_r, Ar) => {
                          var ut = je();
                          K(() => fe(ut, o(De).display_name)), x(_r, ut);
                        },
                        $$slots: { default: !0 }
                      });
                      var Le = W(Ke, 2), or = T(Le);
                      ze(or, {
                        size: "body-small",
                        children: (_r, Ar) => {
                          var ut = je();
                          K((Qt) => fe(ut, Qt), [
                            () => t().formatPrice(o(De).tax_amount_in_micros, e.priceBreakdown.currency)
                          ]), x(_r, ut);
                        },
                        $$slots: { default: !0 }
                      }), x(Pe, Ye);
                    }), x(ye, Ce);
                  };
                  G(
                    Se,
                    (ye) => {
                      e.priceBreakdown.taxBreakdown !== null && ye(Ue);
                    },
                    !0
                  );
                }
                x(we, xe);
              };
              G(
                J,
                (we) => {
                  e.priceBreakdown.taxCalculationStatus === "pending" ? we(ie) : we(Ie, !1);
                },
                !0
              );
            }
            x(B, de);
          };
          G(Y, (B) => {
            e.priceBreakdown.taxCalculationStatus === "loading" ? B($) : B(oe, !1);
          });
        }
        x(j, R);
      };
      G(S, (j) => {
        o(u) && j(F);
      });
    }
    var D = W(S, 2);
    {
      var O = (j) => {
        var R = d0();
        x(j, R);
      };
      G(D, (j) => {
        (o(u) || e.appliedDiscountCode) && j(O);
      });
    }
    var N = W(D, 2);
    {
      var L = (j) => {
        var R = p0(), Q = T(R), se = T(Q);
        ze(se, {
          size: "body-small",
          children: (ae, Y) => {
            var $ = je();
            K((oe) => fe($, oe), [
              () => t().translate(ue.PricingTableTrialEnds, {
                formattedTrialEndDate: t().translateDate(o(s), { dateStyle: "medium" })
              })
            ]), x(ae, $);
          },
          $$slots: { default: !0 }
        });
        var te = W(Q, 2), le = T(te);
        ze(le, {
          size: "body-small",
          children: (ae, Y) => {
            var $ = je();
            K((oe) => fe($, oe), [
              () => t().formatPrice(e.priceBreakdown.totalAmountInMicros, e.priceBreakdown.currency)
            ]), x(ae, $);
          },
          $$slots: { default: !0 }
        }), x(j, R);
      };
      G(N, (j) => {
        o(s) && j(L);
      });
    }
    var Z = W(N, 2), z = T(Z), M = T(z);
    ze(M, {
      size: "body-small",
      children: (j, R) => {
        var Q = je();
        K((se) => fe(Q, se), [
          () => t().translate(ue.PricingTableTotalDueToday)
        ]), x(j, Q);
      },
      $$slots: { default: !0 }
    });
    var A = W(z, 2), U = T(A);
    ze(U, {
      size: "body-small",
      children: (j, R) => {
        var Q = je();
        K((se) => fe(Q, se), [
          () => t().formatPrice(o(g), e.priceBreakdown.currency)
        ]), x(j, Q);
      },
      $$slots: { default: !0 }
    }), x(b, v);
  }, s = /* @__PURE__ */ m(() => {
    var b;
    return (b = e.trialPhase) != null && b.period ? mo(/* @__PURE__ */ new Date(), e.trialPhase.period, !0) : null;
  }), l = He(fr), c = /* @__PURE__ */ m(() => e.priceBreakdown.taxCalculationStatus === "loading" || e.priceBreakdown.taxCalculationStatus === "pending"), u = /* @__PURE__ */ m(() => {
    var b;
    return e.priceBreakdown.taxCalculationStatus !== "unavailable" && e.priceBreakdown.taxCalculationStatus !== "disabled" && (o(c) || (((b = e.priceBreakdown.taxBreakdown) == null ? void 0 : b.length) ?? 0) > 0);
  }), d = /* @__PURE__ */ m(() => e.showDiscountCodeField || o(u)), p = /* @__PURE__ */ m(() => {
    var b, v;
    return e.priceBreakdown.originalAmountInMicros ?? ((v = (b = e.basePhase) == null ? void 0 : b.price) == null ? void 0 : v.amountMicros) ?? e.priceBreakdown.totalAmountInMicros;
  }), _ = /* @__PURE__ */ m(() => {
    var b;
    return ((b = e.resolvedDiscount) == null ? void 0 : b.discountAmountInMicros) ?? 0;
  }), f = /* @__PURE__ */ m(() => {
    var b;
    return ((b = e.resolvedDiscount) == null ? void 0 : b.suffix) ?? null;
  }), g = /* @__PURE__ */ m(() => o(s) ? 0 : e.priceBreakdown.totalAmountInMicros);
  var w = Ee(), k = ce(w);
  {
    var h = (b) => {
      t0(b, {
        get showDiscountCodeField() {
          return e.showDiscountCodeField;
        },
        children: (v, P) => {
          i(v);
        },
        $$slots: { default: !0 }
      });
    }, y = (b) => {
      i(b);
    };
    G(k, (b) => {
      o(d) ? b(h) : b(y, !1);
    });
  }
  x(r, w), ge(), a();
}
var m0 = /* @__PURE__ */ V('<div class="rcb-subscribe-to svelte-sdtx9l"><!></div>'), h0 = /* @__PURE__ */ V('<span class="rcb-product-description svelte-sdtx9l"><!></span>'), v0 = /* @__PURE__ */ V('<div class="rcb-pricing-info-header svelte-sdtx9l"><!> <div class="rcb-product-title svelte-sdtx9l"><!></div> <!></div>');
const y0 = {
  hash: "svelte-sdtx9l",
  code: `.rcb-pricing-info-header.svelte-sdtx9l {display:flex;flex-direction:column;gap:var(--rc-spacing-gapMedium-mobile);}.rcb-product-title.svelte-sdtx9l {color:var(--rc-color-grey-text-dark);}.rcb-product-description.svelte-sdtx9l {color:var(--rc-color-grey-text-light);}.rcb-subscribe-to.svelte-sdtx9l {display:none;}

  @container layout-query-container (width >= 768px) {.rcb-subscribe-to.svelte-sdtx9l {display:block;}.rcb-pricing-info-header.svelte-sdtx9l {display:flex;flex-direction:column;gap:var(--rc-spacing-gapMedium-desktop);}
  }`
};
function b0(r, e) {
  _e(e, !1), ke(r, y0);
  let t = X(e, "productDetails", 8), n = X(e, "showProductDescription", 8);
  const a = t().productType === Ur.Subscription;
  On();
  var i = v0(), s = T(i);
  {
    var l = (_) => {
      var f = m0(), g = T(f);
      ze(g, {
        size: "body-base",
        children: (w, k) => {
          {
            let h = /* @__PURE__ */ En(() => (We(t()), Re(() => ({ productTitle: t().title }))));
            st(w, {
              get key() {
                return We(ue), Re(() => ue.ProductInfoSubscribeTo);
              },
              get variables() {
                return o(h);
              }
            });
          }
        },
        $$slots: { default: !0 }
      }), x(_, f);
    };
    G(s, (_) => {
      a && _(l);
    });
  }
  var c = W(s, 2), u = T(c);
  ze(u, {
    size: "heading-lg",
    branded: !0,
    children: (_, f) => {
      {
        let g = /* @__PURE__ */ En(() => (We(t()), Re(() => ({ productTitle: t().title }))));
        st(_, {
          get key() {
            return We(ue), Re(() => ue.ProductInfoProductTitle);
          },
          get variables() {
            return o(g);
          }
        });
      }
    },
    $$slots: { default: !0 }
  });
  var d = W(c, 2);
  {
    var p = (_) => {
      var f = h0(), g = T(f);
      ze(g, {
        size: "body-small",
        children: (w, k) => {
          {
            let h = /* @__PURE__ */ En(() => (We(t()), Re(() => ({ productDescription: t().description }))));
            st(w, {
              get key() {
                return We(ue), Re(() => ue.ProductInfoProductDescription);
              },
              get variables() {
                return o(h);
              }
            });
          }
        },
        $$slots: { default: !0 }
      }), x(_, f);
    };
    G(d, (_) => {
      We(n()), We(t()), Re(() => n() && t().description) && _(p);
    });
  }
  x(r, i), ge();
}
var k0 = /* @__PURE__ */ V("<div><!></div>"), w0 = /* @__PURE__ */ V("<div><!> <!></div>"), P0 = /* @__PURE__ */ V('<div class="rcb-product-price-container svelte-17etw2v"><!> <!> <div><!> <!> <!></div></div>');
const x0 = {
  hash: "svelte-17etw2v",
  code: ".rcb-product-price-container.svelte-17etw2v {display:flex;flex-direction:column;justify-content:space-between;gap:var(--rc-spacing-gapMedium-mobile);color:var(--rc-color-grey-text-dark);}"
};
function E0(r, e) {
  _e(e, !0), ke(r, x0);
  const t = () => Be(i, "$translator", n), [n, a] = Ze(), i = He(fr), s = /* @__PURE__ */ m(() => {
    var L;
    return !!((L = e.trialPhase) != null && L.periodDuration);
  }), l = /* @__PURE__ */ m(() => {
    var L;
    return ((L = e.introPricePhase) == null ? void 0 : L.cycleCount) === 1;
  }), c = /* @__PURE__ */ m(() => !!e.introPricePhase), u = /* @__PURE__ */ m(() => {
    var L;
    return !!e.discountPhase || (((L = e.priceBreakdown.appliedDiscounts) == null ? void 0 : L.length) ?? 0) > 0;
  }), d = /* @__PURE__ */ m(() => {
    var z, M;
    if (!o(c) || !((z = e.introPricePhase) != null && z.period)) return "";
    const L = e.introPricePhase.period.number * ((M = e.introPricePhase) == null ? void 0 : M.cycleCount), Z = e.introPricePhase.period.unit;
    return L == null || Z == null ? "" : L === 1 && !o(s) && t().selectedLocale === Or ? t().translatePeriodUnit(Z) || "" : t().translatePeriod(L, Z) || "";
  }), p = /* @__PURE__ */ m(() => {
    var L, Z;
    return (L = e.introPricePhase) != null && L.period ? o(l) ? t().translate(ue.ProductInfoIntroPricePhasePaidOnce) : e.introPricePhase && ((Z = e.introPricePhase) != null && Z.period) && t().translatePeriodFrequency(e.introPricePhase.period.number, e.introPricePhase.period.unit, { useMultipleWords: !0 }) || "" : "";
  }), _ = /* @__PURE__ */ m(() => o(s) ? ue.ProductInfoIntroPricePhaseAfterTrial : ue.ProductInfoIntroPricePhase), f = /* @__PURE__ */ m(() => t().formatPrice(e.priceBreakdown.totalAmountInMicros, e.priceBreakdown.currency)), g = /* @__PURE__ */ m(() => {
    var Z, z;
    const L = e.introPricePhase || o(u) ? ((z = (Z = e.basePhase) == null ? void 0 : Z.price) == null ? void 0 : z.amountMicros) ?? 0 : e.priceBreakdown.totalAmountInMicros;
    return t().formatPrice(L, e.priceBreakdown.currency);
  }), w = /* @__PURE__ */ m(() => o(c) ? ue.ProductInfoAfter : o(s) ? ue.ProductInfoAfterTrial : null), k = "heading-lg", h = /* @__PURE__ */ m(() => o(s) ? "heading-md" : "heading-lg"), y = /* @__PURE__ */ m(() => o(s) || o(c) ? "heading-md" : "heading-lg");
  var b = P0(), v = T(b);
  {
    var P = (L) => {
      var Z = k0(), z = T(Z);
      ze(z, {
        size: k,
        children: (M, A) => {
          {
            let U = /* @__PURE__ */ m(() => ({
              trialDuration: ph(e.trialPhase.periodDuration, t())
            }));
            st(M, {
              get key() {
                return ue.ProductInfoFreeTrialDuration;
              },
              get variables() {
                return o(U);
              }
            });
          }
        },
        $$slots: { default: !0 }
      }), x(L, Z);
    };
    G(v, (L) => {
      o(s) && L(P);
    });
  }
  var I = W(v, 2);
  {
    var E = (L) => {
      var Z = w0(), z = T(Z);
      ze(z, {
        get size() {
          return o(h);
        },
        children: (U, j) => {
          {
            let R = /* @__PURE__ */ m(() => ({
              introPriceDuration: o(d),
              introPrice: o(f)
            }));
            st(U, {
              get key() {
                return o(_);
              },
              get variables() {
                return o(R);
              }
            });
          }
        },
        $$slots: { default: !0 }
      });
      var M = W(z, 2);
      {
        var A = (U) => {
          ze(U, {
            size: "body-small",
            children: (j, R) => {
              var Q = je();
              K(() => fe(Q, o(p))), x(j, Q);
            },
            $$slots: { default: !0 }
          });
        };
        G(M, (U) => {
          o(p) && U(A);
        });
      }
      x(L, Z);
    };
    G(I, (L) => {
      o(c) && L(E);
    });
  }
  var C = W(I, 2), S = T(C);
  ze(S, {
    get size() {
      return o(y);
    },
    children: (L, Z) => {
      var z = je();
      K(() => fe(z, o(g))), x(L, z);
    },
    $$slots: { default: !0 }
  });
  var F = W(S, 2);
  {
    var D = (L) => {
      ze(L, {
        size: "body-small",
        children: (Z, z) => {
          var M = je();
          K((A) => fe(M, A), [
            () => t().translatePeriodFrequency(e.basePhase.period.number, e.basePhase.period.unit, { useMultipleWords: !0 })
          ]), x(Z, M);
        },
        $$slots: { default: !0 }
      });
    };
    G(F, (L) => {
      var Z;
      (Z = e.basePhase) != null && Z.period && L(D);
    });
  }
  var O = W(F, 2);
  {
    var N = (L) => {
      ze(L, {
        size: "body-small",
        children: (Z, z) => {
          st(Z, {
            get key() {
              return o(w);
            }
          });
        },
        $$slots: { default: !0 }
      });
    };
    G(O, (L) => {
      o(w) && L(N);
    });
  }
  x(r, b), ge(), a();
}
var S0 = /* @__PURE__ */ V("<div><!></div>");
function I0(r, e) {
  _e(e, !0);
  const t = () => Be(i, "$translator", n), [n, a] = Ze(), i = He(fr), s = /* @__PURE__ */ m(() => {
    var d, p;
    return t().formatPrice(((p = (d = e.basePhase) == null ? void 0 : d.price) == null ? void 0 : p.amountMicros) ?? 0, e.priceBreakdown.currency);
  }), l = "heading-lg";
  var c = S0(), u = T(c);
  ze(u, {
    size: l,
    children: (d, p) => {
      var _ = je();
      K(() => fe(_, o(s))), x(d, _);
    },
    $$slots: { default: !0 }
  }), x(r, c), ge(), a();
}
var C0 = /* @__PURE__ */ V('<div class="rcb-pricing-info svelte-1jzyaxi"><div class="rcb-pricing-info-header svelte-1jzyaxi"><!> <!></div> <!></div>');
const T0 = {
  hash: "svelte-1jzyaxi",
  code: `.rcb-pricing-info.svelte-1jzyaxi {display:flex;flex-direction:column;user-select:none;gap:var(--rc-spacing-gapXXLarge-mobile);}.rcb-pricing-info-header.svelte-1jzyaxi {display:flex;flex-direction:column;gap:var(--rc-spacing-gapLarge-mobile);}

  @container layout-query-container (width >= 768px) {.rcb-pricing-info.svelte-1jzyaxi {gap:var(--rc-spacing-gapXXXLarge-desktop);}.rcb-pricing-info-header.svelte-1jzyaxi {gap:var(--rc-spacing-gapLarge-desktop);}
  }`
};
function D0(r, e) {
  _e(e, !1), ke(r, T0);
  const t = () => Be(F, "$translator", n), [n, a] = Ze(), i = /* @__PURE__ */ lr();
  let s = X(e, "productDetails", 8), l = X(e, "purchaseOption", 8), c = X(e, "showProductDescription", 8), u = X(e, "priceBreakdown", 8), d = X(e, "showDiscountCodeField", 8, !1), p = X(e, "discountCode", 8, ""), _ = X(e, "appliedDiscountCode", 8, null), f = X(e, "discountCodeError", 8, null), g = X(e, "isUpdatingDiscountCode", 8, !1), w = X(e, "isDiscountCodeControlsEnabled", 8, !1), k = X(e, "onDiscountCodeChange", 8, void 0), h = X(e, "onApplyDiscountCode", 8, void 0), y = X(e, "onRemoveDiscountCode", 8, void 0), b = /* @__PURE__ */ lr(), v = /* @__PURE__ */ lr(), P = /* @__PURE__ */ lr(), I = /* @__PURE__ */ lr(), E = /* @__PURE__ */ lr(), C = /* @__PURE__ */ lr(), S = /* @__PURE__ */ lr();
  const F = He(fr);
  pr(() => We(s()), () => {
    q(b, s().productType === "subscription");
  }), pr(() => (o(b), We(l())), () => {
    q(v, o(b) ? l() : null);
  }), pr(() => (o(b), We(l())), () => {
    q(P, o(b) ? null : l());
  }), pr(
    () => (o(b), o(v), o(P)),
    () => {
      var A, U;
      q(I, o(b) ? ((A = o(v)) == null ? void 0 : A.base) ?? null : (U = o(P)) != null && U.basePrice ? {
        periodDuration: null,
        period: null,
        cycleCount: 1,
        price: o(P).basePrice,
        pricePerWeek: null,
        pricePerMonth: null,
        pricePerYear: null
      } : null);
    }
  ), pr(() => o(v), () => {
    var A;
    q(E, ((A = o(v)) == null ? void 0 : A.trial) ?? null);
  }), pr(() => (o(v), o(P)), () => {
    var A, U;
    q(C, ((A = o(v)) == null ? void 0 : A.discount) ?? ((U = o(P)) == null ? void 0 : U.discount) ?? null);
  }), pr(() => o(v), () => {
    var A;
    q(S, ((A = o(v)) == null ? void 0 : A.introPrice) ?? null);
  }), pr(
    () => (We(u()), We(s()), We(l()), t()),
    () => {
      q(i, mc({
        priceBreakdown: u(),
        productDetails: s(),
        purchaseOption: l(),
        translator: t()
      }));
    }
  ), Hl(), On();
  var D = C0(), O = T(D), N = T(O);
  b0(N, {
    get productDetails() {
      return s();
    },
    get showProductDescription() {
      return c();
    }
  });
  var L = W(N, 2);
  {
    var Z = (A) => {
      E0(A, {
        get priceBreakdown() {
          return u();
        },
        get basePhase() {
          return o(I);
        },
        get trialPhase() {
          return o(E);
        },
        get discountPhase() {
          return o(C);
        },
        get introPricePhase() {
          return o(S);
        }
      });
    }, z = (A) => {
      I0(A, {
        get priceBreakdown() {
          return u();
        },
        get basePhase() {
          return o(I);
        }
      });
    };
    G(L, (A) => {
      o(b) ? A(Z) : A(z, !1);
    });
  }
  var M = W(O, 2);
  f0(M, {
    get priceBreakdown() {
      return u();
    },
    get trialPhase() {
      return o(E);
    },
    get basePhase() {
      return o(I);
    },
    get resolvedDiscount() {
      return o(i);
    },
    get showDiscountCodeField() {
      return d();
    },
    get discountCode() {
      return p();
    },
    get appliedDiscountCode() {
      return _();
    },
    get discountCodeError() {
      return f();
    },
    get isUpdatingDiscountCode() {
      return g();
    },
    get isDiscountCodeControlsEnabled() {
      return w();
    },
    get onDiscountCodeChange() {
      return k();
    },
    get onApplyDiscountCode() {
      return h();
    },
    get onRemoveDiscountCode() {
      return y();
    }
  }), x(r, D), ge(), a();
}
const Ea = (r) => `https://da08ctfrofx1b.cloudfront.net/${r}`;
var A0 = /* @__PURE__ */ V("<div><!></div>");
const F0 = {
  hash: "svelte-18ddpt0",
  code: `.rcb-ui-container.svelte-18ddpt0 {display:flex;flex-direction:column;inset:0;color-scheme:none;line-height:1.5em;font-family:-apple-system,
      BlinkMacSystemFont,
      avenir next,
      avenir,
      segoe ui,
      helvetica neue,
      helvetica,
      Cantarell,
      Ubuntu,
      roboto,
      noto,
      arial,
      sans-serif;overflow-x:hidden;overflow-y:auto;}.rcb-ui-container.fullscreen.svelte-18ddpt0 {position:fixed;top:0;left:0;right:0;bottom:0;overscroll-behavior:none;z-index:1000001;}.rcb-ui-container.inside.svelte-18ddpt0 {position:relative;width:100%;z-index:unset;height:100%;top:0;left:0;}`
};
function G_(r, e) {
  _e(e, !0), ke(r, F0);
  const t = X(e, "brandingAppearance", 3, void 0), n = X(e, "brandFontConfig", 3, void 0), a = X(e, "isInElement", 3, !1), i = /* @__PURE__ */ m(() => new Fn(t()).getTextStyleVars(n())), s = /* @__PURE__ */ m(() => new Fn(t()).spacingStyleVars), l = /* @__PURE__ */ m(() => [o(i), o(s)].join("; ")), c = /* @__PURE__ */ m(() => {
    var f;
    return (f = n()) != null && f.font_url ? Ea(n().font_url) : null;
  }), u = async (f) => {
    try {
      const g = new FontFace(L_, `url(${f})`);
      await g.load(), document.fonts.add(g);
    } catch (g) {
      console.error("Failed to set brand font:", g);
    }
  };
  ar(() => {
    o(c) && u(o(c));
  });
  var d = A0();
  let p;
  var _ = T(d);
  yr(_, () => e.children ?? er), K(() => {
    p = ur(d, 1, "rcb-ui-container svelte-18ddpt0", null, p, { fullscreen: !a(), inside: a() }), Fe(d, o(l));
  }), x(r, d), ge();
}
var q0 = /* @__PURE__ */ V('<div id="layout-query-container" class="svelte-1ewgunr"><div class="rcb-ui-layout svelte-1ewgunr"><!></div></div>');
const M0 = {
  hash: "svelte-1ewgunr",
  code: `#layout-query-container.svelte-1ewgunr {width:100%;height:100%;container-type:size;container-name:layout-query-container;overflow-y:auto;overscroll-behavior:none;}.rcb-ui-layout.svelte-1ewgunr {width:100%;min-height:100%;display:flex;box-sizing:border-box;flex-direction:column;overscroll-behavior:none;}

  @container layout-query-container (width < 768px) {.rcb-ui-layout.svelte-1ewgunr {flex-grow:1;}
  }

  @container layout-query-container (width >= 768px) {.rcb-ui-layout.svelte-1ewgunr {flex-direction:row;}
  }`
};
function z0(r, e) {
  ke(r, M0);
  let t = X(e, "style", 8, ""), n = X(e, "children", 8);
  var a = q0(), i = T(a), s = T(i);
  yr(s, () => n() ?? er), K(() => Fe(i, t())), x(r, a);
}
const O0 = (r) => r;
function N0(r) {
  const e = r - 1;
  return e * e * e + 1;
}
function id(r) {
  const e = typeof r == "string" && r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    r,
    "px"
  ];
}
function L0(r, { delay: e = 0, duration: t = 400, easing: n = O0 } = {}) {
  const a = +getComputedStyle(r).opacity;
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (i) => `opacity: ${i * a}`
  };
}
function j0(r, { delay: e = 0, duration: t = 400, easing: n = N0, x: a = 0, y: i = 0, opacity: s = 0 } = {}) {
  const l = getComputedStyle(r), c = +l.opacity, u = l.transform === "none" ? "" : l.transform, d = c * (1 - s), [p, _] = id(a), [f, g] = id(i);
  return {
    delay: e,
    duration: t,
    easing: n,
    css: (w, k) => `
			transform: ${u} translate(${(1 - w) * p}${_}, ${(1 - w) * f}${g});
			opacity: ${c - d * k}`
  };
}
var B0 = /* @__PURE__ */ V('<div><div class="layout-wrapper svelte-13h5jq9"><div><!></div></div></div>');
const R0 = {
  hash: "svelte-13h5jq9",
  code: `.layout-wrapper-outer.svelte-13h5jq9 {flex:1;display:flex;background-color:var(--rc-color-background);}.layout-wrapper-outer.rcb-navbar.svelte-13h5jq9 {justify-content:flex-end;}.layout-wrapper.svelte-13h5jq9 {width:100%;}.layout-content.svelte-13h5jq9 {box-sizing:border-box;background-color:var(--rc-color-background);color:var(--rc-color-grey-text-dark);display:flex;flex-direction:column;}.layout-content.rcb-navbar.svelte-13h5jq9 {display:flex;flex-direction:column;gap:var(--rc-spacing-gapXLarge-mobile);}

  @container layout-query-container (width < 768px) {.layout-wrapper.svelte-13h5jq9 {width:100%;min-width:300px;display:flex;flex-grow:1;}.layout-content.svelte-13h5jq9 {flex-grow:1;height:100%;}.layout-content.rcb-navbar.svelte-13h5jq9 {padding-bottom:var(--rc-spacing-outerPadding-mobile);}.layout-content.rcb-main-block.svelte-13h5jq9 {padding:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.layout-wrapper.svelte-13h5jq9 {flex-basis:544px;}.layout-content.rcb-main-block.svelte-13h5jq9 {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}.layout-content.rcb-navbar.svelte-13h5jq9 {gap:var(--rc-spacing-gapXXLarge-desktop);}.layout-wrapper-outer.svelte-13h5jq9 {padding-top:var(--rc-spacing-outerPaddingTop-desktop);padding-bottom:var(--rc-spacing-outerPadding-desktop);}
  }`
};
function K_(r, e) {
  ke(r, R0);
  const t = `rcb-${e.location}`;
  var n = B0(), a = T(n), i = T(a), s = T(i);
  yr(s, () => e.children ?? er), K(() => {
    ur(n, 1, `layout-wrapper-outer ${t}`, "svelte-13h5jq9"), ur(i, 1, `layout-content ${t}`, "svelte-13h5jq9");
  }), xp(3, i, () => L0, () => ({ duration: 500, delay: 50 })), x(r, n);
}
var U0 = /* @__PURE__ */ V('<div class="navbar-body svelte-191m2u3"><!></div>'), V0 = /* @__PURE__ */ V('<div class="navbar-header svelte-191m2u3"><!></div> <!>', 1), W0 = /* @__PURE__ */ V('<div class="rcb-ui-navbar svelte-191m2u3"><!></div>');
const H0 = {
  hash: "svelte-191m2u3",
  code: `.rcb-ui-navbar.svelte-191m2u3 {width:100%;max-width:none;flex-shrink:0;background-color:var(--rc-color-background);}

  @container layout-query-container (width < 768px) {.navbar-body.svelte-191m2u3 {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-ui-navbar.svelte-191m2u3 {width:50vw;display:flex;justify-content:flex-end;}.navbar-header.svelte-191m2u3 {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}.navbar-body.svelte-191m2u3 {padding-left:var(--rc-spacing-outerPadding-desktop);padding-right:var(--rc-spacing-outerPadding-desktop);}
  }`
};
function Y0(r, e) {
  _e(e, !0), ke(r, H0);
  const t = X(e, "brandingAppearance", 3, void 0), n = /* @__PURE__ */ m(() => new Fn(t()).productInfoStyleVars);
  var a = W0(), i = T(a);
  K_(i, {
    location: "navbar",
    children: (s, l) => {
      var c = V0(), u = ce(c), d = T(u);
      yr(d, () => e.headerContent ?? er);
      var p = W(u, 2);
      {
        var _ = (f) => {
          var g = U0(), w = T(g);
          yr(w, () => e.bodyContent ?? er), x(f, g);
        };
        G(p, (f) => {
          e.bodyContent && f(_);
        });
      }
      x(s, c);
    }
  }), K(() => Fe(a, o(n))), x(r, a), ge();
}
var G0 = /* @__PURE__ */ V('<button class="rcb-close-button svelte-8qlvu1" data-testid="close-button"><!></button>');
const K0 = {
  hash: "svelte-8qlvu1",
  code: ".rcb-close-button.svelte-8qlvu1 {padding:10px;border:none;cursor:pointer;background-color:transparent;border-radius:50%;color:var(--rc-color-grey-text-dark);display:inline-flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;}.rcb-close-button.svelte-8qlvu1:active {transition:outline 0.1s ease-in-out;outline:2px solid var(--rc-color-focus);}.rcb-close-button.svelte-8qlvu1:hover {color:var(--rc-color-grey-text-dark);}"
};
function X_(r, e) {
  ke(r, K0);
  var t = G0(), n = T(t);
  qn(n, { name: "close" }), qr("click", t, function(a) {
    Ap.call(this, e, a);
  }), x(r, t);
}
const X0 = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clip-path="url(#clip0_6333_13826)">
    <rect opacity="0.2" width="12" height="12" rx="2.25" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.53206 2.06972C9.28201 2.17252 9.88339 2.78615 9.96146 3.52824L10.2298 6.07852C10.2893 6.64453 9.87503 7.12287 9.30441 7.14692C8.73379 7.17097 8.22294 6.73163 8.16339 6.16562L8.08036 5.37641L6.00414 7.35193C5.6039 7.73275 4.94623 7.70146 4.53518 7.28205C4.12413 6.86263 4.11537 6.2139 4.51561 5.83307L6.59182 3.85756L5.79425 3.74823C5.22225 3.66982 4.79448 3.15142 4.83881 2.59036C4.88313 2.02929 5.38276 1.63802 5.95476 1.71643L8.53206 2.06972Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_6333_13826">
    <rect width="12" height="12" fill="white"/>
    </clipPath>
    </defs>
    </svg>
`;
var Z0 = /* @__PURE__ */ V('<div style="color:var(--rc-color-accent);" class="rcb-ui-asset-icon svelte-w5b346"><!></div>');
const J0 = {
  hash: "svelte-w5b346",
  code: "div.svelte-w5b346 {height:12px;width:12px;}"
};
function Q0(r) {
  ke(r, J0);
  var e = Z0(), t = T(e);
  pn(t, () => X0), x(r, e);
}
var $0 = /* @__PURE__ */ V('<span class="rcb-sandbox-text svelte-bwwvt4">SANDBOX</span>'), ex = /* @__PURE__ */ V('<span class="rcb-sandbox-text svelte-bwwvt4">Share feedback</span>'), rx = /* @__PURE__ */ V('<a class="rcb-ui-sandbox-banner-link svelte-bwwvt4" target="_blank"><!> <!></a>'), tx = /* @__PURE__ */ V('<div><div class="rcb-sandbox-banner-spacer svelte-bwwvt4"></div> <div class="rcb-sandbox-banner-title-wrapper svelte-bwwvt4"><!></div> <div class="rcb-sandbox-banner-actions-wrapper svelte-bwwvt4" style="--arrow-fill-color: black"><!> <!></div></div>');
const nx = {
  hash: "svelte-bwwvt4",
  code: `.rcb-ui-sandbox-banner.svelte-bwwvt4 {position:static;background-color:var(--rc-color-warning);color:black;padding:var(--rc-spacing-gapMedium-mobile) 0;display:flex;justify-content:space-between;align-items:center;height:24px;}.rcb-sandbox-text.svelte-bwwvt4 {font-weight:bold;color:black;line-height:2;}.rcb-sandbox-banner-spacer.svelte-bwwvt4 {flex:1;}.rcb-sandbox-banner-title-wrapper.svelte-bwwvt4 {flex:0;text-align:center;}

  @media (max-width: 768px) {.rcb-sandbox-banner-spacer.svelte-bwwvt4 {flex:0;}.rcb-sandbox-banner-title-wrapper.svelte-bwwvt4 {padding-left:var(--rc-spacing-gapXXLarge-mobile);}
  }.rcb-sandbox-banner-actions-wrapper.svelte-bwwvt4 {flex:1;display:flex;justify-content:flex-end;align-items:center;}.rcb-ui-sandbox-banner-link.svelte-bwwvt4 {display:flex;align-items:center;gap:var(--rc-spacing-gapSmall-mobile);line-height:12px;}`
};
function Z_(r, e) {
  _e(e, !1), ke(r, nx);
  let t = X(e, "style", 8, ""), n = X(e, "isInElement", 8, !1), a = X(e, "brandingInfo", 8, null), i = /* @__PURE__ */ lr(!0);
  function s() {
    be.debugLog("closeBanner"), q(i, !1);
  }
  On();
  var l = Ee(), c = ce(l);
  {
    var u = (d) => {
      var p = tx();
      let _;
      var f = W(T(p), 2), g = T(f);
      ze(g, {
        size: "caption-default",
        children: (b, v) => {
          var P = $0();
          x(b, P);
        },
        $$slots: { default: !0 }
      });
      var w = W(f, 2), k = T(w);
      {
        var h = (b) => {
          var v = rx(), P = T(v);
          Q0(P);
          var I = W(P, 2);
          ze(I, {
            size: "caption-link",
            children: (E, C) => {
              var S = ex();
              x(E, S);
            },
            $$slots: { default: !0 }
          }), K(() => he(v, "href", (We(a()), Re(() => a().sandbox_configuration.checkout_feedback_form_url)))), x(b, v);
        };
        G(k, (b) => {
          We(a()), Re(() => {
            var v;
            return (v = a()) == null ? void 0 : v.sandbox_configuration;
          }) && b(h);
        });
      }
      var y = W(k, 2);
      X_(y, { $$events: { click: s } }), K(() => {
        _ = ur(p, 1, "rcb-ui-sandbox-banner svelte-bwwvt4", null, _, { isInElement: n() }), Fe(p, t());
      }), xp(2, p, () => j0, () => ({ y: -100, duration: 300 })), x(d, p);
    };
    G(c, (d) => {
      o(i) && d(u);
    });
  }
  x(r, l), ge();
}
var ax = /* @__PURE__ */ V('<div class="rcb-ui-main svelte-iuk1gs"><!></div>');
const ox = {
  hash: "svelte-iuk1gs",
  code: ".rcb-ui-main.svelte-iuk1gs {flex:1;display:flex;background-color:var(--rc-color-background);}"
};
function ix(r, e) {
  _e(e, !0), ke(r, ox);
  const t = /* @__PURE__ */ m(() => new Fn(e.brandingAppearance).formStyleVars);
  var n = ax(), a = T(n);
  K_(a, {
    location: "main-block",
    children: (i, s) => {
      var l = Ee(), c = ce(l);
      yr(c, () => e.children ?? er), x(i, l);
    }
  }), K(() => Fe(n, o(t))), x(r, n), ge();
}
var sx = /* @__PURE__ */ V("<!> <!>", 1), lx = /* @__PURE__ */ V("<!> <!>", 1);
function J_(r, e) {
  _e(e, !0);
  const t = /* @__PURE__ */ m(() => {
    var n;
    return R_((n = e.brandingInfo) == null ? void 0 : n.appearance) ?? "";
  });
  {
    let n = /* @__PURE__ */ m(() => {
      var i;
      return (i = e.brandingInfo) == null ? void 0 : i.appearance;
    }), a = /* @__PURE__ */ m(() => {
      var i;
      return (i = e.brandingInfo) == null ? void 0 : i.brand_font_config;
    });
    G_(r, {
      get brandingAppearance() {
        return o(n);
      },
      get brandFontConfig() {
        return o(a);
      },
      get isInElement() {
        return e.isInElement;
      },
      children: (i, s) => {
        var l = lx(), c = ce(l);
        {
          var u = (p) => {
            Z_(p, {
              get style() {
                return o(t);
              },
              get isInElement() {
                return e.isInElement;
              },
              get brandingInfo() {
                return e.brandingInfo;
              }
            });
          };
          G(c, (p) => {
            e.isSandbox && p(u);
          });
        }
        var d = W(c, 2);
        z0(d, {
          get style() {
            return o(t);
          },
          children: (p, _) => {
            var f = sx(), g = ce(f);
            {
              var w = (h) => {
                {
                  let y = /* @__PURE__ */ m(() => {
                    var b;
                    return (b = e.brandingInfo) == null ? void 0 : b.appearance;
                  });
                  Y0(h, {
                    get brandingAppearance() {
                      return o(y);
                    },
                    get headerContent() {
                      return e.navbarHeaderContent;
                    },
                    get bodyContent() {
                      return e.navbarBodyContent;
                    }
                  });
                }
              };
              G(g, (h) => {
                (e.navbarHeaderContent || e.navbarBodyContent) && h(w);
              });
            }
            var k = W(g, 2);
            {
              let h = /* @__PURE__ */ m(() => {
                var y;
                return (y = e.brandingInfo) == null ? void 0 : y.appearance;
              });
              ix(k, {
                get brandingAppearance() {
                  return o(h);
                },
                children: (y, b) => {
                  var v = Ee(), P = ce(v);
                  yr(P, () => e.mainContent ?? er), x(y, v);
                },
                $$slots: { default: !0 }
              });
            }
            x(p, f);
          },
          $$slots: { default: !0 }
        }), x(i, l);
      },
      $$slots: { default: !0 }
    });
  }
  ge();
}
var cx = /* @__PURE__ */ V('<source type="image/webp"/>'), ux = /* @__PURE__ */ V('<picture class="rcb-app-icon-picture-container svelte-15hivnw"><!> <img class="rcb-app-icon svelte-15hivnw" alt="App icon"/></picture>'), dx = /* @__PURE__ */ V('<div class="rcb-app-icon loading svelte-15hivnw"></div>');
const px = {
  hash: "svelte-15hivnw",
  code: ".rcb-app-icon.svelte-15hivnw {width:32px;height:32px;border-radius:12px;box-shadow:0px 1px 10px 0px rgba(0, 0, 0, 0.1);}.rcb-app-icon-picture-container.svelte-15hivnw {height:32px;}.rcb-app-icon.loading.svelte-15hivnw {background-color:gray;}"
};
function _x(r, e) {
  ke(r, px);
  var t = Ee(), n = ce(t);
  {
    var a = (s) => {
      var l = ux(), c = T(l);
      {
        var u = (p) => {
          var _ = cx();
          K(() => he(_, "srcset", e.srcWebp)), x(p, _);
        };
        G(c, (p) => {
          e.srcWebp && p(u);
        });
      }
      var d = W(c, 2);
      K(() => he(d, "src", e.src)), x(s, l);
    }, i = (s) => {
      var l = dx();
      x(s, l);
    };
    G(n, (s) => {
      e.src ? s(a) : s(i, !1);
    });
  }
  x(r, t);
}
const ai = (r) => !r || r.trim() === "" ? null : r, gx = {
  icon: null,
  iconWebp: null,
  wordmark: null,
  wordmarkWebp: null,
  src: null,
  srcWebp: null,
  wordmarkSrc: null,
  wordmarkSrcWebp: null
}, fx = (r) => {
  if (!r)
    return gx;
  const e = ai(r.app_icon), t = ai(r.app_icon_webp), n = ai(r.app_wordmark), a = ai(r.app_wordmark_webp);
  return {
    src: e ? Ea(e) : null,
    srcWebp: t ? Ea(t) : null,
    wordmarkSrc: n ? Ea(n) : null,
    wordmarkSrcWebp: a ? Ea(a) : null
  };
};
var mx = /* @__PURE__ */ V('<button class="rcb-back-button svelte-7773d6" data-testid="close-button"><!></button>');
const hx = {
  hash: "svelte-7773d6",
  code: ".rcb-back-button.svelte-7773d6 {padding:8px;border:none;cursor:pointer;background-color:transparent;border-radius:50%;color:var(--rc-color-grey-text-dark);display:inline-flex;align-items:center;justify-content:center;width:fit-content;height:fit-content;}"
};
function vx(r, e) {
  ke(r, hx);
  let t = X(e, "disabled", 3, !1);
  var n = mx(), a = T(n);
  qn(a, { name: "back" }), K(() => n.disabled = t()), qr("click", n, function(i) {
    Ap.call(this, e, i);
  }), x(r, n);
}
var yx = /* @__PURE__ */ V('<source type="image/webp" class="rcb-app-icon svelte-7clux6"/>'), bx = /* @__PURE__ */ V('<picture class="rcb-app-icon svelte-7clux6"><!> <img class="rcb-app-icon svelte-7clux6" alt="App icon"/></picture>');
const kx = {
  hash: "svelte-7clux6",
  code: ".rcb-app-icon.svelte-7clux6 {height:32px;}"
};
function wx(r, e) {
  ke(r, kx);
  var t = bx(), n = T(t);
  {
    var a = (s) => {
      var l = yx();
      K(() => he(l, "srcset", e.srcWebp)), x(s, l);
    };
    G(n, (s) => {
      e.srcWebp && s(a);
    });
  }
  var i = W(n, 2);
  K(() => he(i, "src", e.src)), x(r, t);
}
var Px = /* @__PURE__ */ V('<div class="rcb-back-wrapper svelte-11a99mf"><!></div>'), xx = /* @__PURE__ */ V('<div class="rcb-close-wrapper svelte-11a99mf"><!></div>'), Ex = /* @__PURE__ */ V('<div><!> <div class="rcb-header svelte-11a99mf"><div class="rcb-title svelte-11a99mf"><!> <!></div></div> <!></div>');
const Sx = {
  hash: "svelte-11a99mf",
  code: `.rcb-header-wrapper.svelte-11a99mf {display:flex;position:relative;justify-content:space-between;align-items:center;}.rcb-header.svelte-11a99mf {display:flex;flex-direction:row;align-items:center;padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);height:40px;justify-content:space-between;}.rcb-title.svelte-11a99mf {display:flex;align-items:center;position:relative;gap:var(--rc-spacing-gapMedium-mobile);}.rcb-close-wrapper.svelte-11a99mf,
  .rcb-back-wrapper.svelte-11a99mf {padding:var(--rc-spacing-gapSmall-mobile);}

  @container layout-query-container (width < 768px) {.rcb-header.svelte-11a99mf {padding-top:var(--rc-spacing-gapMedium-mobile);}.rcb-close-wrapper.svelte-11a99mf {padding-top:var(--rc-spacing-gapMedium-mobile);}.rcb-header-wrapper.svelte-11a99mf {padding-top:var(--rc-spacing-gapSmall-mobile);padding-bottom:var(--rc-spacing-gapSmall-mobile);padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}.rcb-header-wrapper.rcb-with-close-button.svelte-11a99mf {padding-right:var(--rc-spacing-gapSmall-mobile);}.rcb-back-wrapper.svelte-11a99mf {display:none;}.rcb-header-wrapper.svelte-11a99mf {padding-left:var(--rc-spacing-outerPadding-mobile);padding-right:var(--rc-spacing-outerPadding-mobile);}
  }

  @container layout-query-container (width >= 768px) {.rcb-close-wrapper.svelte-11a99mf {display:none;}.rcb-back-wrapper.svelte-11a99mf {position:absolute;left:-48px;margin-left:0;}
  }`
};
function Ix(r, e) {
  _e(e, !0), ke(r, Sx);
  const t = /* @__PURE__ */ m(() => fx(e.brandingInfo)), n = /* @__PURE__ */ m(() => o(t).wordmarkSrc), a = /* @__PURE__ */ m(() => o(t).wordmarkSrcWebp), i = /* @__PURE__ */ m(() => o(t).src), s = /* @__PURE__ */ m(() => o(t).srcWebp), l = () => {
    e.onClose && e.onClose();
  };
  var c = Ex();
  let u;
  var d = T(c);
  {
    var p = (P) => {
      var I = Px(), E = T(I);
      vx(E, { $$events: { click: l } }), x(P, I);
    };
    G(d, (P) => {
      e.showCloseButton && P(p);
    });
  }
  var _ = W(d, 2), f = T(_), g = T(f);
  {
    var w = (P) => {
      wx(P, {
        get src() {
          return o(n);
        },
        get srcWebp() {
          return o(a);
        }
      });
    }, k = (P) => {
      var I = Ee(), E = ce(I);
      {
        var C = (S) => {
          _x(S, {
            get src() {
              return o(i);
            },
            get srcWebp() {
              return o(s);
            }
          });
        };
        G(
          E,
          (S) => {
            o(i) !== null && o(s) !== null && S(C);
          },
          !0
        );
      }
      x(P, I);
    };
    G(g, (P) => {
      o(n) !== null ? P(w) : P(k, !1);
    });
  }
  var h = W(g, 2);
  {
    var y = (P) => {
      ze(P, {
        size: "body-base",
        children: (I, E) => {
          var C = je();
          K(() => {
            var S;
            return fe(C, (S = e.brandingInfo) == null ? void 0 : S.app_name);
          }), x(I, C);
        },
        $$slots: { default: !0 }
      });
    };
    G(h, (P) => {
      o(n) === null && P(y);
    });
  }
  var b = W(_, 2);
  {
    var v = (P) => {
      var I = xx(), E = T(I);
      X_(E, { $$events: { click: l } }), x(P, I);
    };
    G(b, (P) => {
      e.showCloseButton && P(v);
    });
  }
  K(() => u = ur(c, 1, "rcb-header-wrapper svelte-11a99mf", null, u, { "rcb-with-close-button": e.showCloseButton })), x(r, c), ge();
}
var Cx = /* @__PURE__ */ V("<!> <!> <!> <!>", 1);
function Tx(r, e) {
  _e(e, !0);
  let t = X(e, "showDiscountCodeField", 3, !1), n = X(e, "draftDiscountCode", 3, ""), a = X(e, "appliedDiscountCode", 3, null), i = X(e, "discountCodeError", 3, null), s = X(e, "isUpdatingDiscountCode", 3, !1), l = X(e, "isDiscountCodeControlsEnabled", 3, !1), c = X(e, "onDraftDiscountCodeChange", 3, void 0), u = X(e, "onApplyDiscountCode", 3, void 0), d = X(e, "onRemoveDiscountCode", 3, void 0), p = X(e, "onPaymentProcessingChange", 3, void 0), _ = X(e, "onSessionPricingUpdated", 3, void 0), f = X(e, "onClose", 3, void 0), g = X(e, "hideBackButton", 3, !1), w = X(e, "lastTaxCustomerDetailsStore", 19, () => mr(null));
  const k = wo(e.productDetails, e.purchaseOptionToUse);
  let h = /* @__PURE__ */ re(rr(e.defaultPriceBreakdown ?? {
    currency: k.currency,
    totalAmountInMicros: k.amountMicros,
    totalExcludingTaxInMicros: k.amountMicros,
    taxCalculationStatus: "unavailable",
    taxAmountInMicros: null,
    taxBreakdown: null
  }));
  ar(() => {
    const b = wo(e.productDetails, e.purchaseOptionToUse);
    q(
      h,
      e.defaultPriceBreakdown ?? {
        currency: b.currency,
        totalAmountInMicros: b.amountMicros,
        totalExcludingTaxInMicros: b.amountMicros,
        taxCalculationStatus: "unavailable",
        taxAmountInMicros: null,
        taxBreakdown: null
      },
      !0
    );
  });
  const y = (b) => {
    q(h, b, !0);
  };
  J_(r, {
    get brandingInfo() {
      return e.brandingInfo;
    },
    get isInElement() {
      return e.isInElement;
    },
    get isSandbox() {
      return e.isSandbox;
    },
    get onClose() {
      return f();
    },
    navbarHeaderContent: (I) => {
      {
        let E = /* @__PURE__ */ m(() => !e.isInElement && !!f() && !g());
        Ix(I, {
          get brandingInfo() {
            return e.brandingInfo;
          },
          get onClose() {
            return f();
          },
          get showCloseButton() {
            return o(E);
          }
        });
      }
    },
    navbarBodyContent: (I) => {
      {
        let E = /* @__PURE__ */ m(() => {
          var C, S;
          return ((S = (C = e.brandingInfo) == null ? void 0 : C.appearance) == null ? void 0 : S.show_product_description) ?? !1;
        });
        D0(I, {
          get productDetails() {
            return e.productDetails;
          },
          get purchaseOption() {
            return e.purchaseOptionToUse;
          },
          get showProductDescription() {
            return o(E);
          },
          get showDiscountCodeField() {
            return t();
          },
          get discountCode() {
            return n();
          },
          get appliedDiscountCode() {
            return a();
          },
          get discountCodeError() {
            return i();
          },
          get isUpdatingDiscountCode() {
            return s();
          },
          get isDiscountCodeControlsEnabled() {
            return l();
          },
          get onDiscountCodeChange() {
            return c();
          },
          get onApplyDiscountCode() {
            return u();
          },
          get onRemoveDiscountCode() {
            return d();
          },
          get priceBreakdown() {
            return o(h);
          }
        });
      }
    },
    mainContent: (I) => {
      var E = Cx(), C = ce(E);
      {
        var S = (z) => {
          H1(z);
        };
        G(C, (z) => {
          e.currentPage === "payment-entry-loading" && z(S);
        });
      }
      var F = W(C, 2);
      {
        var D = (z) => {
          v1(z, {
            get productDetails() {
              return e.productDetails;
            },
            get purchaseOption() {
              return e.purchaseOptionToUse;
            },
            get brandingInfo() {
              return e.brandingInfo;
            },
            get purchaseOperationHelper() {
              return e.purchaseOperationHelper;
            },
            get gatewayParams() {
              return e.gatewayParams;
            },
            get managementUrl() {
              return e.managementUrl;
            },
            get customerEmail() {
              return e.customerEmail;
            },
            get forceEnableWalletMethods() {
              return e.forceEnableWalletMethods;
            },
            get defaultPriceBreakdown() {
              return e.defaultPriceBreakdown;
            },
            get termsAndConditionsUrl() {
              return e.termsAndConditionsUrl;
            },
            get onContinue() {
              return e.onContinue;
            },
            get onError() {
              return e.onError;
            },
            onPriceBreakdownUpdated: y,
            get onSessionPricingUpdated() {
              return _();
            },
            get onProcessingStateChange() {
              return p();
            },
            get lastTaxCustomerDetailsStore() {
              return w();
            }
          });
        };
        G(F, (z) => {
          e.currentPage === "payment-entry" && z(D);
        });
      }
      var O = W(F, 2);
      {
        var N = (z) => {
          {
            let M = /* @__PURE__ */ m(() => {
              var U;
              return ((U = e.brandingInfo) == null ? void 0 : U.support_email) ?? null;
            }), A = /* @__PURE__ */ m(() => {
              var U;
              return ((U = e.brandingInfo) == null ? void 0 : U.app_name) ?? null;
            });
            os(z, {
              get lastError() {
                return e.lastError;
              },
              get productDetails() {
                return e.productDetails;
              },
              get supportEmail() {
                return o(M);
              },
              get onDismiss() {
                return e.closeWithError;
              },
              get appName() {
                return o(A);
              }
            });
          }
        };
        G(O, (z) => {
          e.currentPage === "error" && z(N);
        });
      }
      var L = W(O, 2);
      {
        var Z = (z) => {
          is(z, {
            get onContinue() {
              return e.onContinue;
            }
          });
        };
        G(L, (z) => {
          e.currentPage === "success" && z(Z);
        });
      }
      x(I, E);
    },
    $$slots: {
      navbarHeaderContent: !0,
      navbarBodyContent: !0,
      mainContent: !0
    }
  }), ge();
}
function Q_(r) {
  return r.trim() === "" ? "You need to provide your email address to continue." : r.match(/^[^@]+@[^@]+\.[^@]+$/) ? null : "Email is not valid. Please provide a valid email address.";
}
function Dx(r) {
  if (r && !r.match(/^[A-Z]{3}$/)) {
    const e = `Currency code ${r} is not valid. Please provide a valid ISO 4217 currency code.`;
    throw be.errorLog(e), new Qe(Me.ConfigurationError, e);
  }
}
function Ax(r, e, t) {
  const n = t == null ? void 0 : t.selected_purchase_option;
  return n ? vh(
    r.productType,
    n
  ) ?? e : e;
}
function Fx(r, e) {
  var oe;
  _e(e, !0);
  const t = X(e, "customTranslations", 19, () => ({})), n = X(e, "skipSuccessPage", 3, !1), a = X(e, "showDiscountCodeField", 3, !1), i = X(e, "discountCode", 3, void 0), s = X(e, "hideBackButton", 3, !1), l = e.customerEmail ? Q_(e.customerEmail) : null;
  let c = /* @__PURE__ */ re(rr(l ? void 0 : e.customerEmail)), u = rr(e.rcPackage.webBillingProduct), d = /* @__PURE__ */ re(null);
  const p = mr(null);
  let _ = /* @__PURE__ */ m(() => Ax(u, e.purchaseOption, o(d))), f = /* @__PURE__ */ re(null), g = /* @__PURE__ */ re(rr(i() ?? "")), w = /* @__PURE__ */ re(null), k = /* @__PURE__ */ re(!1), h = /* @__PURE__ */ re(!1), y = /* @__PURE__ */ re("payment-entry-loading"), b = /* @__PURE__ */ re(null), v = /* @__PURE__ */ re(rr({})), P = /* @__PURE__ */ re(null), I = /* @__PURE__ */ re(void 0), E = /* @__PURE__ */ m(() => {
    var B, de, J;
    return ((J = (de = (B = o(d)) == null ? void 0 : B.applied_discounts) == null ? void 0 : de[0]) == null ? void 0 : J.discount_code) ?? null;
  }), C = /* @__PURE__ */ m(() => {
    var B, de;
    return {
      ...o(v),
      ...(de = (B = o(d)) == null ? void 0 : B.gateway_params) != null && de.elements_configuration ? {
        elements_configuration: o(d).gateway_params.elements_configuration
      } : {}
    };
  }), S = /* @__PURE__ */ re(null), F = /* @__PURE__ */ re(null), D = /* @__PURE__ */ re(null), O = new Tn(t(), e.selectedLocale, e.defaultLocale), N = mr(O);
  const L = mr(((oe = e.brandingInfo) == null ? void 0 : oe.appearance) ?? null);
  gr(fr, N), gr(jn, L), br(() => {
    e.isInElement || (q(S, document.documentElement.style.height, !0), q(F, document.documentElement.style.overflow, !0), q(D, document.body.style.height, !0), document.documentElement.style.height = "100%", document.body.style.height = "100%", document.documentElement.style.overflow = "hidden");
  }), Tt(() => {
    if (!e.isInElement) {
      const B = (de, J, ie) => {
        ie === "" ? de.style.removeProperty(J) : de.style.setProperty(J, ie);
      };
      B(document.documentElement, "height", o(S)), B(document.body, "height", o(D)), B(document.documentElement, "overflow", o(F));
    }
  }), gr(Uo, e.eventsTracker);
  let Z = rr(typeof e.purchases._shouldForceEnableWalletMethods == "function" ? e.purchases._shouldForceEnableWalletMethods() : !1);
  const z = (B, de, J) => {
    const ie = B.identifier ?? null;
    return ie === null ? Promise.reject(new ve(me.ErrorSettingUpPurchase, "Product ID was not set before purchase.")) : e.purchaseOperationHelper.checkoutStart({
      appUserId: e.appUserId,
      productId: ie,
      purchaseOption: de,
      presentedOfferingContext: B.presentedOfferingContext,
      customerEmail: J,
      metadata: e.metadata,
      workflowPurchaseContext: e.workflowPurchaseContext,
      attributionMetadata: e.attributionMetadata,
      paywallId: e.paywallId,
      paywallSessionId: e.paywallSessionId,
      locale: e.selectedLocale
    }).then((Ie) => ({ result: Ie, emailToUse: J })).catch((Ie) => {
      if (Ie.errorCode !== me.MissingEmailError)
        throw Ie;
      return e.purchaseOperationHelper.checkoutStart({
        appUserId: e.appUserId,
        productId: ie,
        purchaseOption: de,
        presentedOfferingContext: B.presentedOfferingContext,
        customerEmail: void 0,
        metadata: e.metadata,
        workflowPurchaseContext: e.workflowPurchaseContext,
        attributionMetadata: e.attributionMetadata,
        paywallId: e.paywallId,
        paywallSessionId: e.paywallSessionId,
        locale: e.selectedLocale
      }).then((we) => ({ result: we, emailToUse: void 0 }));
    });
  }, M = (B) => B ? B === tn.invalid_tax_location ? "pending" : "disabled" : "calculated", A = (B) => B instanceof ve && [
    me.StripeTaxNotActive,
    me.StripeInvalidTaxOriginAddress,
    me.StripeMissingRequiredPermission
  ].includes(B.errorCode), U = () => {
    const B = Oo(p);
    return {
      countryCode: B == null ? void 0 : B.countryCode,
      postalCode: B == null ? void 0 : B.postalCode,
      state: B == null ? void 0 : B.state,
      city: B == null ? void 0 : B.city,
      addressLine1: B == null ? void 0 : B.addressLine1,
      addressLine2: B == null ? void 0 : B.addressLine2
    };
  }, j = (B, de) => {
    q(d, B, !0), q(I, de ?? qp(B, M(B.failed_reason)), !0);
  };
  br(async () => {
    try {
      const { result: B, emailToUse: de } = await z(u, o(_), o(c));
      if (q(f, null), q(c, de, !0), q(v, B.gateway_params, !0), q(P, B.management_url, !0), i())
        try {
          const J = await e.purchaseOperationHelper.checkoutRefreshPricing({ ...U(), discountCode: i() });
          j(J);
        } catch (J) {
          if (A(J))
            throw J;
          if (a())
            q(w, J instanceof Error ? J.message : "Failed to apply discount code.", !0);
          else
            throw J instanceof ve ? J : new ve(me.ErrorSettingUpPurchase, "Failed to apply discount code.");
        }
      q(y, "payment-entry");
    } catch (B) {
      Y(B instanceof ve ? B : new ve(me.UnknownError, B instanceof Error ? B.message : String(B)));
    }
  });
  const R = (B) => {
    q(g, B, !0), q(w, null);
  }, Q = (B) => {
    q(h, B, !0);
  }, se = async (B) => {
    var J;
    const de = (B == null ? void 0 : B.trim()) || null;
    if (B !== null && de === null) {
      q(w, "Enter a discount code.");
      return;
    }
    q(k, !0), q(w, null);
    try {
      const ie = await e.purchaseOperationHelper.checkoutRefreshPricing({
        ...U(),
        discountCode: de
      });
      j(ie), q(g, de ?? "", !0), q(f, null), (J = e.onDiscountCodeChanged) == null || J.call(e, de);
    } catch (ie) {
      if (A(ie)) {
        Y(ie);
        return;
      }
      q(w, ie instanceof Error ? ie.message : "Failed to apply discount code.", !0);
    } finally {
      q(k, !1);
    }
  }, te = async () => {
    await se(o(g));
  }, le = async () => {
    await se(null);
  }, ae = () => {
    if (o(y) === "payment-entry") {
      e.purchaseOperationHelper.pollCurrentPurchaseForCompletion().then((B) => {
        q(b, B, !0), n() ? e.onFinished(B) : q(y, "success");
      }).catch((B) => {
        Y(B);
      });
      return;
    }
    if (o(y) === "success" || o(y) === "error") {
      e.onFinished(o(b));
      return;
    }
    q(y, "success");
  }, Y = (B) => {
    const de = T_({
      errorCode: B.getErrorCode().toString(),
      errorMessage: B.message
    });
    e.eventsTracker.trackSDKEvent(de), q(f, B, !0), q(y, "error");
  }, $ = () => {
    e.onError(o(f) ?? new ve(me.UnknownError, "Unknown error without state set."));
  };
  {
    let B = /* @__PURE__ */ m(() => e.purchases.isSandbox()), de = /* @__PURE__ */ m(() => o(y) === "payment-entry" && !o(h)), J = /* @__PURE__ */ m(() => o(c) ?? null);
    Tx(r, {
      get isSandbox() {
        return o(B);
      },
      get currentPage() {
        return o(y);
      },
      get brandingInfo() {
        return e.brandingInfo;
      },
      get productDetails() {
        return u;
      },
      get purchaseOptionToUse() {
        return o(_);
      },
      get lastError() {
        return o(f);
      },
      get gatewayParams() {
        return o(C);
      },
      get managementUrl() {
        return o(P);
      },
      get purchaseOperationHelper() {
        return e.purchaseOperationHelper;
      },
      get isInElement() {
        return e.isInElement;
      },
      get termsAndConditionsUrl() {
        return e.termsAndConditionsUrl;
      },
      get showDiscountCodeField() {
        return a();
      },
      get draftDiscountCode() {
        return o(g);
      },
      get appliedDiscountCode() {
        return o(E);
      },
      get discountCodeError() {
        return o(w);
      },
      get isUpdatingDiscountCode() {
        return o(k);
      },
      get isDiscountCodeControlsEnabled() {
        return o(de);
      },
      get forceEnableWalletMethods() {
        return Z;
      },
      get customerEmail() {
        return o(J);
      },
      get defaultPriceBreakdown() {
        return o(I);
      },
      closeWithError: $,
      onDraftDiscountCodeChange: R,
      onApplyDiscountCode: te,
      onRemoveDiscountCode: le,
      onPaymentProcessingChange: Q,
      onSessionPricingUpdated: j,
      onContinue: ae,
      onError: Y,
      get onClose() {
        return e.onClose;
      },
      get hideBackButton() {
        return s();
      },
      get lastTaxCustomerDetailsStore() {
        return p;
      }
    });
  }
  ge();
}
function sd(r, e, t, n, a, i, s) {
  try {
    var l = r[i](s), c = l.value;
  } catch (u) {
    return void t(u);
  }
  l.done ? e(c) : Promise.resolve(c).then(n, a);
}
function qx(r) {
  return function() {
    var e = this, t = arguments;
    return new Promise(function(n, a) {
      var i = r.apply(e, t);
      function s(c) {
        sd(i, n, a, s, l, "next", c);
      }
      function l(c) {
        sd(i, n, a, s, l, "throw", c);
      }
      s(void 0);
    });
  };
}
function Mx(r, e, t) {
  return (e = Nx(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function ld(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Sl(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ld(Object(t), !0).forEach(function(n) {
      Mx(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ld(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function $_(r, e) {
  if (r == null) return {};
  var t, n, a = zx(r, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    for (n = 0; n < i.length; n++) t = i[n], e.includes(t) || {}.propertyIsEnumerable.call(r, t) && (a[t] = r[t]);
  }
  return a;
}
function zx(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function Il() {
  Il = function() {
    return e;
  };
  var r, e = {}, t = Object.prototype, n = t.hasOwnProperty, a = Object.defineProperty || function(z, M, A) {
    z[M] = A.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, s = i.iterator || "@@iterator", l = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(z, M, A) {
    return Object.defineProperty(z, M, {
      value: A,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), z[M];
  }
  try {
    u({}, "");
  } catch {
    u = function(M, A, U) {
      return M[A] = U;
    };
  }
  function d(z, M, A, U) {
    var j = M && M.prototype instanceof h ? M : h, R = Object.create(j.prototype), Q = new L(U || []);
    return a(R, "_invoke", {
      value: F(z, A, Q)
    }), R;
  }
  function p(z, M, A) {
    try {
      return {
        type: "normal",
        arg: z.call(M, A)
      };
    } catch (U) {
      return {
        type: "throw",
        arg: U
      };
    }
  }
  e.wrap = d;
  var _ = "suspendedStart", f = "suspendedYield", g = "executing", w = "completed", k = {};
  function h() {
  }
  function y() {
  }
  function b() {
  }
  var v = {};
  u(v, s, function() {
    return this;
  });
  var P = Object.getPrototypeOf, I = P && P(P(Z([])));
  I && I !== t && n.call(I, s) && (v = I);
  var E = b.prototype = h.prototype = Object.create(v);
  function C(z) {
    ["next", "throw", "return"].forEach(function(M) {
      u(z, M, function(A) {
        return this._invoke(M, A);
      });
    });
  }
  function S(z, M) {
    function A(j, R, Q, se) {
      var te = p(z[j], z, R);
      if (te.type !== "throw") {
        var le = te.arg, ae = le.value;
        return ae && typeof ae == "object" && n.call(ae, "__await") ? M.resolve(ae.__await).then(function(Y) {
          A("next", Y, Q, se);
        }, function(Y) {
          A("throw", Y, Q, se);
        }) : M.resolve(ae).then(function(Y) {
          le.value = Y, Q(le);
        }, function(Y) {
          return A("throw", Y, Q, se);
        });
      }
      se(te.arg);
    }
    var U;
    a(this, "_invoke", {
      value: function(j, R) {
        function Q() {
          return new M(function(se, te) {
            A(j, R, se, te);
          });
        }
        return U = U ? U.then(Q, Q) : Q();
      }
    });
  }
  function F(z, M, A) {
    var U = _;
    return function(j, R) {
      if (U === g) throw Error("Generator is already running");
      if (U === w) {
        if (j === "throw") throw R;
        return {
          value: r,
          done: !0
        };
      }
      for (A.method = j, A.arg = R; ; ) {
        var Q = A.delegate;
        if (Q) {
          var se = D(Q, A);
          if (se) {
            if (se === k) continue;
            return se;
          }
        }
        if (A.method === "next") A.sent = A._sent = A.arg;
        else if (A.method === "throw") {
          if (U === _) throw U = w, A.arg;
          A.dispatchException(A.arg);
        } else A.method === "return" && A.abrupt("return", A.arg);
        U = g;
        var te = p(z, M, A);
        if (te.type === "normal") {
          if (U = A.done ? w : f, te.arg === k) continue;
          return {
            value: te.arg,
            done: A.done
          };
        }
        te.type === "throw" && (U = w, A.method = "throw", A.arg = te.arg);
      }
    };
  }
  function D(z, M) {
    var A = M.method, U = z.iterator[A];
    if (U === r) return M.delegate = null, A === "throw" && z.iterator.return && (M.method = "return", M.arg = r, D(z, M), M.method === "throw") || A !== "return" && (M.method = "throw", M.arg = new TypeError("The iterator does not provide a '" + A + "' method")), k;
    var j = p(U, z.iterator, M.arg);
    if (j.type === "throw") return M.method = "throw", M.arg = j.arg, M.delegate = null, k;
    var R = j.arg;
    return R ? R.done ? (M[z.resultName] = R.value, M.next = z.nextLoc, M.method !== "return" && (M.method = "next", M.arg = r), M.delegate = null, k) : R : (M.method = "throw", M.arg = new TypeError("iterator result is not an object"), M.delegate = null, k);
  }
  function O(z) {
    var M = {
      tryLoc: z[0]
    };
    1 in z && (M.catchLoc = z[1]), 2 in z && (M.finallyLoc = z[2], M.afterLoc = z[3]), this.tryEntries.push(M);
  }
  function N(z) {
    var M = z.completion || {};
    M.type = "normal", delete M.arg, z.completion = M;
  }
  function L(z) {
    this.tryEntries = [{
      tryLoc: "root"
    }], z.forEach(O, this), this.reset(!0);
  }
  function Z(z) {
    if (z || z === "") {
      var M = z[s];
      if (M) return M.call(z);
      if (typeof z.next == "function") return z;
      if (!isNaN(z.length)) {
        var A = -1, U = function j() {
          for (; ++A < z.length; ) if (n.call(z, A)) return j.value = z[A], j.done = !1, j;
          return j.value = r, j.done = !0, j;
        };
        return U.next = U;
      }
    }
    throw new TypeError(typeof z + " is not iterable");
  }
  return y.prototype = b, a(E, "constructor", {
    value: b,
    configurable: !0
  }), a(b, "constructor", {
    value: y,
    configurable: !0
  }), y.displayName = u(b, c, "GeneratorFunction"), e.isGeneratorFunction = function(z) {
    var M = typeof z == "function" && z.constructor;
    return !!M && (M === y || (M.displayName || M.name) === "GeneratorFunction");
  }, e.mark = function(z) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(z, b) : (z.__proto__ = b, u(z, c, "GeneratorFunction")), z.prototype = Object.create(E), z;
  }, e.awrap = function(z) {
    return {
      __await: z
    };
  }, C(S.prototype), u(S.prototype, l, function() {
    return this;
  }), e.AsyncIterator = S, e.async = function(z, M, A, U, j) {
    j === void 0 && (j = Promise);
    var R = new S(d(z, M, A, U), j);
    return e.isGeneratorFunction(M) ? R : R.next().then(function(Q) {
      return Q.done ? Q.value : R.next();
    });
  }, C(E), u(E, c, "Generator"), u(E, s, function() {
    return this;
  }), u(E, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(z) {
    var M = Object(z), A = [];
    for (var U in M) A.push(U);
    return A.reverse(), function j() {
      for (; A.length; ) {
        var R = A.pop();
        if (R in M) return j.value = R, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, e.values = Z, L.prototype = {
    constructor: L,
    reset: function(z) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(N), !z) for (var M in this) M.charAt(0) === "t" && n.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = r);
    },
    stop: function() {
      this.done = !0;
      var z = this.tryEntries[0].completion;
      if (z.type === "throw") throw z.arg;
      return this.rval;
    },
    dispatchException: function(z) {
      if (this.done) throw z;
      var M = this;
      function A(te, le) {
        return R.type = "throw", R.arg = z, M.next = te, le && (M.method = "next", M.arg = r), !!le;
      }
      for (var U = this.tryEntries.length - 1; U >= 0; --U) {
        var j = this.tryEntries[U], R = j.completion;
        if (j.tryLoc === "root") return A("end");
        if (j.tryLoc <= this.prev) {
          var Q = n.call(j, "catchLoc"), se = n.call(j, "finallyLoc");
          if (Q && se) {
            if (this.prev < j.catchLoc) return A(j.catchLoc, !0);
            if (this.prev < j.finallyLoc) return A(j.finallyLoc);
          } else if (Q) {
            if (this.prev < j.catchLoc) return A(j.catchLoc, !0);
          } else {
            if (!se) throw Error("try statement without catch or finally");
            if (this.prev < j.finallyLoc) return A(j.finallyLoc);
          }
        }
      }
    },
    abrupt: function(z, M) {
      for (var A = this.tryEntries.length - 1; A >= 0; --A) {
        var U = this.tryEntries[A];
        if (U.tryLoc <= this.prev && n.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
          var j = U;
          break;
        }
      }
      j && (z === "break" || z === "continue") && j.tryLoc <= M && M <= j.finallyLoc && (j = null);
      var R = j ? j.completion : {};
      return R.type = z, R.arg = M, j ? (this.method = "next", this.next = j.finallyLoc, k) : this.complete(R);
    },
    complete: function(z, M) {
      if (z.type === "throw") throw z.arg;
      return z.type === "break" || z.type === "continue" ? this.next = z.arg : z.type === "return" ? (this.rval = this.arg = z.arg, this.method = "return", this.next = "end") : z.type === "normal" && M && (this.next = M), k;
    },
    finish: function(z) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var A = this.tryEntries[M];
        if (A.finallyLoc === z) return this.complete(A.completion, A.afterLoc), N(A), k;
      }
    },
    catch: function(z) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var A = this.tryEntries[M];
        if (A.tryLoc === z) {
          var U = A.completion;
          if (U.type === "throw") {
            var j = U.arg;
            N(A);
          }
          return j;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(z, M, A) {
      return this.delegate = {
        iterator: Z(z),
        resultName: M,
        nextLoc: A
      }, this.method === "next" && (this.arg = r), k;
    }
  }, e;
}
function Ox(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Nx(r) {
  var e = Ox(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
var Po = {
  CLASSIC: "classic",
  V1: "v1"
}, Lx = Po.V1, jx = "https://cdn.paddle.com/paddle/paddle.js", Bx = "https://cdn.paddle.com/paddle/v2/paddle.js", Rx = {
  url: jx
}, Ux = {
  url: Bx
};
function Vx(r) {
  return document.querySelector('script[src="'.concat(r, '"]')) || void 0;
}
function Wx(r) {
  var e = document.createElement("script");
  e.src = r;
  var t = document.head || document.body;
  if (!t)
    throw new Error("Cannot inject Paddle.js. It needs a <head> or <body> element.");
  return t.appendChild(e), e;
}
var Gs = {
  classic: void 0,
  v1: void 0
}, Hx = {
  classic: "PaddleClassic",
  v1: "PaddleBillingV1"
};
function Yx(r) {
  var e, t = (e = Gx(r)) === null || e === void 0 ? void 0 : e.url;
  if (t) {
    var n = Gs[r], a = Hx[r];
    return n !== void 0 ? n : (Gs[r] = new Promise(function(i, s) {
      if (typeof window > "u") {
        i(void 0);
        return;
      }
      if (window[a]) {
        i(window[a]);
        return;
      }
      try {
        var l = Vx(t);
        l || (l = Wx(t)), l.addEventListener("load", function() {
          window[a] ? i(window[a]) : s(new Error("Paddle.js not available"));
        }), l.addEventListener("error", function() {
          s(new Error("Failed to load Paddle.js - ".concat(r)));
        });
      } catch (c) {
        s(c);
        return;
      }
    }), Gs[r]);
  }
}
function Gx(r) {
  if (r === Po.CLASSIC)
    return Rx;
  if (r === Po.V1)
    return Ux;
  console.error("[Paddle] Unknown Paddle Version");
}
var Kx = ["environment", "version"], Xx = ["environment", "version"];
function Zx(r, e) {
  var t = r.environment;
  r.version;
  var n = $_(r, Kx);
  try {
    t && e.Environment.set(t), e.Initialized ? e.Update(Sl({}, n)) : e.Initialize(Sl({}, n));
  } catch (a) {
    console.warn("[Paddle] Paddle Initialization failed. Please check the inputs", a);
  }
}
function Jx(r, e) {
  var t = r.environment;
  r.version;
  var n = $_(r, Xx);
  try {
    t && e.Environment.set(t), e.Setup(Sl({}, n));
  } catch (a) {
    console.warn("[Paddle] Paddle Initialization failed. Please check the inputs", a);
  }
}
var Sa;
(function(r) {
  r.CHECKOUT_LOADED = "checkout.loaded", r.CHECKOUT_CLOSED = "checkout.closed", r.CHECKOUT_UPDATED = "checkout.updated", r.CHECKOUT_COMPLETED = "checkout.completed", r.CHECKOUT_ERROR = "checkout.error", r.CHECKOUT_FAILED = "checkout.failed", r.CHECKOUT_ITEMS_UPDATED = "checkout.items.updated", r.CHECKOUT_ITEMS_REMOVED = "checkout.items.removed", r.CHECKOUT_CUSTOMER_CREATED = "checkout.customer.created", r.CHECKOUT_CUSTOMER_UPDATED = "checkout.customer.updated", r.CHECKOUT_CUSTOMER_REMOVED = "checkout.customer.removed", r.CHECKOUT_PAYMENT_SELECTED = "checkout.payment.selected", r.CHECKOUT_PAYMENT_INITIATED = "checkout.payment.initiated", r.CHECKOUT_PAYMENT_FAILED = "checkout.payment.failed", r.CHECKOUT_PAYMENT_ERROR = "checkout.payment.error", r.CHECKOUT_DISCOUNT_APPLIED = "checkout.discount.applied", r.CHECKOUT_DISCOUNT_REMOVED = "checkout.discount.removed", r.CHECKOUT_UPSELL_CANCELED = "checkout.upsell.canceled";
})(Sa || (Sa = {}));
var cd;
(function(r) {
  r.DAY = "day", r.WEEK = "week", r.MONTH = "month", r.YEAR = "year";
})(cd || (cd = {}));
var ud;
(function(r) {
  r.ALIPAY = "alipay", r.APPLE_PAY = "apple-pay", r.CARD = "card", r.GOOGLE_PAY = "google-pay", r.IDEAL = "ideal", r.PAYPAL = "paypal", r.WECHAT_PAY = "wechat-pay", r.WIRE_TRANSFER = "wire-transfer", r.NONE = "none";
})(ud || (ud = {}));
var dd;
(function(r) {
  r.AMERICAN_EXPRESS = "american_express", r.DINERS_CLUB = "diners_club", r.DISCOVER = "discover", r.JCB = "jcb", r.MADA = "mada", r.MAESTRO = "maestro", r.MASTER_CARD = "mastercard", r.UNION_PAY = "union_pay", r.VISA = "visa", r.UNKNOWN = "unknown";
})(dd || (dd = {}));
var pd;
(function(r) {
  r.DRAFT = "draft", r.READY = "ready", r.COMPLETED = "completed", r.BILLED = "billed", r.canceled = "canceled", r.PAST_DUE = "past_due";
})(pd || (pd = {}));
function Qx(r) {
  return Cl.apply(this, arguments);
}
function Cl() {
  return Cl = qx(/* @__PURE__ */ Il().mark(function r(e) {
    var t, n;
    return Il().wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          return t = (e == null ? void 0 : e.version) || Lx, i.next = 3, Yx(t);
        case 3:
          if (n = i.sent, !n) {
            i.next = 9;
            break;
          }
          return e && (t === Po.V1 ? Zx(e, n) : t === Po.CLASSIC && Jx(e, n)), i.abrupt("return", n);
        case 9:
          return console.error("[Paddle] Error Loading Paddle"), i.abrupt("return");
        case 11:
        case "end":
          return i.stop();
      }
    }, r);
  })), Cl.apply(this, arguments);
}
const eg = "paddle-checkout-container", $x = 450, eE = "width:100%; min-width:312px; background-color:transparent; border:none;";
function rE({
  transactionId: r,
  locale: e,
  customerEmail: t,
  displayMode: n = "overlay",
  theme: a = "light"
}) {
  const i = {
    theme: a,
    variant: "one-page",
    locale: e,
    allowLogout: !1,
    showAddDiscounts: !1,
    showAddTaxId: !1,
    allowDiscountRemoval: !1
  }, s = n === "inline" ? {
    ...i,
    displayMode: "inline",
    frameTarget: eg,
    frameInitialHeight: $x,
    frameStyle: eE
  } : {
    ...i,
    displayMode: "overlay"
  };
  return {
    transactionId: r,
    settings: s,
    ...t && { customer: { email: t } }
  };
}
class tE {
  constructor(e, t, n = 10) {
    ee(this, "paddleInstance");
    ee(this, "backend");
    ee(this, "eventsTracker");
    ee(this, "maxNumberAttempts");
    ee(this, "waitMSBetweenAttempts", 1e3);
    this.backend = e, this.eventsTracker = t, this.maxNumberAttempts = n;
  }
  async initializePaddle(e, t) {
    var a;
    if ((a = this.paddleInstance) != null && a.Initialized)
      return be.debugLog(
        "Paddle already initialized, returning existing instance"
      ), this.paddleInstance;
    const n = t ? "sandbox" : "production";
    try {
      const i = await Qx({
        token: e,
        version: "v1",
        environment: n
      });
      if (!i)
        throw new ve(
          me.UnknownError,
          "Paddle client not found"
        );
      return this.paddleInstance = i, be.debugLog(`Paddle initialized with environment: ${n}`), i;
    } catch (i) {
      throw i instanceof ve ? i : new ve(
        me.UnknownError,
        `Error initializing Paddle: ${i}`
      );
    }
  }
  getPaddleInstance() {
    var e;
    if (!((e = this.paddleInstance) != null && e.Initialized))
      throw new ve(
        me.UnknownError,
        "Paddle not initialized."
      );
    return this.paddleInstance;
  }
  /**
   * Closes Paddle's checkout via `Paddle.Checkout.close()`. For the inline
   * presentation this removes the embedded iframe from the DOM so we can return
   * the user to the previous step (see Paddle's branded inline checkout docs).
   * Safe no-op if Paddle isn't initialized.
   */
  closeCheckout() {
    var e;
    (e = this.paddleInstance) != null && e.Initialized && this.paddleInstance.Checkout.close();
  }
  async startCheckout({
    appUserId: e,
    productId: t,
    presentedOfferingContext: n,
    purchaseOption: a,
    customerEmail: i,
    metadata: s,
    locale: l,
    attributionMetadata: c,
    workflowPurchaseContext: u
  }) {
    try {
      const d = this.eventsTracker.getTraceId(), p = u == null ? void 0 : u.stepId, _ = u == null ? void 0 : u.urlParameters, f = await this.backend.postCheckoutStart({
        appUserId: e,
        productId: t,
        purchaseOption: a,
        presentedOfferingContext: n,
        traceId: d,
        presentedStepId: p,
        urlParameters: _,
        customerEmail: i ?? void 0,
        metadata: s,
        locale: l,
        attributionMetadata: c
      });
      return await this.initializePaddle(
        f.paddle_billing_params.client_side_token,
        f.paddle_billing_params.is_sandbox
      ), f;
    } catch (d) {
      throw d instanceof Qe ? ve.fromPurchasesError(
        d,
        me.ErrorSettingUpPurchase,
        d.errorCode === Me.InvalidCredentialsError
      ) : new ve(
        me.UnknownError,
        `Error starting Paddle checkout: ${d}`
      );
    }
  }
  async purchase({
    operationSessionId: e,
    transactionId: t,
    onCheckoutLoaded: n,
    onClose: a,
    params: i,
    displayMode: s = "overlay",
    theme: l = "light",
    onCheckoutTotals: c,
    onCheckoutCompleted: u
  }) {
    const d = this.getPaddleInstance(), { customerEmail: p, locale: _ = "en" } = i, f = (g) => {
      var w, k, h;
      if (c && (g != null && g.totals)) {
        const y = (w = g.items) == null ? void 0 : w[0];
        c({
          currencyCode: g.currency_code,
          subtotalAmount: g.totals.subtotal,
          taxAmount: g.totals.tax,
          totalAmount: g.totals.total,
          recurringTotalAmount: ((k = g.recurring_totals) == null ? void 0 : k.total) ?? null,
          productName: ((h = y == null ? void 0 : y.product) == null ? void 0 : h.name) ?? null,
          priceName: (y == null ? void 0 : y.price_name) ?? null
        });
      }
    };
    return new Promise((g, w) => {
      d.Update({
        eventCallback: async (h) => {
          const y = h.name, b = h.data;
          try {
            if (y === Sa.CHECKOUT_LOADED)
              n(), f(b);
            else if (y === Sa.CHECKOUT_UPDATED)
              f(b);
            else if (y === Sa.CHECKOUT_COMPLETED) {
              u == null || u(), d.Checkout.close();
              const v = await this.pollOperationStatus(e);
              g(v);
            } else y === Sa.CHECKOUT_CLOSED && (b != null && b.status) && a();
          } catch (v) {
            d.Checkout.close(), v instanceof ve ? w(v) : v instanceof Qe ? w(
              ve.fromPurchasesError(
                v,
                me.UnknownError
              )
            ) : w(
              new ve(
                me.UnknownError,
                `Paddle event handler error: ${v}`
              )
            );
          }
        }
      });
      const k = rE({
        transactionId: t,
        locale: _,
        customerEmail: p,
        displayMode: s,
        theme: l
      });
      try {
        d.Checkout.open(k);
      } catch (h) {
        w(
          new ve(
            me.UnknownError,
            `Failed to open Paddle checkout: ${h}`
          )
        );
      }
    });
  }
  async pollOperationStatus(e) {
    if (!e)
      throw new ve(
        me.ErrorSettingUpPurchase,
        "No purchase in progress"
      );
    return new Promise((t, n) => {
      const a = (i = 1) => {
        if (i > this.maxNumberAttempts) {
          n(
            new ve(
              me.UnknownError,
              "Max attempts reached trying to get successful purchase status"
            )
          );
          return;
        }
        this.backend.getCheckoutStatus(e).then((s) => {
          const l = s.operation.store_transaction_identifier, c = s.operation.product_identifier, u = s.operation.purchase_date ? isNaN(Date.parse(s.operation.purchase_date)) ? null : new Date(s.operation.purchase_date) : null;
          switch (s.operation.status) {
            case on.Started:
            case on.InProgress:
              setTimeout(
                () => a(i + 1),
                this.waitMSBetweenAttempts
              );
              break;
            case on.Succeeded:
              if (!l || !c || !u) {
                n(
                  new ve(
                    me.UnknownError,
                    "Missing required fields in operation response."
                  )
                );
                return;
              }
              t({
                redemptionInfo: Fp(s),
                operationSessionId: e,
                storeTransactionIdentifier: l ?? "",
                productIdentifier: c,
                purchaseDate: u ?? /* @__PURE__ */ new Date(),
                attributionMetadata: s.attribution_metadata ?? void 0
              });
              return;
            case on.Failed:
              Mp(
                s.operation.error,
                n
              );
          }
        }).catch((s) => {
          if (s instanceof Qe) {
            const l = ve.fromPurchasesError(
              s,
              me.NetworkError
            );
            n(l);
          } else
            n(
              new ve(
                me.NetworkError,
                `Failed to get checkout status: ${s}`
              )
            );
        });
      };
      a();
    });
  }
}
const Ai = (r, e) => r instanceof ve ? r : r instanceof Qe ? ve.fromPurchasesError(
  r,
  me.UnknownError
) : new ve(
  me.UnknownError,
  e
);
var nE = /* @__PURE__ */ V('<!> <div class="rcb-fullscreen-wrapper svelte-skuziz"><div class="rcb-fullscreen-content svelte-skuziz"><!></div></div>', 1);
const aE = {
  hash: "svelte-skuziz",
  code: ".rcb-fullscreen-wrapper.svelte-skuziz {width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center;}.rcb-fullscreen-content.svelte-skuziz {flex:1;width:100%;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--rc-color-grey-text-dark);}"
};
function rg(r, e) {
  _e(e, !0), ke(r, aE);
  const t = () => Be(i, "$brandingAppearanceStore", n), [n, a] = Ze(), i = He(jn), s = /* @__PURE__ */ m(() => {
    var u;
    return t() ?? ((u = e.brandingInfo) == null ? void 0 : u.appearance) ?? null;
  }), l = /* @__PURE__ */ m(() => new Fn(o(s)).pageStyleVars), c = /* @__PURE__ */ m(() => {
    var u;
    return ((u = o(s)) == null ? void 0 : u.color_page_bg) ?? "#ffffff";
  });
  {
    let u = /* @__PURE__ */ m(() => {
      var d;
      return (d = e.brandingInfo) == null ? void 0 : d.brand_font_config;
    });
    G_(r, {
      get brandingAppearance() {
        return o(s);
      },
      get brandFontConfig() {
        return o(u);
      },
      get isInElement() {
        return e.isInElement;
      },
      children: (d, p) => {
        var _ = nE(), f = ce(_);
        {
          var g = (y) => {
            Z_(y, {
              get style() {
                return o(l);
              },
              get isInElement() {
                return e.isInElement;
              },
              get brandingInfo() {
                return e.brandingInfo;
              }
            });
          };
          G(f, (y) => {
            e.isSandbox && y(g);
          });
        }
        var w = W(f, 2), k = T(w), h = T(k);
        yr(h, () => e.mainContent ?? er), K(() => Fe(w, `${o(l) ?? ""}; background-color: ${o(c) ?? ""}`)), x(d, _);
      },
      $$slots: { default: !0 }
    });
  }
  ge(), a();
}
var oE = /* @__PURE__ */ V("<!> <!> <!>", 1), iE = /* @__PURE__ */ V('<div class="rcb-ui-loading-container svelte-1r889ax"><!></div>');
const sE = {
  hash: "svelte-1r889ax",
  code: ".rcb-ui-loading-container.svelte-1r889ax {display:flex;flex-direction:column;align-items:center;}"
};
function lE(r, e) {
  _e(e, !0), ke(r, sE);
  const t = () => Be(i, "$translator", n), [n, a] = Ze(), i = He(fr);
  rg(r, {
    get brandingInfo() {
      return e.brandingInfo;
    },
    get isInElement() {
      return e.isInElement;
    },
    get isSandbox() {
      return e.isSandbox;
    },
    mainContent: (l) => {
      var c = Ee(), u = ce(c);
      {
        var d = (_) => {
          var f = iE(), g = T(f);
          Ro(g, {
            gap: "medium",
            align: "center",
            children: (w, k) => {
              var h = oE(), y = ce(h);
              rs(y, { color: "var(--rc-color-grey-text-dark)" });
              var b = W(y, 2);
              ze(b, {
                size: "heading-md",
                children: (P, I) => {
                  var E = je();
                  K((C) => fe(E, C), [
                    () => t().translate(ue.LoadingPageProcessingPayment)
                  ]), x(P, E);
                },
                $$slots: { default: !0 }
              });
              var v = W(b, 2);
              ze(v, {
                size: "body-small",
                children: (P, I) => {
                  var E = je();
                  K((C) => fe(E, C), [
                    () => t().translate(ue.LoadingPageKeepPageOpen)
                  ]), x(P, E);
                },
                $$slots: { default: !0 }
              }), x(w, h);
            },
            $$slots: { default: !0 }
          }), x(_, f);
        }, p = (_) => {
          var f = Ee(), g = ce(f);
          {
            var w = (h) => {
              is(h, {
                get onContinue() {
                  return e.onContinue;
                },
                fullWidth: !0
              });
            }, k = (h) => {
              var y = Ee(), b = ce(y);
              {
                var v = (P) => {
                  {
                    let I = /* @__PURE__ */ m(() => {
                      var C;
                      return ((C = e.brandingInfo) == null ? void 0 : C.support_email) ?? null;
                    }), E = /* @__PURE__ */ m(() => {
                      var C;
                      return ((C = e.brandingInfo) == null ? void 0 : C.app_name) ?? null;
                    });
                    os(P, {
                      get lastError() {
                        return e.lastError;
                      },
                      get productDetails() {
                        return e.productDetails;
                      },
                      get supportEmail() {
                        return o(I);
                      },
                      get onDismiss() {
                        return e.closeWithError;
                      },
                      get appName() {
                        return o(E);
                      },
                      fullWidth: !0
                    });
                  }
                };
                G(
                  b,
                  (P) => {
                    e.currentPage === "error" && P(v);
                  },
                  !0
                );
              }
              x(h, y);
            };
            G(
              g,
              (h) => {
                e.currentPage === "success" ? h(w) : h(k, !1);
              },
              !0
            );
          }
          x(_, f);
        };
        G(u, (_) => {
          e.currentPage === "loading" ? _(d) : _(p, !1);
        });
      }
      x(l, c);
    },
    $$slots: { mainContent: !0 }
  }), ge(), a();
}
var cE = /* @__PURE__ */ V('<span class="rcb-paddle-summary-muted svelte-1k1pux8">inc. tax</span>'), uE = /* @__PURE__ */ V('<span class="rcb-paddle-summary-muted rcb-paddle-summary-price-name svelte-1k1pux8"> </span>'), dE = /* @__PURE__ */ V('<span class="rcb-paddle-summary-muted svelte-1k1pux8"> </span>'), pE = /* @__PURE__ */ V('<div class="rcb-paddle-summary-row svelte-1k1pux8"><span class="rcb-paddle-summary-muted svelte-1k1pux8"> </span> <span> </span></div>'), _E = /* @__PURE__ */ V('<div class="rcb-paddle-summary-row svelte-1k1pux8"><span class="rcb-paddle-summary-muted svelte-1k1pux8"> </span> <span> </span></div>'), gE = /* @__PURE__ */ V('<div class="rcb-paddle-summary-card svelte-1k1pux8"><div class="rcb-paddle-summary-row svelte-1k1pux8"><span class="rcb-paddle-summary-muted svelte-1k1pux8"> </span> <span> </span></div> <!> <hr class="rcb-paddle-summary-divider svelte-1k1pux8"/> <div class="rcb-paddle-summary-row rcb-paddle-summary-row-strong svelte-1k1pux8"><span> </span> <span> </span></div> <!></div>'), fE = /* @__PURE__ */ V('<div class="rcb-paddle-summary svelte-1k1pux8"><div class="rcb-paddle-summary-card svelte-1k1pux8"><div class="rcb-paddle-summary-amount-row svelte-1k1pux8"><span class="rcb-paddle-summary-amount svelte-1k1pux8"> </span> <!></div> <!> <div class="rcb-paddle-summary-product svelte-1k1pux8"><!> <!> <div class="rcb-paddle-summary-product-price svelte-1k1pux8"><span> </span> <!></div></div></div> <!></div>');
const mE = {
  hash: "svelte-1k1pux8",
  code: `.rcb-paddle-summary.svelte-1k1pux8 {display:flex;flex-direction:column;gap:var(--rc-spacing-gapLarge-mobile, 16px);width:100%;}.rcb-paddle-summary-card.svelte-1k1pux8 {background:var(--rcb-card-bg);border-radius:16px;padding:28px;display:flex;flex-direction:column;gap:var(--rc-spacing-gapMedium-mobile, 12px);}.rcb-paddle-summary-amount-row.svelte-1k1pux8 {display:flex;align-items:baseline;gap:8px;}.rcb-paddle-summary-amount.svelte-1k1pux8 {color:var(--rc-color-primary);font-weight:700;font-size:2rem;line-height:1.1;}.rcb-paddle-summary-product.svelte-1k1pux8 {display:flex;flex-direction:column;gap:2px;
    /* Extra separation between the amount/billing line and the product block. */margin-top:var(--rc-spacing-gapLarge-mobile, 16px);}.rcb-paddle-summary-price-name.svelte-1k1pux8 {font-size:0.8125rem;}.rcb-paddle-summary-product-price.svelte-1k1pux8 {display:flex;align-items:baseline;gap:6px;font-weight:600;font-size:1.25rem;
    /* A bit more separation from the price-name line above. */margin-top:var(--rc-spacing-gapSmall-mobile, 8px);}.rcb-paddle-summary-row.svelte-1k1pux8 {display:flex;justify-content:space-between;align-items:center;}.rcb-paddle-summary-row-strong.svelte-1k1pux8 {font-weight:700;}.rcb-paddle-summary-muted.svelte-1k1pux8 {color:var(--rc-color-grey-text-light);}.rcb-paddle-summary-divider.svelte-1k1pux8 {border:none;border-top:1px solid var(--rc-color-grey-ui-light);margin:4px 0;width:100%;}`
};
function hE(r, e) {
  var le;
  _e(e, !0), ke(r, mE);
  const t = () => Be(i, "$translator", n), [n, a] = Ze(), i = He(fr), l = new Fn(((le = e.brandingInfo) == null ? void 0 : le.appearance) ?? null).formColors.background, u = ((ae) => "base" in ae)(e.purchaseOption) ? e.purchaseOption.base.period ?? null : null, d = (ae) => Math.round(ae * 1e6), p = wo(e.productDetails, e.purchaseOption), _ = /* @__PURE__ */ m(() => {
    var ae;
    return ((ae = e.totals) == null ? void 0 : ae.currencyCode) ?? p.currency;
  }), f = /* @__PURE__ */ m(() => e.totals ? d(e.totals.totalAmount) : p.amountMicros), g = (ae) => t().formatPrice(ae, o(_)), w = /* @__PURE__ */ m(() => u ? t().translatePeriodUnit(u.unit) : null), k = /* @__PURE__ */ m(() => u ? t().translatePeriodFrequency(u.number, u.unit) : null), h = /* @__PURE__ */ m(() => {
    var ae;
    return ((ae = e.totals) == null ? void 0 : ae.productName) ?? e.productDetails.title;
  }), y = /* @__PURE__ */ m(() => {
    var ae;
    return ((ae = e.totals) == null ? void 0 : ae.priceName) ?? null;
  }), b = /* @__PURE__ */ m(() => !!e.totals && e.totals.taxAmount > 0), v = /* @__PURE__ */ m(() => {
    if (!e.totals || e.totals.recurringTotalAmount === null || !u) return null;
    const ae = mo(/* @__PURE__ */ new Date(), u, !0);
    return ae ? new Intl.DateTimeFormat(Yn(t().selectedLocale), { day: "numeric", month: "long", year: "numeric" }).format(ae) : null;
  });
  var P = fE(), I = T(P), E = T(I), C = T(E), S = T(C), F = W(C, 2);
  {
    var D = (ae) => {
      var Y = cE();
      x(ae, Y);
    };
    G(F, (ae) => {
      o(b) && ae(D);
    });
  }
  var O = W(E, 2);
  {
    var N = (ae) => {
      ze(ae, {
        size: "body-small",
        children: (Y, $) => {
          var oe = je();
          K(() => fe(oe, `billed ${o(k) ?? ""}`)), x(Y, oe);
        },
        $$slots: { default: !0 }
      });
    };
    G(O, (ae) => {
      o(k) && ae(N);
    });
  }
  var L = W(O, 2), Z = T(L);
  ze(Z, {
    size: "body-base",
    children: (ae, Y) => {
      var $ = je();
      K(() => fe($, o(h))), x(ae, $);
    },
    $$slots: { default: !0 }
  });
  var z = W(Z, 2);
  {
    var M = (ae) => {
      var Y = uE(), $ = T(Y);
      K(() => fe($, o(y))), x(ae, Y);
    };
    G(z, (ae) => {
      o(y) && ae(M);
    });
  }
  var A = W(z, 2), U = T(A), j = T(U), R = W(U, 2);
  {
    var Q = (ae) => {
      var Y = dE(), $ = T(Y);
      K(() => fe($, `/ ${o(w) ?? ""}`)), x(ae, Y);
    };
    G(R, (ae) => {
      o(w) && ae(Q);
    });
  }
  var se = W(I, 2);
  {
    var te = (ae) => {
      var Y = gE(), $ = T(Y), oe = T($), B = T(oe), de = W(oe, 2), J = T(de), ie = W($, 2);
      {
        var Ie = (Pe) => {
          var De = pE(), Ye = T(De), Ke = T(Ye), pe = W(Ye, 2), Le = T(pe);
          K(
            (or, _r) => {
              fe(Ke, or), fe(Le, _r);
            },
            [
              () => t().translate(ue.PricingTableTax),
              () => g(d(e.totals.taxAmount))
            ]
          ), x(Pe, De);
        };
        G(ie, (Pe) => {
          o(b) && Pe(Ie);
        });
      }
      var we = W(ie, 4), xe = T(we), Se = T(xe), Ue = W(xe, 2), ye = T(Ue), Ce = W(we, 2);
      {
        var Te = (Pe) => {
          var De = _E(), Ye = T(De), Ke = T(Ye), pe = W(Ye, 2), Le = T(pe);
          K(
            (or) => {
              fe(Ke, `Due on ${o(v) ?? ""}`), fe(Le, or);
            },
            [
              () => g(d(e.totals.recurringTotalAmount))
            ]
          ), x(Pe, De);
        };
        G(Ce, (Pe) => {
          e.totals.recurringTotalAmount !== null && o(v) && Pe(Te);
        });
      }
      K(
        (Pe, De, Ye, Ke) => {
          fe(B, Pe), fe(J, De), fe(Se, Ye), fe(ye, Ke);
        },
        [
          () => t().translate(ue.PricingTableSubtotal),
          () => g(d(e.totals.subtotalAmount)),
          () => t().translate(ue.PricingTableTotalDueToday),
          () => g(d(e.totals.totalAmount))
        ]
      ), x(ae, Y);
    };
    G(se, (ae) => {
      e.totals && ae(te);
    });
  }
  K(
    (ae, Y) => {
      Fe(P, `--rcb-card-bg: ${l ?? ""};`), fe(S, ae), fe(j, Y);
    },
    [
      () => g(o(f)),
      () => g(o(f))
    ]
  ), x(r, P), ge(), a();
}
var vE = /* @__PURE__ */ V('<button type="button" class="rcb-paddle-return-button svelte-5dakll" data-testid="paddle-return-button"><!> <span> </span></button>'), yE = /* @__PURE__ */ V("<!> <!> <!>", 1), bE = /* @__PURE__ */ V('<div class="rcb-paddle-processing svelte-5dakll"><!></div>'), kE = /* @__PURE__ */ V('<div data-testid="paddle-inline-checkout-container" style="width: 100%; min-height: 450px;"></div>');
const wE = {
  hash: "svelte-5dakll",
  code: ".rcb-paddle-return-button.svelte-5dakll {display:inline-flex;align-items:center;gap:var(--rc-spacing-gapSmall-mobile, 8px);padding:8px 0;border:none;background:transparent;cursor:pointer;color:var(--rc-color-accent);font:inherit;}.rcb-paddle-processing.svelte-5dakll {display:flex;justify-content:center;width:100%;min-height:450px;align-items:center;}"
};
function PE(r, e) {
  var c;
  _e(e, !0), ke(r, wE);
  const t = () => Be(s, "$translator", n), [n, a] = Ze(), i = X(e, "hideBackButton", 3, !1), s = He(fr), l = ((c = e.brandingInfo) == null ? void 0 : c.app_name) ?? null;
  J_(r, {
    get brandingInfo() {
      return e.brandingInfo;
    },
    get isInElement() {
      return e.isInElement;
    },
    get isSandbox() {
      return e.isSandbox;
    },
    get onClose() {
      return e.onClose;
    },
    navbarHeaderContent: (_) => {
      var f = Ee(), g = ce(f);
      {
        var w = (k) => {
          var h = vE();
          h.__click = function(...P) {
            var I;
            (I = e.onClose) == null || I.apply(this, P);
          };
          var y = T(h);
          qn(y, { name: "back" });
          var b = W(y, 2), v = T(b);
          K(() => fe(v, l ? `Return to ${l}` : "Back")), x(k, h);
        };
        G(g, (k) => {
          !e.isInElement && !i() && k(w);
        });
      }
      x(_, f);
    },
    navbarBodyContent: (_) => {
      hE(_, {
        get brandingInfo() {
          return e.brandingInfo;
        },
        get productDetails() {
          return e.productDetails;
        },
        get purchaseOption() {
          return e.purchaseOption;
        },
        get totals() {
          return e.totals;
        }
      });
    },
    mainContent: (_) => {
      var f = Ee(), g = ce(f);
      {
        var w = (h) => {
          is(h, {
            get onContinue() {
              return e.onContinue;
            }
          });
        }, k = (h) => {
          var y = Ee(), b = ce(y);
          {
            var v = (I) => {
              {
                let E = /* @__PURE__ */ m(() => {
                  var S;
                  return ((S = e.brandingInfo) == null ? void 0 : S.support_email) ?? null;
                }), C = /* @__PURE__ */ m(() => {
                  var S;
                  return ((S = e.brandingInfo) == null ? void 0 : S.app_name) ?? null;
                });
                os(I, {
                  get lastError() {
                    return e.lastError;
                  },
                  get productDetails() {
                    return e.productDetails;
                  },
                  get supportEmail() {
                    return o(E);
                  },
                  get onDismiss() {
                    return e.closeWithError;
                  },
                  get appName() {
                    return o(C);
                  }
                });
              }
            }, P = (I) => {
              var E = Ee(), C = ce(E);
              {
                var S = (D) => {
                  var O = bE(), N = T(O);
                  Ro(N, {
                    gap: "medium",
                    align: "center",
                    children: (L, Z) => {
                      var z = yE(), M = ce(z);
                      rs(M, { color: "var(--rc-color-grey-text-dark)" });
                      var A = W(M, 2);
                      ze(A, {
                        size: "heading-md",
                        children: (j, R) => {
                          var Q = je();
                          K((se) => fe(Q, se), [
                            () => t().translate(ue.LoadingPageProcessingPayment)
                          ]), x(j, Q);
                        },
                        $$slots: { default: !0 }
                      });
                      var U = W(A, 2);
                      ze(U, {
                        size: "body-small",
                        children: (j, R) => {
                          var Q = je();
                          K((se) => fe(Q, se), [
                            () => t().translate(ue.LoadingPageKeepPageOpen)
                          ]), x(j, Q);
                        },
                        $$slots: { default: !0 }
                      }), x(L, z);
                    },
                    $$slots: { default: !0 }
                  }), x(D, O);
                }, F = (D) => {
                  var O = kE();
                  K(() => ur(O, 1, la(eg), "svelte-5dakll")), x(D, O);
                };
                G(
                  C,
                  (D) => {
                    e.checkoutCompleted ? D(S) : D(F, !1);
                  },
                  !0
                );
              }
              x(I, E);
            };
            G(
              b,
              (I) => {
                e.currentPage === "error" ? I(v) : I(P, !1);
              },
              !0
            );
          }
          x(h, y);
        };
        G(g, (h) => {
          e.currentPage === "success" ? h(w) : h(k, !1);
        });
      }
      x(_, f);
    },
    $$slots: {
      navbarHeaderContent: !0,
      navbarBodyContent: !0,
      mainContent: !0
    }
  }), ge(), a();
}
Jt(["click"]);
function xE(r, e) {
  var O, N, L;
  _e(e, !0);
  const t = X(e, "customTranslations", 19, () => ({})), n = X(e, "skipSuccessPage", 3, !1), a = X(e, "hideBackButton", 3, !1);
  let i = new Tn(t(), e.selectedLocale, e.defaultLocale), s = mr(i);
  const l = mr(((O = e.brandingInfo) == null ? void 0 : O.appearance) ?? null);
  gr(fr, s), gr(jn, l), gr(Uo, e.eventsTracker);
  let c = /* @__PURE__ */ re(!1), u = /* @__PURE__ */ re(null), d = /* @__PURE__ */ re(null), p = /* @__PURE__ */ re("waiting"), _ = /* @__PURE__ */ re(!1), f = /* @__PURE__ */ re(null);
  const g = /* @__PURE__ */ m(() => {
    var Z;
    return ((Z = o(f)) == null ? void 0 : Z.paddle_billing_params.inline_checkout_enabled) ?? !1;
  });
  let w = /* @__PURE__ */ re(null);
  const k = (Z) => {
    q(w, Z, !0);
  }, h = TP(((L = (N = e.brandingInfo) == null ? void 0 : N.appearance) == null ? void 0 : L.color_page_bg) ?? "#ffffff") ? "light" : "dark";
  ar(() => {
    o(p) === "success" && o(u) && n() && e.onFinished(o(u));
  });
  const y = () => {
    o(p) === "success" && o(u) && e.onFinished(o(u));
  }, b = () => {
    e.paddleService.closeCheckout(), e.onClose();
  }, v = () => {
    e.onError(o(d) ?? new ve(me.UnknownError, "Unknown error without state set.")), e.unmountPaddlePurchaseUi();
  };
  let P = null, I = null, E = null;
  br(async () => {
    var U;
    e.isInElement || (P = document.documentElement.style.height, I = document.documentElement.style.overflow, E = document.body.style.height, document.documentElement.style.height = "100%", document.body.style.height = "100%", document.documentElement.style.overflow = "hidden");
    const Z = () => {
      q(p, "loading");
    }, z = () => {
      q(_, !0), q(p, "loading");
    }, M = {
      offeringIdentifier: e.productDetails.presentedOfferingContext.offeringIdentifier,
      targetingContext: null,
      placementIdentifier: null
    };
    let A;
    try {
      A = await e.paddleService.startCheckout({
        appUserId: e.appUserId,
        productId: e.productDetails.identifier,
        presentedOfferingContext: M,
        purchaseOption: e.purchaseOption,
        customerEmail: e.customerEmail,
        metadata: e.metadata,
        locale: e.selectedLocale,
        attributionMetadata: e.attributionMetadata,
        workflowPurchaseContext: e.workflowPurchaseContext
      }), q(f, A, !0), q(c, A.paddle_billing_params.is_sandbox, !0), o(g) && await vp();
    } catch (j) {
      const R = Ai(j, `Start Paddle checkout failed: ${j}`);
      q(d, R, !0), q(p, "error"), e.onError(R);
      return;
    }
    try {
      const j = await e.paddleService.purchase({
        operationSessionId: A.operation_session_id,
        transactionId: (U = A.paddle_billing_params) == null ? void 0 : U.transaction_id,
        onCheckoutLoaded: Z,
        onClose: e.onClose,
        params: {
          rcPackage: e.rcPackage,
          purchaseOption: e.purchaseOption,
          appUserId: e.appUserId,
          presentedOfferingIdentifier: e.productDetails.presentedOfferingContext.offeringIdentifier,
          customerEmail: e.customerEmail,
          locale: e.selectedLocale || e.defaultLocale
        },
        ...o(g) && {
          displayMode: "inline",
          theme: h,
          onCheckoutTotals: k,
          onCheckoutCompleted: z
        }
      });
      n() ? e.onFinished(j) : (q(u, j, !0), q(p, "success"));
    } catch (j) {
      const R = Ai(j, `Paddle purchase failed: ${j}`);
      q(d, R, !0), q(p, "error"), e.onError(R);
    }
  }), Tt(() => {
    if (!e.isInElement) {
      const Z = (z, M, A) => {
        A === "" ? z.style.removeProperty(M) : z.style.setProperty(M, A);
      };
      Z(document.documentElement, "height", P), Z(document.body, "height", E), Z(document.documentElement, "overflow", I);
    }
  });
  var C = Ee(), S = ce(C);
  {
    var F = (Z) => {
      PE(Z, {
        get brandingInfo() {
          return e.brandingInfo;
        },
        get isSandbox() {
          return o(c);
        },
        get isInElement() {
          return e.isInElement;
        },
        onClose: b,
        get hideBackButton() {
          return a();
        },
        get productDetails() {
          return e.productDetails;
        },
        get purchaseOption() {
          return e.purchaseOption;
        },
        get totals() {
          return o(w);
        },
        get currentPage() {
          return o(p);
        },
        get checkoutCompleted() {
          return o(_);
        },
        get lastError() {
          return o(d);
        },
        onContinue: y,
        closeWithError: v
      });
    }, D = (Z) => {
      var z = Ee(), M = ce(z);
      {
        var A = (U) => {
          lE(U, {
            get currentPage() {
              return o(p);
            },
            get brandingInfo() {
              return e.brandingInfo;
            },
            get productDetails() {
              return e.productDetails;
            },
            get isSandbox() {
              return o(c);
            },
            get lastError() {
              return o(d);
            },
            get isInElement() {
              return e.isInElement;
            },
            onContinue: y,
            closeWithError: v
          });
        };
        G(
          M,
          (U) => {
            o(p) !== "waiting" && U(A);
          },
          !0
        );
      }
      x(Z, z);
    };
    G(S, (Z) => {
      o(g) ? Z(F) : Z(D, !1);
    });
  }
  x(r, C), ge();
}
var EE = /* @__PURE__ */ V('<div class="stripe-checkout-container svelte-1kxsl49" data-testid="stripe-checkout-container"><div class="stripe-checkout-mount svelte-1kxsl49" data-testid="stripe-checkout-mount"></div></div>');
const SE = {
  hash: "svelte-1kxsl49",
  code: ".stripe-checkout-container.svelte-1kxsl49 {width:100%;min-height:400px;display:flex;flex-direction:column;}.stripe-checkout-mount.svelte-1kxsl49 {width:100%;flex:1;}"
};
function IE(r, e) {
  _e(e, !0), ke(r, SE);
  let t, n = null;
  async function a() {
    try {
      e.onContinue();
    } catch (l) {
      e.onError(l instanceof ve ? l : new ve(me.ErrorSettingUpPurchase, l instanceof Error ? l.message : "Failed to complete checkout"));
    }
  }
  br(async () => {
    try {
      const l = e.stripeBillingParams.publishable_api_key, c = e.stripeBillingParams.stripe_account_id, { embeddedCheckout: u } = await $e.initializeStripeCheckout(c, l, e.stripeBillingParams, a);
      n = u, t && u.mount(t);
    } catch (l) {
      e.onError(l instanceof Error ? new ve(me.ErrorSettingUpPurchase, l.message) : new ve(me.ErrorSettingUpPurchase, "Failed to initialize Stripe Checkout"));
    }
  }), Tt(() => {
    n && (n.destroy(), n = null);
  });
  var i = EE(), s = T(i);
  ca(s, (l) => t = l, () => t), x(r, i), ge();
}
var CE = /* @__PURE__ */ V('<div class="stripe-checkout-wrapper svelte-zapbpj"><!></div>'), TE = /* @__PURE__ */ V("<!> <!>", 1), DE = /* @__PURE__ */ V("<!> <!>", 1), AE = /* @__PURE__ */ V('<div class="rcb-ui-loading-container svelte-zapbpj"><!></div>');
const FE = {
  hash: "svelte-zapbpj",
  code: `.rcb-ui-loading-container.svelte-zapbpj {display:flex;flex-direction:column;align-items:center;}.stripe-checkout-wrapper.svelte-zapbpj {width:100%;min-height:100%;display:flex;flex-direction:column;overflow:hidden auto;}

  /* 991px is the breakpoint for the mobile layout in Stripe Checkout */
  @media (min-width: 991px) {.stripe-checkout-wrapper.svelte-zapbpj {justify-content:center;align-items:center;}
  }`
};
function qE(r, e) {
  _e(e, !0), ke(r, FE);
  const t = () => Be(s, "$brandingAppearanceStore", a), n = () => Be(d, "$translator", a), [a, i] = Ze(), s = He(jn), l = /* @__PURE__ */ m(() => t() ?? void 0), c = /* @__PURE__ */ m(() => new Fn(o(l)).pageStyleVars), u = /* @__PURE__ */ m(() => j_(o(l)).background), d = He(fr);
  rg(r, {
    get brandingInfo() {
      return e.brandingInfo;
    },
    get isInElement() {
      return e.isInElement;
    },
    get isSandbox() {
      return e.isSandbox;
    },
    mainContent: (_) => {
      var f = Ee(), g = ce(f);
      {
        var w = (h) => {
          var y = Ee(), b = ce(y);
          {
            var v = (P) => {
              var I = CE(), E = T(I);
              IE(E, {
                get stripeBillingParams() {
                  return e.stripeBillingParams;
                },
                get onContinue() {
                  return e.onContinue;
                },
                get onError() {
                  return e.onError;
                }
              }), K(() => Fe(I, `${o(c) ?? ""}; background-color: ${o(u) ?? ""}`)), x(P, I);
            };
            G(b, (P) => {
              e.stripeBillingParams && P(v);
            });
          }
          x(h, y);
        }, k = (h) => {
          var y = Ee(), b = ce(y);
          {
            var v = (I) => {
              var E = AE(), C = T(E);
              Ro(C, {
                gap: "medium",
                align: "center",
                children: (S, F) => {
                  var D = DE(), O = ce(D);
                  rs(O, { color: "var(--rc-color-grey-text-dark)" });
                  var N = W(O, 2);
                  {
                    var L = (Z) => {
                      var z = TE(), M = ce(z);
                      ze(M, {
                        size: "heading-md",
                        children: (U, j) => {
                          var R = je();
                          K((Q) => fe(R, Q), [
                            () => n().translate(ue.LoadingPageProcessingPayment)
                          ]), x(U, R);
                        },
                        $$slots: { default: !0 }
                      });
                      var A = W(M, 2);
                      ze(A, {
                        size: "body-small",
                        children: (U, j) => {
                          var R = je();
                          K((Q) => fe(R, Q), [
                            () => n().translate(ue.LoadingPageKeepPageOpen)
                          ]), x(U, R);
                        },
                        $$slots: { default: !0 }
                      }), x(Z, z);
                    };
                    G(N, (Z) => {
                      e.currentPage === "purchasing" && Z(L);
                    });
                  }
                  x(S, D);
                },
                $$slots: { default: !0 }
              }), x(I, E);
            }, P = (I) => {
              var E = Ee(), C = ce(E);
              {
                var S = (D) => {
                  is(D, {
                    get onContinue() {
                      return e.onContinue;
                    },
                    fullWidth: !0
                  });
                }, F = (D) => {
                  var O = Ee(), N = ce(O);
                  {
                    var L = (Z) => {
                      {
                        let z = /* @__PURE__ */ m(() => {
                          var A;
                          return ((A = e.brandingInfo) == null ? void 0 : A.support_email) ?? null;
                        }), M = /* @__PURE__ */ m(() => {
                          var A;
                          return ((A = e.brandingInfo) == null ? void 0 : A.app_name) ?? null;
                        });
                        os(Z, {
                          get lastError() {
                            return e.lastError;
                          },
                          get productDetails() {
                            return e.productDetails;
                          },
                          get supportEmail() {
                            return o(z);
                          },
                          get onDismiss() {
                            return e.closeWithError;
                          },
                          get appName() {
                            return o(M);
                          },
                          fullWidth: !0
                        });
                      }
                    };
                    G(
                      N,
                      (Z) => {
                        e.currentPage === "error" && Z(L);
                      },
                      !0
                    );
                  }
                  x(D, O);
                };
                G(
                  C,
                  (D) => {
                    e.currentPage === "success" ? D(S) : D(F, !1);
                  },
                  !0
                );
              }
              x(I, E);
            };
            G(
              b,
              (I) => {
                e.currentPage === "loading" || e.currentPage === "purchasing" ? I(v) : I(P, !1);
              },
              !0
            );
          }
          x(h, y);
        };
        G(g, (h) => {
          e.currentPage === "stripe-checkout" ? h(w) : h(k, !1);
        });
      }
      x(_, f);
    },
    $$slots: { mainContent: !0 }
  }), ge(), i();
}
function ME(r, e) {
  var b;
  _e(e, !0);
  const t = X(e, "customTranslations", 19, () => ({})), n = X(e, "skipSuccessPage", 3, !1);
  let a = e.rcPackage.webBillingProduct, i = new Tn(t(), e.selectedLocale, e.defaultLocale), s = mr(i);
  gr(fr, s), gr(Uo, e.eventsTracker);
  const l = mr(((b = e.brandingInfo) == null ? void 0 : b.appearance) ?? null);
  gr(jn, l);
  let c = /* @__PURE__ */ re(!1), u = /* @__PURE__ */ re(null), d = /* @__PURE__ */ re(null), p = /* @__PURE__ */ re("loading"), _ = /* @__PURE__ */ re(null);
  const f = () => {
    if (o(p) === "stripe-checkout") {
      q(p, "purchasing"), e.purchaseOperationHelper.pollCurrentPurchaseForCompletion().then((v) => {
        q(u, v, !0), n() ? e.onFinished(v) : q(p, "success");
      }).catch((v) => {
        g(Ai(v, "Failed to complete purchase"));
      });
      return;
    }
    o(p) === "success" && o(u) && e.onFinished(o(u));
  }, g = (v) => {
    q(d, v, !0), q(p, "error");
  }, w = () => {
    e.onError(o(d) ?? new ve(me.UnknownError, "Unknown error without state set."));
  };
  let k = null, h = null, y = null;
  br(async () => {
    e.isInElement || (k = document.documentElement.style.height, h = document.documentElement.style.overflow, y = document.body.style.height, document.documentElement.style.height = "100%", document.body.style.height = "100%", document.documentElement.style.overflow = "hidden");
    const v = a.identifier;
    if (!v) {
      g(new ve(me.ErrorSettingUpPurchase, "Product ID was not set before purchase."));
      return;
    }
    let P = e.customerEmail;
    (P ? Q_(P) : null) && (P = void 0);
    try {
      const E = await e.purchaseOperationHelper.checkoutStart({
        appUserId: e.appUserId,
        productId: v,
        purchaseOption: e.purchaseOption,
        presentedOfferingContext: e.rcPackage.webBillingProduct.presentedOfferingContext,
        customerEmail: P,
        metadata: e.metadata,
        workflowPurchaseContext: e.workflowPurchaseContext,
        attributionMetadata: e.attributionMetadata,
        paywallId: e.paywallId,
        paywallSessionId: e.paywallSessionId,
        locale: e.selectedLocale
      });
      if (!E.stripe_billing_params) {
        g(new ve(me.ErrorSettingUpPurchase, "Missing Stripe Checkout parameters"));
        return;
      }
      q(c, E.stripe_billing_params.environment.toLowerCase() === "sandbox"), q(_, E.stripe_billing_params, !0), q(p, "stripe-checkout");
    } catch (E) {
      g(Ai(E, "Failed to start Stripe Checkout"));
    }
  }), Tt(() => {
    if (!e.isInElement) {
      const v = (P, I, E) => {
        E === "" ? P.style.removeProperty(I) : P.style.setProperty(I, E);
      };
      v(document.documentElement, "height", k), v(document.body, "height", y), v(document.documentElement, "overflow", h);
    }
  }), qE(r, {
    get currentPage() {
      return o(p);
    },
    get brandingInfo() {
      return e.brandingInfo;
    },
    get productDetails() {
      return a;
    },
    get isSandbox() {
      return o(c);
    },
    get lastError() {
      return o(d);
    },
    get isInElement() {
      return e.isInElement;
    },
    get stripeBillingParams() {
      return o(_);
    },
    onContinue: f,
    onError: g,
    closeWithError: w
  }), ge();
}
function tg(r) {
  return r == null ? !0 : new Date(r) > /* @__PURE__ */ new Date();
}
function zE(r, e, t, n) {
  const a = e.product_identifier;
  if (a in t)
    return OE(
      r,
      e,
      t[a]
    );
  if (a in n)
    return NE(
      r,
      e,
      n[a]
    );
  throw new Qe(
    Me.CustomerInfoError,
    "Could not find entitlement product in subscriptions or non-subscriptions."
  );
}
function OE(r, e, t) {
  return {
    identifier: r,
    isActive: tg(e.expires_date),
    willRenew: ng(
      e.expires_date,
      t
    ),
    store: (t == null ? void 0 : t.store) ?? "unknown",
    latestPurchaseDate: new Date(e.purchase_date),
    originalPurchaseDate: new Date(e.purchase_date),
    expirationDate: Et(e.expires_date),
    productIdentifier: e.product_identifier,
    productPlanIdentifier: e.product_plan_identifier ?? null,
    unsubscribeDetectedAt: Et(
      t == null ? void 0 : t.unsubscribe_detected_at
    ),
    billingIssueDetectedAt: Et(
      t == null ? void 0 : t.billing_issues_detected_at
    ),
    isSandbox: (t == null ? void 0 : t.is_sandbox) ?? !1,
    periodType: (t == null ? void 0 : t.period_type) ?? "normal",
    ownershipType: (t == null ? void 0 : t.ownership_type) ?? "UNKNOWN"
  };
}
function NE(r, e, t) {
  return {
    identifier: r,
    isActive: !0,
    willRenew: !1,
    store: t.store,
    latestPurchaseDate: new Date(e.purchase_date),
    originalPurchaseDate: new Date(
      t.original_purchase_date
    ),
    expirationDate: null,
    productIdentifier: e.product_identifier,
    productPlanIdentifier: null,
    unsubscribeDetectedAt: null,
    billingIssueDetectedAt: null,
    isSandbox: t.is_sandbox,
    periodType: "normal",
    ownershipType: "UNKNOWN"
  };
}
function LE(r, e, t) {
  const n = {}, a = {};
  for (const i in r) {
    const s = zE(
      i,
      r[i],
      e,
      t
    );
    n[i] = s, s.isActive && (a[i] = s);
  }
  return {
    all: n,
    active: a
  };
}
function Et(r) {
  return r == null ? null : new Date(r);
}
function jE(r) {
  if (!r) return null;
  const e = r.amount * 1e6;
  return {
    amount: r.amount * 100,
    amountMicros: e,
    currency: r.currency,
    formattedPrice: cn(e, r.currency)
  };
}
function Tl(r) {
  const e = RE(r), t = r.subscriber, n = VE(
    t.non_subscriptions
  ), a = Object.entries(r.subscriber.non_subscriptions).flatMap(
    ([l, c]) => c.map((u) => ({
      transactionIdentifier: u.id,
      productIdentifier: l,
      purchaseDate: new Date(
        u.purchase_date || u.original_purchase_date
      ),
      storeTransactionId: u.store_transaction_id || null,
      store: u.store
    }))
  ), i = new Date(r.request_date), s = Object.fromEntries(
    Object.entries(r.subscriber.subscriptions).map(
      ([l, c]) => [
        l,
        {
          productIdentifier: l,
          productPlanIdentifier: c.product_plan_identifier ?? null,
          purchaseDate: new Date(c.purchase_date),
          originalPurchaseDate: Et(
            c.original_purchase_date
          ),
          expiresDate: Et(c.expires_date),
          store: c.store,
          unsubscribeDetectedAt: Et(
            c.unsubscribe_detected_at
          ),
          isSandbox: c.is_sandbox,
          billingIssuesDetectedAt: Et(
            c.billing_issues_detected_at
          ),
          gracePeriodExpiresDate: Et(
            c.grace_period_expires_date
          ),
          ownershipType: c.ownership_type ?? "UNKNOWN",
          periodType: c.period_type,
          refundedAt: Et(c.refunded_at),
          storeTransactionId: c.store_transaction_id || null,
          managementURL: c.management_url ?? null,
          isActive: tg(c.expires_date),
          willRenew: ng(c.expires_date, c),
          displayName: c.display_name ?? null,
          autoResumeDate: Et(c.auto_resume_date),
          price: jE(c.price)
        }
      ]
    )
  );
  return {
    entitlements: LE(
      t.entitlements,
      t.subscriptions,
      n
    ),
    allExpirationDatesByProduct: e,
    allPurchaseDatesByProduct: BE(
      r,
      n
    ),
    activeSubscriptions: UE(e),
    managementURL: t.management_url,
    requestDate: i,
    firstSeenDate: new Date(t.first_seen),
    originalPurchaseDate: Et(
      t.original_purchase_date
    ),
    originalAppUserId: r.subscriber.original_app_user_id,
    nonSubscriptionTransactions: a,
    subscriptionsByProductIdentifier: s
  };
}
function ng(r, e) {
  if (e == null) return !1;
  const t = e.store == "promotional", n = r == null, a = e.unsubscribe_detected_at != null, i = e.billing_issues_detected_at != null;
  return !(t || n || a || i);
}
function BE(r, e) {
  const t = {};
  for (const n in r.subscriber.subscriptions) {
    const a = r.subscriber.subscriptions[n];
    t[n] = new Date(
      a.purchase_date
    );
  }
  for (const n in e) {
    const a = e[n].purchase_date;
    a == null ? t[n] = null : t[n] = new Date(a);
  }
  return t;
}
function RE(r) {
  const e = {};
  for (const t in r.subscriber.subscriptions) {
    const n = r.subscriber.subscriptions[t];
    n.expires_date == null ? e[t] = null : e[t] = new Date(
      n.expires_date
    );
  }
  return e;
}
function UE(r) {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Date();
  for (const n in r) {
    const a = r[n];
    (a == null || a > t) && e.add(n);
  }
  return e;
}
function VE(r) {
  const e = {};
  for (const t in r) {
    if (r[t].length === 0) continue;
    const n = r[t].length;
    e[t] = r[t][n - 1];
  }
  return e;
}
const ag = "1.48.1", WE = "https://api.revenuecat.com", HE = "https://e.revenue.cat";
var Fi;
(function(r) {
  r[r.CONTINUE = 100] = "CONTINUE", r[r.SWITCHING_PROTOCOLS = 101] = "SWITCHING_PROTOCOLS", r[r.PROCESSING = 102] = "PROCESSING", r[r.EARLY_HINTS = 103] = "EARLY_HINTS", r[r.OK = 200] = "OK", r[r.CREATED = 201] = "CREATED", r[r.ACCEPTED = 202] = "ACCEPTED", r[r.NON_AUTHORITATIVE_INFORMATION = 203] = "NON_AUTHORITATIVE_INFORMATION", r[r.NO_CONTENT = 204] = "NO_CONTENT", r[r.RESET_CONTENT = 205] = "RESET_CONTENT", r[r.PARTIAL_CONTENT = 206] = "PARTIAL_CONTENT", r[r.MULTI_STATUS = 207] = "MULTI_STATUS", r[r.MULTIPLE_CHOICES = 300] = "MULTIPLE_CHOICES", r[r.MOVED_PERMANENTLY = 301] = "MOVED_PERMANENTLY", r[r.MOVED_TEMPORARILY = 302] = "MOVED_TEMPORARILY", r[r.SEE_OTHER = 303] = "SEE_OTHER", r[r.NOT_MODIFIED = 304] = "NOT_MODIFIED", r[r.USE_PROXY = 305] = "USE_PROXY", r[r.TEMPORARY_REDIRECT = 307] = "TEMPORARY_REDIRECT", r[r.PERMANENT_REDIRECT = 308] = "PERMANENT_REDIRECT", r[r.BAD_REQUEST = 400] = "BAD_REQUEST", r[r.UNAUTHORIZED = 401] = "UNAUTHORIZED", r[r.PAYMENT_REQUIRED = 402] = "PAYMENT_REQUIRED", r[r.FORBIDDEN = 403] = "FORBIDDEN", r[r.NOT_FOUND = 404] = "NOT_FOUND", r[r.METHOD_NOT_ALLOWED = 405] = "METHOD_NOT_ALLOWED", r[r.NOT_ACCEPTABLE = 406] = "NOT_ACCEPTABLE", r[r.PROXY_AUTHENTICATION_REQUIRED = 407] = "PROXY_AUTHENTICATION_REQUIRED", r[r.REQUEST_TIMEOUT = 408] = "REQUEST_TIMEOUT", r[r.CONFLICT = 409] = "CONFLICT", r[r.GONE = 410] = "GONE", r[r.LENGTH_REQUIRED = 411] = "LENGTH_REQUIRED", r[r.PRECONDITION_FAILED = 412] = "PRECONDITION_FAILED", r[r.REQUEST_TOO_LONG = 413] = "REQUEST_TOO_LONG", r[r.REQUEST_URI_TOO_LONG = 414] = "REQUEST_URI_TOO_LONG", r[r.UNSUPPORTED_MEDIA_TYPE = 415] = "UNSUPPORTED_MEDIA_TYPE", r[r.REQUESTED_RANGE_NOT_SATISFIABLE = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE", r[r.EXPECTATION_FAILED = 417] = "EXPECTATION_FAILED", r[r.IM_A_TEAPOT = 418] = "IM_A_TEAPOT", r[r.INSUFFICIENT_SPACE_ON_RESOURCE = 419] = "INSUFFICIENT_SPACE_ON_RESOURCE", r[r.METHOD_FAILURE = 420] = "METHOD_FAILURE", r[r.MISDIRECTED_REQUEST = 421] = "MISDIRECTED_REQUEST", r[r.UNPROCESSABLE_ENTITY = 422] = "UNPROCESSABLE_ENTITY", r[r.LOCKED = 423] = "LOCKED", r[r.FAILED_DEPENDENCY = 424] = "FAILED_DEPENDENCY", r[r.UPGRADE_REQUIRED = 426] = "UPGRADE_REQUIRED", r[r.PRECONDITION_REQUIRED = 428] = "PRECONDITION_REQUIRED", r[r.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", r[r.REQUEST_HEADER_FIELDS_TOO_LARGE = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE", r[r.UNAVAILABLE_FOR_LEGAL_REASONS = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS", r[r.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", r[r.NOT_IMPLEMENTED = 501] = "NOT_IMPLEMENTED", r[r.BAD_GATEWAY = 502] = "BAD_GATEWAY", r[r.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", r[r.GATEWAY_TIMEOUT = 504] = "GATEWAY_TIMEOUT", r[r.HTTP_VERSION_NOT_SUPPORTED = 505] = "HTTP_VERSION_NOT_SUPPORTED", r[r.INSUFFICIENT_STORAGE = 507] = "INSUFFICIENT_STORAGE", r[r.NETWORK_AUTHENTICATION_REQUIRED = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(Fi || (Fi = {}));
const YE = /^rcb_[a-zA-Z0-9_.-]+$/, GE = /^pdl_[a-zA-Z0-9_.-]+$/, KE = /^test_[a-zA-Z0-9_.-]+$/, XE = /^strp_[a-zA-Z0-9_.-]+$/;
function qi(r) {
  return r ? r.startsWith("rcb_sb_") : !1;
}
function Dl(r) {
  return r ? YE.test(r) : !1;
}
function og(r) {
  return r ? GE.test(r) : !1;
}
function ig(r) {
  return r ? XE.test(r) : !1;
}
function Un(r) {
  return r ? KE.test(r) : !1;
}
async function Zr(r, e, t) {
  return (await sg(
    r,
    e,
    t
  )).data;
}
async function sg(r, e, t) {
  const { apiKey: n, body: a, headers: i, httpConfig: s } = e, c = `${(s == null ? void 0 : s.proxyURL) ?? WE}${r.urlPath()}`;
  try {
    const u = await fetch(c, {
      method: r.method,
      headers: mg(n, i, s == null ? void 0 : s.additionalHeaders),
      body: JE(a),
      signal: t
    });
    await ZE(u, r);
    const d = u.status;
    return { data: await u.json(), statusCode: d };
  } catch (u) {
    throw u instanceof TypeError ? new Qe(
      Me.NetworkError,
      Ia.getPublicMessage(Me.NetworkError),
      u.message
    ) : u;
  }
}
async function ZE(r, e) {
  const t = r.status;
  if (t >= Fi.INTERNAL_SERVER_ERROR)
    Ks(e, t, await r.text());
  else if (t >= Fi.BAD_REQUEST) {
    const n = await r.json(), a = n ? JSON.stringify(n) : null, i = n == null ? void 0 : n.code, s = n == null ? void 0 : n.message;
    if (i != null) {
      const l = Ia.convertCodeToBackendErrorCode(i);
      if (l == null)
        Ks(
          e,
          t,
          a,
          i
        );
      else
        throw Qe.getForBackendError(
          l,
          s
        );
    } else
      Ks(e, t, a);
  }
}
function Ks(r, e, t, n) {
  throw new Qe(
    Me.UnknownBackendError,
    "Unknown backend error.",
    `Request: ${r.name}. Status code: ${e}. Body: ${t}.`,
    { backendErrorCode: n }
  );
}
function JE(r) {
  return r == null ? null : JSON.stringify(r);
}
const lg = "Authorization", cg = "Content-Type", ug = "Accept", dg = "X-Platform", pg = "X-Version", _g = "X-Platform-Flavor", gg = "X-Platform-Flavor-Version", fg = "X-Is-Sandbox", QE = /* @__PURE__ */ new Set([
  lg,
  cg,
  ug,
  dg,
  pg,
  fg,
  _g,
  gg
]);
function mg(r, e, t) {
  let n = {
    [lg]: `Bearer ${r}`,
    [cg]: "application/json",
    [ug]: "application/json",
    [dg]: "web",
    [pg]: ag,
    [fg]: `${qi(r)}`
  };
  const a = Ml.getPlatformInfo();
  if (a) {
    const i = {
      [_g]: a.flavor,
      [gg]: a.version
    };
    n = { ...n, ...i };
  }
  return e && (n = { ...n, ...e }), t && (n = { ...t, ...n }), n;
}
const _a = "/v1/subscribers", ga = "/rcbilling/v1";
class $E {
  constructor(e) {
    ee(this, "appUserId");
    ee(this, "method", "GET");
    ee(this, "name", "getOfferings");
    this.appUserId = e;
  }
  urlPath() {
    const e = encodeURIComponent(this.appUserId);
    return `${_a}/${e}/offerings`;
  }
}
class eS {
  constructor(e, t, n, a) {
    ee(this, "method", "GET");
    ee(this, "name", "getProducts");
    ee(this, "appUserId");
    ee(this, "productIds");
    ee(this, "currency");
    ee(this, "discountCode");
    this.appUserId = e, this.productIds = t, this.currency = n, this.discountCode = a;
  }
  urlPath() {
    const e = encodeURIComponent(this.appUserId), t = this.productIds.map(encodeURIComponent).join("&id="), n = this.currency ? `&currency=${this.currency}` : "", a = this.discountCode ? `&discount_code=${encodeURIComponent(this.discountCode)}` : "";
    return `${ga}/subscribers/${e}/products?id=${t}${n}${a}`;
  }
}
class rS {
  constructor(e) {
    ee(this, "method", "GET");
    ee(this, "name", "getCustomerInfo");
    ee(this, "appUserId");
    this.appUserId = e;
  }
  urlPath() {
    const e = encodeURIComponent(this.appUserId);
    return `${_a}/${e}`;
  }
}
class tS {
  constructor() {
    ee(this, "method", "POST");
    ee(this, "name", "identify");
  }
  urlPath() {
    return `${_a}/identify`;
  }
}
class nS {
  constructor() {
    ee(this, "method", "GET");
    ee(this, "name", "getBrandingInfo");
  }
  urlPath() {
    return `${ga}/branding`;
  }
}
class aS {
  constructor() {
    ee(this, "method", "POST");
    ee(this, "name", "postCheckoutPrepare");
  }
  urlPath() {
    return `${ga}/checkout/prepare`;
  }
}
class oS {
  constructor() {
    ee(this, "method", "POST");
    ee(this, "name", "postCheckoutStart");
  }
  urlPath() {
    return `${ga}/checkout/start`;
  }
}
class iS {
  constructor(e) {
    ee(this, "method", "PATCH");
    ee(this, "name", "patchCheckoutRefreshPricing");
    ee(this, "operationSessionId");
    this.operationSessionId = e;
  }
  urlPath() {
    return `${ga}/checkout/${this.operationSessionId}`;
  }
}
class sS {
  constructor(e) {
    ee(this, "method", "POST");
    ee(this, "name", "postCheckoutComplete");
    ee(this, "operationSessionId");
    this.operationSessionId = e;
  }
  urlPath() {
    return `${ga}/checkout/${this.operationSessionId}/complete`;
  }
}
class lS {
  constructor(e) {
    ee(this, "method", "GET");
    ee(this, "name", "getCheckoutStatus");
    ee(this, "operationSessionId");
    this.operationSessionId = e;
  }
  urlPath() {
    return `${ga}/checkout/${this.operationSessionId}`;
  }
}
class cS {
  constructor(e) {
    ee(this, "method", "POST");
    ee(this, "name", "setAttributes");
    ee(this, "appUserId");
    this.appUserId = e;
  }
  urlPath() {
    const e = encodeURIComponent(this.appUserId);
    return `${_a}/${e}/attributes`;
  }
}
class uS {
  constructor() {
    ee(this, "method", "POST");
    ee(this, "name", "postReceipt");
  }
  urlPath() {
    return "/v1/receipts";
  }
}
class dS {
  constructor(e) {
    ee(this, "method", "GET");
    ee(this, "name", "getVirtualCurrencies");
    ee(this, "appUserId");
    this.appUserId = e;
  }
  urlPath() {
    const e = encodeURIComponent(this.appUserId);
    return `${_a}/${e}/virtual_currencies`;
  }
}
class pS {
  constructor(e) {
    ee(this, "method", "GET");
    ee(this, "name", "getWorkflows");
    ee(this, "appUserId");
    this.appUserId = e;
  }
  urlPath() {
    return `${_a}/${encodeURIComponent(this.appUserId)}/workflows?type=paywall`;
  }
}
class _S {
  constructor(e, t) {
    ee(this, "method", "GET");
    ee(this, "name", "getWorkflowData");
    ee(this, "appUserId");
    ee(this, "workflowId");
    this.appUserId = e, this.workflowId = t;
  }
  urlPath() {
    return `${_a}/${encodeURIComponent(this.appUserId)}/workflows/${encodeURIComponent(this.workflowId)}`;
  }
}
const Al = {};
class gS {
  constructor(e, t = Al, n) {
    ee(this, "API_KEY");
    ee(this, "httpConfig");
    ee(this, "isSandbox");
    ee(this, "purchasesContext");
    this.API_KEY = e, this.httpConfig = t, this.isSandbox = qi(e), this.purchasesContext = n;
  }
  getIsSandbox() {
    return this.isSandbox;
  }
  async getOfferings(e) {
    return await Zr(
      new $E(e),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async getCustomerInfo(e) {
    return await Zr(
      new rS(e),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async identify(e, t) {
    const n = {
      app_user_id: e,
      new_app_user_id: t
    }, a = await sg(new tS(), {
      apiKey: this.API_KEY,
      body: n,
      httpConfig: this.httpConfig
    }), i = a.statusCode === 201;
    return {
      ...a.data,
      was_created: i
    };
  }
  async getProducts(e, t, n, a) {
    return await Zr(
      new eS(e, t, n, a),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async getBrandingInfo() {
    return await Zr(
      new nS(),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async postCheckoutPrepare(e, t) {
    const n = {
      product_id: e,
      price_id: t.priceId
    };
    return t.id !== "base_option" && (n.offer_id = t.id), await Zr(
      new aS(),
      {
        apiKey: this.API_KEY,
        body: n,
        httpConfig: this.httpConfig
      }
    );
  }
  async postCheckoutStart({
    appUserId: e,
    productId: t,
    purchaseOption: n,
    presentedOfferingContext: a,
    traceId: i,
    presentedStepId: s,
    urlParameters: l,
    paywallId: c,
    paywallSessionId: u,
    customerEmail: d,
    metadata: p,
    locale: _,
    attributionMetadata: f
  }) {
    var w, k;
    const g = {
      app_user_id: e,
      product_id: t,
      email: d,
      price_id: n.priceId,
      presented_offering_identifier: a.offeringIdentifier,
      trace_id: i
    };
    return p && (g.metadata = p), n.id !== "base_option" && (g.offer_id = n.id), a.targetingContext && (g.applied_targeting_rule = {
      rule_id: a.targetingContext.ruleId,
      revision: a.targetingContext.revision
    }), a.placementIdentifier && (g.presented_placement_identifier = a.placementIdentifier), (k = (w = this.purchasesContext) == null ? void 0 : w.workflowContext) != null && k.workflowIdentifier && (g.presented_workflow_id = this.purchasesContext.workflowContext.workflowIdentifier), s && (g.presented_step_id = s), l && Object.keys(l).length > 0 && (g.url_parameters = l), c && (g.paywall = {
      paywall_id: c,
      ...u ? { paywall_session_id: u } : {}
    }), _ && (g.locale = _), f && (g.attribution_metadata = f), await Zr(
      new oS(),
      {
        apiKey: this.API_KEY,
        body: g,
        httpConfig: this.httpConfig
      }
    );
  }
  async patchCheckoutRefreshPricing(e, {
    countryCode: t,
    postalCode: n,
    state: a,
    city: i,
    addressLine1: s,
    addressLine2: l,
    discountCode: c,
    signal: u
  } = {}) {
    const d = {
      country_code: t,
      postal_code: n,
      state: a,
      city: i,
      address_line1: s,
      address_line2: l,
      discount_code: c
    };
    return await Zr(
      new iS(e),
      {
        apiKey: this.API_KEY,
        body: d,
        httpConfig: this.httpConfig
      },
      u
    );
  }
  async postCheckoutComplete(e, t, n) {
    const a = {
      email: t
    };
    return n && (a.locale = n), await Zr(new sS(e), {
      apiKey: this.API_KEY,
      body: a,
      httpConfig: this.httpConfig
    });
  }
  async getCheckoutStatus(e) {
    return await Zr(
      new lS(e),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async setAttributes(e, t) {
    const n = Date.now(), a = {};
    for (const [s, l] of Object.entries(t))
      a[s] = {
        value: l,
        updated_at_ms: n
      };
    const i = {
      attributes: a
    };
    return await Zr(
      new cS(e),
      {
        apiKey: this.API_KEY,
        body: i,
        httpConfig: this.httpConfig
      }
    );
  }
  async postReceipt(e, t, n, a, i, s, l) {
    var d, p;
    let c = null;
    i.targetingContext && (c = {
      rule_id: i.targetingContext.ruleId,
      revision: i.targetingContext.revision
    });
    const u = {
      fetch_token: a,
      product_id: t,
      currency: n,
      app_user_id: e,
      presented_offering_identifier: i.offeringIdentifier,
      presented_placement_identifier: i.placementIdentifier,
      presented_workflow_id: (p = (d = this.purchasesContext) == null ? void 0 : d.workflowContext) == null ? void 0 : p.workflowIdentifier,
      applied_targeting_rule: c,
      initiation_source: s
    };
    return l && (u.paywall = {
      paywall_id: l
    }), await Zr(
      new uS(),
      {
        apiKey: this.API_KEY,
        body: u,
        httpConfig: this.httpConfig
      }
    );
  }
  async getVirtualCurrencies(e) {
    return await Zr(
      new dS(e),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async getWorkflows(e) {
    return await Zr(
      new pS(e),
      {
        apiKey: this.API_KEY,
        httpConfig: this.httpConfig
      }
    );
  }
  async getWorkflowById(e, t) {
    const n = await Zr(new _S(e, t), {
      apiKey: this.API_KEY,
      httpConfig: this.httpConfig
    });
    if (!("action" in n))
      return n;
    if (n.action === "inline")
      return n.data;
    if (n.action !== "use_cdn")
      throw new Error(
        `Unexpected workflow action: ${n.action}`
      );
    const a = await fetch(n.url);
    if (!a.ok)
      throw new Error(
        `Failed to fetch workflow from CDN: ${a.statusText}`
      );
    return await a.json();
  }
}
function fS(r) {
  if (!(Dl(r) || Un(r) || og(r) || ig(r)))
    throw new Qe(
      Me.InvalidCredentialsError,
      "Invalid API key. Use your Web Billing API key."
    );
}
function Xs(r) {
  if (!r || (/* @__PURE__ */ new Set([
    "no_user",
    "null",
    "none",
    "nil",
    "(null)",
    "NaN",
    "\\x00",
    "",
    "unidentified",
    "undefined",
    "unknown"
  ])).has(r) || r.includes("/"))
    throw new Qe(
      Me.InvalidAppUserIdError,
      'Provided user id: "' + (r ?? "[Not provided]") + '" is not valid. See https://www.revenuecat.com/docs/customers/user-ids#tips-for-setting-app-user-ids for more information.'
    );
}
function mS(r) {
  if (r != null && r.endsWith("/"))
    throw new Qe(
      Me.ConfigurationError,
      "Invalid proxy URL. The proxy URL should not end with a trailing slash."
    );
}
function hS(r) {
  if (r) {
    for (const e in r)
      if (QE.has(e))
        throw new Qe(
          Me.ConfigurationError,
          "Invalid additional headers. Some headers are reserved for internal use."
        );
  }
}
var hg = /* @__PURE__ */ ((r) => (r.Current = "current", r))(hg || {});
function _d(r, e) {
  async function t(...n) {
    return await this.preload(), await r.call(this, ...n);
  }
  return t;
}
const vg = (r, e) => {
  const t = {
    ...r.webBillingProduct,
    presentedOfferingContext: {
      ...r.webBillingProduct.presentedOfferingContext,
      placementIdentifier: e
    }
  };
  return {
    ...r,
    webBillingProduct: t,
    rcBillingProduct: t
  };
}, Bn = (r, e) => r == null ? null : vg(r, e), vS = (r, e, t) => {
  const n = r.offering_ids_by_placement ?? {}, a = r.fallback_offering_id;
  let i;
  if (t in n) {
    const l = n[t] ?? null;
    l && (i = e[l]);
  }
  if (!i && a && a in e && (i = e[a]), !i)
    return null;
  const s = Object.fromEntries(
    Object.entries(i.packagesById).map(([l, c]) => [
      l,
      vg(c, t)
    ])
  );
  return {
    ...i,
    packagesById: s,
    availablePackages: Object.values(s),
    weekly: Bn(i.weekly, t),
    monthly: Bn(
      i.monthly,
      t
    ),
    twoMonth: Bn(
      i.twoMonth,
      t
    ),
    threeMonth: Bn(
      i.threeMonth,
      t
    ),
    sixMonth: Bn(
      i.sixMonth,
      t
    ),
    annual: Bn(i.annual, t),
    lifetime: Bn(
      i.lifetime,
      t
    )
  };
};
function yS(r, e) {
  const t = {};
  e.product_details.forEach((i) => {
    t[i.identifier] = i;
  });
  const n = {};
  r.offerings.forEach((i) => {
    const s = i.identifier === r.current_offering_id, l = wh(
      s,
      i,
      t,
      r.targeting,
      r.ui_config
    );
    l != null && (n[i.identifier] = l);
  });
  const a = r.current_offering_id ? n[r.current_offering_id] ?? null : null;
  return Object.keys(n).length == 0 && be.debugLog(
    "Empty offerings. Please make sure you've configured offerings correctly in the RevenueCat dashboard and that the products are properly configured."
  ), {
    all: n,
    current: a
  };
}
const bS = 1000001;
function Lr(r, e, t) {
  return t.formatPrice(
    ui(r, e),
    e
  );
}
function kS(r, e, t) {
  const n = t.formatPrice(r.amountMicros, r.currency);
  return e ? e.unit === Ne.Year ? Lr(
    r.amountMicros / pc / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Month ? Lr(
    r.amountMicros / Qi / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Week ? Lr(
    r.amountMicros / dc / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Day ? Lr(
    r.amountMicros / e.number,
    r.currency,
    t
  ) : n : n;
}
function wS(r, e, t) {
  const n = t.formatPrice(r.amountMicros, r.currency);
  return e ? e.unit === Ne.Year ? Lr(
    r.amountMicros / _c / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Month ? Lr(
    r.amountMicros / $i / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Week ? Lr(
    r.amountMicros / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Day ? Lr(
    r.amountMicros * dc / e.number,
    r.currency,
    t
  ) : n : n;
}
function PS(r, e, t) {
  return e ? e.unit === Ne.Year ? Lr(
    r.amountMicros / es,
    r.currency,
    t
  ) : e.unit === Ne.Month ? Lr(
    r.amountMicros / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Week ? Lr(
    r.amountMicros * $i / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Day ? Lr(
    r.amountMicros * Qi / e.number,
    r.currency,
    t
  ) : Lr(
    r.amountMicros / (e.number || 1),
    r.currency,
    t
  ) : t.formatPrice(r.amountMicros, r.currency);
}
function xS(r, e, t) {
  const n = t.formatPrice(r.amountMicros, r.currency);
  return e ? e.unit === Ne.Year ? Lr(
    r.amountMicros / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Month ? Lr(
    r.amountMicros * es / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Week ? Lr(
    r.amountMicros * _c / e.number,
    r.currency,
    t
  ) : e.unit === Ne.Day ? Lr(
    r.amountMicros * pc / e.number,
    r.currency,
    t
  ) : n : n;
}
function yg(r, e, t) {
  return {
    pricePerDay: kS(r, e, t),
    pricePerWeek: wS(r, e, t),
    pricePerMonth: PS(r, e, t),
    pricePerYear: xS(r, e, t)
  };
}
function ES(r) {
  return r.cycleCount > 0 ? r.cycleCount : 1;
}
function SS(r) {
  return "durationMode" in r && r.durationMode === "forever";
}
function IS(r) {
  return "durationMode" in r && r.durationMode === "time_window";
}
function CS(r, e) {
  return IS(e) ? r.base.period : e.period;
}
function TS(r) {
  return r.period === null || SS(r) ? null : {
    number: r.period.number * ES(r),
    unit: r.period.unit
  };
}
function DS(r, e) {
  const t = mo(/* @__PURE__ */ new Date(), r, !0);
  return t ? e.translateDate(t, { dateStyle: "long" }) ?? "" : "";
}
function AS(r, e, t) {
  const n = r.discount ?? r.trial ?? r.introPrice, a = r.trial && !r.discount ? r.introPrice : null;
  if (n === null)
    return;
  const i = TS(n), s = CS(r, n), { price: l } = n;
  if (l !== null) {
    const c = yg(
      l,
      s,
      e
    );
    t["product.offer_price"] = e.formatPrice(
      l.amountMicros,
      l.currency
    ), t["product.offer_price_per_day"] = c.pricePerDay, t["product.offer_price_per_week"] = c.pricePerWeek, t["product.offer_price_per_month"] = c.pricePerMonth, t["product.offer_price_per_year"] = c.pricePerYear;
  }
  if (i !== null) {
    const c = bl(i, e);
    t["product.offer_period"] = c.period, t["product.offer_period_abbreviated"] = c.periodAbbreviated, t["product.offer_period_with_unit"] = c.periodWithUnit, t["product.offer_period_in_days"] = c.periodInDays, t["product.offer_period_in_weeks"] = c.periodInWeeks, t["product.offer_period_in_months"] = c.periodInMonths, t["product.offer_period_in_years"] = c.periodInYears, t["product.offer_end_date"] = DS(
      i,
      e
    );
  }
  if (a !== null && (a.price !== null && (t["product.secondary_offer_price"] = e.formatPrice(
    a.price.amountMicros,
    a.price.currency
  )), a.period !== null)) {
    const c = bl(a.period, e);
    t["product.secondary_offer_period"] = c.period, t["product.secondary_offer_period_abbreviated"] = c.periodAbbreviated;
  }
}
function FS(r, e, t) {
  var a;
  const n = ((a = r.discount) == null ? void 0 : a.price) ?? null;
  n !== null && (t["product.offer_price"] = e.formatPrice(
    n.amountMicros,
    n.currency
  ));
}
function gd(r, e = {}) {
  var a;
  if (e.translator)
    return md(r, e.translator);
  const t = ((a = r.paywallComponents) == null ? void 0 : a.default_locale) || Or, n = new Tn(
    e.customTranslations ?? {},
    e.selectedLocale ?? t,
    e.fallbackLocale ?? t
  );
  return md(r, n);
}
function Mi(r) {
  var a;
  const e = r.webBillingProduct.price, t = bg(r), n = r.webBillingProduct.period || ((a = t == null ? void 0 : t.base) == null ? void 0 : a.period);
  if (!n || !n.number || n.number <= 0)
    return e.amountMicros;
  switch (n.unit) {
    case Ne.Year:
      return e.amountMicros / es;
    case Ne.Month:
      return e.amountMicros / n.number;
    case Ne.Week:
      return e.amountMicros * $i / n.number;
    case Ne.Day:
      return e.amountMicros * Qi / n.number;
    default:
      return e.amountMicros / (n.number || 1);
  }
}
function bg(r) {
  return r.webBillingProduct.productType === Ur.Subscription ? r.webBillingProduct.defaultSubscriptionOption : r.webBillingProduct.productType === Ur.NonConsumable || r.webBillingProduct.productType === Ur.Consumable ? r.webBillingProduct.defaultNonSubscriptionOption : r.webBillingProduct.defaultPurchaseOption;
}
function qS(r, e) {
  return r === Ur.Subscription && e != null;
}
function MS(r, e) {
  return r !== Ur.Subscription && e != null;
}
function fd(r, e, t, n = !1) {
  return t.translate(ue.PaywallVariablesPricePerPeriod, {
    formattedPrice: r,
    period: e.base.period ? e.base.period.number === 1 ? t.translatePeriodUnit(e.base.period.unit, {
      noWhitespace: !0,
      short: !n
    }) : t.translatePeriod(
      e.base.period.number,
      e.base.period.unit,
      {
        noWhitespace: !0,
        short: !n
      }
    ) : ""
  });
}
function md(r, e) {
  const t = r.availablePackages, n = t.filter(
    (i) => i.webBillingProduct.productType === Ur.Subscription
  ), a = n.length > 0 ? n.reduce((i, s) => {
    const l = Mi(i), c = Mi(s);
    return l > c ? i : s;
  }) : null;
  return t.reduce(
    (i, s) => (i[s.identifier] = zS(
      s,
      a,
      e
    ), i),
    {}
  );
}
function zS(r, e, t) {
  const n = r.webBillingProduct, a = n.price, i = t.formatPrice(
    a.amountMicros,
    a.currency
  ), s = bg(r), l = n.productType, c = {
    "product.store_product_name": n.title,
    "product.price": i,
    "product.price_per_period": "",
    "product.price_per_period_abbreviated": "",
    "product.price_per_day": "",
    "product.price_per_week": "",
    "product.price_per_month": "",
    "product.price_per_year": "",
    "product.period": "",
    "product.period_abbreviated": "",
    "product.periodly": "",
    "product.period_in_days": "",
    "product.period_in_weeks": "",
    "product.period_in_months": "",
    "product.period_in_years": "",
    "product.period_with_unit": "",
    "product.currency_code": a.currency,
    "product.currency_symbol": t.formatPrice(0, a.currency).replace("0", ""),
    "product.offer_price": "",
    "product.offer_price_per_day": "",
    "product.offer_price_per_week": "",
    "product.offer_price_per_month": "",
    "product.offer_price_per_year": "",
    "product.offer_period": "",
    "product.offer_period_abbreviated": "",
    "product.offer_period_in_days": "",
    "product.offer_period_in_weeks": "",
    "product.offer_period_in_months": "",
    "product.offer_period_in_years": "",
    "product.offer_period_with_unit": "",
    "product.offer_end_date": "",
    "product.secondary_offer_price": "",
    "product.secondary_offer_period": "",
    "product.secondary_offer_period_abbreviated": "",
    "product.relative_discount": ""
  };
  if (qS(l, s)) {
    c["product.price_per_period_abbreviated"] = fd(
      i,
      s,
      t
    ), c["product.price_per_period"] = fd(
      i,
      s,
      t,
      !0
    );
    const u = n.period || s.base.period, d = yg(
      a,
      u,
      t
    );
    if (c["product.price_per_day"] = d.pricePerDay, c["product.price_per_week"] = d.pricePerWeek, c["product.price_per_month"] = d.pricePerMonth, c["product.price_per_year"] = d.pricePerYear, u) {
      const p = bl(u, t);
      c["product.period"] = p.period, c["product.period_abbreviated"] = p.periodAbbreviated, c["product.period_with_unit"] = p.periodWithUnit, c["product.period_in_days"] = p.periodInDays, c["product.period_in_weeks"] = p.periodInWeeks, c["product.period_in_months"] = p.periodInMonths, c["product.period_in_years"] = p.periodInYears, c["product.periodly"] = t.translatePeriodFrequency(
        u.number,
        u.unit
      ) || "";
    }
    if (e) {
      const p = Mi(r), _ = Mi(e), f = (_ - p) * 100 / _;
      c["product.relative_discount"] = f < 1 ? "" : t.translate(
        ue.PaywallVariablesSubRelativeDiscount,
        {
          discount: f.toFixed(0)
        }
      );
    }
    AS(s, t, c);
  }
  return MS(l, s) && (c["product.price"] = i, c["product.price_per_period"] = i, c["product.price_per_period_abbreviated"] = i, c["product.price_per_month"] = i, c["product.period_with_unit"] = t.translate(
    ue.PeriodsLifetime
  ), c["product.period_in_months"] = t.translate(
    ue.PeriodsLifetime
  ), c["product.periodly"] = t.translate(
    ue.PeriodsLifetime
  ), c["product.price_per_week"] = "", c["product.relative_discount"] = "", c["product.period"] = "", c["product.period_abbreviated"] = "", FS(s, t, c)), c;
}
var OS = /(%?)(%([sdijo]))/g;
function NS(r, e) {
  switch (e) {
    case "s":
      return r;
    case "d":
    case "i":
      return Number(r);
    case "j":
      return JSON.stringify(r);
    case "o": {
      if (typeof r == "string")
        return r;
      const t = JSON.stringify(r);
      return t === "{}" || t === "[]" || /^\[object .+?\]$/.test(t) ? r : t;
    }
  }
}
function hc(r, ...e) {
  if (e.length === 0)
    return r;
  let t = 0, n = r.replace(
    OS,
    (a, i, s, l) => {
      const c = e[t], u = NS(c, l);
      return i ? a : (t++, u);
    }
  );
  return t < e.length && (n += ` ${e.slice(t).join(" ")}`), n = n.replace(/%{2,2}/g, "%"), n;
}
var LS = 2;
function jS(r) {
  if (!r.stack)
    return;
  const e = r.stack.split(`
`);
  e.splice(1, LS), r.stack = e.join(`
`);
}
var BS = class extends Error {
  constructor(r, ...e) {
    super(r), this.message = r, this.name = "Invariant Violation", this.message = hc(r, ...e), jS(this);
  }
}, kg = (r, e, ...t) => {
  if (!r)
    throw new BS(e, ...t);
};
kg.as = (r, e, t, ...n) => {
  if (!e) {
    const a = n.length === 0 ? t : hc(t, ...n);
    let i;
    try {
      i = Reflect.construct(r, [
        a
      ]);
    } catch {
      i = r(a);
    }
    throw i;
  }
};
const RS = "[MSW]";
function vc(r, ...e) {
  const t = hc(r, ...e);
  return `${RS} ${t}`;
}
function US(r, ...e) {
  console.warn(vc(r, ...e));
}
function VS(r, ...e) {
  console.error(vc(r, ...e));
}
const WS = {
  formatMessage: vc,
  warn: US,
  error: VS
};
function HS() {
  kg(
    typeof URL < "u",
    WS.formatMessage(
      `Global "URL" class is not defined. This likely means that you're running MSW in an environment that doesn't support all Node.js standard API (e.g. React Native). If that's the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".`
    )
  );
}
var wg = /* @__PURE__ */ ((r) => (r.HEAD = "HEAD", r.GET = "GET", r.POST = "POST", r.PUT = "PUT", r.PATCH = "PATCH", r.OPTIONS = "OPTIONS", r.DELETE = "DELETE", r))(wg || {});
HS();
class YS {
  constructor(e, t, n, a) {
    ee(this, "initialDelay");
    ee(this, "maxDelay");
    ee(this, "jitterPercent");
    ee(this, "callback");
    ee(this, "currentDelay");
    ee(this, "timeoutId");
    ee(this, "executingCallback", !1);
    ee(this, "stopped", !1);
    ee(this, "currentFlushPromise", null);
    this.initialDelay = e, this.currentDelay = e, this.maxDelay = t, this.jitterPercent = n, this.callback = a;
  }
  tryFlush() {
    if (!this.stopped) {
      if (this.backingOff()) {
        be.debugLog("Backing off, not flushing");
        return;
      }
      this.clearTimeout(), this.executeCallbackWithRetries().catch(() => {
      });
    }
  }
  start() {
    this.stopped = !1, this.currentDelay = this.initialDelay;
  }
  stop() {
    this.stopped = !0, this.clearTimeout();
  }
  /**
   * Clears any scheduled flush and runs the callback once.
   * Returns the callback result (true = queue empty).
   * Runs the callback even when stopped (used by flushUntilDrain).
   */
  flushImmediately(e) {
    return this.clearTimeout(), this.executeCallbackWithRetries(e);
  }
  /**
   * Waits for any in-flight flush, then stops scheduling, runs the callback until it reports queue empty (or throws), then starts again.
   */
  async flushUntilDrain(e) {
    const t = this.currentFlushPromise;
    if (t)
      try {
        await t;
      } catch {
      }
    this.stop();
    try {
      let n = !1;
      for (; !n; )
        n = await this.flushImmediately(e);
    } finally {
      this.start();
    }
  }
  schedule(e) {
    if (this.stopped || this.timeoutId !== void 0)
      return;
    const t = this.addJitter(e || this.currentDelay);
    this.timeoutId = setTimeout(() => {
      this.timeoutId = void 0, this.executeCallbackWithRetries().catch(() => {
      });
    }, t);
  }
  backoff() {
    const e = this.currentDelay, t = Math.min(this.currentDelay * 2, this.maxDelay);
    be.debugLog(`Backing next off to ${e}ms delay`), this.clearTimeout(), this.currentDelay = t, this.schedule(e);
  }
  reset() {
    this.currentDelay !== this.initialDelay && (this.clearTimeout(), this.currentDelay = this.initialDelay);
  }
  async executeCallbackWithRetries(e) {
    if (this.executingCallback)
      return be.debugLog("Callback already running, rescheduling"), this.schedule(), !0;
    this.executingCallback = !0;
    let t;
    try {
      t = Promise.resolve(this.callback(e));
    } catch (n) {
      t = Promise.reject(n);
    }
    this.currentFlushPromise = t.then(
      () => {
      },
      () => {
      }
    );
    try {
      const n = await t;
      return this.reset(), n;
    } catch {
      return this.backoff(), !0;
    } finally {
      this.executingCallback = !1, this.currentFlushPromise = null;
    }
  }
  backingOff() {
    return this.currentDelay > this.initialDelay;
  }
  clearTimeout() {
    clearTimeout(this.timeoutId), this.timeoutId = void 0;
  }
  addJitter(e) {
    const t = e * this.jitterPercent, n = e - t, a = e + t;
    return Math.floor(Math.random() * (a - n + 1) + n);
  }
}
const GS = {
  componentType: "component_type",
  componentName: "component_name",
  componentValue: "component_value",
  componentURL: "component_url",
  originIndex: "origin_index",
  destinationIndex: "destination_index",
  originContextName: "origin_context_name",
  destinationContextName: "destination_context_name",
  defaultIndex: "default_index",
  originPackageId: "origin_package_id",
  destinationPackageId: "destination_package_id",
  defaultPackageId: "default_package_id",
  originProductId: "origin_product_id",
  destinationProductId: "destination_product_id",
  defaultProductId: "default_product_id",
  currentPackageId: "current_package_id",
  resultingPackageId: "resulting_package_id",
  currentProductId: "current_product_id",
  resultingProductId: "resulting_product_id"
}, KS = Object.entries(GS), hd = (r) => r.displayMode === void 0 ? {} : {
  display_mode: r.displayMode,
  dark_mode: r.darkMode ?? !1,
  locale: r.locale ?? "en_US"
}, XS = (r) => {
  const e = {};
  for (const [t, n] of KS) {
    const a = r[t];
    a !== void 0 && Object.assign(e, { [n]: a });
  }
  return e;
};
function ZS(r) {
  return !r || !r.placementIdentifier && !r.targetingContext ? null : {
    ...r.placementIdentifier ? { placement_identifier: r.placementIdentifier } : {},
    ...r.targetingContext ? {
      targeting_revision: r.targetingContext.revision,
      targeting_rule_id: r.targetingContext.ruleId
    } : {}
  };
}
const JS = (r, e, t) => {
  const n = {
    version: 1,
    id: e,
    app_user_id: r.appUserId,
    session_id: r.sessionId,
    offering_id: r.offeringId,
    paywall_revision: r.paywallRevision,
    timestamp: t,
    paywall_rc_public_id: r.paywallRcPublicId
  }, a = ZS(
    r.presentedOfferingContext
  );
  return a && (n.presented_offering_context = a), n;
};
class vd {
  constructor(e) {
    ee(this, "id");
    ee(this, "timestamp");
    ee(this, "data");
    this.id = An(), this.timestamp = Date.now(), this.data = e;
  }
  toJSON() {
    const e = JS(this.data, this.id, this.timestamp);
    switch (this.data.type) {
      case "paywall_impression":
        return {
          type: this.data.type,
          ...e,
          ...hd(this.data)
        };
      case "paywall_close":
      case "paywall_cancel":
        return {
          type: this.data.type,
          ...e
        };
      case "paywall_component_interacted":
        return {
          type: this.data.type,
          ...e,
          ...hd(this.data),
          ...XS(this.data)
        };
    }
  }
}
function mn() {
  if (typeof window < "u")
    return window;
  throw new Qe(
    Me.UnsupportedError,
    "window is not available. This SDK requires a browser environment for this operation."
  );
}
function xo() {
  if (typeof window < "u")
    return window;
}
function Fl() {
  if (typeof document < "u")
    return document;
  throw new Qe(
    Me.UnsupportedError,
    "document is not available. This SDK requires a browser environment for this operation."
  );
}
function ql() {
  if (typeof document < "u")
    return document;
}
function QS(r, e) {
  const t = xo(), n = t != null && t.location ? new URLSearchParams(t.location.search) : new URLSearchParams();
  let a = null, i = null;
  typeof screen < "u" && screen && (a = screen.width, i = screen.height);
  const s = ql(), l = (s == null ? void 0 : s.referrer) ?? null, c = (s == null ? void 0 : s.title) ?? null;
  return {
    libraryName: "purchases-js",
    libraryVersion: ag,
    locale: navigator.language,
    userAgent: navigator.userAgent,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenWidth: a,
    screenHeight: i,
    utmSource: n.get("utm_source") ?? null,
    utmMedium: n.get("utm_medium") ?? null,
    utmCampaign: n.get("utm_campaign") ?? null,
    utmContent: n.get("utm_content") ?? null,
    utmTerm: n.get("utm_term") ?? null,
    pageReferrer: l,
    pageUrl: t != null && t.location ? `${t.location.origin}${t.location.pathname}` : "",
    pageTitle: c,
    source: r,
    rcSource: e
  };
}
const $S = 2e3, eI = 5 * 6e4, rI = 0.1, yd = 50 * 1024;
class tI {
  constructor(e) {
    ee(this, "apiKey");
    ee(this, "eventsQueue", []);
    ee(this, "eventsUrl");
    ee(this, "flushManager");
    ee(this, "traceId");
    ee(this, "appUserId");
    ee(this, "isSilent");
    ee(this, "rcSource");
    ee(this, "workflowContext");
    ee(this, "isDisposed", !1);
    var t;
    this.apiKey = e.apiKey, this.eventsUrl = `${((t = e.httpConfig) == null ? void 0 : t.eventsURL) ?? HE}/v1/events`, this.appUserId = e.appUserId, this.isSilent = e.silent || !1, this.rcSource = e.rcSource, this.workflowContext = e.workflowContext, this.traceId = e.trace_id || An(), this.flushManager = new YS(
      $S,
      eI,
      rI,
      this.doFlush.bind(this)
    );
  }
  async updateUser(e) {
    this.appUserId = e;
  }
  getTraceId() {
    return this.traceId;
  }
  trackSDKEvent(e) {
    this.trackEvent({ ...e, source: "sdk" });
  }
  trackExternalEvent(e) {
    this.trackEvent({ ...e });
  }
  trackPaywallEvent(e) {
    if (this.isSilent) {
      be.verboseLog("Skipping event tracking, the EventsTracker is silent");
      return;
    }
    try {
      const t = new vd(e);
      be.debugLog(
        `[PaywallEvent] Queuing ${e.type} (queue size: ${this.eventsQueue.length + 1}, url: ${this.eventsUrl})`
      ), be.debugLog(
        `[PaywallEvent] Payload: ${JSON.stringify(t.toJSON())}`
      ), this.eventsQueue.push(t), this.flushManager.tryFlush();
    } catch (t) {
      be.errorLog(
        `Error while tracking paywall event ${e.type}: ${t}`
      );
    }
  }
  trackEvent(e) {
    var t;
    if (this.isSilent) {
      be.verboseLog("Skipping event tracking, the EventsTracker is silent");
      return;
    }
    try {
      const n = new eP({
        eventName: e.eventName,
        traceId: this.traceId,
        appUserId: this.appUserId,
        context: QS(e.source, this.rcSource),
        workflowIdentifier: (t = this.workflowContext) == null ? void 0 : t.workflowIdentifier,
        properties: e.properties || {
          mode: Xr
        }
      });
      this.eventsQueue.push(n), this.flushManager.tryFlush();
    } catch (n) {
      be.errorLog(
        `Error while tracking event ${e.eventName}: ${n}`
      );
    }
  }
  dispose() {
    this.isDisposed || (this.flushManager.stop(), this.eventsQueue.length > 0 && this.flushManager.flushUntilDrain({ ignoreDisposed: !0 }).catch((e) => {
      be.debugLog(`Failed to flush events on dispose: ${e}`);
    }), this.isDisposed = !0);
  }
  async flushAllEvents() {
    this.isDisposed || (await this.flushManager.flushUntilDrain(), !this.isDisposed && this.eventsQueue.length > 0 && this.flushManager.schedule());
  }
  estimateSingleEventSize(e) {
    try {
      return JSON.stringify(e).length;
    } catch {
      return yd;
    }
  }
  /**
   * Builds a batch of events that fits within browser keepalive size limit.
   * Browsers impose ~64KB limit on fetch() requests with keepalive:true.
   * https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#keepalive
   * Returns null if the first event exceeds the limit (and removes it from queue).
   */
  batchEventsForKeepalive() {
    const e = [];
    let t = 16;
    for (const n of this.eventsQueue) {
      const a = this.estimateSingleEventSize(n), i = e.length > 0 ? 1 : 0, s = t + a + i;
      if (s <= yd)
        e.push(n), t = s;
      else if (e.length === 0) {
        const l = n instanceof vd ? n.data.type : n.data.eventName;
        return be.warnLog(
          `Event exceeds keepalive size limit (${a} bytes): ${l}`
        ), this.eventsQueue.shift(), null;
      } else
        break;
    }
    return e;
  }
  doFlush(e) {
    if (!(e != null && e.ignoreDisposed) && this.isDisposed || this.eventsQueue.length === 0)
      return Promise.resolve(!0);
    const t = this.batchEventsForKeepalive();
    if (!t)
      return Promise.resolve(this.eventsQueue.length === 0);
    const n = JSON.stringify({ events: t });
    return be.debugLog(
      `[EventsTracker] Flushing ${t.length} event(s) to ${this.eventsUrl}`
    ), be.debugLog(`[EventsTracker] Body: ${n}`), fetch(this.eventsUrl, {
      method: wg.POST,
      headers: mg(this.apiKey),
      body: n,
      keepalive: !0
    }).then((a) => {
      if (be.debugLog(`[EventsTracker] Flush response: ${a.status}`), a.status === 200 || a.status === 201)
        return this.eventsQueue.splice(0, t.length), this.eventsQueue.length > 0 && this.flushManager.schedule(), this.eventsQueue.length === 0;
      throw be.debugLog("Events failed to flush due to server error"), new Error("Events failed to flush due to server error");
    }).catch((a) => {
      throw be.debugLog(`[EventsTracker] Flush error: ${a}`), a;
    });
  }
}
const oi = () => {
  const r = xo(), e = r != null && r.location ? new URLSearchParams(r.location.search) : new URLSearchParams(), t = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content"
  ], n = {};
  return t.forEach((a) => {
    const i = e.get(a);
    i !== null && (n[a] = i);
  }), n;
}, bd = ["app", "embedded"], Zs = {
  autoCollectUTMAsMetadata: !0,
  collectAnalyticsEvents: !0,
  storeLoadTime: "configuration"
};
var nI = /* @__PURE__ */ V('<p class="svelte-17914yi"><strong>Free Trial:</strong> </p>'), aI = /* @__PURE__ */ V('<p class="svelte-17914yi"><strong>Intro Price:</strong> </p>'), oI = /* @__PURE__ */ V('<p class="svelte-17914yi"><strong>Discount Price:</strong> </p>'), iI = /* @__PURE__ */ V('<div class="rc-simulated-store-modal-overlay svelte-17914yi"><div class="rc-simulated-store-modal svelte-17914yi"><div class="rc-simulated-store-modal-content svelte-17914yi"><h2 class="rc-simulated-store-modal-title svelte-17914yi">Test Store Purchase</h2> <div class="rc-simulated-store-modal-details svelte-17914yi"><div><p class="svelte-17914yi"><strong>Product:</strong> </p> <p class="svelte-17914yi"><strong>Type:</strong> </p> <p class="svelte-17914yi"><strong>Price:</strong> </p> <!> <!> <!></div></div> <div class="rc-simulated-store-modal-buttons svelte-17914yi"><button type="button" class="rc-simulated-store-modal-button rc-simulated-store-modal-button-primary svelte-17914yi">Test valid purchase</button> <button type="button" class="rc-simulated-store-modal-button rc-simulated-store-modal-button-secondary svelte-17914yi">Test failed purchase</button> <button type="button" class="rc-simulated-store-modal-button rc-simulated-store-modal-button-cancel svelte-17914yi">Cancel</button></div></div></div></div>');
const sI = {
  hash: "svelte-17914yi",
  code: `.rc-simulated-store-modal-overlay.svelte-17914yi {position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);display:flex;justify-content:center;align-items:center;font-family:-apple-system,
      BlinkMacSystemFont,
      avenir next,
      avenir,
      segoe ui,
      helvetica neue,
      helvetica,
      Cantarell,
      Ubuntu,
      roboto,
      noto,
      arial,
      sans-serif;
    /** One more than the paywall */z-index:1000002;}.rc-simulated-store-modal.svelte-17914yi {background:white;border-radius:8px;padding:0;max-width:500px;width:90%;max-height:90%;overflow-y:auto;box-shadow:0 4px 20px rgba(0, 0, 0, 0.15);}.rc-simulated-store-modal-content.svelte-17914yi {padding:24px;}.rc-simulated-store-modal-title.svelte-17914yi {margin:0 0 20px 0;font-size:24px;font-weight:600;color:#333;}.rc-simulated-store-modal-details.svelte-17914yi {margin-bottom:24px;}.rc-simulated-store-modal-details.svelte-17914yi p:where(.svelte-17914yi) {margin:8px 0;color:#666;line-height:1.5;}.rc-simulated-store-modal-buttons.svelte-17914yi {display:flex;flex-direction:column;gap:12px;}.rc-simulated-store-modal-button.svelte-17914yi {padding:12px 24px;border:none;border-radius:6px;font-size:16px;font-weight:500;cursor:pointer;transition:background-color 0.2s ease;}.rc-simulated-store-modal-button-primary.svelte-17914yi {background-color:#007aff;color:white;}.rc-simulated-store-modal-button-primary.svelte-17914yi:hover {background-color:#0056cc;}.rc-simulated-store-modal-button-secondary.svelte-17914yi {background-color:#ff3b30;color:white;}.rc-simulated-store-modal-button-secondary.svelte-17914yi:hover {background-color:#cc2e24;}.rc-simulated-store-modal-button-cancel.svelte-17914yi {background-color:#f2f2f7;color:#333;}.rc-simulated-store-modal-button-cancel.svelte-17914yi:hover {background-color:#e5e5ea;}

  /* Mobile responsive - full screen on small screens */
  @media (max-width: 768px) {.rc-simulated-store-modal-overlay.svelte-17914yi {padding:0;}.rc-simulated-store-modal.svelte-17914yi {width:100%;height:100%;border-radius:0;max-width:none;max-height:none;}.rc-simulated-store-modal-content.svelte-17914yi {height:100%;display:flex;flex-direction:column;justify-content:center;}
  }`
};
function lI(r, e) {
  _e(e, !1), ke(r, sI);
  let t = X(e, "productIdentifier", 8), n = X(e, "productType", 8), a = X(e, "basePrice", 8), i = X(e, "freeTrialPeriod", 8, void 0), s = X(e, "introPriceFormatted", 8, void 0), l = X(e, "discountFormatted", 8, void 0), c = X(e, "onValidPurchase", 8), u = X(e, "onFailedPurchase", 8), d = X(e, "onCancel", 8);
  function p(M) {
    M.target === M.currentTarget && d()();
  }
  On();
  var _ = iI(), f = T(_), g = T(f), w = W(T(g), 2), k = T(w), h = T(k), y = W(T(h)), b = W(h, 2), v = W(T(b)), P = W(b, 2), I = W(T(P)), E = W(P, 2);
  {
    var C = (M) => {
      var A = nI(), U = W(T(A));
      K(() => fe(U, ` ${i() ?? ""}`)), x(M, A);
    };
    G(E, (M) => {
      i() && M(C);
    });
  }
  var S = W(E, 2);
  {
    var F = (M) => {
      var A = aI(), U = W(T(A));
      K(() => fe(U, ` ${s() ?? ""}`)), x(M, A);
    };
    G(S, (M) => {
      s() && M(F);
    });
  }
  var D = W(S, 2);
  {
    var O = (M) => {
      var A = oI(), U = W(T(A));
      K(() => fe(U, ` ${l() ?? ""}`)), x(M, A);
    };
    G(D, (M) => {
      l() && M(O);
    });
  }
  var N = W(w, 2), L = T(N), Z = W(L, 2), z = W(Z, 2);
  K(() => {
    fe(y, ` ${t() ?? ""}`), fe(v, ` ${n() ?? ""}`), fe(I, ` ${a() ?? ""}`);
  }), qr("click", L, function(...M) {
    var A;
    (A = c()) == null || A.apply(this, M);
  }), qr("click", Z, function(...M) {
    var A;
    (A = u()) == null || A.apply(this, M);
  }), qr("click", z, function(...M) {
    var A;
    (A = d()) == null || A.apply(this, M);
  }), qr("click", _, p), x(r, _), ge();
}
async function Pg(r, e, t, n) {
  const a = /* @__PURE__ */ new Date(), i = `test_${a.getTime()}_${An()}`, s = `test_store_operation_session_${An()}`, c = {
    storeTransactionId: i,
    productIdentifier: r.identifier,
    purchaseDate: a
  }, u = await e.postReceipt(
    t,
    r.identifier,
    r.price.currency,
    i,
    r.presentedOfferingContext,
    "purchase",
    n
  );
  return {
    customerInfo: Tl(u),
    redemptionInfo: null,
    operationSessionId: s,
    storeTransaction: c
  };
}
function cI(r, e, t) {
  const n = r.rcPackage.webBillingProduct, a = n.productType, i = n.freeTrialPhase, s = n.introPricePhase, l = n.discountPhase, c = n.price, u = (d) => d ? `${d.number} ${d.unit}${d.number > 1 ? "s" : ""}` : "N/A";
  return new Promise((d, p) => {
    var k, h;
    const _ = Fl(), f = _.createElement("div");
    _.body.appendChild(f);
    const g = () => {
      w && ao(w), _.body.removeChild(f);
    };
    let w = null;
    w = Vn(lI, {
      target: f,
      props: {
        productIdentifier: n.identifier,
        productType: a,
        basePrice: c.formattedPrice,
        freeTrialPeriod: i ? u(i.period) : void 0,
        introPriceFormatted: (k = s == null ? void 0 : s.price) == null ? void 0 : k.formattedPrice,
        discountFormatted: (h = l == null ? void 0 : l.price) == null ? void 0 : h.formattedPrice,
        onValidPurchase: async () => {
          g(), be.debugLog(
            "[Test store] Performing test purchase. This purchase won't appear in production."
          );
          try {
            d(
              await Pg(
                n,
                e,
                t,
                r.paywallId
              )
            );
          } catch (y) {
            p(y);
          }
        },
        onFailedPurchase: () => {
          g(), be.debugLog(
            "[Test store] Purchase failure simulated successfully in Test Store."
          ), p(
            new Qe(
              Me.TestStoreSimulatedPurchaseError,
              Ia.getPublicMessage(
                Me.TestStoreSimulatedPurchaseError
              ),
              "Simulated error successfully."
            )
          );
        },
        onCancel: () => {
          g(), p(new Qe(Me.UserCancelledError));
        }
      }
    });
  });
}
class uI {
  constructor() {
    ee(this, "virtualCurrenciesCache", /* @__PURE__ */ new Map());
    ee(this, "CACHE_EXPIRY_MS", 5 * 60 * 1e3);
  }
  // 5 minutes
  invalidateAllCaches() {
    this.virtualCurrenciesCache.clear();
  }
  cacheVirtualCurrencies(e, t) {
    this.virtualCurrenciesCache.set(e, {
      data: t,
      lastUpdatedAt: Date.now()
    });
  }
  /**
   * Retrieves cached virtual currencies for a given app user.
   *
   * @param appUserID - The unique identifier for the app user
   * @param allowStaleCache - If true, returns cached data regardless of age; if false, respects cache expiry
   * @returns The cached virtual currencies or null if not found or expired
   */
  getCachedVirtualCurrencies(e, t = !1) {
    const n = this.virtualCurrenciesCache.get(e);
    return this.getCachedData(n ?? null, t);
  }
  invalidateVirtualCurrenciesCache(e) {
    this.virtualCurrenciesCache.delete(e);
  }
  /**
   * Generic method to retrieve cached data with expiry checking.
   *
   * @param entry - The cache entry containing the data and timestamp
   * @param allowStaleCache - If true, bypasses expiry checks and returns data regardless of age
   * @returns The cached data or null if not found or expired (when allowStaleCache is false)
   */
  getCachedData(e, t = !1) {
    return e ? t ? e.data : Date.now() - e.lastUpdatedAt >= this.CACHE_EXPIRY_MS ? null : e.data : null;
  }
}
function dI(r) {
  return {
    balance: r.balance,
    name: r.name,
    code: r.code,
    serverDescription: r.description ?? null
  };
}
function pI(r) {
  const e = {};
  for (const [t, n] of Object.entries(
    r.virtual_currencies
  ))
    e[t] = dI(n);
  return {
    all: e
  };
}
function _I(r, e) {
  const t = r.webCheckoutURL;
  if (typeof t == "string" && t.length > 0)
    return t;
  if (typeof e == "string" && e.length > 0)
    return e;
}
function gI(r, e) {
  const t = r.webBillingProduct, n = _I(r, e), a = n !== void 0 ? { webCheckoutURL: n } : {}, i = t.productType === Ur.Subscription, s = t.defaultSubscriptionOption;
  if (i && s)
    return {
      hasTrial: s.trial !== null,
      hasIntroOffer: s.introPrice !== null,
      hasPromoOffer: s.discount !== null,
      ...a
    };
  const l = t.defaultNonSubscriptionOption;
  return !i && l ? {
    hasTrial: !1,
    hasIntroOffer: !1,
    hasPromoOffer: l.discount !== null,
    ...a
  } : {
    hasTrial: !1,
    hasIntroOffer: !1,
    hasPromoOffer: !1,
    ...a
  };
}
function kd(r) {
  const e = Object.entries(r.packagesById).map(
    ([t, n]) => [
      t,
      gI(n, r.webCheckoutURL)
    ]
  );
  return Object.fromEntries(e);
}
const fI = (r, e) => {
  var n;
  if (r.productType === Ur.Subscription) {
    const a = ((n = r.subscriptionOptions) == null ? void 0 : n[e.id]) || r.defaultSubscriptionOption;
    if (!a)
      throw new ve(me.ErrorSettingUpPurchase);
    return a;
  }
  const t = r.defaultNonSubscriptionOption;
  if (!t)
    throw new ve(me.ErrorSettingUpPurchase);
  return t;
}, mI = (r, e) => {
  const t = wo(
    r,
    e
  );
  return {
    currency: t.currency,
    taxCalculationStatus: "unavailable",
    totalAmountInMicros: t.amountMicros,
    totalExcludingTaxInMicros: t.amountMicros,
    taxAmountInMicros: null,
    taxBreakdown: null
  };
}, xg = (r, e, t, n, a, i) => {
  const s = r.webBillingProduct, l = fI(
    s,
    e
  ), c = mI(
    s,
    l
  ), u = mc({
    priceBreakdown: c,
    productDetails: s,
    purchaseOption: l,
    translator: n
  }), p = s.productType === Ur.Subscription ? $e.buildStripeExpressCheckoutOptionsForSubscription(
    s,
    c,
    l,
    n,
    t,
    u,
    2,
    1
  ) : $e.buildStripeExpressCheckoutOptionsForNonSubscription(
    s,
    c,
    u,
    2,
    1
  );
  return i && (p.buttonTheme = {
    applePay: i,
    // Google Pay only supports "black" | "white"
    googlePay: i === "white-outline" ? "white" : i
  }), a && (p.business = { name: a }), p;
}, wd = (r, e, t, n, a, i, s, l) => {
  if (!e.elements_configuration)
    throw new ve(me.ErrorSettingUpPurchase);
  return $e.updateElementsConfiguration(
    r,
    e.elements_configuration
  ), { expOptions: xg(
    n,
    a,
    t,
    i,
    s == null ? void 0 : s.app_name,
    l
  ) };
}, hI = async (r, e, t, n, a, i, s) => {
  var h, y;
  if (!r.elements_configuration)
    throw new ve(me.ErrorSettingUpPurchase);
  const l = r.stripe_account_id, c = r.publishable_api_key, u = $e.getStripeLocale(
    a.bcp47Locale || a.fallbackBcp47Locale
  ), d = {
    // Floating labels size cannot be overriden in Stripe since `!important` is being used.
    // There we set fontSizeBase to the desired label size
    // and update the input font size to 16px.
    fontSizeBase: "14px",
    fontFamily: ko,
    // Spacing is hardcoded to 16px to match the desired gaps in mobile/desktop
    // which do not match the design system spacing. Also we cannot use "rem" units
    // since the fontSizeBase is set to 14px per the comment above.
    spacingGridRow: "16px"
  }, p = ((h = xo()) == null ? void 0 : h.matchMedia) && ((y = xo()) == null ? void 0 : y.matchMedia("(max-width: 767px)").matches);
  let _ = "mobile";
  if (p ? _ = "mobile" : _ = "desktop", !l || !c)
    throw new ve(me.ErrorSettingUpPurchase);
  const f = r.elements_configuration, { stripe: g, elements: w } = await $e.initializeStripe(
    l,
    c,
    f,
    i,
    u,
    d,
    _
  ), k = xg(
    t,
    n,
    e,
    a,
    i == null ? void 0 : i.app_name,
    s
  );
  return { stripeInstance: g, elementsInstance: w, expOptions: k };
};
var vI = /* @__PURE__ */ V("<div><!></div>");
function yI(r, e) {
  var C;
  _e(e, !0);
  const t = "express_purchase_button";
  let n = mr(e.translator);
  const a = mr(((C = e.brandingInfo) == null ? void 0 : C.appearance) ?? null);
  gr(fr, n), gr(jn, a);
  let i = /* @__PURE__ */ re(!0), s = /* @__PURE__ */ re(!1), l = /* @__PURE__ */ re(null), c = /* @__PURE__ */ re(null), u = /* @__PURE__ */ re(null);
  const d = (S) => {
    const F = T_({
      errorCode: S.getErrorCode().toString(),
      errorMessage: S.message,
      mode: t
    });
    e.eventsTracker.trackSDKEvent(F), e.onError(S);
  };
  let p = !1;
  const _ = async () => {
    if (p)
      return;
    p = !0;
    let S;
    try {
      S = await e.purchaseOperationHelper.prepareCheckout(e.rcPackage.webBillingProduct.identifier, e.purchaseOption);
    } catch (D) {
      d(D);
      return;
    }
    if (!S.stripe_gateway_params) {
      const D = new ve(me.ErrorSettingUpPurchase, "We couldn’t download Stripe params for this purchase. Please try again.");
      d(D);
      return;
    }
    const F = "http://blank";
    try {
      if (!o(c) || !o(l)) {
        const { stripeInstance: D, elementsInstance: O, expOptions: N } = await hI(S.stripe_gateway_params, F, e.rcPackage, e.purchaseOption, e.translator, e.brandingInfo, e.walletButtonTheme);
        q(c, D, !0), q(l, O, !0), q(u, N, !0);
      } else {
        const { expOptions: D } = wd(o(l), S.stripe_gateway_params, F, e.rcPackage, e.purchaseOption, e.translator, e.brandingInfo, e.walletButtonTheme);
        q(u, D, !0);
      }
    } catch (D) {
      d(D);
      return;
    }
    q(i, !1);
  };
  ar(() => {
    p = !1, _().then(() => {
    });
  });
  const f = (S) => {
    const F = kl({
      errorCode: S.gatewayErrorCode ?? null,
      errorMessage: S.message ?? "",
      mode: t
    });
    e.eventsTracker.trackSDKEvent(F), d(new ve(me.ErrorSettingUpPurchase, "Failed to initialize payment form", S.message));
  }, g = async (S, F) => {
    var N;
    const {
      customerDetails: D,
      confirmationTokenId: O
    } = await $e.extractTaxCustomerDetails(S, F);
    if ((N = e.brandingInfo) != null && N.gateway_tax_collection_enabled) {
      const L = await e.purchaseOperationHelper.checkoutRefreshPricing({
        countryCode: D.countryCode,
        postalCode: D.postalCode
      }), Z = A_({ taxCalculation: L, taxCustomerDetails: D, mode: t });
      e.eventsTracker.trackSDKEvent(Z);
    }
    return O;
  };
  async function w(S) {
    var N, L;
    if (!o(l) || !o(c)) return !1;
    await $e.submitElements(o(l));
    const F = await e.purchaseOperationHelper.checkoutComplete(S, e.translator.selectedLocale), D = (N = F == null ? void 0 : F.gateway_params) == null ? void 0 : N.client_secret;
    if (!D)
      return !1;
    const O = (L = e.brandingInfo) != null && L.gateway_tax_collection_enabled ? await g(o(l), o(c)) : void 0;
    return await $e.confirmElements(o(c), o(l), D, O), !0;
  }
  const k = async (S, F, D) => {
    if (o(s))
      return;
    const O = F_({ selectedPaymentMethod: S ?? null, mode: t });
    e.eventsTracker.trackSDKEvent(O), q(s, !0);
    try {
      const N = await w(F);
      if (q(s, !1), !N)
        return;
      const L = await e.purchaseOperationHelper.pollCurrentPurchaseForCompletion();
      e.onFinished(L), q(s, !1);
    } catch (N) {
      if (N instanceof ve)
        d(N);
      else if (N instanceof po) {
        const L = kl({
          errorCode: N.gatewayErrorCode ?? null,
          errorMessage: N.message ?? "",
          mode: t
        });
        e.eventsTracker.trackSDKEvent(L), d(new ve(me.ErrorSettingUpPurchase, "Failed to complete payment", N.message));
      }
      D.paymentFailed(), q(s, !1);
    }
  }, h = async () => {
    var F;
    const S = _i({
      appearance: (F = e.brandingInfo) == null ? void 0 : F.appearance,
      rcPackage: e.rcPackage,
      purchaseOptionToUse: e.purchaseOption,
      customerEmail: e.customerEmail,
      mode: "express_purchase_button"
    });
    e.eventsTracker.trackSDKEvent(S);
    try {
      const D = await e.purchaseOperationHelper.checkoutStart({
        appUserId: e.appUserId,
        productId: e.rcPackage.webBillingProduct.identifier,
        purchaseOption: e.purchaseOption,
        presentedOfferingContext: e.rcPackage.webBillingProduct.presentedOfferingContext,
        customerEmail: e.customerEmail,
        metadata: e.metadata,
        locale: e.translator.selectedLocale
      }), O = D.management_url;
      if (!o(l))
        throw new ve(me.ErrorSettingUpPurchase);
      const { expOptions: N } = wd(o(l), D.gateway_params, O, e.rcPackage, e.purchaseOption, e.translator, e.brandingInfo, e.walletButtonTheme);
      return { applePay: N.applePay, lineItems: N.lineItems };
    } catch (D) {
      throw d(D instanceof ve ? D : new ve(me.ErrorSettingUpPurchase)), D;
    }
  }, y = (S) => {
    var F, D;
    (D = (F = e.listener) == null ? void 0 : F.onPurchaseStarted) == null || D.call(F, e.rcPackage), h().then((O) => S.resolve(O));
  }, b = () => {
    var S, F;
    e.eventsTracker.trackSDKEvent(D_({ mode: "express_purchase_button" })), (F = (S = e.listener) == null ? void 0 : S.onPurchaseCancelled) == null || F.call(S);
  };
  function v(S) {
    var D, O;
    const F = ((D = S.availablePaymentMethods) == null ? void 0 : D.applePay) || ((O = S.availablePaymentMethods) == null ? void 0 : O.googlePay);
    e.onReady && e.onReady(!!F);
  }
  var P = vI(), I = T(P);
  {
    var E = (S) => {
      U_(S, {
        get elements() {
          return o(l);
        },
        onError: f,
        onSubmit: k,
        onClick: y,
        onCancel: b,
        onReady: v,
        get expressCheckoutOptions() {
          return o(u);
        },
        forceEnableWalletMethods: !1,
        hideCheckoutSeparator: !0
      });
    };
    G(I, (S) => {
      !o(i) && o(l) && o(u) && e.brandingInfo && S(E);
    });
  }
  x(r, P), ge();
}
var Na;
class bI {
  constructor(e, t, n) {
    Oe(this, Na);
    ee(this, "button");
    qe(this, Na, /* @__PURE__ */ re(rr({ props: n })));
    const i = { updatePurchase: (s, l) => {
      this.changePackage(s, l);
    } };
    this.state.props.onReady = (s) => {
      t(i, s);
    }, this.button = Vn(yI, { target: e, props: this.state.props });
  }
  get state() {
    return o(H(this, Na));
  }
  set state(e) {
    q(H(this, Na), e, !0);
  }
  changePackage(e, t) {
    this.state.props && (this.state.props.rcPackage = e, this.state.props.purchaseOption = t ?? e.webBillingProduct.defaultPurchaseOption);
  }
}
Na = new WeakMap();
const kI = /* @__PURE__ */ new Set(["javascript:", "data:", "vbscript:"]);
function wI(r) {
  return kI.has(r.toLowerCase());
}
function PI(r, e) {
  const t = r.trim();
  if (t.length === 0)
    return !1;
  let n;
  try {
    n = new URL(t);
  } catch {
    return !1;
  }
  return wI(n.protocol) ? !1 : e === "deep_link" ? !0 : n.protocol === "http:" || n.protocol === "https:";
}
const Eg = 'link[rel~="apple-touch-icon"]', Sg = "data-rc-apple-touch-icon", Ig = "true", Cg = `link[${Sg}="${Ig}"]`, xI = (r) => !!r.head.querySelector(Eg), EI = ({
  doc: r,
  win: e,
  ignoredLink: t
}) => {
  const n = r.head.querySelector(
    Eg
  );
  if (n && n !== t)
    return !0;
  if (!e)
    return !1;
  let a = e;
  for (; a.parent !== a; ) {
    const i = a.parent;
    try {
      if (xI(i.document))
        return !0;
    } catch {
      return !1;
    }
    a = i;
  }
  return !1;
}, SI = (r) => {
  var e;
  (e = r.head.querySelector(Cg)) == null || e.remove();
}, II = ({
  doc: r,
  win: e,
  href: t
}) => {
  const n = r.head.querySelector(
    Cg
  );
  if (!t) {
    n == null || n.remove();
    return;
  }
  if (EI({
    doc: r,
    win: e,
    ignoredLink: n
  })) {
    n == null || n.remove();
    return;
  }
  const a = n ?? r.createElement("link");
  a.rel = "apple-touch-icon", a.href = t, a.setAttribute(
    Sg,
    Ig
  ), n || r.head.appendChild(a);
};
var CI = /* @__PURE__ */ ((r) => (r.DisplayName = "$displayName", r.Email = "$email", r.PhoneNumber = "$phoneNumber", r.IDFA = "$idfa", r.IDFV = "$idfv", r.GPSAdId = "$gpsAdId", r.AndroidId = "$androidId", r.AmazonAdId = "$amazonAdId", r.IP = "$ip", r.AdjustId = "$adjustId", r.AmplitudeDeviceId = "$amplitudeDeviceId", r.AmplitudeUserId = "$amplitudeUserId", r.AppsflyerId = "$appsflyerId", r.AppsflyerSharingFilter = "$appsflyerSharingFilter", r.BranchId = "$branchId", r.BrazeAliasName = "$brazeAliasName", r.BrazeAliasLabel = "$brazeAliasLabel", r.ClevertapId = "$clevertapId", r.FbAnonId = "$fbAnonId", r.MparticleId = "$mparticleId", r.OnesignalId = "$onesignalId", r.OnesignalUserId = "$onesignalUserId", r.IntercomContactId = "$intercomContactId", r.MediaSource = "$mediaSource", r.Campaign = "$campaign", r.AdGroup = "$adGroup", r.AdId = "$ad", r.Keyword = "$keyword", r.Creative = "$creative", r.APNSTokens = "$apnsTokens", r.FCMTokens = "$fcmTokens", r.AirshipChannelId = "$airshipChannelId", r.SegmentId = "$segmentId", r.IterableUserId = "$iterableUserId", r.IterableCampaignId = "$iterableCampaignId", r.IterableTemplateId = "$iterableTemplateId", r.FirebaseAppInstanceId = "$firebaseAppInstanceId", r.MixpanelDistinctId = "$mixpanelDistinctId", r.ATTConsentStatus = "$attConsentStatus", r.KochavaDeviceId = "$kochavaDeviceId", r.DeviceVersion = "$deviceVersion", r.PosthogUserId = "$posthogUserId", r.TelemetryDeckUserId = "$telemetryDeckUserId", r.TelemetryDeckAppId = "$telemetryDeckAppId", r.AppleRefundHandlingPreference = "$appleRefundHandlingPreference", r.CustomerioId = "$customerioId", r.TenjinId = "$tenjinId", r))(CI || {});
const Pd = "$RCAnonymousID:";
var Ed, Sd, ii;
Sd = [_d], Ed = [_d];
const Er = class Er {
  /** @internal */
  constructor(e, t, n = Al, a = Zs, i, s) {
    Nc(ii, 5, this);
    /** @internal */
    ee(this, "_API_KEY");
    /** @internal */
    ee(this, "_appUserId");
    /** @internal */
    ee(this, "_brandingInfo", null);
    /** @internal */
    ee(this, "_loadingResourcesPromise", null);
    /** @internal */
    ee(this, "_flags");
    /** @internal */
    ee(this, "_context");
    /** @internal */
    ee(this, "backend");
    /** @internal */
    ee(this, "purchaseOperationHelper");
    /** @internal */
    ee(this, "eventsTracker");
    /** @internal */
    ee(this, "inMemoryCache");
    var l;
    this._API_KEY = e, this._appUserId = t, this._flags = { ...Zs, ...a }, this._context = i, qi(e) ? be.debugLog(
      "Initializing Purchases SDK with Web billing sandbox API Key"
    ) : Un(e) && be.debugLog("Initializing Purchases SDK with RC Test store API Key."), this.eventsTracker = new tI({
      apiKey: this._API_KEY,
      appUserId: this._appUserId,
      silent: !this._flags.collectAnalyticsEvents,
      rcSource: this._flags.rcSource ?? null,
      workflowContext: (l = this._context) == null ? void 0 : l.workflowContext,
      trace_id: s,
      httpConfig: n
    }), this.backend = new gS(this._API_KEY, n, this._context), this.inMemoryCache = new uI(), this.purchaseOperationHelper = new Pi(
      this.backend,
      this.eventsTracker
    ), this.eventsTracker.trackSDKEvent({
      eventName: Vr.SDKInitialized
    });
  }
  /**
   * Set the log level. Logs of the given level and below will be printed
   * in the console.
   * Default is `LogLevel.Silent` so no logs will be printed in the console.
   * @param logLevel - LogLevel to set.
   */
  static setLogLevel(e) {
    be.setLogLevel(e);
  }
  /**
   * Set a custom log handler to handle SDK log messages with your own logging system.
   * If set to null, the SDK will use the default console logging.
   * @param handler - LogHandler function or null to use default console logging.
   */
  static setLogHandler(e) {
    be.setLogHandler(e);
  }
  /**
   * Meant to be used by RevenueCat hybrids SDKS only.
   * @experimental
   * */
  static setPlatformInfo(e) {
    Er._platformInfo = e;
  }
  /**
   * Build variables for each package in an offering.
   * Used to support Paywalls in Workflows.
   * @internal
   */
  static buildVariablesPerPackage(e, t = {}) {
    return gd(e, t);
  }
  /**
   * Build package info (trial/intro/promo offer flags and checkout URL) for
   * each package in an offering, keyed by package identifier.
   * Used to support Paywalls in Workflows.
   * @internal
   */
  static buildInfoPerPackage(e) {
    return kd(e);
  }
  /** @internal */
  static getPlatformInfo() {
    return Er._platformInfo;
  }
  /**
   * Get the singleton instance of Purchases. It's preferred to use the instance
   * obtained from the `configure` method when possible.
   * @throws {@link UninitializedPurchasesError} if the instance has not been initialized yet.
   */
  static getSharedInstance() {
    if (Er.isConfigured())
      return Er.instance;
    throw new Cm();
  }
  /**
   * Returns whether the Purchases SDK is configured or not.
   */
  static isConfigured() {
    return Er.instance !== void 0;
  }
  static configure(e, t, n, a) {
    Er.instance !== void 0 && be.warnLog(
      "Purchases is already initialized. You normally should only configure Purchases once. Creating and returning new instance."
    );
    let i;
    if (typeof e == "object" && e !== null)
      i = e;
    else {
      if (typeof e != "string")
        throw new Qe(
          Me.ConfigurationError,
          "API key must be provided as a string"
        );
      if (typeof t != "string")
        throw new Qe(
          Me.ConfigurationError,
          "App user ID must be provided as a string"
        );
      i = {
        apiKey: e,
        appUserId: t,
        httpConfig: n,
        flags: a
      };
    }
    return Er.configureInternal(i), Er.getSharedInstance();
  }
  static configureInternal(e) {
    const { apiKey: t, appUserId: n, httpConfig: a, flags: i, context: s, trace_id: l } = e, c = a ?? Al, u = i ?? Zs;
    Er.validateConfig(e), Er.instance = new Er(
      t,
      n,
      c,
      u,
      s,
      l
    );
  }
  static validateConfig(e) {
    var t, n;
    fS(e.apiKey), Xs(e.appUserId), mS((t = e.httpConfig) == null ? void 0 : t.proxyURL), hS((n = e.httpConfig) == null ? void 0 : n.additionalHeaders);
  }
  /**
   * Loads and caches some optional data in the Purchases SDK.
   * Currently only fetching branding information.
   * You can call this method after configuring the SDK to speed
   * up the first call to {@link Purchases.purchase}.
   */
  async preload() {
    if (this.hasLoadedResources()) {
      be.verboseLog("Purchases resources are loaded. Skipping.");
      return;
    }
    if (this._loadingResourcesPromise !== null) {
      be.verboseLog("Purchases resources are loading. Waiting."), await this._loadingResourcesPromise;
      return;
    }
    return this._loadingResourcesPromise = this.fetchAndCacheBrandingInfo().catch((e) => {
      let t = `${e}`;
      e instanceof Qe && (t = `${e.message}. ${e.underlyingErrorMessage ? `Underlying error: ${e.underlyingErrorMessage}` : ""}`), be.errorLog(`Error fetching branding info: ${t}`);
    }).finally(() => {
      this._loadingResourcesPromise = null;
    }), this._loadingResourcesPromise;
  }
  /** @internal */
  async fetchAndCacheBrandingInfo() {
    if (Un(this._API_KEY)) {
      be.warnLog(
        "Branding info is not available for RC Test Store API keys."
      );
      return;
    }
    this._brandingInfo = await this.backend.getBrandingInfo(), this.syncApplePayWebsiteIcon();
  }
  /** @internal */
  syncApplePayWebsiteIcon() {
    var a, i;
    if (!this._flags.applePayBrandingLogoEnabled)
      return;
    const e = ql(), t = xo();
    if (!e)
      return;
    const n = (i = (a = this._brandingInfo) == null ? void 0 : a.app_icon) == null ? void 0 : i.trim();
    II({
      doc: e,
      win: t,
      href: n ? Ea(n) : null
    });
  }
  /** @internal */
  hasLoadedResources() {
    return this._brandingInfo !== null;
  }
  /**
   * Renders an RC Paywall and allows the user to purchase from it using Web Billing.
   * @param paywallParams - The parameters object to customise the paywall render. Check {@link PresentPaywallParams}
   * @returns Promise<PurchaseResult>
   */
  async presentPaywall(e) {
    var j, R, Q, se, te, le, ae;
    const t = e.htmlTarget;
    let n = !1;
    const a = Fl();
    let i = t ?? a.getElementById("rcb-ui-pw-root");
    if (i === null) {
      n = !0;
      const Y = a.createElement("div");
      Y.id = "rcb-ui-pw-root", Y.className = "rcb-ui-pw-root", Y.style.zIndex = `${bS}`, Y.style.position = "fixed", Y.style.top = "0", Y.style.left = "0", Y.style.width = "100%", Y.style.height = "100%", Y.style.overflow = "auto", Y.style.backgroundColor = "var(--rc-purchases-ui-bg-color, Canvas)", a.body.offsetWidth > 968 && (Y.style.display = "flex", Y.style.justifyContent = "center", Y.style.alignItems = "center"), Y.style.transition = "opacity 0.3s", Y.style.opacity = "0", a.body.appendChild(Y), i = Y;
    }
    if (i === null)
      throw new Error(
        "Could not generate a mount point for the paywall widget"
      );
    const s = i, l = e.offering ? e.offering : (await this.getOfferings()).current;
    if (!l)
      throw new Error("No offering found.");
    const c = this._flags.workflowsEndpointEnabled ? await this.backend.getWorkflows(this._appUserId).catch((Y) => (be.warnLog(`Failed to fetch workflows: ${Y}`), null)) : null, u = (j = c == null ? void 0 : c.workflows) == null ? void 0 : j.find(
      (Y) => Y.offering_id === l.identifier
    );
    if (!u && !l.paywallComponents)
      throw new Error("This offering doesn't have a paywall attached.");
    if (!u && !l.uiConfig)
      throw new Error(
        "No ui_config found for this offering, please contact support!"
      );
    const d = (Y, $) => {
      const oe = {}, B = (ie) => ie.toLowerCase().split("_")[0];
      Object.keys(Y.components_localizations).forEach((ie) => {
        oe[B(ie)] === void 0 && (oe[B(ie)] = []), oe[B(ie)].push(ie);
      });
      const de = oe[B($)];
      if (!de)
        return Y.default_locale;
      const J = de.find(
        (ie) => ie.toLowerCase() === $
      );
      return J || de[0];
    }, p = e.selectedLocale ? e.selectedLocale : navigator.language, _ = l.paywallComponents ? d(l.paywallComponents, p) : p, f = new Tn(
      {},
      _,
      ((R = l.paywallComponents) == null ? void 0 : R.default_locale) ?? Or
    ), g = An(), w = {
      appUserId: this._appUserId,
      sessionId: g,
      offeringId: l.identifier,
      paywallRevision: 0,
      paywallRcPublicId: ((Q = l.paywallComponents) == null ? void 0 : Q.id) ?? null,
      presentedOfferingContext: (te = (se = l.availablePackages[0]) == null ? void 0 : se.webBillingProduct) == null ? void 0 : te.presentedOfferingContext
    }, k = {
      displayMode: "full_screen",
      darkMode: ((ae = (le = mn()) == null ? void 0 : le.matchMedia) == null ? void 0 : ae.call(le, "(prefers-color-scheme: dark)").matches) ?? !1,
      locale: _
    }, h = new Map(
      l.availablePackages.map((Y) => [
        Y.identifier,
        Y.webBillingProduct.identifier
      ])
    ), y = (Y) => {
      if (Y !== void 0)
        return h.get(Y);
    }, b = (Y) => {
      const $ = Y;
      return {
        type: "paywall_component_interacted",
        ...w,
        ...k,
        componentType: Y.componentType,
        componentName: Y.componentName,
        componentValue: Y.componentValue,
        componentURL: $.componentURL,
        originIndex: $.originIndex,
        destinationIndex: $.destinationIndex,
        originContextName: $.originContextName,
        destinationContextName: $.destinationContextName,
        defaultIndex: $.defaultIndex,
        originPackageId: $.originPackageId,
        destinationPackageId: $.destinationPackageId,
        defaultPackageId: $.defaultPackageId,
        originProductId: $.originProductId ?? y($.originPackageId),
        destinationProductId: $.destinationProductId ?? y($.destinationPackageId),
        defaultProductId: $.defaultProductId ?? y($.defaultPackageId),
        currentPackageId: $.currentPackageId,
        resultingPackageId: $.resultingPackageId,
        currentProductId: $.currentProductId ?? y($.currentPackageId),
        resultingProductId: $.resultingProductId ?? y($.resultingPackageId)
      };
    }, v = (Y) => {
      this.eventsTracker.trackPaywallEvent({
        type: Y,
        ...w,
        ...Y === "paywall_impression" ? {
          ...k
        } : {}
      });
    }, P = async (Y, $ = _) => {
      var de, J;
      const oe = l.availablePackages.find(
        (ie) => ie.identifier === Y
      );
      if (oe === void 0)
        throw new Error(`No package found for ${Y}`);
      return { ...await this.purchase({
        rcPackage: oe,
        htmlTarget: e.purchaseHtmlTarget,
        customerEmail: e.customerEmail,
        showDiscountCodeField: e.showDiscountCodeField,
        discountCode: e.discountCode,
        onDiscountCodeChanged: e.onDiscountCodeChanged,
        selectedLocale: $,
        defaultLocale: ((de = l.paywallComponents) == null ? void 0 : de.default_locale) ?? Or,
        paywallId: (J = l.paywallComponents) == null ? void 0 : J.id,
        paywallSessionId: g
      }), selectedPackage: oe };
    };
    let I = null, E = null;
    const C = (Y) => {
      const $ = Y.target;
      if (!($ instanceof Element))
        return;
      const oe = $.closest("a[href]");
      if (!(oe instanceof HTMLAnchorElement) || !s.contains(oe))
        return;
      const B = oe.getAttribute("href") ?? oe.href;
      B && (E = {
        url: B,
        defaultPrevented: Y.defaultPrevented
      });
    }, S = (Y) => {
      var B;
      const $ = (I == null ? void 0 : I.componentURL) === Y ? I : null;
      if (I = null, e.onNavigateToUrl) {
        e.onNavigateToUrl(Y);
        return;
      }
      if (($ == null ? void 0 : $.componentType) === "text") {
        queueMicrotask(() => {
          var ie;
          const de = (E == null ? void 0 : E.url) === Y ? E : null;
          if (E = null, (de == null ? void 0 : de.defaultPrevented) !== !0)
            return;
          (ie = mn().open(Y, "_blank")) == null || ie.focus();
        });
        return;
      }
      (B = mn().open(Y, "_blank")) == null || B.focus();
    }, F = async (Y) => {
      var oe;
      if (e.onCompleteWorkflowNavigate) {
        await e.onCompleteWorkflowNavigate(Y);
        return;
      }
      if (!PI(Y.url, Y.method)) {
        be.warnLog(
          "Blocked complete-workflow navigation to a disallowed URL."
        );
        return;
      }
      const $ = mn();
      Y.method === "external_browser" ? (oe = $.open(Y.url, "_blank", "noopener,noreferrer")) == null || oe.focus() : $.location.assign(Y.url);
    }, D = () => {
    }, O = () => {
      if (e.onVisitCustomerCenter) {
        e.onVisitCustomerCenter();
        return;
      }
    }, N = gd(l, {
      translator: f
    }), L = kd(l), Z = e.listener, z = (Y) => {
      if (Z != null && Z.onPurchaseStarted)
        try {
          Z.onPurchaseStarted(Y);
        } catch ($) {
          be.errorLog(`Error in listener.onPurchaseStarted: ${$}`);
        }
    }, M = (Y) => {
      if (Y instanceof Qe && Y.errorCode === Me.UserCancelledError) {
        if (Z != null && Z.onPurchaseCancelled)
          try {
            Z.onPurchaseCancelled();
          } catch ($) {
            be.errorLog(`Error in listener.onPurchaseCancelled: ${$}`);
          }
      } else {
        if (Z != null && Z.onPurchaseError)
          try {
            Z.onPurchaseError(Y);
          } catch ($) {
            be.errorLog(`Error in listener.onPurchaseError: ${$}`);
          }
        e.onPurchaseError && e.onPurchaseError(Y);
      }
    };
    let A, U;
    if (u) {
      const Y = await this.backend.getWorkflowById(this._appUserId, u.id).catch((oe) => (be.warnLog(
        `Failed to fetch workflow data, falling back to standard paywall: ${oe}`
      ), null)), $ = Y ? Lk(Y) : null;
      if (Y && $)
        U = Y, A = $;
      else {
        if (Y && !$ && be.warnLog(
          "Failed to resolve workflow navigation data, falling back to standard paywall."
        ), !l.paywallComponents)
          throw new Error(
            "This offering doesn't have a paywall attached and the workflow could not be loaded."
          );
        if (!l.uiConfig)
          throw new Error(
            "No ui_config found for this offering, please contact support!"
          );
      }
    }
    return new Promise((Y, $) => {
      let oe = null, B = !1, de = !1;
      s.addEventListener("click", C);
      const J = () => {
        de || (de = !0, B && v("paywall_close"));
      }, ie = (Te) => {
        !B || de || this.eventsTracker.trackPaywallEvent(b(Te));
      }, Ie = (Te) => {
        const Pe = Te;
        I = Pe.componentURL === void 0 ? null : {
          componentType: Te.componentType,
          componentURL: Pe.componentURL
        }, ie(Te);
      }, we = new MutationObserver(() => {
        s.childElementCount === 0 && (J(), we.disconnect());
      }), xe = () => {
        we.disconnect(), s.removeEventListener("click", C), J(), oe && (ao(oe), oe = null), s.innerHTML = "", n && s.parentNode && s.parentNode.removeChild(s);
      }, Se = () => {
        be.debugLog("Purchase cancelled by user"), xe(), $(new Qe(Me.UserCancelledError)), this.eventsTracker.flushAllEvents().catch((Te) => {
          be.debugLog(`Failed to flush paywall events on close: ${Te}`);
        });
      }, Ue = (Te) => {
        xe(), Y(Te), this.eventsTracker.flushAllEvents().catch((Pe) => {
          be.debugLog(
            `Failed to flush paywall events after purchase: ${Pe}`
          );
        });
      }, ye = (Te) => (Pe) => {
        Pe instanceof Qe && Pe.errorCode === Me.UserCancelledError && v("paywall_cancel"), be.errorLog(`${Te}: ${Pe}`), M(Pe);
      }, Ce = this.getWalletButtonRender(
        l,
        Ue,
        e.customerEmail,
        ye("Error presenting express purchase button"),
        Z
      );
      if (s.innerHTML = "", A && U)
        try {
          const Te = (Pe) => {
            if (Pe.reason === "completed")
              this.eventsTracker.trackSDKEvent({
                eventName: Vr.WorkflowStepCompleted,
                properties: {
                  workflow_id: Pe.workflowId,
                  step_id: Pe.stepId,
                  ...Pe.toStepId !== void 0 ? { to_step_id: Pe.toStepId } : {},
                  is_first_step: Pe.isFirstStep,
                  is_last_step: Pe.isLastStep
                }
              });
            else {
              const De = Pe.reason;
              this.eventsTracker.trackSDKEvent({
                eventName: Vr.WorkflowStepStarted,
                properties: {
                  workflow_id: Pe.workflowId,
                  step_id: Pe.stepId,
                  ...Pe.fromStepId !== void 0 ? { from_step_id: Pe.fromStepId } : {},
                  entry_reason: De,
                  is_first_step: Pe.isFirstStep,
                  is_last_step: Pe.isLastStep
                }
              }), Pe.isLastStep && !B && (v("paywall_impression"), B = !0);
            }
          };
          oe = Vn(rk, {
            target: s,
            props: {
              workflow: A,
              uiConfig: U.ui_config,
              selectedLocale: p,
              variablesPerPackage: N,
              walletButtonRender: Ce,
              onPurchaseClicked: (Pe) => {
                const De = l.packagesById[Pe];
                De && z(De), P(Pe, p).then(Ue).catch(ye("Error performing purchase"));
              },
              onClose: Se,
              onExitBack: () => {
                if (e.onBack) {
                  e.onBack(Se);
                  return;
                }
                Se();
              },
              onCompleteWorkflowNavigate: F,
              onNavigateToUrlClicked: S,
              onRestorePurchasesClicked: D,
              onVisitCustomerCenterClicked: O,
              onComponentInteraction: Ie,
              onStepChanged: Te,
              globalVariables: e.customVariables ? v_(
                e.customVariables,
                U.ui_config
              ) : void 0,
              maxContentWidth: U.content_max_width ? String(U.content_max_width) : void 0
            }
          });
        } catch (Te) {
          xe(), $(Te);
          return;
        }
      else
        oe = Vn(k_, {
          target: s,
          props: {
            paywallData: l.paywallComponents,
            selectedLocale: _,
            onNavigateToUrlClicked: S,
            appUserId: this._appUserId,
            onCompleteWorkflowNavigate: F,
            onVisitCustomerCenterClicked: O,
            uiConfig: l.uiConfig,
            onBackClicked: () => {
              if (e.onBack) {
                e.onBack(Se);
                return;
              }
              Se();
            },
            onRestorePurchasesClicked: D,
            onPurchaseClicked: (Te) => {
              const Pe = l.packagesById[Te];
              Pe && z(Pe), P(Te).then(Ue).catch(ye("Error performing purchase"));
            },
            onError: (Te) => {
              xe(), $(Te);
            },
            variablesPerPackage: N,
            infoPerPackage: L,
            hideBackButtons: e.hideBackButtons,
            walletButtonRender: Ce,
            customVariables: e.customVariables,
            onComponentInteraction: Ie
          }
        });
      we.observe(s, { childList: !0 }), A || (v("paywall_impression"), B = !0), s.style.opacity === "0" && (s.style.opacity = "1");
    });
  }
  /**
   * Fetch the configured offerings for this user. You can configure these
   * in the RevenueCat dashboard.
   * @param params - The parameters object to customise the offerings fetch. Check {@link GetOfferingsParams}
   */
  async getOfferings(e) {
    Dx(e == null ? void 0 : e.currency);
    const t = this._appUserId, n = await this.backend.getOfferings(t), a = (e == null ? void 0 : e.offeringIdentifier) === hg.Current ? n.current_offering_id : e == null ? void 0 : e.offeringIdentifier;
    return a && (n.offerings = n.offerings.filter(
      (i) => i.identifier === a
    )), await this.getAllOfferings(n, t, e);
  }
  /**
   * Retrieves a specific offering by a placement identifier.
   * For more info see https://www.revenuecat.com/docs/tools/targeting
   * @param placementIdentifier - The placement identifier to retrieve the offering for.
   * @param params - The parameters object to customise the offerings fetch. Check {@link GetOfferingsParams}
   */
  async getCurrentOfferingForPlacement(e, t) {
    const n = this._appUserId, a = await this.backend.getOfferings(n), i = await this.getAllOfferings(
      a,
      n,
      t
    ), s = a.placements ?? null;
    return s == null ? null : vS(
      s,
      i.all,
      e
    );
  }
  async getAllOfferings(e, t, n) {
    const a = e.offerings.flatMap((s) => s.packages).map((s) => s.platform_product_identifier), i = await this.backend.getProducts(
      t,
      a,
      n == null ? void 0 : n.currency,
      n == null ? void 0 : n.discountCode
    );
    return this.logMissingProductIds(a, i.product_details), yS(e, i);
  }
  /**
   * Convenience method to check whether a user is entitled to a specific
   * entitlement. This will use {@link Purchases.getCustomerInfo} under the hood.
   * @param entitlementIdentifier - The entitlement identifier you want to check.
   * @returns Whether the user is entitled to the specified entitlement
   * @throws {@link PurchasesError} if there is an error while fetching the customer info.
   * @see {@link Purchases.getCustomerInfo}
   */
  async isEntitledTo(e) {
    const t = await this.getCustomerInfo();
    return e in t.entitlements.active;
  }
  /**
   * Method to perform a purchase for a given package. You can obtain the
   * package from {@link Purchases.getOfferings}. This method will present the purchase
   * form on your site, using the given HTML element as the mount point, if
   * provided, or as a modal if not.
   * @deprecated - please use .purchase
   * @param rcPackage - The package you want to purchase. Obtained from {@link Purchases.getOfferings}.
   * @param customerEmail - The email of the user. If undefined, RevenueCat will ask the customer for their email.
   * @param htmlTarget - The HTML element where the billing view should be added. If undefined, a new div will be created at the root of the page and appended to the body.
   * @returns a Promise for the customer info after the purchase is completed successfully.
   * @throws {@link PurchasesError} if there is an error while performing the purchase. If the {@link PurchasesError.errorCode} is {@link ErrorCode.UserCancelledError}, the user cancelled the purchase.
   */
  purchasePackage(e, t, n) {
    return this.purchase({
      rcPackage: e,
      customerEmail: t,
      htmlTarget: n
    });
  }
  async presentExpressPurchaseButton(e) {
    const {
      rcPackage: t,
      purchaseOption: n,
      htmlTarget: a,
      customerEmail: i,
      selectedLocale: s = Or,
      defaultLocale: l = Or,
      onButtonReady: c = () => {
      },
      walletButtonTheme: u
    } = e, d = this._appUserId;
    if (!Dl(this._API_KEY))
      throw new Error(
        "The Express Purchase button is only available with Web Billing API Keys."
      );
    const p = n ?? t.webBillingProduct.defaultPurchaseOption, f = { ...this._flags.autoCollectUTMAsMetadata ? oi() : {}, ...e.metadata || {} }, g = new Tn({}, s, l);
    return new Promise((w, k) => {
      const h = async (b) => {
        const v = Xu({
          redemptionInfo: b.redemptionInfo,
          mode: "express_purchase_button"
        });
        this.eventsTracker.trackSDKEvent(v), be.debugLog("Purchase finished");
        const P = {
          customerInfo: await this._getCustomerInfoForUserId(d),
          redemptionInfo: b.redemptionInfo,
          operationSessionId: b.operationSessionId,
          attributionMetadata: b.attributionMetadata,
          storeTransaction: {
            storeTransactionId: b.storeTransactionIdentifier,
            productIdentifier: b.productIdentifier,
            purchaseDate: b.purchaseDate
          }
        };
        w(P);
      }, y = (b) => {
        var P;
        const v = Zu({
          errorCode: (P = b.errorCode) == null ? void 0 : P.toString(),
          errorMessage: b.message,
          mode: "express_purchase_button"
        });
        this.eventsTracker.trackSDKEvent(v), k(b);
      };
      new bI(a, c, {
        appUserId: d,
        rcPackage: t,
        purchaseOption: p,
        customerEmail: i,
        purchases: this,
        eventsTracker: this.eventsTracker,
        brandingInfo: this._brandingInfo,
        purchaseOperationHelper: this.purchaseOperationHelper,
        metadata: f,
        customTranslations: e.labelsOverride,
        translator: g,
        onFinished: h,
        onError: y,
        listener: e.listener,
        walletButtonTheme: u
      });
    });
  }
  /**
   * Renders a wallet button for the supported wallets (Apple Pay/Google Pay).
   * When clicked it uses the wallet UI to execute the purchase instead of
   * the checkout flow that would be shown with `.purchase`.
   * @internal
   * @param offering - The offering to render the wallet button for.
   * @param onSuccess - The callback to be called when the purchase is successful.
   * @param customerEmail - The email of the user. If undefined, RevenueCat will ask the customer for their email.
   * @param onPurchaseError - The callback to be called when the purchase fails.
   * @returns Function that renders the wallet button.
   */
  getWalletButtonRender(e, t, n, a, i) {
    if (Dl(this._API_KEY))
      return (s, { selectedPackageId: l, onReady: c, walletButtonTheme: u }) => {
        const d = e.packagesById[l];
        if (!d)
          return {};
        let p = d, _ = null;
        return this.presentExpressPurchaseButton({
          rcPackage: d,
          customerEmail: n,
          htmlTarget: s,
          onButtonReady: (f, g) => {
            _ = f, c == null || c(g);
          },
          listener: i,
          walletButtonTheme: u
        }).then((f) => {
          t({ ...f, selectedPackage: p });
        }).catch(a), {
          destroy() {
            s.innerHTML = "";
          },
          update({ selectedPackageId: f }) {
            if (_) {
              const g = e.packagesById[f];
              if (!g)
                return;
              const w = g.webBillingProduct.defaultPurchaseOption;
              p = g, _.updatePurchase(g, w);
            }
          }
        };
      };
  }
  async purchase(e) {
    if (Un(this._API_KEY)) {
      const a = await cI(
        e,
        this.backend,
        this._appUserId
      );
      return this.inMemoryCache.invalidateAllCaches(), a;
    }
    return og(this._API_KEY) ? await this.performPaddlePurchase(e) : ig(this._API_KEY) ? await this.performStripePurchase(e) : await this.performWebBillingPurchase(e);
  }
  async performStripePurchase(e) {
    var E;
    const {
      rcPackage: t,
      purchaseOption: n,
      htmlTarget: a,
      customerEmail: i,
      workflowPurchaseContext: s,
      attributionMetadata: l,
      paywallId: c,
      paywallSessionId: u,
      selectedLocale: d = Or,
      defaultLocale: p = Or,
      skipSuccessPage: _ = !1
    } = e, f = this.resolveHTMLTarget(a), g = this._appUserId;
    be.debugLog(
      `Presenting Stripe checkout for package ${t.identifier}`
    );
    const w = d || p, k = n ?? t.webBillingProduct.defaultPurchaseOption, h = _i({
      appearance: (E = this._brandingInfo) == null ? void 0 : E.appearance,
      rcPackage: t,
      purchaseOptionToUse: k,
      customerEmail: i
    });
    this.eventsTracker.trackSDKEvent(h);
    const b = { ...this._flags.autoCollectUTMAsMetadata ? oi() : {}, ...e.metadata || {} };
    let v = null;
    const P = this._brandingInfo;
    P && e.brandingAppearanceOverride && (P.appearance = e.brandingAppearanceOverride);
    const I = a !== void 0;
    return new Promise((C, S) => {
      const F = mn();
      I || F.history.pushState({ checkoutOpen: !0 }, "");
      const D = () => {
        v && ao(v), f.innerHTML = "";
      }, O = this.createCheckoutOnCloseHandler(
        S,
        D
      );
      !I && O && F.addEventListener("popstate", O);
      const N = this.createCheckoutOnFinishedHandler(
        C,
        g,
        t,
        D
      ), L = this.createCheckoutOnErrorHandler(
        S,
        D
      );
      v = Vn(ME, {
        target: f,
        props: {
          isInElement: I,
          appUserId: g,
          rcPackage: t,
          purchaseOption: k,
          customerEmail: i,
          workflowPurchaseContext: s,
          attributionMetadata: l,
          paywallId: c,
          paywallSessionId: u,
          onFinished: N,
          onClose: O,
          onError: L,
          eventsTracker: this.eventsTracker,
          brandingInfo: this._brandingInfo,
          purchaseOperationHelper: this.purchaseOperationHelper,
          selectedLocale: w,
          metadata: b,
          defaultLocale: p,
          customTranslations: e.labelsOverride,
          skipSuccessPage: _
        }
      });
    });
  }
  async performWebBillingPurchase(e) {
    var C;
    const {
      rcPackage: t,
      purchaseOption: n,
      htmlTarget: a,
      customerEmail: i,
      workflowPurchaseContext: s,
      attributionMetadata: l,
      selectedLocale: c = Or,
      defaultLocale: u = Or,
      skipSuccessPage: d = !1,
      showDiscountCodeField: p = !1,
      discountCode: _,
      onDiscountCodeChanged: f
    } = e, g = this.resolveHTMLTarget(a), w = this._appUserId;
    be.debugLog(
      `Presenting purchase form for package ${t.identifier}`
    );
    const k = c || u, h = n ?? t.webBillingProduct.defaultPurchaseOption, y = _i({
      appearance: (C = this._brandingInfo) == null ? void 0 : C.appearance,
      rcPackage: t,
      purchaseOptionToUse: h,
      customerEmail: i
    });
    this.eventsTracker.trackSDKEvent(y);
    const v = { ...this._flags.autoCollectUTMAsMetadata ? oi() : {}, ...e.metadata || {} };
    let P = null;
    const I = this._brandingInfo;
    I && e.brandingAppearanceOverride && (I.appearance = e.brandingAppearanceOverride);
    const E = a !== void 0;
    return new Promise((S, F) => {
      const D = mn();
      E || D.history.pushState({ checkoutOpen: !0 }, "");
      const O = () => {
        P && ao(P), g.innerHTML = "";
      }, N = this.createCheckoutOnCloseHandler(
        F,
        O
      );
      !E && N && D.addEventListener("popstate", N);
      const L = this.createCheckoutOnFinishedHandler(
        S,
        w,
        t,
        O
      ), Z = this.createCheckoutOnErrorHandler(
        F,
        O
      );
      P = Vn(Fx, {
        target: g,
        props: {
          isInElement: E,
          appUserId: w,
          rcPackage: t,
          purchaseOption: h,
          customerEmail: i,
          workflowPurchaseContext: s,
          attributionMetadata: l,
          paywallId: e.paywallId,
          paywallSessionId: e.paywallSessionId,
          onFinished: L,
          onClose: N,
          onError: Z,
          purchases: this,
          eventsTracker: this.eventsTracker,
          brandingInfo: this._brandingInfo,
          purchaseOperationHelper: this.purchaseOperationHelper,
          selectedLocale: k,
          metadata: v,
          defaultLocale: u,
          customTranslations: e.labelsOverride,
          termsAndConditionsUrl: e.termsAndConditionsUrl,
          showDiscountCodeField: p,
          discountCode: _,
          onDiscountCodeChanged: f,
          skipSuccessPage: d,
          hideBackButton: this.shouldHideCheckoutBackButton()
        }
      });
    });
  }
  async performPaddlePurchase(e) {
    var P;
    const {
      rcPackage: t,
      purchaseOption: n,
      customerEmail: a,
      attributionMetadata: i,
      workflowPurchaseContext: s,
      selectedLocale: l = Or,
      defaultLocale: c = Or,
      skipSuccessPage: u = !1,
      htmlTarget: d
    } = e, p = this.resolveHTMLTarget(d), _ = this._appUserId;
    be.debugLog(
      `Presenting Paddle checkout for package ${t.identifier}`
    );
    const f = n ?? t.webBillingProduct.defaultPurchaseOption, w = {
      source: "paddle",
      ...this._flags.autoCollectUTMAsMetadata ? oi() : {},
      ...e.metadata || {}
    }, k = this._brandingInfo;
    k && e.brandingAppearanceOverride && (k.appearance = e.brandingAppearanceOverride);
    const h = _i({
      appearance: (P = this._brandingInfo) == null ? void 0 : P.appearance,
      rcPackage: t,
      purchaseOptionToUse: f,
      customerEmail: a
    });
    this.eventsTracker.trackSDKEvent(h);
    const y = new tE(this.backend, this.eventsTracker);
    let b = null;
    const v = d !== void 0;
    return new Promise((I, E) => {
      const C = mn();
      v || C.history.pushState({ checkoutOpen: !0 }, "");
      const S = () => {
        b && ao(b), p.innerHTML = "";
      }, F = this.createCheckoutOnCloseHandler(E, S) ?? // Always unmount PaddlePurchaseUi when the user closes the checkout modal
      (() => {
        S();
      });
      v || C.addEventListener("popstate", F);
      const D = this.createCheckoutOnFinishedHandler(
        I,
        _,
        t,
        S
      ), O = this.createCheckoutOnErrorHandler(E);
      b || (b = Vn(xE, {
        target: p,
        props: {
          eventsTracker: this.eventsTracker,
          brandingInfo: this._brandingInfo,
          selectedLocale: l || c,
          defaultLocale: c,
          customTranslations: e.labelsOverride,
          isInElement: v,
          onClose: F,
          onFinished: D,
          onError: O,
          skipSuccessPage: u,
          productDetails: t.webBillingProduct,
          rcPackage: t,
          appUserId: _,
          purchaseOption: f,
          customerEmail: a,
          attributionMetadata: i,
          workflowPurchaseContext: s,
          metadata: w,
          unmountPaddlePurchaseUi: S,
          paddleService: y,
          hideBackButton: this.shouldHideCheckoutBackButton()
        }
      }));
    });
  }
  /**
   * Uses htmlTarget if provided. Otherwise, looks for an element with id "rcb-ui-root".
   * If no element is found, creates a new div with className "rcb-ui-root".
   */
  resolveHTMLTarget(e) {
    const t = Fl();
    let n = e ?? t.getElementById("rcb-ui-root");
    if (n === null) {
      const a = t.createElement("div");
      a.className = "rcb-ui-root", t.body.appendChild(a), n = a;
    }
    if (n === null)
      throw new Error(
        "Could not generate a mount point for the billing widget"
      );
    return n;
  }
  createCheckoutOnCloseHandler(e, t) {
    if (this._flags.rcSource && bd.includes(this._flags.rcSource))
      return;
    const a = () => {
      const i = D_();
      this.eventsTracker.trackSDKEvent(i), mn().removeEventListener("popstate", a), t == null || t(), be.debugLog("Purchase cancelled by user"), e(new Qe(Me.UserCancelledError));
    };
    return a;
  }
  shouldHideCheckoutBackButton() {
    return this._flags.hideBackButton === !0 || !!this._flags.rcSource && bd.includes(this._flags.rcSource);
  }
  createCheckoutOnFinishedHandler(e, t, n, a) {
    return async (s) => {
      const l = Xu({
        redemptionInfo: s.redemptionInfo
      });
      this.eventsTracker.trackSDKEvent(l), this.inMemoryCache.invalidateAllCaches(), be.debugLog("Purchase finished"), a == null || a();
      const c = {
        customerInfo: await this._getCustomerInfoForUserId(t),
        redemptionInfo: s.redemptionInfo,
        operationSessionId: s.operationSessionId,
        attributionMetadata: s.attributionMetadata,
        storeTransaction: {
          storeTransactionId: s.storeTransactionIdentifier,
          productIdentifier: n.webBillingProduct.identifier,
          purchaseDate: s.purchaseDate
        }
      };
      e(c);
    };
  }
  createCheckoutOnErrorHandler(e, t) {
    return (a) => {
      var s;
      const i = Zu({
        errorCode: (s = a.errorCode) == null ? void 0 : s.toString(),
        errorMessage: a.message
      });
      this.eventsTracker.trackSDKEvent(i), t == null || t(), e(Qe.getForPurchasesFlowError(a));
    };
  }
  /**
   * Used by internal RC code to detect if used a test store API key.
   * @internal
   */
  _isConfiguredWithSimulatedStore() {
    return Un(this._API_KEY);
  }
  /**
   * Whether wallet methods should be force-enabled in the Express Checkout Element.
   * @internal
   */
  _shouldForceEnableWalletMethods() {
    return !!this._flags.forceEnableWalletMethods;
  }
  /**
   * Posts a simulated store receipt to the server.
   * @internal
   * @param product - The product for which we want to post the receipt for.
   * @returns Promise<PurchaseResult>
   */
  async _postSimulatedStoreReceipt(e) {
    if (!Un(this._API_KEY))
      throw new Qe(
        Me.ConfigurationError,
        "Posting a test store receipt is only available for RC Test Store API keys."
      );
    return await Pg(
      e,
      this.backend,
      this._appUserId,
      void 0
    );
  }
  /**
   * Gets latest available {@link CustomerInfo}.
   * @returns The latest {@link CustomerInfo}.
   * @throws {@link PurchasesError} if there is an error while fetching the customer info.
   */
  async getCustomerInfo() {
    return await this._getCustomerInfoForUserId(this._appUserId);
  }
  /**
   * Gets the current app user id.
   */
  getAppUserId() {
    return this._appUserId;
  }
  /**
   * Sets attributes for the current user. Attributes are useful for storing additional, structured information on a customer that can be used elsewhere in the system.
   * For example, you could store your customer's email address or additional system identifiers through the applicable reserved attributes, or store arbitrary facts like onboarding survey responses, feature usage, or other dimensions as custom attributes.
   *
   * Note: Unlike our mobile SDKs, the web SDK does not cache or retry sending attributes if the request fails. If the request fails, the attributes will not be saved and you will need to retry the operation.
   *
   * @param attributes - A dictionary of attributes to set for the current user.
   * @throws {@link PurchasesError} if there is an error while setting the attributes or if the customer doesn't exist.
   */
  async setAttributes(e) {
    return await this.getCustomerInfo(), await this.backend.setAttributes(this._appUserId, e);
  }
  /**
   * Change the current app user id. Returns the customer info for the new
   * user id.
   * @param newAppUserId - The user id to change to.
   */
  async changeUser(e) {
    return await this.replaceUserId(e), await this.getCustomerInfo();
  }
  /**
   * Identifies the current user ID with the provided appUserId, as long as the
   * previous user ID is an anonymous user ID. This will create an alias
   * between the two user ids in RevenueCat and replace the current user ID used.
   * If the old user ID is not anonymous, this method will change the current
   * user ID to the given appUserId without creating an alias.
   * @returns The customer info for the new user ID.
   * @throws {@link PurchasesError} if there is an error while performing the aliasing or fetching the customer info.
   * @param appUserId - The new user ID to identify the current user as.
   * @experimental
   */
  async identifyUser(e) {
    if (Xs(e), e === this._appUserId)
      return be.debugLog(
        `aliasUser called with the current appUserID: ${e}. Ignoring.`
      ), {
        customerInfo: await this.getCustomerInfo(),
        wasCreated: !1
      };
    const t = await this.backend.identify(this._appUserId, e);
    return await this.replaceUserId(e), {
      customerInfo: Tl(t),
      wasCreated: t.was_created
    };
  }
  async replaceUserId(e) {
    Xs(e), this._appUserId = e, await this.eventsTracker.updateUser(e), this.inMemoryCache.invalidateAllCaches();
  }
  /** @internal */
  logMissingProductIds(e, t) {
    const n = {};
    t.forEach(
      (i) => n[i.identifier] = i
    );
    const a = [];
    e.forEach((i) => {
      n[i] === void 0 && a.push(i);
    }), a.length > 0 && be.debugLog(
      `Could not find product data for product ids:
        ${a.join()}.
        Please check that your product configuration is correct.`
    );
  }
  /**
   * @returns Whether the SDK is using a sandbox API Key.
   */
  isSandbox() {
    return qi(this._API_KEY) || Un(this._API_KEY);
  }
  /**
   * @returns Whether the current user is anonymous.
   */
  isAnonymous() {
    return this._appUserId.startsWith(Pd);
  }
  /**
   * Fetches the virtual currencies for the current subscriber.
   *
   * @returns {Promise<VirtualCurrencies>} A VirtualCurrencies object containing the subscriber's virtual currencies.
   */
  async getVirtualCurrencies() {
    return await this._getVirtualCurrenciesForUserId(this._appUserId);
  }
  /**
   * The currently cached {@link VirtualCurrencies} if one is available.
   * This value will remain null until virtual currencies have been fetched at
   * least once with {@link Purchases.getVirtualCurrencies} or an equivalent function.
   *
   * @returns {VirtualCurrencies | null} A {@link VirtualCurrencies} object containing the subscriber's virtual currencies,
   * or null if no cached data is available.
   */
  getCachedVirtualCurrencies() {
    return this.inMemoryCache.getCachedVirtualCurrencies(this._appUserId, !0);
  }
  /**
   * Invalidates the cache for virtual currencies.
   *
   * This is useful for cases where a virtual currency's balance might have been updated
   * in a different part of your system, like if you decreased a user's balance from the user spending a virtual currency,
   * or if you increased the balance from your backend using the server APIs.
   */
  invalidateVirtualCurrenciesCache() {
    this.inMemoryCache.invalidateVirtualCurrenciesCache(this._appUserId);
  }
  /**
   * Closes the Purchases instance. You should never have to do this normally.
   */
  close() {
    if (Er.instance === this) {
      if (this.eventsTracker && this.eventsTracker.dispose(), this._flags.applePayBrandingLogoEnabled) {
        const e = ql();
        e && SI(e);
      }
      Er.instance = void 0;
    } else
      be.warnLog(
        "Trying to close a Purchases instance that is not the current instance. Ignoring."
      );
  }
  /** @internal */
  async _getCustomerInfoForUserId(e) {
    const t = await this.backend.getCustomerInfo(e);
    return Tl(t);
  }
  /** @internal  */
  async _getVirtualCurrenciesForUserId(e) {
    const t = this.inMemoryCache.getCachedVirtualCurrencies(e);
    if (t)
      return be.debugLog("Vending VirtualCurrencies from cache."), t;
    const n = await this.backend.getVirtualCurrencies(e), a = pI(n);
    return be.debugLog("VirtualCurrencies updated from the network."), this.inMemoryCache.cacheVirtualCurrencies(e, a), a;
  }
  /**
   * Generates an anonymous app user ID that follows RevenueCat's format.
   * This can be used when you don't have a user identifier system in place.
   * The generated ID will be in the format: $RCAnonymousID:\<UUID without dashes\>
   * Example: $RCAnonymousID:123e4567e89b12d3a456426614174000
   * @returns A new anonymous app user ID string
   * @public
   */
  static generateRevenueCatAnonymousAppUserId() {
    return `${Pd}${An().replace(/-/g, "")}`;
  }
  /**
   * Track an event.
   * @param props - The properties of the event.
   * @internal
   */
  _trackEvent(e) {
    this.eventsTracker.trackExternalEvent(e);
  }
  /**
   * Immediately flush all pending events to the server.
   *
   * This method is useful before programmatic navigation to ensure events are delivered.
   * The SDK uses fetch with keepalive:true to allow delivery during navigation, but
   * calling this method before navigation provides additional reliability.
   *
   * Notes:
   * - Temporarily stops automatic event flushing, then restarts after completion
   * - Events are sent in batches if the payload exceeds the keepalive size limit (50KB)
   * - If a batch fails, remaining batches will not be attempted
   * - Safe to call multiple times; concurrent calls will be serialized
   * - Returns immediately if tracker is disposed
   *
   * @returns Promise that resolves when all events have been flushed or an error occurs
   * @internal
   */
  _flushAllEvents() {
    return this.eventsTracker.flushAllEvents();
  }
};
ii = zc(null), ps(ii, 1, "presentExpressPurchaseButton", Sd, Er), ps(ii, 1, "purchase", Ed, Er), ds(ii, Er), /** @internal */
ee(Er, "_platformInfo"), /** @internal */
ee(Er, "instance");
let Ml = Er;
export {
  AI as CustomVariableValue,
  Me as ErrorCode,
  tt as LogLevel,
  hg as OfferingKeyword,
  fh as PackageType,
  Ne as PeriodUnit,
  Ur as ProductType,
  Ml as Purchases,
  Qe as PurchasesError,
  CI as ReservedCustomerAttribute,
  Cm as UninitializedPurchasesError
};
