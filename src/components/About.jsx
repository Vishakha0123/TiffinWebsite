import React from "react";
import bgImage from "../assets/img/hero.jpg";

const About = () => {
  return (
    <div className="text-white">  

      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-20 py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-3xl">
          <h2 className="text-4xl font-bold text-[#F2C7A3] mb-6">
            Our Mission
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-200">
            We connect home-chefs and customers, delivering hygienic, wholesome meals daily. 
            No preservatives, seasonal produce, and honest pricing.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            We help vendors manage orders and grow sustainably while offering customers 
            convenient, healthy meals that feel like home.
          </p>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-300 border-t border-white/20">
        © 2025 Tiffin Service
      </footer>

    </div>
  );
};

export default About;



