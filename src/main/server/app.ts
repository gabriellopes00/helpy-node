import express from 'express'
import { createServer } from 'http'
import helpRequestRoutes from '../routes/add-help-request'
import { bodyParser, secureHeaders, noCache, contentType, cors } from './middlewares'
import WebSocket from './web-socket'

const app = express()
app.use([bodyParser, secureHeaders, noCache, contentType, cors])
app.use([helpRequestRoutes])

const httpServer = createServer(app)
WebSocket(httpServer)

export default httpServer
