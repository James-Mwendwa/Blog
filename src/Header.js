import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="/">Blogger</a>
      </div>

      <div className="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/create">Create</a>
      </div>
    </div>
  );
}

export default Header;
