import { Grid, Typography, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ArrowBack } from '@mui/icons-material'
import { TopicAccordeon } from './components/TopicAccordeon/TopicAccordeon'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { AddTopic } from './components/AddTopic/AddTopic'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootReducer'
import { getAllComments, getAllTopics, getCommentsReply } from '../../store/forum/actions'
import { AppStoreDispatch } from '../../store'
import { ITopic } from '../../store/forum/types'

export function Forum() {
  const navigate = useNavigate()
  const { topics, comments } = useSelector((state: RootState) => state.forum)
  const { localUserId } = useSelector((state: RootState) => state.user)
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false)
  const dispatch = useDispatch<AppStoreDispatch>()

  useEffect(() => {
    document.title = 'Форум'
    dispatch(getAllTopics())
    if (topics && localUserId) topics.forEach((topic: ITopic) => dispatch(getAllComments({ id: topic.id, userId: localUserId })))
  }, [localUserId])

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
      {topics.length > 0 && (
        <Grid container spacing={2} pb={4} color={'red'}>
          <Grid item xs={7}>
            <Typography pl={2}>Название</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography pl={5}>Комментарии</Typography>
          </Grid>
        </Grid>
      )}
      {topics.map(topic => (
        <TopicAccordeon key={topic.id} {...topic} />
      ))}
      {showAddTopic && (
        <AddTopic
          showAddTopic={showAddTopic}
          setShowAddTopic={setShowAddTopic}
        />
      )}
    </Box>
  )
}
