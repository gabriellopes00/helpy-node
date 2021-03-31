import { HelpRequestParams, HelpRequest } from '../models/help-request'

export interface AddHelpRequest {
  add(data: HelpRequestParams): Promise<HelpRequest>
}
