import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { afficherToastErreur } from "../utils/toast";
import { getBackendMessage } from "../utils/getBackendMessage";

const useLoginForm = (etatInitial = { nomUtilisateur: "", motDePasse: "", seSouvenir: false }) => {
  const [donneesFormulaire, setDonneesFormulaire] = useState(etatInitial);
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Gestion des inputs
  const gererChangement = (e) => {
    const { name, value, type, checked } = e.target;
    setDonneesFormulaire((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Toggle mot de passe
  const basculerVisibiliteMotDePasse = () => setAfficherMotDePasse(!afficherMotDePasse);

  // Form submit
  const gererSoumission = (callback) => (e) => {
    e.preventDefault();
    callback(donneesFormulaire);
  };

  // Login
  const onLogin = async (data) => {
    try {
      setError(null);

      // Appel API
      const result = await loginUser({
        nom_user: data.nomUtilisateur,
        mdp_user: data.motDePasse,
      });

      // Token ao anatin'ny result.data
        const token = result.results?.token; 
        if (!token) throw { message: "Token non reçu" };
      // Stockage token
      if (data.seSouvenir) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      // Redirect automatique vers dashboard
      navigate("/dashboard");

      // Return token + user raha ilaina
      return result.data;

    } catch (err) {
      const messageErreur = getBackendMessage(err);
      setError(messageErreur);
      afficherToastErreur(messageErreur);
    }
  };

  return {
    donneesFormulaire,
    afficherMotDePasse,
    gererChangement,
    basculerVisibiliteMotDePasse,
    gererSoumission,
    onLogin,
    error,
  };
};

export default useLoginForm;
