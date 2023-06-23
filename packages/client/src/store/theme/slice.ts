import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './const'
import { getTheme, postTheme } from './actions'
import { AxiosResponse } from 'axios'
import { ThemeResponse } from './types'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getTheme.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<ThemeResponse>>) => {
        state.theme = payload.data.theme
      }
    )
    builder.addCase(
      postTheme.fulfilled,
      (state, { payload }: PayloadAction<AxiosResponse<{ theme: string }>>) => {
        state.theme = payload.data.theme
      }
    )
  },
})
