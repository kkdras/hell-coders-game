import { Router } from 'express'
import { getTheme, postTheme } from '../controllers/theme.controller'

const routes = Router().post('/create', postTheme).get('/:id', getTheme)

export const themeRouter = Router().use('/theme', routes)
