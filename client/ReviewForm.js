import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId, userId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const submitReview = async (e) => {
    e.preventDefault();
    if (rating === 0 || review === '') {
      setMessage('Please provide both rating and review');
      return;
    }

    try {
      await axios.post('/reviews/add', {
        user_id: userId,
        book_id: bookId,
        rating,
        review,
      });
      setMessage('Review submitted successfully!');
    } catch (error) {
      setMessage('Error submitting review');
    }
  };

  return (
    <div>
      <h3>Leave a Review</h3>
      <form onSubmit={submitReview}>
        <label>
          Rating:
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value="0">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <label>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReviewForm;
