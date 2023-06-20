import { Themes } from '../../themes'

export interface ThemeState {
  theme: Themes
}

export const initialState: ThemeState = {
  theme: Themes.LightTheme,
}
