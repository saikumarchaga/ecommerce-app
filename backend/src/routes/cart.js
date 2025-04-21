const express = require('express');
const router = express.Router();

// In-memory cart (use a database like MongoDB for production)
let cart = [];

// Get cart
router.get('/', (req, res) => {
  res.json(cart);
});

// Add to cart
router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity || quantity < 1) {
    return res.status(400).json({ error: 'Invalid productId or quantity' });
  }
  cart.push({ productId, quantity });
  res.json(cart);
});

// Clear cart (for checkout simulation)
router.delete('/', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;
