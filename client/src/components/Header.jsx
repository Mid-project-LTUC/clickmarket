
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <h1>Click Market</h1>
        <SearchBar/>
        <div className="icons">
          <Link to="/cart">Cart</Link>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          <Link to="/wishlist">WishList</Link> 
          <FontAwesomeIcon icon="fa-solid fa-heart" />        
          <Link to="/user">User</Link>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
      </div>
    </header>
  );
}
