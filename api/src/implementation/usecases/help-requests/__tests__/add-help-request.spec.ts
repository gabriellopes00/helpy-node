import { fakeHelpRequest, fakeHelpRequestParams, fakeStoreHelpRequest } from '@/mocks/help-request'
import { HelpRequest, HelpRequestParams } from '@/domain/models/help-request'
import { AddHelpRequest } from '@/domain/usecases/add-help-request'
import mockDate from 'mockdate'
import { DbAddHelpRequest } from '../add-help-request'

class MockHelpRequestRepository implements AddHelpRequest {
  async add(data: HelpRequestParams): Promise<HelpRequest> {
    return fakeHelpRequest
  }
}

describe('AddHelpRequest', () => {
  const mockRepository = new MockHelpRequestRepository() as jest.Mocked<MockHelpRequestRepository>
  const sut = new DbAddHelpRequest(mockRepository)

  beforeAll(() => mockDate.set(new Date('2021')))
  afterAll(() => mockDate.reset())

  it('Should call HelpRequestRepository with correct values', async () => {
    const addSpy = jest.spyOn(mockRepository, 'add')
    await sut.add(fakeHelpRequestParams)
    expect(addSpy).toHaveBeenCalledWith(fakeStoreHelpRequest)
  })

  it('Should return a helpRequest on success', async () => {
    const helpRequest = await sut.add(fakeHelpRequestParams)
    expect(helpRequest).toEqual(expect.objectContaining(fakeHelpRequestParams))
  })

  it('Should throw if HelpRequestRepository throws', async () => {
    mockRepository.add.mockRejectedValueOnce(new Error())
    const helpRequest = sut.add(fakeHelpRequestParams)
    await expect(helpRequest).rejects.toThrow()
  })
})
