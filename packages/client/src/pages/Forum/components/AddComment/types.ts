import { Dispatch, SetStateAction } from 'react'

export interface AddCommentForm {
  content: string
}

export interface AddCommentProps {
  showAddComment: boolean
  setShowAddComment: Dispatch<SetStateAction<boolean>>
  topicId: number
}
