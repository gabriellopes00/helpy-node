import { fakeHelpRequest, fakeStoreHelpRequest } from 'tests/mocks/help-request'
import { close, connect } from '@/infra/database/helpers/mongoose'
import { DbHelpRequest } from '@/infra/database/help-requests/model'
import { MongoHelpRequestRepository } from '@/infra/database/help-requests/repository'

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
