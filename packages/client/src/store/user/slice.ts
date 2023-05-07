import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAuthUser, putAvatar, putUser } from './actions'
import { initialState } from './const'
import { AxiosResponse } from 'axios'
import { User } from './types'

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getAuthUser.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
        state.user = payload.data
      }
    )
    builder.addCase(
      putUser.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
        state.user = payload.data
      }
    )
    builder.addCase(
      putAvatar.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
        state.user = payload.data
      }
    )
  },
})
