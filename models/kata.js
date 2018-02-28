/* models > kata */
const mongoose = require('mongoose')

let kataSchema = mongoose.Schema({
  nama: String,
  teks: String
})

const Kata = mongoose.model('Kata', kataSchema)

module.exports = Kata