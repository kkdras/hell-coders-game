import { IComment, IReply, ITopic } from './types'

export interface forumState {
  topics: ITopic[]
  comments: Record<string, IComment[]>
  replyes: Record<string, IReply[]>
}

export const initialState: forumState = {
  topics: [],
  comments: {},
  replyes: {}
}
