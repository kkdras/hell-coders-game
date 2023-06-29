import { CommentController } from '../controllers/comment.controller'
import { Router } from 'express'
import { ReactionController } from '../controllers/reaction.controller'
import { reactionMiddleware } from '../middlewares/reaction.middleware'

const reactionRouter = Router({ mergeParams: true })
  .use(reactionMiddleware)
  .post('/create', ReactionController.createCommentReaction)
  .delete('/delete', ReactionController.deleteReaction)
  .put('/update', ReactionController.updateReaction)

const commentsRouter = Router()
  .post('/create', CommentController.create)
  .get('/:commentId/replies', CommentController.getCommentsReply)

const router = Router().use(
  '/comments',
  commentsRouter,
  Router().use('/:commentId/reaction', reactionRouter)
)

export { router as commentRouter }
