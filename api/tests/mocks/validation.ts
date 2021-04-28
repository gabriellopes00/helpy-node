import { Validation } from '@/presentation/validation/interfaces/validation'

export class MockValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}
