import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CartModal from "../components/CartModal";
import bgImage from "../assets/img/hero.jpg";

const plans = [
  { title: "Daily Tiffin", desc: "Fresh veg meal delivered daily.", price: "₹80/day" },
  { title: "Weekly Plan", desc: "6 meals weekly + free Sunday meal.", price: "₹500/week" },
  { title: "Monthly Plan", desc: "Best value full month subscription.", price: "₹1900/month" },
  { title: "Premium Meal Box", desc: "Extra protein + special sabzi daily.", price: "₹250/day" },
];

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="text-white">

      {/* Background Section */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat px-6 md:px-12 py-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#F2C7A3] text-center mb-10">
            Choose Your Plan
          </h2>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/90 backdrop-blur-sm text-gray-800 border border-white/40 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-3">{plan.desc}</p>
                  <div className="text-lg font-bold text-[#C66B3D] mb-4">{plan.price}</div>

                  <button
                    onClick={() => setSelectedPlan(plan.title)}
                    className="px-5 py-2 bg-[#C66B3D] text-white rounded-lg font-semibold hover:bg-[#b45e35] transition"
                  >
                    Select Plan
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-300 border-t border-white/20">
        © 2025 Tiffin Service
      </footer>

      {/* Plan Selection Modal */}
      <CartModal
        isOpen={!!selectedPlan}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </div>
  );
};

export default Plans;
