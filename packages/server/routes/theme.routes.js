module.exports = app => {
  const themes = require('server/controllers/theme.controller.js')
  const router = require('express').Router()

  // Create a new Theme
  router.post('/', themes.postTheme)

  // Retrieve needed Theme
  router.get('/:id', themes.getTheme)

  app.use('/api/theme', router)
}
