import React from 'react';

const IndividualProductPage = ({ product }) => (
  <div className="individual-product-page">
    <div className="product-details">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="product-description">
        <h1>{product.productName}</h1>
        <p>{product.productPrice}</p>
        <p>{product.productDescription}</p>
      </div>
    </div>
  </div>
);

export default IndividualProductPage;
