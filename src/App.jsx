import { Routes, Route } from "react-router-dom";
import NavbarGlass from "./components/NavbarGlass";

import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Categories";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import Login from "./components/login";
import Register from "./components/Register";

function App() {
  return (
    <>
      {/* ✅ Navbar OUTSIDE Routes */}
      <NavbarGlass />

      {/* ✅ Only Route components inside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

