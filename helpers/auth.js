require('dotenv').config()
let CryptoJS = require('crypto-js')
let jwt = require('jsonwebtoken')


const hashPassword = function(password) {
  let hashPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
  return hashPassword
}

const checkPassword = function(password,hashPassword) {
  return password === CryptoJS.AES.decrypt(hashPassword, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)
}

const createToken = function(user_data) {
  let token = jwt.sign(user_data, process.env.SECRET_KEY)
  return token
}

const getUserDetail = function(token) {
  try {
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    console.log(decoded)
    return decoded
  } catch(err) {
    return false
  }
}

module.exports = {
  checkPassword,
  hashPassword,
  createToken,
  getUserDetail
}