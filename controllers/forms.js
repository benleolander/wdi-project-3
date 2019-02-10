const Form = require('../models/form')
const Item = require('../models/item')
const Creator = require('../models/creator')
const mailer = require('../lib/mailer')

function createRoute(req, res) {
  Item.findOne({ _id: req.params.id })
    .then(item => {
      Creator.findOne({ _id: item.creator })
        .then(creator => console.log(creator.username, creator.email))
    })
  Form
    .create(req.body)
    .then(() => res.status(200).json(req.body))
}

module.exports = {
  create: createRoute
}
