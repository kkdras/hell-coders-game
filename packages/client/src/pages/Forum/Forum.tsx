import { Grid, Typography, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { TopicAccordeon } from './components/TopicAccordeon/TopicAccordeon'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { AddTopic } from './components/AddTopic/AddTopic'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { getAllTopics } from '../../store/forum/actions'
import { AppStoreDispatch } from '../../store'

export function Forum() {
  const navigate = useNavigate()
  const { topics } = useSelector((state: RootState) => state.forum)
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false);
  const dispatch = useDispatch<AppStoreDispatch>()

  useEffect(() => {
    document.title = 'Форум'
    dispatch(getAllTopics());
  }, [])


  return (
    <Box pt={4}>
      <ArrowBack
        onClick={() => {
          navigate(-1)
        }}
      />
      <Grid container spacing={2} pt={12} pb={4} color={'blue'}>
        <Grid item xs={11}>
          <Typography pl={2}>ТОПИКИ</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="success"
            onClick={e => {
              setShowAddTopic(true)
            }}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      {topics.map(topic => (
        <TopicAccordeon
          key={topic.id}
          {...topic}
        />
      ))}
      {showAddTopic && <AddTopic showAddTopic={showAddTopic} setShowAddTopic={setShowAddTopic} />}
    </Box>
  )
}
