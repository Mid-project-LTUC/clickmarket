import "./Promotions.css";
import { useEffect } from "react";

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Fresh Fruits Discount",
      description: "Get up to 20% off on all fruits this week!",
      image: "../../public/fruits.png",
      endDate: "2025-11-05T23:59:59",
    },
    {
      id: 2,
      title: "Bakery Special Offer",
      description: "Buy 2 pastries and get 1 free today only!",
      image: "../../public/fruits.png",
      endDate: "2025-11-05T23:59:59",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      promotions.forEach((promo) => {
        const countdownEl = document.getElementById(`countdown-${promo.id}`);
        if (!countdownEl) return;

        const now = new Date().getTime();
        const end = new Date(promo.endDate).getTime();
        const distance = end - now;

        if (distance <= 0) {
          countdownEl.innerHTML = "Offer Ended";
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".promotion-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="promotions">
      <h2>Promotions & Offers</h2>
      <div className="promotions-container">
        {promotions.map((promo) => (
          <div key={promo.id} className="promotion-card">
            <span className="sale-badge">SALE</span>
            <img src={promo.image} alt={promo.title} />
            <div className="promotion-text">
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <div className="countdown" id={`countdown-${promo.id}`}></div>
              {/* <button>Shop Now</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
