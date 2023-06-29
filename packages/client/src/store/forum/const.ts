import { ICommentAndReply, ITopic } from './types'

export interface forumState {
  topics: ITopic[]
  comments: Record<number, ICommentAndReply[]>
  replyes: Record<number, ICommentAndReply[]>
}

export const initialState: forumState = {
  topics: [],
  comments: {},
  replyes: {}
}
