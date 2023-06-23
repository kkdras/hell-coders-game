import type { DataTypes as sequelizeDataTypes, Sequelize } from 'sequelize'

export const themeModel = (
  sequelize: Sequelize,
  DataTypes: typeof sequelizeDataTypes
) => {
  const Theme = sequelize.define('theme', {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    theme: {
      type: DataTypes.STRING,
    },
  })

  return Theme
}
