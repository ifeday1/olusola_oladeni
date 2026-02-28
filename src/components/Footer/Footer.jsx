import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FaEnvelope, FaMap, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaChevronRight } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-6">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* About & Logo Section */}
          <div className="space-y-6">
            <Link to="/home" className="inline-block">
              <img src={Logo} alt="Olusola Oladeni" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm">
              To influence, build, and transform the total person. To facilitate life-changing programmes through teaching, training and counselling.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a 
                href="https://web.facebook.com/olusolaoladeniministries" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-lg" />
              </a>
              <a 
                href="https://instagram.com/olusola_oladeni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a 
                href="https://twitter.com/olusola_oladeni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a 
                href="https://youtube.com/@olusolaoladeni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-green-400 border-b border-green-400/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Me", path: "/about" },
                { name: "Books", path: "/books" },
                { name: "Articles", path: "/articles" },
                { name: "Media", path: "/media" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-xs text-green-500 group-hover:text-green-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-green-400 border-b border-green-400/30 pb-2">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/books" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaChevronRight className="text-xs text-green-500 group-hover:text-green-400 transition-colors" />
                  Book Purchase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaChevronRight className="text-xs text-green-500 group-hover:text-green-400 transition-colors" />
                  Counseling Services
                </Link>
              </li>
              <li>
                <Link to="/feeds" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaChevronRight className="text-xs text-green-500 group-hover:text-green-400 transition-colors" />
                  Social Media Feeds
                </Link>
              </li>
              <li>
                <Link to="/media" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaChevronRight className="text-xs text-green-500 group-hover:text-green-400 transition-colors" />
                  Video Messages
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-green-400 border-b border-green-400/30 pb-2">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="text-green-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs">Email</p>
                  <a href="mailto:oladeni2008@yahoo.com" className="text-gray-200 hover:text-green-400 transition-colors text-sm block">
                    oladeni2008@yahoo.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="text-green-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs">Phone</p>
                  <a href="tel:+2348034498307" className="text-gray-200 hover:text-green-400 transition-colors text-sm block">
                    +234 803 4498 307
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="text-green-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs">WhatsApp</p>
                  <a href="https://wa.me/2348034498307" className="text-gray-200 hover:text-green-400 transition-colors text-sm block">
                    Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMap className="text-green-400 text-sm" />
                </div>
                <div className="space-y-1">
                  <p className="text-gray-400 text-xs">Address</p>
                  <span className="text-gray-200 text-sm block">
                    5, Adebayo Adekoya Street,<br />
                    New Garage Bariga,<br />
                    Lagos, Nigeria
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Stay Updated
                </h3>
                <p className="text-green-100 text-sm">
                  Subscribe to receive inspiring messages and updates
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white w-full md:w-64"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 mt-10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Olusola Oladeni. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-gray-500 text-xs">
              Designed with <span className="text-green-500">♥</span> by{" "}
              <a
                href="https://web-portfilo-git-master-ifeday1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Ifeday Concepts
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
