var cacheName = 'amp-drajad';
var filesToCache = [
  '/',
  '/drajadmuhammadi.github.io/index.html',

  'css/page.css',
  'css/travel.css',

  '/drajadmuhammadi.github.io/img/travel/hero-1.jpg',
  '/drajadmuhammadi.github.io/img/travel/hero-2.jpg',
  '/drajadmuhammadi.github.io/img/travel/hero-3.jpg',
  '/drajadmuhammadi.github.io/img/travel/blogpost-thumbnail.jpg',

  '/drajadmuhammadi.github.io/img/travel/activity/discover-electronic-scene.jpg',
  '/drajadmuhammadi.github.io/img/travel/activity/discover-electronic-scene@2x.jpg',
  '/drajadmuhammadi.github.io/img/travel/activity/skateboard-around-city.jpg',
  '/drajadmuhammadi.github.io/img/travel/activity/skateboard-around-city@2x.jpg',
  '/drajadmuhammadi.github.io/img/travel/activity/surf-day.jpg',
  '/drajadmuhammadi.github.io/img/travel/activity/surf-day@2x.jpg',

  '/drajadmuhammadi.github.io/img/travel/city/barcelona.jpg',
  '/drajadmuhammadi.github.io/img/travel/city/chicago.jpg',
  '/drajadmuhammadi.github.io/img/travel/city/new-york.jpg',
  '/drajadmuhammadi.github.io/img/travel/city/paris.jpg',
  '/drajadmuhammadi.github.io/img/travel/city/reykjavik.jpg',
  '/drajadmuhammadi.github.io/img/travel/city/tokyo.jpg',
  
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