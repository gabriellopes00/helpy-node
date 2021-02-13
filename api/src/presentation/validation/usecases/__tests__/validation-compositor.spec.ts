import { ValidationCompositor } from '../validation-compositor'
import { FakeValidation } from './fake'

describe('ValidationCompositor', () => {
  const mockedValidation = new FakeValidation() as jest.Mocked<FakeValidation>
  const sut = new ValidationCompositor([mockedValidation])

  it('Should return an error if any validation fails', () => {
    jest.spyOn(mockedValidation, 'validate').mockReturnValueOnce(new Error())
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toEqual(new Error())
  })

  it("Shouldn't  return if all validations succeeds", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeFalsy()
  })
})
