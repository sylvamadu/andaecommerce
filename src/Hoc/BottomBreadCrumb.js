import React,{useContext} from 'react';
import { NewsContext } from './NewsContext';
import {FaCartPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BottomBreadCrumb() {
    const{ProductsInfo,
      cartProducts,
      selectedCategory,
      priceHighToLow,
      priceLowToHigh,
      priceMoreThanFiveThousand,
      priceMoreThanTenThousand,
      priceMoreThanTwentyThousand
     } = useContext(NewsContext)
  return (
    <div className="bottomBreadCrumb">
        <h3>{ selectedCategory === 'Popularity' ? 
        `${ProductsInfo.length} products found`
        : selectedCategory === 'Price: Low to High' ? 
        `${priceLowToHigh.length} products found`
        : selectedCategory === 'Price: High to Low' ? 
        `${priceHighToLow.length} products found`
        : selectedCategory === 'Price More Than 5,000' ? 
        `${priceMoreThanFiveThousand.length} products found`
        : selectedCategory === 'Price More Than 10,000' ? 
        `${priceMoreThanTenThousand.length} products found`
        : selectedCategory === 'Price More Than 20,000' ? 
        `${priceMoreThanTwentyThousand.length} products found`
        : 'no product available'
        }</h3>
        <div className="grid-change-icon">
          <Link to='/cartpage' >
            <span>< FaCartPlus className='cart-icon' /></span>
            <p className="number">{cartProducts.length}</p>
          </Link>
        </div>
    </div>
  )
}

export default BottomBreadCrumb