const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  name: { type: String, required: 'name required' },
  email: { type: String, required: 'Email required' },
  body: {type: String, required: 'Body required' }
})

module.exports = mongoose.model('Message', messageSchema)
