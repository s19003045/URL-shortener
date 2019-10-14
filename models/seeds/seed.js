const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/urlshortener', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const db = mongoose.connection
const shortid = require('shortid')
const UrlShortened = require('../urlShortened.js')



// 使用"連續"監聽器：listen to error
db.on('error', () => {
  console.log('mongoose connect error')
})

// 使用"一次性"監聽器：listen to success
db.once('open', () => {
  console.log('mongoose connect success')


  const urlCode = shortid.generate()
  console.log('urlCode:', urlCode)
  const newUrl = new UrlShortened({
    originalUrl: 'https://www.google.com.tw',
    urlCode: urlCode,
    shortUrl: `http://localhost:3000/${urlCode}`
  })
  newUrl.save()
    .then(record => {
      console.log(record)
    })
  console.log('newUrl:', newUrl)
})
