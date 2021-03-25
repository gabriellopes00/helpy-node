import { EventManager } from './event-manager'

class MockEventEmitter implements Partial<NodeJS.EventEmitter> {
  emit(event: string | symbol, ...args: any[]): boolean {
    return true
  }
}

describe('Event Emitter', () => {
  const mockEventEmitter = new MockEventEmitter() as jest.Mocked<NodeJS.EventEmitter>
  const sut = new EventManager(mockEventEmitter)
  const fakeData = 'any_data'

  it('Should call event emitter with correct values', async () => {
    const emitSpy = jest.spyOn(mockEventEmitter, 'emit')
    sut.emit(fakeData, 'event')
    expect(emitSpy).toHaveBeenCalledWith('event', fakeData)
  })
})
