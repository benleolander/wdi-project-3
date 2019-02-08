const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  creator: { type: mongoose.Schema.ObjectId, ref: 'Creator', required: true },
  description: { type: String, required: true },
  categories: { type: Array, required: true }
})

//Dummy data, can be deleted once API is up and running
const dummyData = [
  {
    creator: {
      _id: 1,
      username: 'John Doe',
      email: 'john@doe.com',
      password: 'password',
      image: 'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Ff9ad0916-aad1-11e8-aa49-f23497b9293e.jpg?crop=6604%2C3715%2C0%2C344&resize=1200',
      items: [ {
        name: 'Elven table',
        image: 'http://www.spencerfieldlarcombe.com/images/_cached/400/1809434.jpg',
        description: 'Table for any Gandalf out in the West',
        categories: ['Carpentry', 'Tables']
      } ]
    }
  },
  [
    {
      _id: 2,
      name: 'Elven table',
      image: 'http://www.spencerfieldlarcombe.com/images/_cached/400/1809434.jpg',
      creator: 'John Doe',
      description: 'Table for any Gandalf out in the West',
      categories: ['Carpentry', 'Tables']
    }
  ]
]

module.exports = mongoose.model('Item', itemSchema)
