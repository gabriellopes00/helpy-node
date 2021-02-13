import { StoreHelpRequest, HelpRequest } from '@src/domain/models/help-request'

export interface AddHelpRequestRepository {
  add(data: StoreHelpRequest): Promise<HelpRequest>
}
