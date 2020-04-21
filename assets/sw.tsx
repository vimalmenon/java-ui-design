declare var VERSION:string;
declare var caches:CacheStorage;


self.addEventListener("install", (event) => {
	console.log(VERSION, "install is called");
});

self.addEventListener("activate", (event: any) => {
	event.waitUntil(
		caches.keys().then((cache) => {
			return Promise.all(cache.filter((cacheName) => {
				return cacheName !== `v${VERSION}`;
			}).map((cacheName) => {
				return caches.delete(cacheName);
			}));
		})
	);
});

self.addEventListener("fetch", (event:  any) => {
	caches.open(`v${VERSION}`).then((cache: any) => {
		if ((event.request.url.endsWith("js") || event.request.url.endsWith("css")) && !event.request.url.startsWith("chrome-extension")) {
			console.log(event.request);
			fetch(event.request).then((response) => {
				cache.put(event.request, response.clone());
				return response;
			});
		}		
	});
	event.respondWith(fetch(event.request));
});