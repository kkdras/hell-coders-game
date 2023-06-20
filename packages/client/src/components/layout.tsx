import { Container, AppBar, Toolbar, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawler } from './drawer'
import { toggleDrawler } from '../store/app/slice'
import { useDispatch } from 'react-redux'
import { ThemeSwitcher } from './ThemeSwitcher'

export function Layout() {
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(toggleDrawler())
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
      <Drawler />
      <AppBar position="static">
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Toolbar sx={{ padding: '0 !important' }}>
            <IconButton
              onClick={handleToggleMenu}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <ThemeSwitcher />
        </Container>
      </AppBar>
      <Container sx={{ flex: '1 1 auto' }}>
        <Outlet />
      </Container>
    </Box>
  )
}
