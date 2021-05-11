import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import { addHelpRequestController } from '../compositions/controllers/add-help-request'

const router = Router()

router.post('/help-request', adaptRoutes(addHelpRequestController))

export default router
