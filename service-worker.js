"use strict";var precacheConfig=[["/takis_web/index.html","b0d07c91eb753b6a61289b4a79d6d48d"],["/takis_web/static/css/main.bd673b9b.css","8fb0f808de8123350a4b7d8cb20e388c"],["/takis_web/static/js/main.5cb486e3.js","447f5e78727b4b266366333bb83b966f"],["/takis_web/static/media/arrow.45809bbc.svg","45809bbc4ccb9795f67354afca30bf38"],["/takis_web/static/media/banner_1.4ce34d0a.jpeg","4ce34d0a7fd630d41675632be7b2c7f6"],["/takis_web/static/media/banner_10.92034782.jpeg","92034782a245f29a6061e9b23f69f5e5"],["/takis_web/static/media/banner_11.33080b01.jpeg","33080b01738fe2835c29207d2830eba4"],["/takis_web/static/media/banner_12.043d98ea.jpeg","043d98ea0722b32bbc30742a19640ffa"],["/takis_web/static/media/banner_2.303a4e14.jpeg","303a4e14a3cf8a02b32d342e40771c1f"],["/takis_web/static/media/banner_3.1c66ffa9.jpeg","1c66ffa97375576a817d412e4434fc8c"],["/takis_web/static/media/banner_4.65249f60.jpeg","65249f603e54b6550411ab98252ca617"],["/takis_web/static/media/banner_5.46e1ee11.jpeg","46e1ee112e3310d42573729c62ad78b8"],["/takis_web/static/media/banner_6.49e3cbe6.jpeg","49e3cbe66e83abe9612508749256ed25"],["/takis_web/static/media/banner_7.fc6f9601.jpeg","fc6f9601cee36d6fed571c3c3020fc18"],["/takis_web/static/media/banner_8.f09baac5.jpeg","f09baac5cb8924bcc00ee567f8e1dea6"],["/takis_web/static/media/banner_9.bc15b7e9.jpeg","bc15b7e9ea1ae94fdbcdb7085279c2e2"],["/takis_web/static/media/fullscreen.45ecb3a6.svg","45ecb3a6d9e8a312a19e9418e8e01018"],["/takis_web/static/media/takis_logo.8fd505c5.svg","8fd505c54e42edfa7229cb08c20d17f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/takis_web/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});