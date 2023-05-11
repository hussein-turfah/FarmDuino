import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import './reset.css'


import Register from './pages/register/register';
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import Temperature from "./pages/temperature/temperature";
import Humidity from "./pages/humidity/humidity";
import Soil_moisture from "./pages/soil-moisture/soil-moisture";
import Light_intensity from "./pages/light-intensity/light-intensity";
import ForgotPassword from "./pages/forgot-password/forgot-password";
import AdminDashboard from "./pages/admin panel/dashboard/admin-dashboard";
import Admin_sensors from "./pages/admin panel/sensors/admin-sensors";

function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Login/>} />
        if (localStorage.getItem("is_admin")==1) {
          <>
          Navigate ("/admin-dashboard")
          <Route path="/admin-dashboard" element={<AdminDashboard/>} />
          <Route path="/admin-sensors" element={<Admin_sensors />} />
          </>
        }else if(localStorage.getItem("token")  ){
        <>
          Navigate ("/dashboard")
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/temperature" element={<Temperature/>} />
          <Route path="/humidity" element={<Humidity/>} />
          <Route path="/soil-moisture" element={<Soil_moisture/>} />
          <Route path="/light-intensity" element={<Light_intensity/>} />
        </>
        }else{
          Navigate ("*")
        }
      </Routes>
  );
}
export default App;
