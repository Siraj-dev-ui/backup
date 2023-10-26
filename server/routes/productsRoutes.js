const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Create
router.post('/admin/products/add', productsController.postAddProduct);

// Read
router.get('/admin/products', productsController.getAdminProducts);

// Update
router.get('/admin/products/edit/:id', productsController.getEditProduct);
router.post('/admin/products/edit/:id', productsController.postEditProduct);

// Delete
router.post('/admin/products/delete/:id', productsController.postDeleteProduct);

module.exports = router;
