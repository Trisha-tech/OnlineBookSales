const express = require('express');
const router = express.Router();
const { createReview, getReviewsForBook } = require('../controllers/reviewController');
const { isAuthenticatedUser } = require('../middlewares/auth');

// Route to create a new review
router.post('/review', isAuthenticatedUser, createReview);

// Route to get reviews for a specific book
router.get('/book/:bookId/reviews', getReviewsForBook);

module.exports = router;
