import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { Validation } from '../interfaces/validation'

export class RequiredFieldsValidation implements Validation {
  constructor(private readonly fields: string[]) {}

  validate(data: any): Error {
    for (const field of this.fields) {
      if (!data[field]) return new MissingParamError(field)
    }
  }
}
