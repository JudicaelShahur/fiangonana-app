import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import PrivateRoute from "./routes/PrivateRoute";

import { ToastContainer } from "react-toastify";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/dashboard.jsx";
import Statistique from "./pages/statistique.jsx";
import Fiangonana from "./pages/Fiangonana.jsx";
import Mpitondra from "./pages/Mpitondra.jsx";
import Mpino from "./pages/Mpino.jsx";
import Vola from "./pages/Vola.jsx";
import Kartie from "./pages/Kartie.jsx";
import ChefKartie from "./pages/ChefKartie.jsx";
import Sampana from "./pages/Sampana.jsx";
import Fahatongavana from "./pages/Fahatongavana.jsx";
import Komitie from "./pages/Komitie.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Auth routes tsy mila Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="statistique" element={<Statistique />} />
          <Route path="fiangonana" element={<Fiangonana />} />
          <Route path="mpitondra" element={<Mpitondra />} />
          <Route path="mpino" element={<Mpino />} />
          <Route path="vola" element={<Vola />} />
          <Route path="kartie" element={<Kartie />} />
          <Route path="chefkartie" element={<ChefKartie />} />
          <Route path="sampana" element={<Sampana />} />
          <Route path="fahatongavana" element={<Fahatongavana />} />
          <Route path="komitie" element={<Komitie />} />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
