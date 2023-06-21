import { Themes } from '../themes'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { RootState } from '../store/rootReducer'
import { setTheme } from '../store/theme/slice'

export const ThemeSwitcher = () => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(
      setTheme(
        theme === Themes.LightTheme ? Themes.DarkTheme : Themes.LightTheme
      )
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <LightModeIcon />
      <Switch onChange={handleChange} value={theme} color="default" />
      <DarkModeIcon />
    </Box>
  )
}
