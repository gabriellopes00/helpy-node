import { SocketIo } from '@/infra/web-socket/socketio'
import { WebSocketManager } from '@/presentation/web-socket/web-socket'
import { Server } from 'http'
import { Server as IoServer } from 'socket.io'
import { eventEmitter } from '../compositions/event/event-emitter'

export default (server: Server): void => {
  const io = new IoServer(server, { cors: { origin: '*' } })
  io.on('connection', socket => {
    const socketIo = new SocketIo(socket)
    const webSocketManager = new WebSocketManager(eventEmitter, socketIo)
    webSocketManager.handle('new_help_request')
  })
}
