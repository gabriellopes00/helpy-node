import { DbAddHelpRequest } from '@/usecases/implementation/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@/infra/database/repositories/help-request'
import { CoordinatesValidator } from '@/infra/validation/coordinates-validation'
import { AddHelpRequestController } from '@/presentation/controllers/add-help-request'
import { CoordinatesValidation } from '@/presentation/validation/coordinates-validation'
import { RequiredFieldsValidation } from '@/presentation/validation/required-fields-validation'
import { ValidationCompositor } from '@/presentation/validation/validation-compositor'
import { eventEmitter } from '../event/event-emitter'

const helpRequestRepository = new MongoHelpRequestRepository()
const dbAddHelpRequest = new DbAddHelpRequest(helpRequestRepository)

const validations = new ValidationCompositor([
  new RequiredFieldsValidation(['latitude', 'longitude']),
  new CoordinatesValidation(new CoordinatesValidator())
])

export const addHelpRequestController = new AddHelpRequestController(
  dbAddHelpRequest,
  validations,
  eventEmitter
)
