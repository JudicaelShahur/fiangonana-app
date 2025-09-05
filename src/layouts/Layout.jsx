import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Fiangonana from "../pages/Fiangonana.jsx";
import Mpitondra from "../pages/Mpitondra.jsx";
import Komitie from "../pages/Komitie.jsx";
import Fahatongavana from "../pages/Fahatongavana.jsx";
import Sampana from "../pages/Sampana.jsx";
import ChefKartie from "../pages/ChefKartie.jsx";
import Kartie from "../pages/Kartie.jsx";
import Vola from "../pages/Vola.jsx";
import Mpino from "../pages/Mpino.jsx";
import Dashboard from "../pages/dashboard.jsx";
import Statistique from "../pages/statistique.jsx";

export default function Layout() {
  return (
    <div className="dashboard-layout" style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />
        <div className="main-content-wrapper" style={{ padding: '20px' }}>
          <Routes>
            <Route index element={<Dashboard />} /> 
            <Route path="dashboard" element={<Dashboard />} />  
            <Route path="statistique" element={<Statistique />} /> 
            <Route path="fiangonana" element={<Fiangonana />} />  
            <Route path="mpitondra" element={<Mpitondra />} /> 
            <Route path="mpino" element={<Mpino />} /> 
            <Route path="vola" element={<Vola />} /> 
            <Route path="kartie" element={<Kartie />} /> 
            <Route path="chefkartie" element={<ChefKartie />} /> 
            <Route path="sampana" element={<Sampana />} /> 
            <Route path="fahatongavana" element={<Fahatongavana />} />
            <Route path="komitie" element={<Komitie />} /> 

          </Routes>
        </div>
      </div>
    </div>
  );
}
