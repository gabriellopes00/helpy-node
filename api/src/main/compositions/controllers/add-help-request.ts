import { DbAddHelpRequest } from '@src/implementation/usecases/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@src/infra/database/help-requests/repository'
import { AddHelpRequestController } from '@src/presentation/controllers/add-help-request'
import { RequiredFieldsValidation } from '@src/presentation/validation/usecases/required-fields-validation'
import { ValidationCompositor } from '@src/presentation/validation/usecases/validation-compositor'

// DbAddHelpRequest
const helpRequestRepository = new MongoHelpRequestRepository()
const dbAddHelpRequest = new DbAddHelpRequest(helpRequestRepository)

const validations = new ValidationCompositor([
  new RequiredFieldsValidation(['latitude', 'longitude'])
])

export const addHelpRequestController = new AddHelpRequestController(
  dbAddHelpRequest,
  validations
)
