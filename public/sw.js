if (!self.define) {
  let e,
    n = {};
  const a = (a, s) => (
    (a = new URL(a + '.js', s).href),
    n[a] ||
      new Promise((n) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = n), document.head.appendChild(e);
        } else (e = a), importScripts(a), n();
      }).then(() => {
        let e = n[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (n[c]) return;
    let r = {};
    const t = (e) => a(e, c),
      o = { module: { uri: c }, exports: r, require: t };
    n[c] = Promise.all(s.map((e) => o[e] || t(e))).then((e) => (i(...e), r));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'd8b8d32d924cf983c5d55e7577ca2233',
        },
        {
          url: '/_next/static/QM2EHz6NqLNqKzRV2cr8a/_buildManifest.js',
          revision: '20eaebcbb9ca211c6190b10c1f8fbc0b',
        },
        {
          url: '/_next/static/QM2EHz6NqLNqKzRV2cr8a/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/215-a5930070353d5622.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/30-d34a26b390d9e4dc.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/4bd1b696-21eeec6ae99fe726.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-99fd94df910c934f.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/app/about-me/page-a8565f650efb14b9.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/app/layout-e3765684552e8861.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/app/page-00fdd2920333b204.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/framework-399706c01167a172.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/main-1728bf165231c122.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/main-app-fa8aae17d165fde4.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-720d552ff23f23f3.js',
          revision: 'QM2EHz6NqLNqKzRV2cr8a',
        },
        {
          url: '/_next/static/css/4e0175ac0bf08e8a.css',
          revision: '4e0175ac0bf08e8a',
        },
        {
          url: '/_next/static/media/4473ecc91f70f139-s.p.woff',
          revision: '78e6fc13ea317b55ab0bd6dc4849c110',
        },
        {
          url: '/_next/static/media/463dafcda517f24f-s.p.woff',
          revision: 'cbeb6d2d96eaa268b4b5beb0b46d9632',
        },
        {
          url: '/android/android-launchericon-144-144.png',
          revision: '75ffc84b68b307a0c2fd3f1a1916067a',
        },
        {
          url: '/android/android-launchericon-192-192.png',
          revision: '8dda0ad51de98900f6169f3746a8b18a',
        },
        {
          url: '/android/android-launchericon-48-48.png',
          revision: '83949f70c47df922d1d92aa968b185a0',
        },
        {
          url: '/android/android-launchericon-512-512.png',
          revision: '238712c9d82472ee6fed3bb04b93443a',
        },
        {
          url: '/android/android-launchericon-72-72.png',
          revision: 'ee75738a4de8e5cab8b615bb003551f2',
        },
        {
          url: '/android/android-launchericon-96-96.png',
          revision: '56b0bf1dc0b8d24ffb1d08b398a7dac1',
        },
        { url: '/file.svg', revision: 'd09f95206c3fa0bb9bd9fefabfd0ea71' },
        { url: '/globe.svg', revision: '2aaafa6a49b6563925fe440891e32717' },
        {
          url: '/icons/android-launchericon-144-144.png',
          revision: '9138cf96ef2f1d476a2e27b17771c5b3',
        },
        {
          url: '/icons/android-launchericon-192-192.png',
          revision: '7a045f9255c7a0a6dc3e9b18117ac790',
        },
        {
          url: '/icons/android-launchericon-48-48.png',
          revision: '7644365636ba978afdcaa3c6294cfc0a',
        },
        {
          url: '/icons/android-launchericon-512-512.png',
          revision: '4b00d5e55c76714955ae3b814f898032',
        },
        {
          url: '/icons/android-launchericon-72-72.png',
          revision: 'ab0913165b6d0a5c5b83035887fdec91',
        },
        {
          url: '/icons/android-launchericon-96-96.png',
          revision: 'f26fcebf1bf58f64f62fe5cef7900a60',
        },
        {
          url: '/icons/maskable.png',
          revision: '7a045f9255c7a0a6dc3e9b18117ac790',
        },
        { url: '/manifest.json', revision: '7ad1bce20270bbedf7fc4e9242f6d5d5' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: 'c0af2f507b369b085b35ef4bbe3bcf1e' },
        { url: '/window.svg', revision: 'a2760511c65806022ad20adf74370ff3' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: n,
              event: a,
              state: s,
            }) =>
              n && 'opaqueredirect' === n.type
                ? new Response(n.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: n.headers,
                  })
                : n,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const n = e.pathname;
        return !n.startsWith('/api/auth/') && !!n.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
