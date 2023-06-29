import { topicRouter } from './topic.routes'
import { Router } from 'express'
import { commentRouter } from './comment.routes'

export const forumRouter = Router().use('/forum', topicRouter, commentRouter)
