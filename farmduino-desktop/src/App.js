import { Routes, Route } from "react-router-dom";
import './App.css';
import './reset.css'


import Register from './pages/register/register';
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
  );
}
export default App;
