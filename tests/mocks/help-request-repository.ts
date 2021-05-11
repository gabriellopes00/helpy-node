import { HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest, HelpRequestParams } from '@/domain/usecases/add-help-request'
import { fakeHelpRequest } from './help-request'

export class MockHelpRequestRepository implements AddHelpRequest {
  async add(data: HelpRequestParams): Promise<HelpRequest> {
    return fakeHelpRequest
  }
}
