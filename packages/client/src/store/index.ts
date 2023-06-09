import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

let preloadedState
if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
}
export const store = configureStore({
  preloadedState,
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type AppStoreDispatch = typeof store.dispatch
