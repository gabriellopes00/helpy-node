import { Validation } from '@/presentation/ports/validation'

export class MockValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}
