import React, { useEffect, useState } from "react";
import BannerCard from "../Pages/BannerCard";
import axios from "axios";

function Trending() {
  const apiKey = process.env.REACT_APP_NY_TIMES_APIKEY; // API key
  const [books, setBooks] = useState([]); 

  // Hardcoded fallback or initial state books
  const fallbackBooks = [
    {
      bookTitle: "Fourth Wing",
      authorName: "Rebecca Yarros",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
      category: "Romantasy",
    },
    {
      bookTitle: "The Maid",
      authorName: "Nita Prose",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1643228739i/55196813.jpg",
      category: "Fiction",
    },
    {
      bookTitle: "Check & Mate",
      authorName: "Ali Hazelwood",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678378842i/60683957.jpg",
      category: "YOUNG ADULT FANTASY & SCIENCE FICTION",
    },
    {
      bookTitle: "Holly",
      authorName: "Stephen King",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
      category: "Horror",
    },
    {
      bookTitle: "Tomorrow and Tomorrow",
      authorName: "Gabrielle Zevin ",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1636978687i/58784475.jpg",
      category: "Fiction",
    },
    {
      bookTitle: "Hidden Pictures",
      authorName: "Jason Rekulak",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
      category: "Horror",
    },
    {
      bookTitle: "Holly",
      authorName: "Stephen King",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674418461i/65916344.jpg",
      category: "Horror",
    },
  ];

  // Fetch trending books from the NY Times API
  const fetchTrendingBooks = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`
      );

      console.log(response.data.results);

      const nyTimesBooks = response.data.results.lists
      .slice(0, 2) // Limiting to first 2 lists
      .flatMap((list) => 
        list.books.map((book) => ({
          bookTitle: book.title,
          authorName: book.author,
          imageURL: book.book_image,
          category: list.list_name, // Using list name as category
        }))
      ).slice(0, 7);


      setBooks(nyTimesBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    console.log(`API key is ${apiKey}`);
    fetchTrendingBooks();
  }, [apiKey]);

  return (
    <div className="App">
      <BannerCard books={books.length > 0 ? books : fallbackBooks} />
    </div>
  );
}

export default Trending;
