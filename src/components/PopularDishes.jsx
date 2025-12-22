import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      title: "Mechanical Product Design",
      desc: "Turning ideas into engineered, fully functional mechanical products.",
      image: "/s1.jpg",
      link: "/services/product-design-dva",
    },
    {
      title: "Reverse Engineering",
      desc: "Recreating and optimizing existing physical parts with precision.",
      image: "/s2.jpg",
      link: "/services/reverse-engineering",
    },
    {
      title: "3D Scanning & Product Benchmarking",
      desc: "Capturing accurate 3D data and comparing with design standards.",
      image: "/s3.jpg",
      link: "/services/3d-scanning-benchmarking",
    },
    {
      title: "CAD Data Conversion",
      desc: "Accurate conversion of CAD files across platforms with zero data loss.",
      image: "/s4.webp",
      link: "/services/cad-data-conversion",
    },
    {
      title: "Finite Element Analysis (FEA)",
      desc: "Digital simulation for stress, durability, vibration, and thermal testing.",
      image: "/s5.png",
      link: "/services/fea",
    },
    {
      title: "3D Printing / Rapid Prototyping",
      desc: "Fast, precise prototypes for concept validation and testing.",
      image: "/s6.jpg",
      link: "/services/3d-printing-rapid-prototyping",
    },
    {
      title: "Manufacturing / Prototyping",
      desc: "End–to–end product manufacturing with engineering accuracy.",
      image: "/s7.jpeg",
      link: "/services/manufacturing-prototyping",
    },
    {
      title: "Product Rendering",
      desc: "High-quality product visuals and animations for presentations.",
      image: "/s8.png",
      link: "/services/product-rendering-technical-animation",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-black">
          Our Services
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Transforming concepts into engineered solutions with precision,
          innovation, and speed.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md 
              hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>

                {/* Learn More Button */}
                <Link
                  to={service.link}
                  className="mt-4 mx-auto inline-block px-4 py-2 rounded-lg 
                  text-sm font-semibold text-white bg-[#062a66] 
                  hover:opacity-90 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
