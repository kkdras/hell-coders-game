import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box, Button, Paper } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useGame, useWatchGame } from './hooks'
import FullscreenButton from '../FullscreenButton'

const StyledCanvas = styled.canvas`
  width: 340px;
  height: 680px;
  border: 1px solid gray;
`

export const GameContainer = () => {
  const refGame = useRef<HTMLCanvasElement>(null)
  const game = useGame(refGame)

  useWatchGame(game)

  const [points, setPoints] = useState(0)

  useEffect(() => {
    game.current?.on('upPoint', (newPoints) => {
      setPoints(newPoints)
    })
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start'
      }}>
      <StyledCanvas width={340} height={680} ref={refGame} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          m: 1
        }}>
        <Paper
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30px',
            mb: 1
          }}
        >
          Points {points}
        </Paper>
        <Button onClick={() => game.current?.start()} variant="contained">
          Начать игру
        </Button>
        <Box sx={{ mt: 2 }}>
          <Link to="/">
            <Button sx={{ width: '127px' }} variant="contained">
              Home Page
            </Button>
          </Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <FullscreenButton />
        </Box>
      </Box>
    </Box>
  )
}
