// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richDescription: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
   },
   images: [{  //TYPE OF ARRAY
    type: String,
   }],
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInstock: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
