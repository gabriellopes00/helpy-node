export interface EventController {
  emit<T = any>(data: T, name?: string): void
}
