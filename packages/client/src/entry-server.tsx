import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { Location } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import createEmotionCache from './utils/createEmotionCache'
import { store } from './store'
import App from './App'

export function render(url: string) {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  const initialState = store.getState()
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </StaticRouter>
  )

  const emotionChunks = extractCriticalToChunks(appHtml)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)

  return { appHtml, emotionCss, initialState }
}
