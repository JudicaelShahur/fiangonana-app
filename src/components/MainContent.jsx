import React from "react";
import Card from "./Card";
import { FaUsers, FaCalendarAlt, FaDonate, FaHistory } from "react-icons/fa";

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="content-header">
        <h1 className="content-title">Tableau de bord</h1>
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Accueil</a></li>
          <li className="breadcrumb-item">Tableau de bord</li>
        </ul>
      </div>

      <div className="dashboard-grid">
        <Card icon={<FaUsers />} title="Membres" number="245" label="Membres enregistrés" />
        <Card icon={<FaCalendarAlt />} title="Événements" number="12" label="Événements ce mois-ci" />
        <Card icon={<FaDonate />} title="Dons" number="3 450 €" label="Dons ce mois-ci" />
        <Card icon={<FaUsers />} title="Membres" number="245" label="Membres enregistrés" />
      </div>

      <div className="card">
        <div className="card-header">
          <span>Activités récentes</span>
          <FaHistory />
        </div>
        <div className="card-body">
          <p>Voici un exemple de contenu pour la zone principale. Vous pouvez y ajouter des tableaux, des formulaires, ou tout autre contenu nécessaire à votre application.</p>
          <p>Cette structure de navigation est entièrement responsive et s'adaptera à tous les formats d'écran.</p>
        </div>
      </div>
    </main>
  );
}
