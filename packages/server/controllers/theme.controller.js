/* eslint-disable */
const db = require('../models')
const Theme = db.themes

exports.postTheme = async (req, res) => {
  const { userId, theme } = req.body

  const user = await Theme.findOne({ where: { userId } })

  if (user) {
    const data = await Theme.update(
      { userId, theme },
      { where: { userId }, returning: true }
    )

    if (data) {
      res.status(200).json({ theme: data[1][0].theme })
    }
  } else {
    const data = await Theme.create({ userId, theme })

    res.status(200).json({ theme: data.dataValues.theme })
  }
}

exports.getTheme = (req, res) => {
  const id = req.params.id

  Theme.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(() => {
      res.status(500).send({
        message: 'Error retrieving theme with id=' + id,
      })
    })
}
