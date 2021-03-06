import { InputHelpRequest } from '@/domain/models/help-request'
import { badRequest } from '@/presentation/helpers/http'
import { AddHelpRequestController } from '../add-help-request'
import { FakeAddHelpRequest, FakeValidation } from '../mocks'

describe('Unit AddHelpRequest controller tests', () => {
  const mockedValidation = new FakeValidation() as jest.Mocked<FakeValidation>
  const mockedAddHelpRequest = new FakeAddHelpRequest() as jest.Mocked<FakeAddHelpRequest>

  const sut = new AddHelpRequestController(mockedAddHelpRequest, mockedValidation)

  const fakeHelpRequest: InputHelpRequest = {
    latitude: -23.168516,
    longitude: -46.869015
  }

  describe('Validations', () => {
    it('Should call validation with correct values', async () => {
      const validateSpy = jest.spyOn(mockedValidation, 'validate')
      await sut.handle({ body: fakeHelpRequest })
      expect(validateSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 400 if validation fails', async () => {
      mockedValidation.validate.mockReturnValueOnce(new Error())
      const error = await sut.handle({ body: fakeHelpRequest })
      expect(error).toEqual(badRequest(new Error()))
    })
  })

  describe('AddHelpRequest', () => {
    it('Should call addHelpRequest with correct values', async () => {
      const addSpy = jest.spyOn(mockedAddHelpRequest, 'add')
      await sut.handle({ body: fakeHelpRequest })
      expect(addSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 204 on success', async () => {
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(204)
    })

    it('Should return 500 if AddHelpRequest throws', async () => {
      mockedAddHelpRequest.add.mockRejectedValue(new Error())
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(500)
    })
  })
})
