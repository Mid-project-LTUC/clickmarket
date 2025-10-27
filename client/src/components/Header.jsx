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
