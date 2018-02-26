const mongoose = require('mongoose')
const Schema = mongoose.Schema

let quoteSchema = Schema({
  name: String,
  quote: String,
  _user: {type:Schema.Types.ObjectId, ref: 'User'}
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote