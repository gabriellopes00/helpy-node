describe('AddHelpRequest Controller', () => {
  it('Should return 500 if something went wrong during the processing', async () => {
    const response = await global.testRequest.post('/help-request')
    expect(response.status).toBe(500)
  })
})
