import { Themes } from '../../themes'

export interface ThemeState {
  theme: string
}

export const initialState: ThemeState = {
  theme: Themes.LightTheme,
}
