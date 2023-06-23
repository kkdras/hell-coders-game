import { TopicController } from '../controllers/topic.controller'
import { Router } from 'express'

export const topicRouter = Router()
  .post('/postTopic', TopicController.create)
  .get('/topics', TopicController.findAll)

export default topicRouter
