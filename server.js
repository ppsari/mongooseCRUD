require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const mongo_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds143738.mlab.com:43738/dbtescrud`

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const quote = require('./routes/quote')
const user = require('./routes/user')
const index = require('./routes/index')
app.use('/quotes', quote)
app.use('/users', user)
app.use('/', index)



mongoose.connect(mongo_url, function (err,res) {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to mongodb')
  }
})


app.listen(3000, function () {
  console.log('magic happen at port 3000')
})
module.exports = app
