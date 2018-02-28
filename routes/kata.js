/* ROUTES > kata */
const express = require('express')
let router = express.Router()
/*
  routes panggil controllers
    ga bole mainan model langsung
*/
let kataCtrl = require('../controllers/kataCtrl')

router.get('/', kataCtrl.getAll)
router.post('/', kataCtrl.insert)
router.get('/:id', kataCtrl.getOne)
router.put('/:id', kataCtrl.edit)
router.delete('/:id', kataCtrl.remove)

module.exports = router