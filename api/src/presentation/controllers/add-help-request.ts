import { InputHelpRequest } from '@/domain/models/help-request'
import { AddHelpRequest } from '@/domain/usecases/add-help-request'
import { badRequest, noContent, serverError } from '../helpers/http'
import { Controller } from '../interfaces/controller'
import { HttpRequest, HttpResponse } from '../interfaces/http'
import { Validation } from '../validation/interfaces/validation'

export class AddHelpRequestController implements Controller {
  constructor(
    private readonly addHelpRequest: AddHelpRequest,
    private readonly validation: Validation,
    private readonly eventEmitter: NodeJS.EventEmitter
  ) {}

  async handle(httpRequest: HttpRequest<InputHelpRequest>): Promise<HttpResponse> {
    try {
      const helpRequest = httpRequest.body

      const error = this.validation.validate(helpRequest)
      if (error) return badRequest(error)

      const createdData = await this.addHelpRequest.add(helpRequest)
      if (createdData) this.eventEmitter.emit('new_help_request', createdData)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
