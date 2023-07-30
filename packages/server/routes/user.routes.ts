import { UserController } from '../controllers/user.controller'
import { Router } from 'express'

const routes = Router()
  .post('/create', UserController.create)
  .get('/', UserController.getUserByLogin)

export const userRouter = Router().use('/user', routes)
