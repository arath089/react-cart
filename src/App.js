import React, {useState} from 'react';
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Front/Routes/Routes';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id );  /*Find if the product is already in the cart or not */
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?        /*Go through each cart item and see if it matches a product id */
      {...ProductExist, quantity: ProductExist.quantity + 1}: item )       /* Using Spread Syntax here to display the product and increase quantity */
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id );  /*Find if the product is already in the cart or not */
    if (ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id ));
    } else {
      setCartItems(
        cartItems.map((item) =>
         item.id === product.id 
         ? {...ProductExist, quantity: ProductExist.quantity - 1}
         : item
       )
      );
    }
  }

  const handleCartClearance =() => {
    setCartItems([]);
  }

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes 
         productItems= {productItems} 
         cartItems={cartItems} 
         handleAddProduct={handleAddProduct} 
         handleRemoveProduct={handleRemoveProduct}
         handleCartClearance={handleCartClearance}
         />                 {/* Passing productItems and cartItems as props to the Routes component */}
      </Router>  
    </div>
  );
};

export default App;
