// Cart.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Cart = ({ cart }) => {
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mt-5" style={{ marginBottom: "600px" }}>
      <h2>Cart</h2>
      <ul className="list-group">
        {cart.map((product, index) => (
          <li key={index} className="list-group-item">
            {product.name}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>{" "}
      {/* Display the total price */}
      {/* Link to the Checkout page */}
      <Link to="/checkout" className="btn btn-success mt-3">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
