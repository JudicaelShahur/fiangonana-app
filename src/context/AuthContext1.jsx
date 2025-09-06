// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true); 
    // Récupère l'utilisateur et le token depuis le localStorage au démarrage
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");
        if (savedToken) setToken(savedToken);
        if (savedUser) setUser(JSON.parse(savedUser));
        setLoading(false); // vérification terminée
    }, []);
    // Sauvegarde dans le localStorage lorsqu'il y a un changement
    useEffect(() => {
        console.log("Token dans le state :", token);
        if (token) localStorage.setItem("token", token);
        else localStorage.removeItem("token");

        if (user) localStorage.setItem("user", JSON.stringify(user));
        else localStorage.removeItem("user");
    }, [token, user]);
    // Déconnexion
    const logout = async () => {
        if (token) {
            try {
                await logoutUser(token);
            } catch (err) {
                if (err.response?.status === 401) {
               
                } else {
                    console.error("Erreur lors de la déconnexion :", err);
                }
            }
        }
        // Suppression côté client
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                setUser,
                setToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
