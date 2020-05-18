import mongoose, { Schema } from 'mongoose'

const schemas =  new mongoose.Schema({
  content: { type: String },
  author_id: { type: Schema.Types.ObjectId, ref: 'User'},
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  deleted: {type: Boolean, default: false},
  is_resolve: {type: Boolean, default: false},
})

schemas.index({create_at: -1})

const model = mongoose.model('feedback', schemas)

export default model