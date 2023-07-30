import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server'
import createEmotionCache from './utils/createEmotionCache'
import { initStore, RootState } from './store'
import App from './App'

export function render(url: string, preloadedState: Partial<RootState>) {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  const store = initStore(preloadedState)

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <CacheProvider value={cache}>
          <App />
        </CacheProvider>
      </Provider>
    </StaticRouter>
  )

  const emotionChunks = extractCriticalToChunks(appHtml)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)

  return { appHtml, emotionCss, store }
}
