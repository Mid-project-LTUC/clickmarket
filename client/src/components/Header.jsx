
import { useEffect } from "react";
import "./header.css";


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
        </div>
      </div>
    </header>
  );
}