import { InputHelpRequest, HelpRequest } from '@src/domain/models/help-request'
import { AddHelpRequest } from '@src/domain/usecases/add-help-request'

export class FakeHelpRepository implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return {
      id: 'asdf123',
      date: new Date('2021-02-06T23:33:44.290Z'),
      location: {
        latitude: -23.168516,
        longitude: -46.869015
      }
    }
  }
}
