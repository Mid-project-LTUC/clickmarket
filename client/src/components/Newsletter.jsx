import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h2>Subscribe for Exclusive Deals</h2>
        <p>
          Get weekly updates on promotions, new products, and discounts straight
          to your inbox.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
