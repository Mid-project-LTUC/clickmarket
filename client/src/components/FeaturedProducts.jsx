import "./FeaturedProducts.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext.jsx";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [addedToCartIds, setAddedToCartIds] = useState([]);
  const [popupVisibleIds, setPopupVisibleIds] = useState([]);
  const { addToCart, toggleWishlist, wishlistItems } = useContext(CartContext);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        const allProducts = Array.isArray(res.data) ? res.data : [];
        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        const withRating = selected.map((p) => ({
          ...p,
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        setProducts(withRating);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchRandomProducts();
  }, []);

  const isInWishlist = (productId) =>
    wishlistItems.some((item) => item.id === productId);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    addToCart(product);

    // Mark button as added
    setAddedToCartIds((prev) => [...prev, product.id]);

    // Show popup inside the same card
    setPopupVisibleIds((prev) => [...prev, product.id]);

    // Remove popup after 3 seconds
    setTimeout(() => {
      setPopupVisibleIds((prev) => prev.filter((id) => id !== product.id));
    }, 3000);
  };

  return (
    <section className="featured-products-section">
      <h2 className="section-title">Best Sellers</h2>
      <div className="featured-products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image_url} alt={product.name} />
              <div className="card-overlay">
                <button
                  className={`wishlist-btn ${
                    isInWishlist(product.id) ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  ♥
                </button>

                <button
                  className={`cart-btn ${
                    addedToCartIds.includes(product.id) ? "added" : ""
                  }`}
                  onClick={(e) => handleAddToCart(e, product)}
                  disabled={addedToCartIds.includes(product.id)}
                >
                  {addedToCartIds.includes(product.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>

              {/* Popup message */}
              {popupVisibleIds.includes(product.id) && (
                <div className="added-popup">Added to cart</div>
              )}
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price} JD</p>
              <div className="product-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? "filled" : ""}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
