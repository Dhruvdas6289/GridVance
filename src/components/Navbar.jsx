import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={closeMenu}>
          GridVance<span>®</span>
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

          <Link to="/contact" className="nav-cta" onClick={closeMenu}>
            Start a Project
            <span>↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;