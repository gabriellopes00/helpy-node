import { MockValidation } from '@/mocks/validation'
import { ValidationCompositor } from '../validation-compositor'

describe('ValidationCompositor', () => {
  const mockValidation = new MockValidation() as jest.Mocked<MockValidation>
  const sut = new ValidationCompositor([mockValidation])

  it('Should return an error if any validation fails', () => {
    jest.spyOn(mockValidation, 'validate').mockReturnValueOnce(new Error())
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toEqual(new Error())
  })

  it("Shouldn't  return if all validations succeeds", () => {
    const error = sut.validate({ longitude: -23.168516, latitude: -23.168516 })
    expect(error).toBeFalsy()
  })
})
