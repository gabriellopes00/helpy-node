import { AddHelpRequest, HelpRequestParams } from '@/domain/usecases/add-help-request'
import { badRequest, noContent, serverError } from '../helpers/http'
import { Controller } from '../ports/controller'
import { HttpRequest, HttpResponse } from '../ports/http'
import { Validation } from '../ports/validation'

export class AddHelpRequestController implements Controller {
  constructor(
    private readonly addHelpRequest: AddHelpRequest,
    private readonly validation: Validation,
    private readonly eventEmitter: NodeJS.EventEmitter
  ) {}

  async handle(httpRequest: HttpRequest<HelpRequestParams>): Promise<HttpResponse> {
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
