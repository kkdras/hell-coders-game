import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './const'

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleDrawler: state => {
      state.isDrawlerOpened = !state.isDrawlerOpened
    },
  },
})

export const { toggleDrawler } = appSlice.actions
