import { IComment, IReply, ITopic } from './types'

export interface forumState {
  topics: ITopic[]
  comments: IComment[]
  replyes: IReply[]
}

export const initialState: forumState = {
  topics: [],
  comments: [],
  replyes: []
}
