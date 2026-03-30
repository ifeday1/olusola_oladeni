import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "../assets/background.png";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });
  const [isRevealed, setIsRevealed] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPosition({ x, y });
    setIsRevealed(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsRevealed(false);
  }, []);

  // Dynamic clip-path for the revealing effect - larger reveal area
  const revealClipPath = isRevealed
    ? `circle(250px at ${cursorPosition.x}% ${cursorPosition.y}%)`
    : `circle(100px at ${cursorPosition.x}% ${cursorPosition.y}%)`;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image - Blurred by default, revealed by cursor */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          filter: isRevealed
            ? `blur(0px) brightness(${1 + (cursorPosition.x / 200)})`
            : 'blur(5px) brightness(10.7)',
          transform: isRevealed ? 'scale(1.02)' : 'scale(1.03)',
          transition: 'filter 0.2s ease-out, transform 0.2s ease-out',
        }}
      />

      {/* Spotlight reveal overlay - creates the unveiling effect on background */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none"
        style={{
          background: isRevealed
            ? `radial-gradient(circle 350px at ${cursorPosition.x}% ${cursorPosition.y}%, transparent 0%, rgba(0,0,0,0.85) 100%)`
            : 'rgba(0,0,0,0.9)',
          transition: 'background 0.2s ease-out',
        }}
      />

      {/* Gradient Overlay - Adds color tint */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-900/90 via-green-900/80 to-purple-900/90 z-[5]"
        style={{
          opacity: isRevealed ? 0.3 : 0.95,
          transition: 'opacity 0.2s ease-out',
        }}
      />

      {/* Hero Content - Always visible for better UX and clickable CTAs */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
              To influence and transform life holistically through
              strategic discipleship and equipment for a productive
              Christian life.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Through strategic discipleship and equipment, we are raising
              an army of kingdom transformers to impact this generation
              with the message of God's love and power.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/media" className="no-underline">
                <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-sm md:text-base uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-gray-900">
                  Watch Messages
                </button>
              </Link>
              <Link to="/contact" className="no-underline">
                <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white rounded-lg font-semibold text-sm md:text-base uppercase tracking-wide border-none transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
                  Book a Session
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center lg:justify-end ">
            <div className="relative">
              <img
                src={HeroImage}
                alt="Reverend Dr. Olusola Oladeni"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
