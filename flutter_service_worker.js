'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "61d1edfa96fed483e48753441d01d4f3",
".git/config": "24adef70138a19da918617df2b55545d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0cc08bd5f955356e49decf1592147c45",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf7305df961476c27cc6ce9034b2db87",
".git/logs/refs/heads/main": "f77e6289d2ff4f2625dc5cbd720453c0",
".git/logs/refs/heads/master": "86b0570dbea34cd107c2070507a38d1a",
".git/logs/refs/remotes/main/main": "4ccf546feff1f14064c2d7c16189ce2e",
".git/logs/refs/remotes/main/master": "16a40de99ef6c111cf5689a12113628f",
".git/logs/refs/remotes/origin/main": "ad96a060ce2ca492c2c520c47b0f077a",
".git/objects/06/c95378c06abbd8fee5bc8558d0c8fad2c7439b": "30330bde01a4d7f719c0988cc1f8147d",
".git/objects/07/02e686853a8a51808d176eb05413f2129fbde2": "a03acd00a8b674a2dc038aef98371576",
".git/objects/10/4a4cf0cfda845d5039aecb49d3def53b8d0692": "741dbcac466ffddc738d2148eb3025ca",
".git/objects/14/ed4d5b1f09023a032c7cbf3378e83903ba2889": "c8df2cdc8a78d5d8b5599608beb517ff",
".git/objects/16/bda73259b9c8f7bdcb1e2f921fec6ee8100caa": "1052ddc60ed83d775a2cb640b2008987",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/3c7f1e9f0be8c82ea7bbf4826e3c497f769aee": "a2ce068088969b69c4dd0601b52d68e2",
".git/objects/28/8d33ec364852280f3ea5238a9d856230dc3f87": "c9a14a2745b8cfafee7b1de549eff8dc",
".git/objects/2a/7158d5ed184cf56c1c2cc9a16f085a9b2c6858": "186cea3833964e5231375efa628dea76",
".git/objects/3b/68c847135c33453d0a9d3e77e25305772958d3": "05e25be9ccac00899ee83793fabaff43",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/44/29fc791b5b0bac4a6e46a00e696a4b767633a1": "c22998c0b7ccf5692e4754297163766a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/1d7221148f60b757c1212ad98dab0a6b1dd975": "8bf770f774dd1b05527bf329a9ad3eb0",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/60ee2122a9442c8137c3164f64ffc51552c3a8": "3fa9b53bf1783019b4629da1b3270080",
".git/objects/5b/0673995b84d7e5772ed188a9f7a4b936faba54": "7e1fb8e5747848dc9389f5149c443be9",
".git/objects/65/480f211b15b596e7a81f76470bb70ac9c31b0d": "317033ea149a9f9133f61e2b211e4ee2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/b59a8969bb18c334f15b217c89d230926bfad9": "ec4c0713480f9a3ad0ab75f4bf79759f",
".git/objects/79/c89bd05042bd4fde1833f5e1d2a8881cca5947": "dfb4e93f6157e7948017dd717f09239b",
".git/objects/7f/7eb5e36c2e31daeec90491e2f286a312e61141": "c092575c21d3973f3342ac364298dc27",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/31727196d642206c0cd949ab982c94e7df3f5d": "bcc0d1be65dd9bb02c44d2ac4948b2c8",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/4d439370584363074bb4a72b6d2e9531d8a7ad": "84f2d96c31408756c950f831d988d717",
".git/objects/8e/d253a7f0d13978413c47a48e6853b01959bd0f": "246d285b1bcc0fa87c2d6ef1eaaa4432",
".git/objects/90/dd295eda2dfa946da687c5efa1105f1707bb74": "fc93d1b6fa6a7de2f8c1f18c658dbd15",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/4881290b432ff510c08d5de9c566aeae6d2224": "e53aa3525142610117fd468d99eaf477",
".git/objects/9f/7be8cd0b3b0cab1e8147b05a0e1fbafa809b49": "3cc3951d5d476d9bad4caa92ff64d571",
".git/objects/a8/84cb15fe9d331aa6ec37e3a190ffe926056c06": "e294a826a8f7ad6cbccef8f7d168f0df",
".git/objects/af/4b39a46d180747765c8c64226b5bc597eefc67": "36374572d9577a135e77ddef0a94dc8f",
".git/objects/b1/342004ff347bfe07ede780e9778cd57abe8254": "92ed81327660d60962a965a619325c96",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/e9f18d03dd3d8ad464c378e229df1415d6fbe0": "0b0001ded9115106b71a8dfd105e250b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5f15ff12d1978ff9df231983c4df13df519a4c": "c7d81ea53d28d6cef44332815a04f314",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/d00d5cbbb71424752dccb294f314aa67cb34ce": "543fc8738025a2b53a3e751d408c3219",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/fba8e18ec200204651bfc4833981d98b217f67": "8b8e8ed1ff850626e1321877e07f3d26",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7baa4a3cad4d1137dd0d86ab0afe85933a0c8a": "52e9e738d28a6a3ec9edd70421e40c21",
".git/objects/ee/63be41053efb78f8d3a46b8dce93bc39a25dd9": "18d9873f57b28424a84c662da47fa53a",
".git/objects/f0/8debc0f87972df479226955bf6e48f6fad1b85": "0cddc07f8c057e62297098ff25a691fd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/01dab6df81d9aab3bc356d699d93add163c4d1": "55aec691ed8fda2568e5de6a416077e1",
".git/objects/f7/a8f074668cdc8d48e9aa33580037868cf6065c": "8f4e146e0dc7f6a720658273fe7e16b7",
".git/objects/f7/d66da1f90e5eef7d84ea21b1c0f8fc1474a4ac": "f38cae020a4232c969e4a33317b32ef5",
".git/objects/fc/3828967fff5a01a34973f4d485b84013e51d39": "82b90b97faa2adc2c4c471ff1b7cd139",
".git/refs/heads/main": "58266e6c428888b858a3780495255731",
".git/refs/heads/master": "b46893cd75054adf0958d8cd4f374bda",
".git/refs/remotes/main/main": "b46893cd75054adf0958d8cd4f374bda",
".git/refs/remotes/main/master": "b46893cd75054adf0958d8cd4f374bda",
".git/refs/remotes/origin/main": "58266e6c428888b858a3780495255731",
"assets/AssetManifest.bin": "22d2d15ca911ad7cb91c37df4ffde312",
"assets/AssetManifest.bin.json": "a034debf0d1ca6f8d04aa693c44b35da",
"assets/AssetManifest.json": "b1a18fb45b5610baf5a4386474ee8908",
"assets/assets/images/pattern.png": "ee39cd4770de12edff4e3eaba760b6cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "92f06832882af7f857635c9a8b13e885",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/widgets_easier/assets/icons/close.png": "b1b0aaf9bb03fe64623eff1b17414551",
"assets/packages/widgets_easier/assets/icons/confirm.png": "7526857cf0f7b23c74067a40e193d470",
"assets/packages/widgets_easier/assets/icons/error.png": "1e7b4a7913e652690bfc052c5e43897a",
"assets/packages/widgets_easier/assets/icons/info.png": "5c41a5f3d1d5bd2b19b4d987449ea02e",
"assets/packages/widgets_easier/assets/icons/prohibit.png": "c98f12affdacece42f31cb2450fab3ad",
"assets/packages/widgets_easier/assets/icons/right.png": "fd7a154dd96f9286d067fac5946915da",
"assets/packages/widgets_easier/assets/icons/search.png": "a1ae8b4287c395a375d1ecbfadb55657",
"assets/packages/widgets_easier/assets/icons/success.png": "bb79c1cd592d6e82bebe82862b9c81bd",
"assets/packages/widgets_easier/assets/icons/warning.png": "acfad8e29b74cf4e61970796c1c582c3",
"assets/packages/widgets_easier/assets/images/image_loading_failed.png": "98937b7663b1aea554f3007250c9ce82",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0be5cd836e49cba4a6d60d8b2a72dc89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97397bac3e1b7868dc942f5117fefc97",
"/": "97397bac3e1b7868dc942f5117fefc97",
"main.dart.js": "7f89f664238938a3934af7d42caaa0b6",
"manifest.json": "d154ead3f9629e6c6f93ada98b5cb654",
"version.json": "6df3baa50320dfd25948e354c4ffea9d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
