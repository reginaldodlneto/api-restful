const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  brand: Number,
  price: String
})

const Model = mongoose.model('products', schema)

module.exports = Model
