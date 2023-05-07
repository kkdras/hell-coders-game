import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAuthUser, postAuth } from './actions'
import { initialState } from './const'
import { AxiosResponse } from 'axios'
import { User } from '../user/types'

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postAuth.fulfilled, state => {
      state.isUserAuthorized = true
    })
    builder.addCase(postAuth.rejected, (state, action) => {
      if (action.error.message === 'User already in system')
        state.isUserAuthorized = true
      else {
        state.isUserAuthorized = false
        alert('Неверный логин или пароль')
      }
    })
    builder.addCase(
      getAuthUser.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
        state.user = payload.data
      }
    )
  },
})
