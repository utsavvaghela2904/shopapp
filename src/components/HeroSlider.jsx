import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    category: 'ACCESSORIES',
    title: 'Luxury Details',
    subtitle: 'ELEVATE YOUR EVERYDAY STYLE',
    cta: 'EXPLORE NOW'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    category: 'NEW COLLECTION',
    title: 'Autumn Essentials',
    subtitle: 'TIMELESS PIECES FOR YOUR WARDROBE',
    cta: 'DISCOVER MORE'
  },
  {
    image: 'https://media.alshaya.com/adobe/assets/urn:aaid:aem:9c0c881a-e2b9-4881-9c7e-bb8f040c0299/as/WS11K-3x2.jpg?preferwebp=true&width=750&format=jpg',
    category: 'WOMEN',
    title: 'Ready-to-Wear',
    subtitle: 'DISTINCTIVE PALETTE AND SILHOUETTES',
    cta: 'SHOP NOW'
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 750);
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 750);
  };

  return (

    <div className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center text-white">
              <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 delay-300 transform ${
                  currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                  <span className="block text-sm tracking-[0.3em] mb-4 font-light">
                    {slide.category}
                  </span>
                  <h1 className="text-5xl sm:text-7xl font-light mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-sm tracking-[0.2em] mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <button className="border border-white px-8 py-3 tracking-[0.2em] text-sm hover:bg-white hover:text-black transition-colors duration-300">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-[2px] transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  );
};