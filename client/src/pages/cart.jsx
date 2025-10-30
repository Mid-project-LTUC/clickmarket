import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      const item = cartItems.find((i) => i.id === productId);
      if (!item) return;
      const diff = quantity - item.quantity;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) addToCart(item);
      } else if (diff < 0) {
        for (let i = 0; i < -diff; i++) removeFromCart(productId);
      }
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}
      >
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Your cart is empty
        </p>
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
                padding: "15px",
                marginBottom: "15px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={item.image_url}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    color: "#27ae60",
                    fontWeight: "700",
                  }}
                >
                  {item.price} JD
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <label>
                    Quantity:
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      style={{
                        width: "50px",
                        marginLeft: "5px",
                        padding: "3px 5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                      }}
                    />
                  </label>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: "#e74c3c",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginLeft: "auto",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3
            style={{
              textAlign: "right",
              marginTop: "20px",
              fontSize: "1.3rem",
            }}
          >
            Total: {total.toFixed(2)} JD
          </h3>
        </div>
      )}
    </div>
  );
}
