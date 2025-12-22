import React from "react";

export default function WhyMakDesign() {
  const items = [
    {
      title: "Quality",
      desc: "Engineering solutions with precision.",
      image: "/q1.jpg",
    },
    {
      title: "Innovation",
      desc: "Future-ready technology adoption.",
      image: "/q2.jpg",
    },
    {
      title: "Expertise",
      desc: "Decades of industry knowledge.",
      image: "/q3.jpg",
    },
    {
      title: "Trust",
      desc: "Committed to client satisfaction.",
      image: "/q4.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black">
          Why MAK Design Solutions?
        </h2>

        <p className="mt-3 text-gray-600 text-lg">
          Innovation, trust, and expertise combined to deliver engineering solutions that last
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover transition-all duration-500
              group-hover:opacity-0 group-hover:scale-105"
            />

            {/* Text Overlay */}
            <div
              className="absolute inset-0 bg-black/80 opacity-0 
              group-hover:opacity-100 transition-all duration-500 
              flex flex-col justify-center items-center text-center px-4"
            >
              <h3 className="text-white text-xl font-semibold mb-1">
                {item.title}
              </h3>

              <p className="text-white text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
