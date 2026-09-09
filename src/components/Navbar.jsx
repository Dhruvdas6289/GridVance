import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// 1. Import your logo file from your assets folder
import logo from "../assets/logo.jpeg"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          {/* 2. Render the logo image */}
          <img src={logo} alt="TarVance Logo" className="brand-logo" />
          <span>Tarvance</span>
          <span className="trademark">®</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "active" : "")}
  onClick={closeMenu}
>
  About
</NavLink>

          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Start a Project
            <span></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;