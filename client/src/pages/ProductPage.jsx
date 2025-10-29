import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data); // API returns the object directly
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart`);
  };

  const handleAddToWishlist = () => {
    alert(`Added ${product.name} to wishlist`);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="product-price">${product.price}</p>
          <p className="product-description">
            {product.description || "No description available."}
          </p>

          <div className="product-actions">
            <button className="btn-cart" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
            </button>
            <button className="btn-wishlist" onClick={handleAddToWishlist}>
              <FontAwesomeIcon icon={faHeart} /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
