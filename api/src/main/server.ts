import 'module-alias/register'
import { close, connect } from '@src/infra/database/helpers/mongoose'
import { port } from '../config/env'
;(async () => {
  try {
    await connect()
    console.log('Mongodb connected successfully')

    const app = (await import('./config/app')).default
    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })

    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
    for (const signal of exitSignals) {
      process.on(signal, async () => {
        try {
          await close()
          server.close()
          console.log('Server stopped successfully')
          process.exit(0)
        } catch (error) {
          console.log(`App exited with error: ${error}`)
          process.exit(1)
        }
      })
    }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()

// Errors handles
process.on('unhandledRejection', (reason, promise) => {
  console.log(
    `App exiting due an unhandled promise: ${promise} and reason: ${reason}`
  )
  throw reason
})

process.on('uncaughtException', error => {
  console.log(`App exiting due to an uncaught exception: ${error}`)
  process.exit(0)
})
