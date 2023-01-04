import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">RajuTK</Link>
      </h1>
      <div className="links">
        <Link to="/contact">Contact</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
