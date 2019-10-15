const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/urlshortener', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
const db = mongoose.connection
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// import express-session
const session = require('express-session')
// import connect-flash
const flash = require('connect-flash')

const shortid = require('shortid')
const UrlShortened = require('./models/urlShortened.js')

const IsURL = require('./libs/isURL.js')

// 使用"連續"監聽器：listen to error
db.on('error', () => {
  console.log('mongoose connect error')
})

// 使用"一次性"監聽器：listen to success
db.once('open', () => {
  console.log('mongoose connect success')
})

// Set body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// static files
app.use(express.static('public'))

// Set up template engine 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// set session
// ※注意：app.use(session({})) 必須設定在 app.use(passport.session()) 之前
app.use(session({
  secret: 'hello world', //用來簽章 sessionID 的cookie, 可以是一secret字串或是多個secret組成的一個陣列
  resave: false,
  saveUninitialized: true,
}))

// 建立 flash 實例並使用它
app.use(flash())

app.use((req, res, next) => {

  // 可用在使用者註冊/登入/登出時，儲存 success_msg 及 failure_msg
  res.locals.success_msg = req.flash('success_msg')
  res.locals.failure_msg = req.flash('failure_msg')

  next()
})




// ===================route setting=============

// 首頁
app.get('/', (req, res) => {
  res.render('index')
})

// 送出原始網址的資料，轉成短網址，並存進資料庫
app.post('/', (req, res) => {
  console.log('使用者輸入的網址：', req.body.originalUrl)
  const originalUrl = req.body.originalUrl

  console.log('驗證是否為正確網址格式：', IsURL(originalUrl))

  if (!IsURL(originalUrl)) {
    req.flash('failure_msg', '輸入的網址格式不正確！')
    res.redirect('/')
  } else {
    // req.flash('success_msg', '網址格式正確！')
    UrlShortened.findOne({ originalUrl: originalUrl })
      .then(record => {
        if (!record) {
          console.log('資料庫無此筆資料，新增一筆至資料庫')

          let urlCode = ''
          let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
          for (i = 0; i < 5; i++) {
            urlCode += letters[Math.floor(Math.random() * (letters.length))]
          }

          UrlShortened.create({
            originalUrl: originalUrl,
            urlCode: urlCode,
            shortUrl: `http://localhost:3000/${urlCode}`
          })
            .then(record => {
              console.log(record)
              res.render('index', { record, originalUrl })
            })
        } else {
          console.log('資料庫已有此筆資料:', record)
          res.render('index', { record, originalUrl })
        }
      })
  }


})


app.get('/:urlcode', (req, res) => {
  console.log(req.params.urlcode)

  UrlShortened.findOne({ urlCode: req.params.urlcode })
    .then(record => {
      console.log(record)
      const URLlink = record.originalUrl
      res.redirect(URLlink)
    })
})

app.listen(process.env.PORT || port, () => {
  console.log(`Express server start`)
})

