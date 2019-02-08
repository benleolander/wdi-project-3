// '/' GET *.index -----> Done
// /register POST *.register ------> Done
// /login POST *.login --------> Done
// /items/ POST *.create --------> DONE
// /items/:id GET *.show ------> DONE
// /items/:id PUT *.edit -----> Done
// /items/:id DELETE *.DELETE ----> DONE
// /items/:id/contact POST *.nodemailer
// /creators/ POST *.create
// /creators/:id GET *.show
// /creators/:id PUT *.edit

const router = require('express').Router()

const authController = require('../controllers/auth')
const itemsController = require('../controllers/items')
const creatorsController = require('../controllers/creators')

router.post('/register', authController.register)
router.login('/login', authController.login)

router.get('/', itemsController.index)
router.get('/items/:id', itemsController.show)
router.post('items/:id', itemsController.create)
router.put('items/:id', itemsController.update)
router.delete('/items/:id', itemsController.delete)




module.exports = router

//TOM TO CONTINUE
