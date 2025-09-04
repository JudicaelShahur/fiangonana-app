import React, { useState } from "react";
import { FaChurch, FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaChurch />
        <span>Fiangonana</span>
      </div>

      <button className="navbar-toggle" onClick={() => setMenuActive(!menuActive)}>
        <FaBars />
      </button>

      <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <FaUserCircle /> Mon compte
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <FaSignOutAlt /> Déconnexion
          </a>
        </li>
      </ul>
    </nav>
  );
}
