require('dotenv').config()
const app = require('express')()
const bodyParser = require('body-parser') //biar dapet post
const mongo_url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds143738.mlab.com:43738/dbtescrud`
const cors = require('cors') // biar bisa diakses localhost
const mongoose = require('mongoose') //framework mongodb -> lebi gampang

const kata = require('./routes/kata')
const user = require('./routes/user')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/kata', kata)
app.use('/user', user)

mongoose.connect(mongo_url, function (err,res) {
  if (err) console.log(err)
  else console.log('connected to mongoose')
})


app.listen(3000)