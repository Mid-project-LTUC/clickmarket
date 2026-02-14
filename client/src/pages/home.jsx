import "./home.css";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Promotions from "../components/Promotions";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const heroText = document.querySelector(".hero-text");
    setTimeout(() => {
      heroText.classList.add("show");
    }, 200); // delay for smooth effect
  }, []);

  const handleStartShopping = () => {
    navigate("/products"); // Redirect to product list page
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Fresh Groceries, Delivered Fast & Easy</h1>
          <p>
            Discover a wide range of quality products from your favorite
            supermarket. Shop anytime, anywhere, and enjoy fresh groceries
            delivered straight to your door.
          </p>
          <button onClick={handleStartShopping}>Start Shopping</button>
        </div>
        <div className="hero-image">
          <div className="overlay"></div>
        </div>
      </section>

      <Features />
      <Categories />
      <Promotions />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
