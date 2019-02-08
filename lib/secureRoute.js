const jwt = require('jsonwebtoken')
const Promise = require('bluebird')
const Creator = require('../models/creator')

Promise.promisifyAll(jwt)

function secureRoute(req, res, next) {
  if(!req.headers.authorization) res.status(401).json({ message: 'You do not have authorization to perform this action. Please log in.'})

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, process.env.SECRET)
    .then(payload => {
      const now = Math.floor(Date.now() / 1000)
      if (now > payload.exp) throw new Error('Token expired. Please log in agian.')
      return Creator.findById(payload.sub)
    })
    .then(creator => {
      if(!creator) throw new Error('User not found')
      req.currentUser = creator
      next()
    })
    .catch(err => console.log(err))
}

module.exports = secureRoute
