import type { Request } from 'express'

interface ITheme {
  userId: number
  theme: string
}

export interface IRequestPostTheme extends Request {
  body: ITheme
}

export interface IRequestGetTheme extends Request {
  params: { id: string }
}
