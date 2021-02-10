import { InputHelpRequest } from '@src/domain/models/help-request'
import { DbAddHelpRequest } from '../add-help-request'
import { FakeHelpRepository } from './factory'
import mockDate from 'mockdate'

describe('AddHelpRequest', () => {
  const fakeHelpRepository = new FakeHelpRepository()
  const sut = new DbAddHelpRequest(fakeHelpRepository)
  const fakeHelpRequest: InputHelpRequest = {
    latitude: -23.168516,
    longitude: -46.869015
  }

  beforeAll(() => mockDate.set(new Date()))
  afterAll(() => mockDate.reset())

  it('Should call HelpRequestRepository with correct values', async () => {
    const addSpy = jest.spyOn(fakeHelpRepository, 'add')
    await sut.add(fakeHelpRequest)
    expect(addSpy).toHaveBeenCalledWith({
      date: new Date(),
      latitude: -23.168516,
      longitude: -46.869015
    })
  })

  it('Should return a helpRequest on success', async () => {
    const helpRequest = await sut.add(fakeHelpRequest)
    expect(helpRequest).toEqual(expect.objectContaining(fakeHelpRequest))
  })

  it('Should throw if HelpRequestRepository throws', async () => {
    jest
      .spyOn(fakeHelpRepository, 'add')
      .mockReturnValueOnce(
        new Promise((resolve, reject) => reject(new Error()))
      )

    const helpRequest = sut.add(fakeHelpRequest)
    await expect(helpRequest).rejects.toThrow()
  })
})
