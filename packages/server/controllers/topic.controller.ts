import * as uuid from 'uuid'
import { db } from '../models'
import type { Request, Response } from 'express'
const Topic = db.topics

export class TopicController {
  static create(req: Request, res: Response) {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }

    // Create a Topic
    const topic = {
      id: uuid.v4(),
      title: req.body.title,
    }

    // Save Topic in the database
    Topic.create(topic)
      .then(data => {
        res.send(data)
      })
      .catch(() => {
        res.status(500).send({
          message: 'Some error occurred while creating the Topic.',
        })
      })
  }

  static findAll(_req: any, res: any) {
    Topic.findAll()
      .then((data: any) => {
        res.send(data)
      })
      .catch((err: { message: any }) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while retrieving topics.',
        })
      })
  }
}
