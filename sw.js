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

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      // Cache same-origin successful GETs
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const clone = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
