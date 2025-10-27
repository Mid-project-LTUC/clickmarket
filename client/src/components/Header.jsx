<<<<<<< HEAD








import { useEffect } from "react";
import "./header.css";

=======
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import "./Header.css";
>>>>>>> c426fc4ab79fb6a497348947dc9e7ff577a45cb8
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
<<<<<<< HEAD
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
=======
    <header>
      <div className="header-top">
        <h1>Click Market</h1>
        <SearchBar />
        <div className="icons">
          <Link to="/cart" className="icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link to="/wishlist" className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/user" className="icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
>>>>>>> c426fc4ab79fb6a497348947dc9e7ff577a45cb8
        </div>
      </div>
    </header>
  );
}