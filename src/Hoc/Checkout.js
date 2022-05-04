import React,{useContext} from 'react';
import { NewsContext } from './NewsContext';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Checkout() {
  let history = useHistory()
    const{cartProducts,setCartProducts, checkout, total, setTotal} = useContext(NewsContext)

    const{name,email,phone,address} = checkout

   
    function orderId(){
      return (new Date().getTime()).toString(36) + new Date().getUTCMilliseconds();
   }
   
    function dateFormat(){
      const date = new Date();
      const components = [
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
      ];

      let datePurchased = `${components[2]}/${components[1] + 1}/ ${components[0]}`
      return datePurchased
    }

    const getTime =()=>{
      const today = new Date()
      const time_hrs = today.getHours() > 12 ? `${today.getHours() - 12}` : `${today.getHours()}`;
      const time_ampm = today.getHours() > 12 ? `pm` : `am`;
      const time_minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}`: `${today.getMinutes()}`;
      const time_purchased = `${time_hrs}:${time_minutes} ${time_ampm}`;
      return time_purchased
    }
   
    const handleOrder =(e)=>{
      //prevent reloading
      e.preventDefault()

      const getShoes =()=>{
        let shoes = []
        cartProducts?.map(item=> shoes.push({item:item.name,quantity: item.quantity,price:item.price}))
        return shoes
      }
      const customerInfo = {
        name,email,phone,address,
        totalprice: total,
        order_id: orderId(),
        date_purchased: dateFormat(),
        time: getTime(),
        shoes_bought: getShoes(),
      }
      

      axios.post(`https://6232e9536de3467dbac2f604.mockapi.io/shoecustomerdb`, { customerInfo })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
     
      history.push('/');
      setCartProducts([])
      setTotal('0.00')
      alert('Congrats, successfully ordered')
    }
    
  return (
    <div className='checkout'>
      <div className="block-info">
        <h3>name</h3>
        <p>{name}</p>
      </div>
      <div className="block-info">
        <h3>email</h3>
        <p>{email}</p>
      </div>
      
      <div className="block-info">
        <h3>phone</h3>
        <p>{phone}</p>
      </div>

      <div className="block-info">
        <h3>address</h3>
        <p>{address}</p>
      </div>
      <div className="block-info">
        <h3>Date</h3>
        <p>{dateFormat()}</p>
      </div>
      <div className="block-info">
        <h3>Time Purchased</h3>
        <p>{getTime()}</p>
      </div>
      <div className="block-info">
        <h3>Order_ID</h3>
        <p>{orderId()}</p>
      </div>
      {/* list of items names, quanity, price */}
      {
        cartProducts?.map(item=>(
          <div className='item-block' key={item.id}>
            <div className="block-info">
              <h3>Shoe Name</h3>
              <p>{item.name}</p>
            </div>
            <div className="block-info">
              <h3>Quantity Bought</h3>
              <p>{item.quantity}</p>
            </div>
            <div className="block-info">
              <h3>Price</h3>
              <p>{item.totalPriceBought}</p>
            </div>
          </div>
        ))
      }
      <div className="block-info">
        <h3>Total Price</h3>
        <p>{total}</p>
      </div>
      <div className="order">
        <button onClick={handleOrder}>Place Order</button>
      </div>
    </div>
  )
}

export default Checkout