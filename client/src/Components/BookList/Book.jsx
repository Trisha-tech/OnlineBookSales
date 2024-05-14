import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function Book({book}) {

  const {title , author , genre,thumbnail,price,currencies,rating,description} = book;
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  return (
    <div>
      <div 
        className='py-[1rem] px-[1rem] rounded-[4px] shadow-lg bg-white 
        flex flex-col justify-between'>
        <img 
          className='w-[80vh] h-[30vh] object-contain mx-auto'
          src={thumbnail} alt={title}
        />
        <div className='mt-[1rem] text-center'>
          <h2 className='text-black line-height-1.4 mb-[0.8rem] font-bold text-xl'>{title}</h2>
          <p className='mb-[3px]'>Author: {author}</p>
          <div className='flex items-center justify-evenly'>
            <p>Price: {price} {currencies}</p>
            <Box
              sx={{
                '& > legend': { mt: 2 },
              }}
            >
              <StyledRating
                name="customized-color"
                defaultValue={rating}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                readOnly
              />
            </Box>
          </div>
          <div className='flex justify-evenly'>
            <Link to='/bookdetails'>
              <button className='bg-blue-800 text-white text-xs p-2 md:text-sm md:p-2 rounded-md m-1'>View Details &rarr;</button>
            </Link>            
            <button className='bg-green-600 text-white text-xs p-2 md:text-sm md:p-2 rounded-md m-1'>Buy Now &rarr;</button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Book
