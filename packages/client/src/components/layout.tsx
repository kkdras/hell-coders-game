import { Container, AppBar, Toolbar, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawler } from './drawer'
import { toggleDrawler } from '../store/app/slice'
import { useDispatch } from 'react-redux'

export function Layout() {
  const dispatch = useDispatch()

  return (
    <Box>
      <Drawler />
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ padding: '0 !important' }}>
            <IconButton
              onClick={() => dispatch(toggleDrawler())}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </Box>
  )
}
