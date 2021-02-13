import { InputHelpRequest } from '@src/domain/models/help-request'

describe('AddHelpRequest Controller', () => {
  const fakeHelpRequest: InputHelpRequest = {
    latitude: -23.168516,
    longitude: -46.869015
  }

  it('Should return 204 on success', async () => {
    const response = await global.testRequest
      .post('/api/help-request')
      .send(fakeHelpRequest)
    expect(response.status).toBe(204)
  })

  it('Should return 400 if is missing para on request body', async () => {
    const response = await global.testRequest.post('/api/help-request').send({
      longitude: -46.869015
    })
    expect(response.status).toBe(400)
  })
})
