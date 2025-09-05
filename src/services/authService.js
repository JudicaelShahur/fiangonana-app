import api from "../api";

// Enregistrer un utilisateur
export const registerUser = async(data) => {
    try {
        const response = await api.post("/auth/create-account", data);
        return response.data; 
    } catch (error) {
        throw error;
    }
};


// Login utilisateur
export const loginUser = async(data) => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data; 
    } catch (error) {
        throw error;
    }
};

// Logout utilisateur
export const logoutUser = async (token) => {
  try {
    const response = await api.post(
      "/auth/logout",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

