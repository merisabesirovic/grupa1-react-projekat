import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";
export default function Login() {
  function loguj(korisnicko_ime, lozinka) {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: korisnicko_ime,
        password: lozinka,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json(), navigate("/aboutus"))
      .then((res) => console.log(res))
      .catch(console.error);
  }
  function handleClick(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);
    loguj(username, password);
  }
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Unesite username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Unesite password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}
