import {Routes, Route} from "react-router-dom"
import home from "./pages/home";
import InicioSesion from  "./pages/InicioSesion";
import Register from "./pages/Register";
import ProfilePsicologo from "./pages/ProfilePsicologo";
import Profileusuario from "./pages/Profileusuario";
import Profile from "./pages/Profile";
import Editprofile from "./pages/Editprofile";
import Dashboard from "./pages/Dashboard";
import Citas from "./pages/Citas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/inicioSesion" element={<InicioSesion />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profilepsicologo" element={<ProfilePsicologo />} />
      <Route path="/profileUsuario" element={<Profileusuario />} />
      <Route path="/editprofile" element={<Editprofile />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/citas" element={<Citas />} />
    </Routes>
  );
}

export default App
