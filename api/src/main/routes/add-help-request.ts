import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import { addHelpRequestController } from '../compositions/controllers/add-help-request'

export default (router: Router): void => {
  router.post('/help-request', adaptRoutes(addHelpRequestController))
}
