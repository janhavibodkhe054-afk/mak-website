import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function NavbarCyan() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const services = [
    { name: "Mechanical Product Design", path: "/services/product-design-dva" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    { name: "3D scanning & Product Benchmarking", path: "/services/3d-scanning-benchmarking" },
    { name: "CAD data conversion", path: "/services/cad-data-conversion" },
    { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    { name: "3D Printing / Rapid prototyping", path: "/services/3d-printing-rapid-prototyping" },
    { name: "Manufacturing / Prototyping", path: "/services/manufacturing-prototyping" },
    { name: "Product rendering & Animation", path: "/services/product-rendering-technical-animation" },
  ];

  return (
    <header ref={dropdownRef} className="w-full sticky top-0 z-50 bg-white shadow-md">

      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-gradient-to-r from-[#062a66] to-[#6ca3de] text-white text-sm py-2.5 px-6 flex justify-between items-center">

        {/* Left: Contact Info */}
        <div className="flex gap-6 font-semibold">
          <p>📞 +91-9876543210</p>
          <p>✉️ contact@makdesignsolutions.com</p>
        </div>

        {/* Right: Social Media (ACTIVE LINKS) */}
        <div className="flex gap-5 font-semibold">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-cyan-200 transition"
          >
            <FaLinkedinIn /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-pink-200 transition"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-blue-200 transition"
          >
            <FaFacebookF /> Facebook
          </a>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 relative">

        {/* Logo */}
        <Link to="/" className="w-28 h-10">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
          <Link to="/" className="hover:text-[#062a66]">Home</Link>
          <Link to="/about" className="hover:text-[#062a66]">About</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 hover:text-[#062a66]"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${openDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-2xl border border-gray-200 overflow-hidden">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-5 py-3.5 border-b border-gray-400 last:border-b-0
                               hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50
                               text-gray-700 hover:text-[#062a66] transition"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-[#062a66]">Blog</Link>
          <Link to="/contact" className="hover:text-[#062a66]">Contact</Link>

          {/* WhatsApp Button */}
          <a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-3 px-6 py-2.5 
             rounded-full bg-gradient-to-r from-green-500 to-green-600
             text-white font-semibold shadow-lg
             hover:shadow-xl hover:scale-105 transition-all duration-300"
>
  <FaWhatsapp className="text-2xl group-hover:rotate-12 transition" />
  <span>WhatsApp</span>
</a>

        </nav>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <Link to="/" className="block px-6 py-4 border-b">Home</Link>
            <Link to="/about" className="block px-6 py-4 border-b">About</Link>

            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-left px-6 py-4 border-b flex justify-between"
            >
              Services
              <ChevronDown />
            </button>

            {openDropdown === "services" &&
              services.map((service) => (
                <Link
                  key={service.name}
                  to={service.path}
                  className="block px-10 py-3 border-b last:border-b-0"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  {service.name}
                </Link>
              ))}

            <Link to="/blog" className="block px-6 py-4 border-b">Blog</Link>
            <Link to="/contact" className="block px-6 py-4">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
