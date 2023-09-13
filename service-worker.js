const CACHE_NAME = 'static-cache-v10';



const FILES_TO_CACHE = [
    'offline.html', //*** cest tu suposé detre vide ? ou de mettre tout les page html TOUT MES FICHIER ETC ETC ?***
    'index.html',
    'Contact.html',
    'services.html',  //***continue de tout ajouter ici***
    'install.js',
    'service-worker.js',
    '/flav_app/maskable_icon_x72.png',
    'img',
    '/style/css/main.css'
];
    
    self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
    console.log('[ServiceWorker] Pre-caching offline page');
    return cache.addAll(FILES_TO_CACHE);
    })
    );
    self.skipWaiting();
    });

self.addEventListener('activate', (evt) => {
console.log('[ServiceWorker] Activate');

evt.waitUntil(
caches.keys().then((keyList) => {
return Promise.all(keyList.map((key) => {
if (key !== CACHE_NAME) {
console.log('[ServiceWorker] Removing old cache',
key);
return caches.delete(key);
}
}));
})
);
self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
    }
    evt.respondWith(
    fetch(evt.request)
    .catch(() => {
    return caches.open(CACHE_NAME)
    .then((cache) => {
    return cache.match('/Slicerer/TP3_session2/offline.html' );      // change ca par tes propre valeurs   ***  return cache.match('/Cochenille/PointNClick/offline.html' );  *** JE DOIS CREER UN PAGE OFFLINE **** avec mon chemin
    });
    })
    );
    });









// self.addEventListener('install', (evt) => {
// console.log('[ServiceWorker] Install');
// // Precache static resources here.
// self.skipWaiting();
// });
// self.addEventListener('activate', (evt) => {
// console.log('[ServiceWorker] Activate');
// //Remove previous cached data from disk.
// self.clients.claim();
// });
// self.addEventListener('fetch', (evt) => {
// console.log('[ServiceWorker] Fetch', evt.request.url);
// //Add fetch event handler here.
// });