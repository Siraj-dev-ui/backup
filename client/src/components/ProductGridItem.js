import React from 'react';
import { Link } from 'react-router-dom';

const ProductGridItem = ({ product }) => (
  <div className="product-grid-item">
    <div className="product-grid-item__container">
      <Link to={`/products/${product.slug}`}>
        <div className="product-grid-item__image fade-in lazypreload lazyloaded is-active" role="img" aria-label={product.productName} style={{ backgroundImage: `url("${product.imageUrl}")` }}>
          {/* Button */}
          <button type="button" className="product-grid-item__btn" data-popup-8179262947639={product.productName}>
            <span className="btn-state-ready">
              Quick view
            </span>
            <span className="btn-state-loading">
              <svg height="18" width="18" className="svg-loader">
                <circle r="7" cx="9" cy="9"></circle>
                <circle strokeDasharray="87.96459430051421 87.96459430051421" r="7" cx="9" cy="9"></circle>
              </svg>
            </span>
          </button>
        </div>
      </Link>
      {/* Product Title */}
      <div className="product__grid__title__wrapper">
        <p className="product__grid__title">
          {product.productName}
        </p>
      </div>
      {/* Product Price */}
      <div className="product__grid__price">
        {product.productPrice}
      </div>
    </div>
  </div>
);

export default ProductGridItem;
