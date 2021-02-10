import { AddHelpRequestController } from '@src/presentation/controllers/add-help-request'
import { Router } from 'express'
import { routeAdapter } from './adapters/express-routes'
const router = Router()

const addHelpRequestController = new AddHelpRequestController()

router.post('/help-request', routeAdapter(addHelpRequestController))

export default router
