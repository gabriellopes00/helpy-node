import { API_LOG_REQUESTS, NODE_ENV } from '@/config/env'
import { Express, json, Request, Response, NextFunction } from 'express'
import expressPino from 'express-pino-logger'
import logger from '../../config/logger'

const contentType = (_: Request, res: Response, next: NextFunction) => {
  res.type('json')
  next()
}
const cors = (req: Request, res: Response, next: NextFunction) => {
  res.set('access-control-allow-origin', '*')
  res.set('access-control-allow-methods', '*')
  res.set('access-control-allow-headers', '*')
  next()
}

const noCache = (_: Request, res: Response, next: NextFunction) => {
  res.set('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('pragma', 'no-cache')
  res.set('expires', '0')
  res.set('surrogate-control', 'no-store')
  next()
}

const apiLogger = (app: Express) => {
  if (API_LOG_REQUESTS === 'true' && NODE_ENV !== 'test') {
    app.use(
      expressPino({
        logger,
        serializers: {
          req: req => ({ id: req.id, method: req.method, endpoint: req.url }),
          res: res => ({ code: res.statusCode })
        },
        customErrorMessage: (err, res) => `Request ended with error: ${err}.`,
        customSuccessMessage: res => `Request completed successfully with code ${res.statusCode}`
      })
    )
  }
}

export default (app: Express): void => {
  app.use(cors)
  app.use(json())
  app.use(contentType)
  app.use(noCache)
  apiLogger(app)
}
