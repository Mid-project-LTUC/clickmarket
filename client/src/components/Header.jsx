







import { useEffect } from "react";
import "./header.css";

export default function Header() {
  useEffect(() => {
    const header = document.getElementById("main-header");

    const handleScroll = () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="main-header">
      <div className="navbar-container">
        <div className="logo">ClickMarket</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Offers</a>
          <a href="#">Contact</a>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="icons">
          <button className="icon-btn">
            <i className="fa fa-heart"></i>
          </button>
          <button className="icon-btn">
            <i className="fa fa-shopping-cart"></i>
          </button>
          <button className="icon-btn">
            <i className="fa fa-user"></i>
          </button>
        </div>
      </div>
    </header>
  );
}