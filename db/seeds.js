require('dotenv').config()

const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.Promise = Promise

const Creator = require('../models/creator')
const Item = require('../models/item')

mongoose.connect(process.env.MONGODB_URI, (err, db) => {
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
    .then(() => console.log('Database Seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
