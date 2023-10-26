// server/routes/products.js
//routes to handle CRUD operations for products:
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/', (req) => {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      countInStock: req.body.countInStock
    })

// Create a new product
router.save(). then ((createdProduct) => {
  res.status(201).json(createdProduct)
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock
  })


module.exports = router;
