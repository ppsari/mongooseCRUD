let User = require('../models/user')


const create = function(req, res) {
  let user = new User(req.body)
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

const update = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) {
      res.status(500)
      res.send({err:err})
    } else {
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
  getAll
}