import { HelpRequest } from '@/domain/models/help-request'
import { HelpRequestParams } from '@/domain/usecases/add-help-request'
import { MockUUIDGenerator } from './uuid-generator'

export const fakeHelpRequest: HelpRequest = {
  id: new MockUUIDGenerator().generate(),
  date: new Date('2021'),
  latitude: -23.168516,
  longitude: -46.869015
}

export const fakeHelpRequestParams: HelpRequestParams = {
  latitude: -23.168516,
  longitude: -46.869015
}
