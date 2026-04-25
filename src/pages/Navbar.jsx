import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="nav-wrapper">
          
          {/* LOGO */}
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <img src="/assets/images/klassy-logo.png" alt="Klassy Cafe" />
          </NavLink>

          {/* HAMBURGER */}
          <div
            className={`menu-trigger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* MENU */}
          <ul className={`nav ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/" onClick={closeMenu} end
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/menu" onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink to="/chefs" onClick={closeMenu}
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Chefs
              </NavLink>
            </li>

            
           <li>
              <a
                href="https://www.lincovate.com/#/websites"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Lincovate
              </a>
            </li>
          </ul>

        </div>
      </div>
    </header>
  );
}