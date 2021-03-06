import { Validation } from '../interfaces/validation'

export class FakeValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}
