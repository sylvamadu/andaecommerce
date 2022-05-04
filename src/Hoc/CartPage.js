import React,{ useContext} from 'react';
import { NewsContext } from './NewsContext';
import SelectedCartItem from './SelectedCartItem';
import {Link} from 'react-router-dom';

function CartPage() {
    
    const{cartProducts,setCartProducts, total,setTotal} = useContext(NewsContext)

    const clearCart =()=>{
        setCartProducts([])
        setTotal('0.00')
    }
 
    
  return (
    <div className='cartpage container'>
        {
            cartProducts.length > 0 ? (
                cartProducts.map((prodt) =>(
                    <SelectedCartItem key={prodt.id} {...prodt} />
                ))
            ):(
                <p className='emptycart'>Your cart is empty..</p>
            )
        }
        <div className="clearall">
            <button onClick={clearCart}>Clear Cart</button>
        </div>
        <div className="total">
            <h3>Total Price</h3>
            <p>&#8358; {total}</p>
        </div>
        <div className="checkout">
            <button>
                <Link to='/formdetails'>Checkout</Link>
            </button>
        </div>
    </div>
  )
}

export default CartPage