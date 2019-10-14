const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/urlshortener', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const db = mongoose.connection
const shortid = require('shortid')
const UrlShortened = require('./models/urlShortened.js')



// 使用"連續"監聽器：listen to error
db.on('error', () => {
  console.log('mongoose connect error')
})

// 使用"一次性"監聽器：listen to success
db.once('open', () => {
  console.log('mongoose connect success')
})




// ===================route setting=============

app.get('/', (req, res) => {
  console.log(shortid.generate('https://www.google.com.tw/'))
  res.send('hello world')
})


app.listen(process.env.PORT || port, () => {
  console.log(`Express server start`)
})

