import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // import navigate
import "./SearchBar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        const productsArray = Array.isArray(res.data)
          ? res.data
          : res.data.products || [];
        setProducts(productsArray);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!Array.isArray(products)) return;

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Navigate to product page on click
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="search"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>🔍</button>
      </div>

      {searchTerm && filteredProducts.length > 0 && (
        <div className="search-results">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="search-result-item"
              onClick={() => handleProductClick(product)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}

      {searchTerm && filteredProducts.length === 0 && (
        <div className="search-results">
          <div className="search-result-item">No products found</div>
        </div>
      )}
    </div>
  );
}
