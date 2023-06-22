import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { ITopic } from '../../../../store/forum/types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CommentAccordeon } from '../CommentAccordeon/CommentAccordeon'
import { lightBlue } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useState } from 'react'
import { AddComment } from '../AddComment/AddComment'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/rootReducer'
import { AppStoreDispatch } from '../../../../store'
import { getTopicComments } from '../../../../store/forum/actions'
import { topicComments } from '../../const'

export function TopicAccordeon(topic?: ITopic) {
  const lightLightBlue = lightBlue[50]
  const [showAddComment, setShowAddComment] = useState<boolean>(false)
  const dispatch = useDispatch<AppStoreDispatch>()

  const { comments } = useSelector((state: RootState) => state.forum)
  const topicComments = topic && topic.id && comments[topic.id]? comments[topic.id] : []

  useEffect(() => {
    if (topic && topic.id)
      dispatch(getTopicComments(topic.id))
  }, [])

  if (!(topic && topic.id)) return null

  return (
    <>
      <Grid container spacing={2} color={'text.primary'}>
        <Grid item xs={11}>
          <Accordion
            sx={{ backgroundColor: lightLightBlue, borderRadius: '5%' }}
            key={topic.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content">
              <Grid container spacing={2} color={'text.primary'}>
                <Grid item xs={9}>
                  <Typography pt={1}>{topic.title}</Typography>
                </Grid>
                <Grid item xs={1}>
                  {topicComments.length &&  <Typography pt={1}>{topicComments.length}</Typography>}                 
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                spacing={2}
                pb={2}
                color={'text.secondary'}
                fontStyle={'italic'}>
                <Grid item xs={10}>
                  <Typography pl={2} variant="body2">
                    Комментарии
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography pl={8} variant="body2">
                    Ответы
                  </Typography>
                </Grid>                
              </Grid>
              {topicComments && topicComments.map(
                comment =>
                  <CommentAccordeon
                    key={comment.id}
                    {...comment}
                  />
              )
              }
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="success"
            onClick={e => {
              e.preventDefault()
              setShowAddComment(true)
            }}>
            <AddIcon />
          </IconButton>
        </Grid></Grid>
      {showAddComment && <AddComment showAddComment={showAddComment} setShowAddComment={setShowAddComment} topicId={topic.id} />}
    </>
  )
}
