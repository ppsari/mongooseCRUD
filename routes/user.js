/* ROUTES > user */
const express = require('express')
let router = express.Router()
/*
  routes panggil controllers
    ga bole mainan model langsung
*/
let userCtrl = require('../controllers/userCtrl')

router.get('/', userCtrl.getAll)
router.post('/', userCtrl.insert)
router.get('/:id', userCtrl.getOne)
router.put('/:id', userCtrl.edit)
router.delete('/:id', userCtrl.remove)

module.exports = router