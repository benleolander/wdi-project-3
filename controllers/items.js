const Item = require('../models/item')

function indexRoute(req, res){
  Item
    .find()
    .then(creators => res.json(creators))
    .catch(err => console.log(err.message))
}

function showRoute(res, req){
  Item
    .findById(req.params.id)
}
