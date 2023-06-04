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

interface Props {
  path: string
}
const cache = createEmotionCache()

export const render = ({ path }: Props) => {
  return renderToString(
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
}
