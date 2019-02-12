const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: { type: String, required: 'Please enter a display name' },
  rating: {type: Number },
  body: { type: String, required: 'Please enter a comment'}
}, {
  timestamps: true
})

const itemSchema = new mongoose.Schema({
  name: { type: String, required: 'Please add a title' },
  image: { type: String, required: 'Please add an image' },
  creator: { type: mongoose.Schema.ObjectId, ref: 'Creator', required: true },
  description: { type: String, required: 'Please add a description' },
  categories: { type: Array, required: 'Please select at least one catagory' },
  comments: [ commentSchema ]
})


module.exports = mongoose.model('Item', itemSchema)
