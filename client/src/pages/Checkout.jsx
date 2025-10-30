import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function Checkout() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    // هنا ممكن ترسل البيانات للسيرفر لو حبيت تخزن الطلب
    setOrderPlaced(true);
    // بعد تأكيد الطلب، نفرغ السلة
    cartItems.forEach((item) => removeFromCart(item.id));
  };

  if (orderPlaced)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>✅ Your order has been placed successfully!</h2>
        <p>Thank you for shopping with us.</p>
      </div>
    );

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{(item.price * item.quantity).toFixed(2)} JD</span>
              </li>
            ))}
          </ul>
          <h3 style={{ textAlign: "right", marginTop: "20px" }}>
            Total: {total.toFixed(2)} JD
          </h3>
          <button
            onClick={handlePlaceOrder}
            style={{
              marginTop: "20px",
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
        </>
      )}
    </div>
  );
}
