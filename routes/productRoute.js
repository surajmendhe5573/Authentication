const express= require('express');
const Product= require('../Models/ProductModel');
const router= express.Router();

// Post API for Uploading Products
router.post('/create', async (req, res) => {
    try {
      const { name, description, price, stock } = req.body;
      const newProduct = new Product({ name, description, price, stock });
      await newProduct.save();
      res.status(201).json({ message: 'Product uploaded successfully', newProduct });
    } catch (error) {
      res.status(500).json({ message: 'Error uploading product', error });
    }
  });
  
  // Get API for Retrieving Products
  router.get('/fetch', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving products', error });
    }
  });


  module.exports= router;