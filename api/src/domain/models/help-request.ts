export interface HelpRequest {
  id: string
  date: Date
  latitude: number
  longitude: number
}

export interface InputHelpRequest extends Omit<HelpRequest, 'id' | 'date'> {}
export interface StoreHelpRequest extends Omit<HelpRequest, 'id'> {}
