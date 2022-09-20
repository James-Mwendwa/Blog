import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <h2>Blogger</h2>
        </Link>
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
}

export default Header;
