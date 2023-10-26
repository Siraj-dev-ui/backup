// // ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Import the ProductCard component

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({}); // Create a state for the form data

  useEffect(() => {
    // Fetch products from the server when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFormChange = (e) => {
    // Handle changes in form input fields and update the formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new product with the formData
      await axios.post('http://localhost:5001/api/products', formData);
      // Clear the form data after submission
      setFormData({});
      // Refresh the list of products
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      {/* Render your products based on the fetched data */}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {/* Add your form here */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleFormChange}
        />
        {/* Add other form fields for product properties */}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductsList;




// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import { Row } from 'react-bootstrap';
// import axios from 'axios'

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:5001/api/products')
//       .then(results => setProducts(results.data))
//       .catch((err) => console.log(err));
//   }, []);
  

//   return (
//     <Row>
//           {products.map((product) => (
//             <ProductCard key={product._id} id={product._id} product={product}/>
//           ))}
//           </Row>
//   );
//           };

// export default ProductList;
