import { createSlice } from '@reduxjs/toolkit'
import { getYandexServiceId, logout, postAuth, postYandexOAuth } from './actions'
import { initialState } from './const'
import { RejectReason } from './types'

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(postAuth.fulfilled, () => {      
      localStorage.setItem('auth', "userAuthorized")
    })
    builder.addCase(postAuth.rejected, (_, action) => {
      if (
        (action.payload?.data as RejectReason).reason ===
        'User already in system'
      ) {     
        localStorage.setItem('auth', "userAuthorized")
      }
      else {       
        localStorage.removeItem('auth')
        alert('Неверный логин или пароль')
      }
    }
    )

    builder.addCase(getYandexServiceId.fulfilled, (state, action) => {
      state.serviceId = action.payload.data.service_id
    })

    builder.addCase(postYandexOAuth.fulfilled, () => {
      
        
        localStorage.setItem('auth', "userAuthorized")
      

    })
    builder.addCase(postYandexOAuth.rejected, (state, action) => {
      if (
        (action.payload?.data as RejectReason).reason ===
        'User already in system'
      ) {
        
        localStorage.setItem('auth', "userAuthorized")
      }
      else {
      
        localStorage.removeItem('auth')
        alert('Аккаунт Яндекс не подтвержден')
      }
    })
    builder.addCase(logout.fulfilled, () => {      
      localStorage.removeItem('auth')
    })
  },
})
