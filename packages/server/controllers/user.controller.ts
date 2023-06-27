import type { Response } from 'express'
import type { Request, IUser } from './types'
import { User } from '../models'
import { ValidationError } from 'sequelize'

export class UserController {
  static async create(req: Request<IUser>, res: Response) {
    try {
      const user = await User.create({
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        password: req.body.password,
        phone: req.body.phone,
        login: req.body.login,
        email: req.body.email
      })

      res.json(user.toJSON())
    } catch (e) {
      console.log(e)

      if (e instanceof ValidationError) {
        // обработка ошибки валидации данных модели
        res.status(400).json({ message: e.errors[0].message })
      } else {
        res.status(500).json({ message: 'Internal server error' })
      }
    }
  }
}
