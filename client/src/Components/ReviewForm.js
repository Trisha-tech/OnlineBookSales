import React, { useState } from 'react';
import { submitReview } from '../services/reviewService';

const ReviewForm = ({ bookId, authToken, onReviewSubmit }) => {
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitReview(bookId, rating, reviewText, authToken);
    if (result.success) {
      onReviewSubmit(); // Callback to refresh the reviews list
      setReviewText(''); // Clear the input field
    } else {
      alert('Error submitting review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit a Review</h3>
      <label>
        Rating (1-5):
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>
      <label>
        Review:
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
