import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDrawlerOpened: false,
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toggleDrawler: state => {
      state.isDrawlerOpened = !state.isDrawlerOpened
    },
  },
})

export const { toggleDrawler } = appSlice.actions

export const appReducer = appSlice.reducer
