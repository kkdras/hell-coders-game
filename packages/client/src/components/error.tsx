import { Button, Box } from '@mui/material'

interface Props {
  title: string
  img: string
  text: string
}

export default function Error(props: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 10,
      }}>
      <Box sx={{ color: 'error.main', margin: 2 }}>
        <h1>{props.title}</h1>
      </Box>
      <Box sx={{ color: 'error.main', margin: 2 }}>
        <img src={props.img} />
      </Box>
      <Box sx={{ fontSize: 20, margin: 2 }}>{props.text}</Box>
      <Box sx={{ margin: 2 }}>
        <Button variant="contained" href="/">
          HOME PAGE
        </Button>
      </Box>
    </Box>
  )
}
