import express from 'express'
import Middlewares from './middlewares'
import Routes from '../routes'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { WebSocketManager } from '@/presentation/web-socket/web-socket'
import { SocketIo } from '@/infra/web-socket/socketio'
import { eventEmitter } from '../compositions/event/event-emitter'

const app = express()
Middlewares(app)
Routes(app)

const httpServer = createServer(app)
const io = new Server(httpServer, { cors: { origin: '*' } })
io.on('connection', socket => {
  const socketIo = new SocketIo(socket)
  const webSocketManager = new WebSocketManager(eventEmitter, socketIo)
  webSocketManager.handle()
  console.log('Connection created successfully')
})

export default httpServer
