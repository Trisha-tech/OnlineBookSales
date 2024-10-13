import React, { useEffect, useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { fetchReviews } from '../services/reviewService';


const BookDetail = ({ bookId, authToken }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://localhost:8080/api/books/${bookId}`);
      const data = await response.json();
      setBook(data.book);
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Cost: {book.cost}</p>
      <ReviewForm bookId={bookId} authToken={authToken} onReviewSubmit={() => fetchReviews(bookId)} />
      <ReviewList bookId={bookId} />
    </div>
  );
};

export default BookDetail;
