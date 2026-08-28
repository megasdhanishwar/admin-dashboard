import { useState } from "react";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiAlertCircle,
} from "react-icons/fi";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@demo.com" && password === "admin123") {
      setError("");

      onLogin();
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <span>A</span>
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">Login to access your Admin Dashboard</p>

        <div className="demo-credentials">
          <p>
            <strong>Demo Credentials</strong>
          </p>

          <span>Email: admin@demo.com</span>
          <span>Password: admin123</span>
        </div>

        {error && (
          <div className="login-error">
            <FiAlertCircle />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label>Email Address</label>

            <div className="login-input">
              <FiMail />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <div className="login-input">
              <FiLock />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn">
            <FiLogIn />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
