const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: { type: String, required: 'Please add a title' },
  image: { type: String, required: 'Please add an image' },
  creator: { type: mongoose.Schema.ObjectId, ref: 'Creator', required: true },
  description: { type: String, required: 'Please add a description' },
  categories: { type: Array, required: 'Please select at least one catagory' }
})


module.exports = mongoose.model('Item', itemSchema)
