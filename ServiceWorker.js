const VERSION = 'v2.00.3';

const cacheResources = async () => {
    const cacheFilesFirst = [
        './',
        './public/views/index.ejs',
        './public/views/header.ejs',
        './public/views/footer.ejs',
        './public/css/foundation.css',
        './public/css/overrides.css',
        './public/js/main.js',
        './favicon.ico',
        './public/css/classes.css',
        './public/css/ids.css',
        './public/css/queries.css',
    ];
    const cache = await caches.open(VERSION);
    return cache.addAll(cacheFilesFirst);
};

self.addEventListener('install', async (event) => {
    event.waitUntil(cacheResources());
    await self.skipWaiting();
});

const cachedResource = async (request) => {
    const cache = await caches.open(VERSION);
    return await cache.match(request);
};

self.addEventListener('activate', async (event) => {
    console.log(`SW activated:  ${event}`);
    await self.clients.claim();
});

self.addEventListener('fetch', async (event) => {
    console.log(`Fetch event: ${event.request.url}`);
    if (event.request.url.endsWith(`overrides.css`)) {
        await event.respondWith(fetch('/public/css/overrides.css'));
    } else {
        await event.respondWith(cachedResource(event.request));
    }
});

self.addEventListener('push', async (event) => {

});

self.addEventListener('sync', async (event) => {

});