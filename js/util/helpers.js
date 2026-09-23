/* ============================================================
   FOOTBALL MANAGER — js/util/helpers.js
   RNG, dates, math, deep clone, formatting
   ============================================================ */

/* ============================================================
   RNG  — Mulberry32 seeded PRNG
   Deterministic if given a seed; falls back to Date.now().
   ============================================================ */
export function createRng(seed = Date.now()) {
  let state = seed >>> 0;
  return function rng() {
    state |= 0;
    state = (state + 0x6D2B79F5) | 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Global non-seeded RNG for gameplay (results don't need replay). */
export const rng = createRng();

/* Random float in [min, max) */
export function rand(min, max) {
  return min + rng() * (max - min);
}

/* Random int in [min, max] inclusive */
export function randInt(min, max) {
  return Math.floor(min + rng() * (max - min + 1));
}

/* Random element from array */
export function pick(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(rng() * arr.length)];
}

/* Random element from array, with weights (array of numbers same length) */
export function pickWeighted(arr, weights) {
  if (!arr || arr.length === 0) return null;
  const total = weights.reduce((a, b) => a + b, 0);
  if (total <= 0) return arr[0];
  let r = rng() * total;
  for (let i = 0; i < arr.length; i++) {
    r -= weights[i];
    if (r <= 0) return arr[i];
  }
  return arr[arr.length - 1];
}

/* Shuffle array in place (Fisher-Yates) */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Boolean roll — returns true with probability p (0-1) */
export function roll(p) {
  return rng() < p;
}

/* ============================================================
   MATH
   ============================================================ */
export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function round(value, decimals = 0) {
  const f = Math.pow(10, decimals);
  return Math.round(value * f) / f;
}

export function sum(arr, fn = x => x) {
  return arr.reduce((acc, x) => acc + fn(x), 0);
}

export function average(arr, fn = x => x) {
  if (!arr || arr.length === 0) return 0;
  return sum(arr, fn) / arr.length;
}

/* ============================================================
   POISSON — for goal event simulation
   Returns probability of k events given mean lambda.
   ============================================================ */
export function poissonPmf(k, lambda) {
  if (lambda <= 0) return k === 0 ? 1 : 0;
  return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
}

export function factorial(n) {
  if (n <= 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

/* Sample integer from Poisson distribution */
export function samplePoisson(lambda) {
  // Knuth's algorithm
  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= rng();
  } while (p > L);
  return k - 1;
}

/* ============================================================
   DATES
   ============================================================ */
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function parseDate(dateStr) {
  // Expects "YYYY-MM-DD"
  return new Date(dateStr + "T00:00:00Z");
}

export function formatDate(dateStr) {
  const d = parseDate(dateStr);
  const day = DAYS_SHORT[d.getUTCDay()];
  const date = d.getUTCDate();
  const mon = MONTHS_SHORT[d.getUTCMonth()];
  return `${day} ${date} ${mon}`;
}

export function formatDateLong(dateStr) {
  const d = parseDate(dateStr);
  const day = DAYS_SHORT[d.getUTCDay()];
  const date = d.getUTCDate();
  const mon = MONTHS_SHORT[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${date} ${mon} ${year}`;
}

export function formatKickoff(dateStr, time) {
  return `${formatDate(dateStr)} ${time}`;
}

export function addDays(dateStr, days) {
  const d = parseDate(dateStr);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function daysBetween(a, b) {
  const da = parseDate(a).getTime();
  const db = parseDate(b).getTime();
  return Math.round((db - da) / (1000 * 60 * 60 * 24));
}

export function isSameDay(a, b) {
  return a === b;
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/* ============================================================
   CURRENCY
   ============================================================ */
export function formatMoney(amount) {
  if (amount === null || amount === undefined) return "—";
  if (Math.abs(amount) >= 1_000_000) {
    return `£${round(amount / 1_000_000, 1)}M`;
  }
  if (Math.abs(amount) >= 1_000) {
    return `£${round(amount / 1_000, 0)}k`;
  }
  return `£${amount}`;
}

export function formatWage(amount) {
  if (amount === null || amount === undefined) return "—";
  if (Math.abs(amount) >= 1_000) {
    return `£${round(amount / 1_000, 0)}k/w`;
  }
  return `£${amount}/w`;
}

/* ============================================================
   IDS
   ============================================================ */
export function slugify(text) {
  return String(text)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function makeId(prefix = "") {
  const rand = Math.random().toString(36).slice(2, 9);
  return prefix ? `${prefix}-${rand}` : rand;
}

/* ============================================================
   OBJECT / ARRAY
   ============================================================ */
export function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const out = {};
  for (const k of Object.keys(obj)) out[k] = deepClone(obj[k]);
  return out;
}

export function shallowEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) if (a[k] !== b[k]) return false;
  return true;
}

/* Group array of objects by a key function */
export function groupBy(arr, fn) {
  const out = {};
  for (const item of arr) {
    const key = fn(item);
    if (!out[key]) out[key] = [];
    out[key].push(item);
  }
  return out;
}

/* Sort array by numeric key descending */
export function sortDesc(arr, fn) {
  return [...arr].sort((a, b) => fn(b) - fn(a));
}

/* Sort array by numeric key ascending */
export function sortAsc(arr, fn) {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}

/* ============================================================
   VALIDATION / PARSE
   ============================================================ */
export function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

export function toInt(v, fallback = 0) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : fallback;
}

export function toFloat(v, fallback = 0) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
}

/* ============================================================
   PERCENTAGE / RATIO
   ============================================================ */
export function pct(value, max = 100) {
  if (max <= 0) return 0;
  return clamp((value / max) * 100, 0, 100);
}

/* ============================================================
   DEBOUNCE / THROTTLE
   ============================================================ */
export function debounce(fn, ms = 200) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}

export function throttle(fn, ms = 200) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn.apply(this, args);
    }
  };
}

/* ============================================================
   DOM SHORTHAND
   ============================================================ */
export function $(selector, root = document) {
  return root.querySelector(selector);
}

export function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k === "text") node.textContent = v;
    else if (k.startsWith("on") && typeof v === "function") {
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (v !== null && v !== undefined && v !== false) {
      node.setAttribute(k, v);
    }
  }
  const kids = Array.isArray(children) ? children : [children];
  for (const c of kids) {
    if (c === null || c === undefined || c === false) continue;
    if (typeof c === "string" || typeof c === "number") {
      node.appendChild(document.createTextNode(String(c)));
    } else if (c instanceof Node) {
      node.appendChild(c);
    }
  }
  return node;
}

export function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

/* ============================================================
   ASYNC
   ============================================================ */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function nextTick(fn) {
  Promise.resolve().then(fn);
}
