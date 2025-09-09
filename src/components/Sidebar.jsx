import React, { useState, useEffect } from "react";
import {
  FaBars, FaUsers, FaCalendarAlt, FaChurch, FaDonate, FaTasks, FaUserCog, FaCog,
  FaQuestionCircle, FaUserCircle, FaHome, FaMapMarkedAlt, FaPrayingHands, FaCross,
  FaCoins, FaUsersCog, FaSitemap, FaChartBar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useProfile from "../hooks/useProfile";
import "/src/styles/SidNavBar.css";

export default function Sidebar() {
  const { user, loading } = useProfile();
  const [sidebarActive, setSidebarActive] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) setSidebarActive(true); // desktop -> always open
      else setSidebarActive(false);        // mobile -> default closed
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
          <li className="menu-item">
            <Link to="/dashboard" className="menu-link"><FaHome /> Tableau de bord</Link>
          </li>
          <li className="menu-item">
            <Link to="/statistique" className="menu-link"><FaChartBar /> Statistique</Link>
          </li>
          <li className="menu-title">Gestion</li>
          <li className="menu-item"><Link to="/fiangonana" className="menu-link"><FaChurch /> Fiangonana</Link></li>
          <li className="menu-item"><Link to="/kartie" className="menu-link"><FaMapMarkedAlt /> Kartie</Link></li>
          <li className="menu-item"><Link to="/mpino" className="menu-link"><FaPrayingHands /> Mpino</Link></li>
          <li className="menu-item"><Link to="/mpitondra" className="menu-link"><FaCross /> Mpitondra</Link></li>
          <li className="menu-item"><Link to="/chefkartie" className="menu-link"><FaUsersCog /> Chef Kartie</Link></li>
          <li className="menu-item"><Link to="/fahatongavana" className="menu-link"><FaCalendarAlt /> Fahatongavana</Link></li>
          <li className="menu-item"><Link to="/vola" className="menu-link"><FaCoins /> Vola</Link></li>
          <li className="menu-item"><Link to="/komitie" className="menu-link"><FaUsers /> Komitie</Link></li>
          <li className="menu-item"><Link to="/sampana" className="menu-link"><FaSitemap /> Sampana</Link></li>
          <li className="menu-title">Administration</li>
          <li className="menu-item"><a href="#" className="menu-link"><FaUserCog /> Utilisateurs</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaCog /> Paramètres</a></li>
          <li className="menu-item"><a href="#" className="menu-link"><FaQuestionCircle /> Aide & Support</a></li>
        </ul>
      </aside>

      {/* Sidebar toggle button */}
      {isMobile && (
        <div
          className={`sidebar-toggle ${sidebarActive ? "active" : ""}`}
          onClick={() => setSidebarActive(!sidebarActive)}
        >
          <FaBars />
        </div>
      )}
    </>
  );
}
