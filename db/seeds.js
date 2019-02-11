require('dotenv').config()
const mongoose = require('mongoose')
const Promise = require('bluebird')
mongoose.Promise = Promise
const Creator = require('../models/creator')
const Item = require('../models/item')

const { dbURI } = require('../config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'SeededUser01',
          email: 'noreply@email.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png',
          bio: 'Seeeeeeeeeeed seeeeed seeeeed seeeeed'

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
          username: 'PaperMonkey',
          email: 'monkey@paper.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://origami.me/wp-content/uploads/2016/12/origami-animals-featured.jpg',
          bio: 'Talking bout the big Monkey man'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Nut box',
        image: 'https://i.pinimg.com/736x/cb/fa/22/cbfa22fbf262aa4854b112203c513493--rainbow-origami-fancy-tops.jpg',
        creator: data.creator,
        description: 'Excellent for storing nuts and seeds.',
        categories: ['box', 'paper', 'seeded']
      }),
      Item.create({
        name: 'Jungle bookshelf',
        image: 'https://i.ebayimg.com/images/i/233019335717-0-1/s-l1000.jpg',
        creator: data.creator,
        description: 'In the jungle the mighty jungle',
        categories: ['box', 'wood', 'banana']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'Gandalf',
          email: 'the@grey.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://media1.tenor.com/images/aedb1026190d33420c170c27ca96edd1/tenor.gif?itemid=3520584',
          bio: 'You shall not pass!! Without looking at my fabulous furniture.'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Tree Stump',
        image: 'https://www.elitetreecare.com/wp-content/uploads/2018/06/tree-stump-540x540.jpg',
        creator: data.creator,
        description: 'Just a stump of wood in the trees.',
        categories: ['table', 'stump', 'seeded']
      }),
      Item.create({
        name: 'Elven table',
        image: 'http://www.spencerfieldlarcombe.com/images/_cached/400/1809434.jpg',
        creator: data.creator,
        description: 'Perfect for dinner with friends.',
        categories: ['table', 'wood', 'seeded']
      }),
      Item.create({
        name: 'Dwarf bench',
        image: 'https://png.pngtree.com/element_origin_min_pic/17/07/02/ebcc86968cb21438af0ee9675321f39c.jpg',
        creator: data.creator,
        description: 'Perfect for sitting with dwarfs.',
        categories: ['bench', 'wood', 'seeded']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'Billy',
          email: 'billy@goat.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://images.unsplash.com/photo-1533318087102-b3ad366ed041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          bio: 'I am a little teaspout short and stout he is my furniture here is my spanner'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Antler chair',
        image: 'https://i.pinimg.com/236x/f9/a8/17/f9a817dcfbe2e6e01e09e5a4f96a02cd--children-furniture-rustic-furniture.jpg',
        creator: data.creator,
        description: 'In memory of Fred.',
        categories: ['chair', 'seeded']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'Mongoose',
          email: 'u@me.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Yellow_Mongoose_1_%286964624854%29.jpg/170px-Yellow_Mongoose_1_%286964624854%29.jpg',
          bio: 'I eat snakes and make chairs.'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Capsule table',
        image: 'https://i.ytimg.com/vi/Xs03zi79GBA/hqdefault.jpg',
        creator: data.creator,
        description: 'This handy pocket-sized capsule expands into a full-sized modern dining table.',
        categories: ['table', 'capsule', 'seeded']
      })
    })
    .then(() => console.log('Database Seeded'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
