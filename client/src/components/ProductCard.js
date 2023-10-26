import React from "react";
import { Card, Button } from "react-bootstrap";
import { axios } from "../utils/axios";

const ProductCard = ({ product, onDelete }) => {
  const handleDelete = async (productID) => {
    try {
      const resp = await axios.delete(`/api/product/${productID}`);
      console.log(resp);
      onDelete(productID);
    } catch (error) {
      console.log("error in deleting product", error);
    }
  };

  const handleUpdate = (productID) => {
    console.log("updating ", productID);
  };

  return (
    <Card className="product" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title className="product__title">{product.name}</Card.Title>

        <Card.Text className="product__price">Price: {product.price}</Card.Text>
        <Card.Text className="product__count-in-stock">
          Count in Stock: {product.stock}
        </Card.Text>
        <Button
          className="product__button"
          variant="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Button
          className="product__button"
          variant="danger"
          onClick={() => handleDelete(product._id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
