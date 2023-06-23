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
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { AddReply } from '../AddReply/AddReply'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/rootReducer'
import { AppStoreDispatch } from '../../../../store'
import { getCommentReplyes } from '../../../../store/forum/actions'

export function CommentAccordeon(comment?: IComment) {
  const lightOrange = deepOrange[400]
  const [showAddReply, setShowAddReply] = useState<boolean>(false)
  const dispatch = useDispatch<AppStoreDispatch>()

  const { user } = useSelector((state: RootState) => state.user)

  const { replyes } = useSelector((state: RootState) => state.forum)
  const commentReplyes = comment && comment?.id && replyes[comment?.id] ? replyes[comment?.id] : []


  useEffect(() => {
    if (comment && comment?.id)
      dispatch(getCommentReplyes(comment.id))
  }, [])


  if (!comment || !comment?.id) return null;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Accordion sx={{ borderRadius: '5%' }} key={comment.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content">
              <Grid container spacing={2} color={'text.primary'}>
                <Grid item xs={10}>
                  <Typography>{comment.title}</Typography>
                </Grid>
                
                  <Grid item xs={2} >
                  {
                  commentReplyes.length &&
                    <Typography pt={2}>{commentReplyes.length}</Typography>}
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
          </Accordion></Grid>
        <Grid item xs={1}>
          <IconButton
            color="success"
            onClick={e => {
              e.preventDefault()
              setShowAddReply(true)
            }}>
            <AddIcon />
          </IconButton>
        </Grid></Grid>
      {showAddReply && user && <AddReply showAddReply={showAddReply} setShowAddReply={setShowAddReply} commentId={comment.id} authorLogin={user?.login} />}
    </>
  )
}
