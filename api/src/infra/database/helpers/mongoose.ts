import { MONGO_URL } from '@/config/env'
import mongoose, { Mongoose } from 'mongoose'

export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

export const close = (): Promise<void> => mongoose.connection.close()
