import React, { useState, useEffect } from "react";
import { FaBars, FaUsers, FaCalendarAlt, FaChurch, FaDonate, FaTasks, FaUserCog, FaCog, FaQuestionCircle, FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) setSidebarActive(true);
      else setSidebarActive(false);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-user">
            <div className="user-avatar"><FaUserCircle /></div>
            <div className="user-name">Jean Dupont</div>
            <div className="user-role">Administrateur</div>
          </div>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-title">Principal</li>
          <li className="menu-item">
            <a href="#" className="menu-link"><FaUsers /> Tableau de bord</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link"><FaCalendarAlt /> Calendrier <span className="menu-badge">3</span></a>
          </li>

          <li className="menu-title">Gestion</li>
          <li className="menu-item"><a href="#" className="menu-link"><FaUsers /> Membres</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaChurch /> Paroisses</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaDonate /> Dons & Finance</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaTasks /> Activités</a></li>

          <li className="menu-title">Administration</li>
          <li className="menu-item"><a href="#" className="menu-link"><FaUserCog /> Utilisateurs</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaCog /> Paramètres</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaQuestionCircle /> Aide & Support</a></li>
        </ul>
      </aside>

      <div className={`sidebar-toggle ${sidebarActive ? "active" : ""}`} onClick={() => setSidebarActive(!sidebarActive)}>
        <FaBars />
      </div>
    </>
  );
}
