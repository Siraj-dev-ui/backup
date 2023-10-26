import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Import the ProductCard component

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/products'); // Ensure this URL is correct
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      {/* Render your products based on the fetched data */}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} /> {/* Render ProductCard for each product */}
      ))}
    <button onClick={handleUpload}>Upload</button>

    </div>
  );
};

export default ProductsList;
