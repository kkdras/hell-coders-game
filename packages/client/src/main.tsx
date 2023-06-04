import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { Provider } from 'react-redux'
import { store } from './store'
import { startServiceWorker } from './serviceWorker'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from './utils/createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'

const cache = createEmotionCache()

startServiceWorker()

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </BrowserRouter>
)
