const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().select('-_id -__v');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ONE PRODUCT
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findOne({
      productId: req.params.id
    });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE PRODUCT
router.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE PRODUCT
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findOneAndUpdate(
      { productId: req.params.id },
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE PRODUCT
router.delete('/:id', async (req, res) => {
  try {
    await Product.findOneAndDelete({
      productId: req.params.id
    });

    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
