import type { Response } from 'express'
import { Reaction } from '../models'
import { UniqueConstraintError, ValidationError } from 'sequelize'
import type { IReaction, Request, WithId } from './types'

export class ReactionController {
  static async createCommentReaction(req: Request<IReaction>, res: Response) {
    const commentId = Number(req.params.id)
    const userId = Number(req.body.userId)

    try {
      if (isNaN(commentId) || isNaN(userId)) {
        res.status(400).send({ message: 'Invalid data' })
        return
      }

      const rawNewReaction = {
        type: req.body.type,
        userId,
        commentId
      }

      const reaction = await Reaction.create(rawNewReaction)

      res.send(reaction.toJSON())
    } catch (e) {
      console.error(e)

      if (e instanceof UniqueConstraintError) {
        // обработка ошибки валидации данных модели
        res.status(400).json({ message: 'Validation error' })
      } else {
        res.status(500).json({ message: 'Internal server error' })
      }
    }
  }

  static async deleteReaction(req: Request, res: Response) {
    const reactionId = Number(req.query.id)

    try {
      if (isNaN(reactionId)) {
        res.status(400).send({ message: 'Invalid id' })
        return
      }

      const reaction = await Reaction.findByPk(reactionId)

      if (!reaction) {
        res.status(400).send({ message: 'Reaction doesn\'t exist' })
        return
      }

      await reaction?.destroy()

      res.status(200).send()
    } catch (e) {
      console.error(e)

      res.status(500).json({ message: 'Internal server error' })
    }
  }

  static async updateReaction(req: Request<WithId<IReaction>>, res: Response) {
    try {
      const id = Number(req.body.id)

      const rawReaction = {
        commentId: req.body.commentId,
        userId: req.body.userId,
        type: req.body.type
      }

      if (isNaN(id)) {
        res.status(400).send({ message: 'Bad id format' })
        return
      }

      const reaction = await Reaction.findByPk(id)

      if (!reaction) {
        res.status(400).send({ message: 'Not found reaction' })
        return
      }

      await reaction.update(rawReaction)
      res.send(200)
    } catch (e) {
      console.error(e)

      if (e instanceof ValidationError) {
        // обработка ошибки валидации данных модели
        res.status(400).json({ message: e.errors[0].message })
      } else {
        res.status(500).json({ message: 'Internal server error' })
      }
    }
  }
}
