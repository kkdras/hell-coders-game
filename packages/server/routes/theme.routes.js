module.exports = app => {
  /* eslint-disable */
  const themes = require('server/controllers/theme.controller.js')
  /* eslint-disable */
  const router = require('express').Router()

  // Create a new Theme
  router.post('/', themes.postTheme)

  // Retrieve needed Theme
  router.get('/:id', themes.getTheme)

  app.use('/api/theme', router)
}
