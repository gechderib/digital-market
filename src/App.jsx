import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./features/signup/Signup.jsx";
import Login from "./features/login/Login";
import Home from "./features/home/Home";
import Dashboard from "./features/dashboard/Dashboard";
import SideBar from "./components/dashboard/SideBar";
// import Signup from './features/signup/Signup.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" >
        <Route path="home" element={<Dashboard/>} />
        <Route path="user" element= {<p>user</p>} />
      </Route>
    </Routes>
  );
}

export default App;
