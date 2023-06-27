import { configureStore } from '@reduxjs/toolkit'
import { rootReducer, RootState } from './rootReducer'
export type { RootState } from './rootReducer'

const isClient = typeof window !== 'undefined'

export const initStore = (initialState: Partial<RootState> = {}) => {
  let preloadedState = initialState
  if (isClient) {
    preloadedState = window.__PRELOADED_STATE__ as RootState
    delete window.__PRELOADED_STATE__
  }

  return configureStore({
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false })
  })
}

export type AppStoreDispatch = ReturnType<typeof initStore>['dispatch']
