import { HelpRequest, InputHelpRequest } from '@/domain/models/help-request'
import { AddHelpRequestRepository } from '@/implementation/interfaces/add-help-request-repository'
import { DbHelpRequest } from './model'

export class MongoHelpRequestRepository implements AddHelpRequestRepository {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    const helpRequestModel = new DbHelpRequest(data)
    const result = await helpRequestModel.save()
    return {
      id: result.id,
      date: result.date,
      latitude: result.latitude,
      longitude: result.longitude
    }
  }
}
