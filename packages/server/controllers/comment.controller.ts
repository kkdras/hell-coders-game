import type { Response } from 'express'
import { ValidationError } from 'sequelize'
import { Comment, Reaction } from '../models'
import type { IComment, IReaction, Request, WithId } from './types'
import { transformComments } from './utils'


export class CommentController {
  static async create(req: Request<IComment>, res: Response) {
    try {
      const comment = await Comment.create({
        content: req.body.content,
        userId: req.body.userId,
        topicId: req.body.topicId,
        parentId: req.body.parentId
      })

      res.json(comment.toJSON())
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

  static async getCommentsReply(req: Request, res: Response) {
    const parentCommentId = Number(req.params.id)
    const userId = Number(req.query.userId)

    try {
      if (isNaN(parentCommentId)) {
        res.status(400).send()
        return
      }

      const rawComments = await (Comment.findAll({
        where: {
          parentId: parentCommentId
        },
        include: {
          model: Reaction,
          required: false
        }
      })) as unknown as (IComment & { Reactions: WithId<IReaction>[] })[]

      const comments = transformComments(rawComments, userId)

      res.send(comments)
    } catch (e) {
      console.error(e)

      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
