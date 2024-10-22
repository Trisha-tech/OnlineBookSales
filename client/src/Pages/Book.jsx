import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Book.css"

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
    <div className="book-container">
      <img
        src={book?.imageLinks?.smallThumbnail}
        alt="image"
        className="book-cover"
      />
      <div className="book-details">
        <h1 className="book-title">{book?.title}</h1>
        <h2 className="book-author">{book?.authors[0]}</h2>
        <p className="book-description">{book?.description}</p>
        <div className="published-date">
          <span>Published: </span>
          <span>{book?.publishedDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Book