const express = require('express')
let router = express.Router()

let Quote = require('../models/quote')
let quoteCtrl = require('../controllers/quoteCtrl')

router.get('/', quoteCtrl.getAll)
router.get('/:id', quoteCtrl.getOne)
router.post('/', quoteCtrl.create)
router.put('/:id', quoteCtrl.update )
router.delete('/:id', quoteCtrl.remove)

module.exports = router