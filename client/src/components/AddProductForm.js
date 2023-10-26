import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    image: '',
    countInStock: 0,
  });
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  /*  useEffect(() => {
    // Fetch products from the server when the component mounts
    fetchProducts();
  }, []); */

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProductId) {
        // Update the existing product
        const response = await axios.put(
          `http://localhost:3000/api/product/${selectedProductId}`,
          productData
        );
        console.log('Product updated:', response.data);
      } else {
        // Create a new product
        const response = await axios.post(
          'http://localhost:3000/admin/products/add',
          productData
        );
        console.log('Product created:', response.data);
      }
      // Reset the form
      setProductData({
        name: '',
        image: '',
        countInStock: 0,
      });
      setSelectedProductId(null);
      // Fetch the updated list of products
      fetchProducts();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEdit = (productId) => {
    // Find the product to edit
    const productToEdit = products.find((product) => product._id === productId);
    if (productToEdit) {
      // Set the form data and selected product ID for editing
      setProductData({
        name: productToEdit.name,
        image: productToEdit.image,
        countInStock: productToEdit.countInStock,
      });
      setSelectedProductId(productId);
    }
  };

  const handleDelete = async (productId) => {
    try {
      // Delete the product
      const response = await axios.delete(
        `http://localhost:3000/api/product/${productId}`
      );
      console.log('Product deleted:', response.data);
      // Fetch the updated list of products
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Container className='text-center'>
      <Row>
        <Col>
          <h2 className='h1.product_title'>Add or Update a Product</h2>
          <Form onSubmit={handleSubmit} className='float__wrapper'>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={productData.name}
                onChange={handleInputChange}
                className='product__name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image URL:</Form.Label>
              <Form.Control
                type='text'
                name='image'
                value={productData.image}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Count in Stock:</Form.Label>
              <Form.Control
                type='number'
                name='countInStock'
                value={productData.countInStock}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type='submit' variant='primary'>
              {selectedProductId ? 'Update Product' : 'Add Product'}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            {products.map((product) => (
              <li key={product._id}>
                {product.name} -{' '}
                <Button
                  variant='primary'
                  onClick={() => handleEdit(product._id)}
                  className='product__button'
                >
                  Edit
                </Button>{' '}
                <Button
                  variant='danger'
                  onClick={() => handleDelete(product._id)}
                  className='product__button'
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
