import React, { useState } from 'react'
import BookList from '../Components/BookList/BookList';
import Navbar from '../Components/NavBar/NavBar';
import booksData from '../Components/BookList/books';
function Shop() {
  const [searchText, setSearchText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = (searchTerm) => {
    setSearchText(searchTerm);

    const filtered = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  };
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <div className='m-5'>
        <h1 className='text-center font-extrabold text-3xl'>Available Books</h1>
        <BookList filteredBooks={filteredBooks} />
      </div>
    </div>
  )
}

export default Shop
