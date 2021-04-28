import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { RequiredFieldsValidation } from '@/presentation/validation/required-fields-validation'

describe('RequiredField Validation', () => {
  const sut = new RequiredFieldsValidation(['latitude', 'longitude'])

  test('Should return a MissingParamError if validation fails', () => {
    const error = sut.validate({ longitude: -23.168516 })
    expect(error).toEqual(new MissingParamError('latitude'))
  })

  test("Shouldn't t return if required fields is provided ", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeFalsy()
  })
})
