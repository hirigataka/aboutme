importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox?console.log("Yay! Workbox is loaded \uD83C\uDF89"):console.log("Boo! Workbox didn't load \uD83D\uDE2C"),workbox.precaching.precacheAndRoute([{url:"404.html",revision:"9bef493b30694ee01ff2e67d324ea5d2"},{url:"assets/css/style.css",revision:"73e8054a9d9de12c539e5fe1d0f9201c"},{url:"assets/css/style.min.css",revision:"d8f7538370325bf3f752cc220e23f300"},{url:"assets/img/banner.png",revision:"d09844e2d6617c37361778d72304e815"},{url:"assets/img/logo/apple-touch-icon.png",revision:"2d87ee8ac9a3911b7db26d01fe993a8f"},{url:"assets/img/logo/favicon32.png",revision:"7bbfb6f9cf32e69bd8e3b2b3d9e8ee6d"},{url:"assets/img/logo/icon-128x128.png",revision:"d8e14f5472c9cdb29e3a9e7b033aa01b"},{url:"assets/img/logo/icon-144x144.png",revision:"8eedb12388f0681fba35d806574d8ef0"},{url:"assets/img/logo/icon-152x152.png",revision:"91b0e09a7e878c488ea58fda56d83b1b"},{url:"assets/img/logo/icon-192x192.png",revision:"335f2e784ebc261f802377793ff2cfa1"},{url:"assets/img/logo/icon-256x256.png",revision:"da71e8861e1e73af542f5e5ea1c577f1"},{url:"assets/img/logo/icon-512x512.png",revision:"2089ed0e1c5bb211d9f309d1e1fef5b9"},{url:"assets/img/me.png",revision:"44e9043d7eb0322a1571a1023d0f6b62"},{url:"index.html",revision:"9d4d3b27e1cfe9c30d5f7fb8efa9ff28"},{url:"index.js",revision:"a00005f9ce21a60b75512aea35cfbefd"},{url:"site.webmanifest",revision:"5ba419fa1eae0534106bf3c7616a016c"}]),workbox.routing.registerRoute(/.*\.gstatic\.com\//,new workbox.strategies.StaleWhileRevalidate({cacheName:"gstatic"})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com\//,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net\//,new workbox.strategies.StaleWhileRevalidate({cacheName:"jsdelivr"})),workbox.routing.registerRoute(/\.(?:jpg|jpeg|png|gif|webp|ico|svg)$/,new workbox.strategies.CacheFirst({cacheName:"pwa-images",plugins:[new workbox.expiration.Plugin({maxEntries:60,maxAgeSeconds:2592000})]})),workbox.routing.registerRoute(/\.(?:js|mjs|css)$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"pwa-static"})),self.addEventListener("install",function(a){a.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(){self.clients.claim()});