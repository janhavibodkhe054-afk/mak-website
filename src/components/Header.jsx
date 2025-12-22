import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function NavbarCyan() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

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

  // Active underline for main links
  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition duration-300 ${
      isActive
        ? "text-[#062a66] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#062a66]"
        : "text-gray-700 hover:text-[#062a66]"
    }`;

  const isServicesActive = location.pathname.startsWith("/services");

  const services = [
    { name: "Mechanical Product Design", path: "/services/product-design-dva" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    {
      name: "3D scanning & Product Benchmarking",
      path: "/services/3d-scanning-benchmarking",
    },
    { name: "CAD data conversion", path: "/services/cad-data-conversion" },
    { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    {
      name: "3D Printing / Rapid prototyping",
      path: "/services/3d-printing-rapid-prototyping",
    },
    {
      name: "Manufacturing / Prototyping",
      path: "/services/manufacturing-prototyping",
    },
    {
      name: "Product rendering & Animation",
      path: "/services/product-rendering-technical-animation",
    },
  ];

  return (
    <header
      ref={dropdownRef}
      className="w-full sticky top-0 z-50 bg-white shadow-md"
    >
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-gradient-to-r from-[#062a66] to-[#6ca3de] text-white text-sm py-2.5 px-6 flex justify-between items-center">
        <div className="flex gap-6 font-semibold">
          <p>📞 +91-9876543210</p>
          <p>✉️ contact@makdesignsolutions.com</p>
        </div>

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
        <NavLink to="/" className="w-28 h-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </NavLink>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-2xl"
        >
          ☰
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex gap-8 items-center font-semibold">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          {/* SERVICES */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`relative pb-1 flex items-center gap-1 transition ${
                isServicesActive
                  ? "text-[#062a66] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#062a66]"
                  : "text-gray-700 hover:text-[#062a66]"
              }`}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-2xl border">
                {services.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className={({ isActive }) =>
                      `block px-5 py-3 border-b last:border-b-0 transition
                      ${
                        isActive
                          ? "bg-blue-50 text-[#062a66] font-semibold"
                          : "hover:bg-cyan-50 text-gray-700"
                      }`
                    }
                    onClick={() => setOpenDropdown(null)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          {/* WhatsApp Button (no integration) */}
          <button
            className="group flex items-center gap-3 px-6 py-2.5 rounded-full
              bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold
              shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl group-hover:rotate-12 transition" />
            <span>WhatsApp</span>
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <NavLink to="/" className="block px-6 py-4 border-b">
              Home
            </NavLink>
            <NavLink to="/about" className="block px-6 py-4 border-b">
              About
            </NavLink>

            <button
              onClick={() => toggleDropdown("services")}
              className={`w-full text-left px-6 py-4 border-b flex justify-between ${
                isServicesActive ? "text-[#062a66] font-semibold" : ""
              }`}
            >
              Services
              <ChevronDown />
            </button>

            {openDropdown === "services" &&
              services.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  className="block px-10 py-3 border-b last:border-b-0"
                  onClick={() => {
                    setOpenDropdown(null);
                    setMobileMenuOpen(false);
                  }}
                >
                  {service.name}
                </NavLink>
              ))}

            <NavLink to="/blog" className="block px-6 py-4 border-b">
              Blog
            </NavLink>
            <NavLink to="/contact" className="block px-6 py-4">
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
