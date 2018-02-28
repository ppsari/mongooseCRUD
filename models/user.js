/* models > user */
const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User