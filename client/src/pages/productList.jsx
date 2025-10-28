<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";
=======
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
>>>>>>> 6730601 (Save my current work before rebase)

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
=======
   // Fetch products when page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
>>>>>>> 6730601 (Save my current work before rebase)
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
<<<<<<< HEAD
    <section
      className="products"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <h2>Product List</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                width: "200px",
              }}
            >
              <img
                src={p.imageUrl}
                alt={p.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{p.name}</h3>
              <p>{p.price} JD</p>
              {/* زر Add to Cart */}
              <button
                style={{
                  backgroundColor: "#0d6efd",
                  color: "white",
                  border: "none",
                  padding: "8px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
=======
    <section className="products-page">
      <h2>All Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
>>>>>>> 6730601 (Save my current work before rebase)
        )}
      </div>
    </section>

  );
}

export default ProductList;
