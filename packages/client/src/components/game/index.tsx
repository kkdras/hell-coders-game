import styled from "@emotion/styled"
import { Box, Button } from "@mui/material"
import { useRef } from "react"
import { useGame } from "./hooks"

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
        alignItems: 'start'
      }}
    >
      <StyledCanvas width={340} height={680} ref={refGame}/>
      <Button
        onClick={() => game.current?.start()}
        variant='contained'
        sx={{ ml: 4 }}
      >
        Начать игру
      </Button>
    </Box>
  )
}
