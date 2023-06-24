import type { Response } from 'express'
import { db } from '../models'
import type { IRequestGetTheme, IRequestPostTheme } from './types'

const Theme = db.themes

export const postTheme = async (req: IRequestPostTheme, res: Response) => {
  const { userId, theme } = req.body

  const user = await Theme.findOne({ where: { userId } })

  if (user) {
    const data = await Theme.update(
      { userId, theme },
      { where: { userId }, returning: true }
    )

    if (data) {
      // @ts-ignore
      res.status(200).json({ theme: data[1][0].theme })
    }
  } else {
    const data = await Theme.create({ userId, theme })

    res.status(200).json({ theme: data.dataValues.theme })
  }
}

export const getTheme = (req: IRequestGetTheme, res: Response) => {
  const id = req.params.id

  Theme.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(() => {
      res.status(500).send({
        message: 'Error retrieving theme with id=' + id,
      })
    })
}
