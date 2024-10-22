import React, { useEffect, useState } from 'react'
import { books } from "../assets/book"
import "./Book.css";
import { useParams } from 'react-router-dom';
const Book = () => {
    const { id } = useParams();
    const [bookfound, setBookfound] = useState(null)
    console.log(id);
    

    useEffect(() => {
      setBookfound(books.find(item => item.id == id))
    }, [])
    
    console.log(bookfound);
    
    return (
        <div className='Bcontainer'>
            <div className="book-container">
                <img
                    src={bookfound?.imageURL || ""}
                    alt="image"
                    className="book-cover"
                />
            </div>
            <div className="book-details">
                <h1 className="book-title">{bookfound?.bookTitle}</h1>
                <h2 className="book-author">{bookfound?.authorName}</h2>
                <p className="book-description">{bookfound?.category}</p>
            </div>
        </div>
      );
}

export default Book