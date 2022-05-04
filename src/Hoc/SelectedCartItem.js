import React,{useState, useContext} from 'react';
import { NewsContext } from './NewsContext';


function SelectedCartItem({id,image,name,color, totalPriceBought,quantity}) {
    const{cartProducts,setCartProducts, setTotal} = useContext(NewsContext)
    // const[finalCartItems, setFinalCartItems] = useState(cartProducts)
    const[quant, setQuant] = useState(quantity)
    const[totalSum, setTotalSum] = useState(totalPriceBought)
    
   //convert price in thousands format
   function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    
    //updating the total price of items bought.
    const totalling =()=>{
        let initialPrice = 0
        for(let i = 0; i < cartProducts.length; i++){
        initialPrice += cartProducts[i].totalPriceBought
        }
        return initialPrice
        //console.log(initialPrice)
        
    }
    const totallingAfterDelete =(cart)=>{
        let initialPrice = 0
        for(let i = 0; i < cart.length; i++){
        initialPrice += cart[i].totalPriceBought
        }
        return initialPrice
        //console.log(initialPrice)
        
    }
    
    const handleIncrement =()=>{
        //target the selected product id
        //Increase the value of its quantity if it matches.
        const clickedIdObject = cartProducts.find(item => item.id === id)
        if(clickedIdObject){
            clickedIdObject.quantity += 1
            let val = clickedIdObject.quantity
            //update the total price for each item after increasing its quanitity
            clickedIdObject.totalPriceBought = clickedIdObject.quantity * clickedIdObject.price
            let totalVal = clickedIdObject.quantity * clickedIdObject.price
            setQuant(val)
            setTotalSum(totalVal)
            setTotal(numberWithCommas(totalling().toFixed(2)))
        }
        console.log(clickedIdObject)
        console.log(cartProducts)
    }
    const handleDecrement =()=>{
        //target the selected product id
        //increase the value of its quantity if it matches.
        const clickedIdObject = cartProducts.find(item => item.id === id)
        if(clickedIdObject){
            if(clickedIdObject.quantity > 1){
                clickedIdObject.quantity -= 1
                let val = clickedIdObject.quantity
                //update the total price for each item after decreasing its quanitity
                clickedIdObject.totalPriceBought = clickedIdObject.quantity * clickedIdObject.price
                let totalVal = clickedIdObject.quantity * clickedIdObject.price
                setQuant(val)
                setTotalSum(totalVal)
                setTotal(numberWithCommas(totalling().toFixed(2)))
            }
          
        }
    }
    
    const handleDelete =()=>{
        //select the ones in the cart not deleted
        const NewCart = cartProducts.filter(item => item.id !== id)
        //update the cart products to thr filtered one
        setCartProducts(NewCart)
        //recalculate the filtered cart
        setTotal(numberWithCommas(totallingAfterDelete(NewCart).toFixed(2)))
        // setTotal(numberWithCommas(totalling().toFixed(2)))
    }

   
  return (
        <div className='cartItem' key={id}>
            <div className="group-cart">
                <img src={image} alt='icon' />
                <div className="info--cart">
                    <h3>{name}</h3>
                    <p>{color}</p>
                </div>
            </div>
            <div className="btns-form">
                <button onClick={handleIncrement}>+</button>
                <p className="quantity">{quant}</p>
                <button onClick={handleDecrement}>-</button>
            </div>   
            <p className="price">&#8358;{numberWithCommas(totalSum.toFixed(2))}</p>
            <button onClick={handleDelete}>x</button>
        </div>
  )
}

export default SelectedCartItem