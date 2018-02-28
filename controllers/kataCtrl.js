/* CONTROLLERS> kataCtrl.js */
/*
  controllers = fungsi yg main2 sama model
*/

let Kata = require('../models/kata')
// let user_id = '5a96962e93c7b15212a6fd3d'

const getAll = function(req, res){
  Kata.find({}, function(err, katas) {
  // Kata.find({'nama': 'pengarang2'}, function(err, katas) {
    if (err) res.send({err:err})
    else res.send(katas)
  })
}

const getOne = function(req, res) {
  let id = req.params.id

  Kata.findById(id, function(err, kata) {
    if (err) res.send({err:err})
    else res.send(kata)
  })
}

const edit = function(req, res) {
  let id = req.params.id

  Kata.findById(id, function(err, kata) {
    if (err) res.send({err:err})
    else {
      //jk req.body tidak kirim nama
      //pakai nama awal si kata
      kata.nama = req.body.nama || kata.nama
      kata.teks = req.body.teks || kata.teks

      kata.save(function(err, u_kata) {
        if (err) res.send({err:err})
        else res.send(u_kata)
      })
    }
  })
}

const insert = function(req, res) {
  let kata = new Kata({
    nama: req.body.nama,
    teks: req.body.teks
  })

  kata.save(function(err, s_kata){
    if (err) res.send({err:err})
    else res.send(s_kata)
  })
}

const remove = function(req, res) {
  let id = req.params.id

  Kata.findById(id, function(err, kata) {
    if (err) res.send({err:err})
    else {
      kata.remove(function(err, d_kata){
        if (err) res.send({err:err})
        else res.send(d_kata)
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
