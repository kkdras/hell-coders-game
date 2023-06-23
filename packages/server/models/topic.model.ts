import type { DataTypes as sequelizeDataTypes, Sequelize } from 'sequelize'

export const topicModel = (
  sequelize: Sequelize,
  DataTypes: typeof sequelizeDataTypes
) => {
  const Topic = sequelize.define('topic', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  })

  return Topic
}
