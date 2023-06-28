import { UserController } from '../controllers/user.controller'
import { Router } from 'express'

const routes = Router()
  .post('/create', UserController.create)

export const userRouter = Router().use('/user', routes)
