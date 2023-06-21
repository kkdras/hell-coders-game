import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState, ThemeState } from './const'
import { Themes } from '../../themes'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, { payload }: PayloadAction<Themes>) => {
      state.theme = payload
    },
  },
})
export const { setTheme } = themeSlice.actions
