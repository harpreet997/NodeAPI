const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: [true, 'must provide product name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  price: {
    type: Number,
    required: [true, 'must provide price'],
  },
  description: {
    type: String,
    required: [true, 'must provide product description'],
  },
  createdAt: {
    type: Date,
    default: Date.now()
  } 
})

module.exports = mongoose.model('Product', ProductSchema)