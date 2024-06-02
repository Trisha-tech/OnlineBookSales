import React,{ useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import jwt_decode from "jwt-decode";
import './ProductCard.css'


export default function ProductCard({ productdetails }) 
{
    const navigate = useNavigate()

    const {
        _id, 
        bookName,
        author,
        originalPrice,
        discountedPrice,
        discountPercent,
        imgSrc, 
        imgAlt,
        badgeText, 
        outOfStock
    } = productdetails
  

    

  
    
    return (
        <Link 
            to={`/shop/${_id}`}  
            onClick={() => localStorage.setItem(`${_id}`, JSON.stringify(productdetails))}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="card-basic">
                <img src={imgSrc} alt={imgAlt}/>
                <div className="card-item-details">
                    <div className="item-title">
                        <h4>{bookName}</h4>
                    </div>
                    <h5 className="item-author">- By  &nbsp;{author}</h5>
                    <p><b>Rs. {discountedPrice}   &nbsp;&nbsp;</b><del>Rs. {originalPrice}</del> &nbsp;&nbsp;
                        <span className="discount-on-card">({discountPercent}% off)</span>
                    </p>
                    <div className="card-button">
                        <button 
                            onClick={(event)=>{
                                event.preventDefault();
                                event.stopPropagation();
                                // addOrRemoveItemToWishlist()
                            }} 
                            className={`card-icon-btn ${wishlistBtn} outline-card-secondary-btn`}>
                                <i className={`fa fa-x ${wishlistHeartIcon}`} aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="badge-on-card">
                        {badgeText}
                    </div>
                    {
                        outOfStock && (
                            <div className="card-text-overlay-container">
                                    <p>Out of Stock</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </Link>
    )
}

export { ProductCard };