import { InputHelpRequest, HelpRequest } from '../models/help-request'

export interface AddHelpRequest {
  add(data: InputHelpRequest): Promise<HelpRequest>
}
