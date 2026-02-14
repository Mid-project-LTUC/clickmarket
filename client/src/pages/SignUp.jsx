// import { useState } from "react";
// import axios from "axios";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/users/signup", {
//         name,
//         email,
//         password,
//       });
//       setMessage(res.data.message);
//       setName("");
//       setEmail("");
//       setPassword("");
//     } catch (err) {
//       setMessage(err.response?.data?.error || "Error signing up");
//     }
//   };

//   return (
//     <div
//       style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}
//     >
//       <h2>Create Account</h2>
//       <form
//         onSubmit={handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             background: "#e63946",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Sign Up
//         </button>
//       </form>
//       {message && <p style={{ marginTop: "15px" }}>{message}</p>}
//     </div>
//   );
// }
