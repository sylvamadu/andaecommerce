import React,{useState,useContext} from 'react';
import { NewsContext } from './NewsContext';

function Card({id,image,name,price,color,discount,freeDelivery}) {
    const{ ProductsInfo,
    cartProducts,
    setCartProducts,
    } = useContext(NewsContext)

    const[addedStatus, setAddedStatus] = useState('Add to Cart')
    const handleClick = ()=>{
        
        //loop through all the products, if the ids match, add product into the cart, see if the item is not in the array
        for(const product of ProductsInfo){
            if(product.id === id && cartProducts.includes(product) === false){
                product.quantity = 0; 
                const sumOfEachItem = product.quantity * product.price;
                product.totalPriceBought = sumOfEachItem;
                setCartProducts([...cartProducts,product]);
                setAddedStatus('Added to Cart');
            }
        }
    }
  
    console.log(cartProducts)

    //calculate the real price from the discounted price
    const realPriceCalc =(discount,price)=>{
        const percentCharged = (1 - (discount/100))
        return numberWithCommas((price / percentCharged).toFixed(2))
    }

    //convert price in thousands format
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <div className='card'>
        <figure>
            {freeDelivery && <p>free delivery</p>}
            <img src={image} alt={name} />
        </figure>
        <div className="card-content">
            <h3>{name}</h3>
            {color && <h4>{color}</h4>}
            {discount && <p className="discount-price">&#8358;{` ${numberWithCommas(price.toFixed(2))}`}</p>}
            <div className="discount-info">
                {discount && <p className='real-price'>&#8358;{` ${realPriceCalc(discount,price)}`}</p>}
                <p className="percentdiscount">{`-${discount} %`}</p>
            </div>
            
        </div>
        <button onClick = {handleClick}>{addedStatus}</button>
        
    </div>
  )
}

export default Card