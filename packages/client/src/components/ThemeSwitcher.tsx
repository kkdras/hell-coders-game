import { Themes } from '../themes'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Switch } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { RootState } from '../store/rootReducer'
import { getTheme, postTheme } from '../store/theme/actions'
import { useEffect } from 'react'

export const ThemeSwitcher = () => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const { user } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(getTheme(user.id))
    }
  }, [dispatch, user])

  const handleChange = () => {
    const newTheme =
      theme === Themes.LightTheme ? Themes.DarkTheme : Themes.LightTheme
    if (user) {
      dispatch(postTheme({ userId: String(user.id), theme: newTheme }))
    }
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
