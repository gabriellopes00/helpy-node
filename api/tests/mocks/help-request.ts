import {
  HelpRequest,
  HelpRequestParams,
  StoreHelpRequest
} from '../../src/domain/models/help-request'

export const fakeHelpRequest: HelpRequest = {
  id: 'any_id',
  date: new Date('20201'),
  latitude: -23.168516,
  longitude: -46.869015
}

export const fakeHelpRequestParams: HelpRequestParams = {
  latitude: -23.168516,
  longitude: -46.869015
}

export const fakeStoreHelpRequest: StoreHelpRequest = {
  date: new Date('2021'),
  latitude: -23.168516,
  longitude: -46.869015
}
