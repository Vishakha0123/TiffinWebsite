import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/img/hero.jpg"; 

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Account created successfully! Now login.");
    navigate("/login");
  };

  return (
    <div className="text-white">

      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <form
          onSubmit={handleRegister}
          className="relative max-w-md w-full bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl p-8 shadow-lg space-y-4 text-gray-800"
        >
          <h2 className="text-3xl font-semibold text-center text-[#C66B3D] mb-4">
            Create Account
          </h2>

          <input
            type="text"
            name="uname"
            placeholder="Username"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
          />

          <button
            type="submit"
            className="w-full bg-[#C66B3D] text-white font-semibold py-3 rounded-lg hover:bg-[#b45e35] transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-700 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-[#C66B3D] underline hover:text-[#A34E2F]">
              Login
            </Link>
          </p>
        </form>
      </section>

      <footer className="text-center py-6 text-gray-300 border-t border-white/20">
        © 2025 Tiffin Service
      </footer>
    </div>
  );
};

export default Register;

