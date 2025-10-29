import { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.jsx";
import "./UserForm.css";

export default function User() {
  const { user, login, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [profileImage, setProfileImage] = useState(
    user?.image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name: username, email, password, image: profileImage };
    login(newUser);
    navigate("/");
  };

  const handleSocialLogin = (provider) => {
    const socialUser = {
      name: "SocialUser",
      email: `${provider}@mock.com`,
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    };
    login(socialUser);
    navigate("/");
  };

  const handleEditImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage("https://cdn-icons-png.flaticon.com/512/3135/3135715.png");
  };

  if (user) {
    return (
      <div className="profile-container">
        <div className="profile-card animated">
          <div className="profile-banner"></div>

          <div className="profile-avatar">
            <img src={profileImage} alt="User Avatar" />
            <div className="avatar-overlay">
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="avatar-options">
              <button onClick={handleEditImage}>Change Image</button>
              <button onClick={handleRemoveImage}>Remove Image</button>
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email || "No email available"}</p>

          <div className="profile-info">
            <div className="info-box">
              <h4>Orders</h4>
              <p>12</p>
            </div>
            <div className="info-box">
              <h4>Wishlist</h4>
              <p>5</p>
            </div>
            <div className="info-box">
              <h4>Member Since</h4>
              <p>2025</p>
            </div>
          </div>

          <button className="logout-btn" onClick={logout}>
            <span>Logout</span>
            <div className="wave"></div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-page">
      <div className="user-card">
        <div className="user-header">
          <h1>{isLogin ? "Welcome Back" : "Create Your Account"}</h1>
          <p>
            {isLogin
              ? "Login to your marketplace account"
              : "Sign up to start shopping"}
          </p>
        </div>

        <form className="user-form" onSubmit={handleSubmit}>
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

          {!isLogin && (
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
          )}

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
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="divider">OR</div>

        <div className="social-login">
          <button
            className="social-btn google"
            onClick={() => handleSocialLogin("Google")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google"
            />
            Sign in with Google
          </button>
          <button
            className="social-btn facebook"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
            />
            Sign in with Facebook
          </button>
        </div>

        <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
