'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e303b1dd87ef1a8e4f07f6f9beb1a626",
".git/config": "47fffcc49ffdb829b7cd64b2d22fc482",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "387f27c6b9e1142719fc18c4dd9b49c4",
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
".git/index": "a7ea58baf3e5838cebc88d5081ab0270",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c7cb72b299b4254ee3558cf3f042f02",
".git/logs/refs/heads/main": "d30ba62f316bd766b82106d0f4a92916",
".git/logs/refs/remotes/origin/main": "e05bbf64a5b687c3560a0ddb7f56cc42",
".git/objects/02/791c0655577af050908247e2f08e7ca1af8264": "b03165d0a099e08fe398d44e288a5d8f",
".git/objects/03/449a8de554cf359a29d04cc526c925723df9ed": "fa2fe515b109a62eff745c5fb74f3b47",
".git/objects/10/4a4cf0cfda845d5039aecb49d3def53b8d0692": "741dbcac466ffddc738d2148eb3025ca",
".git/objects/10/5754ddf7f52488469585a2d8f169f9b3c3ab1b": "f6aa030460ac2024a32f1b2c69933931",
".git/objects/10/68142bf4dc49a0b521650fbeaa66a26b4ae643": "9a8640ef183ea348b744b901aba0f465",
".git/objects/14/ed4d5b1f09023a032c7cbf3378e83903ba2889": "c8df2cdc8a78d5d8b5599608beb517ff",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/3c7f1e9f0be8c82ea7bbf4826e3c497f769aee": "a2ce068088969b69c4dd0601b52d68e2",
".git/objects/23/393063946f90340d88ea610df176409e621136": "1cafb7c4f0286d0d598ca6dae7459558",
".git/objects/2a/7158d5ed184cf56c1c2cc9a16f085a9b2c6858": "186cea3833964e5231375efa628dea76",
".git/objects/3b/1762514149a5f7165e6a2d3b680831a72d6995": "78ac3836a97a253ccc907cd39a994798",
".git/objects/3b/68c847135c33453d0a9d3e77e25305772958d3": "05e25be9ccac00899ee83793fabaff43",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/41/b9d28529ef94586eac27452d5d00733f54b74a": "d365bf21a586d6a7aa153f7f0a506c12",
".git/objects/44/29fc791b5b0bac4a6e46a00e696a4b767633a1": "c22998c0b7ccf5692e4754297163766a",
".git/objects/44/bd57db76f6f7abe40e0fcadfca5bbf070a83bf": "d2e4e216cc2a3969c2d4f17125b6b0cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/1d7221148f60b757c1212ad98dab0a6b1dd975": "8bf770f774dd1b05527bf329a9ad3eb0",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/60ee2122a9442c8137c3164f64ffc51552c3a8": "3fa9b53bf1783019b4629da1b3270080",
".git/objects/5b/0673995b84d7e5772ed188a9f7a4b936faba54": "7e1fb8e5747848dc9389f5149c443be9",
".git/objects/64/cfeadf8667b1b27ada724679f3e35f1e32eb4a": "acd8aa8b1617e4c54e2e4a91792bde85",
".git/objects/65/5c794c85ae5000ef855dca9d69e5e44d52f222": "09be2848152c7b9abba57dfe3dd0ba23",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/c40f17f9f6720b76e04c843d2414d9474243b6": "3e854a4f25fa759eff01c6b7a3edba9d",
".git/objects/6e/e67402718afb8e5cb984fac73eb6616889e863": "d771e7fd4a1a5c5da6b7feaa5d4a9a66",
".git/objects/70/42a549f70b68347bc889dbde45e9fc2fd66b8a": "e4b7c033e430101206fc02caeac0d72a",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/6a14464596d0d6ce018bdb989248c22b6ef55c": "d8dbe71f21347082a761636deb1c5601",
".git/objects/75/e9f237f3a61da582cd7a7611c83420a7098247": "cec732cde1fa7a753e7731245d7f7588",
".git/objects/79/c89bd05042bd4fde1833f5e1d2a8881cca5947": "dfb4e93f6157e7948017dd717f09239b",
".git/objects/7f/7eb5e36c2e31daeec90491e2f286a312e61141": "c092575c21d3973f3342ac364298dc27",
".git/objects/86/e2c8c126d6776e9ae40da81b0a39b48f9c1dce": "e015e11a991fe9d264979c33dba1e0cd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/31727196d642206c0cd949ab982c94e7df3f5d": "bcc0d1be65dd9bb02c44d2ac4948b2c8",
".git/objects/8b/4c2224dc320e1fa727bd7371d3840f5cd97ed8": "8012bbaf1db95a61406035434265ff06",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/4d439370584363074bb4a72b6d2e9531d8a7ad": "84f2d96c31408756c950f831d988d717",
".git/objects/8e/d253a7f0d13978413c47a48e6853b01959bd0f": "246d285b1bcc0fa87c2d6ef1eaaa4432",
".git/objects/8f/63548094eaea25cef860660041307f1dd3f12f": "8ef910a62979275d61778efae06b6305",
".git/objects/90/669fbc4542d7ef9d45d3f25b03baaf97355375": "51b361dd79c35dd310ccca599ac8c530",
".git/objects/90/dd295eda2dfa946da687c5efa1105f1707bb74": "fc93d1b6fa6a7de2f8c1f18c658dbd15",
".git/objects/91/99f469af7c9e1e1d50f1823e91419e01022ebd": "88d4cf46f4f0f57113b524d422c23e75",
".git/objects/95/d3ebd5fc3027cc53e98b0f1bd8feb166f45730": "9626b30496318e0c3b6015903ae80f74",
".git/objects/96/8a66f360f3c1b09da7a5bb76fb4c705e8e4d34": "ca6f293cd75faecfd80e4b91f90ee214",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/4881290b432ff510c08d5de9c566aeae6d2224": "e53aa3525142610117fd468d99eaf477",
".git/objects/9f/7cd09adfe56b44cf094acfdee2270613577151": "afc77f0d5cc56a2b3f06936bc0d177e5",
".git/objects/a1/be117006ebd50f4114d8eaee25115e142a21a7": "93db2ce3ae2e53040c38e05fcf4273b8",
".git/objects/a8/84cb15fe9d331aa6ec37e3a190ffe926056c06": "e294a826a8f7ad6cbccef8f7d168f0df",
".git/objects/a8/d27086983384071c6cfdb68a3a9403368b881b": "24d9730d30bbbd97aeda5458320749f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/c357c364da2fe9d37ba606fc30d4c487d23fbf": "98ae91695bcb110d71f8bfd1383e4a82",
".git/objects/c2/988291e90d7911835bdf9b0992b962a12b880c": "d29ee0424794c22c0f625951041543e4",
".git/objects/c4/9c3a0ae5087345c7e7d59c9faa2e185780f545": "b14f7ce1a5b5791120dc6c45ca5995f8",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/8e6d588b699fe716942cf783c7ec4c972fb49a": "0494abc2e51b6e3bb1fee6a192a64cce",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/4b55164b9ed5558ec280d9b5a6bc306237d88e": "bf1585ba2ac98b935849c99af9e732f7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5f15ff12d1978ff9df231983c4df13df519a4c": "c7d81ea53d28d6cef44332815a04f314",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/d00d5cbbb71424752dccb294f314aa67cb34ce": "543fc8738025a2b53a3e751d408c3219",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b0a6293b30c663d43deac61f69ab023511bfbd": "f154e8f69b84a58a42e909b9649f2dcf",
".git/objects/ed/7baa4a3cad4d1137dd0d86ab0afe85933a0c8a": "52e9e738d28a6a3ec9edd70421e40c21",
".git/objects/ee/63be41053efb78f8d3a46b8dce93bc39a25dd9": "18d9873f57b28424a84c662da47fa53a",
".git/objects/f0/8debc0f87972df479226955bf6e48f6fad1b85": "0cddc07f8c057e62297098ff25a691fd",
".git/objects/f0/e29481520ade34b41f98085480e6ccaca16fd2": "0c52749b30c755e13c2ef9810b241468",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/2fbba2a5ac2bb2869ff613ffb60b38c89e3a6a": "aa316f41b96091adcfd28b27e937fef0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/01dab6df81d9aab3bc356d699d93add163c4d1": "55aec691ed8fda2568e5de6a416077e1",
".git/objects/fc/3828967fff5a01a34973f4d485b84013e51d39": "82b90b97faa2adc2c4c471ff1b7cd139",
".git/objects/fc/ac79d132a504dbc5674c0f9532dc13a812c733": "04226dd90c68bd27b0af7900ba576b3c",
".git/objects/fe/ab9f5e039ece388fcca79adc912ca1aa1549b9": "5c4dabcec69eee3b5757cd042a882090",
".git/ORIG_HEAD": "cdecd5204835f98fba161d7eb6330fe5",
".git/refs/heads/main": "466df6f7331e5ef8d9e1851c3965a3ce",
".git/refs/remotes/origin/main": "466df6f7331e5ef8d9e1851c3965a3ce",
"assets/AssetManifest.bin": "22d2d15ca911ad7cb91c37df4ffde312",
"assets/AssetManifest.bin.json": "a034debf0d1ca6f8d04aa693c44b35da",
"assets/AssetManifest.json": "b1a18fb45b5610baf5a4386474ee8908",
"assets/assets/images/pattern.png": "ee39cd4770de12edff4e3eaba760b6cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "1e0624d37a112b4845eecf35479e092a",
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
"flutter_bootstrap.js": "fe48a1512e0ec0a77144b3dee5dc9598",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "97397bac3e1b7868dc942f5117fefc97",
"/": "97397bac3e1b7868dc942f5117fefc97",
"main.dart.js": "1426e9a451e873f8cb67d116a4e8c831",
"manifest.json": "d154ead3f9629e6c6f93ada98b5cb654",
"README.md": "e18ffa2487cea40aaa3147b6746bf9c6",
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
