const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = Schema({
  username: String,
  password: String,
  quotes: [{type:Schema.Types.ObjectId, ref: 'Quote'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User