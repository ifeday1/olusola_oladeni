import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Pre1 from "../assets/p1.webp";
import Pre2 from "../assets/p2.webp";
import Pre3 from "../assets/p3.webp";
import Pre4 from "../assets/p4.webp";
import Feb1 from "../assets/feb1.jpg";
import Feb3 from "../assets/feb3.jpg";
import Feb4 from "../assets/feb4.jpg";

const ImageCarousel = () => {
  const slides = [
    { src: Pre1, title: "Session 1", date: "Jan 2023" },
    { src: Pre2, title: "Session 2", date: "Feb 2023" },
    { src: Pre3, title: "Session 3", date: "Mar 2023" },
    { src: Pre4, title: "Session 4", date: "Apr 2023" },
    { src: Feb1, title: "Session 5", date: "May 2023" },
    { src: Feb3, title: "Session 6", date: "Jun 2023" },
    { src: Feb4, title: "Session 7", date: "Jul 2023" },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    centerMode: false,
    swipeToSlide: true,
    draggable: true,
    prevArrow: (
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all z-10"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-3 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all z-10"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white py-10">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Premarital and Marital Matters
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-xl">
            Equipping couples and individuals with biblical wisdom for healthy, thriving relationships.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="px-2 outline-none">
                <img
                  src={slide.src}
                  alt={`session-${index + 1}`}
                  className=" object-cover rounded-[2rem] loading-lazy"
                />
                <div className="mt-4">
                  <h3 className="font-bold text-sm text-black">{slide.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{slide.date}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
