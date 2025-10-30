import React from "react";
import { Link } from "react-router-dom";

const NavbarGlass = () => {
  return (
    <header className="w-full backdrop-blur-md bg-black/40 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold">🍲 Tiffin Service</h1>

        <nav className="flex gap-6 text-lg">
          {["/", "/about", "/categories","/plans", "/contact", "/login", "/register"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="hover:text-red-700 transition"
            >
              {path === "/" ? "Home" : path.replace("/", "").replace(/^\w/, c => c.toUpperCase())}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavbarGlass;



