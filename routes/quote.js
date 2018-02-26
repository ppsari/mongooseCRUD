const express = require('express')
let router = express.Router()

let Quote = require('../models/quote')

router.get('/', function(req, res) {

  Quote.find({}, function(err, results){
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(results)
    }
  })

})

router.post('/', function(req, res) {
  res.status(200)
  res.send('alive in posts')
})


module.exports = router