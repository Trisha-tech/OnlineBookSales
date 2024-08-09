const express = require("express");
const router = express.Router();

// Mock cart data
let cart = {
  items: [],
  total: 0,
};

// Fetch cart data
router.get("/", (req, res) => {
  res.json(cart);
});

// Add item to cart
router.post("/", (req, res) => {
  const item = req.body;
  cart.items.push(item);
  cart.total += item.price;
  res.json(cart);
});

// Remove item from cart
router.delete("/:itemId", (req, res) => {
  const itemId = req.params.itemId;
  const itemIndex = cart.items.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    cart.total -= cart.items[itemIndex].price;
    cart.items.splice(itemIndex, 1);
  }
  res.json(cart);
});

module.exports = router;
