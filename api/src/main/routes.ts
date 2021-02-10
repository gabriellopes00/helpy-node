import { DbAddHelpRequest } from '@src/implementation/usecases/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@src/infra/database/help-requests/repository'
import { AddHelpRequestController } from '@src/presentation/controllers/add-help-request'
import { Router } from 'express'
import { routeAdapter } from './adapters/express-routes'
const router = Router()

const mongoHelpRequestRepository = new MongoHelpRequestRepository()
const addHelpRequest = new DbAddHelpRequest(mongoHelpRequestRepository)
const addHelpRequestController = new AddHelpRequestController(addHelpRequest)

router.post('/help-request', routeAdapter(addHelpRequestController))

export default router
