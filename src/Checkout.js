import React from 'react';
import {useStateValue} from "./StateProvider.js";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal.js';
function Checkout() {

    const [{basket}] =useStateValue();
    return (
        <div className="checkout">
            <div>
            <img className="checkout_ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Electronics/May-BAU/SBI-bank-stripe_1500x100.jpg" />
       

        {
           basket?.length===0?(
               <div>
                 
                   <h2 className="checkout_title">Your Shopping Cart is Empty</h2>
               </div>
           ):(
            <div>
               
                <h2 className="checkout_title">Your Shopping Cart</h2>

                {
                    basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title ={item.title}
                        image={item.image}              
                        price ={item.price}
                        rating ={item.rating}

                        />
                    ))
                }
            </div>
           )}
           </div>
         
         <div className="checkout_right">
        <Subtotal />
      </div>
         </div>
      
    )
}

export default Checkout;
