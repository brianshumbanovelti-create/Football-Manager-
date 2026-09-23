/* ============================================================
   FOOTBALL MANAGER — sw.js
   Offline cache for full playability without internet
   ============================================================ */

const CACHE_VERSION = "fm-v2";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/main.css",
  "./css/components.css",
  "./css/responsive.css",
  "./data/leagues.js",
  "./data/clubs.js",
  "./data/players.js",
  "./data/fixtures.js",
  "./js/app.js",
  "./js/state.js",
  "./js/storage.js",
  "./js/util/constants.js",
  "./js/util/helpers.js",
  "./js/engine/matchEngine.js",
  "./js/engine/matchReveal.js",
  "./js/engine/fatigue.js",
  "./js/engine/morale.js",
  "./js/engine/aiTransfers.js",
  "./js/ui/match.js",
  "./js/ui/fixtures.js",
  "./js/ui/squad.js",
  "./js/ui/inbox.js",
  "./js/ui/tables.js",
  "./js/ui/transfers.js"
];

/* ---------- Install: pre-cache all assets ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ---------- Activate: clean up old caches ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ---------- Fetch: network-first for HTML, cache-first for the rest ---------- */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Don't touch cross-origin requests (there aren't any, but be safe)
  if (url.origin !== self.location.origin) return;

  // Network-first for navigation (HTML) requests so updates are picked up
  if (req.mode === "navigate" || url.pathname.endsWith(".html")) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req).then(cached => cached || caches.match("./index.html")))
    );
    return;
  }

  // Cache-first for scripts, styles, data
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});

/* ---------- Allow the page to force an immediate update ---------- */
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
