const express = require('express')
let router = express.Router()

router.get('/', function(req, res) {
  res.status(200)
  res.send('alive')
})

router.post('/', function(req, res) {
  res.status(200)
  res.send('alive in posts')
})


module.exports = router