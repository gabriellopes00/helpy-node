import { InputSOSRequest, SOSRequest } from '../models/request'

export interface AddSOSRequest {
  add(data: InputSOSRequest): Promise<SOSRequest>
}
