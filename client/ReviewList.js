import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ bookId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/reviews/${bookId}`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [bookId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet for this book.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>Rating:</strong> {review.rating}/5
              <p>{review.review}</p>
              <em>Submitted on: {new Date(review.created_at).toLocaleDateString()}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;