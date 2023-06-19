import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from '@mui/material'
import { ITopic } from '../../../../store/forum/types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { CommentAccordeon } from '../CommentAccordeon/CommentAccordeon'
import { lightBlue } from '@mui/material/colors'


export function TopicAccordeon(topic: ITopic) {
  const lightLightBlue = lightBlue[50]
  // todo получение данных
  //const { comments } = useSelector((state: RootState) => state.forum)
  // const selectedTopicComments = comments.filter((item => item.topicId === topic.id));

  /*  useEffect(() => {
     getComments();
  }, []) */


  return (
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
          {/* <Grid item xs={1}>
            //<Typography pt={1}>{selectedTopicComments.length}</Typography>
          </Grid> */}
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          spacing={2}
          pb={2}
          color={'text.secondary'}
          fontStyle={'italic'}>
          <Grid item xs={8}>
            <Typography pl={2} variant="body2">
              Комментарии
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography pl={8} variant="body2">
              Ответы
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography pl={10} variant="body2">
              Последний
            </Typography>
          </Grid>
        </Grid>
        {/*  {selectedTopicComments.map(
          comment =>
            <CommentAccordeon
              key={comment.id}
              {...comment}
            />
        )
        } */}
      </AccordionDetails>
    </Accordion>


  )
}
