"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-2 bg-black sticky top-0 border-b border-gray-900 backdrop-blur-xl z-50 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <img
            src="http://altibbe.com/wp-content/uploads/2024/09/Altibbe-final-logo-01.png"
            alt="Altibbe Logo"
            className="w-24 md:w-32"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                href="/hemado" 
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                HEMADO
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-white font-medium text-sm tracking-wide hover:text-blue-500 transition-colors duration-200"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
