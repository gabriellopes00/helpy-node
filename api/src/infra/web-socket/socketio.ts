import { WebSocket } from '@/implementation/interfaces/web-socket'

export class SocketIo implements WebSocket {
  constructor(private readonly io: SocketIO.Server) {}

  emit<T = any>(name: string, data: T): void {
    this.io.emit(name, data)
  }
}
