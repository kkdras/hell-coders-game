import { Router } from 'express'
import type { Application } from 'express'
import { getTheme, postTheme } from '../controllers/theme.controller'

const router = Router()

// Create a new Theme
router.post('/', postTheme)

// Retrieve needed Theme
router.get('/:id', getTheme)

export const themeRoutes = (app: Application) => {
  app.use('/api/theme', router)
}
