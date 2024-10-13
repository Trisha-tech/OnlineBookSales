const API_URL = 'http://localhost:8080/api/reviews';

export const submitReview = async (bookId, rating, reviewText, authToken) => {
  const response = await fetch(`${API_URL}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`, // Use your authentication token
    },
    body: JSON.stringify({ bookId, rating, review: reviewText }),
  });

  return await response.json();
};

export const fetchReviews = async (bookId) => {
  const response = await fetch(`${API_URL}/book/${bookId}/reviews`);
  return await response.json();
};
