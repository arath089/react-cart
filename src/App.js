import React from 'react';
import data from "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Front/Routes/Routes';

const App = () => {
  const { productItems } = data;
  
  return (
    <div>
      <Router>
        <Header />
        <Routes productItems= {productItems}/>                 {/* Passing productItems as props to the Routes component */}
      </Router>  
    </div>
  );
};

export default App;
