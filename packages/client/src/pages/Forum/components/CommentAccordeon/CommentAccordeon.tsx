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
import { commentReplyes } from '../../const'

export function CommentAccordeon(comment: IComment) {
  const lightOrange = deepOrange[400]

  // const { replyes } = useSelector((state: RootState) => state.forum)
  // const  commentReplyes = replyes[comment.id]


  /*  useEffect(() => {
     getRelpyes(comment.id);  
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
            <Typography>{commentReplyes?.length}</Typography>
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
          {commentReplyes.length &&
            <TableBody sx={{ backgroundColor: lightOrange }}>
              {commentReplyes.map(
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
