import React from 'react';
import "./Cart.css"

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  
  const totalPrice= cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-items'>
 
      <div className='cart-items-header'> Your Cart </div>

      {cartItems.length === 0 && (                                    /* If Cart is Empty, we make use of truthy condition in JS */
        <div className='cart-items-empty'>No Items are added.</div>
      )}
     
     <div className='cart-item-container'>
       {cartItems.map((item) => (
         <div key={item.id} className='cart-items-list'>
           <img className='cart-items-image' src={item.image}/>
           <div className='cart-info-wrapper'>
           <div className='cart-items-name'> {item.name}</div>
            <div className='cart-items-functions'>
                <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
            </div>
            <div className='cart-items-price'>
              {item.quantity} * $ {item.price}
              </div>
            </div>
         </div> 
       ))}
     </div>

     <div className='cart-clear'>
        {cartItems.length >=1 && (
          <button className='clear-cart-btn' onClick={handleCartClearance}> Clear Cart</button>
        )}
     </div>

     <div className='cart-items-total-price-name'>
       Total Price
       <div className='cart-items-total-price'>
          $ {totalPrice}
       </div>

     </div>
    </div>
  )
};

export default Cart;
