import { Validation } from '../ports/validation'

export class ValidationCompositor implements Validation {
  constructor(private readonly validations: Validation[]) {}

  validate(input: any): Error {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) return error
    }
  }
}
