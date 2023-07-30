import { Dispatch, SetStateAction } from 'react'
import { ICommentAndReply } from '../../../../store/forum/types'

export interface AddReplyForm {
  content: string
}

export interface AddReplyProps {
  showAddReply: boolean
  setShowAddReply: Dispatch<SetStateAction<boolean>>
  comment: ICommentAndReply
}
