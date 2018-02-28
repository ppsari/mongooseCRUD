/* CONTROLLERS> userCtrl.js */
/*
  controllers = fungsi yg main2 sama model
*/

let User = require('../models/user')

const getAll = function(req, res){
  User.find({}, function(err, users) {
    if (err) res.send({err:err})
    else res.send(users)
  })
}

const getOne = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) res.send({err:err})
    else res.send(user)
  })
}

const edit = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) res.send({err:err})
    else {
      user.username = req.body.username || user.username
      user.password = req.body.password || user.password

      user.save(function(err, u_user) {
        if (err) res.send({err:err})
        else res.send(u_user)
      })
    }
  })
}

const insert = function(req, res) {
  let user = new User({
    username: req.body.username,
    password: req.body.password
  })

  user.save(function(err, s_user){
    if (err) res.send({err:err})
    else res.send(s_user)
  })
}

const remove = function(req, res) {
  let id = req.params.id

  User.findById(id, function(err, user) {
    if (err) res.send({err:err})
    else {
      user.remove(function(err, d_user){
        if (err) res.send({err:err})
        else res.send(d_user)
      })
    }

  })
}

module.exports = {
  getAll,
  getOne,
  edit,
  insert,
  remove
}
