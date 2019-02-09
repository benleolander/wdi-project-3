const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: 'Username taken, please choose another'},
  email: { type: String, required: true, unique: 'Email taken, please choose another'},
  password: { type: String, required: 'Password required'},
  image: { type: String },
  items: { type: Array }
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

creatorSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }
  next()
})

creatorSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('Creator', creatorSchema)
