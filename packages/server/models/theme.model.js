module.exports = (sequelize, Sequelize) => {
  const Theme = sequelize.define('theme', {
    userId: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    theme: {
      type: Sequelize.STRING,
    },
  })

  return Theme
}
