var cacheName = 'amp-drajad';
var filesToCache = [
  '/',
  '/amp/index.html',

  'css/page.css',
  'css/travel.css',

  '/amp/img/travel/hero-1.jpg',
  '/amp/img/travel/hero-2.jpg',
  '/amp/img/travel/hero-3.jpg',
  '/amp/img/travel/blogpost-thumbnail.jpg',

  '/amp/img/travel/activity/discover-electronic-scene.jpg',
  '/amp/img/travel/activity/discover-electronic-scene@2x.jpg',
  '/amp/img/travel/activity/skateboard-around-city.jpg',
  '/amp/img/travel/activity/skateboard-around-city@2x.jpg',
  '/amp/img/travel/activity/surf-day.jpg',
  '/amp/img/travel/activity/surf-day@2x.jpg',

  '/amp/img/travel/city/barcelona.jpg',
  '/amp/img/travel/city/chicago.jpg',
  '/amp/img/travel/city/new-york.jpg',
  '/amp/img/travel/city/paris.jpg',
  '/amp/img/travel/city/reykjavik.jpg',
  '/amp/img/travel/city/tokyo.jpg',
  
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