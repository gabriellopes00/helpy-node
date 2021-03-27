import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { CoordinatesValidation } from '../coordinates-validation'

describe('Coordinates validation', () => {
  const sut = new CoordinatesValidation()
  it('Should return an error if invalid data type is provided', () => {
    const lngError = sut.validate({ longitude: 'invalid_lng', latitude: -23.168516 })
    expect(lngError).toEqual(new InvalidParamError('Coordinates'))

    const latError = sut.validate({ latitude: 'invalid_lat', longitude: -23.168516 })
    expect(latError).toEqual(new InvalidParamError('Coordinates'))
  })

  it("Shouldn't return if valid data type is provided", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeNull()
  })
})
