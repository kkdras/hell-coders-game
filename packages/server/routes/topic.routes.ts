import { TopicController } from '../controllers/topic.controller'
import { Router } from 'express'

const routes = Router()
  .get('/', TopicController.findAll)
  .post('/create', TopicController.create)
  .get('/:id/comments', TopicController.getAllComments)

const router = Router().use('/topics', routes)

export { router as topicRouter }
