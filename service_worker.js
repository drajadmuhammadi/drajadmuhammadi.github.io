var cacheName = 'amp-drajad';
var filesToCache = [
  '/',
  '/index.html',

  '/assets/css/main.css',
  '/assets/css/noscript.css',
  '/assets/css/fontawesome-all.min.css',

  '/images/pic01.jpg',
  '/images/pic02.jpg',
  '/images/pic03.jpg',

  '/js/jquery.min.js',
  '/js/jquery.scrollex.min.js',
  '/js/jquery.scrolly.min.js',
  '/js/browser.min.js',
  '/js/breakpoints.min.js',
  '/js/util.js',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});