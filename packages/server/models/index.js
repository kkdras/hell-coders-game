/* eslint-disable */
const dbConfig = require('server/db.config')
/* eslint-disable */
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
/* eslint-disable */
db.themes = require('./theme.model.js')(sequelize, Sequelize)

module.exports = db
