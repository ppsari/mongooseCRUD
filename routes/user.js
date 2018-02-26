const express = require('express')
let router = express.Router()

let User = require('../models/user')
let userCtrl = require('../controllers/userCtrl')

router.get('/', userCtrl.getAll)
router.get('/:id', userCtrl.getOne)
router.post('/', userCtrl.create)
router.put('/:id', userCtrl.update )
router.delete('/:id', userCtrl.remove)

module.exports = router