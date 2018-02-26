let User = require('../models/user')
let auth = require('../helpers/auth')

const create = function(req, res) {
  let user_dt = {
    username: req.body.username,
    password: req.body.password
  }

  let user = new User(user_dt)
  user.save(function(err, save_user) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(save_user)
    }
  })
}

const login = function(req, res) {
  User.findOne({username: req.body.username}, function(err, user) {
    let is_login = auth.checkPassword(req.body.password, user.password)
    res.send(is_login)
  })
}

const update = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      user.username = req.body.username || user.username
      user.password = req.body.password || user.password

      user.save(function(err, updt_user) {
        if (err) {
          res.status(500)
          res.send({err:err})
        } else {
          res.status(200)
          res.send(updt_user)
        }
      })
    }
  })
}

const remove = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      user.remove(function(err, dlt_user) {
        if (err) {
          res.status(500)
          res.send({err:err})
        } else {
          res.status(200)
          res.send(dlt_user)
        }
      })
    }
  })
}

const getOne = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
      res.status(200)
      res.send(user)
    }
  })
}

const getAll = function(req, res) {

  User.find({}, function(err, results){
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
  getAll,
  login
}