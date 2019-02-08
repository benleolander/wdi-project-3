const Item = {
  name: { type: String, required: true },
  image: { type: String, required: true },
  creator: { type: mongoose.Schema.ObjectId, ref: 'creator', required: true },
  description: { type: String, required: true },
  categories: { type: Array, required: true }
}
