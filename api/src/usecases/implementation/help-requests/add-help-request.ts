import { HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest, HelpRequestParams } from '@/domain/usecases/add-help-request'
import { AddHelpRequestRepository } from '@/usecases/ports/add-help-request-repository'

export class DbAddHelpRequest implements AddHelpRequest {
  constructor(private readonly HelpRepository: AddHelpRequestRepository) {}

  async add(data: HelpRequestParams): Promise<HelpRequest> {
    const helpRequest = await this.HelpRepository.add({
      date: new Date(),
      ...data
    })
    return helpRequest
  }
}
