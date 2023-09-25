import React, { useState } from "react";

const Products = ({ addToCart }) => {
  const [productQuantity, setProductQuantity] = useState({});

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      imageSrc: "src/components/car1.jpg", // Replace with the actual image URL or path
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      imageSrc: "src/components/car2.jpg", // Replace with the actual image URL or path
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      imageSrc: "src/components/car3.jpg", // Replace with the actual image URL or path
    },
  ];

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    if (product.id in productQuantity) {
      const updatedQuantity = { ...productQuantity };
      updatedQuantity[product.id] += 1;
      setProductQuantity(updatedQuantity);
    } else {
      // If not in the cart, initialize quantity to 1
      setProductQuantity({ ...productQuantity, [product.id]: 1 });
    }
    addToCart(product);
  };

  return (
    <div className="container mt-5" style={{ marginBottom: "200px" }}>
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={product.imageSrc}
                className="card-img-top"
                alt={product.name}
                style={{ width: "300px", height: "250px" }} // Set both width and height
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p>Quantity in Cart: {productQuantity[product.id] || 0}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
