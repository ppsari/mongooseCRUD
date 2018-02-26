let User = require('../models/user')
let auth = require('../helpers/auth')

const create = function(req, res) {

  if (req.body.username === '' || typeof req.body.username === 'undefined') res.send({err: 'Username must be filled'})
  else if (req.body.password === '' || typeof req.body.password === 'undefined') res.send({err: 'Password must be filled'})
  else if (req.body.hobby === '' || typeof req.body.hobby === 'undefined') res.send({err: 'Hobby must be filled'})
  else {
    let user_dt = {
      username: req.body.username,
      password: req.body.password,
      hobby: req.body.hobby
    }

    let user = new User(user_dt)
    user.save(function(err, save_user) {
      if (err) {
        res.status(500)
        res.send({err:err.message})
      } else {
        res.status(200)
        res.send(save_user)
      }
    })
  }


}

const login = function(req, res) {
  User.findOne({username: req.body.username}, function(err, user) {
    if (err) res.send({err: 'Invalid username'})
    else {
      let is_login = auth.checkPassword(req.body.password, user.password)
      if (is_login) {
        let user_dt = {
          username: user.username,
          _id: user._id
        }
        res.send({token: auth.createToken(user_dt)})
      } else {
        res.send({err: 'invalid login'})
      }
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