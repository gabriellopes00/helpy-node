import { InputHelpRequest, HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest } from '@/domain/usecases/add-help-request'

export class FakeHelpRequestRepository implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return { id: 'asdf123', date: new Date(), latitude: -23.168516, longitude: -46.869015 }
  }
}
