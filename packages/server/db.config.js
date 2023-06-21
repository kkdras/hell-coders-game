const { POSTGRES_PORT } =
  process.env
  
module.exports = {
  HOST: POSTGRES_PORT|| "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
