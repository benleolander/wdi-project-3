// '/' GET *.index
// /register POST *.register
// /login POST *.login
// /items/ POST *.create
// /items/:id GET *.show
// /items/:id PUT *.edit
// /items/:id DELETE *.DELETE
// /items/:id/contact POST *.nodemailer
// /creators/ POST *.create
// /creators/:id GET *.show
// /creators/:id PUT *.edit

const router = require('express').Router()

const itemsController = require('../controllers/items')
const creatorsController = require('../controllers/creators')

router.route('/')
  .get(itemsController.index)

//TOM TO CONTINUE
