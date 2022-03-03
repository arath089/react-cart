import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from '../Products/Product';
import Homepage from '../Homepage/Homepage';
import Cart from '../Cart/Cart';

const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance}) => {                      {/* Importing productItems and cartItems as props */}
  return <div>
      <Switch>
        <Route path="/" exact>                              
            <Product productItems={productItems} handleAddProduct={handleAddProduct}/>            {/* Passing productItems as props to the Products component */}
        </Route>
        <Route path="/home" exact>                              
            <Homepage />           
        </Route>
        <Route path="/cart" exact>                              
            <Cart 
             cartItems={cartItems} 
             handleAddProduct={handleAddProduct}
             handleRemoveProduct={handleRemoveProduct}
             handleCartClearance={handleCartClearance}
             />                    {/* Passing cartItems as props to the Products component */}
        </Route>
      </Switch>
  </div>;
};

export default Routes;
