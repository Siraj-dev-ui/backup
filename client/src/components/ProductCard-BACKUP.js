import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const ProductCard = ({ product }) => { //({ product, onDelete, onUpdate })
  console.log(product);

  const handleDelete = (productID) => {
        console.log(productID);
        axios.delete('http://localhost:5001/api/product/' + productID)
  };

  const handleUpdate = () => {
    onUpdate(product._id);
  };

  return (
    <Card className='product' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title className='product__title'>{product.name}</Card.Title>
        <Card.Text className='product__name'>Description: {product.description}</Card.Text>
        <Card.Text className='product__price'>Price: {product.price}</Card.Text>
        <Card.Text className='product__count-in-stock'>Count in Stock: {product.countInStock}</Card.Text>
        <Button className='product__button' variant="primary" onClick={handleUpdate}>Update</Button> 
        <Button className='product__button' variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
