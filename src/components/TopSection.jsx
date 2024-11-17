import React, { useState, useEffect } from "react";
import Technology from "../assets/images/waves.webp";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const TopSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#top-section");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src={Technology}
        className="absolute object-cover w-full h-full"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Navbar with dynamic background */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
          scrolled ? "bg-indigo-800" : "bg-transparent"
        }`}
      >
        <nav className="container px-6 py-4 mx-auto md:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">
              <a href="#" className="text-white">
                <svg
                  className="w-8 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Capa 1"
                  viewBox="0 0 16.16 12.57"
                >
                  <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                  <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                </svg>
              </a>

              {/* Hamburger Icon */}
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu visibility
                >
                  {isMenuOpen ? (
                    <AiOutlineClose className="w-8 h-8" />
                  ) : (
                    <AiOutlineMenu className="w-8 h-8" />
                  )}
                </button>
              </div>
            </div>

            {/* Navbar Links */}
            <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
              {[
                { href: "#top-section", label: "Home" },
                { href: "#features", label: "Features" },
                { href: "#weoffer", label: "We Offer" },
                { href: "#team", label: "Team" },
                { href: "#faqs", label: "FAQs" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block py-2 px-4 text-lg uppercase cursor-pointer transition-all duration-200 ${
                    activeLink === link.href
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-white hover:text-yellow-400 hover:scale-105"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40 mt-8">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <span className="font-bold text-5xl text-yellow-400 uppercase">
            <span className="text-yellow-500">G</span>
            <span className="text-indigo-600 text-6xl">Z</span>
            <span className="text-yellow-500">coders</span>
            <span className="text-blue-600">Hub</span>
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-7xl">
            The best investment is in yourself.
            <br />
            {/* Curiosity drives growth */}
          </h1>

          <a
            href="#"
            className="block px-4 py-3 mt-10 text-md font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
          >
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
