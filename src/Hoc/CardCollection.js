import React,{useContext} from 'react';
import Card from './Card';
import { NewsContext } from './NewsContext';


function CardCollection() {
    const{ProductsInfo,
        selectedCategory,
        priceHighToLow,
        priceLowToHigh,
        priceMoreThanFiveThousand,
        priceMoreThanTenThousand,
        priceMoreThanTwentyThousand
    } = useContext(NewsContext)

    
  return (
    <div className='cardcollection'>
        {
            
            
            priceLowToHigh.length > 0 && selectedCategory === "Price: Low to High" ? (
                priceLowToHigh.map(item=>(
                    <Card key={item.id} {...item} />
                ))
            )
            :
            priceHighToLow.length > 0 && selectedCategory === "Price: High to Low" ? (
                priceHighToLow.map(item=>(
                    <Card key={item.id} {...item} />
                ))
            )
            :priceMoreThanFiveThousand.length > 0 && selectedCategory === "Price More Than 5,000" ? (
            priceMoreThanFiveThousand.map(item=>(
                <Card key={item.id} {...item} />
            ))
            ): priceMoreThanTenThousand.length > 0 && selectedCategory === "Price More Than 10,000" ? (
                priceMoreThanTenThousand.map(item=>(
                    <Card key={item.id} {...item} />
                ))
            ):priceMoreThanTwentyThousand.length > 0 && selectedCategory === "Price More Than 20,000" ? (
                priceMoreThanTwentyThousand.map(item=>(
                    <Card key={item.id} {...item} />
                ))
            ):ProductsInfo.length > 0 && selectedCategory === "Popularity" ? (
                ProductsInfo.map(item=>(
                    <Card key={item.id} {...item} />
                ))
            )
            : <p>no data</p>
        }
    </div>
  )
}

export default CardCollection