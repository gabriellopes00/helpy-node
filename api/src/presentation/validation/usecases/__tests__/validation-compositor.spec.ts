import { Validation } from '../../interfaces/validation'
import { ValidationCompositor } from '../validation-compositor'

class FakeValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}

describe('ValidationCompositor', () => {
  const fakeValidation = new FakeValidation()
  const sut = new ValidationCompositor([fakeValidation])

  it('Should return an error if any validation fails', () => {
    jest.spyOn(fakeValidation, 'validate').mockReturnValueOnce(new Error())
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toEqual(new Error())
  })

  it("Shouldn't  return if all validations succeeds", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeFalsy()
  })
})
