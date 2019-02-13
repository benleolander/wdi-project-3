const Message = require('../models/message')
const Creator = require('../models/creator')
const mailer = require('../lib/mailer')

function createRoute(req, res, next) {
  Creator.findOne({ _id: req.params.id || req.body.creatorId })
    .then(creator => {
      Message
        .create(req.body)
        .then(formData => {
          mailer.sendContactMail(creator, formData)
          res.status(200).json(req.body)
        })
        .catch(next)
    })
}

module.exports = {
  create: createRoute
}
