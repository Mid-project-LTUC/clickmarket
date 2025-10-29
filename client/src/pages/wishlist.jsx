import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Wishlist() {
  const { wishlistItems, toggleWishlist, addToCart } = useContext(CartContext);

  if (wishlistItems.length === 0) {
    return (
      <section style={{ padding: "20px" }}>
        <h2>Your Wishlist</h2>
        <p>No items in your wishlist yet.</p>
      </section>
    );
  }

  return (
    <section style={{ padding: "20px" }}>
      <h2>Your Wishlist</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {wishlistItems.map((product) => (
          <div
            key={product.id}
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px",
            }}
          >
            {/* Wishlist Heart */}
            <div
              onClick={() => toggleWishlist(product)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: "1.5rem",
                color: "#e74c3c",
                cursor: "pointer",
                zIndex: 2,
              }}
            >
              ♥
            </div>

            {/* Product Image */}
            <div
              style={{
                width: "100%",
                height: "180px",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Product Info */}
            <div
              style={{ textAlign: "center", marginTop: "10px", width: "100%" }}
            >
              <h3 style={{ marginBottom: "5px" }}>{product.name}</h3>
              <p style={{ fontWeight: "700", color: "#27ae60" }}>
                {product.price} JD
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "8px",
                backgroundColor: "#27ae60",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
