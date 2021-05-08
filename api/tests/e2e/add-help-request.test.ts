import { close, connect } from '@/infra/database/helpers/mongoose'
import app from '@/main/server/app'
import { fakeHelpRequestParams } from '../mocks/help-request'
import supertest from 'supertest'

describe('AddHelpRequest Controller', () => {
  const request = supertest(app)

  beforeAll(async () => await connect())
  afterAll(async () => await close())

  it('Should return 204 on success', async () => {
    const response = await request.post('/api/help-request').send(fakeHelpRequestParams)
    expect(response.status).toBe(204)
  })

  it('Should return 400 if is missing para on request body', async () => {
    const response = await request.post('/api/help-request').send({ longitude: -46.869015 })
    expect(response.status).toBe(400)
  })

  it('', () => expect(1).toBe(1))
})
