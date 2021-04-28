import { fakeHelpRequest } from '../../../mocks/help-request'
import { close, connect } from '@/infra/database/helpers/mongoose'
import { DbHelpRequest } from '@/infra/database/schemas/help-request'
import { MongoHelpRequestRepository } from '@/infra/database/repositories/help-request'

describe('Mongoose HelpRequest Repository', () => {
  const Model = DbHelpRequest
  const repository = new MongoHelpRequestRepository()

  beforeAll(async () => await connect())
  afterAll(async () => await close())
  beforeEach(async () => await Model.deleteMany({}))

  it('Should create a new help request on success', async () => {
    const helpRequest = await repository.add(fakeHelpRequest)
    expect(helpRequest).toEqual(expect.objectContaining(fakeHelpRequest))
  })
})
