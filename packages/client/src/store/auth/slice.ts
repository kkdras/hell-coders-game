import { createSlice } from '@reduxjs/toolkit'
import { postAuth } from './actions'
import { initialState } from './const'
import { RejectReason } from './types'

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(postAuth.fulfilled, state => {
      state.isUserAuthorized = true
    })
    builder.addCase(postAuth.rejected, (state, action) => {
      if ((action.payload?.data as RejectReason).reason  === 'User already in system')
        state.isUserAuthorized = true
      else {
        state.isUserAuthorized = false
        alert('Неверный логин или пароль')
      }
    })
  },
})
