let Quote = require('../models/quote')
let User = require('../models/user')
let auth = require('../helpers/auth')

const create = function(req, res) {
  let _user = auth.getUserDetail(req.headers.token)
  if (_user) {
    let quote = new Quote({
      name: req.body.name,
      quote: req.body.quote,
      _user: _user
    })

    quote.save(function(err, save_quote) {
      if (err) {
        res.status(500)
        res.send({err:err})
      } else {

        User.findById(_user, function(err, user) {
          if (err) {
            res.status(500)
            res.send({err: 'User not found'})
          } else {
            user.quotes.push(save_quote._id)
            user.save(function(err, saved_user) {
              if (err) res.send({err: 'Failed to insert to user'})
              res.status(500)
              res.send(save_quote)
            })
          }
        })
      }
    })
  } else {
    res.send({err: 'You must login!'})
  }


}

const update = function(req, res) {
  let id = req.params.id

  Quote.findById(id, function(err, quote) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      quote.quote = req.body.quote || quote.quote
      quote.name = req.body.name || quote.name

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

const remove = function(req, res) {
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

  Quote.findById(id)
  .populate('_user', 'username')
  .exec(function(err, quote) {
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
  remove,
  getOne,
  getAll
}