import { transformComments } from './utils'
import { Reaction } from './../models/reaction.model'
import type { Response } from 'express'
import type {
  IComment,
  IReaction,
  Request,
  TopicRequestData,
  WithId
} from './types'
import { Comment, Topic } from '../models'

export class TopicController {
  static create(req: Request<TopicRequestData>, res: Response) {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: 'Content can not be empty!'
      })
      return
    }

    // Create a Topic
    const topic = {
      title: req.body.title
    }

    // Save Topic in the database
    Topic.create(topic)
      .then(data => {
        res.send(data)
      })
      .catch((err) => {
        console.log(err)

        res.status(500).send({
          message: 'Some error occurred while creating the Topic.'
        })
      })
  }

  static findAll(_req: any, res: any) {
    Topic.findAll()
      .then((data: any) => {
        res.send(data)
      })
      .catch((err: { message: any }) => {
        console.log(err)

        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving topics.'
        })
      })
  }

  static async getAllComments(req: Request, res: Response) {
    const topicId = Number(req.params.id)
    const userId = Number(req.query.userId)
    console.log(req.params.id)

    try {
      if (isNaN(topicId)) {
        res.status(400).send()
        return
      }

      const rawComments = (await Comment.findAll({
        where: {
          topicId: topicId,
          parentId: null
        },
        include: {
          model: Reaction,
          required: false
        }
      })) as unknown as (IComment & { Reactions: WithId<IReaction>[] })[]

      console.log(rawComments)
      const comments = transformComments(rawComments, userId)

      res.send(comments)
    } catch (e) {
      console.log(e)

      res.status(500).json({ message: 'Internal server error' })
    }
  }
}
