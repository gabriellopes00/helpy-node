import { HelpRequest, InputHelpRequest } from '@src/domain/models/help-request'
import { AddHelpRequest } from '@src/domain/usecases/add-help-request'
import { badRequest } from '@src/presentation/helpers/http'
import { Validation } from '@src/presentation/validation/interfaces/validation'
import { AddHelpRequestController } from '../add-help-request'

class FakeAddHelpRequest implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return {
      id: 'asdf',
      date: new Date('2021-02-06T23:33:44.290Z'),
      latitude: -23.168516,
      longitude: -46.869015
    }
  }
}

class FakeValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}

describe('Unit AddHelpRequest controller tests', () => {
  const fakeAddHelpRequest = new FakeAddHelpRequest()
  const fakeValidation = new FakeValidation()
  const sut = new AddHelpRequestController(fakeAddHelpRequest, fakeValidation)

  const fakeHelpRequest: InputHelpRequest = {
    latitude: -23.168516,
    longitude: -46.869015
  }

  describe('Validations', () => {
    it('Should call validation with correct values', async () => {
      const validateSpy = jest.spyOn(fakeValidation, 'validate')
      await sut.handle({ body: fakeHelpRequest })
      expect(validateSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 400 if validation fails', async () => {
      jest.spyOn(fakeValidation, 'validate').mockReturnValueOnce(new Error())
      const error = await sut.handle({ body: fakeHelpRequest })
      expect(error).toEqual(badRequest(new Error()))
    })
  })

  describe('AddHelpRequest', () => {
    it('Should call addHelpRequest with correct values', async () => {
      const addSpy = jest.spyOn(fakeAddHelpRequest, 'add')
      await sut.handle({ body: fakeHelpRequest })
      expect(addSpy).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return 204 on success', async () => {
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(204)
    })

    it('Should return 500 if AddHelpRequest throws', async () => {
      jest
        .spyOn(fakeAddHelpRequest, 'add')
        .mockResolvedValueOnce(
          new Promise((resolve, reject) => reject(new Error('asdf')))
        )
      const response = await sut.handle({ body: fakeHelpRequest })
      expect(response.statusCode).toBe(500)
    })
  })
})
