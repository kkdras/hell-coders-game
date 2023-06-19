import { Grid, Typography, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { topics } from './const'
import { ArrowBack } from '@mui/icons-material'
import { TopicAccordeon } from './components/TopicAccordeon/TopicAccordeon'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { AddTopic } from './components/AddTopic/AddTopic'

export function Forum() {
  const navigate = useNavigate()
  // todo получаем данные из state
  // const { topics } = useSelector((state: RootState) => state.forum)
  const [showAddTopic, setShowAddTopic] = useState<boolean>(false);


  useEffect(() => {
    document.title = 'Форум'
  }, [])

  /*  todo получаем данные с сервера - 
      useEffect(() => {
      // id и названия топиков в формате ITopic[]
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
        <Grid item xs={11}>
          <Typography pl={2}>ТОПИКИ</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            color="success"
            onClick={e => {
              e.preventDefault()
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
