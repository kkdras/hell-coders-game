import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  createLocalUser,
  getAuthUser,
  getUserByLogin,
  putAvatar,
  putUser
} from './actions'
import { initialState, userState } from './const'
import { AxiosResponse } from 'axios'
import { User } from './types'

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: (state: userState) => {
      state.user = null
    }
  },
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
    builder.addCase(
      createLocalUser.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
        state.localUser = payload.data
      }
    ),
      builder.addCase(
        getUserByLogin.fulfilled,
        (state, { payload }: PayloadAction<AxiosResponse<User>>) => {
          state.localUserId = payload.data.id
          state.localUser = payload.data
        }
      )
  }
})
export const { clearUser } = userSlice.actions
