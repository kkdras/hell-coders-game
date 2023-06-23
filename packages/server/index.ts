import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import { createClientAndConnect } from './db'
import { db } from './models'
import { themeRoutes } from './routes/theme.routes'

dotenv.config()
const app = express()
app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = Number(process.env.SERVER_PORT) || 3001

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.')
  })
  .catch((err: any) => {
    console.log('Failed to sync db: ' + err.message)
  })

createClientAndConnect()
themeRoutes(app)

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)')
})

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
