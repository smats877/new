// App.jsx
import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css"; // Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => [...prevCart, product]);
  }, []);

  const resetCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div>
        <Header cartItemCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} resetCart={resetCart} />} // Pass the resetCart function to the Cart component
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} resetCart={resetCart} />} // Pass the resetCart function to the Checkout component
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
