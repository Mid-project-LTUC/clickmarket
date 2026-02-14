import "./Categories.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        const products = Array.isArray(res.data) ? res.data : [];

        // Extract unique categories with first product image
        const uniqueCategoriesMap = new Map();
        products.forEach((p) => {
          if (!uniqueCategoriesMap.has(p.category)) {
            uniqueCategoriesMap.set(p.category, p.image_url);
          }
        });

        const categoriesArray = Array.from(
          uniqueCategoriesMap,
          ([name, image], idx) => ({
            id: idx,
            name,
            image: image || "https://via.placeholder.com/300x300",
          })
        );

        setCategories(categoriesArray);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="categories-section">
      <h2 className="categories-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div
            key={cat.id}
            className={`category-card card-${idx}`}
            onClick={() => handleCategoryClick(cat.name)}
          >
            <img src={cat.image} alt={cat.name} />
            <div className="category-overlay">
              <h3>{cat.name}</h3>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
