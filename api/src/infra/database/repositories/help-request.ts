import { HelpRequest } from '@/domain/models/help-request'
import {
  AddHelpRequestRepository,
  DbHelpRequestModel
} from '@/usecases/ports/add-help-request-repository'
import { DbHelpRequest } from '../schemas/help-request'

export class MongoHelpRequestRepository implements AddHelpRequestRepository {
  async add(data: DbHelpRequestModel): Promise<HelpRequest> {
    const helpRequestModel = new DbHelpRequest(data)
    const result = await helpRequestModel.save()
    return result as HelpRequest
  }
}
