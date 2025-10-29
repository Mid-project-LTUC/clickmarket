import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import ProductList from "./pages/productList.jsx";
import About from "./pages/about";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import User from "./pages/user.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Auth from "./pages/Auth.jsx";
import ProductPage from "./pages/ProductPage.jsx"; // ✅ import the new product page

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
