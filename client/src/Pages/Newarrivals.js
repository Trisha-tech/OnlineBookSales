import React from 'react';
import BannerCard from '../Pages/BannerCard.js';

function Newarrivals() {
  const books = [
    {
      bookTitle: "Fourth Wing",
      authorName: "Rebecca Yarros",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
      category: "Romantasy",
    },
    {
      bookTitle: "The Maid",
      authorName: "Nita Prose",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
      category: "Fiction",
    },
    {
      bookTitle: "Check & Mate",
      authorName: "Ali Hazelwood",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg",
      category: "YOUNG ADULT FANTASY & SCIENCE FICTION",
    },
    {
      bookTitle: "Holly",
      authorName: "Stephen King",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
      category: "Horror",
    },
    {
        bookTitle: "Tomorrow and Tomorrow",
        authorName: "Gabrielle Zevin ",
        imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
        category: "Fiction",
      },
      {
        bookTitle: "Hidden Pictures",
        authorName: "Jason Rekulak",
        imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
        category: "Horror",
      },
    
      {
        bookTitle: "Holly",
        authorName: "Stephen King",
        imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
        category: "Horror",
      },
    
  ];

  return (
    <div className="App">
      <BannerCard books={books} />
    </div>
  );
}

export default Newarrivals;
