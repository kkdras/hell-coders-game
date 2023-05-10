import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../App'

export function Start() {
  const navigate = useNavigate()

  const [secondsBefore, setSecondsBefore] = useState<number>(3)

  useEffect(() => {
    document.title = 'Старт игры!'
  }, [])

  useEffect(() => {
    if (secondsBefore > 0) {
      const timer = setTimeout(() => {
        setSecondsBefore(secondsBefore - 1)
        return () => clearTimeout(timer)
      }, 1000)
    } else {
      navigate(RouteNames.GAME)
    }
  }, [secondsBefore])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 40,
      }}>
      <Box sx={{ color: 'text.primary', margin: 2 }}>
        <Typography variant="h3">GAME STARTING...</Typography>
      </Box>
      <Box sx={{ color: 'error.main', margin: 2 }}>
        <Typography variant="h3">{secondsBefore}</Typography>
      </Box>
    </Box>
  )
}
