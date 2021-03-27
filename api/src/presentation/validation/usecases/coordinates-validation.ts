import { LatLngValidation } from '@/infra/validation/interfaces/coordinates-validation'
import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { Validation } from '../interfaces/validation'

export class CoordinatesValidation implements Validation {
  constructor(private readonly coordinatesValidator: LatLngValidation) {}
  validate(data: any): Error {
    if (!this.coordinatesValidator.validate(`${data.latitude}, ${data.longitude}`)) {
      return new InvalidParamError('Coordinates')
    }
    return null
  }
}
