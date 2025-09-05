import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
    const { user, loading } = useAuth();

    if (loading) return <p>Chargement...</p>;

    if (!user) return <Navigate to="/login" replace />;

    return <Outlet />;
};

export default PrivateRoute;
