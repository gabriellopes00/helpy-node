import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { Validation } from '../interfaces/validation'
import validator from 'validator'

export class CoordinatesValidation implements Validation {
  validate(data: any): Error {
    if (!validator.isLatLong(`${data.latitude}, ${data.longitude}`)) {
      return new InvalidParamError('Coordinates')
    }
    return null
  }
}
