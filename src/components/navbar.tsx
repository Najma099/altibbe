"use client";
import React from "react";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full px-6 py-2 bg-black sticky top-0 border-b border-gray-900 backdrop-blur-xl z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="http://altibbe.com/wp-content/uploads/2024/09/Altibbe-final-logo-01.png"
          alt="Altibbe Logo"
          className="w-24 md:w-32 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("hedamo")}
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                HEDAMO
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("blog")}
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                BLOG
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
