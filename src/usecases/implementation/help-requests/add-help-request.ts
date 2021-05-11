import { HelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest, HelpRequestParams } from '@/domain/usecases/add-help-request'
import { HelpRequestRepository } from '@/usecases/ports/help-request-repository'
import { UuidGenerator } from '@/usecases/ports/uuid-generator'

export class DbAddHelpRequest implements AddHelpRequest {
  constructor(
    private readonly HelpRepository: HelpRequestRepository,
    private readonly uuidGenerator: UuidGenerator
  ) {}

  async add(data: HelpRequestParams): Promise<HelpRequest> {
    const uuid = this.uuidGenerator.generate()
    const helpRequest = await this.HelpRepository.add({ id: uuid, date: new Date(), ...data })
    return helpRequest
  }
}
