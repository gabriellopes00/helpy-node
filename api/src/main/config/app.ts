import express, { json } from 'express'
import router from '../routes'

const app = express()

app.use(router)
app.use(json())

export default app
