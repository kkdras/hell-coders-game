import { ITopic } from './types'

export interface forumState {
  topics: ITopic[]
}

export const initialState: forumState = {
  topics: [],
}
