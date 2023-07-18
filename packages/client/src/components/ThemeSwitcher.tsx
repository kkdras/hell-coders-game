import { Themes } from '../themes'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { RootState } from '../store/rootReducer'
import { postTheme } from '../store/theme/actions'
import { setTheme } from '../store/theme/slice'
import { AppStoreDispatch } from '../store'

export const ThemeSwitcher = () => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const { localUserId } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppStoreDispatch>()

  const handleChange = () => {
    const newTheme =
      theme === Themes.LightTheme ? Themes.DarkTheme : Themes.LightTheme
    if (localUserId) {
      dispatch(postTheme({ userId: String(localUserId), theme: newTheme }))
    } else {
      dispatch(setTheme(newTheme))
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
      <LightModeIcon />
      <Switch
        onChange={handleChange}
        checked={theme === Themes.DarkTheme}
        color="default"
      />
      <DarkModeIcon />
    </Box>
  )
}
