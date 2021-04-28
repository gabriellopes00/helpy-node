import { UuidGenerator } from '@/usecases/ports/uuid-generator'
import { v4 as UUIDv4 } from 'uuid'

export class IdGenerator implements UuidGenerator {
  generate(): string {
    const uuid = UUIDv4()
    return uuid
  }
}
