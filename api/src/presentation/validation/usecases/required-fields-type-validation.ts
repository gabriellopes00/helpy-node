import { UnmatchParamType } from '@/presentation/errors/unmatch-param-type-error'
import { Validation } from '../interfaces/validation'

export class RequiredFieldsTypeValidation implements Validation {
  validate(data: any): Error {
    if (isNaN(data.latitude)) return new UnmatchParamType('latitude')
    else if (isNaN(data.longitude)) return new UnmatchParamType('longitude')
    return null
  }
}
