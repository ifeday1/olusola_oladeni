import React from "react";
import { Link } from "react-router-dom";

import BackgroundImage from "../assets/background.png";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-900/90 via-green-900/80 to-purple-900/90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 md:py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center md:mt-20 ">
          {/* Text Section */}
          <div className="text-left lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8 md:mb-10">
              To influence and transform life holistically through strategic discipleship and equipment for a productive Christian life.
            </h1>

            <p className="text-lg sm:text-xl md:text-xl text-white/90 leading-relaxed mb-12 md:mb-16 max-w-xl lg:mx-0">
              Through strategic discipleship and equipment, we are raising
              an army of kingdom transformers to impact this generation
              with the message of God's love and power.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start">
              <a href="https://www.youtube.com/@OlusolaOladeni" target="_blank" rel="noopener noreferrer" className="no-underline">
                <button className="w-full sm:w-auto px-8 py-4 md:px-8 md:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base md:text-base uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-gray-900">
                  Watch Messages
                </button>
              </a>
              <Link to="/contact" className="no-underline">
                <button className="w-full sm:w-auto px-8 py-4 md:px-8 md:py-4 bg-green-600 text-white rounded-lg font-semibold text-base md:text-base uppercase tracking-wide border-none transition-all duration-300 hover:bg-green-700 hover:shadow-lg">
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
