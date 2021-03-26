import { WebSocket } from '@/presentation/interfaces/web-socket'

export class WebSocketManager {
  constructor(
    private readonly eventEmitter: NodeJS.EventEmitter,
    private readonly webSocket: WebSocket
  ) {}

  handle(): void {
    this.eventEmitter.on('new_help_request', data =>
      this.webSocket.emit('new_help_request', {
        message: `New help request received at ${new Date().toISOString()}`,
        data
      })
    )
  }
}
