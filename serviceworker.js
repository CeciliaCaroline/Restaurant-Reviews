const cacheFiles = [
    "/",
    "./js/main.js",
    "./js/dbhelper.js",
    "./index.html",
    "./restaurant.html",
    "./css/styles.css",
    "./css/responsive.css",
  ];
  
  self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("cachev1").then(cache => {
        return cache.addAll(cacheFiles);
      }).catch(error => console.log(error))
    );
  });
  
  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.open("cachev1").then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request).then((response) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });