import { Dispatch, SetStateAction } from 'react'

export interface AddCommentForm {
  title: string
}

export interface AddCommentProps {
  showAddComment: boolean
  setShowAddComment: Dispatch<SetStateAction<boolean>>
  topicId: string
}
