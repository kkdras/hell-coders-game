import { Grid, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { topics } from './const'
import { ArrowBack } from '@mui/icons-material'
import { TopicAccordeon } from './components/TopicAccordeon/TopicAccordeon'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'

export function Forum() {
  const navigate = useNavigate()
  // const { topics } = useSelector((state: RootState) => state.forum)


  useEffect(() => {
    document.title = 'Форум'
  }, [])

  /*  useEffect(() => {
      getAllTopics();
   }, []) */

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
      </Grid>
      {topics.map(topic => (
        <TopicAccordeon
          key={topic.id}
          {...topic}
        />
      ))}
    </Box>
  )
}
