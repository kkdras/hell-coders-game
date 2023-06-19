import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { IComment } from '../../../../store/forum/types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReplyesTable } from '../ReplyesTable/ReplyesTable'
import { deepOrange } from '@mui/material/colors'
import { RootState } from '../../../../store/rootReducer'
import { useSelector } from 'react-redux'

export function CommentAccordeon(comment: IComment) {
  const lightOrange = deepOrange[400]

  // const { topics } = useSelector((state: RootState) => state.forum)
  //const replyes = topics.find(item => item.id === comment.topicId)?.comments.find(item => item.id === comment.id)?.replyes;

  /*  useEffect(() => {
     getComment(comment.id);
  }, []) */

  return (
    <Accordion sx={{ borderRadius: '5%' }} key={comment.id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content">
        <Grid container spacing={2} color={'text.primary'}>
          <Grid item xs={9}>
            <Typography>{comment.title}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>{comment.replyes?.length}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} sx={{ color: 'blue' }}>
                Сообщение
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{ color: 'blue' }}>
                Автор
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{ color: 'blue' }}>
                Время
              </TableCell>
            </TableRow>
          </TableHead>
          {comment.replyes?.length &&
            <TableBody sx={{ backgroundColor: lightOrange }}>
              {comment.replyes.map(
                reply =>
                (
                  <ReplyesTable
                    key={reply.id}
                    {...reply}
                  />
                )
              )}
            </TableBody>}
        </Table>
      </AccordionDetails>
    </Accordion>
  )
}
