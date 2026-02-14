// src/pages/Auth.jsx
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import "./Auth.css";

export default function Auth() {
  const { user, login } = useContext(UserContext);
  const navigate = useNavigate();

  // Form state
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  const isRegistered = !!user?.email; // check if user already has data

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name: username, email, password };
    login(userData); // save in context
    alert(
      isRegistered ? "Logged in successfully!" : "Registered successfully!"
    );
    navigate("/user"); // redirect to user page
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="header">
          <h1>{isRegistered ? "Welcome Back" : "Create Your Account"}</h1>
          <p>
            {isRegistered
              ? "Login to access your online market dashboard"
              : "Fill in the details to register your account"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" "
            />
            <label>Username</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
            <label>Password</label>
          </div>

          <button type="submit" className="btn-submit">
            {isRegistered ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
