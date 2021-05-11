import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { Validation } from '../ports/validation'
import { LatLngValidation } from './ports/coordinates-validation'

export class CoordinatesValidation implements Validation {
  constructor(private readonly coordinatesValidator: LatLngValidation) {}
  validate(data: any): Error {
    if (!this.coordinatesValidator.validate(`${data.latitude}, ${data.longitude}`)) {
      return new InvalidParamError('Coordinates')
    }
    return null
  }
}
