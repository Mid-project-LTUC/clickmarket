import { useEffect } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Hammad",
      text: "Amazing service! Fresh products delivered right on time. Highly recommend!",
      image: "../../public/user.jpg",
    },
    {
      id: 2,
      name: "Ali Lee",
      text: "The best online supermarket experience I’ve had. Great variety and quality!",
      image: "../../public/user.jpg",
    },
    {
      id: 3,
      name: "Rawan Lesan",
      text: "Fast delivery and very fresh groceries. Love the website design too!",
      image: "../../public/user.jpg",
    },
    {
      id: 4,
      name: "Laith jarrar",
      text: "Excellent service and very fresh products!",
      image: "../../public/user.jpg",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".testimonial-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200); // stagger by 200ms
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div key={review.id} className="testimonial-card">
            <img src={review.image} alt={review.name} />
            <p>"{review.text}"</p>
            <h4>{review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
