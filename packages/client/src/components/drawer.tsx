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
import { logout } from '../store/auth/slice'
import { clearUser } from '../store/user/slice'

export const Drawler = () => {
  const { isUserAuthorized } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { isDrawlerOpened } = useSelector((state: RootState) => state.app)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearUser())
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
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.FORUM}>
                <ListItemText sx={{ color: 'text.primary' }} primary="Forum" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.PROFILE}>
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Profile"
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
