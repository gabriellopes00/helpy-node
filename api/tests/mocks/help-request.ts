import { HelpRequest } from '@/domain/models/help-request'
import { HelpRequestParams } from '@/domain/usecases/add-help-request'
import { DbHelpRequestModel } from '@/usecases/ports/add-help-request-repository'

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

export const fakeStoreHelpRequest: DbHelpRequestModel = {
  date: new Date('2021'),
  latitude: -23.168516,
  longitude: -46.869015
}
