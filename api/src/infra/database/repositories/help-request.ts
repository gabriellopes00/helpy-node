import { HelpRequest } from '@/domain/models/help-request'
import { HelpRequestRepository } from '@/usecases/ports/help-request-repository'
import { DbHelpRequest } from '../schemas/help-request'

export class MongoHelpRequestRepository implements HelpRequestRepository {
  async add(data: HelpRequest): Promise<HelpRequest> {
    const helpRequestModel = new DbHelpRequest(data)
    const result = await helpRequestModel.save()
    return result as HelpRequest
  }
}
