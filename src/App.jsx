import { Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PrivateRoute from './routes/PrivateRoute';
import './styles/Auth.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouteFiangonana from './routes/RouteFiangonana';

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
          <Route path="/*" element={<RouteFiangonana />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}
export default App;
