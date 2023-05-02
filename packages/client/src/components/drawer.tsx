import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '../store'
import { toggleDrawler } from '../store/appSlice'
import { isDrawlerOpenSelector } from '../store/selector'
import { Link } from 'react-router-dom'
import { RouteNames } from '../App'

export const Drawler = () => {
  const dispatch = useAppDispatch()
  const isDrawlerOpen = useAppSelector(isDrawlerOpenSelector) as boolean

  return (
    <Drawer
      onKeyDown={() => dispatch(toggleDrawler())}
      onClose={() => dispatch(toggleDrawler())}
      anchor="right"
      open={isDrawlerOpen}>
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
                  primary="leaderboard"
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
              <Link to="/forum">
                <ListItemText sx={{ color: 'text.primary' }} primary="Forum" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to="/forum">
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
        </List>
      </Box>
    </Drawer>
  )
}
