import { combineReducers } from '@reduxjs/toolkit'
import { appSlice } from './app/slice'
import { authSlice } from './auth/slice'
import { userSlice } from './user/slice'

export const rootReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
