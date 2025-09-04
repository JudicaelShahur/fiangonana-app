import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Layout from './layouts/Layout';
import PrivateRoute from './components/PrivateRoute';
import './styles/Auth.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes protégées */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Layout />} />
          {/* Azonao ampiana routes hafa eto koa */}
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}
export default App;
