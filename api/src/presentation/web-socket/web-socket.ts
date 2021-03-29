import { WebSocket } from '@/presentation/interfaces/web-socket'

export class WebSocketManager {
  constructor(
    private readonly eventEmitter: NodeJS.EventEmitter,
    private readonly webSocket: WebSocket
  ) {}

  handle(eventName: string): void {
    this.eventEmitter.on(eventName, data =>
      this.webSocket.emit(eventName, {
        message: `New help request received at ${new Date().toISOString()}`,
        data
      })
    )
  }
}
