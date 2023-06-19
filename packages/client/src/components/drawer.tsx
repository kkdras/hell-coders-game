import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { toggleDrawler } from '../store/app/slice'
import { Link } from 'react-router-dom'
import { RouteNames } from '../App'
import { RootState } from '../store/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../store/user/slice'
import { AppStoreDispatch } from '../store'
import AuthController from '../controllers/AuthController'

export const Drawler = () => {
  const isUserAuthorized =
    typeof window !== 'undefined' && localStorage.getItem('auth')
  const dispatch = useDispatch<AppStoreDispatch>()
  const { isDrawlerOpened } = useSelector((state: RootState) => state.app)

  const handleLogout = () => {
    AuthController.logout()
    dispatch(clearUser())
    localStorage.removeItem('auth')
  }

  return (
    <Drawer
      onKeyDown={() => dispatch(toggleDrawler())}
      onClose={() => dispatch(toggleDrawler())}
      anchor="right"
      open={isDrawlerOpened}>
      <Box sx={{ width: 250 }}>
        <List>
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.MAIN}>
                <ListItemText sx={{ color: 'text.primary' }} primary="Home" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.LEADERBOARD}>
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Leaderboard"
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.GAME}>
                <ListItemText sx={{ color: 'text.primary' }} primary="Game" />
              </Link>
            </ListItemButton>
          </ListItem>
          {isUserAuthorized && (
            <ListItem>
              <ListItemButton>
                <Link to={RouteNames.FORUM}>
                  <ListItemText sx={{ color: 'text.primary' }} primary="Forum" />
                </Link>
              </ListItemButton>
            </ListItem>)}
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.PROFILE}>
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary={isUserAuthorized ? 'Profile' : 'Войти'}
                />
              </Link>
            </ListItemButton>
          </ListItem>
          {!isUserAuthorized && (
            <ListItem>
              <ListItemButton>
                <Link to={RouteNames.REGISTER}>
                  <ListItemText
                    sx={{ color: 'text.primary' }}
                    primary="Register"
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          )}
          {isUserAuthorized && (
            <ListItem>
              <ListItemButton onClick={handleLogout}>
                <ListItemText sx={{ color: 'text.primary' }} primary="Выход" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  )
}
