const Form = require('../models/form')
const mailer = require('../lib/mailer')

function createRoute(req, res) {
  Form
    .create(req.body)
    .then(() => res.status(200).json(req.body))
}

module.exports = {
  create: createRoute
}
