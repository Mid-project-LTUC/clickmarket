import React, { useState } from "react";

export default function SignUp({onSignupSuccess}){
  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",password: "",address: "",});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // keep session cookies if used
      });

      if (res.ok) {
        const data = await res.json();
        onSignupSuccess(data.user); // 👈 update parent User component
      } else {
        const errorData = await res.json();
        alert(errorData.message || "Signup failed");
      }
    }
    catch (err) {
      console.error("Error signing up:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
     <form className="signup-form" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <input
        type="text"
        name="firstName"
        placeholder="First name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      </form>
  );
}