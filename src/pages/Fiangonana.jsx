import React, { useState } from "react";

export default function Fiangonana() {
  const [name, setName] = useState("");
  const [paroisses, setParoisses] = useState([]);

  const handleAdd = () => {
    if (name.trim()) {
      setParoisses([...paroisses, name]);
      setName("");
    }
  };

  return (
    <div>
      <h1>Paroisses</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de la paroisse"
      />
      <button onClick={handleAdd}>Ajouter</button>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {paroisses.map((p, i) => (
            <tr key={i}>
              <td>{p}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
