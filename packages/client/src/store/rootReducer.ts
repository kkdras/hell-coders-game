import { combineReducers } from '@reduxjs/toolkit'
import { appSlice } from './app/slice'
import { authSlice } from './auth/slice'
import { userSlice } from './user/slice'
import { themeSlice } from './theme/slice'

export const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
