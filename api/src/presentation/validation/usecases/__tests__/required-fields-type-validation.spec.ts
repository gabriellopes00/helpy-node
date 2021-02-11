import { UnmatchParamType } from '@src/presentation/errors/unmatch-param-type-error'
import { RequiredFieldsTypeValidation } from '../required-fields-type-validation'

describe('RequiredFieldsType validation', () => {
  const sut = new RequiredFieldsTypeValidation()
  it('Should return an error if invalid data type is provided', () => {
    const error = sut.validate({
      longitude: '-23.168516',
      latitude: -23.168516
    })
    expect(error).toEqual(new UnmatchParamType('longitude'))
  })

  it("Shouldn't return if valid data type is provided", () => {
    const error = sut.validate({
      longitude: -23.168516,
      latitude: -23.168516
    })
    expect(error).toBeFalsy()
  })
})
