const mongoose = require('mongoose')

let quoteSchema = mongoose.Schema({
  name: String,
  quote: String
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote