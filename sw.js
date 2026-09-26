// Codzienny Atleta — service worker. Podbij CACHE przy kazdym wdrozeniu, inaczej stary SW nie zaktualizuje appki.
// Wzorowane na sprawdzonym mechanizmie z Dziennika: Hostinger CDN potrafi trzymac stara wersje strony w
// cache do 7 dni niezaleznie od tego, co jest wgrane, wiec zadania HTML zawsze ida do sieci z cache:'no-store'
// i doklejonym _swbust, a odpowiedz i tak jest zapisywana pod oryginalnym adresem (offline nadal dziala).
const CACHE = 'codzienny-atleta-v12';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon_192.png',
  './icon_512.png',
  './assets/splash-bg.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const isHtml = event.request.mode === 'navigate' ||
    (event.request.headers.get('accept') || '').includes('text/html');

  if (isHtml) {
    // Zadania nawigacyjne (HTML): zawsze swiezo z sieci, z ominieciem cache CDN — wymuszona najnowsza wersja.
    const bustedUrl = event.request.url.split('#')[0] +
      (event.request.url.includes('?') ? '&' : '?') + '_swbust=' + Date.now();
    event.respondWith(
      fetch(bustedUrl, { cache: 'no-store' }).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  // Pozostale zasoby statyczne: cache-first z aktualizacja w tle.
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
