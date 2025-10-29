import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // optional: track route changes if needed

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="main-header" className={scrolled ? "scrolled" : ""}>
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
