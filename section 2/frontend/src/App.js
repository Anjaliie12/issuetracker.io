// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="login" element={<Login/>}/>
          <Route path="Signup" element={<Signup/>}/>




        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
