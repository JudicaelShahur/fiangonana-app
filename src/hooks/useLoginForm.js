import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { afficherToastErreur } from "../utils/toast";
import { getBackendMessage } from "../utils/getBackendMessage";

const useLoginForm = (etatInitial = { nomUtilisateur: "", motDePasse: "" }) => {
  const { setUser } = useAuth();
  const [donneesFormulaire, setDonneesFormulaire] = useState(etatInitial);
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const gererChangement = (e) => {
    const { name, value, type, checked } = e.target;
    setDonneesFormulaire((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const basculerVisibiliteMotDePasse = () => setAfficherMotDePasse(!afficherMotDePasse);

  const gererSoumission = (callback) => (e) => {
    e.preventDefault();
    callback(donneesFormulaire);
  };

  const onLogin = async (data) => {
    try {
      setError(null);
      const result = await loginUser({
        nom_user: data.nomUtilisateur,
        mdp_user: data.motDePasse,
      });
      
      if (result.success && result.user) {
        setUser(result.user);
        navigate("/dashboard");
      } else {
        console.warn("Format réponse inattendu:", result);
      }
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
