import { HelpRequest, InputHelpRequest } from '@src/domain/models/help-request'
import { AddHelpRequest } from '@src/domain/usecases/add-help-request'
import { AddHelpRequestController } from '../add-help-request'

class FakeAddHelpRequest implements AddHelpRequest {
  async add(data: InputHelpRequest): Promise<HelpRequest> {
    return {
      id: 'asdf',
      date: new Date('2021-02-06T23:33:44.290Z'),
      location: {
        latitude: -23.168516,
        longitude: -46.869015
      }
    }
  }
}

describe('Unit AddHelpRequest controller tests', () => {
  const fakeAddHelpRequest = new FakeAddHelpRequest()
  const sut = new AddHelpRequestController(fakeAddHelpRequest)

  const fakeHelpRequest: InputHelpRequest = {
    date: new Date('2021-02-06T23:33:44.290Z'),
    location: {
      latitude: -23.168516,
      longitude: -46.869015
    }
  }

  it('Should call addHelpRequest with correct values', async () => {
    const addSpy = jest.spyOn(fakeAddHelpRequest, 'add')
    await sut.handle({ body: fakeHelpRequest })
    expect(addSpy).toHaveBeenCalledWith(fakeHelpRequest)
  })
})
