import React from 'react';
import { Route } from 'react-router-dom'; 
import Slider from './components/Slider';
import NeutralPalette from './components/NeutralPalette'; 
import Footer from './components/Footer';

const Dashboard = () => {
  return (
    <section className="vh-100 gradient-custom">
      <h3>FEATURED PRODUCTS</h3>
      <Slider />
      <NeutralPalette />
      <Footer />
    </section>
  );
};

export default Dashboard;
