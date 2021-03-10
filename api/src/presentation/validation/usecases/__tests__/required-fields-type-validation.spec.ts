import { UnmatchParamType } from '@/presentation/errors/unmatch-param-type-error'
import { RequiredFieldsTypeValidation } from '../required-fields-type-validation'

describe('RequiredFieldsType validation', () => {
  const sut = new RequiredFieldsTypeValidation()
  it('Should return an error if invalid data type is provided', () => {
    const lngError = sut.validate({ longitude: 'invalid_lng', latitude: -23.168516 })
    expect(lngError).toEqual(new UnmatchParamType('longitude'))

    const latError = sut.validate({ latitude: 'invalid_lat', longitude: -23.168516 })
    expect(latError).toEqual(new UnmatchParamType('latitude'))
  })

  it("Shouldn't return if valid data type is provided", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeNull()
  })
})
