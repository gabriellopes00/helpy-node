import { InputHelpRequest } from '@/domain/models/help-request'
import { close, connect } from '@/infra/database/helpers/mongoose'
import app from '@/main/config/app'
import supertest from 'supertest'

describe('AddHelpRequest Controller', () => {
  const fakeHelpRequest: InputHelpRequest = { latitude: -23.168516, longitude: -46.869015 }
  const request = supertest(app)

  beforeAll(async () => await connect())
  afterAll(async () => await close())

  it('Should return 204 on success', async () => {
    const response = await request.post('/api/help-request').send(fakeHelpRequest)
    expect(response.status).toBe(204)
  })

  it('Should return 400 if is missing para on request body', async () => {
    const response = await request.post('/api/help-request').send({ longitude: -46.869015 })
    expect(response.status).toBe(400)
  })
})
