export interface ICommentAndReply {
  id: number
  topicId: number
  parentId?: number
  userId?: number
  content: string
}

export interface ITopic {
  id: number
  title?: string
}

export interface TopicRequestData {
  title: string
}

export interface CommentAndReplyRequestData {
  content: string
  userId: number
  topicId: number
  parentId?: number
}

export interface GetCommentRequest {
  id: number
  userId: number
}

export interface GetReliesRequest {
  commentId: number
  userId: number
}
