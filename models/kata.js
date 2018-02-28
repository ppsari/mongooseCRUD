/* models > kata */
const mongoose = require('mongoose')
let kataSchema = mongoose.Schema({
  nama: String,
  teks: String,
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

const Kata = mongoose.model('Kata', kataSchema)

module.exports = Kata