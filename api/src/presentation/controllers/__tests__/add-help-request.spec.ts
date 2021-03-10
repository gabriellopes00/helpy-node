import { HelpRequest, InputHelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest } from '@/domain/usecases/add-help-request'
import { fakeHelpRequest } from '@/mocks/help-request'
import { MockValidation } from '@/mocks/validation'
import { badRequest } from '@/presentation/helpers/http'
import { AddHelpRequestController } from '../add-help-request'

class MockAddHelpRequest implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return fakeHelpRequest
  }
}

describe('Unit AddHelpRequest controller tests', () => {
  const mockValidation = new MockValidation() as jest.Mocked<MockValidation>
  const mockAddHelpRequest = new MockAddHelpRequest() as jest.Mocked<MockAddHelpRequest>

  const sut = new AddHelpRequestController(mockAddHelpRequest, mockValidation)

  const fakeHelpRequest: InputHelpRequest = {
    latitude: -23.168516,
    longitude: -46.869015
  }

  describe('Validations', () => {
    it('Should call validation with correct values', async () => {
      const validateSpy = jest.spyOn(mockValidation, 'validate')
      await sut.handle({ body: fakeHelpRequest })
      expect(validateSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 400 if validation fails', async () => {
      mockValidation.validate.mockReturnValueOnce(new Error())
      const error = await sut.handle({ body: fakeHelpRequest })
      expect(error).toEqual(badRequest(new Error()))
    })
  })

  describe('AddHelpRequest', () => {
    it('Should call addHelpRequest with correct values', async () => {
      const addSpy = jest.spyOn(mockAddHelpRequest, 'add')
      await sut.handle({ body: fakeHelpRequest })
      expect(addSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 204 on success', async () => {
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(204)
    })

    it('Should return 500 if AddHelpRequest throws', async () => {
      mockAddHelpRequest.add.mockRejectedValue(new Error())
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(500)
    })
  })
})
