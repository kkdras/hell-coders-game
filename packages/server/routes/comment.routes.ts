import { CommentController } from '../controllers/comment.controller'
import { Router } from 'express'
import { ReactionController } from '../controllers/reaction.controller'

const reactionRouter = Router()
  .post('/', ReactionController.createCommentReaction)
  .delete('/', ReactionController.deleteReaction)
  .put('/', ReactionController.updateReaction)

export const commentRouter = Router()
  .post('/', CommentController.create)
  .get('/:id/replies', CommentController.getCommentsReply)
  .use('/:id/reaction', reactionRouter)
