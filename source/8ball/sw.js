self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open("static").then(cache =>{
            return cache.addAll(["./","./8ball-styles.css","./assets/images/icons/icon192.png"]);
        })
    );
});

