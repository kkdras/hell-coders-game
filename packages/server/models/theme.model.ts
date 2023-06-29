import { DataTypes } from 'sequelize'
import { sequelize } from './init'

export const Theme = sequelize.define('theme', {
  userId: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  theme: {
    type: DataTypes.STRING
  }
})
