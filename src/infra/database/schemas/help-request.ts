import { HelpRequest } from '@/domain/models/help-request'
import mongoose, { Document, Model, Schema } from 'mongoose'

const schema = new Schema({
  id: { type: String, required: true },
  date: { type: Date, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
})

export interface HelpRequestSchema extends Omit<HelpRequest, 'id'>, Document {}
export const DbHelpRequest: Model<HelpRequestSchema> = mongoose.model('help-requests', schema)
