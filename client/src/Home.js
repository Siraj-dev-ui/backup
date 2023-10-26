import React from "react";
import Slider from "./components/Slider";
import FeaturedProducts from "./components/FeaturedProducts";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <Products />
    </div>
  );
};

export default Home;
