const mongoose = require('mongoose')

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  image: { type: String },
  items: { type: Array } //array of references
})

creatorSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

creatorSchema.pre('validate', function checkPasswordsMath(next) {
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'Passwords do not match')
  }
  next()
})

module.exports = mongoose.model('Creator', creatorSchema)
