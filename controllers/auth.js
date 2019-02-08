const Creator = require('../models/creator')
const jwt = require('jsonwebtoken')

function registerRoute(req, res){
  Creator.create(req.body)
    .then(() => res.status(200).json( { message: 'Registration successful'}))
    .catch(err => console.log(err.message))
}


function loginRoute(req, res){
  Creator.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'unauthorized'})
      }
      const payload = {sub: user._id}
    })
}

module.exports = {
  register: registerRoute
}
