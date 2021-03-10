export interface EventEmitter {
  emit<T = any>(data: T, name?: string): void
}
