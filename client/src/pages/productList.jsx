import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const {
    cartItems,
    addToCart,
    removeFromCart,
    wishlistItems,
    toggleWishlist,
  } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartOpen(true);
    if (!addedProducts.includes(product.id)) {
      setAddedProducts((prev) => [...prev, product.id]);
    }
  };

  if (products.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Loading products...
      </p>
    );

  return (
    <div style={{ display: "flex" }}>
      <section
        style={{
          flex: 1,
          padding: "50px 20px",
          backgroundColor: "#f0f2f5",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "40px",
            color: "#222",
          }}
        >
          Our Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => {
            const isWishlisted = wishlistItems.some(
              (item) => item.id === product.id
            );
            const isAdded = addedProducts.includes(product.id);

            return (
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
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  onClick={() => toggleWishlist(product)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "1.5rem",
                    color: isWishlisted ? "#e74c3c" : "#ccc",
                    cursor: "pointer",
                    zIndex: 2,
                    userSelect: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  ♥
                </div>

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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>

                <div
                  style={{
                    padding: "15px",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#222",
                      marginBottom: "5px",
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "#27ae60",
                      marginBottom: "12px",
                    }}
                  >
                    {product.price} JD
                  </p>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    marginBottom: "15px",
                    backgroundColor: isAdded ? "#219150" : "#27ae60",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isAdded ? "Added!" : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <div
        style={{
          width: cartOpen ? "350px" : "0",
          transition: "width 0.3s ease",
          backgroundColor: "#fff",
          boxShadow: cartOpen ? "-4px 0 10px rgba(0,0,0,0.1)" : "none",
          overflowX: "hidden",
          padding: cartOpen ? "20px" : "0",
        }}
      >
        {cartOpen && (
          <>
            <h2 style={{ marginBottom: "20px" }}>Cart ({cartItems.length})</h2>

            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      border: "1px solid #ddd",
                      borderRadius: "12px",
                      padding: "10px",
                      marginBottom: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: "0 0 5px 0" }}>{item.name}</h4>
                      <p
                        style={{
                          margin: "0 0 5px 0",
                          color: "#27ae60",
                          fontWeight: "700",
                        }}
                      >
                        {item.price} JD
                      </p>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {}}
                        style={{
                          width: "50px",
                          padding: "3px 5px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                        }}
                      />
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        backgroundColor: "red",
                        color: "#fff",
                        border: "none",
                        padding: "5px 10px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <h3 style={{ textAlign: "right", marginTop: "10px" }}>
                  Total:{" "}
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toFixed(2)}{" "}
                  JD
                </h3>

                <button
                  onClick={() => {
                    cartItems.forEach((item) => removeFromCart(item.id));
                    alert("✅ Your order has been placed successfully!");
                  }}
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#27ae60",
                    color: "#fff",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Place Order
                </button>

                <button
                  onClick={() =>
                    cartItems.forEach((item) => removeFromCart(item.id))
                  }
                  style={{
                    marginTop: "10px",
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel Order
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
