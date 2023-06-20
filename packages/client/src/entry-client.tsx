import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { startServiceWorker } from './serviceWorker'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from './utils/createEmotionCache'

startServiceWorker()

const cache = createEmotionCache()

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <CacheProvider value={cache}>
      <Provider store={store}>
        <App />
      </Provider>
    </CacheProvider>
  </BrowserRouter>
)
