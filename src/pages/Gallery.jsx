import React from "react";

const totalImages = 52;
const images = Array.from({ length: totalImages }, (_, i) => `/img${i + 1}.jpeg`);

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 py-12 px-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900 tracking-wide">
        📸 Our Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-xl group"
          >
            {/* Image */}
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
