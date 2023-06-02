import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import { useGame } from './hooks'
import FullscreenButton from "../FullscreenButton";

const StyledCanvas = styled.canvas`
  width: 340px;
  height: 680px;
  border: 1px solid gray;
`

export const GameContainer = () => {
  const refGame = useRef<HTMLCanvasElement>(null)
  const game = useGame(refGame)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
      }}>
      <StyledCanvas width={340} height={680} ref={refGame} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          m: 1,
        }}>
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
