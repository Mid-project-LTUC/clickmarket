import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price} JD</p>
              <p>
                Quantity:{" "}
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, parseInt(e.target.value))
                  }
                  style={{ width: "50px" }}
                />
              </p>
              <button
                onClick={() => removeFromCart(item._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: {total} JD</h3>
        </div>
      )}
    </div>
  );
}
