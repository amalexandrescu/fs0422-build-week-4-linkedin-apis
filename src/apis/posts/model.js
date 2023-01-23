import mongoose from 'mongoose'

const { Schema, model } = mongoose

const postSchema = new Schema(
  {
    text: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String },
    user: {
      firstName: { type: String },
      surname: { type: String },
      image: { type: String },
    },
  },
  {
    timestamps: true,
  },
)

export default model('posts', postSchema)
