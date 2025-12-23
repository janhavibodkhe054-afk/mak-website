import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { img: "/1.jpg" },
  { img: "/2.jpg" },
  { img: "/3.jpg" },
  { img: "/4.jpg" },
  { img: "/5.jpg" },
  { img: "/6.jpg" },
  { img: "/7.jpg" },
  { img: "/8.jpg" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === slides.length - 1) {
        setIsTransition(false);
        setCurrent(0);
      } else {
        setIsTransition(true);
        setCurrent(prev => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const goToPrevious = () => {
    setIsTransition(true);
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsTransition(true);
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-[320px] md:h-[440px] overflow-hidden relative group">
      <div
        ref={slideRef}
        className={`flex h-full ${isTransition ? "transition-transform duration-[700ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              src={slide.img}
              className="w-full h-full object-content"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* DOT INDICATORS */}
     
    </div>
  );
}