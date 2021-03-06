import { InputHelpRequest, HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest } from '@/domain/usecases/add-help-request'
import { AddHelpRequestRepository } from '@/implementation/interfaces/add-help-request-repository'

export class DbAddHelpRequest implements AddHelpRequest {
  constructor(private readonly HelpRepository: AddHelpRequestRepository) {}

  async add(data: InputHelpRequest): Promise<HelpRequest> {
    const helpRequest = await this.HelpRepository.add({
      date: new Date(),
      ...data
    })
    return helpRequest
  }
}
