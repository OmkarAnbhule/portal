if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>a(e,n),r={module:{uri:n},exports:t,require:f};s[n]=Promise.all(c.map((e=>r[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0fCvTfV5uBW-qVhj6JxNm/_buildManifest.js",revision:"c5f17930a62cbeeb1aeb4f70619dcb61"},{url:"/_next/static/0fCvTfV5uBW-qVhj6JxNm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-ce3c5e84a47983d7.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/135-d0c75e7f3aad5cbb.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/178-bd8e784e84415be8.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/18-b686b19416be6dcb.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/244.afb6fa1e3c411c22.js",revision:"afb6fa1e3c411c22"},{url:"/_next/static/chunks/250-44bc4ad185f722dd.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/288-03aee78bc5a44826.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/314-23d1f1bf2dcd61d1.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/373-cfb6e495996e3d11.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/387-b871b8d3858c2ced.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/468-8650e317748f7c93.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/478-9e2e803cfb29fafe.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/594-428b1eedca79952b.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/749-caa7e15346d3baa4.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/75.9774f00770340535.js",revision:"9774f00770340535"},{url:"/_next/static/chunks/819-3533d76157c1db77.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/828-56580595162a2894.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/8e1d74a4-a22889fdc4a889f4.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/908-5fd7a44d392a226c.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/945-3fef660a42984227.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/954.f9c57218ec10993a.js",revision:"f9c57218ec10993a"},{url:"/_next/static/chunks/9c4e2130-7c6eb84be18dcb96.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/_not-found-da47afcd50e6d86a.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/blogs/page-e5c921b883ed970e.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/clubs/%5Bclub%5D/page-4cf89853c79e4b82.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/clubs/page-929c23a93761643b.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/concession/page-71140cc5ede9e20e.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/createEve/page-06cb13c9a6fc01f0.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/events/%5Bevent%5D/page-cfcc42817ec4ef2e.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/events/page-9ca5d03ab00af6a1.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/internship/page-2537948dacdb693a.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/layout-9344fc83b2b5e57f.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/login/page-4f4029facb10cb3d.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/members/page-b39a7afd7f965795.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/page-b16632fdbfe054d5.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/app/zephyr/page-cbd6303b871c6372.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/dc112a36-b0e438d22936fbf5.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/fd9d1056-a06b764df6f7d635.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/main-1f7dba000c7baae7.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/main-app-decb6a22d3cf3ad7.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1b1e321729effeb6.js",revision:"0fCvTfV5uBW-qVhj6JxNm"},{url:"/_next/static/css/3d3051e53c4d8524.css",revision:"3d3051e53c4d8524"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/2.18025f8f.jpg",revision:"118e8ba74ea4c107bb9cd8fb5010b5d5"},{url:"/_next/static/media/3.80fdf5dd.jpg",revision:"9c3b36ec29822aedf94c4d386ffe4c19"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ansh.f4a75404.jpg",revision:"d4c662f1362b731a203118bbe0cc4aee"},{url:"/_next/static/media/bhavesh.27b9aac0.jpg",revision:"6c3412bc70ba0d67cab03c1d2dfcad09"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/divesh.5ff6c598.jpg",revision:"fcc8af6ec1814474888e934d3aa468d2"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/hasan.fcd47751.jpg",revision:"935f791ac2612ace2e71fe498d384657"},{url:"/_next/static/media/hero.39b7e918.png",revision:"83261b4a47a29ebbe3557c162cf57a8d"},{url:"/_next/static/media/internHero.63a31483.svg",revision:"e71bf43771f35a448710acea42da124e"},{url:"/_next/static/media/moni.8a54b154.jpg",revision:"7c1355388f7522cd0e6185d112cfb010"},{url:"/_next/static/media/omkar.674669ea.jpg",revision:"deb1962f8087c4d388bcd63c196b9b7a"},{url:"/_next/static/media/roneet.35a37db5.jpg",revision:"36565d52b722f761a3490957748c47c1"},{url:"/_next/static/media/teamImg1.15bd6174.jpg",revision:"5793aa12d18410a2d80d6303e6e21349"},{url:"/_next/static/media/teamImg2.34159df2.jpg",revision:"e99a1580f2ef9b5bf8e77a44d2af0cf3"},{url:"/_next/static/media/teamImg3.3da19f93.jpg",revision:"766ab8d93e2ced77ee73a295fe4e5f2b"},{url:"/_next/static/media/testimonial.e8aba875.png",revision:"9fa28c665635616d84ddd805a014c0e4"},{url:"/_next/static/media/vivek.0bc8b61b.jpg",revision:"0d754fa8e4631c5b0ddccaf99920a8b7"},{url:"/animations/error.json",revision:"308ba9fde4034ce828f5b82217e266ee"},{url:"/club/club-icon.png",revision:"c8dd55977bf67e4eddcbeac97b9261d5"},{url:"/icons/android-chrome-192x192.png",revision:"62ad98ff0b7e9f737e3423204126225e"},{url:"/icons/android-chrome-384x384.png",revision:"52a1af0ed5e5b01eeded7fc244178653"},{url:"/icons/icon-512x512.png",revision:"a905d732285a3040cb6c2967844be681"},{url:"/manifest.json",revision:"a16677c1b690dff509f1325a1c1bd3a5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
