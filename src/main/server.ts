import 'module-alias/register'
import 'dotenv/config'

import { close, connect } from '../infra/database/helpers/mongoose'
import { PORT } from './config/env'
import logger from './config/logger'
;(async () => {
  try {
    await connect()
    logger.info('Mongodb connected successfully')

    const app = (await import('./server/app')).default
    const server = app.listen(PORT, () => {
      logger.info(`Server running at http://localhost:${PORT}`)
    })

    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
    for (const signal of exitSignals) {
      process.on(signal, async () => {
        try {
          await close()
          server.close()
          logger.info('Server stopped successfully')
          process.exit(0)
        } catch (error) {
          logger.error(`App exited with error: ${error}`)
          process.exit(1)
        }
      })
    }
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
})()

// Errors handles
process.on('unhandledRejection', (reason, promise) => {
  logger.error(`App exiting due an unhandled promise: ${promise} and reason: ${reason}`)
  throw reason
})

process.on('uncaughtException', error => {
  logger.error(`App exiting due to an uncaught exception: ${error}`)
  process.exit(0)
})
