import { MissingParamError } from '@/presentation/errors/missing-param-error'
import { RequiredFieldsValidation } from '@/presentation/validation/required-fields-validation'

describe('RequiredField Validation', () => {
  const sut = new RequiredFieldsValidation(['latitude', 'longitude'])

  it('Should return a MissingParamError if validation fails', () => {
    const error = sut.validate({ longitude: -23.168516 })
    expect(error).toEqual(new MissingParamError('latitude'))
  })

  it("Shouldn't t return if required fields is provided ", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeFalsy()
  })
})
