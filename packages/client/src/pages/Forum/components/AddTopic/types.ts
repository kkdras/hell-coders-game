import { Dispatch, SetStateAction } from 'react'

export interface AddTopicForm {
  title: string
}

export interface AddTopicProps {
  showAddTopic: boolean
  setShowAddTopic: Dispatch<SetStateAction<boolean>>
}
