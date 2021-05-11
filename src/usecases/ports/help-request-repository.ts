import { HelpRequest } from '@/domain/models/help-request'

export interface HelpRequestRepository {
  add(data: HelpRequest): Promise<HelpRequest>
}
