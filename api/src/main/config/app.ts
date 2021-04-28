import express from 'express'
import { createServer } from 'http'
import Router from '../routes'
import Middlewares from './middlewares'
import WebSocket from './web-socket'

const app = express()
Middlewares(app)
Router(app)

const httpServer = createServer(app)
WebSocket(httpServer)

export default httpServer
