import { createSlice } from '@reduxjs/toolkit'
import { getYandexServiceId, logout, postAuth, postYandexOAuth } from './actions'
import { authState, initialState } from './const'
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
      if (
        (action.payload?.data as RejectReason).reason ===
        'User already in system'
      )
        state.isUserAuthorized = true
      else {
        state.isUserAuthorized = false
        alert('Неверный логин или пароль')
      }
    })

    builder.addCase(getYandexServiceId.fulfilled, (state, action) => {
      state.service_id = action.payload.data.service_id
    })

    builder.addCase(postYandexOAuth.fulfilled, state => {
      state.isUserAuthorized = true
    })
    builder.addCase(postYandexOAuth.rejected, (state, action) => {
      if (
        (action.payload?.data as RejectReason).reason ===
        'User already in system'
      )
        state.isUserAuthorized = true
      else {
        state.isUserAuthorized = false
        alert('Аккаунт Яндекс не подтвержден')
      }
    })
    builder.addCase(logout.fulfilled, (state) => {
      state.isUserAuthorized = false
    })
  },
})
