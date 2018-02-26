const create = function(req, res) {
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
}

const update = function(req, res) {
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
}

const delete = function(req, res) {
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
}

const getOne = function(req, res) {
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
}

const getAll = function(req, res) {

  Quote.find({}, function(err, results){
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(results)
    }
  })

}

module.exports = {
  create,
  update,
  delete,
  getOne,
  getAll
}