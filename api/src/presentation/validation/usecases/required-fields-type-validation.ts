import { UnmatchParamType } from '@/presentation/errors/unmatch-param-type-error'
import { Validation } from '../interfaces/validation'

export class RequiredFieldsTypeValidation implements Validation {
  validate(data: any): Error {
    if (typeof data.latitude !== 'number') {
      return new UnmatchParamType('latitude')
    }
    if (typeof data.longitude !== 'number') {
      return new UnmatchParamType('longitude')
    }
  }
}
