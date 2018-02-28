/* models > user */
const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  username: String,
  password: String,
  kata_id: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Kata'
  }]
})

const User = mongoose.model('User', userSchema)

module.exports = User