// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { token, user, loading } = useAuth();
    // Si les données du localStorage sont encore en cours de récupération -> attendre
    if (loading) {
        return <p>Chargement...</p>; 
    }
    // Si aucun token ou utilisateur n'est présent -> rediriger vers la page de login
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }
    // Si un token et un utilisateur existent -> afficher la page protégée
    return <Outlet />;
};


export default PrivateRoute;
