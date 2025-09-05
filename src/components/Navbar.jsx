import React, { useState } from "react";
import { FaChurch, FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const { user, logout } = useAuth();

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
        {user && (
          <li className="navbar-item">
            <span className="navbar-link">
              <FaUserCircle /> Bonjour, {user.nom_user}
            </span>
          </li>
        )}
        <li className="navbar-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
            className="navbar-link"
          >
            <FaSignOutAlt /> Déconnexion
          </a>
        </li>
      </ul>
    </nav>
  );
}
