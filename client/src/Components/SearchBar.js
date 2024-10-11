// src/components/SearchBar.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg mx-auto my-8 p-4  ">
      <div className="relative">
        <input
          className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-lg shadow-md py-4 pl-10 pr-10 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          type="text"
          placeholder="🔍 Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          type="submit"
        >
          <div className="bg-white text-orange-600 rounded-full p-2 shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            <FaSearch />
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
