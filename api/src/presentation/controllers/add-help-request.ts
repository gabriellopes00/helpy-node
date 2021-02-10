import { InputHelpRequest } from '@src/domain/models/help-request'
import { AddHelpRequest } from '@src/domain/usecases/add-help-request'
import { noContent, serverError } from '../helpers/http'
import { Controller } from '../interfaces/controller'
import { HttpRequest, HttpResponse } from '../interfaces/http'

export class AddHelpRequestController implements Controller {
  constructor(private readonly addHelpRequest: AddHelpRequest) {}

  async handle(
    httpRequest: HttpRequest<InputHelpRequest>
  ): Promise<HttpResponse> {
    try {
      const helpRequest = httpRequest.body
      await this.addHelpRequest.add(helpRequest)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
