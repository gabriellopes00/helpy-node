import EventEmitter from 'events'

class CustomEventEmitter extends EventEmitter {}
export const eventEmitter = new CustomEventEmitter()
