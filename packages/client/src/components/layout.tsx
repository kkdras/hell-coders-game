import {
  Container,
  List,
  ListItemButton,
  Drawer,
  ListItem,
  AppBar,
  Toolbar,
  IconButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export function Layout() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box>
      <Drawer
        onKeyDown={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        anchor="right"
        open={isOpen}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem>
              <ListItemButton>
                <Link to="/">
                  <ListItemText sx={{ color: 'text.primary' }} primary="Home" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/blog">
                  <ListItemText sx={{ color: 'text.primary' }} primary="Blog" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/leadbord">
                  <ListItemText sx={{ color: 'text.primary' }} primary="Leadbord" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/game">
                  <ListItemText sx={{ color: 'text.primary' }} primary="Game" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/profile">
                  <ListItemText sx={{ color: 'text.primary' }} primary="Profile" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ padding: "0 !important" }}>
            <IconButton
              onClick={() => setIsOpen(prev => !prev)}
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
