import React from 'react';

const Cart = ({cartItems}) => {
  return (
    <div className='cart-items'>
      <div className='cart-items-header'> Cart Items </div>

      {cartItems.length === 0 && (                                    /* If Cart is Empty, we make use of truthy condition in JS */
        <div className='cart-items-empty'>No Items are added.</div>
      )}
     
     <div>
       {cartItems.map((item) => (
         <div key={item.id} className='cart-items-list'>
           <img className='cart-items-image' src={item.image}/>
         </div> 
       ))}
     </div>

    </div>
  )
};

export default Cart;
