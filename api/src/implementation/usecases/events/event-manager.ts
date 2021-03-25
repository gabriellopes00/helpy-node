import { EventController } from '@/domain/usecases/event-manager'

export class EventManager implements EventController {
  constructor(private readonly eventEmitter: NodeJS.EventEmitter) {}

  emit(data: any, name: string): void {
    this.eventEmitter.emit(name, data)
  }
}
