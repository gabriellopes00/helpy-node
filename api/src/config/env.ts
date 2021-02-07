import 'dotenv/config'

const port = process.env.PORT
const mongoUrl = process.env.MONGO_URL

export { port, mongoUrl }
