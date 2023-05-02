import { Routes, Route } from "react-router-dom";
import './App.css';
import './reset.css'


import Register from './pages/register/register';
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Temperature from "./pages/temperature/temperature";
import Humidity from "./pages/humidity/humidity";
import Soil_moisture from "./pages/soil-moisture/soil-moisture";
import Light_intensity from "./pages/light-intensity/light-intensity";

function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Dashboard/>} />
        <Route path="/temperature" element={<Temperature/>} />
        <Route path="/humidity" element={<Humidity/>} />
        <Route path="/soil-moisture" element={<Soil_moisture/>} />
        <Route path="/light-intensity" element={<Light_intensity/>} />
      </Routes>
  );
}
export default App;
