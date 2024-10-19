import React from "react";
import logo from "../images/images.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="navcontainer">
      <nav>
        <ul className="navbar">
          <li>
            <a href="https://centarnit.com/">
              <img src={logo}></img>
            </a>
          </li>
          <li>Home</li>
          <li>About us</li>
          <li>About FLL</li>
        </ul>
      </nav>
    </div>
  );
}
