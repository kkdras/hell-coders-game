export interface IReply {
  id: string
  commentId: string
  text?: string
  authorLogin: string
  time: string
}

export interface IComment {
  id: string
  topicId: string
  title?: string
}

export interface ITopic {
  id: string
  title?: string
}
