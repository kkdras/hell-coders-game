import { createTheme, Theme } from '@mui/material/styles'

export enum Themes {
  LightTheme = 'lightTheme',
  DarkTheme = 'darkTheme'
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

export const themes: Record<string, Theme> = {
  darkTheme,
  lightTheme
}
