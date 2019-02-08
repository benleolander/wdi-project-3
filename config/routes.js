
// /items/:id/contact POST *.nodemailer

const router = require('express').Router()

const authController = require('../controllers/auth')
const itemsController = require('../controllers/items')
const creatorsController = require('../controllers/creators')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/', itemsController.index)
router.get('/items/:id', itemsController.show)
router.post('items/new', itemsController.create)
router.put('items/:id', itemsController.update)
router.delete('/items/:id', itemsController.delete)

router.post('/creators', creatorsController.create)
router.get('/creators/:id', creatorsController.show)
router.put('/creators/:id', creatorsController.edit)
router.delete('/creators/:id', creatorsController.delete)


module.exports = router
