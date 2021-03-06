import { HelpRequest } from '@/domain/models/help-request'
import mongoose, { Document, Model, Schema } from 'mongoose'

const schema = new Schema(
  {
    date: { type: Date, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

export interface HelpRequestSchema extends Omit<HelpRequest, 'id'>, Document {}
export const DbHelpRequest: Model<HelpRequestSchema> = mongoose.model('help-requests', schema)
