const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.postAddProduct = async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            countInStock: req.body.countInStock
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: 'Product creation failed' });
    }
};

// GET ALL PRODUCTS 
router.get('/api/product/', async (req, res) => {
    try {
        const findProduct = await ProductSchema.find();
        res.json(findProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE product
router.put('/api/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await ProductSchema.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE product
router.delete('/api/product/:id', async (req, res) => {
    try {
        const deletedProduct = await ProductSchema.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
