import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cartItems, addToCart, wishlistItems, toggleWishlist } =
    useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        // Ensure the product object has an id field
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  // Wrap addToCart and toggleWishlist to pass the correct product object
  const handleAddToCart = () => {
    addToCart({ ...product });
  };

  const handleToggleWishlist = () => {
    toggleWishlist({ ...product });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ position: "relative" }}>
        <div
          onClick={handleToggleWishlist}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "1.5rem",
            color: isInWishlist ? "#e74c3c" : "#ccc",
            cursor: "pointer",
          }}
        >
          ♥
        </div>
        <img
          src={product.image_url}
          alt={product.name}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
      <h2>{product.name}</h2>
      <p style={{ fontWeight: "700", color: "#27ae60" }}>{product.price} JD</p>
      <button
        onClick={handleAddToCart}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          backgroundColor: isInCart ? "#219150" : "#27ae60",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isInCart ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}
