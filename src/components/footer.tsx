"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-neutral-800 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-20">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-start">
          <img
            src="http://altibbe.com/wp-content/uploads/2024/09/Altibbe-final-logo-01.png"
            alt="Altibbe logo"
            className="w-40 mb-6"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            ©2024, Altibbe. All rights reserved.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Additional Menu
          </h3>
          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/new/hedamo" className="hover:text-blue-600 transition">Hedamo</a></li>
            <li><a href="https://altibbe.com/terms-and-conditions/" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
            <li><a href="https://altibbe.com/privacy-policy/" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="https://altibbe.com/social-media-disclaimer/" className="hover:text-blue-600 transition">Social Media Disclaimer</a></li>
            <li><a href="https://altibbe.com/cookie-policy/" className="hover:text-blue-600 transition">Cookie Policy</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contacts</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Get a Newsletter
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Stay updated with our latest insights, updates, and news. Subscribe to receive valuable content delivered straight to your inbox.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 bg-green-800 text-white rounded-lg text-sm hover:bg-emerald-900 transition shadow"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
