import React, { useEffect, useState } from "react";
import SignupForm from "../components/signUp";
import LoginForm from "../components/login";
import UserInfo from "../components/userInfo";

export default function User() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  if (!token) {
    return (
      <div className="auth-container">
        {showSignup ? (
          <>
            <SignupForm />
            <p>
              Already have an account?{" "}
              <button onClick={() => setShowSignup(false)}>Login</button>
            </p>
          </>
        ) : (
          <>
            <LoginForm />
            <p>
              Don’t have an account?{" "}
              <button onClick={() => setShowSignup(true)}>Sign up</button>
            </p>
          </>
        )}
      </div>
    );
  }

  // If token exists, show user info
  return <UserInfo token={token} />;
}
