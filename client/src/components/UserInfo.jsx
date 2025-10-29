import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserInfo({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
