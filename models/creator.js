<<<<<<< HEAD
const Creator = {
  username: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
=======
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const creatorSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: 'Username taken, please choose another'},
  email: { type: String, required: true, unique: 'Email taken, please choose another'},
  password: { type: String, required: 'Password required'},
>>>>>>> development
  image: { type: String },
  items: { type: Array } //array of references
}
