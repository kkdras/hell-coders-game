import { DataTypes } from 'sequelize'
import { sequelize } from './init'

export const Reaction = sequelize.define(
  'Reaction',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM('like', 'dislike'),
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['userId', 'commentId']
      }
    ]
  }
)
