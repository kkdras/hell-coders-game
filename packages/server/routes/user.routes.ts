import { UserController } from '../controllers/user.controller'
import { Router } from 'express'

export const userRouter = Router()
  .post('/', UserController.create)
