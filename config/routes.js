
// /items/:id/contact POST *.nodemailer

const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')


const authController = require('../controllers/auth')
const itemsController = require('../controllers/items')
const creatorsController = require('../controllers/creators')
const formsController = require('../controllers/forms')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/items', itemsController.index)
router.post('/items/:id/contact', formsController.create)
router.post('/contact', formsController.create)
router.post('/items/:id/comment', itemsController.commentCreate)
router.get('/items/:id', itemsController.show)
router.post('/items', secureRoute, itemsController.create)
router.put('/items/:id', itemsController.update)
router.delete('/items/:id', secureRoute, itemsController.delete)

router.post('/creators', creatorsController.create)
router.get('/creators/:id', creatorsController.show)
router.put('/creators/:id', creatorsController.edit)
router.delete('/creators/:id', creatorsController.delete)


module.exports = router
