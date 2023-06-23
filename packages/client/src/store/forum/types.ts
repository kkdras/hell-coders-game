import { string } from 'yup'

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

export interface TopicRequestData {
  id: string
  title: string
  comments: Record<string, IComment[]>
}

export interface CommentRequestData {
  id: string
  title: string
  topicId: string
  replyes: Record<string, IReply[]>
}

export interface ReplyRequestData {
  id: string
  text: string
  commentId: string
  authorLogin: string
  time: string
}
