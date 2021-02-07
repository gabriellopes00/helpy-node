export interface Position {
  latitude: number
  longitude: number
}

export interface HelpRequest {
  id: string
  date: Date
  location: Position
}

export interface InputHelpRequest extends Omit<HelpRequest, 'id'> {}
