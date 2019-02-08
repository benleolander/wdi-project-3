const Creator = require('../models/creator')

function showRoute(req, res){
  Creator
    .findById(req.params.id)
    .then(creator => res.json(creator))
    .catch(err => console.log(err.message))
}

function createRoute(req, res){
  Creator
    .create(req.body)
    .then(creator => res.status(200).json(creator))
    .catch(err => console.log(err.message))
}

function updateRoute(req, res) {
  Creator
    .findById(req.params.id)
    .then(creator => creator.set(req.body))
    .then(creator => creator.save())
    .then(creator => res.status(200).json(creator))
    .catch(err => res.status(422).json(err.errors))
}

function deleteRoute(req, res){
  Creator
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch( err => console.log(err.message))
}

module.exports ={
  show: showRoute,
  create: createRoute,
  edit: updateRoute,
  delete: deleteRoute
}
