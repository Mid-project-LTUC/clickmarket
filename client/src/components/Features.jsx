import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHeadset,
  faShieldHalved,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Features.css";
import { useEffect } from "react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: faTruck,
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      id: 2,
      icon: faHeadset,
      title: "24/7 Support",
      description: "We’re here to help anytime",
    },
    {
      id: 3,
      icon: faShieldHalved,
      title: "Secure Payment",
      description: "100% secure online payment",
    },
    {
      id: 4,
      icon: faCreditCard,
      title: "Easy Returns",
      description: "Hassle-free returns policy",
    },
  ];
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
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
    <section className="features">
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
