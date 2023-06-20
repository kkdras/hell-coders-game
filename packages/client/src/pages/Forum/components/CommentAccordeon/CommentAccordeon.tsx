import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  IconButton,
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
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { AddReply } from '../AddReply/AddReply'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/rootReducer'

export function CommentAccordeon(comment: IComment) {
  const lightOrange = deepOrange[400]
  const [showAddReply, setShowAddReply] = useState<boolean>(false)
  const { user } = useSelector((state: RootState) => state.user)

  // const { replyes } = useSelector((state: RootState) => state.forum)
  // const  commentReplyes = replyes[comment.id]


  /*  useEffect(() => {
     getRelpyes(comment.id);  
     
  }, []) */

  return (
    <>
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
          <Grid item xs={1}>
            <IconButton
              color="success"
              onClick={e => {
                e.preventDefault()
                setShowAddReply(true)
              }}>
              <AddIcon />
            </IconButton>
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
      {showAddReply && user && <AddReply showAddReply={showAddReply} setShowAddReply={setShowAddReply} commentId={comment.id} authorLogin={user?.login} />}
    </>
  )
}
