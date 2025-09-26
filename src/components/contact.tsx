"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 relative bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-black dark:via-neutral-950 dark:to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="h-[32rem] flex flex-col items-center justify-center antialiased bg-gray-50 dark:bg-black dark:bg-grid-white/[0.05] relative overflow-hidden">
          <div className="p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
            <header className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Contact Us
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                Have questions or need support? We're here for you. Reach out and
                let’s build a healthier future together.
              </p>
            </header>

            {/* Contact Info */}
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm md:text-base">
              <p className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" /> California, USA
              </p>
              <p className="flex items-center justify-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" /> +91-9614709999
              </p>
              <p className="flex items-center justify-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <a
                  href="mailto:corp@altibbe.com"
                  className="hover:underline hover:text-blue-600"
                >
                  corp@altibbe.com
                </a>
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 dark:border-neutral-700 my-6"></div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/altibb%C3%A9/"
                target="_blank"
                className="hover:text-blue-700 transition"
              >
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Youtube size={18} />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="p-10 rounded-3xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-xl">
          <header className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Join The Waitlist
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
              Join us in our mission for “Health for Humanity.” Whether you're
              looking for partnerships, health solutions, or advice, connect with
              us to make a difference.
            </p>
          </header>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="email" placeholder="E-mail" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Company" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Production location" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Brand name" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Geographical market" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Product description" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Production volume" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Annual revenue" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <input type="text" placeholder="Website" className="input text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />
            <textarea placeholder="Add your comment here" className="md:col-span-2 input h-28 text-sm border border-gray-700 rounded-xl p-3 hover:ring-1 hover:ring-blue-500 transition" />

            <button
              type="submit"
              className="md:col-span-2 mt-4 w-full bg-green-800 text-white py-3 rounded-lg hover:bg-emerald-900 transition text-sm font-medium shadow-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
