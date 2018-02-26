const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auth = require('../helpers/auth')

let userSchema = Schema({
  username: {
    type: String,
    required: [true, '{PATH} must be filled']
  },
  password: {
    type: String,
    required: [true, '{PATH} must be filled'],
    validate: {
      validator: function(v) {
        return v.length > 5 //bener kalo lebi gede dari 5
      },
      message: '{PATH} must be more than 5 char length'
    },
  },
  quotes: [{type:Schema.Types.ObjectId, ref: 'Quote'}],
  role: {
    type: String,
    default: 'user'
  },
  hobby: {
    type: String,
    required: [true, '{PATH} must be filled'],
    enum : {
      values: ['main', 'tidur'],
      message : `{PATH} should be [main | tidur]`
    }
  }
})

userSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this._doc.password = auth.hashPassword(this._doc.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User