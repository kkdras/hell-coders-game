import type { Dialect } from 'sequelize'

export interface IDbConfig {
  HOST: string
  USER: string
  PASSWORD: string
  DB: string
  dialect?: Dialect
  pool: {
    max: number
    min: number
    acquire: number
    idle: number
  }
}

export const dbConfig: IDbConfig = {
  HOST: 'postgres',
  USER: 'postgres',
  PASSWORD: 'postgres',
  DB: 'postgres',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
