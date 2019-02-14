const Creator = require('../models/creator')
const jwt = require('jsonwebtoken')

const { secret } = require('../config/environment')

function registerRoute(req, res, next){
  Creator.create(req.body)
    .then(() => res.status(201).json( { message: 'Registration successful'}))
    .catch(next)
}

function loginRoute(req, res, next){
  Creator.findOne({ email: req.body.email })
    .then(creator => {
      if(!creator || !creator.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'unauthorized'})
      }
      const payload = {sub: creator._id}
      const token = jwt.sign(payload, secret, { expiresIn: '12h' })
      res.json({
        token,
        message: `Welcome back ${creator.username}`
      })
    })
    .catch(next)
}

module.exports = {
  register: registerRoute,
  login: loginRoute
}
