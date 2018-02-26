const express = require('express')
let router = express.Router()

let userCtrl = require('../controllers/userCtrl')

router.post('/register', userCtrl.create)
router.post('/login', userCtrl.login)

module.exports = router