const Review = require('../models/reviewModel');
const Book = require('../models/bookModel');

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { bookId, rating, review } = req.body;

    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    // Create the review
    const newReview = await Review.create({
      user: req.user.id,  // Assuming req.user contains the authenticated user's ID
      book: bookId,
      rating,
      review
    });

    res.status(201).json({
      success: true,
      review: newReview
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error });
  }
};

// Get reviews for a specific book
exports.getReviewsForBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId }).populate('user', 'name');  // Populate user details

    if (!reviews || reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this book' });
    }

    res.status(200).json({
      success: true,
      reviews
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};
