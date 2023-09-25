import React, { useState } from "react";

const Checkout = ({ cart, resetCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send order to server)
    const orderData = {
      customerInfo: formData,
      cartItems: cart,
    };

    // You can perform further actions, such as sending the order data to a server.
    // For now, let's create a simple receipt and log it.
    const receiptData = {
      order: orderData,
      timestamp: new Date().toLocaleString(),
    };

    setReceipt(receiptData);

    // Reset the cart to an empty array
    resetCart();
  };

  return (
    <div className="container mt-5" style={{ marginBottom: "300px" }}>
      <h2 className="mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
        </div>
        <h3 className="mb-3">Cart Items:</h3>
        <ul className="list-group mb-3">
          {cart.map((product, index) => (
            <li key={index} className="list-group-item">
              {product.name}
            </li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
      </form>
      {receipt && (
        <div className="mt-5">
          <h3>Receipt:</h3>
          <div className="receipt">
            <p>
              <strong>Order Date:</strong> {receipt.timestamp}
            </p>
            <p>
              <strong>Name:</strong> {receipt.order.customerInfo.name}
            </p>
            <p>
              <strong>Email:</strong> {receipt.order.customerInfo.email}
            </p>
            <p>
              <strong>Address:</strong> {receipt.order.customerInfo.address}
            </p>
            <h4>Order Items:</h4>
            <ul>
              {receipt.order.cartItems.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
