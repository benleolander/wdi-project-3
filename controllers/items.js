const Item = require('../models/item')

function indexRoute(req, res){
  Item
    .find()
    .then(items => res.json(items))
    .catch(err => console.log(err.message))
}

function showRoute(req, res){
  Item
    .findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => console.log(err.message))
}

function createRoute(req, res){
  req.body.creator = req.currentUser
  Item
    .create(req.body)
    .then(item => res.status(200).json(item))
    .catch(err => console.log(err.message))
}

function deleteRoute(req, res){
  Item
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch( err => console.log(err.message))
}

function updateRoute(req, res) {
  Item
    .findById(req.params.id)
    .then(item => item.set(req.body))
    .then(item => item.save())
    .then(item => res.status(200).json(item))
    .catch(err => res.status(422).json(err.errors))
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute,
  create: createRoute
}
