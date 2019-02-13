const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: 'Please enter a username', unique: 'Username taken, please choose another'},
  email: { type: String, required: 'please enter a password', unique: 'Email taken, please choose another'},
  password: { type: String, required: 'Password required'},
  image: { type: String },
  bio: { type: String, required: true, maxlength: 300 }
})

creatorSchema.virtual('items', {
  ref: 'Item',
  localField: '_id',
  foreignField: 'creator'
})

creatorSchema.virtual('creatorAverage')
  .get(function(){
    if(this.items) {
      const validRatings = this.items.filter((item) => {
        return item.averageRating
      })

      const total = validRatings.reduce((total, item) => {
        return total + item.averageRating
      }, 0)
      const avg = total/validRatings.length

      return Math.round(avg * 10) / 10 //Rounds avg to 1 decimal place while keeping it as a number
    }
  })

creatorSchema.virtual('creatorAverage', {
  ref: 'Creator',
  localField: '_id',
  foreignField: 'Creator.creatorAverage'
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

creatorSchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Creator', creatorSchema)
