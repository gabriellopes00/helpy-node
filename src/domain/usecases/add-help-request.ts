import { HelpRequest } from '../models/help-request'

export interface HelpRequestParams extends Omit<HelpRequest, 'id' | 'date'> {}

export interface AddHelpRequest {
  add(data: HelpRequestParams): Promise<HelpRequest>
}
