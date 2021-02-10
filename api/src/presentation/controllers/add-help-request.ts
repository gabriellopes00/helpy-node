import { serverError } from '../helpers/http'
import { Controller } from '../interfaces/controller'
import { HttpRequest, HttpResponse } from '../interfaces/http'

export class AddHelpRequestController implements Controller {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return serverError(new Error('asdf'))
  }
}
