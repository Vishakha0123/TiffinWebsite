import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img/hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F2] text-gray-800">

      

      {/* Hero Section */}
      {/* Hero Section with Full Background Image */}
<section
  className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-20"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div>

  <div className="relative max-w-xl text-left text-white">
    <h2 className="text-4xl font-bold text-white leading-tight mb-4">
      Freshly Cooked, Daily Delivered
    </h2>

    <p className="text-lg leading-relaxed mb-6 text-gray-200">
      Healthy, home-cooked meals prepared fresh every day and delivered to your doorstep.
      Subscribe, save, and enjoy the simplicity of real food.
    </p>

    <p className="inline-block px-4 py-2 rounded-md bg-white/10 border border-white/40 text-gray-100 font-medium mb-8">
      Pro tip: Register to save your details and speed up ordering.
    </p>

    <div className="flex gap-4">
      <Link
        to="/categories"
        className="border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/20 transition shadow-md"
      >
        View Meal Plans
      </Link>

      <Link
        to="/register"
        className="border border-white text-white px-5 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
      >
        Register
      </Link>
    </div>
  </div>
</section>



      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-12">
        <h2 className="text-3xl font-semibold text-black">Why choose us?</h2>
        <p className="text-lg mt-4 text-gray-700 leading-relaxed">
          Home-style cooking, hygiene-first kitchens, and flexible subscription plans.
          Perfect for students, working professionals, and families away from home.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 border-t mt-16">
        © 2025 Tiffin Service
      </footer>

    </div>
  );
};

export default Home;

