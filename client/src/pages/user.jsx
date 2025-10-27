import React, { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";

function User() {
  const [user, setUser] = useState(null); // null = logged out
  const [view, setView] = useState("login"); // toggle between login/signup

  // Fetch user info on load (check if logged in)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setUser(data); // example { name, email, ... }
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  //  Logout handler
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "include" });
    setUser(null);
  };

  return (
    <section className="user">
      <h2>User Profile</h2>

      {/* Show login/signup if user is not logged in */}
      {!user ? (
        <div className="auth-section">
          <div className="auth-toggle">
            <button
              onClick={() => setView("login")}
              className={view === "login" ? "active" : ""}
            >
              Login
            </button>
            <button
              onClick={() => setView("signup")}
              className={view === "signup" ? "active" : ""}
            >
              Sign Up
            </button>
          </div>

          {view === "login" ? (
            <Login onLoginSuccess={setUser} />
          ) : (
            <SignUp onSignupSuccess={setUser} />
          )}
        </div>
      ) : (
        // Show user info when logged in
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </section>
  );
}

export default User;
