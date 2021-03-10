import { EventController } from '@/domain/usecases/event-manager'
import { EventEmitter } from '@/implementation/interfaces/event-emitter'

export class EventManager implements EventController {
  constructor(private readonly eventEmitter: EventEmitter) {}

  emit(data: any, name: string): void {
    this.eventEmitter.emit(name, data)
  }
}
