import React from 'react'
import Productitem from './ProductItem'
import Preloader from '../components/Preloader'

const Shop = () => {
  return (
    <div>
      <Preloader />
      <Productitem/>
    </div>
  )
}

export default Shop
