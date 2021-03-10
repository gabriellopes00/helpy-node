import { EventController } from '@/implementation/interfaces/event-manager'
import EventEmitter from 'events'

export class EventManager implements EventController {
  constructor(private readonly eventEmitter: EventEmitter) {}

  emit(data: any, name?: string): void {
    this.eventEmitter.emit(name || 'new-help-request', data)
  }
}
