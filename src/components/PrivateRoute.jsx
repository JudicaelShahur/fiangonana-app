import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    // Raha tsy misy token → redirect any amin'ny login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Raha misy token → aseho ilay pejy
    return <Outlet />;
};

export default PrivateRoute;
