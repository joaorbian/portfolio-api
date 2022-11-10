
import express from 'express'
import cors from 'cors'
import { router } from './routers/routes'

import { createProjectTable } from './models/ProjectModel'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cors())
app.use(router)

async function runApp() {
  await createProjectTable()
  console.log(`Aplicação rodando em http://localhost:${PORT}`)
}

app.listen(PORT, runApp)