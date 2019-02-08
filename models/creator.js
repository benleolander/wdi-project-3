const mongoose = require('mongoose')

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  image: { type: String },
  items: { type: Array } //array of references
})

module.exports = mongoose.model('Creator', creatorSchema)
