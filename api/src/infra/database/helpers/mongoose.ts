import mongoose, { Mongoose } from 'mongoose'

const { MONGO_URL } = process.env

export const connect = async (): Promise<Mongoose> =>
  await mongoose.connect(MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

export const close = (): Promise<void> => mongoose.connection.close()
