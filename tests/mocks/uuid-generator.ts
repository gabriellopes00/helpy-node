import { UuidGenerator } from '@/usecases/ports/uuid-generator'

export class MockUUIDGenerator implements UuidGenerator {
  generate(): string {
    return '45d219f6-eb3b-467b-953b-650adb1e0587'
  }
}
