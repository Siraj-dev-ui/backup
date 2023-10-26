import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AddProductForm from "./components/AddProductForm";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Form from "./components/form";
import Footer from "./components/Footer";

import "./theme.css";
import ProductCard from "./components/ProductCard";
import ProductsList from "./components/ProductList";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="app">
      <Router>
        <Navbar setDisplayProducts={setDisplayProducts} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                component={Dashboard}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/AddProductForm" element={<AddProductForm />} />
          <Route path="/form" element={<Form />} />
          <Route path="/product-list" element={<ProductsList />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
