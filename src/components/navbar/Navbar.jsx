import React from "react";

const Navbar = () => {
  return (
    <nav className="desktop-nav">
      <div className="logo">Rosen Georgiev</div>
      <div>
        <ul className="nav-links">
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
