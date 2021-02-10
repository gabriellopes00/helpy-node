import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../interfaces/http'

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  body: new ServerError(error.message, error.stack)
})
