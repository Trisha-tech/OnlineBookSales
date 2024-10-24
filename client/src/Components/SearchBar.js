import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'your google books api';

  const handleSearch = (e) => {
    e.preventDefault();
  
    if (query.length > 2) {
      setLoading(true);
      setError(null);
  
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch books');
          }
          return response.json();
        })
        .then((data) => {
          setBooks(data.items);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch books');
          setLoading(false);
        });
      } else {
        setError('Please enter at least 3 characters');
        setBooks([]);
    }
  };
  

  return (
    <div className="relative w-full max-w-lg mx-auto my-8">
      <form onSubmit={handleSearch}>
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none dark:text-white"
            type="text"
            placeholder="Search for books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            <div className="bg-white text-orange-600 rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            <FaSearch />
          </div>
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {books && books.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
          {books.map((book) => (
            <li
              key={book.id}
              className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
            >
              <strong>{book.volumeInfo.title}</strong> by {book.volumeInfo.authors?.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
