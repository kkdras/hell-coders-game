import { Router } from 'express'
import { getTheme, postTheme } from '../controllers/theme.controller'

export const themeRouter = Router().post('/', postTheme).get('/:id', getTheme)
