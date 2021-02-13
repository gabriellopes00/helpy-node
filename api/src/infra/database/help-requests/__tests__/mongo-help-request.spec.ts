import { StoreHelpRequest } from '@src/domain/models/help-request'
import { DbHelpRequest } from '../model'
import { connect, close } from '../../helpers/mongoose'
import { MongoHelpRequestRepository } from '../repository'

describe('Mongoose HelpRequest', () => {
  const Model = DbHelpRequest
  const fakeHelpRequest: StoreHelpRequest = {
    date: new Date(),
    latitude: -23.168516,
    longitude: -46.869015
  }

  beforeAll(async () => await connect())
  afterAll(async () => await close())
  beforeEach(async () => await Model.deleteMany({}))

  describe('HelpRequest Model', () => {
    it('Should create a new help request', async () => {
      const helpRequest = new Model(fakeHelpRequest)
      const insertedHelpRequest = await helpRequest.save()
      expect(await Model.findById(insertedHelpRequest.id)).toBeTruthy()
    })
  })

  describe('HelpRequest Repository', () => {
    const repository = new MongoHelpRequestRepository()
    it('Should create a new help request', async () => {
      const helpRequest = await repository.add(fakeHelpRequest)
      expect(helpRequest).toEqual(expect.objectContaining(fakeHelpRequest))
    })
  })
})
