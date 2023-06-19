import { createSlice } from '@reduxjs/toolkit'
import { postYandexOAuth } from './actions'

import { RejectReason } from './types'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
  extraReducers: builder => {

    builder.addCase(postYandexOAuth.fulfilled, () => {
      localStorage.setItem('auth', 'userAuthorized')
    })
    builder.addCase(postYandexOAuth.rejected, (state, action) => {
      if (
        (action.payload?.data as RejectReason).reason ===
        'User already in system'
      ) {
        localStorage.setItem('auth', 'userAuthorized')
      } else {
        localStorage.removeItem('auth')
        alert('Аккаунт Яндекс не подтвержден')
      }
    })

  },
})
