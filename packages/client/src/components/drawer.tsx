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
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'

export const Drawler = () => {
  const dispatch = useDispatch()
  
  const { isDrawlerOpened } = useSelector((state: RootState) => state.app )

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
              <Link to={RouteNames.BLOG}>
                <ListItemText sx={{ color: 'text.primary' }} primary="Blog" />
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
          <ListItem>
            <ListItemButton>
              <Link to="/error404">
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Error 404"
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to="/error500">
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Error 500"
                />
              </Link>
            </ListItemButton>
          </ListItem>
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
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.START}>
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Start"
                />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to={RouteNames.AUTH}>
                <ListItemText
                  sx={{ color: 'text.primary' }}
                  primary="Auth"
                />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
