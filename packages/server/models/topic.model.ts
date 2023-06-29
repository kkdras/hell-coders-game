import { DataTypes } from 'sequelize'
import { sequelize } from './init'

export const Topic = sequelize.define('topic', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  }
})
