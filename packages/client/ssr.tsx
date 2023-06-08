import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './src/theme'
import { store } from './src/store'
import App from './src/App'
import createEmotionCache from './src/utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionServer from '@emotion/server/create-instance'

interface Props {
  path: string
}

export const render = ({ path }: Props) => {
  const cache = createEmotionCache()
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache)

  const appHtml = renderToString(
    <StaticRouter location={path}>
      <Provider store={store}>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </StaticRouter>
  )
  const emotionChunks = extractCriticalToChunks(appHtml)
  const emotionCss = constructStyleTagsFromChunks(emotionChunks)
  return { appHtml, emotionCss }
}
