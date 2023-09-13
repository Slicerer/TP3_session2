const CACHE_NAME = 'static-cache-v19';
const FILES_TO_CACHE = [
    'offline.html',
    'index.html',
    'Contact.html',
    'services.html',
    'install.js',
    'flav_app/maskable_icon_x48.png',
    'flav_app/maskable_icon_x72.png',
    'flav_app/maskable_icon_x96.png',
    'flav_app/maskable_icon_x144.png',
    'flav_app/maskable_icon_x192.png',
    'flav_app/maskable_icon_x512.png',
    'img/Broderie.png',
    'img/car.jpg',
    'img/dog_newway.png',
    'img/dog_poiting.png',
    'img/dog1.png',
    'img/facebook.png',
    'img/flames__bg.png',
    'img/handshake.png',
    'img/heroes_dog.png',
    'img/Impression_GF.png',
    'img/informatique.png',
    'img/instagram.png',
    'img/Lettrage.png',
    'img/logo.png',
    'img/mail.png',
    'img/Numerique.png',
    'img/programeur.png',
    'img/screen_printing.png',
    'img/Serigraphie.png',
    'img/Sublimation.png',
    'img/takeoffsubject.png',
    'img/Team_work.png',
    'img/wave_bg.png',
    
    
    // 'img',
    // 'style/css/main.css'
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
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        return;
    }
    evt.respondWith(
        fetch(evt.request)
        .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
             
                });
        })
    );
});
