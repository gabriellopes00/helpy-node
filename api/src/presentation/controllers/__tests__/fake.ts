import { InputHelpRequest, HelpRequest } from '@src/domain/models/help-request'
import { AddHelpRequest } from '@src/domain/usecases/add-help-request'
import { Validation } from '@src/presentation/validation/interfaces/validation'

export class FakeAddHelpRequest implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return {
      id: 'asdf',
      date: new Date('2021-02-06T23:33:44.290Z'),
      latitude: -23.168516,
      longitude: -46.869015
    }
  }
}

export class FakeValidation implements Validation {
  validate(data: any): Error {
    return null
  }
}
