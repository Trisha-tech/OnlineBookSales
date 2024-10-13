import React, { useEffect, useState } from 'react';
import { fetchReviews } from '../services/reviewService';

const ReviewList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const result = await fetchReviews(bookId);
      if (result.success) {
        setReviews(result.reviews);
      } else {
        setReviews([]); // Reset to empty array if no reviews found
      }
    };

    loadReviews();
  }, [bookId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id}>
            <strong>{review.user.name}</strong>
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
