import "./FeaturedProducts.css";
import { useEffect } from "react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Organic Apples",
      price: "JOD 4.99",
      image: "../../public/fruits.png",
    },
    {
      id: 2,
      name: "Fresh Milk",
      price: " JOD 2.49",
      image: "../../public/fruits.png",
    },
    {
      id: 3,
      name: "Chocolate Croissant",
      price: "JOD 1.99",
      image: "../../public/fruits.png",
    },
    {
      id: 4,
      name: "Orange Juice",
      price: "JOD 3.50",
      image: "../../public/fruits.png",
    },
  ];
  useEffect(() => {
    const cards = document.querySelectorAll(".product-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 100); // stagger by 0.1s
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);
  return (
    <section className="featured-products">
      <h2>Best Sellers</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p className="price">{prod.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
