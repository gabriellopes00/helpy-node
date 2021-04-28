import { HelpRequest } from '@/domain/models/help-request'

export interface DbHelpRequestModel extends Omit<HelpRequest, 'id'> {}

export interface AddHelpRequestRepository {
  add(data: DbHelpRequestModel): Promise<HelpRequest>
}
