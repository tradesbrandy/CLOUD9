import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import Admin from "./components/Admin.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
