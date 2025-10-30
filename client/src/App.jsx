import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import ProductList from "./pages/productList.jsx";
import About from "./pages/about";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import "./App.css";

// import User from "./pages/User";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/test")
  //     .then((res) => setMessage(res.data.message))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <h2>{message}</h2> */}
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          {/* <Route path="/user" element={<User />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
