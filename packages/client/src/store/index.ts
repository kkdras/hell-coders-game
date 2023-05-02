import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: rootReducer,
})

export type AppStoreDispatch = typeof store.dispatch
