import React from "react";
import Card from "./Card";
import { FaUsers, FaCalendarAlt, FaDonate, FaHistory, FaChurch } from "react-icons/fa";

export default function MainContent({ activePage }) {
  if (activePage === "fiangonana") {
    return (
      <main className="main-content">
        <h1>Paroisses</h1>
        <p>Ity ny pejy Paroisses.</p>
      </main>
    );
  }

  if (activePage === "mpino") {
    return (
      <main className="main-content">
        <h1>Dons & Finance</h1>
        <p>Ity ny pejy Dons & Finance.</p>
      </main>
    );
  }

  // default dashboard
  return (
    <main className="main-content">
      <div className="content-header">
        <h1 className="content-title">Tableau de bord</h1>
      </div>

      <div className="dashboard-grid">
        <Card icon={<FaUsers />} title="Membres" number="245" label="Membres enregistrés" />
        <Card icon={<FaCalendarAlt />} title="Événements" number="12" label="Événements ce mois-ci" />
        <Card icon={<FaDonate />} title="Dons" number="3 450 €" label="Dons ce mois-ci" />
      </div>
    </main>
  );
}
