import { connect, close } from '@/infra/database/helpers/mongoose'
import app from '@/main/config/app'
import supertest from 'supertest'

beforeAll(async () => {
  await connect()
  global.testRequest = supertest(app)
})

afterAll(async () => {
  await close()
})
