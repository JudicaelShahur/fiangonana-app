// src/hooks/useAuth.js
import { useState, useEffect } from "react";
import { getUserProfile } from "../services/authService";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfile(); // cookie envoyé automatiquement
        setUser(data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const logout = () => {
    setUser(null);
    // Ici tu peux appeler ton endpoint logout si nécessaire
  };

  return { user, setUser, logout, loading };
}
