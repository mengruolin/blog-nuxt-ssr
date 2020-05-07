import mongoose, { Schema } from 'mongoose'
import baseModel from './base_model'

const schemas =  new mongoose.Schema({
  title: {type: String},
  content: { type: String },
  author_id: { type: Schema.Types.ObjectId, ref: 'User' },
  top: { type: Boolean, default: false },
  good: {type: Boolean, default: false},
  hot: {type: Boolean, default: false},
  reply_count: { type: Number, default: 0 },
  visit_count: { type: Number, default: 0 },
  collect_count: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  tab: {type: String},
  is_solved: {type: Boolean, default: false},
  deleted: {type: Boolean, default: false},
})

schemas.plugin(baseModel)
schemas.index({update_at: -1})
schemas.index({top: -1})
schemas.index({author_id: 1, create_at: -1})

const model = mongoose.model('bbs_topic', schemas)

export default model