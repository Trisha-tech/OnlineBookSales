const express = require('express');
const router = express.Router();
const { isAuthenticatedUser } = require('../middlewares/auth');
const Wishlist = require('../models/wishlistSchema');
const ErrorHandler = require('../utils/errorHandler');

// route   POST /api/wishlist/add-to-wishlist/:productId
// description   Add product to wishlist
// access  Private (requires authentication)
router.post('/addtowishlist/:productId', isAuthenticatedUser, async (req, res, next) => {
  try {
    const { productId } = req.params;
    const userId = req.body.user.id; // Retrieve user ID from request body
    // console.log("inadd to wishlist")

    // Check if the product is already in the user's wishlist
    const existingWishlistItem = await Wishlist.findOne({ user: userId, product: productId });

    if (existingWishlistItem) {
      return next(new ErrorHandler('Product is already in your wishlist', 400));
    }

    // Create a new wishlist item
    const newWishlistItem = await Wishlist.create({
      user: userId,
      product: productId,
    });

    res.status(200).json({
      success: true,
      message: 'Product added to wishlist successfully',
      wishlistItem: newWishlistItem,
    });
  } catch (error) {
    next(error);
  }
});

// route   DELETE /api/wishlist/remove-from-wishlist/:productId
// description    Remove product from wishlist
// access  Private (requires authentication)
router.delete('/removefromwishlist/:productId', isAuthenticatedUser, async (req, res, next) => {
  try {
    const { productId } = req.params;
    const userId = req.body.user.id;

    // Find and delete the wishlist item
    const deletedWishlistItem = await Wishlist.findOneAndDelete({ user: userId, product: productId });

    if (!deletedWishlistItem) {
      return next(new ErrorHandler('Product not found in your wishlist', 404));
    }

    res.status(200).json({
      success: true,
      message: 'Product removed from wishlist successfully',
      wishlistItem: deletedWishlistItem,
    });
  } catch (error) {
    next(error);
  }
});

// route   GET /api/wishlist
// description    Get user's wishlist
// access  Private (requires authentication)
router.get('/getwishlistdata', isAuthenticatedUser, async (req, res, next) => {
  try {
    const userId = req.body.user.id;

    // Fetch user's wishlist items
    const wishlistItems = await Wishlist.find({ user: userId }).populate('product');

    res.status(200).json({
      success: true,
      wishlistItems,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
