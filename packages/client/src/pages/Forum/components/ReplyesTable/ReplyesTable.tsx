import { TableCell, TableRow } from '@mui/material'
import { ICommentAndReply } from '../../../../store/forum/types'

export function ReplyesTable(reply?: ICommentAndReply) {
  if (!reply) return null

  return (
    <TableRow key={reply.id}>
      <TableCell align="left" colSpan={6}>
        {reply.content}
      </TableCell>
    </TableRow>
  )
}
