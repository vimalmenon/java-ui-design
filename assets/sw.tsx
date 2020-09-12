declare var VERSION:string;
declare var caches:CacheStorage;
declare var ENV:string;
 

const prefix = (ENV ==="PRODUCTION")?"/static":"";

var cacheList = [
	"/",
	"/api",
	`${prefix}/fonts/dark.png`,
	`${prefix}/fonts/light.jpg`,
	`${prefix}/main.js`,
	`${prefix}/main.css`,
	`${prefix}/fonts/image1.jpg`,
	`${prefix}/fonts/image5.jpg`,
	`${prefix}/fonts/image3.jpg`,
];

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
	console.log("Fetch event for ", event.request.url);
	event.respondWith(
		caches.match(event.request)
			.then(response => {
				if (response) {
					console.log("Found ", event.request.url, " in cache");
					return response;
				}
				console.log("Network request for ", event.request.url);
				return fetch(event.request);
			}).catch(error => {
				// TODO 6 - Respond with custom offline page
				console.log("error while caching ", error);
				return {
					offline: true
				};
			})
	);
});