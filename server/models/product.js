// models/Product.js
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // is this required or not?
  },
  description: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true, // is this required
    // default: "",
  },
  //    images: [] , // TYPE OF ARRAY
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  stock: {
    type: Number,
    // required: true,
    min: 0,
    max: 100,
  },
  category: {
    type: String,
    // ref: "Category",
    required: true,
  },
  /* category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  }, */
});

module.exports = mongoose.model("Product", ProductSchema); //export file
