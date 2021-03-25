import { Router } from 'express'
import { adaptRoutes } from '../adapters/express-routes'
import {
  addHelpRequestController,
  eventEmitter
} from '../compositions/controllers/add-help-request'

export default (router: Router): void => {
  router.post('/help-request', adaptRoutes(addHelpRequestController))
  router.get('/asdf', (req, res) => {
    eventEmitter.on('new_help_request', data => res.json({ message: 'event received', data }))
  })
}
