import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold tracking-wide text-white">
            MAK Design Solutions
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Innovative engineering, reliable solutions.
            We deliver product design, reverse engineering, prototyping &
            advanced 3D solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-green-500 inline-block pb-1 text-white">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-green-400 transition">
                About Us
              </Link>
            </li>

            {/* 👇 Services goes to FIRST service */}
            <li>
              <Link
                to="/services/product-design-dva"
                className="hover:text-green-400 transition"
              >
                Services
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-green-400 transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-green-500 inline-block pb-1 text-white">
            Services
          </h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/services/product-design-dva" className="hover:text-green-400">
                Mechanical Product Design
              </Link>
            </li>
            <li>
              <Link to="/services/reverse-engineering" className="hover:text-green-400">
                Reverse Engineering
              </Link>
            </li>
            <li>
              <Link to="/services/3d-scanning-benchmarking" className="hover:text-green-400">
                3D Scanning & Benchmarking
              </Link>
            </li>
            <li>
              <Link to="/services/cad-data-conversion" className="hover:text-green-400">
                CAD Data Conversion
              </Link>
            </li>
            <li>
              <Link to="/services/fea" className="hover:text-green-400">
                Finite Element Analysis
              </Link>
            </li>
            <li>
              <Link to="/services/3d-printing-rapid-prototyping" className="hover:text-green-400">
                3D Printing / Rapid Prototyping
              </Link>
            </li>
            <li>
              <Link to="/services/manufacturing-prototyping" className="hover:text-green-400">
                Manufacturing & Prototyping
              </Link>
            </li>
            <li>
              <Link to="/services/product-rendering-technical-animation" className="hover:text-green-400">
                Product Rendering & Animation
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91-XXXXXXXXXX</p>
            <p>✉️ hello@makdesign.in</p>
          </div>

          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-green-600 transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MAK Design Solutions. All Rights Reserved.
        <br />
        <span className="text-green-400">
          Designed by ArrayLogic Softwares Pvt. Ltd.
        </span>
      </div>
    </footer>
  );
}
