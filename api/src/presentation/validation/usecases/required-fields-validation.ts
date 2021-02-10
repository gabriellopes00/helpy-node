import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { Validation } from '../interfaces/validation'

export class RequiredFieldsValidation implements Validation {
  constructor(private readonly field: string) {}

  validate(data: any): Error {
    if (!data[this.field]) return new MissingParamError(this.field)
  }
}
