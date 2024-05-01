'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9bc297b10fa7404f0eb50117f208a5bf",
"index.html": "b3fb9c99fbe276a8c7248238a1dc0eed",
"/": "b3fb9c99fbe276a8c7248238a1dc0eed",
"main.dart.js": "31a0e936e6055d01ba7833e2dd4f8b4a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6947425547fcd9811df70ce94db5dac5",
"assets/AssetManifest.json": "5e147e96c2d25efab7db5e124ce085d9",
"assets/NOTICES": "133f3e9f32add326f7e6ac04c72fdef6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b557196fe60bcf91626a31334a4d7b69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e92176771ae5051fa16a000712fd6173",
"assets/fonts/MaterialIcons-Regular.otf": "dd6ff7e8292e86b6a03b856bad9cd50e",
"assets/assets/moons/moons_new.csv": "1ff18e15991d92e76b7055365b8cb645",
"assets/assets/moons/moons_full.csv": "0d527635b7b3a2e827f18869393f92d7",
"assets/assets/images/background_rounded_green_to_yellow.xml": "3af02da1028876b603b7a1da30f8c1f0",
"assets/assets/images/border.xml": "140a6d7f05e3e733ca379cd476f87428",
"assets/assets/images/ic_d_day.xml": "7ec17b8830527dc849d6ce1caa6aa458",
"assets/assets/images/ic_d_day.png": "fc3baa97b088e3c0a608050b3f111514",
"assets/assets/images/raster_logo_ufsb.png": "c882ce14df6bf33e76a6a8615c761545",
"assets/assets/images/ic_moon_new.xml": "37489fabf811c2d89b98e6540289d7a3",
"assets/assets/images/color_list.xml": "7b43897729b7c7e9830eab2a2ef4e514",
"assets/assets/images/button_color2.xml": "294fd5c35d732ee1fee529ddcff212b0",
"assets/assets/images/raster_done.png": "4f93c307cbfce2f3f329d98f72cbf27b",
"assets/assets/images/ic_d_question.xml": "fa22ebb03094c3a76276c46ccef88be0",
"assets/assets/images/ic_d_question.png": "31763e2ba23f99707b3f6678f88eb6a9",
"assets/assets/images/nav_back.xml": "ed2b4189562e900fcf0e7fea3940ddc5",
"assets/assets/images/icon_minus.xml": "31bccd9fd91c9b14ec0d877260336f87",
"assets/assets/images/border_grey.xml": "50838838c47a9dd7a8b6c2075fc55da8",
"assets/assets/images/background_rounded_white.xml": "9d9a30b30c3969ae87dd038b7b27eecf",
"assets/assets/images/caldroid_cell_selected.xml": "7eeec7a3999e0f1fb25c56c496d52d6c",
"assets/assets/images/raster_page1_logos_1.png": "f0c7a495698b324351f33e8d2158bfba",
"assets/assets/images/background_list.xml": "e2afd6309ed4a46f4c120012fc8a81c5",
"assets/assets/images/nav_next.xml": "5476bc7b58edcf0e272c9eee32048103",
"assets/assets/images/background_rounded_transparent_to_green.xml": "4f7f83152e92a7992a0194bb595dce1b",
"assets/assets/images/raster_page1_logos_2.png": "6ec27283187ef1ea871dbcee5afe07a8",
"assets/assets/images/nav_next_state.xml": "a4bfbe2f5efffdc3485b3462fadc8e34",
"assets/assets/images/raster_arrow_down.png": "0e693c57830945a415aa5919d49eda66",
"assets/assets/images/nav_next_grey.xml": "88747826c05bf3a86d5d587847038b7e",
"assets/assets/images/caldroid_cell_green.xml": "3e51a20007bb959fef35c3d33321a66f",
"assets/assets/images/raster_logo_napier_jpeg.jpg": "fcc7fb53061b4a5736071577ab6edea6",
"assets/assets/images/button_color.xml": "5f7b92eaae1549391a3ba3022e780031",
"assets/assets/images/licenses.xml": "122ce0b75e4dfa896a284f6956f28f68",
"assets/assets/images/raster_q0_0.png": "99009d9b76ad86eee878004b1131326a",
"assets/assets/images/raster_page1_crabs.png": "0403a6b61f6e925edfa097d6ab961c4b",
"assets/assets/images/ic_moon_full.xml": "b700ea99d0975e913b17de18e6639901",
"assets/assets/images/raster_q0_1.png": "f5013d4031b672e2a51f784b10b7627f",
"assets/assets/images/icon_plus.xml": "4847d7e8662b65157cb4a59f8a2fe7a3",
"assets/assets/images/raster_logo_napier.png": "39ea98ca5b1eab4cb4d970159ccdbac4",
"assets/assets/images/nav_back_grey.xml": "bfeb07c7b425f9e35e9b7d0deeeda442",
"assets/assets/images/ic_d_night.xml": "b373a162900c769ce391215029be3cda",
"assets/assets/images/ic_d_night.png": "1d311a962e88a6f377fdab459a96f470",
"assets/assets/images/colour_list_disabled.xml": "63eb2a249089ce55ca2b3f2d7fb28928",
"assets/assets/images/raster_q1_0.png": "28c7e910ccb2eccd16c5e3924d4dfa10",
"assets/assets/images/raster_q1_1.png": "51458eed5a92e67ea8b9a04ecbe3a6bd",
"assets/assets/images/nav_back_state.xml": "9cb21aced0be829d65f6d3fcc239b874",
"assets/assets/images/raster_logo_napier_backup.png": "97ae4feabbdc657c1382668d214b0558",
"assets/assets/images/ic_d_daynight.xml": "f75d6fa1106b3927191ad5326abb1051",
"assets/assets/images/ic_d_daynight.png": "65af2c41aa3c25750d0403f3eb6b94ef",
"assets/assets/raw_eng/about_us.json": "f9cf7ae3d8b21b555aad382c9ec61085",
"assets/assets/raw_eng/questions2.json": "7a5f2f38e26c0899c43280fd294fddb1",
"assets/assets/raw_eng/number_of_crabs.json": "f67c936432c110040706934c216c9d94",
"assets/assets/raw_eng/questions.json": "213ed7d7f7fb0015c2355ff48f0ce623",
"assets/assets/raw_eng/region_counties.json": "fed66bb8e8c21cc39a11c4709fe3c537",
"assets/assets/raw_eng/occupation.json": "894eeb4eb5a8a0ed3c8b10917cbafe68",
"assets/assets/raw_eng/questions2Modified.json": "99a0c63f7feb879cfdf086cbefacc387",
"assets/assets/raw_eng/locations_1.json": "966a7653a3c6efa28a588c03f245234c",
"assets/assets/raw_eng/locations_0.json": "9f88992e827ffa92f34f6d6572b90081",
"assets/assets/raw_eng/ovigerious.json": "cc8fb48612a94bb63b2fc4b11fe522ec",
"assets/assets/raw_eng/yes_no.json": "1fe2b62cb476ebc42ec633de3a373588",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
