import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img/hero.jpg";

const Categories = () => {
  return (
    <div className="text-white">

      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-300 mb-10">Popular Menus</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              { name: "Veg Thali", desc: "Dal, seasonal sabzi, roti, rice, salad.", price: "₹100" },
              { name: "Punjabi Thali", desc: "Dal makhani, paneer, jeera rice, roti.", price: "₹150" },
              { name: "South Indian", desc: "Dosa/Idli, sambar, chutney, curd rice.", price: "₹120" },
              { name: "Non-Veg Thali", desc: "Chicken/egg curry, rice, roti, salad.", price: "₹180" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm text-gray-800 p-6 rounded-xl shadow-sm border hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                <div className="text-lg font-bold text-black">{item.price}</div>
              </div>
            ))}

          </div>
        </div>
      </section>

   
      <footer className="text-center py-6 text-gray-300 border-t border-white/20">
        © 2025 Tiffin Service
      </footer>

    </div>
  );
};

export default Categories;


