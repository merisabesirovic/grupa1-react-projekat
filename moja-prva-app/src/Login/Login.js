import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <input type="text" placeholder="Unesite username" />
        <input type="password" placeholder="Unesite password" />
        <button>Login</button>
      </div>
    </div>
  );
}
