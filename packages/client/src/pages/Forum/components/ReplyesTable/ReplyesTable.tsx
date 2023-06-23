import { TableCell, TableRow } from '@mui/material'
import { IReply } from '../../../../store/forum/types'

export function ReplyesTable(reply?: IReply) {
  if (!reply) return null

  return (
    <TableRow key={reply.id}>
      <TableCell align="left" colSpan={2}>
        {reply.text}
      </TableCell>
      <TableCell align="center" colSpan={2}>
        {reply.authorLogin}
      </TableCell>
      <TableCell align="center" colSpan={2}>
        {reply.time}
      </TableCell>
    </TableRow>
  )
}
