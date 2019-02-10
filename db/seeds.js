require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Creator = require('../models/creator')
const Item = require('../models/item')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'SeededUser01',
          email: 'noreply@email.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Tigerwood Outdoor Dining Table',
        image: 'http://www.homemade-modern.com/wp-content/uploads/2018/05/tigerwoodtable-banner.jpg',
        creator: data.creator,
        description: 'This is a table that has been created by seeded data.',
        categories: ['table', 'wood', 'seeded']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'Gandalf',
          email: 'the@grey.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://media1.tenor.com/images/aedb1026190d33420c170c27ca96edd1/tenor.gif?itemid=3520584'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Tree Stump',
        image: 'https://www.elitetreecare.com/wp-content/uploads/2018/06/tree-stump-540x540.jpg',
        creator: data.creator[1],
        description: 'Just a stump of wood in the trees.',
        categories: ['table', 'wood', 'seeded']
      })
    })
    .then(() => console.log('Database Seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})




// creator: Creator.create({
//   username: 'mongoose',
//   email: 'u@me.com',
//   password: 'password',
//   passwordConfirmation: 'password',
//   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yellow_Mongoose_1_%286964624854%29.jpg/170px-Yellow_Mongoose_1_%286964624854%29.jpg'
// }),
// creator: Creator.create({
//   username: 'goat',
//   email: 'goat@goat.com',
//   password: 'password',
//   passwordConfirmation: 'password',
//   image: 'https://images.unsplash.com/photo-1533318087102-b3ad366ed041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
// })
