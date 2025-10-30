import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");

        // Fix: handle API response as object with products key
        const allProducts = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.products)
          ? res.data.products
          : [];

        const filteredProducts = allProducts.filter(
          (p) =>
            p.category &&
            p.category.trim().toLowerCase() ===
              decodeURIComponent(categoryName).trim().toLowerCase()
        );

        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!products.length)
    return (
      <p style={{ textAlign: "center" }}>No products found in this category.</p>
    );

  return (
    <section className="category-page">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {decodeURIComponent(categoryName)}
      </h2>
      <div className="category-products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} JD</p>
          </div>
        ))}
      </div>
    </section>
  );
}
