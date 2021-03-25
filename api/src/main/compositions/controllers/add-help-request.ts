import { DbAddHelpRequest } from '@/implementation/usecases/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@/infra/database/help-requests/repository'
import { AddHelpRequestController } from '@/presentation/controllers/add-help-request'
import { RequiredFieldsTypeValidation } from '@/presentation/validation/usecases/required-fields-type-validation'
import { RequiredFieldsValidation } from '@/presentation/validation/usecases/required-fields-validation'
import { ValidationCompositor } from '@/presentation/validation/usecases/validation-compositor'
import EventEmitter from 'events'

// DbAddHelpRequest
const helpRequestRepository = new MongoHelpRequestRepository()
const dbAddHelpRequest = new DbAddHelpRequest(helpRequestRepository)

const validations = new ValidationCompositor([
  new RequiredFieldsValidation(['latitude', 'longitude']),
  new RequiredFieldsTypeValidation()
])

class CustomEventEmitter extends EventEmitter {}
export const eventEmitter = new CustomEventEmitter()

export const addHelpRequestController = new AddHelpRequestController(
  dbAddHelpRequest,
  validations,
  eventEmitter
)
