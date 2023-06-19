export interface IReply {
  id: number
  commentId: number
  text?: string
  authorLogin: string
  time: string
}

export interface IComment {
  id: number
  topicId: number
  title?: string
  replyes?: IReply[]
}

export interface ITopic {
  id: number
  title?: string
  comments: IComment[]
}
