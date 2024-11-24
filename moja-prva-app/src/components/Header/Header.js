import React from "react";
import logo from "../../images/images.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/aboutus"}>
            <li>About us</li>
          </NavLink>
          <NavLink to={"/aboutfll"}>
            <li>About FLL</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
