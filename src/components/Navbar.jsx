import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import Logo from "../assets/logo.svg";

const Navbar = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);




  const closeMenu = () => setClick(false);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Books", path: "/books" },
    { name: "Articles", path: "/articles" },
    { name: "Feeds", path: "/feeds" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-16 md:h-20 bg-white shadow-md z-[9999] transition-all duration-300">
      <nav className="flex justify-between items-center h-full px-4 md:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={ScrollToTop}>
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-10 w-auto object-contain md:h-12 lg:h-14" 
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none items-center gap-6 xl:gap-8 m-0 p-0">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={link.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `relative text-gray-700 no-underline py-2 font-medium text-xs uppercase cursor-pointer transition-colors duration-300 tracking-wider hover:text-green-600 ${
                    isActive ? "text-green-600 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-green-600 text-white no-underline px-4 py-2 rounded-md font-medium text-xs tracking-wide transition-all duration-300 inline-block border-none cursor-pointer hover:bg-green-700 hover:shadow-md"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div 
          className="flex cursor-pointer p-2 lg:hidden" 
          onClick={handleClick}
        >
          {click ? (
            <FaTimes size={24} className="text-gray-800" />
          ) : (
            <FaBars size={24} className="text-gray-800" />
          )}
        </div>

        {/* Mobile Menu */}
        <ul className={`lg:hidden flex flex-col list-none fixed left-0 top-16 bg-white w-full h-screen justify-start pt-8 items-center transition-all duration-300 gap-6 shadow-xl z-[1000] ${click ? "translate-x-0" : "-translate-x-full"}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="my-1">
              <NavLink
                to={link.path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-lg px-6 py-2 no-underline text-gray-700 font-medium ${
                    isActive ? "text-green-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li className="mt-4">
            <Link
              to="/contact"
              className="bg-green-600 text-white no-underline px-8 py-3 rounded-md font-medium text-base inline-block text-center"
              onClick={closeMenu}
            >
              Book a Session
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
