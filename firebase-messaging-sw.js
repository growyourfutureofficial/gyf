// ==========================================
// 1. OFFLINE CACHING ENGINE (No Internet Dinosaur Fix)
// ==========================================
const CACHE_NAME = 'buildmoney-offline-cache-v15';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0'
];

// 🚀 IIT EXPERT FIX: Fail-Safe Install Event for GitHub Pages
self.addEventListener('install', event => {
    self.skipWaiting(); // Force activation instantly
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache for Offline Support (Fail-Safe Mode)');
            // Agar ek file miss bhi ho, toh Service Worker crash nahi hoga!
            return Promise.all(
                urlsToCache.map(url => {
                    return cache.add(url).catch(err => console.log('Cache skipped for (Non-Fatal):', url));
                })
            );
        })
    );
});

// Activate Event: Purane caches ko automatically delete karne ke liye
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

// 🚀 IIT EXPERT FIX: True WebAPK Interceptor Engine
self.addEventListener('fetch', (event) => {
    // Sirf HTML page navigation ko intercept karega taaki native app instantly load ho
    if (event.request.mode === 'navigate') {
        event.respondWith(
            caches.match('./index.html').then((cachedResponse) => {
                // Agar file cache mein hai, toh INSTANTLY load karo (0 network delay)
                if (cachedResponse) {
                    // Background silent update
                    fetch(event.request).then((networkResponse) => {
                        caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', networkResponse));
                    }).catch(() => {}); 
                    return cachedResponse;
                }
                return fetch(event.request);
            })
        );
        return;
    }

    // Default Cache Strategy for CSS/JS/Images
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});

// ==========================================
// 2. FIREBASE BACKGROUND MESSAGING
// ==========================================
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

    const firebaseConfig = {
        apiKey: "AIzaSyAOgfi4Rf_mXVGDp_-MtYie1rJ1Kgm5kjQ",
        authDomain: "grow-you-future.firebaseapp.com",
        projectId: "grow-you-future",
        storageBucket: "grow-you-future.firebasestorage.app",
        messagingSenderId: "105468107396",
        appId: "1:105468107396:web:bd72075ec134587260c0d1"
    };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    const notificationTitle = payload?.notification?.title || 'GYF Update';
    const notificationOptions = {
        body: payload?.notification?.body || 'Tap to view details securely.',
        icon: './icon-192x192.png',
        badge: './icon-192x192.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
