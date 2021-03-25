import { WebSocket } from '@/implementation/interfaces/web-socket'

export class EventManager {
  constructor(
    private readonly eventEmitter: NodeJS.EventEmitter,
    private readonly webSocket: WebSocket
  ) {}

  handle(): void {
    this.eventEmitter.on('new_help_request', data => this.webSocket.emit('new_help_request', data))
  }
}
