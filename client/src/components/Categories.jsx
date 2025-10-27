import "./Categories.css";
import { useEffect } from "react";

export default function Categories() {
  const categories = [
    { id: 1, name: "Fruits & Vegetables", image: "../../public/fruits.png" },
    { id: 2, name: "Dairy & Eggs", image: "../../public/fruits.png" },
    { id: 3, name: "Bakery", image: "../../public/fruits.png" },
    { id: 4, name: "Snacks & Beverages", image: "../../public/fruits.png" },
  ];
  useEffect(() => {
    const cards = document.querySelectorAll(".category-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <div className="category-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
