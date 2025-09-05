import { createContext, useContext, useState, useEffect } from "react";
import { fetchCurrentUser, logoutUser } from "../services/authService";
import { getCsrfCookie } from "../api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            try {
                // Maka CSRF cookie aloha
                await getCsrfCookie();

                // Avy eo maka ny user
                const result = await fetchCurrentUser();
                if (result.success && result.user) setUser(result.user);
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const logout = async () => {
        try {
            await logoutUser();
        } catch (err) {
            console.error(err);
        }
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
