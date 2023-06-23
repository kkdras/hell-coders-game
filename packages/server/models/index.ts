import {
  DataTypes,
  Model,
  ModelCtor,
  OperatorsAliases,
  Sequelize,
} from 'sequelize'

import { dbConfig } from '../db.config'
import { topicModel } from './topic.model'

interface IDb {
  Sequelize: typeof Sequelize
  sequelize: Sequelize
  topics: ModelCtor<Model<any, any>>
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0 as unknown as OperatorsAliases,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

export const db: IDb = {
  Sequelize,
  sequelize,
  topics: topicModel(sequelize, DataTypes),
}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.topics = topicModel(sequelize, DataTypes)
