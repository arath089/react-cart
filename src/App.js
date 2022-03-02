import React, {useState} from 'react';
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Front/Routes/Routes';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id );
    if (ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}: item )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  }

  return (
    <div>
      <Router>
        <Header />
        <Routes productItems= {productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} />                 {/* Passing productItems and cartItems as props to the Routes component */}
      </Router>  
    </div>
  );
};

export default App;
