import React, { useState, useEffect } from "react";
import { FaBars, FaUsers, FaCalendarAlt, FaChurch, FaDonate, FaTasks, FaUserCog, FaCog, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import "/src/styles/SidNavBar.css";
export default function Sidebar() {
  const { user, loading } = useProfile();
  const [sidebarActive, setSidebarActive] = useState( );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setSidebarActive(true);
      else setSidebarActive(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <aside className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-user">
          <div className="user-avatar"><FaUserCircle /></div>
          <div className="user-name">{loading ? "Chargement..." : user?.nom_user || "Utilisateur"}</div>
          <div className="user-role">{user?.role || "Role"}</div>
          </div>
        </div>

        <ul className="sidebar-menu">
          <li className="menu-title">Principal</li>
          <li className="menu-item"><Link to="/dashboard" className="menu-link"><FaChurch /> Tableau de bord</Link></li>
          <li className="menu-item"><Link to="/statistique" className="menu-link"><FaDonate /> Statistique</Link></li>

          <li className="menu-title">Gestion</li>
          <li className="menu-item"><Link to="/fiangonana" className="menu-link"><FaDonate /> Fiangonana</Link></li>
          <li className="menu-item"><Link to="/kartie" className="menu-link"><FaChurch /> Kartie</Link></li>
          <li className="menu-item"><Link to="/mpino" className="menu-link"><FaDonate /> Mpino</Link></li>
          <li className="menu-item"><Link to="/mpitondra" className="menu-link"><FaDonate /> Mpitondra</Link></li>
          <li className="menu-item"><Link to="/chefkartie" className="menu-link"><FaDonate /> Chef Kartie</Link></li>
          <li className="menu-item"><Link to="/fahatongavana" className="menu-link"><FaDonate /> Fahatongavana</Link></li>
          <li className="menu-item"><Link to="/chefkartie" className="menu-link"><FaDonate /> Chef Kartie</Link></li>
          <li className="menu-item"><Link to="/Vola" className="menu-link"><FaDonate /> Vola</Link></li>
          <li className="menu-item"><Link to="/komitie" className="menu-link"><FaDonate /> Komitie</Link></li>
          <li className="menu-item"><Link to="/sampana" className="menu-link"><FaDonate /> Sampana</Link></li>
          <li className="menu-title">Administration</li>
          <li className="menu-item"><a href="#" className="menu-link"><FaUserCog /> Utilisateurs</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaCog /> Paramètres</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaQuestionCircle /> Aide & Support</a></li>
        </ul>
      </aside>

      {window.innerWidth < 992 && (
        <div className={`sidebar-toggle ${sidebarActive ? "active" : ""}`} onClick={() => setSidebarActive(!sidebarActive)}>
          <FaBars />
        </div>
      )}
    </>
  );
}
