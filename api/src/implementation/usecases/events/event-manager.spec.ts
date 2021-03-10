import { EventEmitter } from '@/implementation/interfaces/event-emitter'
import { EventManager } from './event-manager'

class MockEventEmitter implements EventEmitter {
  emit(args: any, name: string): void {

  }
}

describe('Event Emitter', () => {
  const mockEventEmitter = new MockEventEmitter() as jest.Mocked<EventEmitter>
  const sut = new EventManager(mockEventEmitter)
  const fakeData = 'any_data'

  it('Should call event emitter with correct values', async () => {
    const emitSpy = jest.spyOn(mockEventEmitter, 'emit')
    sut.emit(fakeData, 'event')
    expect(emitSpy).toHaveBeenCalledWith('event', fakeData)
  })
})