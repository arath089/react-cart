import React from 'react';
import "./product.css"

const Product = ({productItems, handleAddProduct}) => {
  return (

//Map funtion will create a new array from the existing array and will 
// go through each item in the product item list and display them.

    <div className="products">                  
        {productItems.map((productItem) => (
            <div className="card">
                <div>
                    <img className="product-image" src={productItem.image}/>
                </div>

                <div>
                    <h3 className="product-name">
                        {productItem.name}
                    </h3>
                </div>

                <div className="product-price">
                    ${productItem.price}
                </div>

                <div className="button-wrapper">
                    <button 
                    className="product-add-button" 
                    onClick={() => handleAddProduct(productItem)}> 
                        Add to Cart 
                    </button>
                </div>
            </div>
        ))}
    </div>

  );
};

export default Product;
