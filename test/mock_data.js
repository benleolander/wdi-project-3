const creatorData = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test',
  bio: 'test'
}

const itemData = [
  {
    name: 'Tigerwood Outdoor Dining Table',
    image: 'http://www.homemade-modern.com/wp-content/uploads/2018/05/tigerwoodtable-banner.jpg',
    creator: creatorData,
    description: 'This is a table that has been created by seeded data.',
    categories: ['table', 'wood', 'seeded']
  },
  {
    name: 'Nut box',
    image: 'https://i.pinimg.com/736x/cb/fa/22/cbfa22fbf262aa4854b112203c513493--rainbow-origami-fancy-tops.jpg',
    creator: creatorData,
    description: 'Excellent for storing nuts and seeds.',
    categories: ['box', 'paper', 'seeded']
  },
  {
    name: 'Jungle bookshelf',
    image: 'https://i.ebayimg.com/images/i/233019335717-0-1/s-l1000.jpg',
    creator: creatorData,
    description: 'In the jungle the mighty jungle',
    categories: ['box', 'wood', 'banana']
  }
]


module.exports = { itemData, creatorData }
