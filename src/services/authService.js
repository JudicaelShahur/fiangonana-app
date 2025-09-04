import api from "../api";

// Enregistrer un utilisateur
export const registerUser = async(data) => {
    try {
        const response = await api.post("/auth/create-account", data);
        return response.data; // aza mitady .results fotsiny
    } catch (error) {
        throw error; // aza extract mialoha, aleo handeha mivantana ao amin'ny hook
    }
};


// Login utilisateur
export const loginUser = async(data) => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data; // mandeha mivantana ny data rehetra (message, results, etc)
    } catch (error) {
        throw error.response?.data || { message: "Erreur inconnue" };
    }
};
