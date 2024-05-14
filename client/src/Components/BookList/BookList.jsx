import React, { useState } from 'react';
import Book from './Book';
import books from './books';

function BookList({filteredBooks}) {
  const booksPerPage = 4; // Number of books per page
  const totalPages = Math.ceil(books.length / booksPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const visibleBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  return (
    <div className='py-4 px-2 md:px-4 lg:px-8 m-1'>
      <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {visibleBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-800 text-white py-2 px-4 rounded-md mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`bg-blue-800 text-white py-2 px-4 rounded-md mx-1 ${
              currentPage === index + 1 ? 'bg-blue-600' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-blue-800 text-white py-2 px-4 rounded-md ml-2"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookList;
