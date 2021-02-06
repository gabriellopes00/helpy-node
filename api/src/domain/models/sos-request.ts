export interface Position {
  latitude: number
  longitude: number
}

export interface SOSRequest {
  id: string
  date: Date
  location: Position
}

export interface InputSOSRequest extends Omit<SOSRequest, 'id'> {}
