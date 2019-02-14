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
          username: 'PaperMonkey',
          email: 'monkey@paper.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://origami.me/wp-content/uploads/2016/12/origami-animals-featured.jpg',
          bio: 'Talking \'bout the big Monkey man... I make, I create, my aim is to awake.'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Wicker Chair',
        image: 'https://i.pinimg.com/564x/67/5e/12/675e1297eb9740eaec531c52db9fa3b5.jpg',
        creator: data.creator,
        description: 'A lovely little chair made by me',
        categories: ['chair', 'paper', 'wicker'],
        comments: [
          {
            name: 'Ben',
            rating: 5,
            body: 'I love this!'
          }
        ]
      }),
      Item.create({
        name: 'Individual drawers',
        image: 'https://i.pinimg.com/564x/ce/be/83/cebe83117cccb1720ac90130adac2a47.jpg',
        creator: data.creator,
        description: 'Single standing drawers. There were made by me.',
        categories: ['wood', 'drawers', 'storage', 'homemade']
      }),
      Item.create({
        name: 'Bannister table',
        image: 'http://www.occupy-oc.org/images/awesome-furniture-out-best-25-recycled-furniture-ideas-on-pinterest-upcycled-furniture-homemade-furniture-and-homemade-kitchen-furniture',
        creator: data.creator,
        description: 'A table made by me. Here I used old banisters to make the table, I think it looks pretty cool',
        categories: ['wood', 'table', 'creative', 'stairs']
      }),
      Item.create({
        name: 'Copper Rail',
        image: 'https://images.victorianplumbing.co.uk/images/SUN-TR19_p1.jpg',
        creator: data.creator,
        description: 'A quality traditional copper lacquered radiator with stylish ball joints, it\'s classic design would look great in any bathroom',
        categories: ['metal', 'rail', 'mounted', 'bathroom']
      }),
      Item.create({
        name: 'Wicker lights',
        image: 'https://i.pinimg.com/originals/d6/1a/35/d61a358f40c8f67cf2ce68c2228364be.jpg',
        creator: data.creator,
        description: 'Lights made from old wicker chairs that I think would look great in a kitchen',
        categories: ['lights', 'hanging', 'kitchen', 'bedroom']
      }),
      Item.create({
        name: 'Log coat rack',
        image: 'https://hips.hearstapps.com/clv.h-cdn.co/assets/16/12/cool_diy_coat_racks1.jpg',
        creator: data.creator,
        description: 'A coat rack I made from some old trees, don\'t worry, they were already dead',
        categories: ['wood', 'hanging', 'coats']
      }),
      Item.create({
        name: 'TV stand',
        image: 'https://i.etsystatic.com/9247451/r/il/7614d8/739654780/il_1140xN.739654780_skh1.jpg',
        creator: data.creator,
        description: 'A homemade tv stand made from timber and steel',
        categories: ['wood', 'stand', 'living', 'steel']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'TomAbbott',
          email: 'tom@etom.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754',
          bio: 'I make furniture specializing in using old sewing machines and I make chairs'

        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Sewing Machine Table',
        image: 'https://i.pinimg.com/564x/fc/9a/02/fc9a02eb89b9261dd498c7c6ccc890dc.jpg',
        creator: data.creator,
        description: 'This is a table that has been created using a sewing machine',
        categories: ['table', 'wood', 'seeded', 'homeMade', 'art']
      }),
      Item.create({
        name: 'Sewing Machine Chair',
        image: 'https://i.pinimg.com/564x/c4/4c/d7/c44cd7f0cecbf884abb08ef3425fa4b5.jpg?b=t',
        creator: data.creator,
        description: 'This is a chair that has been created using a sewing machine',
        categories: ['chair', 'wood', 'metal', 'art']
      }),
      Item.create({
        name: 'Sewing Machine lamp',
        image: 'https://i.pinimg.com/564x/eb/63/12/eb6312ca2ccf404a6e0d33a82a675082.jpg?b=t',
        creator: data.creator,
        description: 'This is a lamp that has been created using a sewing machine',
        categories: ['lamp', 'metal', 'art', 'hanging']
      }),
      Item.create({
        name: 'Arm chair',
        image: 'https://i.pinimg.com/originals/df/fb/83/dffb8367460158f973dfdcbb79543ad8.png',
        creator: data.creator,
        description: 'This is a arm chair that has been created using refurbished wood',
        categories: ['chair', 'wood', 'art', 'relax', 'outdoors']
      }),
      Item.create({
        name: 'Chair',
        image: 'https://i.ytimg.com/vi/7cuBZ2BVvjA/maxresdefault.jpg',
        creator: data.creator,
        description: 'This is a small chair that has been created using old wood',
        categories: ['flowers', 'metal', 'wood', 'relax']
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'Gandalf',
          email: 'the@grey.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-the-lord-of-the-rings-ian-mckellen.jpg',
          bio: 'You shall not pass!! Without looking at my fabulous furniture.'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Alice in wonderland clock',
        image: 'https://i.etsystatic.com/8729771/r/il/718f10/1822045331/il_1140xN.1822045331_h18k.jpg',
        creator: data.creator,
        description: 'Vintage Style Alice In Wonderland Wall Clock: The Mad Hatters Tea Party',
        categories: ['clock', 'kitchen', 'art']
      }),
      Item.create({
        name: 'Swinging bed',
        image: 'https://i.pinimg.com/564x/de/05/33/de053397af31d32b2d1042079b7efa04.jpg?b=t',
        creator: data.creator,
        description: 'Perfect for swinging on a bed. This was made by me.',
        categories: ['bed', 'bedroom', 'wood', 'hanging']
      }),
      Item.create({
        name: 'Hanging bed',
        image: 'https://i.pinimg.com/564x/17/1c/6c/171c6c57a9d3943fb6f866655255bcf3.jpg?b=t',
        creator: data.creator,
        description: 'Hanging, floating bed',
        categories: ['bed', 'bedroom', 'hanging', 'art']
      }),
      Item.create({
        name: 'Storage boxes',
        image: 'https://i.etsystatic.com/15480697/r/il/96e1f4/1231011024/il_1140xN.1231011024_9rzo.jpg',
        creator: data.creator,
        description: 'Storage boxed, made from old fruit boxes',
        categories: ['storage', 'wood', 'boxes', 'chic']
      }),
      Item.create({
        name: 'Wall lights',
        image: 'https://cdn.homedit.com/wp-content/uploads/2015/05/galvanized-bathroom-lighting-system-diy.jpg',
        creator: data.creator,
        description: 'Lights made from oak, they hang on a wall - will require a power source',
        categories: ['lights', 'indoor', 'wood']
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
          bio: 'I am a little teapot short and stout here is my furniture here is my spanner'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'DIY Table lamp',
        image: 'https://i.pinimg.com/564x/e1/f3/0d/e1f30dbb499f75190ecdab188c832eb2.jpg?b=t',
        creator: data.creator,
        description: 'Diy lamp.',
        categories: ['table', 'lighting', 'lamp', 'bedroom', 'study']
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
        name: 'Wooden sofa',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLNUeHB_UpruAN7GHngMAl01VI2AAoKzMY-cMMCw4LYA_L42t',
        creator: data.creator,
        description: 'Homemade sofa',
        categories: ['indoor', 'sofa', 'wooden'],
        comments: [
          {
            name: 'Beth',
            rating: 5,
            body: 'I love this!'
          },
          {
            name: 'Dex',
            rating: 4,
            body: 'This is pretty cool'
          }
        ]
      }),
      Item.create({
        name: 'Bedroom Mirror',
        image: 'https://i.pinimg.com/564x/e9/b2/86/e9b286a7471defb87a7e464eb24fdbbb.jpg?b=t',
        creator: data.creator,
        description: 'Homemade mirror from timber, great for the bedroom',
        categories: ['bedroom', 'mirror', 'wood']
      }),
      Item.create({
        name: 'Bedside stand',
        image: 'https://i.pinimg.com/564x/d9/5a/74/d95a74380ad3481cc7447054491db74a.jpg?b=t',
        creator: data.creator,
        description: 'Homemade bedstand from stone',
        categories: ['bedroom', 'stand', 'table'],
        comments: [
          {
            name: 'Tom',
            rating: 5,
            body: 'I love this!'
          },
          {
            name: 'Beth',
            rating: 4,
            body: 'This is pretty cool'
          }
        ]
      }),
      Item.create({
        name: 'Bedroom shelves',
        image: 'https://i.pinimg.com/564x/4e/14/d6/4e14d6025158d712b1045edb84b1969d.jpg',
        creator: data.creator,
        description: 'Homemade shelves',
        categories: ['bedroom', 'shelves', 'wood'],
        comments: [
          {
            name: 'Ben',
            rating: 5,
            body: 'I love this!'
          },
          {
            name: 'Tom',
            rating: 4,
            body: 'This is pretty cool'
          },
          {
            name: 'Beth',
            rating: 3,
            body: 'Looks ok....'
          },
          {
            name: 'Dex',
            rating: 1,
            body: 'Dumb'
          }
        ]
      })
    })
    .then(() => {
      return Promise.props({
        creator: Creator.create({
          username: 'JimmyTwoTimes',
          email: 'jimmy@jimmy.com',
          password: 'password',
          passwordConfirmation: 'password',
          image: 'https://vignette.wikia.nocookie.net/godfather-fanon/images/f/fb/Jimmy_Two-Times.png/revision/latest?cb=20130317044438',
          bio: 'I\'ll go get the papers, get the papers.'
        })
      })
    })
    .then(data => {
      return Item.create({
        name: 'Wall clock',
        image: 'https://i.shelterness.com/2016/04/trendy-diy-cork-color-block-clock-1-750x523.jpg',
        creator: data.creator,
        description: 'A clock for the wall sofa',
        categories: ['indoor', 'clock', 'wooden'],
        comments: [
          {
            name: 'Frank',
            rating: 3,
            body: 'Its ok'
          },
          {
            name: 'Dex',
            rating: 2,
            body: 'It is just a clock'
          }
        ]
      }),
      Item.create({
        name: 'Coffee table',
        image: 'https://i.etsystatic.com/14342952/r/il/89537f/1716041911/il_1140xN.1716041911_c1t5.jpg',
        creator: data.creator,
        description: 'This is a hand crafted wood Live Edge Modern Coffee Table with Mid-Century Hairpin Legs - made from Acacia',
        categories: ['coffee', 'table', 'wood']
      }),
      Item.create({
        name: 'Bathroom door sign',
        image: 'https://i.etsystatic.com/10455115/r/il/5aedc0/1658232339/il_1140xN.1658232339_5uu6.jpg',
        creator: data.creator,
        description: 'Then this is the perfect item for you! With a Bathroom solid brass door sign visitors will be know exactly where your bathroom is and will not be wandering around your premises in a towel looking for somewhere to bathe',
        categories: ['bathroom', 'metal', 'sign'],
        comments: [
          {
            name: 'Jamie',
            rating: 5,
            body: 'I love this!'
          },
          {
            name: 'Beth',
            rating: 5,
            body: 'I want one'
          }
        ]
      }),
      Item.create({
        name: 'Hanging Mirror',
        image: 'https://i.etsystatic.com/19070652/r/il/b286e5/1753019928/il_1140xN.1753019928_fce8.jpg',
        creator: data.creator,
        description: 'Homemade mirror',
        categories: ['hanging', 'mirror', 'bathroom'],
        comments: [
          {
            name: 'Dex',
            rating: 3,
            body: 'Decent!'
          },
          {
            name: 'Tom',
            rating: 4,
            body: 'This is pretty cool'
          },
          {
            name: 'Sally',
            rating: 1,
            body: 'Do not shop here, delivery never came'
          },
          {
            name: 'Mark',
            rating: 1,
            body: 'Never came, money was returned'
          }
        ]
      }),
      Item.create({
        name: 'Outdoor light',
        image: 'https://i.etsystatic.com/11315857/r/il/594126/1735466387/il_1140xN.1735466387_gbw3.jpg',
        creator: data.creator,
        description: 'Inspired by 1950s ship lights, the Marine Nautical Wall Light adds nautical charm and can be used as a wall or ceiling fitting both indoors or outdoors.',
        categories: ['outdoor', 'indoor', 'lights', 'hanging']
      })
    })
    .then(() => console.log('Seeds sown. 🌱'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
