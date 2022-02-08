import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Product from '../Products/Product';
import Homepage from '../Homepage/Homepage';
import Cart from '../Cart/Cart';

const Routes = ({productItems}) => {                      {/* Importing productItems as props */}
  return <div>
      <Switch>
        <Route path="/" exact>                              
            <Product productItems={productItems}/>            {/* Passing productItems as props to the Products component */}
        </Route>
        <Route path="/home" exact>                              
            <Homepage />           
        </Route>
        <Route path="/cart" exact>                              
            <Cart />           
        </Route>
      </Switch>
  </div>;
};

export default Routes;
