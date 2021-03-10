import { fakeHelpRequest, fakeStoreHelpRequest } from '@/mocks/help-request'
import { close, connect } from '../../helpers/mongoose'
import { DbHelpRequest } from '../model'
import { MongoHelpRequestRepository } from '../repository'

describe('Mongoose HelpRequest', () => {
  const Model = DbHelpRequest

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
      const helpRequest = await repository.add(fakeStoreHelpRequest)
      expect(helpRequest).toEqual(expect.objectContaining(fakeStoreHelpRequest))
    })
  })
})
