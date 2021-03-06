import { StoreHelpRequest, HelpRequest } from '@/domain/models/help-request'

export interface AddHelpRequestRepository {
  add(data: StoreHelpRequest): Promise<HelpRequest>
}
