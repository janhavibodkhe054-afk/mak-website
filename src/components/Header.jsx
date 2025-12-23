import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function NavbarCyan() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const services = [
    { name: "Mechanical Product Design", path: "/services/product-design-dva" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering" },
    { name: "3D Scanning & Product Benchmarking", path: "/services/3d-scanning-benchmarking" },
    { name: "CAD Data Conversion", path: "/services/cad-data-conversion" },
    { name: "Finite Element Analysis (FEA)", path: "/services/fea" },
    { name: "3D Printing / Rapid Prototyping", path: "/services/3d-printing-rapid-prototyping" },
    { name: "Manufacturing / Prototyping", path: "/services/manufacturing-prototyping" },
    { name: "Product Rendering & Animation", path: "/services/product-rendering-technical-animation" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 transition ${
      isActive
        ? "text-[#062a66] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#062a66]"
        : "text-gray-700 hover:text-[#062a66]"
    }`;

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={dropdownRef} className="w-full sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-[#062a66] to-[#6ca3de] text-white text-sm py-2.5 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-semibold text-center md:text-left">
          <p>📞 +91-9876543210</p>
          <p>✉️ contact@makdesignsolutions.com</p>
        </div>

        {/* Social Media Names */}
        <div className="flex flex-wrap gap-4 font-semibold justify-center md:justify-end">
          <span className="flex items-center gap-1 hover:text-cyan-200 transition">
            <FaLinkedinIn /> LinkedIn
          </span>
          <span className="flex items-center gap-1 hover:text-pink-200 transition">
            <FaInstagram /> Instagram
          </span>
          <span className="flex items-center gap-1 hover:text-blue-200 transition">
            <FaFacebookF /> Facebook
          </span>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white shadow-md px-4 sm:px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="w-28 h-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:flex gap-8 items-center font-semibold">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#062a66]"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "services" && (
              <div
                className="absolute left-1/2 top-full mt-3 w-[280px]
                -translate-x-1/2 bg-white rounded-lg shadow-xl
                border border-gray-100 z-50 overflow-hidden"
              >
                {services.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={() => setOpenDropdown(null)}
                    className="
                      block px-4 py-3 text-[14px] font-medium text-gray-700
                      border-b last:border-b-0
                      hover:bg-gray-50 hover:text-[#062a66]
                      transition
                    "
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* WhatsApp Button (NO integration) */}
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full
            bg-gradient-to-r from-green-500 to-green-600 text-white
            shadow-lg hover:scale-105 transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </button>
        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[104px] left-0 w-full h-[calc(100vh-104px)]
        bg-white z-[999] overflow-y-auto shadow-xl">

          {/* Close Button */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-red-500 transition"
            >
              <X size={28} />
            </button>
          </div>

          <NavLink
            to="/"
            className="block px-6 py-4 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block px-6 py-4 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className="block px-6 py-4 border-b"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className="block px-6 py-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>

          {/* WhatsApp Button (NO integration) */}
          <button
            type="button"
            className="flex items-center gap-3 px-6 py-3 m-6 rounded-full
            bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}
