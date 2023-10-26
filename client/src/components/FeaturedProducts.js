import React from 'react';
import ProductGridItem from './ProductGridItem'; // Import your ProductGridItem component

const FeaturedProductsSection = () => (
  <section className="text--neutral palette--light bg--neutral" style={{ '--PT': '48px', '--PB': '36px', '--FLEX-POSITION': 'center', '--CONTENT-WIDTH': '2000px' }}>
    <div className="wrapper section-padding">
      <div className="text__standard text-center">
        <div className="standard__heading standard__heading--set heading-size-6 aos-init aos-animate" data-aos="hero" data-aos-anchor="[data-section-id='template--18164664205623__16394945805207b500']" data-aos-order="1">
          <p>Featured Products</p>
        </div>
      </div>
    </div>
  </section>
);

const TextBelowSliderSection = () => (
  <div className="wrapper section-padding">
    {/* ... (other code) */}
    <div className="js-grid" data-grid-large="3" data-grid-small="2">
      <ProductGridItem
        product={{
          imageUrl: 'https://autumnandoak.co.za/cdn/shop/products/IMG_4151_720x.jpg?v=1677395780',
          productName: 'Bella Side Table',
          productPrice: '$199.99',
          slug: 'bella-side-table' // Use a unique identifier for the product
        }}
      />
      <ProductGridItem
        product={{
          imageUrl: 'https://autumnandoak.co.za/cdn/shop/products/IMG_3797_720x.jpg?v=1677395850',
          productName: 'Peg Rail Shelf',
          productPrice: '$149.99',
          slug: 'peg-rail-shelf' // Use a unique identifier for the product
        }}
      />
      <ProductGridItem
        product={{
          imageUrl: 'https://autumnandoak.co.za/cdn/shop/products/IMG_4972_540x.jpg?v=1677396187',
          productName: 'Sandra Dining Table',
          productPrice: '$499.99',
          slug: 'sandra-dining-table' // Use a unique identifier for the product
        }}
      />
    </div>
  </div>
);

const FeaturedProducts = () => (
  <div>
    <TextBelowSliderSection />
    <FeaturedProductsSection />
  </div>
);

export default FeaturedProducts;
