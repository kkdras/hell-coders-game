import type { Request as ExpressRequest } from 'express'

export interface TopicRequestData {
  title: string
}

export type Request<
  ReqBody = never,
  ResBody = never,
  ReqQuery = import('express-serve-static-core').Query
> = ExpressRequest<
  import('express-serve-static-core').ParamsDictionary,
  ResBody,
  ReqBody,
  ReqQuery
>

export interface ITheme {
  userId: number
  theme: string
}

export interface IRequestGetTheme extends Request {
  params: { id: string }
}

export interface IUser {
  email: string
  first_name: string
  login: string
  password: string
  phone: string
  second_name: string
}

export interface IComment {
  content: string
  userId: number
  topicId: number
  parentId?: number
}

export enum ReactionType {
  LIKE = 'like',
  DISLIKE = 'dislike'
}

export interface IReaction {
  commentId: number,
  userId: number,
  type: ReactionType
}

export type WithId<T extends object> = T & { id: number }
