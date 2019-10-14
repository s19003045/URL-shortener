const mongoose = require('mongoose')
const Schema = mongoose.Schema


const urlShortenedSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
}, { timestamps: true })


// Covert Schema into model and export it

module.exports = mongoose.model('UrlShortened', urlShortenedSchema)