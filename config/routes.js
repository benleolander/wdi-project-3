// '/' GET *.index
// /register POST *.register
// /login POST *.login
// /items/ POST *.create --------> DONE
// /items/:id GET *.show ------> DONE
// /items/:id PUT *.edit -----> Done
// /items/:id DELETE *.DELETE ----> DONE
// /items/:id/contact POST *.nodemailer
// /creators/ POST *.create
// /creators/:id GET *.show
// /creators/:id PUT *.edit

const router = require('express').Router()

const itemsController = require('../controllers/items')
const creatorsController = require('../controllers/creators')

router.get('/', itemsController.index)
router.get('/items/:id', itemsController.show)
router.post('items/:id', itemsController.create)
router.put('items/:id', itemsController.update)
router.delete('/items/:id', itemsController.delete)



//TOM TO CONTINUE
