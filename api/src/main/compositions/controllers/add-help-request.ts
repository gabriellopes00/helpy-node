import { DbAddHelpRequest } from '@/usecases/implementation/help-requests/add-help-request'
import { MongoHelpRequestRepository } from '@/infra/database/repositories/help-request'
import { CoordinatesValidator } from '@/infra/validation/coordinates-validation'
import { AddHelpRequestController } from '@/presentation/controllers/add-help-request'
import { CoordinatesValidation } from '@/presentation/validation/coordinates-validation'
import { RequiredFieldsValidation } from '@/presentation/validation/required-fields-validation'
import { ValidationCompositor } from '@/presentation/validation/validation-compositor'
import { eventEmitter } from '../event/event-emitter'
import { IdGenerator } from '@/infra/utils/uuid-generator'

const helpRequestRepository = new MongoHelpRequestRepository()
const idGenerator = new IdGenerator()
const dbAddHelpRequest = new DbAddHelpRequest(helpRequestRepository, idGenerator)

const validations = new ValidationCompositor([
  new RequiredFieldsValidation(['latitude', 'longitude']),
  new CoordinatesValidation(new CoordinatesValidator())
])

export const addHelpRequestController = new AddHelpRequestController(
  dbAddHelpRequest,
  validations,
  eventEmitter
)
