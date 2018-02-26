const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auth = require('../helpers/auth')

let userSchema = Schema({
  username: String,
  password: String,
  quotes: [{type:Schema.Types.ObjectId, ref: 'Quote'}]
})

userSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this._doc.password = auth.hashPassword(this._doc.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User