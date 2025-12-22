import React from "react";

export default function AboutInfo() {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-white to-[#f3f8ff]">

      {/* Wrapper Full Width */}
      <div className="
        w-full max-w-7xl mx-auto 
        
      ">

        {/* Stylish Card */}
        <div className="
          w-full 
          p-8 md:p-5 
          bg-white/70 backdrop-blur-md 
          rounded-2xl shadow-xl relative 
          border border-gray-200
        ">

          {/* Left Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#062a66] to-[#6ca3de] rounded-l-2xl"></div>

          {/* Gradient Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#062a66] to-[#6ca3de] rounded-t-2xl"></div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6  text-center tracking-wide">
            Engineering Innovation With Purpose
          </h2>

          <p className="text-[18px] leading-relaxed text-gray-700">
            We believe every product has a story. Our aim is to transform ideas
            into functional, cost-effective, and market-ready solutions.
            Combining advanced tools with skilled engineers, designers, and 3D
            specialists, we empower businesses to innovate faster, reduce risks,
            and gain a competitive edge.
          </p>

        </div>
      </div>
    </div>
  );
}
