import React from "react";
import bgImage from "../assets/img/hero.jpg";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you — your message has been sent!");
    e.target.reset();
  };

  return (
    <div className="text-white">

      {/* Background Section */}
      <section
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Contact Card */}
        <div className="relative max-w-xl w-full bg-white/90 backdrop-blur-sm border border-white/40 rounded-xl p-8 text-gray-800 shadow-lg">
          <h2 className="text-3xl font-semibold text-[#C66B3D] mb-6 text-center">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="uname"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone (Optional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C66B3D]"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-[#C66B3D]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#C66B3D] text-white font-semibold py-3 rounded-lg hover:bg-[#b45e35] transition"
            >
              Send
            </button>

          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-300 border-t border-white/20">
        © 2025 Tiffin Service
      </footer>

    </div>
  );
};

export default Contact;
