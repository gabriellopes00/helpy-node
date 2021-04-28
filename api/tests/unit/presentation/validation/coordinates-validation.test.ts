import { InvalidParamError } from '@/presentation/errors/invalid-param-error'
import { CoordinatesValidation } from '@/presentation/validation/usecases/coordinates-validation'
import { LatLngValidation } from '@/infra/validation/interfaces/coordinates-validation'

class MockCoordinatesValidator implements LatLngValidation {
  validate(coordinates: string): boolean {
    return true
  }
}

describe('Coordinates validation', () => {
  const mockCoordinatesValidator = new MockCoordinatesValidator()
  const sut = new CoordinatesValidation(mockCoordinatesValidator)

  it('Should return an error if invalid coordinates is provided', () => {
    jest.spyOn(mockCoordinatesValidator, 'validate').mockReturnValueOnce(false)
    const lngError = sut.validate({ longitude: 'invalid_lng', latitude: -23.168516 })
    expect(lngError).toEqual(new InvalidParamError('Coordinates'))

    jest.spyOn(mockCoordinatesValidator, 'validate').mockReturnValueOnce(false)
    const latError = sut.validate({ latitude: 'invalid_lat', longitude: -23.168516 })
    expect(latError).toEqual(new InvalidParamError('Coordinates'))
  })

  it("Shouldn't return if valid coordinates is provided", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeNull()
  })
})
