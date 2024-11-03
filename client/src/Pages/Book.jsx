import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Book = () => {
    const { id } = useParams();

    const [book, setBook] = useState(null);

    useEffect(() => {
      fetchBook()
    }, [])

    const fetchBook = async () => {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

        const data = await res.json();

        console.log(data);

        setBook(data.volumeInfo)
    }

    
  return (
    <div className="book-container flex flex-col md:flex-row max-w-[900px] m-5 p-4 border border-[#e2e8f0] rounded-lg bg-white my-20 mx-auto shadow-md">
      <div className='book-cover w-[35%] h-auto object-cover rounded-lg mx-auto my-0 md:m-0'>
        <img
          src={book?.imageLinks?.smallThumbnail}
          alt="image"y
          className=" book_img w-full"
        />
      </div>
      <div className="book-details md:w-[65%] w-full p-8 md:p-0 mx-auto my-0 md:m-0 ml-4 flex flex-col justify-center">
        <h1 className="book-title m-0 font-bold text-2xl">{book?.title}</h1>
        <h2 className="book-author text-xl text-[#4a5568] my-0 mx-1">{book?.authors[0]}</h2>
        <p className="book-description text-[#718096] my-2">{book?.description}</p>
        <div className="published-date font-bold text-lg mt-4">
          <span>Published: </span>
          <span>{book?.publishedDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Book