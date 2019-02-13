const Creator = require('../models/creator')
const Item = require('../models/item')

function showRoute(req, res, next){
  Creator
    .findById(req.params.id)
    .populate('items creatorAverage')
    .then(creator => res.json(creator))
    .catch(next)
}

function createRoute(req, res, next){
  Creator
    .create(req.body)
    .then(creator => res.status(200).json(creator))
    .catch(next)
}

function updateRoute(req, res, next) {
  Creator
    .findById(req.params.id)
    .then(creator => creator.set(req.body))
    .then(creator => creator.save())
    .then(creator => res.status(200).json(creator))
    .catch(next)
}

function deleteRoute(req, res, next){
  Item
    .deleteMany({ creator: { _id: req.params.id }})
    .then(() => {
      Creator
        .deleteOne({ _id: req.params.id })

      res.status(204).send()
    })
    .catch(next)
}

module.exports ={
  show: showRoute,
  create: createRoute,
  edit: updateRoute,
  delete: deleteRoute
}
