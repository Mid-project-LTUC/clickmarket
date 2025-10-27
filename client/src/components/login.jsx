import { useState } from "react";

export default function Login({onLoginSuccess}){

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      onLoginSuccess(data.user); //updates parent User component
    } else {
      alert("Login failed");
    }
  };
  
  return(
     <form onSubmit={handleSubmit} className="login-form">
        <h3>LogIn</h3>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
  );
}