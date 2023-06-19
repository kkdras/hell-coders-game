import { Grid, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { topics } from './const'
import { ArrowBack } from '@mui/icons-material'
import { TopicAccordeon } from './components/TopicAccordeon/TopicAccordeon'
import { useEffect } from 'react'

export function Forum() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Форум'
  }, [])

  return (
    <Box pt={4}>
      <ArrowBack
        onClick={() => {
          navigate(-1)
        }}
      />
      <Grid container spacing={2} pt={12} pb={4} color={'blue'}>
        <Grid item xs={8}>
          <Typography pl={2}>ТОПИКИ</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography pl={8}>КОММЕНТАРИИ</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography pl={8}>ОТВЕТЫ</Typography>
        </Grid>
      </Grid>
      {topics.map(topic => (
        <TopicAccordeon
          {...topic}
        />
      ))}
    </Box>
  )
}
