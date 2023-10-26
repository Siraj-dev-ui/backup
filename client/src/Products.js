import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products') //this fetches the products from the server
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
         <h2>Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product._id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: R {product.price.toFixed(2)}</p>
            {/* Render other product details here */}
          </div>
        ))}
    </div>
    </div>
  );
};

export default Products;
