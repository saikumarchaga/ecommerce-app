const express = require('express');
const router = express.Router();

// Mock product data
const products = [
  { id: 1, name: 'Laptop', price: 999.99 },
  { id: 2, name: 'Phone', price: 499.99 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
