import type { NextFunction, Request, Response } from 'express'
import { Comment, User } from '../models'

export const reactionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = Number(req.query.userId)
  const commentId = Number(req.params.commentId)

  try {
    if (isNaN(userId)) {
      res.status(400).send({ message: 'Invalid user id' })
      return
    }

    const user = User.findByPk(userId)

    if (!user) {
      res.status(400).send({ message: 'User with specified id doesn\'t exist' })
      return
    }

    if (isNaN(commentId)) {
      res.status(400).send({ message: 'Invalid comment id' })
      return
    }

    const comment = Comment.findByPk(commentId)

    if (!comment) {
      res
        .status(400)
        .send({ message: 'Comment with specified id doesn\'t exist' })
      return
    }
    next()
  } catch (e) {
    console.error(e)

    res.status(500).send({ message: 'Internal server error' })
  }
}
