import type { Response } from 'express'
import type { IRequestGetTheme, Request, ITheme } from './types'
import { Theme, User } from '../models'

export const postTheme = async (req: Request<ITheme>, res: Response) => {
  const { userId, theme } = req.body

  const user = await User.findOne({ where: { id: userId } })

  if (!user) {
    res.status(400).send({ message: 'User with specified id doesn\'t exist' })
    return
  }

  const dbTheme = await Theme.findOne({
    where: {
      userId
    }
  })

  if (dbTheme) {
    const data = await Theme.update(
      { theme },
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
    .catch(err => {
      console.log(err)

      res.status(500).send({
        message: 'Error retrieving theme with id=' + id
      })
    })
}
