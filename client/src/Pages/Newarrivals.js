import React, { useState, useEffect, useRef } from 'react'; 
import BannerCard from '../Pages/BannerCard.js';
// import { set } from 'mongoose';


export const books = [
  {
    _id:"1",
    bookTitle: "Fourth Wing",
    authorName: "Rebecca Yarros",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
    category: "Romantasy",
  },
  {
    _id:"2",
    bookTitle: "The Maid",
    authorName: "Nita Prose",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
    category: "Fiction",
  },
  {
    _id:"3",
    bookTitle: "Check & Mate",
    authorName: "Ali Hazelwood",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg",
    category: "YOUNG ADULT FANTASY & SCIENCE FICTION",
  },
  {
    _id:"4",
    bookTitle: "Holly",
    authorName: "Stephen King",
    imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
    category: "Horror",
  },
  {
    _id:"5",
      bookTitle: "Tomorrow and Tomorrow",
      authorName: "Gabrielle Zevin ",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
      category: "Fiction",
    },
    {
      _id:"6",
      bookTitle: "Hidden Pictures",
      authorName: "Jason Rekulak",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
      category: "Horror",
    },
  
    {
      _id:"7",
      bookTitle: "Holly",
      authorName: "Stephen King",
      imageURL: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
      category: "Horror",
    },
  
];

function Newarrivals({ onBookClick, highlightedBookId }) {
  const bookRefs = useRef({}); 

  return (
      <div className="App">
          {books.length > 0 ? ( 
              <BannerCard
                  books={books} 
                  highlightedBookId={highlightedBookId} 
                  onBookClick={(bookTitle) => {
                      onBookClick(bookTitle);
                      const element = bookRefs.current[bookTitle];
                      if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
                      }
                  }}
              />
          ) : (
              <p>No books available</p>
          )}
      </div>
  );
}

export default Newarrivals;
