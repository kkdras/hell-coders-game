const CACHE_NAME = 'my-site-cache-v6'

const URLS = [
  '/',
  '/leaderboard',
  '/game',
  '/error404',
  '/error500',
  '/forum',
  '/profile',
  '/register',
  '/src/image/500.png',
  '/src/image/404.png',
  '/src/image/avatar1.png',
  '/src/image/gameover.png',
  '/tetris.jpeg',
]

this.addEventListener('install', event => {
  console.log('install')

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(URLS)
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  )
})

this.addEventListener('fetch', event => {
  console.log('fetch')

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }

      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache)
        })
        return response
      })
    })
  )
})

this.addEventListener('activate', function (event) {
  console.log('activate')

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => {
            true
          })
          .map(name => caches.delete(name))
      )
    })
  )
})
