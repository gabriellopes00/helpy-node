import { InputHelpRequest, HelpRequest } from '@src/domain/models/help-request'

export interface AddHelpRequestRepository {
  add(data: InputHelpRequest): Promise<HelpRequest>
}
