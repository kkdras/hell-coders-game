import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Box } from '@mui/material'
/* import Image from '../../images/' */
import { RouteNames } from '../../App'


export function GameOver() {
  useEffect(() => {
    document.title = 'Game Over - Tetris'
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        m: 1,
      }}>

      <Box sx={{ m: 1, mt: 3 }}>
        <h1>Game Over</h1>
      </Box>
      <Box sx={{ margin: 2 }}>
        {/*         <img src={Image} /> */}
      </Box>
      <Box sx={{ margin: 2 }}>
        <Link to={RouteNames.GAME}>
          <Button variant="contained">Start Again</Button>
        </Link>
      </Box>
      <Box sx={{ margin: 2 }}>
        <Link to="/">
          <Button variant="contained">Home Page</Button>
        </Link>
      </Box>
    </Box>
  )
}
