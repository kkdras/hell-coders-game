import { Box } from '@mui/material'
import { GameContainer } from '../../components/game'


export const Game = () => {
  return <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100%',
      alignItems: 'center',
      padding: 3
    }}
  >
    <GameContainer />
  </Box>
}
