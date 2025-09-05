// src/services/authService.js
import api,{ getCsrfCookie }  from "../api";
// Register user
export const registerUser = async (data) => {
    try {
      
    const response = await api.post("/auth/create-account", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Login: alefa miaraka amin'ny cookie
export const loginUser = async ({ nom_user, mdp_user }) => {
    try {
      await getCsrfCookie();
    console.log("Envoi login API avec X-Use-Cookie et withCredentials=true");
    console.log({ nom_user, mdp_user });

    const response = await api.post(
      "/auth/login",
      { nom_user, mdp_user },
      {
        headers: { "X-Use-Cookie": "true" },
        withCredentials: true, // Alefa miaraka amin'ny cookie
      }
    );

    console.log("Réponse login API:", response.data);
    return response.data; // { success, user, message }
  } catch (err) {
    console.error("Erreur login API:", err);
    throw err;
  }
};

// Logout: mamerina request any backend mba hamafana cookie
export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout", {}, { withCredentials: true });
    console.log("Logout API response:", response.data);
    return response.data;
  } catch (err) {
    console.error("Erreur logout API:", err);
    throw err;
  }
};

// Fetch current user avy amin'ny backend
export const fetchCurrentUser = async () => {
  try {
    const response = await api.get("/auth/me", { withCredentials: true });
    console.log("Fetch current user:", response.data);
    return response.data; // { success, user, message }
  } catch (err) {
    console.error("Erreur fetchCurrentUser:", err);
    return { success: false, user: null };
  }
};
