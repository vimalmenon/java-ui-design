declare var VERSION:string;
declare var caches:CacheStorage;
 
var cacheList = ["/"];
var cacheVersion = `v${VERSION}`;

self.addEventListener("install", (event: any) => {
	event.waitUntil(
		caches.open(cacheVersion).then((cache) => {
			return cache.addAll(cacheList);
		})
	);
});

self.addEventListener("activate", (event: any) => {
	event.waitUntil(
		caches.keys().then((cache) => {
			return Promise.all(cache.filter((cacheName) => {
				return cacheName !== cacheVersion;
			}).map((cacheName) => {
				return caches.delete(cacheName);
			}));
		})
	);
});

self.addEventListener("fetch", (event:  any) => {
	caches.open(cacheVersion).then((cache: any) => {
		if ((event.request.url.endsWith("js") || event.request.url.endsWith("css")) && !event.request.url.startsWith("chrome-extension")) {
			fetch(event.request).then((response) => {
				cache.put(event.request, response.clone());
				return response;
			});
		}		
	});
	event.respondWith(fetch(event.request));
});