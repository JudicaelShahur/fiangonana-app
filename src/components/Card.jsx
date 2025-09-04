import React from "react";

export default function Card({ icon, title, number, label }) {
  return (
    <div className="card">
      <div className="card-header">
        <span>{title}</span>
        {icon}
      </div>
      <div className="card-body">
        <div className="stat-number">{number}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}
