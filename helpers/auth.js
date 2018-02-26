require('dotenv').config()
let CryptoJS = require('crypto-js')

const hashPassword = (password) => {
  let hashPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
  return hashPassword
}

const checkPassword = (password,hashPassword) => {
  return password === CryptoJS.AES.decrypt(hashPassword, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8)
}

module.exports = {
  checkPassword,
  hashPassword
}