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

router.get('/:id', function(req, res) {
  let id = req.params.id

  Quote.findById(id, function(err, quote) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(quote)
    }
  })
})

router.post('/', function(req, res) {
  let quote = new Quote(req.body)
  quote.save(function(err, save_quote) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(save_quote)
    }
  })
})

router.put('/:id', function(req, res) {
  let id = req.params.id

  Quote.findById(id, function(err, quote) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      quote.save(function(err, updt_quote) {
        if (err) {
          res.status(500)
          res.send({err:err})
        } else {
          res.status(200)
          res.send(updt_quote)
        }
      })
    }
  })
})

router.delete('/:id', function(req, res) {
  let id = req.params.id

  Quote.findById(id, function(err, quote) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      quote.remove(function(err, dlt_quote) {
        if (err) {
          res.status(500)
          res.send({err:err})
        } else {
          res.status(200)
          res.send(dlt_quote)
        }
      })
    }
  })
})

module.exports = router