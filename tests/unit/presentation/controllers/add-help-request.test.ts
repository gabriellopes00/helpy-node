import { HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest, HelpRequestParams } from '@/domain/usecases/add-help-request'
import { fakeHelpRequestParams, fakeHelpRequest } from '../../../mocks/help-request'
import { MockValidation } from '../../../mocks/validation'
import { badRequest } from '@/presentation/helpers/http'
import EventEmitter from 'events'
import { AddHelpRequestController } from '@/presentation/controllers/add-help-request'

class MockAddHelpRequest implements AddHelpRequest {
  async add(data: HelpRequestParams): Promise<HelpRequest> {
    return fakeHelpRequest
  }
}

class MockEventEmitter extends EventEmitter {
  emit(event: string | symbol, ...args: any[]): boolean {
    return true
  }
}

describe('Unit AddHelpRequest controller tests', () => {
  const mockValidation = new MockValidation() as jest.Mocked<MockValidation>
  const mockAddHelpRequest = new MockAddHelpRequest() as jest.Mocked<MockAddHelpRequest>
  const mockEventEmitter = new MockEventEmitter() as jest.Mocked<MockEventEmitter>

  const sut = new AddHelpRequestController(mockAddHelpRequest, mockValidation, mockEventEmitter)

  describe('Validations', () => {
    it('Should call validation with correct values', async () => {
      const validateSpy = jest.spyOn(mockValidation, 'validate')
      await sut.handle({ body: fakeHelpRequestParams })
      expect(validateSpy).toHaveBeenCalledWith(fakeHelpRequestParams)
    })

    it('Should return 400 if validation fails', async () => {
      mockValidation.validate.mockReturnValueOnce(new Error())
      const error = await sut.handle({ body: fakeHelpRequestParams })
      expect(error).toEqual(badRequest(new Error()))
    })
  })

  describe('AddHelpRequest', () => {
    it('Should call addHelpRequest with correct values', async () => {
      const addSpy = jest.spyOn(mockAddHelpRequest, 'add')
      await sut.handle({ body: fakeHelpRequestParams })
      expect(addSpy).toHaveBeenCalledWith(fakeHelpRequestParams)
    })

    it('Should return 204 on success', async () => {
      const response = await sut.handle({ body: fakeHelpRequestParams })
      expect(response.statusCode).toBe(204)
    })

    it('Should return 500 if AddHelpRequest throws', async () => {
      mockAddHelpRequest.add.mockRejectedValue(new Error())
      const response = await sut.handle({ body: fakeHelpRequestParams })
      expect(response.statusCode).toBe(500)
    })
  })

  // describe('Event Emitter', () => {
  //   it('Should emit an event if a Help Request was correctly registered', async () => {
  //     const emitSpy = jest.spyOn(mockEventEmitter, 'emit')
  //     console.log(emitSpy)
  //     await sut.handle({ body: fakeHelpRequestParams })
  //     expect(emitSpy).toHaveBeenCalledWith('new_help_request', fakeHelpRequest)
  //   })
  // })
})
