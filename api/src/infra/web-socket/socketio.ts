import { WebSocket } from '@/presentation/interfaces/web-socket'

export class SocketIo implements WebSocket {
  constructor(private readonly io: SocketIO.Socket) {}

  emit<T = any>(name: string, data: T): void {
    this.io.emit(name, data)
  }
}
