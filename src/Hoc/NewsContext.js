import React, {useState, createContext} from 'react';
// import axios from 'axios';
import ProductsInfo from '../content/ProductsInfo';

export const NewsContext = createContext()


export const NewsContextProvider = (props)=>{
    const[selectedCategory, setSelectedCategory ] = useState('Popularity')
    const[cartProducts, setCartProducts] = useState([])
    const[total, setTotal] = useState('0.00')
    
    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        address: ''
    }
    const[checkout, setCheckout] = useState(initialFormState)
    const[formData, setFormData] = useState(initialFormState)

    //a copy of the products array before sorting from high to low
    const copiedArrayHighToLow = ProductsInfo.map( a => ({...a}))

    //price from high to low
    const priceHighToLow = copiedArrayHighToLow.sort((a , b) => b.price - a.price)
    
    //a copy of the products array before sorting from low to high
    const copiedArrayLowToHigh = ProductsInfo.map( a => ({...a}))

    //price from low to high
    const priceLowToHigh = copiedArrayLowToHigh.sort((a , b) => parseFloat(a.price) - parseFloat(b.price))

    //filter products more than 5000
    const priceMoreThanFiveThousand = ProductsInfo.filter(item =>(
        item.price >= 5000
    ))
    //filter products more than 10,000
    const priceMoreThanTenThousand = ProductsInfo.filter(item =>(
        item.price >= 10000
    ))
    //filter products more than 20,000
    const priceMoreThanTwentyThousand = ProductsInfo.filter(item =>(
        item.price >= 20000
    ))
    
   


    return(
        <NewsContext.Provider value={{ ProductsInfo, 
            selectedCategory, 
            setSelectedCategory,
            total,
            setTotal,
            initialFormState,
            formData, 
            setFormData,
            checkout, setCheckout,
            cartProducts,
            setCartProducts,
            priceHighToLow,
            priceLowToHigh,
            priceMoreThanFiveThousand,
            priceMoreThanTenThousand,
            priceMoreThanTwentyThousand}}>
            {props.children}
        </NewsContext.Provider>
    )
}