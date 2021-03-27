import { DbAddHelpRequest } from '@/implementation/usecases/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@/infra/database/help-requests/repository'
import { CoordinatesValidator } from '@/infra/validation/usecases/coordinates-validation'
import { AddHelpRequestController } from '@/presentation/controllers/add-help-request'
import { CoordinatesValidation } from '@/presentation/validation/usecases/coordinates-validation'
import { RequiredFieldsValidation } from '@/presentation/validation/usecases/required-fields-validation'
import { ValidationCompositor } from '@/presentation/validation/usecases/validation-compositor'
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
