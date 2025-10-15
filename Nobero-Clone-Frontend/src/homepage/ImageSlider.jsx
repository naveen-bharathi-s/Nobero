import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = () => {
  const images = [
    "https://nobero.com/cdn/shop/files/homepage_desk_2.jpg?v=1758533051",
    "https://nobero.com/cdn/shop/files/9_3207723a-6a51-4918-aac8-b628d75e86a4.jpg?v=1757658951",
    "https://nobero.com/cdn/shop/files/8_94112a61-404d-49e4-9bba-f5056a27e90a.jpg?v=1757659199",
    "https://nobero.com/cdn/shop/files/7_3e700370-8e65-40c5-8134-631266480c57.jpg?v=1757659083",
    "https://nobero.com/cdn/shop/files/6_636abc27-5f72-4bdb-9dc5-71b4ea9ad096.jpg?v=1757659295",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [images.length]);

  return (
    <section className="relative z-10 mx-auto my-6 max-w-6xl overflow-hidden lg:rounded-2xl shadow-lg">
      <div className="relative h-[10rem] md:h-[18rem] lg:h-[28rem]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Manual controls (still work) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg bg-white/80 p-2 text-black hover:bg-black/50 hover:text-white z-40"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-white/80 p-2 text-black hover:bg-black/50 hover:text-white z-40"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 w-3 rounded-full transition-colors ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
