/* ============================================================
   FOOTBALL MANAGER — sw.js
   TEMPORARY: self-destruct mode while debugging.
   Any already-installed SW will unregister itself and clear
   all caches on its next activation. Once the game is stable,
   this file will be restored to a real caching service worker.
   ============================================================ */

/* ---------- Install: skip waiting immediately ---------- */
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

/* ---------- Activate: nuke caches + unregister ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Delete every cache this origin owns
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));

      // Unregister this service worker
      await self.registration.unregister();

      // Force all open tabs to reload with fresh network requests
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        try {
          client.navigate(client.url);
        } catch (e) {
          // Some browsers block programmatic navigate; harmless
        }
      }
    })()
  );
});

/* ---------- Fetch: pass through to network (no caching) ---------- */
self.addEventListener("fetch", (event) => {
  // Do nothing — let the browser handle the request normally.
  // (Not calling respondWith means default network behavior.)
  return;
});
