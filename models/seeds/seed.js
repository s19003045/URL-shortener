const express = require('express')
const app = express()
const port = 3000
let hostname = 'https://stark-dusk-36112.herokuapp.com'
const mongoose = require('mongoose')

// 連到本機之 mongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/urlshortener', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

// 從本地連到遠端 mongoDB
mongoose.connect('mongodb://heroku_dw4g3l4z:eqcpee6ab4jk6vg1n9khl2eob7@ds235658.mlab.com:35658/heroku_dw4g3l4z', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const db = mongoose.connection
// const shortid = require('shortid')
const UrlShortened = require('../urlShortened.js')


// 使用"連續"監聽器：listen to error
db.on('error', () => {
  console.log('mongoose connect error')
})

// 使用"一次性"監聽器：listen to success
db.once('open', () => {
  console.log('mongoose connect success')


  let urlCode = ''
  let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (i = 0; i < 5; i++) {
    urlCode += letters[Math.floor(Math.random() * (letters.length))]
  }

  console.log('urlCode:', urlCode)
  const newUrl = new UrlShortened({
    originalUrl: 'https://lighthouse.alphacamp.co',
    urlCode: urlCode,
    shortUrl: `${hostname}/link/${urlCode}`
  })

  newUrl.save()
    .then(record => {
      console.log(record)
    })
  console.log('newUrl:', newUrl)
})
