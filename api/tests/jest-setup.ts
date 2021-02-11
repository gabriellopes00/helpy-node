import { connect, close } from '@src/infra/database/helpers/mongoose'
import app from '@src/main/config/app'
import supertest from 'supertest'

beforeAll(async () => {
  await connect()
  global.testRequest = supertest(app)
})

afterAll(async () => {
  await close()
})
