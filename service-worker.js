self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("weather-app-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./index.js",
        "./style.css",
        "./background-music.mp3"
      ]).catch((error) => {
        console.error("Cache addAll error:", error);
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch((error) => {
          console.error("Fetch error:", error);
        })
      );
    })
  );
});