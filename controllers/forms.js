const Form = require('../models/form')
const Creator = require('../models/creator')
const mailer = require('../lib/mailer')

function createRoute(req, res) {
  Creator.findOne({ _id: req.params.id })
    .then(creator => {
      Form
        .create(req.body)
        .then(formData => {
          mailer.sendContactMail(creator, formData)
          res.status(200).json(req.body)
        })
    })
}

module.exports = {
  create: createRoute
}
